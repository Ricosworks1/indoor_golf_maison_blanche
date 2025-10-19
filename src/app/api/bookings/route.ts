import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { calculatePrice } from '@/lib/pricing'
import { generateAccessToken } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, bayId, startTime, endTime } = body

    // Validate required fields
    if (!userId || !bayId || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if user exists and get founder status
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { founderStatus: true }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Check if bay exists and is available
    const bay = await prisma.bay.findUnique({
      where: { id: bayId }
    })

    if (!bay || !bay.isActive) {
      return NextResponse.json(
        { error: 'Bay not available' },
        { status: 400 }
      )
    }

    // Check for existing bookings in the same time slot
    const existingBooking = await prisma.booking.findFirst({
      where: {
        bayId,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        status: { not: 'CANCELLED' }
      }
    })

    if (existingBooking) {
      return NextResponse.json(
        { error: 'Time slot already booked' },
        { status: 409 }
      )
    }

    // Calculate pricing
    const startTimeDate = new Date(startTime)
    const basePrice = calculatePrice(startTimeDate)
    const isFounder = !!user.founderStatus?.isActive
    const discountRate = user.founderStatus?.discountRate || 0
    const discountApplied = isFounder ? basePrice * discountRate : 0
    const finalPrice = basePrice - discountApplied

    // Generate access token
    const accessToken = generateAccessToken()

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        userId,
        bayId,
        slotId: `slot-${Date.now()}`, // Generate unique slot ID
        startTime: startTimeDate,
        endTime: new Date(endTime),
        price: basePrice,
        discountApplied,
        finalPrice,
        status: 'CONFIRMED',
        accessToken,
        qrCodeData: null, // Will be generated when QR code is requested
      },
      include: {
        user: true,
        bay: true
      }
    })

    return NextResponse.json({
      success: true,
      booking: {
        id: booking.id,
        startTime: booking.startTime,
        endTime: booking.endTime,
        finalPrice: booking.finalPrice,
        accessToken: booking.accessToken,
        bay: booking.bay,
        user: {
          firstName: booking.user.firstName,
          lastName: booking.user.lastName
        }
      }
    })

  } catch (error) {
    console.error('Booking creation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')
    const bayId = searchParams.get('bayId')
    const date = searchParams.get('date')

    let whereClause: any = {}

    if (userId) {
      whereClause.userId = userId
    }

    if (bayId) {
      whereClause.bayId = bayId
    }

    if (date) {
      const startOfDay = new Date(date)
      startOfDay.setHours(0, 0, 0, 0)
      
      const endOfDay = new Date(date)
      endOfDay.setHours(23, 59, 59, 999)

      whereClause.startTime = {
        gte: startOfDay,
        lte: endOfDay
      }
    }

    const bookings = await prisma.booking.findMany({
      where: whereClause,
      include: {
        user: true,
        bay: true
      },
      orderBy: {
        startTime: 'asc'
      }
    })

    return NextResponse.json({
      success: true,
      bookings: bookings.map(booking => ({
        id: booking.id,
        startTime: booking.startTime,
        endTime: booking.endTime,
        status: booking.status,
        finalPrice: booking.finalPrice,
        bay: booking.bay,
        user: {
          firstName: booking.user.firstName,
          lastName: booking.user.lastName,
          email: booking.user.email
        }
      }))
    })

  } catch (error) {
    console.error('Bookings fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

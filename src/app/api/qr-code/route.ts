import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateQRCode, QRCodeData } from '@/lib/qrcode'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { bookingId } = body

    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      )
    }

    // Get booking details
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        user: true,
        bay: true
      }
    })

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    // Check if QR code already exists
    if (booking.qrCodeData) {
      return NextResponse.json({
        success: true,
        qrCode: booking.qrCodeData
      })
    }

    // Generate QR code data
    const qrData: QRCodeData = {
      bookingId: booking.id,
      accessToken: booking.accessToken!,
      startTime: booking.startTime.toISOString(),
      endTime: booking.endTime.toISOString(),
      bayName: booking.bay.name,
      timestamp: Date.now()
    }

    // Generate QR code
    const qrCodeDataURL = await generateQRCode(qrData)

    // Update booking with QR code data
    await prisma.booking.update({
      where: { id: bookingId },
      data: { qrCodeData: qrCodeDataURL }
    })

    // Log QR code generation
    await prisma.accessLog.create({
      data: {
        userId: booking.userId,
        bookingId: booking.id,
        accessToken: booking.accessToken!,
        action: 'QR_GENERATED',
        timestamp: new Date()
      }
    })

    return NextResponse.json({
      success: true,
      qrCode: qrCodeDataURL
    })

  } catch (error) {
    console.error('QR code generation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const bookingId = searchParams.get('bookingId')

    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID is required' },
        { status: 400 }
      )
    }

    // Get booking with QR code
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: {
        id: true,
        qrCodeData: true,
        startTime: true,
        endTime: true,
        bay: {
          select: {
            name: true
          }
        }
      }
    })

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    if (!booking.qrCodeData) {
      return NextResponse.json(
        { error: 'QR code not generated yet' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      qrCode: booking.qrCodeData,
      booking: {
        id: booking.id,
        startTime: booking.startTime,
        endTime: booking.endTime,
        bayName: booking.bay.name
      }
    })

  } catch (error) {
    console.error('QR code fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

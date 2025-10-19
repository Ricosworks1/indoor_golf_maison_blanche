import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const bays = await prisma.bay.findMany({
      where: {
        isActive: true
      },
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json({
      success: true,
      bays: bays.map((bay: any) => ({
        id: bay.id,
        name: bay.name,
        type: bay.type,
        isActive: bay.isActive
      }))
    })

  } catch (error) {
    console.error('Bays fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create seasons
  const peakSeason = await prisma.season.create({
    data: {
      name: 'Peak Season 2024',
      startDate: new Date('2024-10-01'),
      endDate: new Date('2024-04-30'),
      isActive: true,
    },
  })

  const lowSeason = await prisma.season.create({
    data: {
      name: 'Low Season 2024',
      startDate: new Date('2024-05-01'),
      endDate: new Date('2024-09-30'),
      isActive: false,
    },
  })

  console.log('✅ Seasons created')

  // Create bays
  const bays = await Promise.all([
    prisma.bay.create({
      data: {
        name: 'Simulator Bay 1',
        type: 'SIMULATOR',
        isActive: true,
      },
    }),
    prisma.bay.create({
      data: {
        name: 'Simulator Bay 2',
        type: 'SIMULATOR',
        isActive: true,
      },
    }),
    prisma.bay.create({
      data: {
        name: 'Simulator Bay 3',
        type: 'SIMULATOR',
        isActive: true,
      },
    }),
    prisma.bay.create({
      data: {
        name: 'Simulator Bay 4',
        type: 'SIMULATOR',
        isActive: true,
      },
    }),
    prisma.bay.create({
      data: {
        name: 'Simulator Bay 5',
        type: 'SIMULATOR',
        isActive: true,
      },
    }),
    prisma.bay.create({
      data: {
        name: 'Putting Bay',
        type: 'PUTTING',
        isActive: true,
      },
    }),
  ])

  console.log('✅ Bays created')

  // Create price rules
  const priceRules = await Promise.all([
    // Peak season rules
    prisma.priceRule.create({
      data: {
        season: 'PEAK',
        timeband: 'PEAK',
        price: 60,
        isActive: true,
      },
    }),
    prisma.priceRule.create({
      data: {
        season: 'PEAK',
        timeband: 'NIGHT',
        price: 30,
        isActive: true,
      },
    }),
    // Low season rules
    prisma.priceRule.create({
      data: {
        season: 'LOW_SEASON',
        timeband: 'PEAK',
        price: 60,
        isActive: true,
      },
    }),
    prisma.priceRule.create({
      data: {
        season: 'LOW_SEASON',
        timeband: 'NIGHT',
        price: 30,
        isActive: true,
      },
    }),
    prisma.priceRule.create({
      data: {
        season: 'LOW_SEASON',
        timeband: 'LOW_SEASON',
        price: 35,
        isActive: true,
      },
    }),
  ])

  console.log('✅ Price rules created')

  // Create sample users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '+33123456789',
      },
    }),
    prisma.user.create({
      data: {
        email: 'sarah.martin@example.com',
        firstName: 'Sarah',
        lastName: 'Martin',
        phone: '+33987654321',
      },
    }),
    prisma.user.create({
      data: {
        email: 'marcus.leblanc@example.com',
        firstName: 'Marcus',
        lastName: 'Leblanc',
        phone: '+33555666777',
      },
    }),
    prisma.user.create({
      data: {
        email: 'elena.kowalski@example.com',
        firstName: 'Elena',
        lastName: 'Kowalski',
        phone: '+33444555666',
      },
    }),
  ])

  console.log('✅ Users created')

  // Create founder status for some users
  const founderStatuses = await Promise.all([
    prisma.founderStatus.create({
      data: {
        userId: users[1].id,
        isActive: true,
        purchaseDate: new Date('2024-01-01'),
        membershipEnd: new Date('2026-01-01'),
        discountRate: 0.5,
        profitShareRate: 0.5,
        totalCredits: 1000,
      },
    }),
    prisma.founderStatus.create({
      data: {
        userId: users[2].id,
        isActive: true,
        purchaseDate: new Date('2024-01-15'),
        membershipEnd: new Date('2026-01-15'),
        discountRate: 0.5,
        profitShareRate: 0.5,
        totalCredits: 1000,
      },
    }),
    prisma.founderStatus.create({
      data: {
        userId: users[3].id,
        isActive: true,
        purchaseDate: new Date('2024-02-01'),
        membershipEnd: new Date('2026-02-01'),
        discountRate: 0.5,
        profitShareRate: 0.5,
        totalCredits: 1000,
      },
    }),
  ])

  console.log('✅ Founder statuses created')

  // Create sample bookings
  const bookings = await Promise.all([
    prisma.booking.create({
      data: {
        userId: users[0].id,
        bayId: bays[0].id,
        slotId: 'slot-1',
        startTime: new Date('2024-01-15T14:00:00Z'),
        endTime: new Date('2024-01-15T15:00:00Z'),
        price: 60,
        discountApplied: 0,
        finalPrice: 60,
        status: 'COMPLETED',
        accessToken: 'access-token-1',
        qrCodeData: 'qr-data-1',
      },
    }),
    prisma.booking.create({
      data: {
        userId: users[1].id,
        bayId: bays[1].id,
        slotId: 'slot-2',
        startTime: new Date('2024-01-15T16:00:00Z'),
        endTime: new Date('2024-01-15T17:00:00Z'),
        price: 60,
        discountApplied: 30,
        finalPrice: 30,
        status: 'CONFIRMED',
        accessToken: 'access-token-2',
        qrCodeData: 'qr-data-2',
      },
    }),
    prisma.booking.create({
      data: {
        userId: users[2].id,
        bayId: bays[5].id, // Putting bay
        slotId: 'slot-3',
        startTime: new Date('2024-01-15T18:00:00Z'),
        endTime: new Date('2024-01-15T19:00:00Z'),
        price: 30,
        discountApplied: 15,
        finalPrice: 15,
        status: 'CONFIRMED',
        accessToken: 'access-token-3',
        qrCodeData: 'qr-data-3',
      },
    }),
  ])

  console.log('✅ Bookings created')

  // Create sample credit ledger entries
  const creditEntries = await Promise.all([
    prisma.creditLedger.create({
      data: {
        userId: users[1].id,
        type: 'PURCHASE',
        amount: 1000,
        description: 'Founder membership purchase',
        referenceId: null,
      },
    }),
    prisma.creditLedger.create({
      data: {
        userId: users[1].id,
        type: 'DISCOUNT',
        amount: -30,
        description: 'Founder discount applied to booking',
        referenceId: bookings[1].id,
      },
    }),
    prisma.creditLedger.create({
      data: {
        userId: users[2].id,
        type: 'PURCHASE',
        amount: 1000,
        description: 'Founder membership purchase',
        referenceId: null,
      },
    }),
  ])

  console.log('✅ Credit ledger entries created')

  // Create system settings
  const systemSettings = await Promise.all([
    prisma.systemSettings.create({
      data: {
        key: 'FOUNDER_LIMIT',
        value: '100',
        description: 'Maximum number of founder memberships',
      },
    }),
    prisma.systemSettings.create({
      data: {
        key: 'BOOKING_BUFFER_MINUTES',
        value: '5',
        description: 'Buffer time between bookings in minutes',
      },
    }),
    prisma.systemSettings.create({
      data: {
        key: 'SLOT_DURATION_MINUTES',
        value: '55',
        description: 'Duration of each booking slot in minutes',
      },
    }),
    prisma.systemSettings.create({
      data: {
        key: 'QR_VALID_WINDOW_MINUTES',
        value: '20',
        description: 'QR code validity window (10 min before + 10 min after)',
      },
    }),
  ])

  console.log('✅ System settings created')

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

import { PrismaClient } from '@prisma/client'

const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// In demo mode, don't initialize Prisma (no database needed)
export const prisma = isDemoMode
  ? null as any // In demo mode, this won't be used
  : (globalForPrisma.prisma ??
    new PrismaClient({
      log: ['query'],
    }))

if (process.env.NODE_ENV !== 'production' && !isDemoMode) {
  globalForPrisma.prisma = prisma
}

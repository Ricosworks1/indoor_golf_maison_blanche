import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { MockProviders } from '@/components/mock-providers'
import { Toaster } from '@/components/ui/toaster'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maison Blanche Indoor Golf',
  description: 'Premium 24/7 automated golf booking platform',
  keywords: ['golf', 'indoor golf', 'simulator', 'booking', 'Maison Blanche'],
}

const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'
const ProviderComponent = isDemoMode ? MockProviders : Providers

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderComponent>
          <Navigation />
          {children}
          <Toaster />
        </ProviderComponent>
      </body>
    </html>
  )
}

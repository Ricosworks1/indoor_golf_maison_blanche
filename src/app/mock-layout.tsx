import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MockProviders } from '@/components/mock-providers'
import { Toaster } from '@/components/ui/toaster'
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maison Blanche Indoor Golf - Demo',
  description: 'Premium 24/7 automated golf booking platform - Demo Version',
  keywords: ['golf', 'indoor golf', 'simulator', 'booking', 'Maison Blanche', 'demo'],
}

export default function MockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MockProviders>
          <Navigation />
          <div className="bg-yellow-100 border-b border-yellow-300 text-center py-2">
            <p className="text-sm text-yellow-800">
              🎭 <strong>Demo Mode:</strong> This is a mockup version with simulated data. No real payments or bookings will be processed.
            </p>
          </div>
          {children}
          <Toaster />
        </MockProviders>
      </body>
    </html>
  )
}

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Star, Users, Zap, Euro, QrCode } from 'lucide-react'
import Link from 'next/link'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-50 to-white">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">🎭 Demo Deployment</h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            This is a fully functional demo of the Maison Blanche Indoor Golf platform. 
            All features work with simulated data - no real payments or bookings are processed.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-golf-600 to-golf-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Maison Blanche
              <span className="block text-golf-200">Indoor Golf</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-golf-100">
              Premium 24/7 automated golf experience with cutting-edge simulators and putting greens. 
              Book your slot anytime, anywhere.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/demo/book">
                <Button size="lg" className="bg-white text-golf-600 hover:bg-golf-50">
                  Try Booking System
                </Button>
              </Link>
              <Link href="/demo/membership">
                <Button size="lg" variant="golfOutline" className="border-white text-white hover:bg-white/10">
                  View Membership Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Demo Features
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Explore all the features of our platform with simulated data and functionality.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calendar className="h-8 w-8 text-golf-600" />
                <CardTitle>Live Booking System</CardTitle>
                <CardDescription>
                  Experience the full booking flow with real-time availability and dynamic pricing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/demo/book">
                  <Button variant="golf" className="w-full">
                    Try Booking
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Euro className="h-8 w-8 text-golf-600" />
                <CardTitle>Payment Integration</CardTitle>
                <CardDescription>
                  Simulated Stripe checkout process for bookings and memberships.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/demo/membership">
                  <Button variant="golf" className="w-full">
                    View Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <QrCode className="h-8 w-8 text-golf-600" />
                <CardTitle>QR Code Access</CardTitle>
                <CardDescription>
                  Generate and view QR codes for facility access (simulated).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/demo/admin">
                  <Button variant="golf" className="w-full">
                    Admin Dashboard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-600" />
                <CardTitle>User Authentication</CardTitle>
                <CardDescription>
                  Sign up and sign in functionality with demo user accounts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/demo/auth/signin">
                  <Button variant="golf" className="w-full">
                    Try Auth
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Star className="h-8 w-8 text-golf-600" />
                <CardTitle>Founder Program</CardTitle>
                <CardDescription>
                  Explore the exclusive founder benefits and ROI calculator.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/demo/founders-offer">
                  <Button variant="golf" className="w-full">
                    Founder Offer
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-golf-600" />
                <CardTitle>Admin Analytics</CardTitle>
                <CardDescription>
                  View utilization heatmaps, revenue analytics, and user management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/demo/admin">
                  <Button variant="golf" className="w-full">
                    View Analytics
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Data Info */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Demo Data Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <Users className="h-12 w-12 text-golf-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Sample Users</h3>
                  <p className="text-gray-600 text-sm">
                    3 demo users including 2 founders with different benefit levels
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <MapPin className="h-12 w-12 text-golf-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">All Bays</h3>
                  <p className="text-gray-600 text-sm">
                    5 simulator bays + 1 putting bay with realistic availability
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <Clock className="h-12 w-12 text-golf-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Sample Bookings</h3>
                  <p className="text-gray-600 text-sm">
                    Pre-populated bookings with QR codes and different pricing tiers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-golf-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Go Live?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-golf-100">
            This demo showcases all the features. When ready for production, 
            we'll integrate with real Supabase database and Stripe payments.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-white text-golf-600 hover:bg-golf-50">
              Start Full Deployment
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, MapPin, Star, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-50 to-white">
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
              <Link href="/book">
                <Button size="lg" className="bg-white text-golf-600 hover:bg-golf-50">
                  Book Now
                </Button>
              </Link>
              <Link href="/membership">
                <Button size="lg" variant="golfOutline" className="border-white text-white hover:bg-white/10">
                  View Membership
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Maison Blanche?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Experience the future of indoor golf with our premium facilities and seamless booking system.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-golf-600" />
                <CardTitle>24/7 Access</CardTitle>
                <CardDescription>
                  Play anytime with our automated booking system. No staff needed, just book and play.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-golf-600" />
                <CardTitle>5 Premium Simulators</CardTitle>
                <CardDescription>
                  State-of-the-art golf simulators with the latest technology for an authentic experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-golf-600" />
                <CardTitle>1 Putting Bay</CardTitle>
                <CardDescription>
                  Perfect your short game on our dedicated putting green with precision tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Star className="h-8 w-8 text-golf-600" />
                <CardTitle>Dynamic Pricing</CardTitle>
                <CardDescription>
                  Flexible pricing based on time and season. Better rates for off-peak hours.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-golf-600" />
                <CardTitle>Founders Program</CardTitle>
                <CardDescription>
                  Exclusive benefits for founding members including 50% lifetime discount and profit sharing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calendar className="h-8 w-8 text-golf-600" />
                <CardTitle>Easy Booking</CardTitle>
                <CardDescription>
                  Simple online booking with instant QR code access. No hassle, just golf.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Flexible Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Dynamic rates that adapt to demand and season for maximum value.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-golf-600">Peak Hours</CardTitle>
                <div className="text-3xl font-bold">€60/hr</div>
                <CardDescription>
                  06:00–22:00<br />
                  Oct–Apr
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg ring-2 ring-golf-600">
              <CardHeader>
                <CardTitle className="text-golf-600">Night Hours</CardTitle>
                <div className="text-3xl font-bold">€30/hr</div>
                <CardDescription>
                  22:00–06:00<br />
                  Year-round
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-golf-600">Low Season</CardTitle>
                <div className="text-3xl font-bold">€35/hr</div>
                <CardDescription>
                  12:00–18:00<br />
                  May–Sep
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/pricing">
              <Button size="lg" variant="golf">
                View Full Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-golf-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Play?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-golf-100">
            Book your slot today and experience premium indoor golf like never before.
          </p>
          <div className="mt-8">
            <Link href="/book">
              <Button size="lg" className="bg-white text-golf-600 hover:bg-golf-50">
                Start Booking
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

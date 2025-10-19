import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Crown, Euro, Star, Users, Zap, Calendar, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function FoundersOfferPage() {
  const founderBenefits = [
    {
      icon: <Euro className="h-6 w-6 text-yellow-600" />,
      title: "Lifetime 50% Discount",
      description: "Enjoy 50% off all booking rates for life, with no expiration date."
    },
    {
      icon: <Calendar className="h-6 w-6 text-yellow-600" />,
      title: "2 Years Free Membership",
      description: "Included in your founder package - no monthly fees for 24 months."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-yellow-600" />,
      title: "Profit Share Eligibility",
      description: "Receive up to 50% of your membership fees back annually as profit share."
    },
    {
      icon: <Crown className="h-6 w-6 text-yellow-600" />,
      title: "Exclusive Founder Status",
      description: "Special recognition and priority access to all new features and events."
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Priority Booking Access",
      description: "Book any slot 48 hours before general public availability."
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: "Founder Events & Networking",
      description: "Exclusive events, tournaments, and networking opportunities."
    }
  ]

  const investmentBreakdown = [
    { label: "Founder Package", amount: 1000, description: "One-time payment" },
    { label: "2 Years Free Membership", amount: -4776, description: "€199 × 24 months" },
    { label: "Lifetime 50% Discount", amount: "∞", description: "Ongoing savings" },
    { label: "Profit Share Potential", amount: "∞", description: "Annual distributions" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-golf-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Crown className="h-16 w-16 text-yellow-200" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Founder Program
              <span className="block text-yellow-200">Exclusive Offer</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-yellow-100">
              Be part of Maison Blanche history. Only 100 founder memberships available 
              with lifetime benefits and exclusive privileges.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-yellow-50 font-semibold">
                Secure Your Founder Status
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability */}
      <section className="py-12 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Users className="h-8 w-8" />
            <h2 className="text-2xl font-bold">Limited to 100 Founders</h2>
          </div>
          <p className="text-lg">
            Only 47 founder memberships remaining. Secure your lifetime benefits today.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Founder Benefits
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Exclusive privileges that grow with your golf journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founderBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {benefit.icon}
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Breakdown */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Investment Breakdown
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See the incredible value of your founder investment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>One-Time Investment</CardTitle>
                  <CardDescription>€1,000 founder package includes:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {investmentBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          {typeof item.amount === 'number' ? (
                            item.amount < 0 ? (
                              <span className="text-green-600">-€{Math.abs(item.amount)}</span>
                            ) : (
                              <span>€{item.amount}</span>
                            )
                          ) : (
                            <span className="text-gold-600">{item.amount}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-center">ROI Calculator</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-yellow-600 mb-2">€4,776</div>
                    <div className="text-gray-600">Immediate Value (2 years free membership)</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-green-600 mb-2">€30,000+</div>
                    <div className="text-gray-600">Lifetime Savings (50% discount)</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">€10,000+</div>
                    <div className="text-gray-600">Profit Share Potential</div>
                  </div>
                  <div className="border-t pt-6">
                    <div className="text-2xl font-bold text-gray-900 mb-2">€44,776+</div>
                    <div className="text-gray-600">Total Value</div>
                    <div className="text-sm text-green-600 font-semibold mt-2">
                      4,377% ROI on €1,000 investment
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Founders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The founder program is incredible value. I've already saved more than my initial investment 
                  in just 6 months of regular play."
                </p>
                <div className="font-semibold">- Sarah M.</div>
                <div className="text-sm text-gray-500">Founder #12</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Being a founder means I'm part of something special. The exclusive events and 
                  networking opportunities are worth every euro."
                </p>
                <div className="font-semibold">- Marcus L.</div>
                <div className="text-sm text-gray-500">Founder #8</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The profit share program is amazing. I'm literally getting paid to play golf 
                  while improving my game."
                </p>
                <div className="font-semibold">- Elena K.</div>
                <div className="text-sm text-gray-500">Founder #23</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-yellow-600 to-orange-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Become a Founder?
          </h2>
          <p className="mt-4 text-lg text-yellow-100 max-w-2xl mx-auto">
            Join the exclusive group of Maison Blanche founders and secure your lifetime benefits today. 
            Only 47 spots remaining.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-yellow-50 font-semibold">
              Secure Founder Status - €1,000
            </Button>
          </div>
          <p className="mt-4 text-sm text-yellow-200">
            One-time payment • Lifetime benefits • No recurring fees
          </p>
        </div>
      </section>
    </div>
  )
}

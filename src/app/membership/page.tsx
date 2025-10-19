import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Crown, Euro, Star, Users } from 'lucide-react'
import Link from 'next/link'

export default function MembershipPage() {
  const features = [
    'Priority booking access',
    'Exclusive member rates',
    'Monthly credit allocation',
    'Special events access',
    'Locker room privileges',
    'Equipment discounts'
  ]

  const founderBenefits = [
    'Lifetime 50% discount on all rates',
    '2 years free membership included',
    'Profit-share eligibility (up to 50%)',
    'Exclusive founder events',
    'Priority access to new features',
    'Lifetime membership status'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Membership Plans
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect membership plan for your golf journey. 
            From casual play to premium experiences, we have something for everyone.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Standard Membership */}
          <Card className="relative border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Standard</CardTitle>
              <CardDescription>Perfect for regular players</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">€99</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-golf-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">
                Choose Standard
              </Button>
            </CardContent>
          </Card>

          {/* Premium Membership */}
          <Card className="relative border-0 shadow-lg ring-2 ring-golf-600">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-golf-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-golf-600" />
                Premium
              </CardTitle>
              <CardDescription>For the serious golfer</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">€199</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-golf-600" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-golf-600" />
                  <span className="text-sm">15% additional discount</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-golf-600" />
                  <span className="text-sm">Monthly coaching session</span>
                </li>
              </ul>
              <Button className="w-full" variant="golf">
                Choose Premium
              </Button>
            </CardContent>
          </Card>

          {/* Founder Membership */}
          <Card className="relative border-0 shadow-lg bg-gradient-to-br from-gold-50 to-yellow-50">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Crown className="h-3 w-3" />
                Founder
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Crown className="h-5 w-5 text-yellow-600" />
                Founder
              </CardTitle>
              <CardDescription>Exclusive founding member benefits</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">€1,000</span>
                <span className="text-gray-500"> one-time</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {founderBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link href="/founders-offer">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                  View Founder Offer
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Founder Spotlight */}
        <div className="bg-gradient-to-r from-gold-100 to-yellow-100 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <Crown className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Limited Time: Founder Program
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Be part of Maison Blanche history with our exclusive founder program. 
              Only 100 founder memberships available with lifetime benefits.
            </p>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">50%</div>
                <div className="text-sm text-gray-600">Lifetime Discount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">€1,000</div>
                <div className="text-sm text-gray-600">One-time Payment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">2 Years</div>
                <div className="text-sm text-gray-600">Free Membership</div>
              </div>
            </div>
            <Link href="/founders-offer">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                Learn More About Founders
              </Button>
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Membership FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I change my membership plan?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, you can upgrade or downgrade your membership at any time. 
                Changes take effect at the next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Are there any setup fees?
              </h3>
              <p className="text-gray-600 text-sm">
                No setup fees for Standard and Premium memberships. 
                Founder memberships require a one-time payment of €1,000.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes, you can cancel your membership at any time. 
                You'll continue to have access until the end of your billing period.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Do memberships include equipment?
              </h3>
              <p className="text-gray-600 text-sm">
                Basic equipment is included with all sessions. 
                Premium and Founder members get access to premium equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

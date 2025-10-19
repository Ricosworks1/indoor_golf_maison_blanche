import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Euro, Star, Calendar, Zap } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Peak Hours',
      price: 60,
      period: 'per hour',
      description: 'Premium rates for prime time',
      timeRange: '06:00–22:00',
      season: 'Oct–Apr',
      features: [
        'Full simulator access',
        'Premium equipment',
        'Priority support',
        'Locker access'
      ],
      popular: false
    },
    {
      name: 'Night Hours',
      price: 30,
      period: 'per hour',
      description: 'Best value for night owls',
      timeRange: '22:00–06:00',
      season: 'Year-round',
      features: [
        'Full simulator access',
        'Standard equipment',
        '24/7 facility access',
        'Quiet environment'
      ],
      popular: true
    },
    {
      name: 'Low Season',
      price: 35,
      period: 'per hour',
      description: 'Summer midday special',
      timeRange: '12:00–18:00',
      season: 'May–Sep',
      features: [
        'Full simulator access',
        'Standard equipment',
        'Air conditioning',
        'Extended daylight'
      ],
      popular: false
    }
  ]

  const membershipPlans = [
    {
      name: 'Standard',
      price: 99,
      period: 'per month',
      description: 'Perfect for regular players',
      features: [
        'Priority booking access',
        '10% member discount',
        'Monthly credit allocation',
        'Special events access',
        'Locker room privileges'
      ],
      cta: 'Choose Standard'
    },
    {
      name: 'Premium',
      price: 199,
      period: 'per month',
      description: 'For the serious golfer',
      features: [
        'All Standard benefits',
        '15% additional discount',
        'Monthly coaching session',
        'Premium equipment access',
        'VIP event invitations'
      ],
      cta: 'Choose Premium',
      popular: true
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Pricing & Plans
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent, dynamic pricing designed to give you the best value. 
            Choose from flexible hourly rates or comprehensive membership plans.
          </p>
        </div>

        {/* Hourly Pricing */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Hourly Rates
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Dynamic pricing based on time and season for maximum flexibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <Card 
                key={tier.name} 
                className={`relative border-0 shadow-lg ${
                  tier.popular ? 'ring-2 ring-golf-600' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-golf-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-golf-600">€{tier.price}</span>
                    <span className="text-gray-500"> {tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Time:</span>
                      <span className="font-medium">{tier.timeRange}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Season:</span>
                      <span className="font-medium">{tier.season}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-golf-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/book">
                    <Button 
                      className="w-full" 
                      variant={tier.popular ? "golf" : "outline"}
                    >
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Membership Plans */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Membership Plans
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Save more with monthly memberships and exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {membershipPlans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative border-0 shadow-lg ${
                  plan.popular ? 'ring-2 ring-golf-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-golf-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
                    <span className="text-gray-500"> {plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-golf-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/membership">
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "golf" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Calculator */}
        <section className="mb-24">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-golf-600" />
                Pricing Calculator
              </CardTitle>
              <CardDescription>
                See how much you can save with different plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Calendar className="h-8 w-8 text-golf-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">4 Hours/Week</h3>
                  <div className="space-y-2 text-sm">
                    <div>Peak: €240/week</div>
                    <div>Night: €120/week</div>
                    <div className="font-semibold text-golf-600">Standard: €99/month</div>
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Clock className="h-8 w-8 text-golf-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">8 Hours/Week</h3>
                  <div className="space-y-2 text-sm">
                    <div>Peak: €480/week</div>
                    <div>Night: €240/week</div>
                    <div className="font-semibold text-golf-600">Premium: €199/month</div>
                  </div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Star className="h-8 w-8 text-golf-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Founder Benefits</h3>
                  <div className="space-y-2 text-sm">
                    <div>50% lifetime discount</div>
                    <div>2 years free membership</div>
                    <div className="font-semibold text-gold-600">€1,000 one-time</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Pricing FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">How does dynamic pricing work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our pricing automatically adjusts based on time of day and season. 
                  Peak hours (6 AM - 10 PM, Oct-Apr) are €60/hour, night hours (10 PM - 6 AM) 
                  are €30/hour year-round, and low season midday (12 PM - 6 PM, May-Sep) 
                  are €35/hour.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel my membership?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can cancel your membership at any time. You'll continue to have 
                  access until the end of your billing period. No cancellation fees apply.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What's included in the hourly rate?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Each booking includes access to the simulator or putting bay, basic equipment, 
                  and facility amenities. Premium equipment is available for an additional fee 
                  or included with Premium membership.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Do founder discounts apply to all rates?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Founder members receive a 50% discount on all hourly rates, regardless 
                  of time or season. This applies to both simulator and putting bay bookings.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

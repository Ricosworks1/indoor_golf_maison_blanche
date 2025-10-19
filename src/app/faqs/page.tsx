import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HelpCircle, Clock, Euro, MapPin, Users, Zap, QrCode, Star } from 'lucide-react'

export default function FAQsPage() {
  const faqCategories = [
    {
      icon: <Clock className="h-6 w-6 text-golf-600" />,
      title: "Booking & Scheduling",
      faqs: [
        {
          question: "How far in advance can I book?",
          answer: "Can I cancel my booking? You can book up to 30 days in advance. Founder members get priority booking access 48 hours before general availability."
        },
        {
          question: "Can I cancel my booking?",
          answer: "Yes, you can cancel your booking up to 24 hours before your scheduled time for a full refund. Cancellations within 24 hours are subject to a 50% cancellation fee."
        },
        {
          question: "What happens if I'm late?",
          answer: "Your booking time cannot be extended if you arrive late. Please arrive 5-10 minutes early to ensure you get the full time slot."
        },
        {
          question: "Can I extend my booking time?",
          answer: "Extensions are subject to availability. You can request an extension through the app, and we'll charge you for the additional time at the current rate."
        }
      ]
    },
    {
      icon: <Euro className="h-6 w-6 text-golf-600" />,
      title: "Pricing & Payments",
      faqs: [
        {
          question: "How does dynamic pricing work?",
          answer: "Our pricing automatically adjusts based on time of day and season. Peak hours (6 AM - 10 PM, Oct-Apr) are €60/hour, night hours (10 PM - 6 AM) are €30/hour year-round, and low season midday (12 PM - 6 PM, May-Sep) are €35/hour."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers. Payment is required at the time of booking."
        },
        {
          question: "Do you offer group discounts?",
          answer: "Yes, we offer group discounts for bookings of 4 or more people. Contact us for custom pricing for large groups or corporate events."
        },
        {
          question: "What's included in the hourly rate?",
          answer: "Each booking includes access to the simulator or putting bay, basic equipment (clubs, balls), and facility amenities. Premium equipment is available for an additional fee."
        }
      ]
    },
    {
      icon: <QrCode className="h-6 w-6 text-golf-600" />,
      title: "Access & Technology",
      faqs: [
        {
          question: "How does the QR code access work?",
          answer: "After booking, you'll receive a QR code via email and app. This code is valid 10 minutes before your booking time and remains active for 10 minutes after your session ends. Simply scan at the facility entrance."
        },
        {
          question: "What if my QR code doesn't work?",
          answer: "If your QR code isn't working, contact our support team immediately. We can generate a new access code or provide alternative access methods."
        },
        {
          question: "Is the facility truly 24/7?",
          answer: "Yes, our facility operates 24/7 with automated access. No staff is required on-site, and you can book and access the facility at any time."
        },
        {
          question: "What technology do the simulators use?",
          answer: "We use state-of-the-art golf simulators with high-speed cameras, advanced tracking technology, and realistic course simulations from around the world."
        }
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-golf-600" />,
      title: "Membership & Founders",
      faqs: [
        {
          question: "What are the benefits of membership?",
          answer: "Members get priority booking access, exclusive discounts, monthly credit allocations, special events access, and locker room privileges. Premium members also get coaching sessions and VIP event invitations."
        },
        {
          question: "What's the founder program?",
          answer: "The founder program offers lifetime 50% discount on all rates, 2 years free membership, profit-share eligibility, exclusive events, and priority access to new features. Limited to 100 members at €1,000 one-time payment."
        },
        {
          question: "How does profit sharing work?",
          answer: "Founder members are eligible for profit sharing, receiving up to 50% of their membership fees back annually based on facility performance and their usage patterns."
        },
        {
          question: "Can I upgrade my membership?",
          answer: "Yes, you can upgrade your membership at any time. The upgrade takes effect immediately, and you'll be charged the prorated difference for the remainder of your billing cycle."
        }
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-golf-600" />,
      title: "Facility & Equipment",
      faqs: [
        {
          question: "What equipment is provided?",
          answer: "We provide golf clubs, balls, tees, and basic accessories. Premium equipment is available for an additional fee or included with Premium/Founder memberships."
        },
        {
          question: "Do you have lessons or coaching?",
          answer: "Yes, we offer individual and group lessons with certified golf instructors. Premium members receive one free coaching session per month."
        },
        {
          question: "Can I bring my own clubs?",
          answer: "Absolutely! You're welcome to bring your own clubs. We also have club storage options available for members."
        },
        {
          question: "Is there parking available?",
          answer: "Yes, we have free parking available for all guests. Reserved parking spaces are available for Premium and Founder members."
        }
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-golf-600" />,
      title: "Technical Support",
      faqs: [
        {
          question: "What if the simulator malfunctions?",
          answer: "If you encounter technical issues, contact our support team immediately. We'll provide alternative arrangements or full refunds for technical problems."
        },
        {
          question: "How do I contact support?",
          answer: "You can reach our support team via the app, email (support@maisonblanchegolf.com), or phone. We provide 24/7 technical support."
        },
        {
          question: "Is there a mobile app?",
          answer: "Yes, we have a mobile app available for iOS and Android. The app allows you to book sessions, access QR codes, track your progress, and manage your membership."
        },
        {
          question: "How do I track my golf statistics?",
          answer: "All your sessions are automatically tracked and stored in your profile. You can view detailed statistics, progress over time, and compare with other players through the app."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <HelpCircle className="h-16 w-16 text-golf-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about booking, pricing, membership, and our facility. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-8">
                {category.icon}
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.faqs.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-golf-600 to-golf-700 text-white">
            <CardContent className="text-center py-12">
              <Star className="h-12 w-12 text-golf-200 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-golf-100 mb-6 max-w-2xl mx-auto">
                Our support team is here to help you 24/7. Get in touch with any questions 
                about bookings, membership, or technical support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@maisonblanchegolf.com"
                  className="bg-white text-golf-600 px-6 py-3 rounded-lg font-semibold hover:bg-golf-50 transition-colors"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+33123456789"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-golf-600 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

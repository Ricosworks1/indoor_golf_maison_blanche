import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for support, bookings, or general inquiries. 
            We're here to help make your golf experience exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-golf-600" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Maison Blanche Indoor Golf</h3>
                    <p className="text-gray-600">
                      123 Golf Avenue<br />
                      75001 Paris, France
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>24/7 Automated Access</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-golf-600" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">General Inquiries</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Technical Support</h3>
                    <p className="text-gray-600">+33 1 23 45 67 90</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Available 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-golf-600" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">General Support</h3>
                    <p className="text-gray-600">info@maisonblanchegolf.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Technical Issues</h3>
                    <p className="text-gray-600">support@maisonblanchegolf.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Membership</h3>
                    <p className="text-gray-600">membership@maisonblanchegolf.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Founder Program</h3>
                    <p className="text-gray-600">founders@maisonblanchegolf.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-golf-600" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-golf-500 focus:outline-none focus:ring-1 focus:ring-golf-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-golf-500 focus:outline-none focus:ring-1 focus:ring-golf-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-golf-500 focus:outline-none focus:ring-1 focus:ring-golf-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-golf-500 focus:outline-none focus:ring-1 focus:ring-golf-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-golf-500 focus:outline-none focus:ring-1 focus:ring-golf-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="membership">Membership Question</option>
                      <option value="technical">Technical Support</option>
                      <option value="founder">Founder Program</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-golf-500 focus:outline-none focus:ring-1 focus:ring-golf-500"
                      placeholder="Please describe your inquiry in detail..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" variant="golf">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-golf-600 mx-auto mb-2" />
                <CardTitle className="text-lg">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our automated system and support team are available around the clock 
                  to assist with any questions or issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-golf-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Quick Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours, often much sooner. 
                  Priority support for members and founders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-golf-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Multiple Channels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reach us via phone, email, or through our mobile app. 
                  Choose the communication method that works best for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

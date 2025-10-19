"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, Euro, MapPin, QrCode } from 'lucide-react'
import { formatDate, formatTime, formatCurrency, getBookingSlotTimes, addMinutes } from '@/lib/utils'
import { calculatePrice, getPriceBreakdown } from '@/lib/pricing'
import { useAuth } from '@/components/providers'

interface Bay {
  id: string
  name: string
  type: 'SIMULATOR' | 'PUTTING'
  isActive: boolean
}

interface TimeSlot {
  id: string
  startTime: Date
  endTime: Date
  price: number
  isAvailable: boolean
  bayId: string
  bay: Bay
}

export default function BookPage() {
  const { user } = useAuth()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedBay, setSelectedBay] = useState<string>('')
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [loading, setLoading] = useState(false)

  // Mock bays data - in real app, fetch from API
  const bays: Bay[] = [
    { id: '1', name: 'Simulator Bay 1', type: 'SIMULATOR', isActive: true },
    { id: '2', name: 'Simulator Bay 2', type: 'SIMULATOR', isActive: true },
    { id: '3', name: 'Simulator Bay 3', type: 'SIMULATOR', isActive: true },
    { id: '4', name: 'Simulator Bay 4', type: 'SIMULATOR', isActive: true },
    { id: '5', name: 'Simulator Bay 5', type: 'SIMULATOR', isActive: true },
    { id: '6', name: 'Putting Bay', type: 'PUTTING', isActive: true },
  ]

  // Generate time slots for selected date and bay
  useEffect(() => {
    if (!selectedBay) return

    const slots: TimeSlot[] = []
    const startOfDay = new Date(selectedDate)
    startOfDay.setHours(0, 0, 0, 0)

    // Generate slots every hour from 6 AM to 11 PM
    for (let hour = 6; hour < 23; hour++) {
      const slotStart = new Date(startOfDay)
      slotStart.setHours(hour, 0, 0, 0)
      
      const slotEnd = addMinutes(slotStart, 55) // 55-minute slot
      const price = calculatePrice(slotStart)
      
      slots.push({
        id: `${selectedBay}-${hour}`,
        startTime: slotStart,
        endTime: slotEnd,
        price,
        isAvailable: Math.random() > 0.3, // Mock availability
        bayId: selectedBay,
        bay: bays.find(b => b.id === selectedBay)!,
      })
    }

    setTimeSlots(slots)
  }, [selectedDate, selectedBay])

  const handleBooking = async () => {
    if (!selectedSlot || !user) return

    setLoading(true)
    try {
      // Mock booking process
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert('Booking confirmed! Check your email for QR code access.')
      setSelectedSlot(null)
    } catch (error) {
      console.error('Booking failed:', error)
    } finally {
      setLoading(false)
    }
  }

  const getPriceInfo = (slot: TimeSlot) => {
    const breakdown = getPriceBreakdown(slot.startTime, false, 0.5)
    return breakdown
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-golf-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Book Your Golf Session
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Select your preferred bay and time slot for an unforgettable golf experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-golf-600" />
                  Select Date & Bay
                </CardTitle>
                <CardDescription>
                  Choose your preferred date and bay for your golf session.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-golf-500 focus:outline-none focus:ring-1 focus:ring-golf-500"
                  />
                </div>

                {/* Bay Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Bay
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bays.map((bay) => (
                      <button
                        key={bay.id}
                        onClick={() => setSelectedBay(bay.id)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          selectedBay === bay.id
                            ? 'border-golf-500 bg-golf-50'
                            : 'border-gray-200 hover:border-golf-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-golf-600" />
                          <span className="font-medium">{bay.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 mt-1 block">
                          {bay.type === 'SIMULATOR' ? 'Full Simulator' : 'Putting Green'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                {selectedBay && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() => setSelectedSlot(slot)}
                          disabled={!slot.isAvailable}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            selectedSlot?.id === slot.id
                              ? 'border-golf-500 bg-golf-50'
                              : slot.isAvailable
                              ? 'border-gray-200 hover:border-golf-300'
                              : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">
                                {formatTime(slot.startTime)}
                              </div>
                              <div className="text-sm text-gray-500">
                                {formatTime(slot.endTime)}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-golf-600">
                                {formatCurrency(slot.price)}
                              </div>
                              <div className="text-xs text-gray-500">per hour</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-golf-600" />
                  Booking Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedSlot ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Bay:</span>
                      <span className="font-medium">{selectedSlot.bay.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Date:</span>
                      <span className="font-medium">{formatDate(selectedSlot.startTime)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Time:</span>
                      <span className="font-medium">
                        {formatTime(selectedSlot.startTime)} - {formatTime(selectedSlot.endTime)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="font-medium">55 minutes</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between text-lg font-semibold">
                        <span>Total:</span>
                        <span className="text-golf-600">{formatCurrency(selectedSlot.price)}</span>
                      </div>
                    </div>
                    <Button
                      onClick={handleBooking}
                      disabled={loading || !user}
                      className="w-full mt-6"
                      variant="golf"
                    >
                      {loading ? 'Processing...' : user ? 'Book Now' : 'Sign In to Book'}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <QrCode className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Select a time slot to see booking details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

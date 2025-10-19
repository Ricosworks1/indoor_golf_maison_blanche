import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      bookingId, 
      amount, 
      userId, 
      type, 
      successUrl, 
      cancelUrl 
    } = body

    if (!amount || !userId || !successUrl || !cancelUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: type === 'founder' ? 'Founder Membership' : 'Golf Booking',
              description: type === 'founder' 
                ? 'Lifetime 50% discount, 2 years free membership, profit sharing'
                : 'Golf simulator booking'
            },
            unit_amount: Math.round(amount * 100) // Convert to cents
          },
          quantity: 1
        }
      ],
      mode: type === 'founder' ? 'payment' : 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        bookingId: bookingId || '',
        userId,
        type: type || 'booking'
      },
      customer_email: body.email, // Optional: if you have user email
    })

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url
    })

  } catch (error) {
    console.error('Stripe checkout creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

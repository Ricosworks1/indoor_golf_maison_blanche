import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { prisma } from '@/lib/prisma'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json(
      { error: 'Missing signature or webhook secret' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        
        // Handle successful payment
        if (session.payment_status === 'paid') {
          // Update booking status if it's a booking payment
          if (session.metadata?.bookingId) {
            await prisma.booking.update({
              where: { id: session.metadata.bookingId },
              data: {
                status: 'CONFIRMED',
                paymentIntentId: session.payment_intent as string
              }
            })
          }

          // Handle founder membership purchase
          if (session.metadata?.type === 'founder') {
            const userId = session.metadata.userId
            if (userId) {
              await prisma.founderStatus.create({
                data: {
                  userId,
                  isActive: true,
                  purchaseDate: new Date(),
                  membershipEnd: new Date(Date.now() + 2 * 365 * 24 * 60 * 60 * 1000), // 2 years
                  discountRate: 0.5,
                  profitShareRate: 0.5,
                  totalCredits: 1000
                }
              })

              // Add credit ledger entry
              await prisma.creditLedger.create({
                data: {
                  userId,
                  type: 'PURCHASE',
                  amount: 1000,
                  description: 'Founder membership purchase',
                  referenceId: null
                }
              })
            }
          }
        }
        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        
        // Handle successful payment intent
        if (paymentIntent.metadata?.bookingId) {
          await prisma.booking.update({
            where: { id: paymentIntent.metadata.bookingId },
            data: {
              status: 'CONFIRMED',
              paymentIntentId: paymentIntent.id
            }
          })
        }
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        
        // Handle failed payment
        if (paymentIntent.metadata?.bookingId) {
          await prisma.booking.update({
            where: { id: paymentIntent.metadata.bookingId },
            data: {
              status: 'CANCELLED'
            }
          })
        }
        break
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription
        
        // Handle subscription creation (for monthly memberships)
        if (subscription.metadata?.userId) {
          // Update user's membership status
          // This would depend on your membership system implementation
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        
        // Handle subscription updates
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        
        // Handle subscription cancellation
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook handler error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

import Stripe from 'stripe'

const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true'

// Use dummy key in demo mode to prevent build errors
const stripeSecretKey = isDemoMode ? 'sk_test_demo_key_000000000000000000000000' : process.env.STRIPE_SECRET_KEY!

export const stripe = isDemoMode
  ? null as any // In demo mode, this won't be used
  : new Stripe(stripeSecretKey, {
      apiVersion: '2023-10-16',
    })

export const getStripe = () => {
  if (isDemoMode) {
    return null
  }
  if (typeof window !== 'undefined') {
    return require('@stripe/stripe-js').loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    )
  }
  return null
}

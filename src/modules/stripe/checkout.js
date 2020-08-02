import { loadStripe } from '@stripe/stripe-js'

export default async function Checkout(key, priceCode, successUrl, cancelUrl) {
  try {
    const stripe = await loadStripe(key)
    stripe
      .redirectToCheckout({
        lineItems: [{ price: priceCode, quantity: 1 }],
        mode: 'payment',
        successUrl,
        cancelUrl,
      })
      .then((result) => {
        if (result.error) {
          throw new Error(result.error)
        }
        return result
      })
  } catch (e) {
    return e
  }
}

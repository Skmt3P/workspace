<template>
  <div class="Top">
    <button @click="clickedPayment">
      <img class="Top_Image" alt="Vue logo" src="../assets/logo.png" />
    </button>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import { loadStripe } from '@stripe/stripe-js'
export default {
  methods: {
    clickedPayment: async () => {
      const PUBLISHABLE_KEY = 'pk_live_vaRdNubdl7uQrEFIL0nnGhdY000QkQ0G1T'
      const stripe = await loadStripe(PUBLISHABLE_KEY)
      stripe
        .redirectToCheckout({
          lineItems: [{ price: 'sku_HDUWTIj8V6H5ni', quantity: 1 }],
          mode: 'payment',
          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: 'https://work.skmt3p.com?result=success',
          cancelUrl: 'https://work.skmt3p.com?result=canceled',
        })
        .then((result) => {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            window.alert(result.error.message)
          }
        })
    },
  },
}
// export default defineComponent({
//   async setup() {
//     const PUBLISHABLE_KEY = 'pk_live_vaRdNubdl7uQrEFIL0nnGhdY000QkQ0G1T'
//     const stripe = await loadStripe(PUBLISHABLE_KEY)
//     const clickedPayment = async () => {
//       stripe
//         .redirectToCheckout({
//           lineItems: [{ price: 'sku_HDUWTIj8V6H5ni', quantity: 1 }],
//           mode: 'payment',
//           // Do not rely on the redirect to the successUrl for fulfilling
//           // purchases, customers may not always reach the success_url after
//           // a successful payment.
//           // Instead use one of the strategies described in
//           // https://stripe.com/docs/payments/checkout/fulfillment
//           successUrl: 'https://work.skmt3p.com?result=success',
//           cancelUrl: 'https://work.skmt3p.com?result=canceled',
//         })
//         .then((result) => {
//           if (result.error) {
//             // If `redirectToCheckout` fails due to a browser or network
//             // error, display the localized error message to your customer.
//             window.alert(result.error.message)
//           }
//         })
//     }
//     return {
//       clickedPayment,
//     }
//   },
// })
</script>
<style lang="scss">
.Top {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

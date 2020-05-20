<template>
  <div class="Stripe">
    <button @click="openCheckout" class="Stripe_Button">
      <img
        class="Stripe_ButtonImage"
        alt="Vue logo"
        src="../../assets/img/logo.png"
      />
    </button>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import StripeCheckout from '@/modules/stripe'
export default defineComponent({
  setup() {
    const openCheckout = async () => {
      try {
        console.log(process.env)
        if (
          !process.env.VUE_APP_KEY_STRIPE ||
          !process.env.VUE_APP_PRICECODE_STRIPE ||
          !process.env.VUE_APP_SUCCESSURL_STRIPE ||
          !process.env.VUE_APP_CANCELURL_STRIPE
        ) {
          throw new Error('Not found .env')
        }
        const stripeResult = await StripeCheckout(
          process.env.VUE_APP_KEY_STRIPE,
          process.env.VUE_APP_PRICECODE_STRIPE,
          process.env.VUE_APP_SUCCESSURL_STRIPE,
          process.env.VUE_APP_CANCELURL_STRIPE
        )
        console.log(stripeResult)
      } catch (e) {
        console.log(e)
      }
    }
    return {
      openCheckout,
    }
  },
})
</script>
<style lang="scss">
.Stripe {
  width: 100%;
  height: 100%;
  padding: 10px;
  &_Button {
    width: 100%;
    height: 100%;
    &Image {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>

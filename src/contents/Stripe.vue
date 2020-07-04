<template>
  <div class="Stripe">
    <h2 class="Stripe_Heading">{{title}}</h2>
    <button @click="openCheckout" class="Stripe_Button">
      <img
        class="Stripe_ButtonImage"
        alt="Vue logo"
        src="@/assets/img/logo.png"
      />
    </button>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import StripeCheckout from '@/modules/stripe'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: null
    },
  },
  setup() {
    const openCheckout = async () => {
      try {
        if (
          !process.env.VUE_APP_KEY_STRIPE ||
          !process.env.VUE_APP_PRICECODE_STRIPE ||
          !process.env.VUE_APP_SUCCESSURL_STRIPE ||
          !process.env.VUE_APP_CANCELURL_STRIPE
        ) {
          throw new Error('Not found .env')
        }
        await StripeCheckout(
          process.env.VUE_APP_KEY_STRIPE,
          process.env.VUE_APP_PRICECODE_STRIPE,
          process.env.VUE_APP_SUCCESSURL_STRIPE,
          process.env.VUE_APP_CANCELURL_STRIPE
        )
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
<style lang="postcss">
.Stripe {
  width: 100%;
  height: 100%;
  padding: 10px;
  &_Heading {
    text-align: center;
    letter-spacing: 0.05em;
    font-size: inherit;
    white-space: nowrap;
  }
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

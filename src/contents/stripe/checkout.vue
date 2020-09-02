<template>
  <button class="StripeCheckout" @click="openCheckout">
    <i class="StripeCheckout_Icon">{{ icon }}</i>
    <span class="StripeCheckout_Text">{{
      'Payment for ' + icon + ' (' + price + ')'
    }}</span>
  </button>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Checkout from '@/modules/stripe/checkout'
export default defineComponent({
  props: {
    sku: {
      type: String,
      required: true,
      default: null,
    },
    icon: {
      type: String,
      required: true,
      default: null,
    },
    price: {
      type: String,
      required: true,
      default: null,
    },
  },
  setup(props) {
    const openCheckout = async () => {
      try {
        if (
          !process.env.VUE_APP_KEY_STRIPE ||
          !props.sku ||
          !process.env.VUE_APP_SUCCESSURL_STRIPE ||
          !process.env.VUE_APP_CANCELURL_STRIPE
        ) {
          throw new Error('Not found .env')
        }
        await Checkout(
          process.env.VUE_APP_KEY_STRIPE,
          props.sku,
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
<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.StripeCheckout {
  width: 100%;
  height: 100%;
  &_Icon {
    display: block;
    font-size: 17.5vw;
    margin-bottom: 8px;
  }
  &_Text {
    display: block;
    font-size: 3vw;
    color: $--c-gray-0;
    width: 100%;
  }
}
</style>

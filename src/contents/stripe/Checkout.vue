<template>
  <div class="Checkout">
    <button @click="openCheckout" class="Checkout_Button">
      <i class="Checkout_ButtonIcon">{{ icon }}</i>
      <span class="Checkout_ButtonText">{{'Payment for ' + icon + ' (' + price + ')' }}</span>
    </button>
  </div>
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
<style lang="scss">
.Checkout {
  width: 100%;
  height: 100%;
  &_Button {
    width: 100%;
    height: 100%;
    &Image {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &_ButtonIcon {
    display: block;
    font-size: 8rem;
    margin-bottom: 8px;
  }
  &_ButtonText {
    display: block;
    text-align: center;
    font-size: 0.8rem;
  }
}
</style>

<template>
  <Carousel class="Stripe_Carousel">
    <slide class="Stripe_Slide">
      <Checkout :sku="skuCoffee" icon="☕" price="2€" />
    </slide>
    <slide class="Stripe_Slide">
      <Checkout :sku="skuRamen" icon="🍜" price="10€" />
    </slide>
    <slide class="Stripe_Slide">
      <Checkout :sku="skuSake" icon="🍶" price="30€" />
    </slide>
    <slide class="Stripe_Slide">
      <Checkout :sku="skuSukiyaki" icon="🍖" price="50€" />
    </slide>
    <slide class="Stripe_Slide">
      <Checkout :sku="skuSushi" icon="🍣" price="100€" />
    </slide>
  </Carousel>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Checkout from '@/contents/stripe/Checkout'
import Carousel from '@/components/atoms/Carousel'
export default defineComponent({
  components: {
    Checkout,
    Carousel,
  },
  setup() {
    const skuCoffee = process.env.VUE_APP_PRICECODE_STRIPE_COFFEE
    const skuRamen = process.env.VUE_APP_PRICECODE_STRIPE_RAMEN
    const skuSake = process.env.VUE_APP_PRICECODE_STRIPE_SAKE
    const skuSukiyaki = process.env.VUE_APP_PRICECODE_STRIPE_SUKIYAKI
    const skuSushi = process.env.VUE_APP_PRICECODE_STRIPE_SUSHI
    return {
      skuCoffee,
      skuRamen,
      skuSake,
      skuSukiyaki,
      skuSushi,
    }
  },
})
</script>

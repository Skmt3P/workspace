<template>
  <Carousel class="Resume_Carousel">
    <slide
      class="Stripe_Slide"
      v-for="(item, index) in linksArray"
      :key="index"
    >
      <Links :icon="item.icon" :link="item.link" :text="item.text" />
    </slide>
  </Carousel>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Links from '@/contents/resume/links'
import Carousel from '@/components/atoms/Carousel'
export default defineComponent({
  components: {
    Links,
    Carousel,
  },
  setup() {
    const linksArray = [
      {
        icon: '💻',
        link: 'https://github.com/Skmt3P/workspace',
        text: 'Download my latest resume!',
      },
      {
        icon: '⚡',
        link: 'https://github.com/Skmt3P/workspace/tree/master/static/docs',
        text: 'Download my latest CV!',
      },
      {
        icon: '👔',
        link: 'https://velocv.com/skmt3p',
        text: 'See my veloCV!',
      },
      {
        icon: '💤',
        link: 'https://2020.skmt3p.com/',
        text: 'Here is older workspace(2020)...',
      },
      {
        icon: '💤',
        link: 'https://2019.skmt3p.com/',
        text: 'Here is older workspace(2019)...',
      },
      {
        icon: '💤',
        link: 'https://2018.skmt3p.com/',
        text: 'Here is older workspace(2018)...',
      },
    ]
    return {
      linksArray,
    }
  },
})
</script>

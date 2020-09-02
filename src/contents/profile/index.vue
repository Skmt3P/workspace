<template>
  <Carousel class="Profile_Carousel">
    <slide class="Profile_Slide">
      <Top />
    </slide>
    <slide class="Profile_Slide">
      <Social />
    </slide>
  </Carousel>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Top from '@/contents/profile/top'
import Social from '@/contents/profile/social'
import Carousel from '@/components/atoms/Carousel'
export default defineComponent({
  components: {
    Top,
    Social,
    Carousel,
  },
})
</script>

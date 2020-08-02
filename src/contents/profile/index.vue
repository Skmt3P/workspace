<template>
  <Carousel class="Profile_Carousel">
    <slide class="Profile_Slide">
      <NoContent />
    </slide>
  </Carousel>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import NoContent from '@/contents/NoContent'
import Carousel from '@/components/atoms/Carousel'
export default defineComponent({
  components: {
    NoContent,
    Carousel,
  },
})
</script>

<template>
  <Carousel class="Profile_Carousel">
    <slide class="Profile_Slide">
      <Top />
    </slide>
    <slide class="Profile_Slide">
      <NoContent />
    </slide>
  </Carousel>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Top from '@/contents/profile/top'
import NoContent from '@/contents/NoContent'
import Carousel from '@/components/atoms/Carousel'
export default defineComponent({
  components: {
    Top,
    NoContent,
    Carousel,
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.Profile {
  height: 100%;
  overflow-y: scroll;
  &_Slide {
    height: 100%;
    overflow-y: scroll;
  }
}
</style>

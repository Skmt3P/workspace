<template>
  <carousel
    class="Carousel"
    :loop="true"
    :perPage="1"
    :paginationSize="4"
    :paginationPadding="3"
    @pageChange="onChangeSlide"
  >
    <slot></slot>
  </carousel>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup(props, context){
    const onChangeSlide = dataset => {
      context.emit('changed-slide', dataset)
    }
    return {
      onChangeSlide
    }
  }
})
</script>
<style lang="scss">
@import '@/assets/style/_base.scss';
.Carousel {
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
}
</style>

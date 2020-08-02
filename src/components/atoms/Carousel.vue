<template>
  <carousel class="Carousel" :perPage="1" :paginationSize="4" :paginationPadding="3">
    <slot></slot>
  </carousel>
</template>
<style lang="scss">
@import '@/assets/style/_base.scss';
.Carousel {
  width: 100%;
  height: 100%;
}
</style>

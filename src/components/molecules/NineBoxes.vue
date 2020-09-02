<template>
  <div class="NineBoxes">
    <div class="NineBoxes_Item--black">
      <slot name="box-1"></slot>
    </div>
    <div class="NineBoxes_Item--gray">
      <slot name="box-2"></slot>
    </div>
    <div class="NineBoxes_Item--black">
      <slot name="box-3"></slot>
    </div>
    <div class="NineBoxes_Item--gray">
      <slot name="box-4"></slot>
    </div>
    <div class="NineBoxes_Item--white">
      <slot name="box-5"></slot>
    </div>
    <div class="NineBoxes_Item--gray">
      <slot name="box-6"></slot>
    </div>
    <div class="NineBoxes_Item--black">
      <slot name="box-7"></slot>
    </div>
    <div class="NineBoxes_Item--gray">
      <slot name="box-8"></slot>
    </div>
    <div class="NineBoxes_Item--black">
      <slot name="box-9"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.NineBoxes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  &_Item {
    width: calc(100% / 3);
    height: calc(100% / 3);
    &--black {
      background-color: $--c-black-0;
      color: $--c-white-0;
    }
    &--gray {
      background-color: $--c-gray-0;
      color: $--c-white-0;
    }
    &--white {
      background-color: $--c-white-0;
      color: $--c-black-0;
    }
  }
}
</style>

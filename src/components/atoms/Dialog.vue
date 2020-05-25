<template>
  <div class="Dialog">
    <button @click.prevent="clickedBackground" class="DialogBackground" />
    <div class="DialogContent">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup(props, context) {
    const clickedBackground = () => {
      context.emit('clicked-background')
    }
    return { clickedBackground }
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_base.scss';
.Dialog {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  &Background {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: $--c-black-0;
    opacity: 0.8;
  }
  &Content {
    position: absolute;
    z-index: 1;
    width: 90vmin;
    height: 90vmin;
    top: 50%;
    left: 50%;
    background-color: $--c-white-0;
    transform: translate(-50%, -50%);
  }
}
</style>

<template>
  <div class="Dialog">
    <button @click.prevent="clickedBackground" class="DialogBackground" />
    <transition name="content">
      <template v-if="visibleDialog">
        <div class="DialogContent">
          <h2 class="DialogContent_Heading">{{title}}</h2>
          <slot></slot>
        </div>
      </template>
    </transition>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: null
    },
    visibleDialog: {
      type: Boolean,
      default: false,
      requreid: false
    }
  },
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
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
    &_Heading {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translate(-50%,0);
      letter-spacing: 0.05em;
      font-size: inherit;
      white-space: nowrap;
    }
  }
}
// dialog content animation
.content-enter {
  opacity: 0;
}
.content-leave-to {
  opacity: 0;
}
.content-enter-active {
  transition: all 0.25s ease;
  transition-delay: 0.05s;
}
.content-leave-active {
  transition: all 0.25s ease;
}
</style>

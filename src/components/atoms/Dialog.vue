<template>
  <div class="Dialog">
    <button @click.prevent="clickedBackground" class="Dialog_Background" />
    <transition name="content">
      <template v-if="visibleDialog">
        <div class="Dialog_Content">
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
<style lang="postcss" scoped>
@import '@/assets/css/_variables.css';
.Dialog {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  &_Background {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: var(--c-black-0);
    opacity: 0.8;
  }
  &_Content {
    position: absolute;
    z-index: 1;
    width: 90vmin;
    height: 90vmin;
    top: 50%;
    left: 50%;
    background-color: var(--c-white-0);
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
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

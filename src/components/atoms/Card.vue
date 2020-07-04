<template>
  <button
    :class="[
      color === 'black'
        ? 'Card--black'
        : color === 'gray'
        ? 'Card--gray'
        : 'Card',
    ]"
    :disabled="!isActive"
    @click="clickedCard"
  >
    <template v-if="image">
      <img :src="imageSrc" class="Card_Image" :alt="title" />
    </template>
  </button>
</template>
<script>
import { defineComponent, computed } from '@vue/composition-api'
export default defineComponent({
  props: {
    id: {
      type: String,
      default: null,
      required: true,
    },
    title: {
      type: String,
      default: null,
      required: false,
    },
    color: {
      type: String,
      default: null,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false,
      required: false,
    },
    image: {
      type: String,
      default: null,
      required: false,
    },
  },
  setup(props, context) {
    const imageSrc = computed(() => {
      return require(`@/assets/img/${props.image}`)
    })
    const clickedCard = () => {
      if (props.id) {
        context.emit('clicked-card', props.id)
      }
    }
    return { imageSrc, clickedCard }
  },
})
</script>
<style lang="postcss" scoped>
@import '@/assets/css/_variables.css';
.Card {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: var(--c-white-0);
  &--black {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: var(--c-black-0);
  }
  &--gray {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: var(--c-gray-0);
  }
  &_Image {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    object-fit: contain;
  }
}
</style>

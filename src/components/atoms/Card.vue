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
      <img :src="imageSrc" class="CardImage" />
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
<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.Card {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: $--c-white-0;
  &--black {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: $--c-black-0;
  }
  &--gray {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: $--c-gray-0;
  }
  &Image {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    object-fit: contain;
  }
}
</style>

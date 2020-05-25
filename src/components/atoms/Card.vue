<template>
  <button
    :class="[
      cardType === 'black'
        ? 'Card--black'
        : cardType === 'gray'
        ? 'Card--gray'
        : 'Card',
    ]"
    :disabled="cardType !== 'active'"
    @click="clickedCard"
  >
    <template v-if="cardImage">
      <img :src="imageSrc" class="CardImage" />
    </template>
  </button>
</template>
<script>
import { defineComponent, computed } from '@vue/composition-api'
export default defineComponent({
  props: {
    cardId: {
      type: String,
      default: null,
      required: true,
    },
    cardType: {
      type: String,
      default: null,
      required: false,
    },
    cardImage: {
      type: String,
      default: null,
      required: false,
    },
  },
  setup(props, context) {
    const imageSrc = computed(() => {
      return require(`@/assets/img/${props.cardImage}`)
    })
    const clickedCard = () => {
      if (props.cardId) {
        context.emit('clicked-card', props.cardId)
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

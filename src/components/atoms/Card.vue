<template>
  <button
    :class="[
      cardId
        ? 'Card'
        : cardColor === 'black'
        ? 'Card--black'
        : cardColor === 'gray'
        ? 'Card--gray'
        : 'Card',
    ]"
    :disabled="!!cardId"
    @click="clickedCard"
  >
    <template v-if="cardId">
      <slot></slot>
    </template>
  </button>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    cardId: {
      type: String,
      default: null,
      required: false,
    },
    cardColor: {
      type: String,
      default: null,
      required: false,
    },
  },
  setup(props, context) {
    const clickedCard = () => {
      if (props.cardId) {
        context.emit('clicked-card', props.cardId)
      }
    }
    return { clickedCard }
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
    background-color: $--c-black-0;
  }
  &--gray {
    background-color: $--c-gray-0;
  }
}
</style>

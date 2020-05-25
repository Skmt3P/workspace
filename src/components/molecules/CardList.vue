<template>
  <!-- grid layout採用。SPは横2列。PCは縦4列 -->
  <ul class="CardList">
    <template v-if="cards.length > 0">
      <template v-for="card in cards">
        <li class="CardItem" :key="card.cardId">
          <Card
            :cardId="card.cardId"
            :cardType="card.cardType"
            :cardImage="card.cardImage"
            @clicked-card="clickedCard"
          />
        </li>
      </template>
    </template>
    <template v-else>
      <Stripe />
      <span class="CardItem_NullText">表示するコンテンツが存在しません</span>
    </template>
  </ul>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Card from '@/components/atoms/Card'
export default defineComponent({
  props: {
    cards: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  components: {
    Card,
  },
  setup(props, context) {
    const clickedCard = (cardId) => {
      context.emit('clicked-card', cardId)
    }
    return { clickedCard }
  },
})
</script>
<style lang="scss" scoped>
.CardList {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
</style>

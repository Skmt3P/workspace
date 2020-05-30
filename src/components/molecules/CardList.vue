<template>
  <!-- grid layout採用。SPは横2列。PCは縦3列 -->
  <ul :class="[$device.mobile ? 'CardList' : 'CardListPc']">
    <template v-if="cards.length > 0">
      <template v-for="card in cards">
        <li class="CardListItem" :key="card.cardId">
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
      <span class="CardListItem_NullText"
        >表示するコンテンツが存在しません</span
      >
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
  display: grid;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50vw, 50vw));
  grid-template-rows: repeat(auto-fit, minmax(50vw, 50vw));
  grid-auto-flow: row dense;
  &Pc {
    display: grid;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(calc((100vh - 100px) / 3), calc((100vh - 100px) / 3))
    );
    grid-template-rows: repeat(
      auto-fit,
      minmax(calc((100vh - 100px) / 3), calc((100vh - 100px) / 3))
    );
    grid-auto-flow: column dense;
  }
  &Item {
    list-style: none;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    box-shadow: -2px -2px 13px rgba(0, 0, 0, 0.25);
  }
}
</style>

<template>
  <!-- grid layout採用。SPは横2列。PCは縦3列 -->
  <ul :class="[$device.mobile ? 'CardList' : 'CardListPc']">
    <template v-if="cards.length > 0">
      <template v-for="card in sortedCards">
        <li class="CardListItem" :key="card.id">
          <Card
            :id="card.id"
            :title="card.title"
            :color="card.color"
            :isActive="card.isActive"
            :image="card.image"
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
import { defineComponent, computed } from '@vue/composition-api'
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
    // mobile版の白色cardの位置を決定
    const defineCardColor = (index) => {
      // 最初は白
      if (index === 0) return 'white'
      if (index % 4 === 1) return 'black'
      // mobileの場合
      if (context.root.$device.mobile) {
        if (index % 4 === 2) return 'gray'
        return 'white'
      }
      if (index % 4 === 3) return 'gray'
      return 'white'
    }
    // sortedCardsのcomputed
    const sortedCards = computed(() => {
      const cardsArray = []
      // カードの枚数は6の倍数
      const length = props.cards.length % 6 === 0 ? props.cards.length : 6 * ( Math.floor(props.cards.length / 6 ) + 1 )
      for (let i = 0; i < length; i++) {
        const card = props.cards[i]
        if (card) {
          cardsArray.push({
            id: card.id,
            title: card.title,
            isActive: card.isActive,
            image: card.image,
            color: defineCardColor(i)
          })
        }
        if (!card) {
          cardsArray.push({
            id: `${i}`,
            title: null,
            isActive: false,
            image: null,
            color: defineCardColor(i)
          })
        }
      }
      return cardsArray
    })
    // cardのemitter
    const clickedCard = (id) => {
      context.emit('clicked-card', id)
    }
    return { sortedCards, clickedCard }
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

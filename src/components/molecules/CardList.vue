<template>
  <!-- grid layout採用。SPは横2列。PCは縦4列 -->
  <ul class="CardList">
    <li class="CardItem">
      <Card cardId="1">
        <Stripe />
      </Card>
    </li>
  </ul>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Card from '@/components/atoms/Card'
import Stripe from '@/pages/contents/Stripe'
export default defineComponent({
  components: {
    Card,
    Stripe,
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
.CardList {
  height: 100%;
  width: 100%;
  overflow: scroll;
}
</style>

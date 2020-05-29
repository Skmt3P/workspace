<template>
  <div class="Top">
    <CardList @clicked-card="showDialog" :cards="cards" />
    <template v-if="$route.query.id">
      <Dialog @clicked-background="closeDialog">
        <template v-if="$route.query.id === 'stripe'">
          <Stripe />
        </template>
      </Dialog>
    </template>
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import CardList from '@/components/molecules/CardList'
import Dialog from '@/components/atoms/Dialog'
import Stripe from '@/pages/contents/Stripe'
export default defineComponent({
  components: {
    CardList,
    Dialog,
    Stripe,
  },
  setup(props, context) {
    // 合計個数は6の倍数にする
    const cards = reactive([
      {
        cardId: 'stripe-1',
        cardType: 'active',
        cardImage: 'logo.png',
      },
      {
        cardId: 'black-1',
        cardType: 'black',
      },
      {
        cardId: 'stripe-2',
        cardType: 'active',
        cardImage: 'logo.png',
      },
      {
        cardId: 'gray-1',
        cardType: 'gray',
      },
      {
        cardId: 'stripe-3',
        cardType: 'active',
        cardImage: 'logo.png',
      },
      {
        cardId: 'black-2',
        cardType: 'black',
      },
      {
        cardId: 'stripe-4',
        cardType: 'active',
        cardImage: 'logo.png',
      },
      {
        cardId: 'gray-2',
        cardType: 'gray',
      },
      {
        cardId: 'stripe-5',
        cardType: 'active',
        cardImage: 'logo.png',
      },
      {
        cardId: 'black-3',
        cardType: 'black',
      },
      {
        cardId: 'stripe-6',
        cardType: 'active',
        cardImage: 'logo.png',
      },
      {
        cardId: 'gray-3',
        cardType: 'gray',
      },
    ])
    const showDialog = (cardId) => {
      if (!cardId) return true
      const id = cardId.match(/stripe/) ? 'stripe' : cardId
      context.root.$router.push({
        query: {
          id,
        },
      })
    }
    const closeDialog = () => {
      context.root.$router.push({
        query: {
          id: '',
        },
      })
    }
    return {
      cards,
      showDialog,
      closeDialog,
    }
  },
})
</script>
<style lang="scss">
@import '@/assets/scss/_base.scss';
.Top {
  z-index: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>

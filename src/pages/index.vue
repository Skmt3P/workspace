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
        id: 'stripe-1',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-2',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-3',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-4',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-5',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-6',
        isActive: true,
        image: 'logo.png',
      }
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

<template>
  <div class="Top">
    <CardList @clicked-card="showDialog" :cards="cards" />
    <template v-if="$route.query.id">
      <Dialog :title="dialogTitle" @clicked-background="closeDialog">
        <template v-if="$route.query.id">
          <Stripe />
        </template>
      </Dialog>
    </template>
  </div>
</template>
<script>
import { defineComponent, reactive, computed } from '@vue/composition-api'
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
        id: 'stripe-coffee',
        title: 'Payment with Stripe (Coffee)',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-ramen',
        title: 'Payment with Stripe (Ramen)',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-sake',
        title: 'Payment with Stripe (Sake)',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-sukiyaki',
        title: 'Payment with Stripe (Sukiyaki)',
        isActive: true,
        image: 'logo.png',
      },
      {
        id: 'stripe-sushi',
        title: 'Payment with Stripe (Sushi)',
        isActive: true,
        image: 'logo.png',
      }
    ])
    const dialogTitle = computed(() => {
      const targetCard = context.root.$route.query.id ? cards.filter(card => {
        return card.id === context.root.$route.query.id
      })[0] : null
      if(targetCard) {
        return targetCard.title
      }
      return null
    })
    const showDialog = (cardId) => {
      if (!cardId) return true
      context.root.$router.push({
        query: {
          id:cardId,
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
      dialogTitle,
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

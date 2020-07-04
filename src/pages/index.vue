<template>
  <div class="Top">
    <CardList @clicked-card="showDialog" :cards="cards" />
    <transition name="background">
      <Dialog v-show="visibleDialog" :visible-dialog="visibleDialog" @clicked-background="closeDialog">
        <template v-if="$route.query.id">
          <Stripe :title="dialogTitle" />
        </template>
      </Dialog>
    </transition>
  </div>
</template>
<script>
import { defineComponent, reactive, computed } from '@vue/composition-api'
import CardList from '@/components/molecules/CardList'
import Dialog from '@/components/atoms/Dialog'
import Stripe from '@/contents/Stripe'
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
        image: 'icon-stripe.png',
      },
      {
        id: 'stripe-ramen',
        title: 'Payment with Stripe (Ramen)',
        isActive: true,
        image: 'icon-stripe.png',
      },
      {
        id: 'stripe-sake',
        title: 'Payment with Stripe (Sake)',
        isActive: true,
        image: 'icon-stripe.png',
      },
      {
        id: 'stripe-sukiyaki',
        title: 'Payment with Stripe (Sukiyaki)',
        isActive: true,
        image: 'icon-stripe.png',
      },
      {
        id: 'stripe-sushi',
        title: 'Payment with Stripe (Sushi)',
        isActive: true,
        image: 'icon-stripe.png',
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
    const visibleDialog = computed(() => {
      return !!context.root.$route.query.id
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
      visibleDialog,
      dialogTitle,
      showDialog,
      closeDialog,
    }
  },
})
</script>
<style lang="postcss">
.Top {
  z-index: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
}
// dialog background animation
.background-enter,
.background-leave-to {
  opacity: 0;
}
.background-enter-active {
  transition: all 0s ease;
}
.background-leave-active {
  transition: all 0.2s ease;
  transition-delay: 0.2s;
}
</style>

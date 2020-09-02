<template>
  <div class="Top">
    <CardList @clicked-card="showDialog" :cards="cards" />
    <transition name="background">
      <Dialog
        v-show="visibleDialog"
        :title="dialogTitle"
        :visible-dialog="visibleDialog"
        @clicked-background="closeDialog"
      >
        <portal-target name="contents"></portal-target>
      </Dialog>
    </transition>
    <portal to="contents">
      <template v-if="$route.query.id === 'profile'">
        <Profile />
      </template>
      <template v-if="$route.query.id === 'resume'">
        <Resume />
      </template>
      <template v-if="$route.query.id === 'aframe'">
        <Aframe />
      </template>
      <template v-if="$route.query.id === 'p5'">
        <Pfive />
      </template>
      <template v-if="$route.query.id === 'ar'">
        <Ar />
      </template>
      <template v-if="$route.query.id === 'stripe'">
        <Stripe />
      </template>
    </portal>
  </div>
</template>
<script>
import { defineComponent, reactive, computed } from '@vue/composition-api'
import CardList from '@/components/molecules/CardList'
import Dialog from '@/components/atoms/Dialog'
import Aframe from '@/contents/aframe/index'
import Ar from '@/contents/ar/index'
import Pfive from '@/contents/p5/index'
import Profile from '@/contents/profile/index'
import Resume from '@/contents/resume/index'
import Stripe from '@/contents/stripe/index'
import {
  ScrollLockWithTheEx,
  ScrollPermitWithTheEx,
} from '@/modules/scroll-control'
export default defineComponent({
  components: {
    CardList,
    Dialog,
    Aframe,
    Ar,
    Pfive,
    Profile,
    Resume,
    Stripe,
  },
  setup(props, context) {
    // 合計個数は6の倍数にする
    const cards = reactive([
      {
        id: 'profile',
        title: 'Profile',
        isActive: true,
        image: 'skmt3p_prof.png',
      },
      {
        id: 'resume',
        title: 'Resume & CV',
        isActive: true,
        image: 'icon-resume.png',
      },
      {
        id: 'aframe',
        title: 'Aframe contents',
        isActive: true,
        image: 'icon-aframe.png',
      },
      {
        id: 'p5',
        title: 'P5 contents',
        isActive: true,
        image: 'icon-p5.png',
      },
      {
        id: 'ar',
        title: 'AR contents',
        isActive: true,
        image: 'icon-ar.png',
      },
      {
        id: 'stripe',
        title: 'Payment with Stripe',
        isActive: true,
        image: 'icon-stripe.png',
      },
    ])
    const dialogTitle = computed(() => {
      const targetCard = context.root.$route.query.id
        ? cards.filter((card) => {
            return card.id === context.root.$route.query.id
          })[0]
        : null
      if (targetCard) {
        return targetCard.title
      }
      return null
    })
    const visibleDialog = computed(() => {
      return !!context.root.$route.query.id
    })
    const showDialog = (cardId) => {
      if (!cardId) return true
      ScrollLockWithTheEx(document.querySelector('.DialogContent'))
      context.root.$router.push({
        query: {
          id: cardId,
        },
      })
    }
    const closeDialog = () => {
      ScrollPermitWithTheEx(document.querySelector('.DialogContent'))
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
<style lang="scss">
@import '@/assets/style/_base.scss';
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

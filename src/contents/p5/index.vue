<template>
  <Carousel class="Pfive_Carousel">
    <slide class="Pfive_Slide">
      <Tutorial @click="waitingTest" name="tutorial" :waiting="waiting" />
    </slide>
    <slide class="Pfive_Slide">
      <NoContent />
    </slide>
  </Carousel>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'
import NoContent from '@/contents/NoContent'
import Tutorial from '@/contents/p5/tutorial'
import Carousel from '@/components/atoms/Carousel'
export default defineComponent({
  components: {
    Tutorial,
    NoContent,
    Carousel,
  },
  setup(){
    const state = reactive({
      waiting: true
    })
    const waitingTest = () => {
      console.log('clicked')
      return state.waiting = !state.waiting
    }
    return {
      waiting: state.waiting,
      waitingTest
    }
  }
})
</script>

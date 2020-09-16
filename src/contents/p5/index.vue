<template>
  <Carousel class="Pfive_Carousel" @changed-slide="changeActiveSlideNumber" >
    <slide class="Pfive_Slide">
      <PfiveContainer name="tutorial" :waiting="!(activeSlideNumber === 0)">
        <template v-slot:p-five>
          <Tutorial />
        </template>
      </PfiveContainer>
    </slide>
    <slide class="Pfive_Slide">
      <NoContent />
    </slide>
  </Carousel>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import NoContent from '@/contents/NoContent'
import PfiveContainer from '@/components/organisms/PfiveContainer'
import Tutorial from '@/contents/p5/tutorial'
import Carousel from '@/components/atoms/Carousel'
export default defineComponent({
  components: {
    NoContent,
    PfiveContainer,
    Tutorial,
    Carousel
  },
  setup(){
    const useSlideState = () => {
      const slideState = reactive({
        activeSlideNumber: 0
      })
      return {
        ...toRefs(slideState) 
      }
    }
    const changeActiveSlideNumber = number => {
      return activeSlideNumber.value = number
    }
    const { activeSlideNumber } = useSlideState()
    return  {
      activeSlideNumber,
      changeActiveSlideNumber
    }
  }
})
</script>

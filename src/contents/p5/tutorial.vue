<template>
  <PfiveContainer :name="name" :waiting="waiting">
    <template v-slot:p-five>
      <div class="PfiveTutorial" />
    </template>
  </PfiveContainer>
</template>
<script>
  import { defineComponent } from '@vue/composition-api'
  import PfiveContainer from '@/components/organisms/PfiveContainer'
  export default defineComponent({
    components: {
      PfiveContainer
    },
    props: {
      name: {
        type: String,
        default: null,
        required: true,      
      },
      waiting: {
        type: Boolean,
        default: true,
        required: true,
      },
    },
  })
</script>
<style lang="scss" scoped>
  .PfiveTutorial {
    width: 100%;
    height: 100%;
  }
</style>>
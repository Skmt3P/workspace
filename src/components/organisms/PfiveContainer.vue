<template>
  <LoadingContainer :name="name" :waiting="waiting" class="PfiveContainer">
    <template v-slot:content>
      <slot name="p-five"></slot>
    </template>
  </LoadingContainer>
</template>
<script>
  import { defineComponent } from '@vue/composition-api'
  import LoadingContainer from '@/components/molecules/LoadingContainer'
  export default defineComponent({
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
    components: {
      LoadingContainer
    }
  })
</script>

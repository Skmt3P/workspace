<template>
<v-wait for='something to load'>
  <BreedingRhombusSpinner
    slot='waiting'
    :animation-duration="1500"
    :size="64"
    :color="'#ff1d5e'"
  />
  <slot name="content"></slot>
</v-wait>
</template>
<script>
import { defineComponent, watch } from '@vue/composition-api'
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
  setup(props, context) {
    const startLoading = () => {
      return context.root.$wait.start(props.name)
    }
    const endLoading = () => {
      return context.root.$wait.end(props.name)
    }
    startLoading()
    watch(() => {props.waiting}, (newVal, oldVal) => {
      if (newVal === oldVal) return
      console.log(newVal, oldVal)
      return props.waiting ? startLoading() : endLoading() 
    })
  }
})
</script>
<template>
<v-wait :for='name' class="LoadingContainer">
  <template slot='waiting'>
    <FulfillingBouncingCircleSpinner
      :animation-duration="1500"
      :color="'#777'"
    />
  </template>
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
      default: false,
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
    props.waiting ? startLoading() : endLoading()
    watch(() => props.waiting, (newVal, oldVal) => {
      if (newVal === oldVal) return
      return props.waiting ? startLoading() : endLoading() 
    })
  }
})
</script>
<style lang="scss">
.LoadingContainer {
  > span {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    > div {
      margin: auto;
    }
  }
}
</style>
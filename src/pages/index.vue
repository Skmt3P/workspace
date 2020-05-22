<template>
  <div class="Top">
    <CardList />
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import CardList from '@/components/molecules/CardList'
export default defineComponent({
  components: {
    CardList,
  },
})
</script>
<style lang="scss">
@import '@/assets/scss/_base.scss';
.Top {
  height: 100%;
  width: 100%;
}
</style>

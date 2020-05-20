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
.Top {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

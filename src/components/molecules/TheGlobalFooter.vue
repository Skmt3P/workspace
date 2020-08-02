<template>
  <div class="TheGlobalFooter">
    <small class="TheGlobalFooter_Copyright"
      >Copyright 2020- R.D.Sakamoto</small
    >
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.TheGlobalFooter {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  &_Copyright {
    margin: 0 0 0 auto;
    font-size: 10px;
    line-height: 1;
    letter-spacing: 0.1em;
    color: $--c-black-0;
  }
}
</style>

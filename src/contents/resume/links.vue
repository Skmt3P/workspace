<template>
  <a class="ResumeLinks" :href="link" target="_blank" rel="noopener noreferrer">
    <i class="ResumeLinks_Icon">
      {{ icon }}
    </i>
    <span class="ResumeLinks_Text">
      {{ text }}
    </span>
  </a>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
      default: null,
    },
    link: {
      type: String,
      required: true,
      default: null,
    },
    text: {
      type: String,
      required: true,
      default: null,
    },
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';
.ResumeLinks {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10%;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &_Icon {
    display: block;
    font-size: 17.5vw;
    margin-bottom: 8px;
  }
  &_Text {
    display: block;
    font-size: 3vw;
    color: $--c-gray-0;
    width: 100%;
  }
}
</style>

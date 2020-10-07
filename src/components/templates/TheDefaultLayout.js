import Vue from 'vue'
import { h } from 'vue'
import TheGlobalHeader from '@/components/molecules/TheGlobalHeader'
import TheGlobalFooter from '@/components/molecules/TheGlobalFooter'

export function TheDefaultLayout(Page) {
  return Vue.extend({
    inheritAttrs: false,
    components: {
      Page,
      TheGlobalHeader,
      TheGlobalFooter,
    },
    render() {
      return h('div', { class: 'TheDefaultLayout' }, [
        h('header', { class: 'TheDefaultLayout_Header' }, [
          h(TheGlobalHeader, {}),
        ]),
        h('main', { class: 'TheDefaultLayout_Main' }, [h(Page, {})]),
        h('footer', { class: 'TheDefaultLayout_Footer' }, [
          h(TheGlobalFooter, {}),
        ]),
      ])
    },
  })
}

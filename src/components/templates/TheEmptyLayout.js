import Vue from 'vue'
import { h } from 'vue'

export function TheEmptyLayout(Page) {
  return Vue.extend({
    inheritAttrs: false,
    components: {
      Page,
    },
    render() {
      return h(
        'div',
        { class: "TheEmptyLayout" },
        [h(Page, {})]
      )
    },
  })
}

import Vue from 'vue'

export function TheEmptyLayout(Page) {
  return Vue.extend({
    inheritAttrs: false,
    components: {
      Page,
    },
    render() {
      return (
        <div class="TheEmptyLayout">
          <Page />
        </div>
      )
    },
  })
}

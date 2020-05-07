import Vue from 'vue'
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
      return (
        <div class="TheDefaultLayout">
          <header class="TheDefaultLayout_Header">
            <TheGlobalHeader />
          </header>
          <main class="TheDefaultLayout_Main">
            <Page />
          </main>
          <footer class="TheDefaultLayout_Footer">
            <TheGlobalFooter />
          </footer>
        </div>
      )
    },
  })
}

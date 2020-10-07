import '../node_modules/ress/dist/ress.min.css'
import './modules/fontawesome'
import Vue, { createApp, h } from 'vue'
import VueCompositionApi from '@vue/composition-api'
import PortalVue from 'portal-vue'
import VueCarousel from 'vue-carousel'
import VueHead from 'vue-head'
import VueWait from 'vue-wait'
import device from 'vue-device-detector'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
import router from './modules/router'
import App from './App'

// Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(PortalVue)
Vue.use(VueCarousel)
Vue.use(VueHead)
Vue.use(VueWait)
Vue.use(device)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.component(
  'FulfillingBouncingCircleSpinner',
  FulfillingBouncingCircleSpinner
)

createApp({
  el: '#app',
  wait: new VueWait(),
  render: () => h(App),
})
  .use(router)
  .mount('#app')

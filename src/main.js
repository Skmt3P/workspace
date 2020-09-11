import '../node_modules/ress/dist/ress.min.css'
import './modules/fontawesome'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import PortalVue from 'portal-vue'
import VueCarousel from 'vue-carousel'
import VueHead from 'vue-head'
import VueWait from 'vue-wait'
import device from 'vue-device-detector'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BreedingRhombusSpinner } from 'epic-spinners'
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
Vue.component('BreedingRhombusSpinner', BreedingRhombusSpinner)

new Vue({
  el: '#app',
  router,
  wait: new VueWait(),
  render: (h) => h(App),
}).$mount('#app')

import '../node_modules/ress/dist/ress.min.css'
import './modules/fontawesome'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import PortalVue from 'portal-vue'
import VueCarousel from 'vue-carousel'
import VueHead from 'vue-head'
import device from 'vue-device-detector'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './modules/router'
import App from './App'

// Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(PortalVue)
Vue.use(VueCarousel)
Vue.use(VueHead)
Vue.use(device)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
}).$mount('#app')

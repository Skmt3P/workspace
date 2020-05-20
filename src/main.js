import 'ress'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import VueHead from 'vue-head'
import VueDeviceDetector from 'vue-device-detector'
import router from './modules/router'
import App from './App'

// Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(VueHead)
Vue.use(VueDeviceDetector)

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import router from './plugins/router'
import App from './pages/App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
}).$mount('#app')

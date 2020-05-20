import Vue from 'vue'
import VueRouter from 'vue-router'
import { TheDefaultLayout } from '../components/templates/TheDefaultLayout'
import { TheEmptyLayout } from '../components/templates/TheEmptyLayout'
import Top from '../pages/index'
import Error from '../pages/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: TheDefaultLayout(Top),
  },
  {
    path: '*',
    name: 'error',
    component: TheEmptyLayout(Error),
  },
]
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router

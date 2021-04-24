import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FilterPage from '@/components/filterpage/FilterPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/filterpage',
    name: 'FilterPage',
    component:FilterPage
  }
]

const router = new VueRouter({
  routes
})

export default router

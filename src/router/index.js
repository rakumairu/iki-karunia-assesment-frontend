import Vue from 'vue'
import VueRouter from 'vue-router'
import Banner from '../views/Banner.vue'
import Detail from '../views/Detail.vue'
import Reviews from '../views/Reviews.vue'
import Apps from '../views/Apps.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/cashcart',
    name: 'cash-cart',
    component: Banner
  },
  {
    path: '/detail/:appId',
    name: 'detail',
    component: Detail
  },
  {
    path: '/reviews/:appId',
    name: 'reviews',
    component: Reviews
  },
  {
    path: '/apps',
    name: 'apps',
    component: Apps
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

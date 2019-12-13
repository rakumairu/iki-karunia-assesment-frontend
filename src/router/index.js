import Vue from 'vue'
import VueRouter from 'vue-router'
const Banner = () => import('../views/Banner.vue')
const Detail = () => import('../views/Detail.vue')
const Reviews = () => import('../views/Reviews.vue')
const Apps = () => import('../views/Apps.vue')
const NotFound = () => import('../views/NotFound.vue')

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

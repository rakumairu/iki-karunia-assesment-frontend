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
    component: Banner,
    meta: {
      title: 'Tercepat - Home',
      metaTags: [
        {
          name: 'description',
          content: 'Daftar aplikasi pinjaman'
        },
        {
          name: 'og:description',
          content: 'Daftar aplikasi pinjaman'
        }
      ]
    }
  },
  {
    path: '/detail/:appId',
    name: 'detail',
    component: Detail,
    meta: {
      scrollToTop: true,
      metaTags: [
        {
          name: 'description',
          content: 'Aplikasi pinjaman'
        },
        {
          name: 'og:description',
          content: 'Aplikasi pinjaman'
        }
      ]
    }
  },
  {
    path: '/reviews/:appId',
    name: 'reviews',
    component: Reviews,
    meta: {
      title: 'Tercepat - Review Aplikasi',
      metaTags: [
        {
          name: 'description',
          content: 'Review aplikasi pinjaman'
        },
        {
          name: 'og:description',
          content: 'Review aplikasi pinjaman'
        }
      ]
    }
  },
  {
    path: '/apps',
    name: 'apps',
    component: Apps,
    meta: {
      title: 'Tercepat - Semua Aplikasi',
      metaTags: [
        {
          name: 'description',
          content: 'Daftar semua aplikasi pinjaman'
        },
        {
          name: 'og:description',
          content: 'Daftar semua aplikasi pinjaman'
        }
      ]
    }
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router

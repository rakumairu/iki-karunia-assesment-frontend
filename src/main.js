import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faUser, faInfoCircle, faCommentDots, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular, faBookmark, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faStar, faStarRegular, faBookmark, faUser, faInfoCircle, faCommentDots, faWhatsapp, faUserCircle, faChevronLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

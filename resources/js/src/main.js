import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import VueProgressBar from 'vue-progressbar'
import VueSweetalert2 from 'vue-sweetalert2'
import '@fortawesome/fontawesome-free/js/all.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import axios from 'axios'
import 'vuejs-datatable/dist/themes/bootstrap-4.esm'
import { VuejsDatatableFactory } from 'vuejs-datatable'

import LaravelPermissionToVueJS from 'laravel-permission-to-vuejs'
import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'
// Global Components
import './global-components'

import VueCookies from 'vue-cookies'
import useJwt from '@/auth/jwt/useJwt'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// Axios Mock Adapter
import '@/@fake-db/db'

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  location: 'left',
  inverse: false,
}

const Fire = new Vue()
window.Fire = Fire
// Vue.use(VueSweetalert2, Toast)

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(VueProgressBar, options)

// Composition API
Vue.use(VueCompositionAPI)

Vue.use( VuejsDatatableFactory );

Vue.use(LaravelPermissionToVueJS)
// Feather font icon - For form-wizard

Vue.use(VueCookies, { expire: '1h' })
// Vue.prototype.can = function (value) {
//   return window.Laravel.jsPermissions.permissions.includes(value)
// }
// Vue.prototype.is = function (value) {
//   return window.Laravel.jsPermissions.roles.includes(value)
// }
// * Shall remove it if not using font-icons of feather-icons - For form-wizardx

axios.defaults.withCredentials = true
const token = localStorage.getItem('accessToken')
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer${token}`
}

axios.interceptors.response.use(undefined, error => {
  if (error) {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')
      return router.push({ path: '/login' })
    }
  } else {
    store.commit('handler_error', JSON.parse(error.response.data.error))
  }
})
Vue.filter('toCurrency', value => {
  if (typeof value !== 'number') {
    return value
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MZN',
  })
  return formatter.format(value)
})
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'
import VueProgressBar from 'vue-progressbar'
import VueSweetalert2 from 'vue-sweetalert2'
import '@fortawesome/fontawesome-free/js/all.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import axios from 'axios'
// import Swal from 'sweetalert2'
<<<<<<< HEAD
// import Permissions from './@core/mixins/Permissions.vue'
import LaravelPermissionToVueJS from 'laravel-permission-to-vuejs'
=======
import Permissions from '@core/mixins/Permissions.vue'
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'
// Global Components
import './global-components'

<<<<<<< HEAD
import VueCookies from 'vue-cookies'

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

<<<<<<< HEAD
=======

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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
<<<<<<< HEAD

=======
// const Toast = Swal.mixin({
//   confirmButtonColor: '#41b882',
//   cancelButtonColor: '#ff7674',
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   onOpen: toast => {
//     toast.addEventListener('mouseenter')
//     toast.addEventListener('mouseleave')
//   },
// })
// window.Swal = Swal
// window.toast = Toast
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
const Fire = new Vue()
window.Fire = Fire
// Vue.use(VueSweetalert2, Toast)

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(VueProgressBar, options)

// Composition API
Vue.use(VueCompositionAPI)
<<<<<<< HEAD

Vue.use(LaravelPermissionToVueJS)
// Feather font icon - For form-wizard
// Vue.directive('can', (el, binding) => window.Laravel.jsPermissions.indexOf(binding) !== -1)

Vue.use(VueCookies, { expire: '1h' })
// Vue.prototype.can = function (value) {
//   return window.Laravel.jsPermissions.permissions.includes(value)
// }
// Vue.prototype.is = function (value) {
//   return window.Laravel.jsPermissions.roles.includes(value)
// }
// * Shall remove it if not using font-icons of feather-icons - For form-wizardx
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
=======
Vue.mixin(Permissions)
// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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

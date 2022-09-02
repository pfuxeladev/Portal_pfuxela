import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import createPersistedState from 'vuex-persistedstate'
=======

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
  },
  strict: process.env.DEV,
<<<<<<< HEAD
  plugins: [
    createPersistedState(
      {
        storage: window.localStorage,
      },
    )],
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
})

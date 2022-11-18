import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// Modules
import * as Cookies from 'js-cookie'
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
  plugins: [
    createPersistedState({
      getState: key => Cookies.get(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })],
})

import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import dashboard from './routes/dashboard'
import chartsMaps from './routes/charts-maps'
import pages from './routes/pages'
// eslint-disable-next-line camelcase
import abastecimentos_rotas from './routes/abastecimentos_rotas'
import piquectsRotas from './routes/piquects_rotas'
import utilizadores from './routes/utilizadores'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: { name: 'dashboard-ecommerce' },
      meta: { authOnly: true },
    },
    ...pages,
    ...dashboard,
    // eslint-disable-next-line camelcase
    ...abastecimentos_rotas,
    ...piquectsRotas,
    ...utilizadores,
    // ...others,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (to.matched.some(record => record.meta.authOnly)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login', query: { redirect: to.fullPath } })

    // If logged in => not authorized
    return next()
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData()
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }
  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router

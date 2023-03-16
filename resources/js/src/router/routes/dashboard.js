export default [
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    // eslint-disable-next-line import/no-unresolved
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
    meta: {
      authOnly: true,
    },
  },
]

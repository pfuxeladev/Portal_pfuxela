export default
[
  {
    path: '/Supply',
    name: 'Supply',
    component: () => import('@/views/Gestao-abastecimentos/abastecimentos/historicos.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/New-supply-order',
    name: 'New supply order',
    component: () => import('@/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/:refs/supply-details',
    name: 'supply-details',
    params: { refs: null },
    component: () => import('@/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/bombas',
    name: 'Fuel pumps',
    component: () => import('@/views/Gestao-abastecimentos/bombas/bombas.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/Projects',
    name: 'Projects',
    component: () => import('@/views/Gestao-abastecimentos/projectos/lista.vue'),
  },
  {
    path: '/Supply/Routes-Supply',
    name: 'Routes Supply',
    component: () => import('@/views/Gestao-abastecimentos/rotas/rotas.vue'),
    meta: {
      authOnly: true,
    },
  },
]

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
    path: '/Supply/recurring-supply',
    name: 'recurring supply',
    component: () => import('@/views/Gestao-abastecimentos/abastecimentos/Abastecimento_recorrente.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/Orders/:refs/supply-order',
    name: 'New-supply-order',
    component: () => import('@/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/Orders/:refs/edit',
    name: 'Edit-Order',
    component: () => import('@/views/Gestao-abastecimentos/ordens/orderEdit.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/:refs/supply-details',
    name: 'supply-details',
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
  {
    path: '/Supply/Orders',
    name: 'Orders',
    component: () => import('@/views/Gestao-abastecimentos/ordens/lista.vue'),
    meta: {
      authOnly: true,
    },
  },
]

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
<<<<<<< HEAD
    path: '/Supply/General-history',
    name: 'Supply history',
    component: () => import('@/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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
<<<<<<< HEAD
=======
    params: { refs: null },
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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
<<<<<<< HEAD
    path: '/Supply/bombas/:id/abastecer',
    name: 'Fill the pump',
    component: () => import('@/views/Gestao-abastecimentos/bombas/bomba_form.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/:id/Reports',
    name: 'Fuel Reports',
    component: () => import('@/views/Gestao-abastecimentos/bombas/bombasDetails.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    path: '/Supply/Projects',
    name: 'Projects',
    component: () => import('@/views/Gestao-abastecimentos/projectos/lista.vue'),
  },
  {
<<<<<<< HEAD
    path: '/Supply/:name/Report',
    name: 'Project Report',
    component: () => import('@/views/Gestao-abastecimentos/projectos/detalhes.vue'),
  },
  {
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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

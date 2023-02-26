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
    path: '/Supply/General-history',
    name: 'Supply history',
    component: () => import('@/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue'),
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
    path: '/Supply/bombas/:id/abastecer',
    name: 'Fill the pump',
    component: () => import('@/views/Gestao-abastecimentos/bombas/bomba_form.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/Rotas-teste',
    name: 'Route Distances',
    component: () => import('@/views/Gestao-abastecimentos/rotas-teste/RotaTeste.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/Rotas-teste/:id/details',
    name: 'route-details-demo',
    component: () => import('@/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue')
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
    path: '/Supply/Projects',
    name: 'Projects',
    component: () => import('@/views/Gestao-abastecimentos/projectos/lista.vue'),
  },
  {
    path: '/Supply/:name/Report',
    name: 'Project Report',
    component: () => import('@/views/Gestao-abastecimentos/projectos/detalhes.vue'),
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
    path: '/Supply/Routes-Supply/:id/edit',
    name: 'Routes-update',
    component: () => import('@/views/Gestao-abastecimentos/rotas/rotaEdit.vue'),
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

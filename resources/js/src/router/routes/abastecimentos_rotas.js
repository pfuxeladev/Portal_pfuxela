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
    name: 'recurring',
    component: () => import('@/views/Gestao-abastecimentos/AbastecimentoExtras/Abastecimento_recorrente.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/new-supply-order',
    name: 'New-supply-order',
    component: () => import('@/views/Gestao-abastecimentos/AbastecimentoRota/novo_abastecimento.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Supply/other-service',
    name: 'For Special Services',
    component: () => import('@/views/Gestao-abastecimentos/AbastecimentoServico/index.vue'),
    meta: { authOnly: true },
  },
  {
    path: '/Supply/other-new-service',
    name: 'New Order Service',
    component: () => import('@/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue'),
    meta: { authOnly: true },
  },
  {
    path: '/Supply/Administrative-Order',
    name: 'Administrative Order',
    component: () => import('@/views/Gestao-abastecimentos/AbastecimentoAdministrativo/index.vue'),
    meta: { authOnly: true },
  },
  {
    path: '/Supply/:refs/supply-details',
    name: 'supply-details',
    component: () => import('@/views/Gestao-abastecimentos/AbastecimentoRota/abastecimentoDetail.vue'),
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
    path: '/Supply/Workshop',
    name: 'Workshop Supplies',
    component: () => import('@/views/Gestao-abastecimentos/AbastecimentoOficina/index.vue'),
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
  {
    path: '/Supply/:id/Reports',
    name: 'Fuel Reports',
    component: () => import('@/views/Gestao-abastecimentos/bombas/bombasDetails.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Parametrization/bombas',
    name: 'Fuel pumps',
    component: () => import('@/views/Gestao-abastecimentos/bombas/bombas.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Parametrization/bombas/:id/abastecer',
    name: 'Fill the pump',
    component: () => import('@/views/Gestao-abastecimentos/bombas/bomba_form.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Parametrization/Rotas-teste',
    name: 'Route Distances',
    component: () => import('@/views/Gestao-abastecimentos/rotas-teste/RotaTeste.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Parametrization/Rotas-teste/:id/details',
    name: 'route-details-demo',
    component: () => import('@/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue'),
  },
  {
    path: '/Parametrization/Projects',
    name: 'Projects',
    component: () => import('@/views/Gestao-abastecimentos/projectos/lista.vue'),
  },
  {
    path: '/Parametrization/:name/Report',
    name: 'Project Report',
    component: () => import('@/views/Gestao-abastecimentos/projectos/detalhes.vue'),
  },
  {
    path: '/Parametrization/Routes-Supply',
    name: 'Routes Supply',
    component: () => import('@/views/Gestao-abastecimentos/rotas/rotas.vue'),
    meta: {
      authOnly: true,
    },
  },
]

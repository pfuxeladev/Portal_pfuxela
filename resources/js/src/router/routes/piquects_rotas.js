export default
[
  {
    path: '/Picket/Cars',
    name: 'Cars',
    component: () => import('@/views/Gestao-pickete/Viaturas/viaturaLista.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/Cars/New-car',
    name: 'New-car',
    component: () => import('@/views/Gestao-pickete/Viaturas/viaturaForm.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/Cars/:id/Car-edit',
    name: 'Edit-car',
    component: () => import('@/views/Gestao-pickete/Viaturas/viaturaEditForm.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/Cars/:id/details',
    name: 'cars-details',
    component: () => import('@/views/Gestao-pickete/Viaturas/viatura-details.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/Occurrences',
    name: 'Occurrences',
    component: () => import('@/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/Occurrences/:id/Occurrence-details',
    name: 'Occurrence-details',
    component: () => import('@/views/Gestao-pickete/relatorios/OcorrenciaDetails.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/vehicle-movements',
    name: 'Vehicle-movements',
    component: () => import('@/views/Gestao-pickete/relatorios/ocorrencias.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/vehicle-movements/CheckListOut',
    name: 'CheckList-Out',
    component: () => import('@/views/Gestao-pickete/relatorios/nova_saida.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/vehicle-movements/:id/CheckListIn',
    name: 'CheckList-In',
    component: () => import('@/views/Gestao-pickete/relatorios/nova_entrada.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/vehicle-movements/:id/CheckList-out-details',
    name: 'CheckList-out-details',
    component: () => import('@/views/Gestao-pickete/relatorios/saidaDetails.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/vehicle-movements/:id/CheckList-in-details',
    name: 'CheckList-in-details',
    component: () => import('@/views/Gestao-pickete/relatorios/entradasDetails.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/drivers',
    name: 'Drivers',
    component: () => import('@/views/Gestao-pickete/relatorios/motoristas/lista.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/drivers/New-Driver',
    name: 'New-Driver',
    component: () => import('@/views/Gestao-pickete/relatorios/motoristas/new_motorista.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/:id/driver-details',
    name: 'driver-details',
    component: () => import('@/views/Gestao-pickete/relatorios/motoristas/details.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/drivers/driver-edit',
    name: 'driver-edit',
    component: () => import('@/views/Gestao-pickete/relatorios/motoristas/new_motorista.vue'),
    meta: {
      authOnly: true,
    },
  },
  {
    path: '/Picket/allocate-vehicles',
    name: 'allocate-vehicles',
    component: () => import('@/views/Gestao-pickete/Viaturas/AlocarViatura.vue'),
    meta: {
      authOnly: true,
    },
  },
]

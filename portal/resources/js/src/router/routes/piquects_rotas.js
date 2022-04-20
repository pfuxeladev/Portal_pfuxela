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
    path: '/Picket/Occurrences',
    name: 'Occurrences',
    component: () => import('@/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue'),
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
]

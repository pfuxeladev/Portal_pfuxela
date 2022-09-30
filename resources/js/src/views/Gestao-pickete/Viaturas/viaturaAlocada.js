import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function viatursAlocadasList() {
  // Use toast
  const toast = useToast()

  const refViaturaAlocadaListTable = ref(null)

  const tableColumns = [
    { key: 'matricula', sortable: true },
    { key: 'ltr_por_km', sortable: true },
    { key: 'combustivel', sortable: true },
    { key: 'capacidade_tanque', sortable: true },
    { key: 'kilometragem_ant', sortable: true },
    { key: 'kilometragem', sortable: true },
    { key: 'km_percorridos', sortable: true },
    { Key: 'qtd_disponivel', sortable: true },
    { key: 'qtd_prevista', sortable: true },
    { Key: 'rotas', sortable: true },
    { key: 'actions' },
  ]

  const perPage = ref(10)
  const totalViaturas = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)

  const dataMeta = computed(() => {
    const localItemsCount = refViaturaAlocadaListTable.value ? refViaturaAlocadaListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalViaturas.value,
    }
  })

  const refetchData = () => {
    refViaturaAlocadaListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchViaturasAlocadas = (ctx, callback) => {
    store
      .dispatch('Picket/alocatedVehicles', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
      })
      .then(response => {
        const viaturas = response.data

        callback(viaturas.data)
        totalViaturas.value = viaturas.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching users list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  return {
    tableColumns,
    perPage,
    currentPage,
    totalViaturas,
    dataMeta,
    perPageOptions,
    refetchData,
    searchQuery,
    sortBy,
    isSortDirDesc,
    fetchViaturasAlocadas,
    refViaturaAlocadaListTable,
  }
}

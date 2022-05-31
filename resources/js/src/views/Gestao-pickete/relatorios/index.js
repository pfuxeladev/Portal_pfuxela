import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function OcorrenciasList() {
  // Use toast
  const toast = useToast()

  const refOcorrenciaListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'codigo', sortable: true },
    { key: 'Data', sortable: true },
    { key: 'Hora', sortable: true },
    { key: 'motorista', sortable: true },
    { key: 'Desrição', sortable: true },
    { key: 'viatura', sortable: true },
    { key: 'motorista', sortable: true },
    { key: 'created_by.email', sortable: true },
    { key: 'status', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalOcorrencias = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refOcorrenciaListTable.value ? refOcorrenciaListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalOcorrencias.value,
    }
  })

  const refetchData = () => {
    refOcorrenciaListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], () => {
    refetchData()
  })

  const fetchOcorrencias = (ctx, callback) => {
    store
      .dispatch('Picket/fetchOcorrencias', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        role: roleFilter.value,
        plan: planFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const viaturas = response.data

        callback(viaturas.data)
        totalOcorrencias.value = viaturas.total
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
    fetchOcorrencias,
    tableColumns,
    perPage,
    currentPage,
    totalOcorrencias,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refOcorrenciaListTable,

    refetchData,

    // Extra Filters
    roleFilter,
    planFilter,
    statusFilter,
  }
}

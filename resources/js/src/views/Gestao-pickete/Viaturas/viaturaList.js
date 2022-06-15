import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function viaturaList() {
  // Use toast
  const toast = useToast()

  const refViaturaListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'matricula', sortable: true },
    { key: 'ano_fabrico', sortable: true },
    { key: 'lotacao', sortable: true },
    { key: 'capacidade_tanque', sortable: true },
    { key: 'capacidade_media', sortable: true },
    { key: 'tipo_combustivel', sortable: true },
    { key: 'modelo.nome_modelo', sortable: true },
    { key: 'marca.nome', sortable: true },
    { key: 'created_by.email', sortable: true },
    { key: 'estado', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalViaturas = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refViaturaListTable.value ? refViaturaListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalViaturas.value,
    }
  })

  const refetchData = () => {
    refViaturaListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], () => {
    refetchData()
  })

  const fetchViaturas = (ctx, callback) => {
    store
      .dispatch('Picket/fetchViaturas', {
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
    fetchViaturas,
    tableColumns,
    perPage,
    currentPage,
    totalViaturas,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refViaturaListTable,

    refetchData,

    // Extra Filters
    roleFilter,
    planFilter,
    statusFilter,
  }
}

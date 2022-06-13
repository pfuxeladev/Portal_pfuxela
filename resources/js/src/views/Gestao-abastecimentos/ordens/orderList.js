import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useOrdersList() {
  // Use toast
  const toast = useToast()

  const refOrdersListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'cogido_ordem', sortable: true },
    { key: 'data_de_emissao', sortable: true },
    { key: 'bombas.nome_bombas', sortable: true },
    { key: 'status', sortable: true },
    { Key: 'emitida_por', sortable: true },
    { key: 'acções' },
  ]
  const perPage = ref(10)
  const totalOrders = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const rangeDate = ref(null)
  const bombasFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refOrdersListTable.value ? refOrdersListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalOrders.value,
    }
  })

  const refetchData = () => {
    refOrdersListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, rangeDate, bombasFilter, statusFilter], () => {
    refetchData()
  })

  const fetchOrders = (ctx, callback) => {
    store
      .dispatch('Supply/fetchOrders', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        orderDate: rangeDate.value,
        bombasFilter: bombasFilter.value,
        status: statusFilter.value,
      })
      .then(response => {
        const Orders = response.data

        callback(Orders.data)
        totalOrders.value = Orders.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching Orderss list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveOrdersStatusVariant = status => {
    if (status === 'pendente') return 'warning'
    if (status === 'aprovada') return 'success'
    if (status === 'cancelada') return 'danger'
    return 'primary'
  }

  return {
    fetchOrders,
    tableColumns,
    perPage,
    currentPage,
    totalOrders,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refOrdersListTable,

    resolveOrdersStatusVariant,
    refetchData,

    // Extra Filters
    rangeDate,
    bombasFilter,
    statusFilter,
  }
}

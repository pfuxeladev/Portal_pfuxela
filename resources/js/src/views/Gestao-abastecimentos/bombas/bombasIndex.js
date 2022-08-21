import { ref, watch, computed } from '@vue/composition-api'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useBombasList() {
  // Use toast
  const toast = useToast()

  const refOrderListTable = ref(null)

  const tableColumns = [
    { key: 'Codigo', sortable: true },
    { key: 'estado', sortable: true },
    { key: 'viaturas', sortable: true },
    { key: 'qtd', sortable: true },
    { key: 'subtotal', sortable: true },
    { key: 'rota', sortable: true },
    { key: 'autor', sortable: true },

  ]

  const perPage = ref(10)
  const totalOrdens = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const intervalo = ref('')

  const dataMeta = computed(() => {
    const localItemsCount = refOrderListTable.value ? refOrderListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalOrdens.value,
    }
  })

  const refetchData = () => {
    refOrderListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, intervalo], () => {
    refetchData()
  })

  const fetchOrdens = (ctx, callback) => {
    store
      .dispatch('app-bombas/fetchOrdemLists', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        intervalo: intervalo.value,
      })
      .then(response => {
        const ordens = response.data

        callback(ordens.data)
        totalOrdens.value = ordens.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro na listagem das ordens',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  return {
    fetchOrdens,
    perPage,
    tableColumns,
    currentPage,
    totalOrdens,
    intervalo,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refetchData,
  }
}

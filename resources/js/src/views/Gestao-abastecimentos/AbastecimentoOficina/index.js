import { ref, watch, computed } from '@vue/composition-api'

export default function WorkShopOrders() {
  const WorkShopTableRef = ref([])

  const CollumnFields = [
    { key: 'Data_submissao', sortable: true },
    { key: 'Codigo', sortable: true },
    { key: 'Viatura', sortable: true },
    { key: 'Leitura (Km)', sortable: true },
    { key: 'Qtd_disp(trs)', sortable: true },
    { key: 'Viatura', sortable: true },
    { key: 'Qtd', sortable: true },
    { key: 'Bombas', sortable: true },
    { key: 'Chefe_Oficina', sortable: true },
    { key: 'Submetido_por', sortable: true },
    { key: 'Aprovado_por', sortable: true },
  ]
  const perPage = ref(10)
  const totalOrders = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const bombasFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = WorkShopTableRef.value ? WorkShopTableRef.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalOrders.value,
    }
  })

  const refetchData = () => {
    WorkShopTableRef.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, bombasFilter], () => {
    refetchData()
  })

  const fetchWorkShopOrder = (ctx, callback) => {

  }

  return {
    WorkShopTableRef,
    CollumnFields,
    perPage,
    totalOrders,
    currentPage,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    bombasFilter,
    refetchData,
    fetchWorkShopOrder,
    dataMeta,
  }
}

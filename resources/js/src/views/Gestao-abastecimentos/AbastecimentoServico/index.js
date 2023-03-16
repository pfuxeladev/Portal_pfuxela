import { ref, watch, computed } from '@vue/composition-api'

function AbastecimentoService() {
  const TableAbastecimentoServicoRef = ref(null)
  const perPage = ref(10)
  const totalOrderServices = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const querySearch = ref()
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const bombasFilter = ref(null)

  const columnField = [
    { key: 'Codigo', sortable: true },
    { key: 'Viatura', sortable: true },
    { key: 'Qtd_abastecida', sortable: true },
    { key: 'Qtd_actual', sortable: true },
    { key: 'Bombas', sortable: true },
    { key: 'Cliente', sortable: true },
    { key: 'Contacto', sortable: true },
    { key: 'Local_recolha', sortable: true },
    { key: 'Local_chegada', sortable: true },
    { key: 'Hora_partida', sortable: true },
    { key: 'Hora_chagada', sortable: true },
    { key: 'requisitado_por', sortable: true },
    { key: 'Aprovado_por', sortable: true },
    { key: 'acção' },
  ]

  const dataMeta = computed(() => {
    const localItemsCount = TableAbastecimentoServicoRef.value ? TableAbastecimentoServicoRef.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalOrderServices.value,
    }
  })

  const refetchData = () => {
    TableAbastecimentoServicoRef.value.refresh()
  }

  watch([currentPage, perPage, querySearch, bombasFilter], () => {
    refetchData()
  })

  return {
    TableAbastecimentoServicoRef,
    perPage,
    totalOrderServices,
    currentPage,
    perPageOptions,
    querySearch,
    sortBy,
    isSortDirDesc,
    dataMeta,
    bombasFilter,
    columnField,
  }
}

export default AbastecimentoService()

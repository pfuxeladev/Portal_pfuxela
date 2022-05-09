import { ref, watch, computed } from '@vue/composition-api'
// import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useOcorrenciaList() {
  // Use toast
  const toast = useToast()

  const refSaidasTableList = ref(null)
  const refEntradaTableList = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'Data_de_registo', sortable: true },
    { key: 'Matricula', sortable: true },
    { key: 'Motorista', sortable: true },
    { key: 'Tipo', sortable: true },
    { Key: 'Criado_por', sortable: true },
    { key: 'acções' },
  ]
  const tableColumns1 = [
    { key: 'Data_de_registo', sortable: true },
    { key: 'Matricula', sortable: true },
    { Key: 'Matricula2', sortable: true },
    { key: 'Motorista', sortable: true },
    { key: 'Motorista2', sortable: true },
    { key: 'Tipo', sortable: true },
    { Key: 'Criado_por', sortable: true },
    { key: 'acções' },
  ]
  const perPage = ref(10)
  const totalSaidas = ref(0)
  const totalEntradas = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const rotaFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refSaidasTableList.value ? refSaidasTableList.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalSaidas.value,
    }
  })
  const dataMeta2 = computed(() => {
    const localItemsCount = refEntradaTableList.value ? refEntradaTableList.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalEntradas.value,
    }
  })

  const refetchData = () => {
    refSaidasTableList.value.refresh()
  }
  const refetchData1 = () => {
    refEntradaTableList.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, rotaFilter], () => {
    refetchData()
    refetchData1()
  })

  const fetchSaidas = (ctx, callback) => {
    store
      .dispatch('Picket/fetchSaidas', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        rota: rotaFilter.value,
      })
      .then(response => {
        const CheckListOut = response.data

        callback(CheckListOut.data)
        totalSaidas.value = CheckListOut.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro na listagem de CheckListOut',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  const fetchEntradas = (ctx, callback) => {
    store
      .dispatch('Picket/fetchEntradas', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        rota: rotaFilter.value,
      })
      .then(response => {
        const checklistIn = response.data

        callback(checklistIn.data)
        totalSaidas.value = checklistIn.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro na listagem de entrada de viaturas',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  return {
    fetchSaidas,
    fetchEntradas,
    tableColumns,
    tableColumns1,
    perPage,
    currentPage,
    totalSaidas,
    totalEntradas,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refSaidasTableList,
    refEntradaTableList,
    dataMeta2,
    refetchData,
    refetchData1,

    // Extra Filters
    rotaFilter,
  }
}

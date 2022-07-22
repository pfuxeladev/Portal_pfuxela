import { ref, watch, computed } from '@vue/composition-api'
// import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useRelatorioEntradaList() {
  // Use toast
  const toast = useToast()

  const refEntradaTableList = ref(null)

  const tableColumns = [
    { key: 'Data_de_registo', sortable: true },
    { key: 'Hora_de_saida', sortable: true },
    { key: 'Hora_da_chegada', sortable: true },
    { key: 'Matricula', sortable: true },
    { key: 'Kilometragem_actual', sortable: true },
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
    const localItemsCount = refEntradaTableList.value ? refEntradaTableList.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalSaidas.value,
    }
  })

  const refetchData = () => {
    refEntradaTableList.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, rotaFilter], () => {
    refetchData()
    // refetchData1()
  })

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
    fetchEntradas,
    tableColumns,
    perPage,
    currentPage,
    totalSaidas,
    totalEntradas,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refEntradaTableList,
    refetchData,
    // Extra Filters
    rotaFilter,
  }
}

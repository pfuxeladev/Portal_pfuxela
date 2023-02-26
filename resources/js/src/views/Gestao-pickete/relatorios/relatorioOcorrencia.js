import { ref, watch, computed } from '@vue/composition-api'
// import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'
import { title } from '@core/utils/filter'

export default function useOcorrenciaList() {
  // Use toast
  const toast = useToast()

  const refSaidasTableList = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'Data_de_registo', sortable: true },
    { key: 'Hora_de_saida', sortable: true },
    { key: 'Matricula', sortable: true },
    { key: 'Kilometragem_na_saida', sortable: true },
    { key: 'Motorista', sortable: true },
    { Key: 'Criado_por', sortable: true },
    { key: 'acções' },
  ]

  const perPage = ref(15)
  const totalSaidas = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [15, 30, 75, 100]
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

  const refetchData = () => {
    refSaidasTableList.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
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

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  return {
    fetchSaidas,
    tableColumns,
    perPage,
    currentPage,
    totalSaidas,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refSaidasTableList,

    refetchData,
    // Extra Filters
    rotaFilter,
  }
}

import { ref, watch, computed } from '@vue/composition-api'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useAbastecimentoList() {
  // Use toast
  const toast = useToast()

  const refAbastecimentoListTable = ref(null)
  const refAbstRecorrente = ref(null)
  // Table Handlers
  const tableColumns = [
    { key: 'ordem.codigo_ordem', sortable: true },
    { key: 'qtd_ant', sortable: true },
    { key: 'qtd_rec', sortable: true },
    { key: 'estado', sortable: true },
    { key: 'bombas', sortable: true },
    { key: 'Data_de_emissao', sortable: true },
    { key: 'user.name', sortable: true },
    { key: 'acções' },
  ]

  const fieldCollumns = [
    { key: 'ordem', sortable: true },
    { key: 'bombas', sortable: true },
    { key: 'viatura', sortable: true },
    { key: 'motorista', sortable: true },
    { key: 'hora_de_saida', sortable: true },
    { key: 'user', sortable: true },
    { key: 'acções' },
  ]
  const perPage = ref(10)
  const totalAbastecimentos = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refAbastecimentoListTable.value ? refAbastecimentoListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalAbastecimentos.value,
    }
  })

  const dataMeta2 = computed(() => {
    const localItemsCount = refAbstRecorrente.value ? refAbstRecorrente.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalAbastecimentos.value,
    }
  })
  const refetchData2 = () => {
    refAbstRecorrente.value.refresh()
  }
  const refetchData = () => {
    refAbastecimentoListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], () => {
    refetchData()
    refetchData2()
  })

  const fetchAbastecimentos = (ctx, callback) => {
    store
      .dispatch('Supply/fetchAbastecimentos', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
      })
      .then(response => {
        const abastecimento = response.data

        callback(abastecimento.data)
        totalAbastecimentos.value = abastecimento.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro na listagem de abastecimentos',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }
  //   fetch abastecimento recorrente

  const fetchAbstRecorrente = (ctx, callback) => {
    store
      .dispatch('Supply/AbastecimentoRecorrente', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
      })
      .then(response => {
        const abastecimento = response.data

        callback(abastecimento.data)
        totalAbastecimentos.value = abastecimento.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro na listagem de abastecimentos',
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
    fetchAbastecimentos,
    tableColumns,
    perPage,
    currentPage,
    totalAbastecimentos,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refAbastecimentoListTable,

    refetchData,

    fetchAbstRecorrente,
    refAbstRecorrente,
    fieldCollumns,
    dataMeta2,
    refetchData2,
    // Extra Filters
    roleFilter,
    planFilter,
    statusFilter,
  }
}

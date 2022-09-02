import { ref, watch, computed } from '@vue/composition-api'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useAbstTecorrenteList() {
  // Use toast
  const toast = useToast()

  const refAbstRecorrente = ref(null)
  // Table Handlers
  const fieldCollumns = [
    { key: 'ordem', sortable: true },
    { key: 'bombas', sortable: true },
    { key: 'viatura', sortable: true },
    { key: 'motorista', sortable: true },
    { key: 'hora_de_saida', sortable: true },
    // { key: 'rota', sortable: true },
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

  watch([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], () => {
    refetchData2()
  })
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
    perPage,
    currentPage,
    totalAbastecimentos,

    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

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

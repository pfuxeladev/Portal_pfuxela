import { ref, computed, watch } from '@vue/composition-api'
// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

function AdministrativeService() {
  const AdministrativeTableRef = ref(null)
  const toast = useToast()
  const perPage = ref(10)
  const totalOrders = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const bombasFilter = ref(null)

  const FieldColumn = [
    { key: 'Data_submissao', sortable: true },
    { key: 'Codigo', sortable: true },
    { key: 'Viatura', sortable: true },
    { key: 'Leitura (Km)', sortable: true },
    { key: 'Qtd_disp(trs)', sortable: true },
    { key: 'Viatura', sortable: true },
    { key: 'Qtd', sortable: true },
    { key: 'Bombas', sortable: true },
    { key: 'Nr_passageiros', sortable: true },
    { key: 'descricao_do_expediente', sortable: true },
    { key: 'Submetido_por', sortable: true },
    { key: 'Aprovado_por', sortable: true },
  ]
  const dataMeta = computed(() => {
    const localItemsCount = AdministrativeTableRef.value ? AdministrativeTableRef.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalOrders.value,
    }
  })

  const refetchData = () => {
    AdministrativeTableRef.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, bombasFilter], () => {
    refetchData()
  })

  const fetchAdminOrders = (ctx, callback) => {
    store.dispatch('Supply/abastecimentoServicos', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
    })
      .then(response => {
        const adminOrderService = response.data

        callback(adminOrderService.data)
        totalOrders.value = adminOrderService.total
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
  return {
    AdministrativeTableRef,
    FieldColumn,
    perPage,
    dataMeta,
    perPageOptions,
    sortBy,
    isSortDirDesc,
    bombasFilter,
    fetchAdminOrders,
  }
}

export default AdministrativeService()

import { ref, watch, computed } from '@vue/composition-api'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useRelatorioList() {
  // Use toast
  const toast = useToast()
  //   Get Relatorio Geral de abastecimentos
  const perPage = ref(10)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const searchDatas = ref(null)
  const intervalo = ref(null)
  const RelatorioGeral = ref(null)
  const totalHistoricos = ref(null)
  const dateOptions = ref(null)
  const dateReport = ref(null)
  const bombaNome = ref(null)

  const dataHistory = computed(() => {
    const localItemsCount = RelatorioGeral.value ? RelatorioGeral.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalHistoricos.value,
    }
  })

  const refetchHistory = () => {
    RelatorioGeral.value.refresh()
  }
  watch([currentPage, perPage, searchDatas, intervalo, dateReport, bombaNome], () => {
    refetchHistory()
  })

  const generalReport = (ctx, callback) => {
    store.dispatch('Supply/getHistory', {
      q: searchDatas.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
      intervalo: intervalo.value,
      dateReport: dateReport.value,
      bombaNome: bombaNome.value,
    }).then(response => {
      const Historico = response.data
      callback(Historico.data)
      totalHistoricos.value = Historico.total
    }).catch(() => {
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
    // Historico Geral de abastecimento
    refetchHistory,
    generalReport,
    dateOptions,
    RelatorioGeral,
    totalHistoricos,
    perPageOptions,
    dataHistory,
    searchDatas,
    bombaNome,
    intervalo,
    dateReport,
    perPage,
    currentPage,
    sortBy,
    isSortDirDesc,
  }
}

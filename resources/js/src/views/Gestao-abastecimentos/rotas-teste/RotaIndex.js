import { ref } from '@vue/composition-api'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useRotaList() {
  // Use toast
  const toast = useToast()

  const refRotaDistanceListTable = ref(null)
  // Table Handlers
  const tableColumns = [
    {
      key: 'id',
      sortable: true,
    },
    {
      key: 'projecto',
      sortable: true,
    },
    { key: 'rota', sortable: true },
    { key: 'distancia_actual', sortable: true },
    { key: 'data_actual', sortable: true },

    { key: 'actions' },
  ]

  const refetchData = () => {
    refRotaDistanceListTable.value.refresh()
  }
  const fetchRotas = (ctx, callback) => {
    store
      .dispatch('ROTAS/fetchRotas').then(response => {
        const rotas = response.data
        callback(rotas)
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro na listagem das rotas',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }
  return {
    fetchRotas,
    refetchData,
    tableColumns,
    refRotaDistanceListTable,

  }
}

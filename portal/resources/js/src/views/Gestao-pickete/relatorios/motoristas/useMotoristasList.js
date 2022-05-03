import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useMotoristasList() {
  // Use toast
  const toast = useToast()

  const refDriverTableList = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'Nome_completo', sortable: true },
    { key: 'Endere&ccedil;o', sortable: true },
    { key: 'Cargo', sortable: true },
    { key: 'Departamento', sortable: true },
    { key: 'data_de_nascimento', sortable: true },
    { Key: 'NUIT', sortable: true },
    { key: 'Genero', sortable: true },
    { key: 'Documento', sortable: true },
    { key: 'Nr_do_documento', sortable: true },
    { Key: 'Carta_de_conducao', sortable: true },
    { key: 'Departamento', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalDrivers = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const departmentFilter = ref(null)

  const dataMeta = computed(() => {
    const localItemsCount = refDriverTableList.value ? refDriverTableList.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalDrivers.value,
    }
  })

  const refetchData = () => {
    refDriverTableList.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, departmentFilter], () => {
    refetchData()
  })

  const fetctDriver = (ctx, callback) => {
    store
      .dispatch('piquet-motorista/fetchDrivers', {
        q: searchQuery.value,
        perPage: perPage.value,
        page: currentPage.value,
        sortBy: sortBy.value,
        sortDesc: isSortDirDesc.value,
        departamento: departmentFilter.value,
      })
      .then(response => {
        const motoristas = response.data

        callback(motoristas)
        totalDrivers.value = motoristas.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching motoristas list',
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
    fetctDriver,
    tableColumns,
    perPage,
    currentPage,
    totalDrivers,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refDriverTableList,
    refetchData,

    // Extra Filters
    departmentFilter,
  }
}

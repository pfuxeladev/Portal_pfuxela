import { ref, watch, computed } from '@vue/composition-api'
import { title } from '@core/utils/filter'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'
import router from '@/router'

export default function useRotasList() {
//   Use toast

  const refRotatListTable = ref(null)

  const toast = useToast()
  const perPage = ref(25)
  const totalRotas = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)

  const tableColumns = [
    { key: 'Rota', sortable: true },
    { key: 'Total(MZN)', sortable: true },
    { key: 'Total(Ltr)', sortable: true },
    { key: 'acções', sortable: true },
  ]

  const dataMeta = computed(() => {
    const localItemsCount = refRotatListTable.value
      ? refRotatListTable.value.localItems.length
      : 0
    return {
      from:
        perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalRotas.value,
    }
  })

  const refetchData = () => {
    refRotatListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchRotas = (ctx, callback) => {
    store
      .dispatch(
        'app-projects/fetchRotaProject',
        {
          name: router.currentRoute.params.name,
          q: searchQuery.value,
          perPage: perPage.value,
          page: currentPage.value,
          sortBy: sortBy.value,
          sortDesc: isSortDirDesc.value,
        },
      )
      .then(response => {
        const projects = response.data
        // console.log(projects.value)

        callback(projects.data)
        totalRotas.value = projects.total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching projects list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  return {
    tableColumns,
    refRotatListTable,
    perPage,
    currentPage,
    totalRotas,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refetchData,
    fetchRotas,

  }
}

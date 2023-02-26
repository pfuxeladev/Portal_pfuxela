<template>
  <div class="alocated-car-details" />
</template>

<script>
import {
  BCard,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BFormInput,
  BForm,
  BFormRow,
  BFormGroup,
  BModal,
  BTable,
  BPagination,
  BCardFooter,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue'
import {
  useToast,
} from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import {
  ref,
  onUnmounted,
} from '@vue/composition-api'
import moment from 'moment'
import vSelect from 'vue-select'
import Form from 'vform'
import store from '@/store'
import router from '@/router'
import StoreViaturaModule from './StoreViaturaModule'

export default {
  components: {
    BCard,
    BCardBody,
    BRow,
    BCol,
    BButton,
    BFormInput,
    BForm,
    BFormGroup,
    BFormRow,
    BModal,
    vSelect,
    BTable,
    BPagination,
    BCardFooter,
    BDropdown,
    BDropdownItem,
  },
  setup() {
    const PIQUETE_APP_STORE_MODULE_NAME = 'Picket'

    // Register module
    if (!store.hasModule(PIQUETE_APP_STORE_MODULE_NAME)) {
      store.registerModule(PIQUETE_APP_STORE_MODULE_NAME, StoreViaturaModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PIQUETE_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(PIQUETE_APP_STORE_MODULE_NAME)
      }
    })
    const viaturaData = ref(null)
    let Rotas = []

    store.dispatch('Picket/fetchViatura', { id: router.currentRoute.params.id })
      .then(response => { viaturaData.value = response.data })
      .catch(error => {
        if (error.response.status === 421) {
          viaturaData.value = undefined
        }
      })

    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }

    return {
      viaturaData,
      dateTime,
      Rotas,
    }
  },
}
</script>

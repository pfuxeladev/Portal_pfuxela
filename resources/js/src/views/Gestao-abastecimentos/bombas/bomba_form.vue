<template>
  <div class="section">
    <b-row>
      <b-col
        cols="12"
        xl="12"
        md="12"
      >
        <b-card no-body>
          <b-form />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BCardBody,
  BModal,
  BRow,
  BCol,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BFormFile,
  BFormDatepicker,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Form from 'vform'
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { useToast } from 'vue-toastification/composition'
import router from '@/router'
import store from '@/store'

export default {
  components: {
    BCard,
    BCardBody,
    BModal,
    BRow,
    BCol,
    BButton,
    vSelect,
    BForm,
    BFormGroup,
    BFormInput,
    BFormFile,
    BFormDatepicker,
  },
  setup(props) {
    const toast = useToast()
    const BOMBAS_APP_STORE_MODULE_NAME = 'Supply'
    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(BOMBAS_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(BOMBAS_APP_STORE_MODULE_NAME)
      }
    })
    function RequisitarAbastecimento() {
      return new Promise((resolve, reject) => {
        this.$http.post(`/api/abastecerBomba/${router.currentRoute.params.id}`, this.form.value)
          .then(response => {
            toast({
              component: ToastificationContent,
              props: {
                title: response.data.success,
                icon: 'CheckSquareIcon',
                variant: 'success',
              },
            })
            window.location.reload()
          }).catch(err => {
            if (err.response.status === 421) {
              toast({
                component: ToastificationContent,
                props: {
                  title: err.response.data.error,
                  icon: 'AlertTriangleIcon',
                  variant: 'danger',
                },
              })
            }
          })
      })
    }

    return {
      RequisitarAbastecimento,
      form: new Form({
        qtd_abastecer: 0,
        preco_combustivel: 0,
        iva: false,
      }),
    }
  },
}
</script>

<style>
</style>

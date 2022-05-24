<template>
  <section class="container-fluid">
    <b-card no-body>
        <b-card-header class="pb-50">
        <b-card-title>Actualizar a ordem de abastecimento</b-card-title>
      </b-card-header>
      <b-card-body>
          <b-form>
              <b-form-row>
              <b-col>
                  <b-form-group label="Referencia da ordem" label-for="Referencia da ordem">
                      Ref: {{orderData.refs}}
                  </b-form-group>
              </b-col>
              <b-col>
                  <b-form-group label="Bombas" label-for="Bombas">
                      <v-select v-model="orderData.bombas_id" label="nome_bombas" :options="bombas" :reduce="bombas => bombas.id"></v-select>
                  </b-form-group>
              </b-col>
          </b-form-row>
          </b-form>
      </b-card-body>
    </b-card>
  </section>
</template>

<script>
import {
  BCard,
  BCardTitle,
  BCardBody,
  BCardHeader,
  BRow,
  BCol,
  BButton,
  BModal,
  BFormRow,
  BFormInput,
  BForm,
  BFormText,
  BFormGroup,
  BLink,
  BBadge,
  BFormTextarea,
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ref, onUnmounted } from '@vue/composition-api';
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { useToast } from 'vue-toastification/composition'
import store from '@/store'
import router from '@/router'
import storeOrderModule from './storeOrderModule'
import Form from "vform";
export default {
  components: {
    BCard,
    BCardTitle,
    BCardBody,
    BCardHeader,
    BRow,
    BCol,
    BButton,
    BModal,
    BFormRow,
    BFormInput,
    BForm,
    BFormText,
    BFormGroup,
    BLink,
    BBadge,
    BFormTextarea,
    vSelect,
  },
  data() {
    return {
      bombas: [],
      viaturas: [],
      rotas: [],
    }
  },
  created() {
    this.$http.get('/api/bombas').then(res => {
      this.bombas = res.data
    })
  },
  setup(props) {

    const ORDER_SUPPLY_STORE_MODULE_NAME = 'Supply'
    const toast = useToast()
    // Register module
    if (!store.hasModule(ORDER_SUPPLY_STORE_MODULE_NAME)) { store.registerModule(ORDER_SUPPLY_STORE_MODULE_NAME, storeOrderModule) }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ORDER_SUPPLY_STORE_MODULE_NAME)) { store.unregisterModule(ORDER_SUPPLY_STORE_MODULE_NAME) }
    })

    const form = new Form({
      refs: router.currentRoute.params.refs,
      bomba_id: null,
      abastecer: [{
        projecto_id: null,
        viatura_id: null,
        rota_id: null,
        qtd_abastecer: 0,
        observacao: null,
      }],
    })
    const orderData = ref(
      JSON.parse(
        JSON.stringify(form),
      ),
    )
    store.dispatch('Supply/fetchOrder', {
      refs: router.currentRoute.params.refs,
    })
      .then(response => {
        orderData.value = response.data
      })
      .catch(error => {
        if (error.response.status === 404) {
          orderData.value = undefined
        }
      })

    return {
      orderData,
      form,
    }
  },
}
</script>

<style>
</style>

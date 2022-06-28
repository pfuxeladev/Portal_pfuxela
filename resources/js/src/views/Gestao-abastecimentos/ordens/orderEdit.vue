<template>
  <section class="container-fluid">
    <b-card no-body>
        <b-card-header class="pb-50">
        <b-card-title>Actualizar a ordem de abastecimento</b-card-title>
      </b-card-header>
      <b-card-body>
          <b-form @submit.prevent="Actualizar()">
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
          <b-form-row>
              <b-col cols="12" class="table-responsive" style="height:300px;">
                  <table class="table table-light height-auto">
                      <thead>
                          <tr>
                              <th>viatura</th>
                              <th>projecto</th>
                              <th>rotas</th>
                              <th>qtd</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(vi, z) in orderData.ordem_viatura" :key="z">
                                <td>
                                    {{vi.viatura.matricula}}</td>
                                <td><span v-for="rota in vi.ordem_viatura_rota" :key="rota">{{rota.projecto.name}}</span></td>
                                <td>
                                    <span v-for="(rt, i) in vi.ordem_viatura_rota" :key="i">
                                        {{rt.rota.nome_rota}},
                                    </span>
                                    </td>
                                <td>
                                    <b-form-input type="text" v-model="vi.qtd_abastecida"></b-form-input>
                                </td>
                          </tr>
                      </tbody>
                  </table>
              </b-col>
               <b-button
                  type="submit"
                  variant="outline-primary"
                >
                  Actualizar a ordem
                </b-button>
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
      rota: [],
      projecto: [],
    }
  },
  created() {
    this.$http.get('/api/bombas').then(res => {
      this.bombas = res.data
    })

    this.$http.get('/api/listarViaturas').then(res => {
      this.viaturas = res.data
    })
    this.fetchProjectos()
  },
  methods: {
    fetchProjectos() {
      this.$http.get('/api/listProject').then(response => {
        this.projecto = response.data
      }).catch(err => {
        console.log(err)
      })
    },

    fetchRotas(pro) {
      console.log(pro)
      //   for (let i = 0; i < this.form.abastecer.length; i++ ) {
      this.$http.get(`/api/RotaByProject/${pro}`).then(res => {
        this.rota = res.data
        if (res.data === '') {
          this.$swal.fire({
            icon: 'error',
            title: 'Nao existe nenhuma rota cadastrada!',
          })
        }
      }).catch(err => {
        this.$swal.fire({
          icon: 'error',
          title: 'Erro ao tentar buscar!',
        })
      })
      //   }
    },
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

    const orderData = ref(null)

    const form = ref(
      JSON.parse(
        JSON.stringify(new Form()),
      ),
    )
    store.dispatch('Supply/fetchOrder', {
      refs: router.currentRoute.params.refs,
    })
      .then(response => {
        orderData.value = response.data
        form.value = orderData
      })
      .catch(error => {
        if (error.response.status === 404) {
          orderData.value = undefined
        }
      })

    function Actualizar() {
      store.dispatch('Supply/updateOrder', orderData.value)
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
          this.$router.push({ name: 'supply-details', params: { refs: router.currentRoute.params.refs } })
        })
        .catch(err => {
          if (err) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.erro,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          }
        })
    }

    return {
      orderData,
      form,
      Actualizar,
    }
  },
}
</script>

<style>
</style>

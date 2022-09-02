<template>
  <section
    title="Novo-abastecimento"
    class="invoice-add-wrapper"
  >
    <b-card no-body>
      <b-card-header class="pb-50">
        <h3>Novo Abastecimento</h3>
      </b-card-header>
    </b-card>
    <b-row>
      <b-col
        cols="12"
        class="invoice-add"
      >
<<<<<<< HEAD
=======

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
        <b-form
          @submit.prevent="NovaOrdem()"
          @reset="onReset"
          @keydown="form.onKeydown($event)"
        >
          <b-card
            no-body
            class="invoice-preview-card p-2"
          >
            <b-row>
              <b-col
<<<<<<< HEAD
                cols="6"
                md="6"
              >
                <b>bombas</b>:
                <v-select v-model="form.bombas_id" label="nome_bombas" :options="bomba" :reduce="bomba => bomba.id"></v-select>
=======
                md="12"
                xl="12"
              >
                <b>Refs</b>:  {{form.ordem_id}}
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
              </b-col>
              <hr>
            </b-row>
            <b-row>
              <b-col
                cols="12"
                xl="12"
              >
                <b-card-body class="invoice-padding form-item-section">
                  <div class="table-responsive">
                    <table class="table table-bordered table-stripped">
                      <thead class="thead-light">
                        <tr>
                          <th class="text-danger">
<<<<<<< HEAD
                            viatura(matr)
                          </th>
                          <th>projecto</th>
                          <th>Rota</th>
                          <th>
                            Qtd(<small class="text-lowercase">ltr</small>)
                          </th>
                          <th>Turno</th>
                          <!-- <th>justifica&ccedil;&atilde;o</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="width: 20%">
                            <v-select
                              v-model="form.viatura_id"
                              label="matricula"
                              :options="viatura"
                              :reduce="(viatura) => viatura.id"
                              @input="getQtd()"
                            />
                            ({{ rec_abast }})Litros no tanque
                          </td>
                          <td style="width: 20%">
                            <v-select
                              v-model="form.projecto_id"
                              label="name"
                              :options="projecto"
                              :reduce="(projecto) => projecto.id"
                              @input="fetchRotas"
                            />
                          </td>
                          <td style="width: 30%">
                            <v-select
                              v-model="form.rota_id"
                              multiple
                              label="nome_rota"
                              :options="rota"
                              :reduce="(rota) => rota.id"
                            />
                          </td>
                          <td>
                            <b-form-input
                              v-model="form.qtd_abastecer"
                              type="text"
                              placeholder="Qtd em litros"
                            />
                          </td>
                          <td style="width: 30%">
                            <v-select
                              v-model="form.turno"
                              :options="['manha', 'tarde']"
                            />
=======
                            <i class="fas fa-remove" />
                          </th>
                          <th>viatura(matr)</th>
                          <th>projecto</th>
                          <th>Rota</th>
                          <th>Qtd(<small class="text-lowercase">ltr</small>)</th>
                          <th>Turno</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(abs, index) in form.abastecer"
                          :key="index"
                        >
                          <td style="width:2%">
                            <span
                              class="btn btn-sm btn-outline-danger"
                              @click="rmRow(index)"
                            >
                              <i class="fas fa-trash" />
                            </span>

                          </td>
                          <td style="width:20%">
                            <v-select
                              v-model="abs.viatura_id"
                              label="matricula"
                              :options="viatura"
                              :reduce="(viatura) => viatura.id"
                            />
                            ({{rec_abast}})
                          </td>
                          <td style="width:20%">
                            <v-select label="name" v-model="abs.projecto_id" :options="projecto" :reduce="projecto=>projecto.id"
                             @input="fetchRotas"/>
                          </td>
                          <td style="width:30%">
                            <v-select
                              multiple
                              v-model="abs.rota_id"
                              label="nome_rota"
                              :options="rota"
                              :reduce="(rota)=>rota.id"
                            />

                          </td>
                          <td>
                            <b-form-input
                              v-model="abs.qtd_abastecer"
                              type="number"
                              placeholder="Qtd em litros"
                            />

                          </td>
                          <td style="width:10%">
                            <v-select
                              v-model="abs.turno"
                              :options="['manha','tarde']"
                            />

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td
<<<<<<< HEAD
                            colspan="5"
                            class="content-align-right"
                          >
                            <b-form-group label="Justificação">
                              <b-form-textarea
                                v-model="form.observacao"
                              />
                            </b-form-group>
=======
                            colspan="6"
                            class="content-align-right"
                          >
                            <span
                              class="btn btn-outline-primary btn-sm"
                              @click="add()"
                            >
                              <i class="fas fa-plus" />
                            </span>
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </b-card-body>
<<<<<<< HEAD
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="9">
=======

              </b-col>
            </b-row>
            <b-row>
              <b-col cols="10">
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
                <b-button
                  type="reset"
                  variant="secondary"
                >
                  limpar campos
                </b-button>
              </b-col>
              <b-col
<<<<<<< HEAD
                cols="3"
=======
                cols="2"
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
                class="pull-right float-right"
              >
                <b-button
                  type="submit"
<<<<<<< HEAD
                  variant="outline-primary"
                >
                  adicionar a ordem
                </b-button>
=======
                  variant="outline-success"
                >
                  enviar
                </b-button>

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
              </b-col>
            </b-row>
          </b-card>
        </b-form>
<<<<<<< HEAD
      </b-col>
      <b-col
        v-if="OpenOrder.estado === 'Aberta' || OpenOrder.estado === 'Pendente'"
        cols="12"
      >


        <table class="table table-light">
          <thead class="thead-light">
            <tr>
              <th>Viatura</th>
              <th>Km(actual)</th>
              <th>Qtd a abastecer</th>
              <th>pre&ccedil;o/(ltr)</th>
              <th>Rotas</th>
              <th>Subtotal</th>
              <th>editar</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(order, index) in OpenOrder.ordem_viatura"
              :key="'r'+index"
            >
              <td>{{ order.viatura.matricula }}</td>
              <td>{{ order.viatura.kilometragem }}</td>
              <td>{{ order.qtd_abastecida }}</td>
              <td>
                <span>
                    {{ (order.preco_cunsumo / order.qtd_abastecida) }}
                </span> MZN
            </td>
              <td>
                <span
                  v-for="rotas in order.ordem_viatura_rota"
                  :key="rotas"
                >
                  {{ rotas.rota.nome_rota }},
                </span>
              </td>
              <td>
                  <span>
                {{ order.preco_cunsumo }}
                </span>

              </td>
              <td>
                <b-button
                  sm
                  variant="outline-danger"
                  @click="removerPedido(order)"
                >
                  <i class="fas fa-remove" />
                </b-button>
              </td>
            </tr>
          </tbody>
        </table>
        <hr>
        <b-row class="mt-3">
          <b-col cols="12" class="text-center">
            <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
             @click="enviarPedido(OpenOrder)"
              variant="outline-success"
            >enviar pedido de abastecimento</b-button>
          </b-col>
        </b-row>
      </b-col>
=======

      </b-col>

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    </b-row>
  </section>
</template>

<script>
import {
  BCard,
  BCardTitle,
  BCardSubTitle,
  BCardBody,
  BCollapse,
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
} from 'bootstrap-vue'
import vSelect from 'vue-select'
<<<<<<< HEAD
// eslint-disable-next-line import/no-extraneous-dependencies
import Form from 'vform'
import {
  ref,
  onUnmounted,
} from '@vue/composition-api'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { useToast } from 'vue-toastification/composition'
import Ripple from 'vue-ripple-directive'
import router from '@/router'
import store from '@/store'
import storeAbastecimentos from './storeAbastecimentos'
=======
import Form from 'vform'
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

export default {
  components: {
    BCollapse,
    BCardSubTitle,
    BCardTitle,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    vSelect,
    BFormGroup,
    BButton,
    BModal,
    BFormRow,
    BFormInput,
    BForm,
    BFormText,
    BLink,
    BBadge,
    BFormTextarea,
  },
  data() {
    return {
      viatura: [],
      rota: [],
      projecto: [],
      rec_abast: null,
<<<<<<< HEAD
      bombas: {},
      bomba: [{ id: null, nome_bombas: '' }],
      abastecimento: [],
      OpenOrder: {},
      form: new Form({
        bombas_id: null,
        ordem_id: this.$route.params.refs,
        projecto_id: null,
        viatura_id: null,
        rota_id: null,
        qtd_abastecer: 0,
        observacao: null,
=======
      bombas: [],
      form: new Form({
        ordem_id: this.$route.params.refs,

        abastecer: [{
          projecto_id: null,
          viatura_id: null,
          rota_id: null,
          qtd_abastecer: 0,
          observacao: null,
        }],
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
      }),

    }
  },
  created() {
    this.fetchProjectos()
<<<<<<< HEAD
    this.fetchViaturas()
    this.fetchBombas()
    this.getSubmited()
    this.getQtd()
    this.$http.get('/api/bombas').then(res => {
      this.bomba = res.data
    })
  },
  directives: {
    Ripple,
  },
  mounted() {
    // console.log(this.bombas)
  },
  methods: {
    getQtd() {
      //   alert(viatura_id)
      this.$http.get(`/api/getQtdDisponivel/${this.form.viatura_id}`).then(res => {
=======
    // this.fetchRotas()
    this.fetchViaturas()
    this.fetchBombas()
    // single data
    this.getQtd()
  },
  methods: {
    add() {
      this.form.abastecer.push({
        projecto_id: null,
        viatura_id: null,
        rota_id: null,
        qtd_abastecer: 0,
        observacao: null,
      })
    },
    rmRow(index) {
      this.form.abastecer.splice(index, 1)
    },
    getQtd() {
      //   alert(viatura_id)
      this.$http.get(`/api/getQtdDisponivel/${this.form.abastecer.viatura_id}`).then(res => {
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
        this.rec_abast = res.data
        console.log(this.rec_abast)
      }).catch(err => {

      })
    },
    fetchProjectos() {
      this.$http.get('/api/listProject').then(response => {
        this.projecto = response.data
      }).catch(err => {
        console.log(err)
      })
    },

    fetchRotas() {
      console.log(this.form.abastecer)
<<<<<<< HEAD
      //   for (let i = 0; i < this.form.abastecer.length; i++ ) {
      this.$http.get('/api/todasRotas').then(res => {
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
    fetchBombas() {
      this.$http.get(`/api/bomba/${this.$route.params.refs}`).then(res => {
        this.bombas = res.data
        // console.log(this.bombas)
=======
      for (let i = 0; i < this.form.abastecer.length; i++ ) {
        this.$http.get(`/api/RotaByProject/${this.form.abastecer[i].projecto_id}`).then(res => {
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
      }
    },
    fetchBombas() {
      this.$http.get('/api/bombas').then(res => {
        this.bombas = res.data
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
      })
    },
    fetchViaturas() {
      this.$http.get('/api/listarViaturas').then(res => {
        this.viatura = res.data
      })
    },
<<<<<<< HEAD
    returnAbastecimento() {
      this.$http.get(`/api/CurrentAbst/${this.$route.params.refs}`).then(res => {
        this.abastecimento = res.data
      })
    },
    NovaOrdem() {
      this.$Progress.start()
      this.form.post('/api/Abastecimento').then(res => {
        if (res.status === 200) {
          this.$swal.fire({
            icon: 'success',
            title: res.data.success,
          })
          this.$Progress.finish()
          this.form.reset()
          // eslint-disable-next-line no-restricted-globals
          window.location.reload()
        }
      }).catch(err => {
        if (err.response.status === 421) {
          this.$swal.fire({
            icon: 'error',
            title: err.response.data.erro,
          })
          this.$Progress.fail()
        } else if (err.response.status === 422) {
          this.$swal.fire({
            icon: 'error',
            title: `${err.response.data.errors.viatura_id}<br/>${err.response.data.errors.rota_id}<br/>${err.response.data.errors.turno}<br/>${err.response.data.errors.qtd_abastecer}`,
=======
    NovaOrdem() {
      this.$Progress.start()
      this.form.post('/api/Abastecimento').then(res => {

        this.$swal.fire({
          icon: 'error',
          title: res.data.success,
        })
        this.$Progress.finish()
        this.$router.push({
          name: 'Supply',
        })
        this.form.reset()
      }).catch(err => {
        if (err) {
          this.$swal.fire({
            icon: 'error',
            title: 'Erro ao tentar adicionar!',
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
          })
          this.$Progress.fail()
        }
      })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.reset()
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },

<<<<<<< HEAD
  setup() {
    const toast = useToast()

    const SUPPLY_STORE_MODULE_NAME = 'Supply'
    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.registerModule(SUPPLY_STORE_MODULE_NAME, storeAbastecimentos)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.unregisterModule(SUPPLY_STORE_MODULE_NAME)
    })
    function getSubmited() {
      this.$http.get(`/api/Ordems/${router.currentRoute.params.refs}`)
        .then(response => {
          this.OpenOrder = response.data
          console.log(this.OpenOrder)
        })
        .catch(error => {
          if (error) {
            console.log(error)
            toast({
              component: ToastificationContent,
              props: {
                title: 'Nenhuma viatura submitida a ordem',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          }
        })
    }

    function enviarPedido(order) {
      this.$swal({
        title: 'Submeter a ordem? <br/> Não poderá reverter essa acção!',
        // text: 'Nao podera reverter essa accao!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1',
        },
        buttonsStyling: false,
      }).then(result => {
        if (result.value) {
          store.dispatch('Supply/addAbastecimento', order)
            .then(response => {
              toast({
                component: ToastificationContent,
                props: {
                  title: response.data.success,
                  icon: 'CheckSquareIcon',
                  variant: 'success',
                },
              })
              router.push({ name: 'supply-details', params: { refs: router.currentRoute.params.refs } })
            //   window.location.reload()
            })
            .catch(err => {
              if (err) {
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
        }
      })

    //   console.log(order)
    }
    function removerPedido(order) {
    //   console.log(order)
      store.dispatch('Supply/removeLine', {
        refs: order.id,
      })
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
        })
        .catch(err => {
          if (err.response.status === 421) {
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
      getSubmited,
      enviarPedido,
      removerPedido,
    }
  },

}
</script>
<style>


</style>
=======
}
</script>
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

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
                cols="6"
                md="6"
              >
                <b>bombas</b>:
                <v-select v-model="form.bombas_id" label="nome_bombas" :options="bomba" :reduce="bomba => bomba.id"></v-select>
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
                            viatura(matr)
                          </th>
                          <th>Rotas e projecto</th>
                          <th>Km(s)</th>
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
                              required
                            />
                            ({{ rec_abast }})Litros no tanque
                          </td>
                          <div v-if="form.errors.has('viatura_id')" v-html="form.errors.get('viatura_id')"></div>
                          <td style="width: 20%">
                            <span class="m1" v-for="(rts, r) in form.rota" :key="'r'+r">
                                <span class="badge badge-primary">{{rts.rota_projecto}}</span>
                            </span>
                          </td>
                          <td style="width: 20%">
                                <span class="text-primary">{{TotalDistance}}</span> Km's
                          </td>
                          <td style="width:20%; text-align:center">
                            <b-form-input type="number" steps="0.00" v-model="form.qtd_abastecer"> </b-form-input>
                            <br/>
                            {{qtdAbastecer}}
                        </td>
                          <td style="width: 25%">
                            <v-select
                              v-model="form.turno"
                              :options="['manha', 'tarde']"
                              required
                            />
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td
                            colspan="5"
                            class="content-align-right"
                          >
                            <b-form-group label="Justificação">
                              <b-form-textarea
                                v-model="form.observacao"
                              />
                            </b-form-group>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </b-card-body>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="9">
                <b-button
                  type="reset"
                  variant="secondary"
                >
                  limpar campos
                </b-button>
              </b-col>
              <b-col
                cols="3"
                class="pull-right float-right"
              >
                <b-button
                  type="submit"
                  variant="outline-primary"
                >
                  adicionar a ordem
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-form>
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
      projecto: [],
      rec_abast: null,
      bombas: {},
      bomba: [{ id: null, nome_bombas: '' }],
      abastecimento: [],
      ltr_km: 0,
      OpenOrder: {},
      form: new Form({
        bombas_id: null,
        ordem_id: this.$route.params.refs,
        projecto_id: null,
        viatura_id: null,
        km_total: 0,
        rota: [],
        rota_id: null,
        qtd_abastecer: 0,
        observacao: null,
      }),

    }
  },
  created() {
    this.fetchProjectos()
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
  computed: {
    TotalDistance() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.form.km_total = this.form.rota.reduce((r, item) => r + (item.distancia), 0)

      return this.form.km_total
    },

    qtdAbastecer() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return parseFloat(this.TotalDistance * this.ltr_km) - this.rec_abast
    },
  },
  methods: {
    getQtd() {
      //   alert(viatura_id)
      this.$http.get(`/api/getQtdDisponivel/${this.form.viatura_id}`).then(res => {
        this.rec_abast = res.data
        console.log(this.rec_abast)
      })
      this.$http.get(`/api/getAlocateRoute/${this.form.viatura_id}`).then(res =>{
        this.form.rota = res.data
      })
      this.$http.get(`/api/ltrPkm/${this.form.viatura_id}`).then(res =>{
        this.ltr_km = res.data
      })
    },
    fetchProjectos() {
      this.$http.get('/api/listProject').then(response => {
        this.projecto = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    calculaKm(rts) {
      console.log(rts)
    },
    fetchBombas() {
      this.$http.get(`/api/bomba/${this.$route.params.refs}`).then(res => {
        this.bombas = res.data
        // console.log(this.bombas)
      })
    },
    fetchViaturas() {
      this.$http.get('/api/listarViaturas').then(res => {
        this.viatura = res.data
      })
    },
    returnAbastecimento() {
      this.$http.get(`/api/CurrentAbst/${this.$route.params.refs}`).then(res => {
        this.abastecimento = res.data
      })
    },
    async NovaOrdem() {
      await this.$Progress.start()
      await this.form.post('/api/Abastecimento').then((res) => {
        // console.log(res.data)
        if (res !== undefined) {
          if (res.status === 200) {
            this.$swal.fire({
              icon: 'success',
              title: res.data.success,
            })
            this.$Progress.finish()
            // eslint-disable-next-line no-restricted-globals
            window.location.reload()
          }
        }
      }).catch(err => {
        console.log(err)
        if (err.response.status === 421) {
          this.$swal.fire({
            icon: 'error',
            title: err.response.data.erro,
          })
          this.$Progress.fail()
        } else {
          this.$swal.fire({
            icon: 'error',
            title: `${err.response.data.errors.viatura_id}<br/>${err.response.data.errors.rota_id}<br/>${err.response.data.errors.turno}<br/>${err.response.data.errors.qtd_abastecer}`,
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

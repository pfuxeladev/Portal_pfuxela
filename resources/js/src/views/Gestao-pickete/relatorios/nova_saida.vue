<template>
<section>
    <b-row class="content-header">
        <b-col class="content-header-left mb-2" cols="12" md="9">
            <b-row class="breadcrumb-top">
                <b-col cols="12">
                    <h2 class="content-header-title float-left pr-1 mb-0">
                        Pedido de Autorização de Saida
                    </h2>
                    <div class="breadcrumb-wrapper">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <b-link :to="{ name: 'Vehicle-movements' }" class="router-link-active" target="_self"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-text-top feather feather-home">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" /></svg></b-link>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#" target="_self" class=""> Saida de viatura </a>
                            </li>
                            <li class="breadcrumb-item active">
                                <span aria-current="location"> Autorização </span>
                            </li>
                        </ol>
                    </div>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
    <b-card no-body>
        <b-card-header>
            <b-card-title>
                Formul&aacute;rio de inspen&ccedil;&atilde;o
            </b-card-title>
            <hr>
            <b-row>
                <b-col>
                    <b-button @click="openModal()" variant="outline-primary">criar atributos da checklist</b-button>
                </b-col>
            </b-row>
        </b-card-header>
        <hr>
        <b-card-body>
            <b-form @submit.prevent="OnSubmit">
                <b-row>
                    <b-col cols="12" md="3" lg="6" xl="6">
                        <b-form-group label="Matricula">
                            <v-select v-model="form.viatura_id" label="matricula" :options="viatura" :reduce="viatura => viatura.id" @input="getKmActual()" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="3" lg="6" xl="6">
                        <b-form-group label="Motorista">
                            <v-select v-model="form.motorista_id" label="nome" :options="motoristas" :reduce="motoristas => motoristas.id" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="3" lg="6" xl="6">
                        <b-form-group label="Kilometragem actual">
                            <b-form-input v-model="form.km_inicio" type="text" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="3" lg="6" xl="6">
                        <b-form-group label="hora de partida">
                            <b-form-timepicker v-model="form.hora_inicio" locale="pt-Br" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" md="6" lg="8" xl="10">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>{{chklst}}</td>
                                    <td>
                                        <b-form-radio-group v-model="form.limpezaState" :options="options" :state="state" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nível do Vaso Expansor</td>
                                    <td>
                                        <b-form-radio-group v-model="form.vasoEspansorState" :options="options" :state="state" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nível Liquido Vidro</td>
                                    <td>
                                        <b-form-radio-group v-model="form.LiquidoVidroState" :options="options" :state="state" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nível Oleo de Motor</td>
                                    <td>
                                        <b-form-radio-group v-model="form.OleoMotorState" :options="options" :state="state" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nível Oleo de Direcção</td>
                                    <td>
                                        <b-form-radio-group v-model="form.OleoDirecaoState" :options="options" :state="state" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Nível Oleo de Travões</td>
                                    <td>
                                        <b-form-radio-group v-model="form.OleoTravoesState" :options="options" :state="state" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ar Condicionado</td>
                                    <td>
                                        <b-form-radio-group v-model="form.ACState" :options="options" :state="state" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sistema ABS</td>
                                    <td>
                                        <b-form-radio-group v-model="form.SistemaABS_State" :options="options" :state="state" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Cinto de Segurança</td>
                                    <td>
                                        <b-form-checkbox v-model="form.CintoSeguracaState" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tinha Carta de condu&ccedil;&atilde;o</td>
                                    <td>
                                        <b-form-checkbox v-model="form.carta_conducao" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>O Motorista Paticipou no DSS?</td>
                                    <td>
                                        <b-form-checkbox v-model="form.motorista_dss" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kit de primeiros socorros</td>
                                    <td>
                                        <b-form-checkbox v-model="form.kit_1_socorro_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Extintor na saida</td>
                                    <td>
                                        <b-form-checkbox v-model="form.extintor_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Livrete da viatura</td>
                                    <td>
                                        <b-form-checkbox v-model="form.livrete_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Documento de seguros em dia</td>
                                    <td>
                                        <b-form-checkbox v-model="form.seguros_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Taxa de radio de fus&atilde;o</td>
                                    <td>
                                        <b-form-checkbox v-model="form.taxaradio_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tinha uniforme</td>
                                    <td>
                                        <b-form-checkbox v-model="form.uniforme" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lista de presen&ccedil;a</td>
                                    <td>
                                        <b-form-checkbox v-model="form.lista_presenca" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Colete na saida</td>
                                    <td>
                                        <b-form-checkbox v-model="form.colete_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Pneu sobressalente</td>
                                    <td>
                                        <b-form-checkbox v-model="form.pneu_sobr_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Macaco na saida</td>
                                    <td>
                                        <b-form-checkbox v-model="form.macaco_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Licen&ccedil;a na saida</td>
                                    <td>
                                        <b-form-checkbox v-model="form.licenca_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Documento de inspen&ccedil;&atilde;o</td>
                                    <td>
                                        <b-form-checkbox v-model="form.inspencao_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tri&acirc;ngulo</td>
                                    <td>
                                        <b-form-checkbox v-model="form.triangulo_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Chave de rodas</td>
                                    <td>
                                        <b-form-checkbox v-model="form.chave_roda_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kit de reboque</td>
                                    <td>
                                        <b-form-checkbox v-model="form.kit_reboque_saida" switch size="lg" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tipo de saida</td>
                                    <td>
                                        Rota:
                                        <b-form-checkbox v-model="form.isRota" switch size="lg" @input="changeOption" />
                                        <br>
                                        Outros:
                                        <b-form-checkbox v-model="form.isOuthers" switch size="lg" @input="changeOption1" />
                                    </td>
                                </tr>
                                <tr v-show="form.isRota === true" id="rotas">
                                    <td colspan="2">
                                        <b-form-group label="Rotas a tomar">
                                            <v-select v-model="form.rota_id" multiple label="nome_rota" :options="rota" :reduce="rota => rota.id" />
                                        </b-form-group>
                                    </td>
                                </tr>
                                <tr v-show="form.isOuthers === true" id="others">
                                    <td colspan="2">
                                        <b-row>
                                            <b-col>
                                                <b-form-group label="Descreva o proposito do seu trajecto">
                                                    <b-form-textarea v-model="form.trajecto" id="textarea-small" size="sm" placeholder="descreva o trajeto a tomar" />
                                                </b-form-group>

                                            </b-col>
                                            <b-col>
                                                <b-form-group label="hora prevista de partida">
                                                    <b-form-timepicker v-model="form.horaPrevistaSaida" locale="pt-Br" />
                                                </b-form-group>
                                            </b-col>
                                            <b-col>
                                                <b-form-group label="hora prevista de chagada">
                                                    <b-form-timepicker v-model="form.horaPrevistaEntrada" locale="pt-Br" />
                                                </b-form-group>
                                            </b-col>
                                        </b-row>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col cols="6" md="6">
                        <b-button type="reset">
                            limpar
                        </b-button>
                    </b-col>
                    <b-col cols="6" md="6">
                        <b-button type="submit" variant="outline-primary">
                            submeter
                        </b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-card-body>
    </b-card>
    <b-modal ref="Atributos" size="lg" hide-footer title="Novo atributo">
        <b-form @submit.prevent="addMore()">
            <b-row>
                <b-col cols="6">
                    <b-form-group label="Nome do atributo">
                        <b-form-input type="text" v-model="attributeChecklist.checklist_name"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group label="Categoria ocorrencia">
                        <v-select v-model="attributeChecklist.categoria" :options="['Informativa', 'Correctiva', 'Preventiva', 'Manutencao']"></v-select>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group label="Ëmail a encaminhar ocorrencia">
                        <b-form-input type="email" v-model="attributeChecklist.email_forward"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
             <b-row>
                <b-col>
                    <b-button type="submit" variant="outline-success" class="mt-2">
                        <i class="fas fa-paper-plane"></i>
                        adicionar
                    </b-button>
                </b-col>
            </b-row>
        </b-form>

    </b-modal>
</section>
</template>

<script>
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCardTitle,
  BForm,
  BLink,
  BButton,
  BFormGroup,
  BFormInput,
  BFormRadioGroup,
  BFormTextarea,
  BFormTimepicker,
  BFormCheckbox,
  BRow,
  BCol,
  BModal,
} from 'bootstrap-vue'

import vSelect from 'vue-select'

import Form from 'vform'

import {
  useToast
} from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import {
  ref,
  onUnmounted
} from '@vue/composition-api'
import store from '@/store'
import storaRelatorioModule from './storaRelatorioModule'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BForm,
    BLink,
    BButton,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BFormTextarea,
    BRow,
    BCol,
    vSelect,
    BFormTimepicker,
    BFormRadioGroup,
    BModal,
  },
  data() {
    return {
      rota: [],
      motoristas: [],
      viatura: [],
      value: null,

      options: [{
        text: 'Ok',
        value: 'Ok'
      },
      {
        text: 'No',
        value: 'No'
      },
      {
        text: 'Parcial',
        value: 'Parcial'
      },
      {
        text: 'Em Falta',
        value: 'Em Falta'
      },
      ],
      options2: [{
        text: 'Rota',
        value: false
      },
      {
        text: 'Outros Servicos',
        value: false
      },
      {
        text: 'Expediente',
        value: false
      },
      ],
    }
  },
  computed: {
    state() {
      return Boolean(this.value)
    },
  },
  mounted() {
    this.getRotas()
    this.getMotoristas()
    this.getViaturas()
    this.changeOption()
    this.getKmActual()
  },
  methods: {
    getRotas() {
      this.$http.get('/api/todasRotas').then(res => {
        this.rota = res.data
      })
    },
    getViaturas() {
      this.$http.get('/api/listViaturaDentro').then(res => {
        this.viatura = res.data
      })
    },
    getMotoristas() {
      this.$http.get('/api/listMotoristas').then(res => {
        this.motoristas = res.data
      })
    },
    getKmActual() {
      //   console.log(this.form.viatura_id)
      this.$http.get(`/api/kmActual/${this.form.viatura_id}`).then(res => {
        this.form.km_inicio = res.data.kilometragem
      })
    },
    changeOption() {
      if (this.form.isRota === true) {
        this.form.isOuthers = false
      }
    },
    changeOption1() {
      if (this.form.isOuthers === true) {
        this.form.isRota = false
      }
    },

    openModal() {
      this.$refs['Atributos'].show();
    },
  },

  setup(props) {
    const CHECKLISTOUT_STORE_MODULE_NAME = 'Picket'

    if (!store.hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) store.registerModule(CHECKLISTOUT_STORE_MODULE_NAME, storaRelatorioModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) store.unregisterModule(CHECKLISTOUT_STORE_MODULE_NAME)
    })

    const toast = useToast()
    const form = ref(
      JSON.parse(
        JSON.stringify(
          new Form({
            motorista_id: null,
            viatura_id: null,
            isRota: false,
            isOuthers: false,
            carta_conducao: true,
            km_inicio: 0,
            hora_inicio: '0:00',
            limpezaState: '',
            vasoEspansorState: '',
            LiquidoVidroState: '',
            OleoMotorState: '',
            OleoDirecaoState: '',
            OleoTravoesState: '',
            SistemaABS_State: '',
            ACState: '',
            tipo_saida: null,
            uniforme: false,
            CintoSeguracaState: false,
            colete_saida: false,
            lista_presenca: false,
            pneu_sobr_saida: false,
            macaco_saida: false,
            inspencao_saida: false,
            triangulo_saida: false,
            chave_roda_saida: false,
            kit_reboque_saida: false,
            kit_1_socorro_saida: false,
            licenca_saida: false,
            extintor_saida: false,
            livrete_saida: false,
            seguros_saida: false,
            taxaradio_saida: false,
            motorista_dss: false,
            // rotas
            rotas_Lista: [{
              rota_id: null
            }, ],
            // outro trajecto
            trajecto: '',
            horaPrevistaSaida: '0:00',
            horaPrevistaEntrada: '0:00',
          }),
        ),
      ),
    )

    const attributeChecklist = ref(
      JSON.parse(
        JSON.stringify(
          new Form({
            checklist_name: null,
            categoria: '',
            email_forward: '',
          }),
        ),
      ),
    )

    const chklst = ref(null)
    function checkList() {
      store.dispatch('Picket/getAtributos').then(res => {
        chklst.value = res.data
      })
    }


    function addMore() {
      store.dispatch('Picket/addAtributo', attributeChecklist.value).then(res => {
        toast({
          component: ToastificationContent,
          props: {
            title: res.data.success,
            icon: 'CheckSquareIcon',
            variant: 'success',
          },
        })
        attributeChecklist.checklist_name = ''
        attributeChecklist.categoria = ''
        attributeChecklist.checklist_name = ''
        // window.location.reload()
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
    function OnSubmit() {
      store.dispatch('Picket/addCheckListOut', form.value).then(response => {
        toast({
          component: ToastificationContent,
          props: {
            title: response.data.message,
            icon: 'CheckSquareIcon',
            variant: 'success',
          },
        })
        this.$router.push({
          name: 'Vehicle-movements'
        })
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
        } else if (err.response.status === 422) {
          toast({
            component: ToastificationContent,
            props: {
              title: 'Erro..! verifique se seus campos estao devidamente preenchidos',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        } else {
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
    return {
      OnSubmit,
      form,
      attributeChecklist,
      chklst,
      checkList,
      addMore,
    }
  },
}
</script>

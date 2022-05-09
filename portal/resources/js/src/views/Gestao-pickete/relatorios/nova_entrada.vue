<template>
  <section>
    <b-row class="content-header">
      <b-col class="content-header-left mb-2" cols="12" md="9">
        <b-row class="breadcrumb-top">
          <b-col cols="12">
            <h2 class="content-header-title float-left pr-1 mb-0">
              Pedido de Entrada de viatura
            </h2>
            <div class="breadcrumb-wrapper">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <b-link
                    :to="{ name: 'vehicle-movements' }"
                    class="router-link-active"
                    target="_self"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="align-text-top feather feather-home"
                    >
                      <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                      ></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline></svg
                  ></b-link>
                </li>
                <li class="breadcrumb-item">
                  <a href="#" target="_self" class=""> Entrada de viaturas </a>
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
      </b-card-header>
      <hr />
      <b-card-body>
        <b-form @submit.prevent="OnSubmit">
          <b-row>
            <b-col cols="12" md="3" lg="6" xl="6">
              <b-form-group label="Matricula da viatura reserva">
                <v-select v-model="form.viatura_id" label="matricula" :options="viatura" :reduce="viatura => viatura.id"></v-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" lg="6" xl="6">
              <b-form-group label="Motorista">
                <v-select v-model="form.motorista_id" label="nome" :options="motoristas" :reduce="motoristas => motoristas.id"></v-select>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" lg="6" xl="6">
              <b-form-group label="Kilometragem na entrada">
                <b-form-input type="number" v-model="form.km_fim"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" lg="6" xl="6">
              <b-form-group label="hora de entrada">
                <b-form-timepicker v-model="form.hr_fim" locale="pt-Br" />
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" lg="8" xl="10">
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <td style="width:30%">Tinha Carta de condu&ccedil;&atilde;o</td>
                    <td>
                      <b-form-checkbox v-model="form.carta_conducao" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td style="width:30%">O Motorista Paticipou no DSS?</td>
                    <td>
                      <b-form-checkbox v-model="form.motorista_dss" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td style="width:30%">Teste de &aacute;lcool</td>
                    <td>
                      <b-form-checkbox v-model="form.teste_alcool" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td style="width:30%">Kit de primeiros socorros</td>
                    <td>
                      <b-form-checkbox v-model="form.kit_1_socorro_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Extintor na saida</td>
                    <td>
                      <b-form-checkbox v-model="form.extintor_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Livrete da viatura</td>
                    <td>
                      <b-form-checkbox v-model="form.livrete_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Documento de seguros em dia</td>
                    <td>
                      <b-form-checkbox v-model="form.seguros_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Taxa de radio de fus&atilde;o</td>
                    <td>
                      <b-form-checkbox v-model="form.taxaradio_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Tinha uniforme</td>
                    <td>
                      <b-form-checkbox v-model="form.uniforme" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Lista de presen&ccedil;a</td>
                    <td>
                      <b-form-checkbox v-model="form.lista_presenca" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Colete na saida</td>
                    <td>
                      <b-form-checkbox v-model="form.colete_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Pneu sobressalente</td>
                    <td>
                      <b-form-checkbox v-model="form.pneu_sobr_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Macaco na saida</td>
                    <td>
                      <b-form-checkbox v-model="form.macaco_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Documento de inspen&ccedil;&atilde;o</td>
                    <td>
                      <b-form-checkbox v-model="form.inspencao_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Tri&acirc;ngulo</td>
                    <td>
                      <b-form-checkbox v-model="form.triangulo_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Chave de rodas</td>
                    <td>
                      <b-form-checkbox v-model="form.chave_roda_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Kit de reboque</td>
                    <td>
                      <b-form-checkbox v-model="form.kit_reboque_saida" switch size="lg"></b-form-checkbox>
                    </td>
                  </tr>
                  <tr>
                    <td>Houve algum incidente</td>
                    <td>
                         <b-form-checkbox v-model="form.is_incidente" switch size="lg"></b-form-checkbox>

                    </td>
                  </tr>
                  <tr id="rotas" v-show="form.is_incidente === true">
                    <td colspan="2">
                      <b-form-group label="Listar incidentes">

                      </b-form-group>
                    </td>
                  </tr>
                  <tr>
                      <td>Relat&oacute;rio geral</td>
                      <td>
                          <b-form-textarea v-model="form.relatorio_geral"></b-form-textarea>
                      </td>
                  </tr>

                </tbody>
              </table>
            </b-col>
          </b-row>
          <b-row class="mt-2">
              <b-col cols="6" md="6">
                  <b-button type="reset">limpar</b-button>
              </b-col>
              <b-col cols="6" md="6">
                  <b-button type="submit" variant="outline-primary">submeter</b-button>
              </b-col>
          </b-row>
        </b-form>
      </b-card-body>
    </b-card>
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
} from 'bootstrap-vue';

import vSelect from 'vue-select'

import Form from 'vform'


import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { ref, onUnmounted } from '@vue/composition-api'
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
  },
  data() {
    return {
      rota: [],
      motoristas: [],
      viatura: [],
      value: null,

      options: [
        { text: 'Ok', value: 'Ok' },
        { text: 'No', value: 'No' },
        { text: 'Parcial', value: 'Parcial' },
        { text: 'Em Falta', value: 'Em Falta' },
      ],
      options2: [
        { text: 'Rota', value: false },
        { text: 'Outros Servicos', value: false },
        { text: 'Expediente', value: false },
      ],
      form: new Form({
        motorista_id: null,
        viatura_id: null,
        isRota: false,
        isOuthers: false,
        carta_conducao: true,
        km_fim: 0,
        hr_fim: '0:00',
        teste_alcool: false,
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
        extintor_saida: false,
        livrete_saida: false,
        seguros_saida: false,
        taxaradio_saida: false,
        motorista_dss: false,
        relatorio_geral: '',
        is_incidente: false,
        // rotas
        rotas_Lista: [
          { rota_id: null },
        ],
      }),
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
  },
  methods: {
    getRotas() {
      this.$http.get('/api/todasRotas').then(res => {
        this.rota = res.data
      })
    },
    getViaturas() {
      this.$http.get('/api/listarViaturas').then(res => {
        this.viatura = res.data
      })
    },
    getMotoristas() {
      this.$http.get('/api/listMotoristas').then(res => {
        this.motoristas = res.data
      })
    },
    // changeOption() {
    //   if (this.form.is_incidente === true) {
    //     this.form.isOuthers = false
    //   }
    // },
  },

  setup(props) {
    const CHECKLISTOUT_STORE_MODULE_NAME = 'Picket'

    if (!store.hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) store.registerModule(CHECKLISTOUT_STORE_MODULE_NAME, storaRelatorioModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) store.unregisterModule(CHECKLISTOUT_STORE_MODULE_NAME)
    })

    const toast = useToast()
    function OnSubmit() {
      store.dispatch('Picket/addCheckListOut', this.form.value).then(response => {
        toast({
          component: ToastificationContent,
          props: {
            title: response.data.message,
            icon: 'CheckSquareIcon',
            variant: 'success',
          },
        })
        this.$router.push({ name: 'Vehicle-movements' })
      }).catch(err => {
        if (err) {
          toast({
            component: ToastificationContent,
            props: {
              title: 'Erro no cadastro do motorista verifique os campos',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        }
      })
    }
    return {
      OnSubmit,
    }
  },
}
</script>

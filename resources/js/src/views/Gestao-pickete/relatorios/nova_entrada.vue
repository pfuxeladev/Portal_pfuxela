/* eslint-disable vue/require-v-for-key */
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
                  <b-link :to="{ name: 'vehicle-movements' }" class="router-link-active" target="_self"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="align-text-top feather feather-home">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" /></svg></b-link>
                </li>
                <li class="breadcrumb-item">
                  <a href="#" target="_self" class=""> {{checkListIn[0].checklistOut.viatura.matricula}} </a>
                </li>
                <li class="breadcrumb-item active">
                  <span aria-current="location">data da saida: {{ dateTime(checkListIn[0].checklistOut.created_at) }} </span>
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
      <hr>
      <b-card-body>
        <b-form @submit.prevent="OnSubmit" enctype="multipart/form-data">
          <b-row>
            <b-col cols="12" md="3" lg="6" xl="6">
              <b-form-group label="Motorista">
                <v-select v-model="form.motorista_id" label="nome" :options="motoristas" :reduce="(motoristas) => motoristas.id" />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" lg="6" xl="6">
              <b-row>
                <b-col>
                  <b-form-group label="Kilometragem na saida">
                    <b class="text-right"> {{ checkListIn[0].checklistOut.km_inicio }} Km</b>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Kilometragem na entrada">
                    <b-form-input v-model="form.km_fim" type="number" />
                  </b-form-group>
                </b-col>

              </b-row>

            </b-col>
             <b-col cols="12" md="3" lg="6" xl="6">
              <b-form-group label="qtd actual de combustivel">
                <b-form-input v-model="form.litros_tanque" type="text" />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="3" lg="6" xl="6">
              <b-row>
                <b-col>
                  <b-form-group label="hora de saida">
                    <b> {{ checkListIn[0].checklistOut.hr_inicio }} </b>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="hora de entrada">
                    <b-form-timepicker v-model="form.hr_fim" locale="pt-Br" />
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="12" md="6" lg="8" xl="10">
              <table class="table table-bordered">
                <tbody>
                    <tr v-for="(chk, i) in form.checklist_var" :key="'B' + i">
                    <td>
                      <input type="hidden" v-model="chk.id" />
                      {{ chk.checklist_name }}
                    </td>
                    <td>
                      <b-form-group>
                        <b-form-radio-group
                          v-model="chk.opcao"
                          :options="options"
                          required
                        ></b-form-radio-group>
                      </b-form-group>
                    </td>
                  </tr>
                  <tr>
                    <td>Houve algum incidente</td>
                    <td>
                      <b-form-checkbox v-model="form.is_incidente" switch size="lg" />
                    </td>
                  </tr>
                  <tr v-show="form.is_incidente === true" id="rotas">
                    <td colspan="2">
                      <b-form-radio-group>
                        <b-form-radio v-for="inc in incidentes" :key="inc.id" v-model="form.incidente_id" :value="inc.id">
                          {{inc.tipo_incidente}}
                        </b-form-radio>

                      </b-form-radio-group>
                    </td>
                  </tr>
                  <tr>
                    <td>Relat&oacute;rio geral</td>
                    <td>
                      <b-form-textarea v-model="form.relatorio_geral" />
                    </td>
                  </tr>
                  <tr>
                    <td>Anexar Ficheiros</td>
                    <td>
                      <input type="file" class="form-control" placeholder="Selecione ficheiros e descarregue aqui..." drop-placeholder="Drop file here..." v-on:input="onChange" />
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
  BFormRadio,
  BFormTextarea,
  BFormTimepicker,
  BFormCheckbox,
  BRow,
  BCol,
  BFormFile,
} from 'bootstrap-vue'

import vSelect from 'vue-select'

import Form from 'vform'

import {
  useToast,
} from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import {
  ref,
  onUnmounted,
} from '@vue/composition-api'
import moment from 'moment'
import store from '@/store'
import storaRelatorioModule from './storaRelatorioModule'
import router from '@/router'

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
    BFormRadio,
    BFormFile,
  },
  data() {
    return {
      rota: [],
      motoristas: [],
      viatura: [],
      value: null,
      incidentes: [],

      options: [{
        text: 'Ok',
        value: 'Ok',
      },
      {
        text: 'No',
        value: 'No',
      },
      {
        text: 'Parcial',
        value: 'Parcial',
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
  },
  created() {
    this.$http.get('/api/listaIncedentes').then(res => {
      this.incidentes = res.data
    })

    store.dispatch('Picket/getAtributos').then(res => {
      this.form.checklist_var = res.data
    })
  },
  methods: {
    getRotas() {
      this.$http.get('/api/todasRotas').then(res => {
        this.rota = res.data
      })
    },
    getViaturas() {
      this.$http.get('/api/listViaturaFora').then(res => {
        this.viatura = res.data
      })
    },
    getMotoristas() {
      this.$http.get('/api/listMotoristas').then(res => {
        this.motoristas = res.data
      })
    },

  },

  setup() {
    const CHECKLISTOUT_STORE_MODULE_NAME = 'Picket'

    if (!store.hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) {
      store.registerModule(
        CHECKLISTOUT_STORE_MODULE_NAME,
        storaRelatorioModule,
      )
    }

    onUnmounted(() => {
      if (store.hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) {
        store.unregisterModule(CHECKLISTOUT_STORE_MODULE_NAME)
      }
    })

    const toast = useToast()
    const checkListIn = ref(null)
    const listFiles = []
    // const ficheiros = ref(null)
    const form = ref(
      JSON.parse(
        JSON.stringify(
          new Form({
            check_list_out_id: null,
            motorista_id: null,
            viatura_id: router.currentRoute.params.id,
            km_fim: 0,
            hr_fim: '0:00',
            relatorio_geral: '',
            is_incidente: false,
            anexos: null,
            litros_tanque: '',
            checklist_var: {
              id: null, checklist_name: '', opcao: '',
            },
            incidente_id: null,
          }),
        ),
      ),
    )

    store.dispatch('Picket/fetchSaida', { id: router.currentRoute.params.id })
      .then(response => { checkListIn.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          checkListIn.value = undefined
        }
      })
    function onChange(e) {
      const ficheiros = e.target.files[0]

      const reader = new FileReader()
      reader.onload = () => {
        this.form.anexos = reader.result
      }
      reader.readAsDataURL(ficheiros)
    }

    function OnSubmit() {
      const formData = new FormData()
      form.value.anexos = formData.append('anexos', listFiles)
      store
        .dispatch('Picket/addCheckListIn', form.value)
        .then(response => {
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.message,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          })
          this.$router.push({
            name: 'Vehicle-movements',
          })
        })
        .catch(err => {
          if (err) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.Erro,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          }
        })
    }
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }
    return {
      OnSubmit,
      checkListIn,
      form,
      listFiles,
      dateTime,
      onChange,

    }
  },
}
</script>

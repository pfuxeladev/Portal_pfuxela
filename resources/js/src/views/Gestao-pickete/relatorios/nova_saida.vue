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
                                <tr v-for="(chk, i ) in form.checklist_var" :key="i">
                                    <td>{{chk.checklist_name}}
                                    <input type="hidden" v-model="chk.checklist_name">
                                    </td>
                                    <td>
                                      <input type="hidden" v-model="chk.id" />
                                        <b-form-radio-group v-model="chk.opcao" :options="options" :state="state" required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Tipo de Saida</td>
                                    <td>
                                        <v-select v-model="form.tipo_saida" label="text" :options="options2" :reduce="options2 => options2.value"></v-select>
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
                        <v-select v-model="attributeChecklist.categoria" :options="['Controle Externo', 'Motor', 'Parte electrica', 'Conforto e Segurança', 'Documentação']"></v-select>
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
      ],
      options2: [{
        text: 'Rota',
        value: 'Rota',
      },
      {
        text: 'Outros Servicos',
        value: 'Outros Servicos',
      },
      {
        text: 'Expediente',
        value: 'Expediente',
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

  setup() {
    const CHECKLISTOUT_STORE_MODULE_NAME = 'Picket'

    if (!store.hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) store.registerModule(CHECKLISTOUT_STORE_MODULE_NAME, storaRelatorioModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) store.unregisterModule(CHECKLISTOUT_STORE_MODULE_NAME)
    })

    const toast = useToast()

    const chklst = [
      { id: null, checklist_name: '', opcao: '' },
    ]

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
            tipo_saida: '',
            checklist_var: [{
              id: null, checklist_name: '', opcao: '',
            }],
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
      addMore,
    }
  },
  created() {
    store.dispatch('Picket/getAtributos').then(res => {
      this.form.checklist_var = res.data
    })
    // this.form.checklist_var = this.chklst
  },

}
</script>

<template>
<div>
    <b-card no-body class="mb-0">
        <div class="m-2">
            <b-card-body>
                <b-form novalidate @submit.prevent="onSubmit()">
                    <b-row>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-5" label="Projecto:" label-for="input-5">
                                <v-select v-model="rotaEdit.projecto_id" label="name" :options="projecto" :reduce="(projecto) => projecto.id" />

                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-1" label="Nome da rota:" label-for="input-1">
                                <b-form-input id="input-1" v-model="rotaEdit.nome_rota" type="text" placeholder="Digite o nome da rota" />

                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-2" label="Tamanho da rota:" label-for="input-2">
                                <b-form-input id="input-2" v-model="rotaEdit.distancia_km" type="number" step="0.001" />

                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-2" label="Tipo:" label-for="input-2">
                                <v-select v-model="rotaEdit.tipoRota" :options="['Ida', 'Volta', 'Ida & Volta']" @input="troca" />

                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <b-form-group id="input-group-3" label="Endereco:" label-for="input-4">
                                <b-form-input id="input-4" v-model="rotaEdit.endereco" required />

                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="12" lg="12">
                            <b-row v-for="(hr, index) in rotaEdit.horario" :key="index">
                                <b-col cols="12" md="4">
                                    <b-form-group id="input-group-2" label="Turno:" label-for="input-2">
                                        <v-select v-model="hr.turno" :options="['Diurno', 'Noturno']" />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="4">
                                    <b-form-group id="input-group-6" label="Hora de partida:" label-for="input-6">
                                        <b-form-timepicker v-model="hr.horaPartida" show-seconds locale="en" />
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="4">
                                    <b-form-group id="input-group-3" label="Hora de chegada:" label-for="input-3">
                                        <b-form-timepicker v-model="hr.horaChegada" show-seconds locale="en" />
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-col>

                        <b-col cols="12" md="12" class="mt-2">
                            <b-button type="submit" variant="outline-primary">
                                Actualizar
                            </b-button>
                        </b-col>
                    </b-row>
                </b-form>
            </b-card-body>
        </div>
    </b-card>
</div>
</template>

<script>
import {
  BForm,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BCard,
  BCardBody,
  BCardHeader,
  BButton,
  BLink,
  BFormTimepicker,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import {
  ref,
  onUnmounted
} from '@vue/composition-api'
import Form from 'vform'
import {
  useToast
} from 'vue-toastification/composition'
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import storeRotasModule from './storeRotasModule'
import store from '@/store'
import router from '@/router'
import axios from '@axios'
export default {
  data() {
    return {
      projecto: [],
    }
  },
  components: {
    BForm,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BCard,
    BCardBody,
    BCardHeader,
    BButton,
    BLink,
    vSelect,
    BFormTimepicker,
  },
  directives: {
    Ripple,
  },

  setup() {
    const ROTA_APP_STORE_MODULE_NAME = 'app-rota'

    // Register module
    if (!store.hasModule(ROTA_APP_STORE_MODULE_NAME)) {
      store.registerModule(ROTA_APP_STORE_MODULE_NAME, storeRotasModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ROTA_APP_STORE_MODULE_NAME)) store.unregisterModule(ROTA_APP_STORE_MODULE_NAME)
    })
    const toast = useToast()
    const rotaEdit = ref(
      JSON.parse(
        JSON.stringify(
          new Form({
            nome_rota: '',
            horario: [{
              turno: '',
              horaPartida: '',
              horaChegada: '',
            }, ],
            endereco: '',
            distancia_km: '',
            tipoRota: '',
            projecto_id: null,
          }),
        ),
      ),
    )

    store.dispatch('app-rota/fetchRota', {
      id: router.currentRoute.params.id,
    })
      .then(response => {
        rotaEdit.value = response.data
      })

    function onSubmit() {
      this.$Progress.start()
      store.dispatch('app-rota/updateRota', {
        id: router.currentRoute.params.id, rotaData: rotaEdit,
      }).then(response => {
        toast({
          component: ToastificationContent,
          props: {
            title: response.data.message,
            icon: 'CheckSquareIcon',
            variant: 'success',
          },
        })
        this.$router.push({
          name: 'Routes Supply',
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

    function troca() {
      const index = 0
      if (this.rotaEdit.tipoRota === 'Ida') {
        if (this.rotaEdit.horario.length !== 1) {
          this.rotaEdit.horario.splice(index, 1)
        }
      } else if (this.rotaEdit.tipoRota === 'Volta') {
        if (this.rotaEdit.horario.length !== 1) {
          this.rotaEdit.horario.splice(index, 1)
        }
      } else if (this.rotaEdit.tipoRota === 'Ida & Volta') {
        if (this.rotaEdit.horario.length !== 2) {
          this.rotaEdit.horario.push({
            turno: null,
            horaPartida: null,
            horaChegada: null,
          })
        }
      }
    }

    return {
      rotaEdit,
      onSubmit,
      troca,
    }
  },
  created() {
    this.$http.get('/api/listProject').then(response => {
      this.projecto = response.data
    })
  },
}
</script>

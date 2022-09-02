<template>
  <section class="invoice-add-wrapper mt-3">
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">
        <b-row class="invoice-add">
          <b-col
            cols="12"
            xl="3"
            md="3"
          >
            <b-button
              v-b-modal.modal-lg
              variant="outline-primary"
            >
              Alocar nova viatura
            </b-button>
          </b-col>
        </b-row>
      </div>
      <b-row class="m-1">
        <b-col
          cols="12"
          md="3"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <label>mostrar</label>
          <v-select
            v-model="perPage"
            :options="['10', '25', '50', '100']"
          />
          <label>entradas</label>
        </b-col>
        <b-col
          cols="12"
          md="5"
        />
        <b-col
          cols="12"
          md="4"
        >
          <b-form-input
            v-model="pesquisar"
            type="search"
            placeholder="Pesquisar"
          />
        </b-col>
      </b-row>
      <b-card-body>
        <table class="table table-bordered table-tripped table-responsive">
          <thead>
            <tr>
              <th>Data</th>
              <th>viatura</th>
              <th>km anterior</th>
              <th>km actual</th>
              <th>qtd prevista</th>
              <th>km percorridos</th>
              <th>qtd abastecida</th>
              <th>rotas alocadas</th>
              <th>criado por</th>
              <th>actualizado por</th>
            </tr>
          </thead>
        </table>
      </b-card-body>
    </b-card>
    <b-modal
      id="modal-lg"
      size="lg"
       hide-footer
       hide-backdrop
      title="Alocar Viaturas para hoje"
    >
      <b-form @submit.prevent="alocarViatura">
        <b-form-row>
          <b-col>
            <b-form-group label="Viatura">
              <v-select v-model="form.viatura_id" label="matricula" :options="viatura" :reduce="viatura => viatura.id" @input="getKmActual()"/>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Kilometragem anterior">
              <b-form-input
                v-model="form.kmActual"
                readonly
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col>
            <b-form-group label="Leitura da kilometragem actual">
              <b-form-input
                v-model="form.manometro_km"
                type="number"
                @input="calculaKm()"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="km percorridos">
              <b-form-input
                v-model="form.kmPercorridos"
                readonly
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col>
            <b-form-group label="estimativa de consumo pela distancia percorrida">
              <b-form-input
                type="text"
                readonly
                v-model="form.qtdActual"
              />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Informe a qtd de combustivel existente">
              <b-form-input
                v-model="form.manometro_combustivel"
                type="number"
                step="0.00"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col>
            <b-form-group label="motorista escalado">
              <v-select v-model="form.motorista_id" label="nome" :options="motoristas" :reduce="motoristas => motoristas.id " />
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="rotas a percorrer">
              <v-select
                v-model="form.rota.rota_id"
                :options="rotas"
                label="nome_rota"
                :reduce="rotas => rotas.id"
                multiple
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
            <b-col>
                <b-button variant="secondary">cancelar</b-button>
            </b-col>
            <b-col>
                <b-button type="submit" variant="outline-success">
                    submeter
                </b-button>
            </b-col>
        </b-form-row>
      </b-form>
    </b-modal>
  </section>
</template>

<script>
import {
  BCard,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BFormInput,
  BForm,
  BFormRow,
  BFormGroup,
  BModal,
} from 'bootstrap-vue'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import vSelect from 'vue-select'
import Form from 'vform'
import store from '@/store'
import router from '@/router'
import StoreViaturaModule from './StoreViaturaModule'

export default {
  name: 'AlocarViatura',
  components: {
    BCard,
    BCardBody,
    BRow,
    BCol,
    BButton,
    BFormInput,
    BForm,
    BFormGroup,
    BFormRow,
    BModal,
    vSelect,
  },
  setup() {

    const PIQUETE_APP_STORE_MODULE_NAME = 'Picket'

    // Register module
    if (!store.hasModule(PIQUETE_APP_STORE_MODULE_NAME)) {
      store.registerModule(PIQUETE_APP_STORE_MODULE_NAME, StoreViaturaModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PIQUETE_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(PIQUETE_APP_STORE_MODULE_NAME)
      }
    })
    const perPage = 10
    const pesquisar = ref('')
    const viatura = ref(null)
    const rotas = ref(null)
    const motoristas = ref(null)
    const dadosViatura = ref(null)
    const form = ref(
      JSON.parse(
        JSON.stringify({
          viatura_id: null,
          manometro_km: 0,
          manometro_combustivel: 0,
          motorista_id: 0,
          qtdActual: 0,
          kmActual: 0,
          kmPercorridos: 0,
          rota: {
            rota_id: '',
          },
        }),
      ),
    )
    // buscar viaturas
    function fetchViaturas() {
      this.$http.get('/api/listarViaturas').then(res => {
        this.viatura = res.data
      }).catch(err => {
        console.log(err)
      })
    }
    // fetch rotas
    function fetchRotas() {
      this.$http.get('/api/todasRotas').then(res => {
        this.rotas = res.data
      }).catch(err => {
        console.log(err)
      })
    }

    // fetch Motoristas
    function fetchMotoristas() {
      this.$http.get('/api/listMotoristas').then(res => {
        this.motoristas = res.data
      })
    }
    // get km by viatura
    function getKmActual() {
      //   console.log(this.form.viatura_id)
      this.$http.get(`/api/kmActual/${this.form.viatura_id}`).then(res => {
        this.form.kmActual = res.data.km_inicio
      })

      this.$http.get(`/api/viaturas/${this.form.viatura_id}`).then(res => {
        this.dadosViatura = res.data
      })
    }

    function calculaKm() {
      this.form.kmPercorridos = this.form.manometro_km - this.form.kmActual
      this.form.qtdActual = parseFloat(this.form.kmPercorridos * this.dadosViatura.capacidade_media)
    }

    // Alocar viatura
    const toast = useToast()
    function alocarViatura() {
      store.dispatch('Picket/alocateVehicle', this.form)
        .then(response => {
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.message,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          })
        }).catch(error => {
          if (error.response.status === 421) {
            toast({
              component: ToastificationContent,
              props: {
                title: error.response.data.error,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          }
        })
    }

    return {
      viatura,
      rotas,
      form,
      perPage,
      pesquisar,
      motoristas,
      dadosViatura,
      fetchMotoristas,
      fetchViaturas,
      fetchRotas,
      getKmActual,
      calculaKm,
      alocarViatura,
    }
  },
  created() {
    this.getKmActual()
    this.fetchMotoristas()
    this.fetchViaturas()
    this.fetchRotas()
  },
}
</script>

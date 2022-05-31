<template>
  <div class="rota_form">
    <b-form v-if="show" novalidate @submit="onSubmit" @reset="onReset">
      <b-row>
           <b-col cols="12" md="4">
          <b-form-group
            id="input-group-5"
            label="Projecto:"
            label-for="input-5"
          >
            <v-select
              v-model="form.projecto_id"
              label="name"
              :options="projecto"
              :reduce="(projecto) => projecto.id"
            />
            <small
              v-if="form.errors.has('projecto_id')"
              class="alert text-danger"
              v-html="form.errors.get('projecto_id')"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="4">
          <b-form-group
            id="input-group-1"
            label="Nome da rota:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.nome_rota"
              type="text"
              placeholder="Digite o nome da rota"
            />
            <small
              v-if="form.errors.has('nome_rota')"
              class="alert text-danger"
              v-html="form.errors.get('nome_rota')"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="4">
          <b-form-group
            id="input-group-2"
            label="Tamanho da rota:"
            label-for="input-2"
          >
            <b-form-input
              type="number"
              id="input-2"
              step="0.001"
              v-model="form.distancia_km"
            />
            <small
              v-if="form.errors.has('distancia_km')"
              class="alert text-danger"
              v-html="form.errors.get('distancia_km')"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="4">
          <b-form-group id="input-group-2" label="Tipo:" label-for="input-2">
            <v-select
              v-model="form.tipoRota"
              :options="['Ida', 'Volta', 'Ida & Volta']"
              @input="troca"
            />
            <small
              v-if="form.errors.has('tipoRota')"
              class="alert text-danger"
              v-html="form.errors.get('tipoRota')"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="4">
          <b-form-group
            id="input-group-3"
            label="Endereco:"
            label-for="input-4"
          >
            <b-form-input id="input-4" v-model="form.endereco" required />
            <small
              v-if="form.errors.has('endereco')"
              class="alert text-danger"
              v-html="form.errors.get('endereco')"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" md="12" lg="12">
          <b-row v-for="(hr, index) in form.horario" :key="index">
            <b-col cols="12" md="4">
              <b-form-group
                id="input-group-2"
                label="Turno:"
                label-for="input-2"
              >
                <v-select v-model="hr.turno" :options="['Diurno', 'Noturno']" />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="4">
              <b-form-group
                id="input-group-6"
                label="Hora de partida:"
                label-for="input-6"
              >
                <b-form-timepicker
                  v-model="hr.horaPartida"
                  show-seconds
                  locale="en"
                />
              </b-form-group>
            </b-col>
            <b-col cols="12" md="4">
              <b-form-group
                id="input-group-3"
                label="Hora de chegada:"
                label-for="input-3"
              >
                <b-form-timepicker
                  v-model="hr.horaChegada"
                  show-seconds
                  locale="en"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>


        <b-col cols="12" md="12" class="mt-2">
          <b-button type="reset" variant="danger"> limpar campos </b-button>
           <b-button type="submit" variant="outline-primary">
            Cadastrar
          </b-button>
        </b-col>
      </b-row>
    </b-form>
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
import { ref } from '@vue/composition-api'
import Form from 'vform'
import store from '@/store'
import Ripple from 'vue-ripple-directive'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
export default {
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
  data() {
    return {
      show: true,
      projecto: [],
      form: new Form({
        nome_rota: '',
        horario: [
          {
            turno: '',
            horaPartida: '',
            horaChegada: '',
          },
        ],
        endereco: '',
        distancia_km: '',
        tipoRota: '',
        projecto_id: null,
      }),
    }
  },
  mounted() {
    this.printProjectos()
  },
  methods: {
    printProjectos() {
      this.$http.get('/api/listProject').then((response) => {
        this.projecto = response.data
      })
    },
    troca() {
      const index = 0
      if (this.form.tipoRota === 'Ida') {
        if (this.form.horario.length !== 1) {
          this.form.horario.splice(index, 1)
        }
      } else if (this.form.tipoRota === 'Volta') {
        if (this.form.horario.length !== 1) {
          this.form.horario.splice(index, 1)
        }
      } else if (this.form.tipoRota === 'Ida & Volta') {
        if (this.form.horario.length !== 2) {
          this.form.horario.push({
            turno: null,
            horaPartida: null,
            horaChegada: null,
          })
        }
      }
    },
    onSubmit(event) {
      event.preventDefault()
      this.$Progress.start()
      this.form
        .post('/api/Rotas')
        .then(response => {
          this.$swal.fire({
            icon: 'success',
            title: response.data.message,
          })
          this.$emit('refetch-data')
          this.form.clear()
          this.form.reset()
          this.$Progress.finish()
        })
        .catch(err => {
// console.log(err.response.status)
          if (err.response.status === 401) {

            this.$router.push({ name: 'auth-login' })
          } else if (err.response.status === 422) {
            this.$swal.fire({
              icon: 'error',
              title: 'Erro! Verifique se os campos estao devidamente preenchidos',
            })
            this.$Progress.fail()
          } else if (err.response.status === 421) {
            this.$swal.fire({
              icon: 'error',
              title: 'Erro ao tentar adicionar!',
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
}
</script>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
</style>

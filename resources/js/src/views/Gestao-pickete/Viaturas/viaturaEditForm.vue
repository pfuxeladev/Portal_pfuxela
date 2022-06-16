<template>
  <section class="invoice-add-wrapper mt-3">
    <b-row class="invoice-add">
      <b-col cols="12" xl="12" md="12">
        <b-form @submit.prevent="submitViatura()">
          <b-card no-body class="invoice-preview-card">
            <b-card-body class="invoice-padding form-item-section">
              <div ref="form" class="repeater-form">
                <b-row ref="row" class="pb-2">
                  <b-col cols="12">
                    <div class="d-none d-lg-flex">
                      <b-row class="flex-grow-1 px-1">
                        <b-col cols="12" lg="3">
                          <b-form-group
                            id="input-group-0"
                            label="Marca:"
                            label-for="input-0"
                            description="Selecionar a marca do veiculo que pretende cadastrar."
                          >
                            <v-select
                              v-model="form.marca_id"
                              label="nome"
                              :options="marcas"
                              :reduce="(marcas) => marcas.id"
                            />
                            <small
                              v-if="form.errors.has('marca_id')"
                              class="alert text-danger"
                              v-html="form.errors.get('marca_id')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="3">
                          <b-form-group
                            id="input-group-1"
                            label="Descricao:"
                            label-for="input-1"
                            description="Descricao/especificacoes tecnicas da viatura."
                          >
                            <b-form-input
                              id="input-1"
                              v-model="form.nome_viatura"
                              type="tecnicas"
                              placeholder="Descricao"
                            />
                            <small
                              v-if="form.errors.has('nome_viatura')"
                              class="alert text-danger"
                              v-html="form.errors.get('nome_viatura')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="3">
                          <b-form-group
                            id="input-group-2"
                            label="Ano de fabrico:"
                            label-for="input-2"
                            description="Indique o ano."
                          >
                            <b-form-input
                              id="input-2"
                              v-model="form.ano_fabrico"
                              type="number"
                              placeholder="ano"
                            />
                            <small
                              v-if="form.errors.has('ano_fabrico')"
                              class="alert text-danger"
                              v-html="form.errors.get('ano_fabrico')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="3">
                          <b-form-group
                            id="input-group-3"
                            label="Nr do motor:"
                            label-for="input-3"
                            description="Indique o nr do motor"
                          >
                            <b-form-input
                              id="input-3"
                              v-model="form.nr_motor"
                              type="text"
                              placeholder="Numero do motor"
                            />
                            <small
                              v-if="form.errors.has('nr_motor')"
                              class="alert text-danger"
                              v-html="form.errors.get('nr_motor')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="3">
                          <b-form-group
                            id="input-group-4"
                            label="Nr de Chassi:"
                            label-for="input-4"
                            description="Indque o nr de chassi."
                          >
                            <b-form-input
                              id="input-4"
                              v-model="form.nr_chassi"
                              type="text"
                            />
                            <small
                              v-if="form.errors.has('nr_chassi')"
                              class="alert text-danger"
                              v-html="form.errors.get('nr_chassi')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="3">
                          <b-form-group
                            id="input-group-5"
                            label="Livrete:"
                            label-for="input-5"
                            description="Identificacao da viatura."
                          >
                            <b-form-input
                              id="input-5"
                              v-model="form.nr_livrete"
                              type="text"
                            />
                            <small
                              v-if="form.errors.has('nr_livrete')"
                              class="alert text-danger"
                              v-html="form.errors.get('nr_livrete')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="3">
                          <b-form-group
                            id="input-group-6"
                            label="Matricula:"
                            label-for="input-6"
                            description="Identificacao da viatura."
                          >
                            <b-form-input
                              id="input-6"
                              v-model="form.matricula"
                              type="text"
                            />
                            <small
                              v-if="form.errors.has('matricula')"
                              class="alert text-danger"
                              v-html="form.errors.get('matricula')"
                            />
                          </b-form-group>
                        </b-col>

                        <b-col cols="12" lg="4">
                          <b-form-group
                            id="input-group-7"
                            label="Data da inspencao:"
                            label-for="input-7"
                            description="Quando foi feita a primeira inspencao."
                          >
                            <date-picker
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                              id="example-datepicker2"
                              v-model="form.viatura_document[0].data_inspencao"
                              locale="pt"
                              class="mb-1"
                            />
                            <small
                              v-if="form.errors.has('data_inspencao')"
                              class="alert text-danger"
                              v-html="form.errors.get('data_inspencao')"
                            />
                          </b-form-group>
                          <b-form-group
                            id="input-group-7_1"
                            label="Prazo da inspencao:"
                            label-for="input-7_1"
                            description="Prazo do documento de inspencao."
                          >
                            <date-picker
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                              id="example-datepicker2_1"
                              v-model="form.viatura_document[0].prazo_inspencao"
                              locale="pt"
                              class="mb-1"
                            />
                            <small
                              v-if="form.errors.has('prazo_inspencao')"
                              class="alert text-danger"
                              v-html="form.errors.get('prazo_inspencao')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="4">
                          <b-form-group
                            id="input-group-8"
                            label="Data cadastro de viatura:"
                            label-for="input-8"
                            description="Data cadastro de viatura."
                          >
                            <date-picker
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                              id="example-datepicker1"
                              v-model="form.viatura_document[0].data_licenca"
                              locale="pt"
                              class="mb-1"
                            />
                            <small
                              v-if="form.errors.has('data_licenca')"
                              class="alert text-danger"
                              v-html="form.errors.get('data_licenca')"
                            />
                          </b-form-group>
                          <b-form-group
                            id="input-group-8_1"
                            label="Prazo da licenca da viatura:"
                            label-for="input-8_1"
                            description="Prazo da licenca."
                          >
                            <date-picker
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                              id="example-datepicker1_1"
                              v-model="form.viatura_document[0].prazo_licenca"
                              locale="pt"
                              class="mb-1"
                            />
                            <small
                              v-if="form.errors.has('prazo_licenca')"
                              class="alert text-danger"
                              v-html="form.errors.get('prazo_licenca')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="4">
                          <b-form-group
                            id="input-group-9"
                            label="Data cadastro de manifeto:"
                            label-for="input-9"
                            description="Manifesto da viatura."
                          >
                            <date-picker
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                              id="example-datepicker3"
                              v-model="form.viatura_document[0].data_manifesto"
                              locale="pt"
                              class="mb-1"
                            />
                            <small
                              v-if="form.errors.has('data_manifesto')"
                              class="alert text-danger"
                              v-html="form.errors.get('data_manifesto')"
                            />
                          </b-form-group>
                          <b-form-group
                            id="input-group-9_1"
                            label="Prazo do manifeto:"
                            label-for="input-9_1"
                            description="prazo do manifesto da viatura."
                          >
                            <date-picker
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                              id="example-datepicker3_1"
                              v-model="form.viatura_document[0].prazo_manifesto"
                              locale="pt"
                              class="mb-1"
                            />
                            <small
                              v-if="form.errors.has('prazo_manifesto')"
                              class="alert text-danger"
                              v-html="form.errors.get('prazo_manifesto')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="4">
                          <b-form-group
                           label="Data radio difusao:"
                           description="Data de cadastro de radio difusao."
                          >
                            <date-picker
                              v-model="form.viatura_document[0].data_taxa_radio"
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                            />
                            <small
                              v-if="form.errors.has('data_taxa_radio')"
                              class="alert text-danger"
                              v-html="form.errors.get('data_taxa_radio')"
                            />
                          </b-form-group>
                          <b-form-group
                            label="Prazo radio difusao:"
                            description="Prazo do documento radio difusao."
                          >
                            <date-picker
                              v-model="form.viatura_document[0].prazo_taxa_radio"
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                            />
                            <small
                              v-if="form.errors.has('prazo_taxa_radio')"
                              class="alert text-danger"
                              v-html="form.errors.get('prazo_taxa_radio')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="4">
                          <b-form-group
                            id="input-group-11"
                            label="Data Seguros:"
                            label-for="input-11"
                            description="Data de seguros automovel."
                          >
                            <date-picker
                              v-model="form.viatura_document[0].data_seguros"
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                            />
                            <small
                              v-if="form.errors.has('data_seguros')"
                              class="alert text-danger"
                              v-html="form.errors.get('data_seguros')"
                            />
                          </b-form-group>
                          <b-form-group
                            id="input-group-11_1"
                            label="Prazo Seguros:"
                            label-for="input-11_1"
                            description="Prazo de seguros automovel."
                          >
                            <date-picker
                              v-model="form.viatura_document[0].prazo_seguros"
                              value-type="format"
                              format="YYYY-MM-DD"
                              style="width: 100%"
                            />
                            <small
                              v-if="form.errors.has('prazo_seguros')"
                              class="alert text-danger"
                              v-html="form.errors.get('prazo_seguros')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="4">
                          <b-form-group
                            id="fieldset-11"
                            description="Kilometragem."
                            label="Km percorridos"
                            label-for="input-11"
                          >
                            <b-form-input
                              id="input-11"
                              v-model="form.kilometragem"
                              type="number"
                            />
                            <small
                              v-if="form.errors.has('kilometragem')"
                              class="alert text-danger"
                              v-html="form.errors.get('kilometragem')"
                            />
                          </b-form-group>
                          <b-form-group
                            id="fieldset-12"
                            label="Capacidade do tanque:"
                            label-for="input-12"
                            description="Capacidade do tanque."
                          >
                            <b-form-input
                              id="input-12"
                              v-model="form.capacidade_tanque"
                              type="number"
                            />
                            <small
                              v-if="form.errors.has('capacidade_tanque')"
                              class="alert text-danger"
                              v-html="form.errors.get('capacidade_tanque')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="4">
                          <b-form-group
                            id="fieldset-13"
                            description="consumo medio por km."
                            label="ltr/km:"
                            label-for="input-13"
                          >
                            <b-form-input
                              id="input-13"
                              v-model="form.capacidade_media"
                              type="text"
                              trim
                            />
                            <small
                              v-if="form.errors.has('capacidade_media')"
                              class="alert text-danger"
                              v-html="form.errors.get('capacidade_media')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="4">
                          <b-form-group
                            id="fieldset-14"
                            description="Tipo de combustivel."
                            label="Combustivel:"
                            label-for="input-14"
                          >
                            <v-select
                              v-model="form.tipo_combustivel"
                              label="tipo_combustivel"
                              :options="combustivel"
                              :reduce="(combustivel) => combustivel.id"
                            />
                            <small
                              v-if="form.errors.has('combustivel')"
                              class="alert text-danger"
                              v-html="form.errors.get('combustivel')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="4">
                          <b-form-group
                            id="fieldset-15"
                            description="Lotacao da viatura."
                            label="Lotacao:"
                            label-for="input-15"
                          >
                            <b-form-input
                              id="input-15"
                              v-model="form.lotacao"
                              trim
                            />
                            <small
                              v-if="form.errors.has('lotacao')"
                              class="alert text-danger"
                              v-html="form.errors.get('lotacao')"
                            />
                          </b-form-group>
                        </b-col>
                        <b-col cols="12" lg="8">
                          <b-form-group
                            id="fieldset-images"
                            description="Documentos da viatura"
                            label="Carregar documentos da viatura:"
                          >
                            <input
                              type="file"
                              @change="onFileChange"
                              class="form-control"
                              multiple
                            />
                          </b-form-group>
                        </b-col>
                      </b-row>
                    </div>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="6">
                    <b-link
                      class="btn btn-outline-primary waves-effect"
                      :to="{ name: 'Cars' }"
                      >cancelar</b-link
                    >
                  </b-col>
                  <b-col cols="6">
                    <b-button
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      variant="success"
                      class="mr-2"
                      type="submit"
                      >Actualizar <i class="fas fa-paper-plane" />
                    </b-button>
                  </b-col>
                </b-row>
              </div>
            </b-card-body>
          </b-card>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { ref, onUnmounted } from '@vue/composition-api'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import Form from 'vform'
import Cleave from 'vue-cleave-component'
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BLink,
  VBToggle,
  BFormDatepicker,
  BFormFile,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import DatePicker from 'vue2-datepicker'
import store from '@/store'
import 'vue2-datepicker/index.css'
export default {
  components: {
    BFormFile,
    BRow,
    BCol,
    BCard,
    BCardBody,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BFormTextarea,
    BLink,
    flatPickr,
    vSelect,
    Cleave,
    BFormDatepicker,
    DatePicker,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },
  mixins: [heightTransition],
  data() {
    return {
      marcas: [],
      combustivel: [],
      filename: '',
      file: null,
      userData: JSON.parse(localStorage.getItem('userData')),
      form: new Form({
        id: this.$route.params.id,
        modelo: null,
        marca_id: null,
        nome_viatura: '',
        ano_fabrico: '',
        kilometragem: null,
        tipo_combustivel: null,
        capacidade_tanque: null,
        modelo_id: null,
        capacidade_media: '',
        lotacao: 2,
        nr_motor: '',
        nr_chassi: '',
        nr_livrete: '',
        matricula: '',
        viatura_document: [{
          data_licenca: '',
          data_inspencao: '',
          data_manifesto: '',
          data_taxa_radio: '',
          data_seguros: '',
          prazo_licenca: '',
          prazo_inspencao: '',
          prazo_manifesto: '',
          prazo_taxa_radio: '',
          prazo_seguros: '',
        }],
        documentos: [],
      }),
    }
  },
  mounted() {},
  created() {
    this.getMarcas()
    this.getCombustivel()
    this.getViatura()
  },
  methods: {
    getMarcas() {
      this.$http.get('/api/marca').then((response) => {
        this.marcas = response.data
      })
    },
    getCombustivel() {
      this.$http.get('/api/getCombustivel').then((response) => {
        this.combustivel = response.data
      })
    },
    onFileChange(e) {
      this.file = e.target.files

      // eslint-disable-next-line no-restricted-syntax
      for (const i of Object.keys(this.file)) {
        this.form.documentos[i] = this.file[i]

        const self = this
        const reader = new FileReader()
        reader.onload = function (e) {
          self.form.documentos.push(e.target.result)
        };
        reader.readAsDataURL(this.file[i])
      }
    },
    getViatura() {
      this.$http.get(`/api/viaturas/${this.$route.params.id}`)
        .then(res => {
          this.form.fill(res.data)
        })
    },
    submitViatura() {
      this.$Progress.start()
      this.form
        .put(`/api/viaturas/${this.$route.params.id}`)
        .then(response => {
          this.$swal.fire({
            icon: 'success',
            title: response.data.success,
          })
          //   Fire.$emit('afterAction')
          this.form.clear()
          this.form.reset()
          this.$Progress.finish()
          this.$router.push({
            name: 'Cars',
          })
        })
        .catch(error => {
          if (error.response.data.status === 421) {
            this.$swal.fire({
              icon: 'error',
              title: 'Erro ao tentar adicionar!',
            })
            this.$router.push({
              name: 'auth-login',
            })
          } else if (error.response.data.status === 422) {
            this.$swal.fire({
              icon: 'error',
              title: 'Erro ao tentar adicionar!',
            })
          } else {
            this.$swal.fire({
              icon: 'error',
              title: 'Erro ao tentar adicionar!',
            })
          }
          this.$Progress.fail()
        })
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>

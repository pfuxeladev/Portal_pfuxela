<template>
<section class="invoice-add-wrapper mt-3">
    <b-card no-body class="mb-0">
        <div class="m-2">
            <b-row class="invoice-add">
                <b-col cols="12" xl="3" md="3">
                    <b-button v-b-modal.modal-lg variant="outline-primary">
                        Alocar nova viatura
                    </b-button>
                </b-col>
            </b-row>
        </div>
        <b-row class="m-1">
            <b-col cols="12" md="3" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                <label>mostrar</label>
                <v-select v-model="perPage" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="perPageOptions" :clearable="false" class="per-page-selector d-inline-block mx-50" />
                <label>entradas</label>
            </b-col>
            <b-col cols="12" md="5" />
            <b-col cols="12" md="4">
                <b-form-input v-model="searchQuery" class="d-inline-block mr-1" placeholder="Search..." />
            </b-col>
        </b-row>
        <b-card-body>
            <b-table ref="refViaturaListTable" class="position-relative" :items="fetchViaturasAlocadas" responsive :fields="tableColumns" primary-key="id" :sort-by.sync="sortBy" show-empty empty-text="No matching records found" :sort-desc.sync="isSortDirDesc">
                <template #cell(matricula)="data">
                    {{ data.item.matricula }}
                </template>
                <template #cell(ltr_por_km)="data">
                    {{ data.item.capacidade_media }}
                </template>
                <template #cell(combustivel)="data">
                    {{ data.item.tipo_combustivel }}
                </template>
                <template #cell(kilometragem_ant)="data">
                    {{ data.item.kilometragem_ant }}
                </template>
                <template #cell(km_percorridos)="data">
                    {{ data.item.km_percorridos }}
                </template>
                <template #cell(rotas)="data">
                    <div v-for="(rota, r) in data.item.viatura.rota" :key="'r'+r">
                        <b-badge variant="primary" class="m-1">{{rota.nome_rota}},</b-badge>
                    </div>
                </template>
                <template #cell(actions)="data">
                    <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

                    <template #button-content>
                        <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                    </template>
                    <b-dropdown-item >
                        <feather-icon icon="FileTextIcon" />
                        <span class="align-middle ml-50">Details</span>
                    </b-dropdown-item>

                    <b-dropdown-item @click="EditarViatura(data.item)">
                        <feather-icon icon="EditIcon" />
                        <span class="align-middle ml-50">Editar</span>
                    </b-dropdown-item>
                </b-dropdown>
                </template>
            </b-table>
        </b-card-body>
        <b-card-footer>
            <div class="mx-2 mb-2">
                <b-row>
                    <b-col cols="12" sm="6" class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            ">
                        <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of
                            {{ dataMeta.of }} entries</span>
                    </b-col>
                    <!-- Pagination -->
                    <b-col cols="12" sm="6" class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            ">
                        <b-pagination v-model="currentPage" :total-rows="totalViaturas" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
                            <template #prev-text>
                                <feather-icon icon="ChevronLeftIcon" size="18" />
                            </template>
                            <template #next-text>
                                <feather-icon icon="ChevronRightIcon" size="18" />
                            </template>
                        </b-pagination>
                    </b-col>
                </b-row>
            </div>
        </b-card-footer>
    </b-card>
    <b-modal id="modal-lg" ref="alocateModal" size="lg" hide-footer hide-backdrop title="Alocar Viaturas para hoje">
        <b-form @submit.prevent="EditMode ? atualizarViatura(): alocarViatura()">
            <b-form-row>
                <input type="hidden" v-model="form.id" class="form-control">
                <b-col>
                    <b-form-group label="Viatura">
                        <v-select v-model="form.viatura_id" label="matricula" :options="viatura" :reduce="viatura => viatura.id" @input="getKmActual()" />
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Kilometragem anterior">
                        <b-form-input v-model="form.kmActual" readonly />
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col>
                    <b-form-group label="Leitura da kilometragem actual">
                        <b-form-input v-model="form.manometro_km" type="number" @input="calculaKm()" />
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="km percorridos">
                        <b-form-input v-model="form.kmPercorridos" readonly />
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col>
                    <b-form-group label="estimativa de consumo pela distancia percorrida">
                        <b-form-input type="text" readonly v-model="form.qtdActual" />
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Informe a qtd de combustivel existente">
                        <b-form-input v-model="form.manometro_combustivel" type="number" step="0.00" />
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
                        <v-select v-model="form.rota_id" :options="rota" label="nome_rota" :reduce="rota => rota.id" multiple />
                    </b-form-group>
                </b-col>
            </b-form-row>
            <b-form-row>
                <b-col>
                    <b-button variant="secondary" type="reset" @click="toggleModal()">cancelar</b-button>
                </b-col>
                <b-col>
                  <button v-show="EditMode" type="submit" class="btn btn-primary">Update</button>
                    <b-button type="submit" v-show="!EditMode" variant="outline-success">
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
  BTable,
  BPagination,
  BCardFooter,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue'
import {
  useToast,
} from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import {
  ref,
  onUnmounted
} from '@vue/composition-api'
import moment from 'moment'
import vSelect from 'vue-select'
import Form from 'vform'
import store from '@/store'
import router from '@/router'
import StoreViaturaModule from './StoreViaturaModule'
import viatursAlocadasList from './viaturaAlocada'

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
    BTable,
    BPagination,
    BCardFooter,
    BDropdown,
    BDropdownItem,
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
    const pesquisar = ref('')
    const viatura = ref(null)
    const rota = ref(null)
    const motoristas = ref(null)
    const dadosViatura = ref(null)
    const EditMode = false
    const form = ref(
      JSON.parse(
        JSON.stringify({
          id: null,
          viatura_id: null,
          manometro_km: 0,
          manometro_combustivel: 0,
          motorista_id: 0,
          qtdActual: 0,
          kmActual: 0,
          kmPercorridos: 0,
          rota: [{
            rota_id: '',
          }],
        }),
      ),
    )
    // buscar viaturas
    function fetchViaturas() {
      this.$http.get('/api/viaturaNaoAlocada').then(res => {
        this.viatura = res.data
      }).catch(err => {
        console.log(err)
      })
    }
    // fetch rotas
    function fetchRotas() {
      this.$http.get('/api/todasRotas').then(res => {
        this.rota = res.data
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
      this.$http.get(`/api/getKmViatura/${this.form.viatura_id}`).then(res => {
        this.form.kmActual = res.data.km_inicio

      })

      this.$http.get(`/api/viaturas/${this.form.viatura_id}`).then(res => {
        this.dadosViatura = res.data
      })
    }

    function calculaKm() {
      this.form.kmPercorridos = this.form.manometro_km - this.form.kmActual
      if (this.EditMode === true) {
        this.$http.get(`/api/getQtdViatura/${this.form.viatura_id}`).then(res => {
          this.form.qtdActual = res.data.qtd_prevista
        })
      } else {
        this.form.qtdActual = parseFloat(this.form.kmPercorridos * this.dadosViatura.capacidade_media)
      }
    }

    function toggleModal() {
      this.$refs.alocateModal.toggle('#toggle-btn');
    }

    // Alocar viatura
    const toast = useToast()
    // Editar a viatura alocada
    function EditarViatura(data) {
      this.$refs.alocateModal.show()
      this.EditMode = true
      store.dispatch('Picket/ViewAlocatedVehicle', { id: data.id })
        .then(res => {
          this.form = res.data
        })
    }
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
          this.$refs.alocateModal.toggle()
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
    function atualizarViatura() {
      this.EditMode = true
      //   console.log(this.form)
      store.dispatch('Picket/UpdateAlocatedVehicle', this.form)
        .then(response => {
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.message,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          })
          this.$refs.alocateModal.toggle()
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

    const {
      fetchViaturasAlocadas,
      tableColumns,
      perPage,
      currentPage,
      totalViaturas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refViaturaListTable,
      refetchData,
    } = viatursAlocadasList()

    return {
      viatura,
      rota,
      form,
      tableColumns,
      perPage,
      currentPage,
      totalViaturas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refViaturaListTable,
      refetchData,
      fetchViaturasAlocadas,
      pesquisar,
      motoristas,
      dadosViatura,
      fetchMotoristas,
      fetchViaturas,
      fetchRotas,
      getKmActual,
      calculaKm,
      alocarViatura,
      toggleModal,
      EditarViatura,
      EditMode,
      atualizarViatura,
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

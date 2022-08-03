<template>
  <section>
    <b-card no-body>
      <b-card-header class="pb-50">
        <h3>abastecimentos fora do projecto</h3>
      </b-card-header>
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page --><b-col
                             cols="12"
                             md="3"
                             class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
                           >
                             <label>Mostrar</label>
                             <v-select
                               v-model="perPage"
                               :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                               :options="perPageOptions"
                               :clearable="false"
                               class="per-page-selector d-inline-block mx-50"
                             />
                             <label>entradas</label>
                           </b-col>

          <!-- Search -->
          <b-col cols="6" md="6">
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="pesquisar..."
              />
            </div>
          </b-col>

          <b-col cols="6" md="3" v-if="can('Create Abastecimento_recorrente')">
            <b-button @click="showModal" variant="outline-primary">criar pedido de abastecimento</b-button>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col cols="12" >
          <b-table  ref="refAbstRecorrente" :items="fetchAbstRecorrente" responsive :fields="fieldCollumns" primary-key="id" :sort-by.sync="sortBy" show-empty empty-text="Nenhum registo feito" :sort-desc.sync="isSortDirDesc" class="position-relative">
                     <template #cell(ordem)="data">
                        {{data.item.abastecimento.ordem.codigo_ordem}}
                    </template>
                    <template #cell(bombas)="data">
                        {{data.item.nome_bombas}}
                    </template>
                     <template #cell(viatura)="data">
                        {{data.item.viatura.matricula}}
                    </template>
                    <template #cell(motorista)="data">
                        {{data.item.motorista.person.nome_completo}}
                    </template>
                    <template #cell(hora_de_saida)="data">
                        {{data.item.horaSaida}}
                    </template>
                     <template #cell(user)="data">
                        {{data.item.abastecimento.user.name}}
                    </template>
                    <template #cell(acções)="data">
                        <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

                            <template #button-content>
                                <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                            </template>
                            <b-dropdown-item :to="{ name: 'supply-details', params: { refs: data.item.refs } }">
                                <feather-icon icon="FileTextIcon" />
                                <span class="align-middle ml-50">Mostrar</span>
                            </b-dropdown-item>
                        </b-dropdown>
                    </template>
          </b-table>
        </b-col>
        <b-col cols="12">
          <div class="mx-2 mb-2">
            <b-row>

              <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                <span class="text-muted">mostrar {{ dataMeta2.from }} de {{ dataMeta2.to }} para {{ dataMeta2.of }} entradas</span>
              </b-col>
              <!-- Pagination -->
              <b-col cols="12" sm="6" class="d-flex align-items-center justify-content-center justify-content-sm-end">

                <b-pagination v-model="currentPage" :total-rows="totalAbastecimentos" :per-page="perPage" first-number last-number class="mb-0 mt-1 mt-sm-0" prev-class="prev-item" next-class="next-item">
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
        </b-col>
      </b-row>
      <b-modal
        ref="AbastecimentoForm"
        size="lg"
        hide-footer
        title="Pedido de abastecimento"
      >
        <div class="d-block">
          <validation-observer
            #default="{ handleSubmit }"
            ref="refFormObserver"
          >
            <b-form
              ref="form"
              @submit.prevent="handleSubmit(submitSupply)"
            >
              <b-form-row>
                <b-col cols="6" md="6">
                  <validation-provider
                    #default="validationContext"
                    name="Bombas"
                    rules="required"
                  >
                    <b-form-group label="Bombas">
                      <v-select
                        id="Bombas"
                        v-model="OrderForm.bombas_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="nome_bombas"
                        :options="bombas"
                        :reduce="bombas => bombas.id"
                        :clearable="false"
                        input-id="bombas"
                        :state="getValidationState(validationContext)"
                      ></v-select>
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group></validation-provider
                  >
                </b-col>
                <b-col cols="6" md="6">
                  <validation-provider
                    #default="validationContext"
                    name="Viatura"
                    rules="required"
                  >
                    <b-form-group label="Viatura" label-for="Viatura">
                      <v-select
                        id="Viatura"
                        v-model="OrderForm.viatura_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="matricula"
                        :options="viaturas"
                        :reduce="viaturas => viaturas.viatura_id"
                        :clearable="false"
                        input-id="viatura"
                        :state="getValidationState(validationContext)"
                      ></v-select>
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                <b-col cols="6" md="6">
                  <validation-provider
                    #default="validationContext"
                    name="Motorista"
                    rules="required"
                  >
                    <b-form-group label="Motorista" label-for="Motorista">
                      <v-select
                        id="Motorista"
                        v-model="OrderForm.motorista_id"
                        :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                        label="nome" :options="motoristas" :reduce="motoristas => motoristas.id"
                        :clearable="false"
                        :state="getValidationState(validationContext)"
                      ></v-select>
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                <b-col cols="6" md="6">
                  <validation-provider
                    #default="validationContext"
                    name="Qtd a abastecer"
                    rules="required"
                  >
                    <b-form-group
                      label="Qtd a abastecer"
                      label-for="Qtd_abastecer"
                    >
                      <b-form-input
                        id="Qtd_abastecer"
                        v-model="OrderForm.qtd"
                        :state="getValidationState(validationContext)"
                        trim
                      ></b-form-input>
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                <b-col cols="6" md="6">
                  <validation-provider
                    #default="validationContext"
                    name="Hora prevista de saida"
                    rules="required"
                  >
                    <b-form-group
                      label="Hora prevista de saida"
                      label-for="Hora_prevista_de_saida"
                    >
                      <cleave
                        id="Hora_prevista_de_saida"
                        v-model="OrderForm.horaSaida"
                        class="form-control"
                        :raw="false"
                        :options="options.time"
                        placeholder="hh:mm:ss"
                        :state="getValidationState(validationContext)"
                        trim
                      />
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                <b-col cols="6" md="6">
                  <validation-provider
                    #default="validationContext"
                    name="Destino"
                    rules="required"
                  >
                    <b-form-group label="Destino" label-for="destino">
                      <b-form-input id="Destino" v-model="OrderForm.destino" :state="getValidationState(validationContext)"
                                    trim></b-form-input>
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>
                <b-col cols="6" md="6">
                  <validation-provider
                    #default="validationContext"
                    name="Descricao"
                    rules="required"
                  >
                    <b-form-group label="Descricao" label-for="Descricao">
                      <b-form-textarea
                        id="Descricao"
                        v-model="OrderForm.descricao"
                        :state="getValidationState(validationContext)"
                        trim
                      ></b-form-textarea>
                      <b-form-invalid-feedback>
                        {{ validationContext.errors[0] }}
                      </b-form-invalid-feedback>
                    </b-form-group>
                  </validation-provider>
                </b-col>

              </b-form-row>
              <b-form-row>
                <b-col>
                  <b-button type="button" variant="secondary" @click="hideModal">cancelar</b-button>
                </b-col>
                <b-col>
                  <b-button type="submit" variant="success">enviar pedido</b-button>
                </b-col>
              </b-form-row>
            </b-form>
          </validation-observer>
        </div>
      </b-modal>
    </b-card>
    <b-modal
    ref="AbastecimentoDetails"
    title="Informacao da Ordem"
    size="xl"
    >

    </b-modal>
  </section>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BFormInput,
  BFormGroup,
  BForm,
  BRow,
  BCol,
  BModal,
  BFormRow,
  BFormInvalidFeedback,
  BFormTextarea,
  BButton,
  BTable,
  BPagination,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { ref, onUnmounted } from '@vue/composition-api';
import { required, alphaNum, email } from '@validations';
import formValidation from '@core/comp-functions/forms/form-validation';
import Cleave from 'vue-cleave-component';
import DatePicker from 'vue2-datepicker';
import moment from 'moment';
import vSelect from 'vue-select';
import Form from 'vform';
import 'vue2-datepicker/index.css';
import { useToast } from 'vue-toastification/composition';
import Ripple from 'vue-ripple-directive';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';
import storeAbastecimentos from './storeAbastecimentos';
import useAbstTecorrenteList from './recorrente';
import store from '@/store';

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    vSelect,
    BModal,
    BFormRow,
    BFormInvalidFeedback,
    Cleave,
    BFormTextarea,
    BButton,
    BTable,
    BPagination,
    BDropdown,
    BDropdownItem,
    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      abastecimentos: [],
      bombas: [],
      viaturas: [],
      motoristas: [],
      searchQuery: null,
      moment,
      required,
      alphaNum,
    };
  },
  created() {
    this.moment = moment;
    this.fetchBombas()
    this.fetchViaturas()
    this.listMotoristas()
  },
  methods: {
    fetchBombas() {
      this.$http.get('/api/bombas').then(res => {
        this.bombas = res.data
      })
    },
    fetchViaturas() {
      this.$http.get('/api/listAllViaturas').then(res => {
        this.viaturas = res.data
      })
    },
    listMotoristas() {
      this.$http.get('/api/listMotoristas').then(response => {
        this.motoristas = response.data
      })
    },
  },
  setup() {
    const SUPPLY_STORE_MODULE_NAME = 'Supply';

    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.registerModule(SUPPLY_STORE_MODULE_NAME, storeAbastecimentos);
    const toast = useToast();
    const form = new Form({
      viatura_id: null,
      bombas_id: null,
      qtd: null,
      horaSaida: '',
      destino: '',
      descricao: '',
      motorista_id: null,
    });
    const OrderForm = ref(JSON.parse(JSON.stringify(form)));
    const resetsupplyFormData = () => {
      OrderForm.value = JSON.parse(JSON.stringify(form));
    };
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.unregisterModule(SUPPLY_STORE_MODULE_NAME);
    });

    function submitSupply() {
      store
        .dispatch('Supply/addAbastecimentoRecorrente', OrderForm.value)
        .then(response => {
          this.$emit('refetch-data2');
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.success,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          })
          this.$refs.AbastecimentoForm.hide()
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
            });
          }
        });
    }
    const AbstDetails = ref(null)
    function details(refs) {
      console.log(refs)
      store.dispatch('Supply/fetchAbstRecDetails', { refs })
        .then(response => {
          AbstDetails.value = response.data
        })
        .catch(error => {
          if (error.response.status === 404) {
            AbstDetails.value = undefined
          }
        })
    //   this.form.fill(datas)
    //   this.showModal()
    }
    const { refFormObserver, getValidationState, resetForm } =
      formValidation(resetsupplyFormData);
    const options = {
      time: {
        time: true,
        timePattern: ['h', 'm', 's'],
      },
    }

    function showModal() {
      this.$refs.AbastecimentoForm.show();
    }

    function hideModal() {
      this.$refs.AbastecimentoForm.hide();
    }

    const {
      fetchAbstRecorrente,
      refAbstRecorrente,
      fieldCollumns,
      dataMeta2,
      refetchData2,
      perPage,
      currentPage,
      totalAbastecimentos,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
    } = useAbstTecorrenteList()

    return {
      OrderForm,
      submitSupply,
      showModal,
      hideModal,
      options,
      refFormObserver,
      getValidationState,
      resetForm,
      form,

      // fetch data

      fetchAbstRecorrente,
      refAbstRecorrente,
      fieldCollumns,
      dataMeta2,
      refetchData2,
      perPage,
      currentPage,
      totalAbastecimentos,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      AbstDetails,
      // show details
      details,
    }
  },
}
</script>

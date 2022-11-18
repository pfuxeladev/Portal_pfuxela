<template>
  <b-card no-body class="mb-0">
    <div class="m-2">
      <b-row>
        <b-col
          cols="12"
          md="6"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <label>Show</label>
          <v-select
            v-model="perPage"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="perPageOptions"
            :clearable="false"
            class="per-page-selector d-inline-block mx-50"
          />
          <label>entries</label>
        </b-col>

        <!-- Search -->
        <b-col cols="12" md="6">
          <div class="d-flex align-items-center justify-content-end">
            <b-form-input
              v-model="searchQuery"
              class="d-inline-block mr-1"
              placeholder="Search..."
            />
            <b-link class="btn btn-outline-primary" @click="showModal">
              <span class="text-nowrap">Ad.ocorrencia</span>
            </b-link>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-table
      ref="refOcorrenciaListTable"
      class="position-relative"
      :items="fetchOcorrencias"
      responsive
      :fields="tableColumns"
      primary-key="id"
      :sort-by.sync="sortBy"
      show-empty
      empty-text="No matching records found"
      :sort-desc.sync="isSortDirDesc"
    >
    <template #cell(Data)="data">
        {{data.item.data_ocorrencia}}
    </template>
    <template #cell(Hora)="data">
        {{data.item.hora_da_ocorrencia}}
    </template>
    <template #cell(Desrição)="data">
        {{data.item.descricao_ocorrencia}}
    </template>
    <template #cell(actions)="data">
        <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
                <template #button-content>
                    <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                </template>
                <b-dropdown-item :to="{ name: 'Occurrence-details', params: { id: data.item.id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Detalhes</span>
                </b-dropdown-item>
        </b-dropdown>
    </template>
    </b-table>
    <div class="mx-2 mb-2">
      <b-row>
        <b-col
          cols="12"
          sm="6"
          class="
            d-flex
            align-items-center
            justify-content-center justify-content-sm-start
          "
        >
          <span class="text-muted"
            >Showing {{ dataMeta.from }} to {{ dataMeta.to }} of
            {{ dataMeta.of }} entries</span
          >
        </b-col>
        <!-- Pagination -->
        <b-col
          cols="12"
          sm="6"
          class="
            d-flex
            align-items-center
            justify-content-center justify-content-sm-end
          "
        >
          <b-pagination
            v-model="currentPage"
            :total-rows="totalOcorrencias"
            :per-page="perPage"
            first-number
            last-number
            class="mb-0 mt-1 mt-sm-0"
            prev-class="prev-item"
            next-class="next-item"
          >
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
    <b-modal ref="my-modal" size="lg" hide-footer title="Nova ocorrencia">
      <validation-observer #default="{ handleSubmit }" ref="refFormObserver">
        <b-form @submit.prevent="handleSubmit(onSubmit)" @reset="onReset">
          <b-row>
            <input type="hidden" v-model="form.id" />
            <b-col cols="12" md="6" lg="6">
              <validation-provider
                #default="validationContext"
                name="viatura"
                rules="required"
              >
                <b-form-group label="viatura" :state="getValidationState(validationContext)">
                  <v-select v-model="form.viatura_id" label="matricula"
                :options="viaturas" :reduce="viaturas=>viaturas.id" ></v-select>
                  <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="6" lg="6">
                 <validation-provider
                #default="validationContext"
                name="motorista"
                rules="required"
              >
              <b-form-group label="motorista">
                <v-select v-model="form.motorista_id" label="nome" :options="motoristas" :reduce="motoristas => motoristas.id" ></v-select>
               <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
              </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="6" lg="6">
                <validation-provider
                #default="validationContext"
                name="data da ocorrencia"
                rules="required"
              >
              <b-form-group label="data da ocorrencia:">
                <date-picker
                  v-model="form.data_ocorrencia"
                  value-type="format"
                  format="YYYY-MM-DD"
                  style="width: 100%"
                  :state="getValidationState(validationContext)"
                trim
                />
                 <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
              </b-form-group>
              </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="6" lg="6">
                 <validation-provider
                #default="validationContext"
                name="hora"
                rules="required"
              >
              <b-form-group label="hora">
                <cleave
                  id="time"
                  v-model="form.hora_da_ocorrencia"
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
            <b-col cols="12" md="6" lg="6">
                 <validation-provider
                #default="validationContext"
                name="periodo da ocorrencia"
                rules="required"
              >
              <b-form-group label="periodo da ocorrencia"
                  :state="getValidationState(validationContext)">
                <v-select
                  v-model="form.periodo"
                  :options="['Diurno', 'Noturno']"
                trim
                />
                <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
              </b-form-group>
                 </validation-provider>
            </b-col>
            <b-col cols="12" md="6" lg="6">
                 <validation-provider
                #default="validationContext"
                name="kilometragem actual da viatura"
                rules="required"
              >
              <b-form-group label="kilometragem actual da viatura">
                <b-form-input
                  type="number"
                  v-model="form.kilometragem"
                  :state="getValidationState(validationContext)"
                trim
                ></b-form-input>
                 <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
              </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="6" lg="6">
               <validation-provider
                #default="validationContext"
                name="tipo de ocorrencia"
                rules="required"
              >
              <b-form-group label="tipo de ocorrencia"
                  :state="getValidationState(validationContext)"
                  >
                <v-select
                  v-model="form.tipo_ocorrencia"
                  :options="['Informativa', 'Necessita reparacao']"
                trim
                ></v-select>
                 <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
              </b-form-group>
              </validation-provider>
            </b-col>
            <b-col cols="12" md="12" lg="12">
               <validation-provider
                #default="validationContext"
                name="descricao"
                rules="required"
              >
               <b-form-group label="descricao">
                <b-form-textarea
                  id="textarea"
                  v-model="form.descricao_ocorrencia"
                  placeholder="Faça o Relato dos factos"
                  :state="getValidationState(validationContext)"
                trim
                ></b-form-textarea>
                 <b-form-invalid-feedback>
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
              </b-form-group>
              </validation-provider>
            </b-col>

            <b-col cols="12" md="6" lg="6">
              <b-button type="submit" variant="outline-success"
                >emitir ocorr&ecirc;ncia</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>

      <b-row>
        <b-col cols="12" md="12" lg="12">
          <b-button
            variant="outline-warning"
            class="float-right"
            @click="toggleModal"
          >
            fechar
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </b-card>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BFormInvalidFeedback,
  BButton,
  BTable,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BForm,
  BFormGroup,
  BFormTextarea,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { required, alphaNum, email } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import { ref, onUnmounted } from "@vue/composition-api";
import Form from "vform";
import Cleave from "vue-cleave-component";
import DatePicker from "vue2-datepicker";
import storeOcorrenciaModule from "./storeOcorrenciaModules";
import OcorrenciasList from "./index";
import "vue2-datepicker/index.css";
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import store from "@/store";

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    BTable,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
    BForm,
    BFormGroup,
    BFormTextarea,
    Cleave,
    DatePicker,
    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      required,
      alphaNum,
      email,
      viaturas: [],
      motoristas: [],
    };
  },
  directives: {
    Ripple,
  },
  created() {
    this.listViaturas();
    this.listMotoristas();
  },
  methods: {
    listViaturas() {
      this.$http.get("/api/listAllViaturas").then((response) => {
        this.viaturas = response.data;
      });
    },
    listMotoristas() {
      this.$http.get("/api/listMotoristas").then((response) => {
        this.motoristas = response.data;
      });
    },
  },
  setup({ emit }) {
    const PIQUECT_STORE_MODULE_NAME = "Picket";
    const editMode = false;
    // Register module
    if (!store.hasModule(PIQUECT_STORE_MODULE_NAME)) {
      store.registerModule(PIQUECT_STORE_MODULE_NAME, storeOcorrenciaModule);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PIQUECT_STORE_MODULE_NAME)) {
        store.unregisterModule(PIQUECT_STORE_MODULE_NAME);
      }
    });

    const statusOptions = [
      {
        label: "Resolvido",
        value: "Resolvido",
      },
      {
        label: "Não Resolvida",
        value: "Não Resolvida",
      },
    ];

    function showModal() {
      this.editMode = false;
      this.$refs["my-modal"].show();
    }

    function toggleModal() {
      this.$refs["my-modal"].toggle("#toggle-btn");
    }

    function onReset(e) {
      e.preventDefault();
      // Reset our form values
      this.form.reset();
    }
    const toast = useToast();
    const form = ref(
      JSON.parse(
        JSON.stringify(
          new Form({
            id: "",
            viatura_id: "",
            motorista_id: "",
            descricao_ocorrencia: "",
            hora_da_ocorrencia: "",
            kilometragem: "",
            tipo_ocorrencia: "",
            periodo: "",
            data_ocorrencia: "",
          })
        )
      )
    );

    function onSubmit() {
      this.editMode = false;
      store
        .dispatch("Picket/addOcorrencia", form.value)
        .then((response) => {
          this.$emit("refetch-data");
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.message,
              icon: "CheckSquareIcon",
              variant: "success",
            },
          });
          this.toggleModal();
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.error,
                icon: "AlertTriangleIcon",
                variant: "danger",
              },
            });
          }
        });
    }
    const { refFormObserver, getValidationState } = formValidation(form);
    const options = {
      time: {
        time: true,
        timePattern: ['h', 'm', 's'],
      },
    };
    const {
      fetchOcorrencias,
      tableColumns,
      perPage,
      currentPage,
      totalOcorrencias,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refOcorrenciaListTable,
      refetchData,

      statusFilter,
    } = OcorrenciasList();

    return {
      // Sidebar

      fetchOcorrencias,
      tableColumns,
      perPage,
      currentPage,
      totalOcorrencias,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refOcorrenciaListTable,
      refetchData,
      showModal,
      toggleModal,
      onReset,
      form,
      onSubmit,
      statusOptions,
      options,
      // Extra Filters
      statusFilter,
      refFormObserver,
      getValidationState,
    };
  },
};
</script>

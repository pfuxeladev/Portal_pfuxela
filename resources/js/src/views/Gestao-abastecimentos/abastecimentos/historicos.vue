/* eslint-disable import/no-unresolved */
<template>
<section>
    <b-card no-body>
        <b-card-header class="pb-50">
            <h3>Relat&oacute;rio de abastacimentos</h3>
        </b-card-header>
        <div class="m-2">
            <!-- Table Top -->
            <b-row>
                <!-- Per Page -->

                <!-- Search -->
                <b-col cols="6" md="6">
                    <div class="d-flex align-items-center justify-content-end">
                        <b-form-input v-model="searchQuery" class="d-inline-block mr-1" placeholder="pesquisar..." />
                    </div>
                </b-col>
            </b-row>
        </div>
        <b-row>
            <b-col cols="12" xl="12" md="12" class="table-responsive">
                <b-table ref="refAbastecimentoListTable" :items="fetchAbastecimentos" responsive :fields="tableColumns" primary-key="id" :sort-by.sync="sortBy" show-empty empty-text="No matching records found" :sort-desc.sync="isSortDirDesc" class="position-relative">
                     <template #cell(ordem)="data">
                        {{data.item.codigo_ordem}}
                    </template>
                    <template #cell(estado)="data">
                        {{data.item.ordem.estado}}
                    </template>
                    <template #cell(bombas)="data">
                        {{data.item.ordem.bombas.nome_bombas}}
                    </template>
                     <template #cell(Data_de_emissao)="data">
                        {{ dateTime(data.item.ordem.created_at) }}
                    </template>
                    <template #cell(acções)="data">
                        <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

                            <template #button-content>
                                <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                            </template>
                            <b-dropdown-item :to="{ name: 'supply-details', params: { refs: data.item.ordem.refs } }">
                                <feather-icon icon="FileTextIcon" />
                                <span class="align-middle ml-50">Details</span>
                            </b-dropdown-item>
                        </b-dropdown>
                    </template>
                </b-table>
                 <div class="mx-2 mb-2">
                <b-row>

                    <b-col cols="12" sm="8" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                        <span class="text-muted">mostrar {{ dataMeta.from }} de {{ dataMeta.to }} para {{ dataMeta.of }} entradas</span>
                    </b-col>
                    <!-- Pagination -->
                    <b-col cols="12" sm="4" class="d-flex align-items-center justify-content-center justify-content-sm-end">

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
    </b-card>
</section>
</template>

<script>
import {
  BCard,
  BCardTitle,
  BCardSubTitle,
  BCardBody,
  BCollapse,
  BCardHeader,
  BRow,
  BCol,
  BTable,
  BButton,
  BModal,
  BFormRow,
  BFormInput,
  BForm,
  BFormText,
  BFormGroup,
  BLink,
  BBadge,
  BPagination,
  BDropdown,
BDropdownItem,
} from "bootstrap-vue";
import vSelect from "vue-select";
import Form from "vform";
import storeAbastecimentos from "./storeAbastecimentos";
import useAbastecimentoList from "./index";
import {
  ref,
  onUnmounted
} from "@vue/composition-api";
import store from "@/store";
import moment from "moment";

export default {
  components: {
    BCollapse,
    BCardSubTitle,
    BCardTitle,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    vSelect,
    BFormGroup,
    BButton,
    BModal,
    BFormRow,
    BFormInput,
    BForm,
    BFormText,
    BLink,
    BBadge,
    BPagination,
    BTable,
    BDropdown,
    BDropdownItem,
  },
  data() {
    return {
      abastecimentos: [],
      bombas: {},
      searchQuery: null,
      form: new Form({}),
      moment,
    };
  },
  created() {
    this.moment = moment;
  },
  setup() {
    const SUPPLY_STORE_MODULE_NAME = "Supply";

    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.registerModule(SUPPLY_STORE_MODULE_NAME, storeAbastecimentos);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.unregisterModule(SUPPLY_STORE_MODULE_NAME);
    });
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }

    const {
      fetchAbastecimentos,
      tableColumns,
      perPage,
      currentPage,
      totalAbastecimentos,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refAbastecimentoListTable,
      refetchData,
    } = useAbastecimentoList();

    return {
      fetchAbastecimentos,
      tableColumns,
      perPage,
      currentPage,
      totalAbastecimentos,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refAbastecimentoListTable,
      refetchData,
      dateTime,
    };
  },
};
</script>

<template>
  <div class="container-fluid">
    <BCard no-wrap>
      <BCardHeader class="d-flex justify-content-between flex-row">
        <BCardTitle>
          <BIconList /> Lista de abastecimento feitos para serviços
          administrativos</BCardTitle>
        <BButton variant="primary" @click="AbrirModal" ref="btnShow"> Abrir novo abastecimento </BButton>
      </BCardHeader>
      <BCardBody>
        <BRow class="d-flex justify-content-between">
          <BCol cols="4">
            <b-form-group label="Filtrar por Bombas:" label-for="input-10">
              <v-select
                v-model="bombasFilter"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="nome_bombas"
                :options="bombas"
                :reduce="(bombas) => bombas.nome_bombas"
                :clearable="false"
              />
            </b-form-group>
          </BCol>
          <BCol cols="4">
            <div class="d-flex align-items-center justify-content-end">
              <b-form-group label="Pesquisar">
                <b-form-input
                  v-model="searchQuery"
                  class="d-inline-block mr-1"
                  placeholder="pesquisar..."
                />
              </b-form-group>
            </div>
          </BCol>
        </BRow>
        <BTable
          ref="AdministrativeTableRef"
          :items="fetchAdminOrders"
          :fields="FieldColumn"
          responsive
          primary-key="id"
          :sort-by.sync="sortBy"
          show-empty
          empty-text="Nenhum dado encontrado"
          :sort-desc.sync="isSortDirDesc"
          head-variant="light"
        />
      </BCardBody>
    </BCard>
    <BModal
      ref="FormAbastecimento"
      size="lg"
      hide-footer
      title="Novo abastecimento para serviços administrativos"
    >
      <new-order />
    </BModal>
  </div>
</template>
<script>
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCardTitle,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BModal,
  BButton,
  BLink,
  BIconList,
  BTable,
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ref, onUnmounted } from "@vue/composition-api";
import moment from "moment";
import AdministrativeService from "./index";
import store from '@/store'
import AdministrativeModule from "./AdministrativeModule";
import newOrder from "./newOrder.vue";

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BModal,
    BButton,
    BLink,
    vSelect,
    BIconList,
    BTable,
    newOrder,
  },
  data() {
    return {
      bombas: [],
    };
  },
  created() {
    this.moment = moment;
    this.$http.get("/api/bombas").then((response) => {
      this.bombas = response.data;
    });
  },
  methods: {
    AbrirModal() {
      this.$refs.FormAbastecimento.show()
    },
  },
  setup() {
    const SUPPLY_STORE_MODULE_NAME = "Supply";

    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) {
      store.registerModule(SUPPLY_STORE_MODULE_NAME, AdministrativeModule);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME)) {
        store.unregisterModule(SUPPLY_STORE_MODULE_NAME);
      }
    });

    function dateTime(value) {
      return moment(value).format("DD/MM/YYYY hh:mm");
    }

    const {
      AdministrativeTableRef,
      FieldColumn,
      perPage,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      bombasFilter,
      fetchAdminOrders,
      refetchData,
    } = AdministrativeService();

    return {
      dateTime,
      AdministrativeTableRef,
      FieldColumn,
      perPage,
      dataMeta,
      perPageOptions,
      sortBy,
      isSortDirDesc,
      searchQuery,
      bombasFilter,
      AdministrativeService,
      fetchAdminOrders,
      refetchData,
    };
  },
};
</script>

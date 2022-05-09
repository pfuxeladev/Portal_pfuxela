<template>
<b-card no-body>
    <div class="m-2">
        <b-row>
            <!-- Per Page -->
            <b-col cols="12" md="6" class="d-flex align-items-center justify-content-start mb-1 mb-md-0">
                <label>Entradas</label>
                <v-select v-model="perPage" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="perPageOptions" :clearable="false" class="per-page-selector d-inline-block ml-50 mr-1" />
                <b-button variant="outline-primary" :to="{ name: 'New-Driver' }">
                    Novo motorista
                </b-button>
            </b-col>

            <!-- Search -->
            <b-col cols="12" md="6">
                <div class="d-flex align-items-center justify-content-end">
                    <b-form-input v-model="searchQuery" class="d-inline-block mr-1" placeholder="Search..." />
                </div>
            </b-col>
        </b-row>
    </div>
    <b-table ref="refDriverTableList" class="position-relative" :items="fetctDriver" responsive :fields="tableColumns" primary-key="id" :sort-by.sync="sortBy" show-empty empty-text="Nenhum motorista registado" :sort-desc.sync="isSortDirDesc">
        <template #cell(nome_completo)="data">
            {{data.item.person.nome_completo}} {{data.item.person.apelido}}
        </template>
        <template #cell(Endereço)="data">
            {{data.item.person.endereco}}
        </template>
        <template #cell(cargo)="data">
            {{data.item.person.cargo}}
        </template>
        <template #cell(NUIT)="data">
            {{data.item.person.NUIT}}
        </template>
        <template #cell(Documento)="data">
            {{data.item.doc_type}}
        </template>
        <template #cell(Nr_do_documento)="data">
            {{data.item.nr_documento}}
        </template>
        <template #cell(Carta_de_Condução)="data">
            {{data.item.carta_conducao}}
        </template>
        <template #cell(acções)="data">
            <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
                <template #button-content>
                    <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                </template>
                <b-dropdown-item :to="{ name: 'driver-details', params: { id: data.item.id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Detalhes</span>
                </b-dropdown-item>

                <b-dropdown-item :to="{ name: 'driver-edit', params: { id: data.item.id } }">
                    <feather-icon icon="EditIcon" />
                    <span class="align-middle ml-50">Editar</span>
                </b-dropdown-item>
            </b-dropdown>
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
            <span
              class="text-muted"
            >mostrar {{ dataMeta.from }} para {{ dataMeta.to }} de
              {{ dataMeta.of }} entradas</span>
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
              :total-rows="totalDrivers"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
</b-card>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BTooltip,
} from "bootstrap-vue";
import vSelect from "vue-select";
import {
  onUnmounted
} from "@vue/composition-api";
import store from "@/store";
import useMotoristasList from "./useMotoristasList";
import storeMotoristaModule from "./storeMotoritaModules";

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BTooltip,

    vSelect,
  },
  setup(props) {
    const DRIVER_STORE_MODULE_NAME = "Picket";

    // Register module
    if (!store.hasModule(DRIVER_STORE_MODULE_NAME)) {
      store.registerModule(DRIVER_STORE_MODULE_NAME, storeMotoristaModule);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(DRIVER_STORE_MODULE_NAME)) {
        store.unregisterModule(DRIVER_STORE_MODULE_NAME);
      }
    });

    const statusOptions = [{
      label: "Active",
      value: "active"
    },
    {
      label: "Inactive",
      value: "inactive"
    },
    ];

    const {
      fetctDriver,
      tableColumns,
      perPage,
      currentPage,
      totalDrivers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refDriverTableList,
      refetchData,

      // Extra Filters
      departmentFilter,
    } = useMotoristasList();

    return {
      fetctDriver,
      tableColumns,
      perPage,
      currentPage,
      totalDrivers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refDriverTableList,
      refetchData,

      // Extra Filters
      statusOptions,
      departmentFilter,
    }
  },
}
</script>

/* eslint-disable vue/html-self-closing */
<template>
  <b-card no-body>
    <b-card-header class="pb-50">
      <h5>Filtros</h5>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col cols="12" md="4" class="mb-md-0 mb-2">
          <label>Projetos</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="roleFilter"
            primary-key="id"
            :options="roleOptions"
            class="w-100"
            :reduce="(val) => val.value"
            @input="(val) => $emit('update:roleFilter', val)"
          />
        </b-col>
        <b-col cols="12" md="4" class="mb-md-0 mb-2">
          <label>Nome</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="planFilter"
            :options="planOptions"
            class="w-100"
            :reduce="(val) => val.value"
            @input="(val) => $emit('update:NameFilter', val)"
          />
        </b-col>
        <b-col cols="12" md="4" class="mb-md-0 mb-2">
          <label>pesquisar</label>
          <b-form-input
              v-model="searchQuery"
              class="d-inline-block mr-1"
              placeholder="Search..."
            />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="table-responsive mt-2">

          <b-table
            ref="refProjectListTable"
            class="position-relative"
            :items="fetchProjects"
            responsive
            :fields="tableColumns"
            primary-key="id"
            :sort-by.sync="sortBy"
            show-empty
            empty-text="No matching records found"
            :sort-desc.sync="isSortDirDesc"
          >
            <template #cell(acções)="data">
              <b-dropdown
                variant="link"
                no-caret
                :right="$store.state.appConfig.isRTL"
              >
                <template #button-content>
                  <feather-icon
                    icon="MoreVerticalIcon"
                    size="16"
                    class="align-middle text-body"
                  />
                </template>
                <b-dropdown-item
                  :to="{
                    name: 'Project Report',
                    params: { name: data.item.name },
                  }"
                >
                  <feather-icon icon="FileTextIcon" />
                  <span class="align-middle ml-50">Relatorios</span>
                </b-dropdown-item>

              </b-dropdown>
            </template>
          </b-table>
        </b-col>
        <div class="mx-2 mb-2">
          <b-row>
            <b-col
              cols="10"
              sm="10"
              class="
                d-flex
                align-items-center
                justify-content-center justify-content-sm-start
              "
            >
              <span class="text-muted"
                >mostrar {{ dataMeta.from }} &agrave; {{ dataMeta.to }} de
                {{ dataMeta.of }} entradas</span
              >
            </b-col>
            <!-- Pagination -->
            <b-col
              cols="2"
              sm="2"
              class="
                d-flex
                align-items-center
                justify-content-center justify-content-sm-end
              "
            >
              <b-pagination
                v-model="currentPage"
                :total-rows="totalProjects"
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
      </b-row>
    </b-card-body>
    <b-modal />
  </b-card>
</template>

<script>
import {
  BCard,
  BCardBody,
  BCardHeader,
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
  BModal,
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ref, onUnmounted } from "@vue/composition-api";
import store from "@/store";
import useprojectsList from "./index";
import storeProjectos from "./storeProjectos";

export default {
  name: "Projects",
  components: {
    BCard,
    BCardBody,
    BCardHeader,
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
    BModal,
    vSelect,
  },
  setup() {
    const PROJECT_APP_STORE_MODULE_NAME = "app-projects";

    // Register module
    if (!store.hasModule(PROJECT_APP_STORE_MODULE_NAME)) {
      store.registerModule(PROJECT_APP_STORE_MODULE_NAME, storeProjectos);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PROJECT_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(PROJECT_APP_STORE_MODULE_NAME);
      }
    });

    const isAddNewProjectsidebarActive = ref(false);

    const roleOptions = [];

    const planOptions = [];

    const statusOptions = [];

    const {
      fetchProjects,
      tableColumns,
      perPage,
      currentPage,
      totalProjects,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refProjectListTable,
      refetchData,
      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    } = useprojectsList();

    return {
      // Sidebar
      isAddNewProjectsidebarActive,

      fetchProjects,
      tableColumns,
      perPage,
      currentPage,
      totalProjects,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refProjectListTable,
      refetchData,

      roleOptions,
      planOptions,
      statusOptions,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    };
  },
};
</script>

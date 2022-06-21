<template>
  <div>
    <!-- Table Container Card -->
    <b-card no-body class="mb-0">
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>mostrar</label>
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
          <b-col cols="12" md="6"
            ><div v-if="can('Create')">
              <div class="d-flex align-items-center justify-content-end">
                <b-form-input
                  v-model="searchQuery"
                  class="d-inline-block mr-1"
                  placeholder="Search..."
                />
                <b-link
                  class="btn btn-outline-primary"
                  :to="{ name: 'New-car' }"
                >
                  <span class="text-nowrap">Ad.viatura</span>
                </b-link>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <b-table
        ref="refViaturaListTable"
        class="position-relative"
        :items="fetchViaturas"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >
        <template #cell(estado)="data">
          <span v-if="data.item.estado == 0">
            <b-badge variant="warning">inactivo</b-badge>
          </span>
          <span v-if="data.item.estado == 1">
            <b-badge variant="success">activo</b-badge>
          </span>
        </template>
        <!-- Column: Actions -->
        <template #cell(actions)="data">
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
              :to="{ name: 'cars-details', params: { id: data.item.id } }"
            >
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item
              :to="{ name: 'Edit-car', params: { id: data.item.id } }"
            >
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Editar</span>
            </b-dropdown-item>
            <b-dropdown-item
              v-if="data.item.estado == 1"
              @click="Deactivate(data.item.id)"
            >
              <feather-icon icon="XSquareIcon" />
              <span class="align-middle ml-50">desactivar</span>
            </b-dropdown-item>
            <b-dropdown-item
              v-if="data.item.estado == 0"
              @click="Activate(data.item.id)"
            >
              <feather-icon icon="CheckCircleIcon" />
              <span class="align-middle ml-50">activar</span>
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
              :total-rows="totalViaturas"
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
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BFormCheckbox,
  BButton,
  BTable,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
} from "bootstrap-vue";
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import vSelect from "vue-select";
import { ref, onUnmounted } from "@vue/composition-api";
import store from "@/store";
// import UsersListFilters from './UsersListFilters.vue'
import viaturaList from "./viaturaList";
import StoreViaturaModule from "./StoreViaturaModule";
// import viaturaAddNew from './viaturaForm.vue'

export default {
  components: {
    // UsersListFilters,

    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BFormCheckbox,
    BTable,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,

    vSelect,
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = "Picket";

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) {
      store.registerModule(USER_APP_STORE_MODULE_NAME, StoreViaturaModule);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(USER_APP_STORE_MODULE_NAME);
      }
    });

    const statusOptions = [
      {
        label: "Active",
        value: "active",
      },
      {
        label: "Inactive",
        value: "inactive",
      },
    ];
    const toast = useToast();
    function Activate(id) {
      store
        .dispatch("Picket/activateViatura", { id })
        .then((response) => {
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.message,
              icon: "CheckSquareIcon",
              variant: "success",
            },
          });
          window.location.reload();
        })
        .catch((err) => {
          if (err.response.status === 421) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.error,
                icon: "AlertTriangleIcon",
                variant: "danger",
              },
            });
            window.location.reload();
          }
        });
    }
    function Deactivate(id) {
      store
        .dispatch("Picket/inactivateViatura", { id })
        .then((response) => {
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.message,
              icon: "CheckSquareIcon",
              variant: "success",
            },
          });
          window.location.reload();
        })
        .catch((err) => {
          if (err.response.status === 421) {
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

    const {
      fetchViaturas,
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

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    } = viaturaList();

    return {
      // Sidebar

      fetchViaturas,
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

      statusOptions,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,

      //   activar viatura
      Activate,
      Deactivate,
    };
  },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
</style>

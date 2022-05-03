<template>
  <b-card no-body>
    <div class="m-2">
      <b-row>
        <!-- Per Page -->
        <b-col
          cols="12"
          md="6"
          class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
        >
          <label>Entradas</label>
          <v-select
            v-model="perPage"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :options="perPageOptions"
            :clearable="false"
            class="per-page-selector d-inline-block ml-50 mr-1"
          />
          <b-button
            variant="outline-primary"
            :to="{ name: 'New-Driver' }"
          >
            Novo motorista
          </b-button>
        </b-col>

        <!-- Search -->
        <b-col
          cols="12"
          md="6"
        >
          <div class="d-flex align-items-center justify-content-end">
            <b-form-input
              v-model="searchQuery"
              class="d-inline-block mr-1"
              placeholder="Search..."
            />
            <v-select
              v-model="departmentFilter"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="statusOptions"
              class="invoice-filter-select"
              placeholder="Select Status"
            >
              <template #selected-option="{ label }">
                <span class="text-truncate overflow-hidden">
                  {{ label }}
                </span>
              </template>
            </v-select>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-table
      ref="refDriverTableList"
      class="position-relative"
      :items="fetctDriver"
      responsive
      :fields="tableColumns"
      primary-key="id"
      :sort-by.sync="sortBy"
      show-empty
      empty-text="Nenhum motorista registado"
      :sort-desc.sync="isSortDirDesc"
    />
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
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { onUnmounted } from '@vue/composition-api'
import store from '@/store'
import useMotoristasList from './useMotoristasList'
import storeMotoristaModule from './storeMotoritaModules'

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
    const DRIVER_STORE_MODULE_NAME = 'piquet-motorista'

    // Register module
    if (!store.hasModule(DRIVER_STORE_MODULE_NAME)) { store.registerModule(DRIVER_STORE_MODULE_NAME, storeMotoristaModule) }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(DRIVER_STORE_MODULE_NAME)) { store.unregisterModule(DRIVER_STORE_MODULE_NAME) }
    })

    const statusOptions = [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

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
    } = useMotoristasList()

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

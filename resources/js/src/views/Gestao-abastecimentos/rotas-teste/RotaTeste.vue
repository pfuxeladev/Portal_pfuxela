<script>
import { defineComponent, onUnmounted, ref } from "@vue/composition-api";
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCardTitle,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "@/store";
import useRotaList from './RotaIndex'
import RotaTesteModule from './RotasTesteModule'
export default defineComponent({
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
  },
  setup() {
    const ROTAS_APP_STORE_MODULE_NAME = 'ROTAS'

    // Register module
    if (!store.hasModule(ROTAS_APP_STORE_MODULE_NAME)) store.registerModule(ROTAS_APP_STORE_MODULE_NAME, RotaTesteModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ROTAS_APP_STORE_MODULE_NAME)) store.unregisterModule(ROTAS_APP_STORE_MODULE_NAME)
    })
    const {
      fetchRotas,
      refetchData,
      tableColumns,
      refRotaDistanceListTable,
    } = useRotaList()

    return {
      fetchRotas,
      refetchData,
      tableColumns,
      refRotaDistanceListTable,
    }
  },
});
</script>
<template>
  <div>
    <b-card no-body>
      <div class="m-2">
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="12"
            class="d-flex align-items-center justify-content-center mb-1 mb-md-0"
          >
            <b-card-header>
              <b-card-title>Distancia di&aacute;rias das rotas</b-card-title>
            </b-card-header>
          </b-col>
        </b-row>
      </div>
      <b-card-body>
        <b-table
          ref="refRotaDistanceListTable"
          class="position-relative"
          :items="fetchRotas"
          responsive
          :fields="tableColumns"
          primary-key="id" >
          <template #cell(actions)="data">
           <div class="text-nowrap">
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
            <b-dropdown-item :to="{name: 'route-details-demo', params: { id: data.item.id }}">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Detalhes</span>
            </b-dropdown-item>
        </b-dropdown>
           </div>
          </template>
        </b-table>
      </b-card-body>
    </b-card>
  </div>
</template>

<template>
<section>
    <b-card no-body>
         <div class="mb-2">
        <b-row>
            <b-col>
                <b-form-input v-model="searchQuery" class="d-inline-block mr-1" placeholder="Search..." />
            </b-col>
            <b-col>
                <v-select />
            </b-col>
        </b-row>
         </div>
        <b-table ref="refSaidaTableList" :items="fetchEntradas" responsive :fields="tableColumns" primary-key="id" sort-by.sync="sortBy" show-empty empty-text="Nenhuma de lista de saida de viaturas cadastrada" :sort-desc.sync="isSortDirDesc" class="position-relative">
            <template #cell(Data_de_registo)="data">
                {{ dateTime(data.item.created_at) }}
            </template>
            <template #cell(Hora_de_saida)="data">
                {{ data.item.check_list_out.hr_inicio }}
            </template>
             <template #cell(Hora_da_chegada)="data">
                {{ data.item.hr_fim }}
            </template>
              <template #cell(Matricula)="data">
                {{ data.item.check_list_out.viatura.matricula }}
            </template>
             <template #cell(km_fim)="data">
                {{ data.item.km_fim }}
            </template>
             <template #cell(Criado_por)="data">
                {{ data.item.user.name }}
            </template>
            <template #cell(acções)="data">
            <b-dropdown v-if="data.item.viatura.locate !== 'OUT'" variant="link" no-caret :right="$store.state.appConfig.isRTL">
                <template #button-content>
                    <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                </template>
                <b-dropdown-item :to="{ name: 'CheckList-in-details', params: { id: data.item.id } }">
                    <feather-icon icon="FileTextIcon" />
                    <span class="align-middle ml-50">Detalhes</span>
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
            <span class="text-muted"
              >motrando {{ dataMeta.from }} a {{ dataMeta.to }} de
              {{ dataMeta.of }} entradas</span
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
              :total-rows="totalEntradas"
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

</section>
</template>

<script>

import {
  BTable,
  BCard,
  BRow,
  BCol,
  BFormInput,
  BLink,
  BButton,
  BDropdown,
  BDropdownItem,
  BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import {
  ref,
  onUnmounted
} from '@vue/composition-api'
import moment from 'moment'
import useRelatorioEntradaList from './relatorioEntrada'
import storeRelatorioModule from './storaRelatorioModule'
import store from '@/store'

export default {
  components: {
    BTable,
    BCard,
    BRow,
    BCol,
    BFormInput,
    BLink,
    BButton,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
  },
  setup() {
    const ENTRADAS_STORE_MODULE_NAME = 'Picket'

    // Register module
    if (!store.hasModule(ENTRADAS_STORE_MODULE_NAME)) store.registerModule(ENTRADAS_STORE_MODULE_NAME, storeRelatorioModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ENTRADAS_STORE_MODULE_NAME)) store.unregisterModule(ENTRADAS_STORE_MODULE_NAME)
    })
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }
    const {
      fetchEntradas,
      tableColumns,
      perPage,
      currentPage,
      totalEntradas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refEntradasTableList,
      refetchData1,
      rotaFilter,
    } = useRelatorioEntradaList()
    return {
      fetchEntradas,
      tableColumns,
      perPage,
      currentPage,
      totalEntradas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refEntradasTableList,
      refetchData1,
      rotaFilter,
      dateTime,
    }
  },
}
</script>

<style>

</style>

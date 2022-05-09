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
        <b-table ref="refSaidaTableList" :items="fetchEntradas" responsive :fields="tableColumns1" primary-key="id" sort-by.sync="sortBy" show-empty empty-text="Nenhuma de lista de saida de viaturas cadastrada" :sort-desc.sync="isSortDirDesc" class="position-relative"></b-table>
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
import useOcorrenciaList from './relatorioOcorrencia'
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
    const {
      fetchEntradas,
      tableColumns1,
      perPage,
      currentPage,
      totalEntradas,
      dataMeta1,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refEntradasTableList,
      refetchData1,
      rotaFilter,
    } = useOcorrenciaList()
    return {
      fetchEntradas,
      tableColumns1,
      perPage,
      currentPage,
      totalEntradas,
      dataMeta1,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refEntradasTableList,
      refetchData1,
      rotaFilter,
    }
  },
}
</script>

<style>

</style>

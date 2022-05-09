<template>
<section>
    <b-card no-body>
         <div class="mb-2">
        <b-row>
            <b-col>
                <b-link :to="{name: 'CheckList-Out'}" class="btn btn-outline-primary">
                    <span class="text-nowrap">Nova autoriza&ccedil;&atilde;o de saida</span>
                </b-link>
            </b-col>
            <b-col>
                <b-form-input v-model="searchQuery" class="d-inline-block mr-1" placeholder="Search..." />
            </b-col>
            <b-col>
                <v-select />
            </b-col>
        </b-row>
         </div>
        <b-table ref="refSaidaTableList" :items="fetchSaidas" responsive :fields="tableColumns" primary-key="id" sort-by.sync="sortBy" show-empty empty-text="Nenhuma de lista de saida de viaturas cadastrada" :sort-desc.sync="isSortDirDesc" class="position-relative"></b-table>
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
    const SAIDAS_STORE_MODULE_NAME = 'Picket'

    // Register module
    if (!store.hasModule(SAIDAS_STORE_MODULE_NAME)) store.registerModule(SAIDAS_STORE_MODULE_NAME, storeRelatorioModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SAIDAS_STORE_MODULE_NAME)) store.unregisterModule(SAIDAS_STORE_MODULE_NAME)
    })
    const {
      fetchSaidas,
      tableColumns,
      perPage,
      currentPage,
      totalSaidas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refSaidasTableList,
      refetchData,
      rotaFilter,
    } = useOcorrenciaList()
    return {
      fetchSaidas,
      tableColumns,
      perPage,
      currentPage,
      totalSaidas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refSaidasTableList,
      refetchData,
      rotaFilter,
    }
  },
}
</script>

<style>

</style>

<template>
  <BCard>
    <BCardHeader class="d-flex flex-container justify-content-between">
      <BCardTitle>Abastecimento relativo a servi&ccedil;os</BCardTitle>
      <span>
        <b-link variant="primary" class="btn btn-primary" :to="{name: 'New Order Service'}">Novo Pedido</b-link>
      </span>
    </BCardHeader>
    <BCardBody>
      <BRow>
        <BCol
          cols="12"
          md="12"
        >
          <div class="table-responsive">
            <BTable
            :fields="columnField"
            primary-key="id"
                     :sort-by.sync="sortBy"
                     show-empty
                     empty-text="Nenhum registo feito"
                     :sort-desc.sync="isSortDirDesc"
                     class="position-relative"/>
          </div>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>

<script>
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCardTitle,
  BRow,
  BCol,
  BLink,
  BTable,
} from 'bootstrap-vue'
import AbastecimentoService from './index'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BRow,
    BCol,
    BTable,
    BLink,
  },
  setup() {
    const {
      TableAbastecimentoServicoRef,
      perPage,
      totalOrderServices,
      currentPage,
      perPageOptions,
      querySearch,
      sortBy,
      isSortDirDesc,
      dataMeta,
      bombasFilter,
      columnField,
    } = AbastecimentoService()

    return {
      TableAbastecimentoServicoRef,
      perPage,
      totalOrderServices,
      currentPage,
      perPageOptions,
      querySearch,
      sortBy,
      isSortDirDesc,
      dataMeta,
      bombasFilter,
      columnField,
    }
  },
}
</script>

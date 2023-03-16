<template>
  <b-card
    v-if="tableData"
    no-body
    class="card-company-table"
  >
    <b-card-title class="pl-3 mt-2" style="display: flex; flex-direction: column; align-items: center">
      Lista das ultimas ordens de abastecimentos
    </b-card-title>
    <b-table
      :items="tableData"
      responsive
      :fields="fields"
      class="mb-0"
    >
      <!-- company -->
      <template #cell(DATA_DE_SUBMISSAO)="data">
        <div class="d-flex align-items-center">
          {{ dateTime(data.item.created_at)}}
        </div>
      </template>
    </b-table>
  </b-card>
</template>

<script>
import {
  BCard, BTable, BCardTitle,
} from 'bootstrap-vue'
import moment from 'moment'

export default {
  components: {
    BCard,
    BCardTitle,
    BTable,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fields: [
        { key: 'codigo_ordem', label: 'Codigo' },
        { key: 'tipo_ordem', label: 'Tipo_de_Ordem' },
        { key: 'matricula', label: 'Viaturas' },
        { key: 'qtd_abastecida', label: 'qtd' },
        { key: 'preco_cunsumo', label: 'Total_pago' },
        { key: 'created_at', label: 'DATA_DE_SUBMISSAO' },
      ],
    }
  },
  created() {
    this.moment = moment
  },
  setup() {
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }
    return {
      dateTime,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
  .dark-layout & {
    background: $theme-dark-body-bg !important;
  }
}
</style>

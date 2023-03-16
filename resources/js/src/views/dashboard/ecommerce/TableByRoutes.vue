<template>
  <b-card
    no-body
    class="card-company-table"
  >
    <b-card-title class="pl-3 mt-2"  style="display: flex; flex-direction: column; align-items: center">
      Abastecimento do dia {{ currentDate }} por Rota
    </b-card-title>
    <b-card-body>
      <BTable striped hover sticky-header :fields="columnItems" />
    </b-card-body>
  </b-card>
</template>
<script>
import {
  BCard, BCardBody, BCardTitle, BTable,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BCardBody, BCardTitle, BTable,
  },
  data() {
    return {
      date: new Date(),
      currentDate: null,
    }
  },
  created() {
    this.currentDate = this.date.toLocaleString()
  },
  setup() {
    const columnItems = [
      { key: 'nome_rota', label: 'Rota' },
      { key: 'projecto', label: 'Projecto' },
      { key: 'Nr_ordens', label: 'Nr de Ordens' },
      { key: 'qtd_requisitada', label: 'Qtd requisitada' },
    ]

    return {
      columnItems,
    }
  },
}
</script>

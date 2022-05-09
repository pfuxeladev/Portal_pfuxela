<template>
  <b-card
    no-body
    class="mb-0"
  >
  <b-card-header>
      <b-card-title>Gest&atilde;o e controle de entrada e saida de viaturas</b-card-title>
  </b-card-header>
    <div class="m-2">
      <b-tabs
        content-class="mt-3"
        justified
      >
        <b-tab
          title="Saidas de viaturas"
          active
        >
          <relatorio-saida/>
        </b-tab>
        <b-tab title="Entradas de viaturas">
         <relatorio-entrada />
        </b-tab>
      </b-tabs>
    </div>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BRow, BCol, BTabs, BTab,
  BForm,
  BFormGroup,
  BFormInput,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ref, onUnmounted } from '@vue/composition-api'
import Cleave from 'vue-cleave-component'
import DatePicker from 'vue2-datepicker'
import store from '@/store'
import relatorioSaida from './relatorio_saida.vue'
import relatorioEntrada from './relatorio_entrada.vue'
export default {
  components: {
    BCard,
    BCardHeader,
    BCardTitle,
    BRow,
    BCol,
    BTabs,
    BTab,
    vSelect,
    BForm,
   BFormGroup,
    BFormInput,
    Cleave,
    DatePicker,
    relatorioSaida,
    relatorioEntrada,
  },
  setup(props, { emit }) {
    const PIQUECT_STORE_MODULE_NAME = 'Picket'
    const searchQuery = ref(null)

    return {
        searchQuery,
    }
  },
}
</script>

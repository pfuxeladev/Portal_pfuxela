<template>
  <div id="relatorio-geral">
    <section>
      <b-card no-body>
        <b-card-header class="pb-50">
          <b-card-title>Relat&oacute;rio Geral dos abastecimento</b-card-title>
        </b-card-header>
        <div class="m-2">
          <!-- Table Top -->
          <b-row>
            <!-- Per Page -->

            <!-- Search -->
            <b-col cols="4" md="4">
              <b-form-group
                id="input-group-8"
                label="Dados da lista abaixo:"
                label-for="input-8"
              >
                <b-form-input
                  v-model="searchQuery"
                  class="d-inline-block mr-1"
                  placeholder="pesquisar..."
                />
              </b-form-group>
            </b-col>
            <b-col cols="4" md="4">
              <b-form-group
                id="input-group-8"
                label="Data cadastro de viatura:"
                label-for="input-8"
                description="Data cadastro de viatura."
              >
                <date-picker
                  value-type="format"
                  format="YYYY-MM-DD"
                  style="width: 100%"
                  id="example-datepicker1"
                  range
                  locale="pt"
                  class="mb-1"
                />
              </b-form-group>
            </b-col>
            <b-col cols="4" md="4">
              <b-form-group
                id="input-group-8"
                label="Filtrar por periodo:"
                label-for="input-8"
                description="Datas periodicas."
              >
                <v-select  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="dateOptions"
                 :clearable="false"
              class="per-page-selector d-inline-block mx-50"
              ></v-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>

            </b-col>
            <b-col></b-col>
            <b-col></b-col>
          </b-row>
        </div>
        <b-card-body>
 <b-row>
    <b-col cols="3">
        <b-button variant="outline-primary"><i class="fas fa-print"></i> Imprimir</b-button>
    </b-col>
          <b-col cols="12" xl="12" md="12" class="table-responsive">
            <b-table ref="RelatorioGeral" :items="generalReport" :fields="fieldColumns" head-variant="light">
                 <template #cell(ordem)="data">
                        <span v-if="data.item.ordem !== null">
                        {{data.item.ordem.codigo_ordem}}
                        </span>
                    </template>
                     <template #cell(Data_de_emissao)="data">
                        {{dateTime(data.item.ordem.updated_at)}}
                    </template>
                    <template #cell(viatura_matricula)="data">
                        {{data.item.viatura.matricula}}
                    </template>
                    <template #cell(combustivel)="data">
                        {{data.item.viatura.tipo_combustivel}}
                    </template>
                    <template #cell(qtd)="data">
                        {{data.item.qtd_abastecida}}
                    </template>
                     <template #cell(preço)="data">
                        {{(data.item.preco_cunsumo /data.item.qtd_abastecida )| toCurrency}}
                    </template>
                    <template #cell(rotas_tomadas)="data">
                        <div v-for="(rotas, i) in data.item.ordem_viatura_rota" :key="'A'+ i">
                            <span class="mr-1">{{rotas.rota.nome_rota}}</span>
                        </div>
                    </template>
                     <template #cell(bombas)="data">
                        {{data.item.ordem.bombas.nome_bombas}}
                    </template>
                    <template #cell(autor)="data">
                        {{data.item.ordem.approved_by.name}}
                    </template>
                     <template #cell(Subtotal)="data">
                        {{ data.item.preco_cunsumo | toCurrency}}
                    </template>
                     <template #cell(acção)="data">
                        <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">

                            <template #button-content>
                                <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
                            </template>
                            <b-dropdown-item :to="{ name: 'supply-details', params: { refs: data.item.ordem.refs } }">
                                <feather-icon icon="FileTextIcon" />
                                <span class="align-middle ml-50">Details</span>
                            </b-dropdown-item>
                        </b-dropdown>
                    </template>
            </b-table>
          </b-col>
        </b-row>
        </b-card-body>
      </b-card>
    </section>
  </div>
</template>

<script>
import {
  BCard,
  BCardTitle,
  BCardSubTitle,
  BCardBody,
  BCollapse,
  BCardHeader,
  BRow,
  BCol,
  BTable,
  BButton,
  BModal,
  BFormRow,
  BFormInput,
  BForm,
  BFormText,
  BFormGroup,
  BLink,
  BBadge,
  BPagination,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Form from 'vform'
import { ref, onUnmounted } from '@vue/composition-api'
import store from '@/store'
import moment from 'moment'
import flatPickr from 'vue-flatpickr-component'
import DatePicker from 'vue2-datepicker'
import storeAbastecimentos from './storeAbastecimentos'
import useAbastecimentoList from "./index"
import 'vue2-datepicker/index.css'

export default {
  components: {
    BCollapse,
    BCardSubTitle,
    BCardTitle,
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    vSelect,
    BFormGroup,
    BButton,
    BModal,
    BFormRow,
    BFormInput,
    BForm,
    BFormText,
    BLink,
    BBadge,
    BPagination,
    BTable,
    BDropdown,
    BDropdownItem,
    flatPickr,
    DatePicker,
  },
  created() {
    this.moment = moment
  },
  setup() {
    const SUPPLY_STORE_MODULE_NAME = 'Supply'
    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.registerModule(SUPPLY_STORE_MODULE_NAME, storeAbastecimentos);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.unregisterModule(SUPPLY_STORE_MODULE_NAME);
    })
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY')
    }

    const dateOptions = [
      { label: 'Hoje', value: 'Hoje' },
      { label: 'Semanal', value: 'Semanal' },
      { label: 'Mes', value: 'Mensal' },
      { label: 'Ano', value: 'Anual' },
    ]
    const fieldColumns = [
      { key: 'ordem', sortable: true },
      { key: 'Data_de_emissao', sortable: true },
      { key: 'viatura_matricula', sortable: true },
      { key: 'Combustivel', sortable: true },
      { key: 'qtd', sortable: true },
      { key: 'preço', sortable: true },
      { key: 'rotas_tomadas', sortable: true },
      { key: 'bombas', sortable: true },
      { key: 'autor', sortable: true },
      { key: 'Subtotal', sortable: true },
      { key: 'acção' },
    ]
    const bomba = ref(null)
    const viatura = ref(null)

    const {
      perPage,
      currentPage,
      refetchHistory,
      generalReport,
      RelatorioGeral,
      totalHistoricos,
      dataHistory,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
    } = useAbastecimentoList()

    return {
      perPage,
      currentPage,
      dateOptions,
      fieldColumns,
      bomba,
      viatura,
      refetchHistory,
      generalReport,
      RelatorioGeral,
      totalHistoricos,
      dataHistory,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      dateTime,
    }
  },
}
</script>

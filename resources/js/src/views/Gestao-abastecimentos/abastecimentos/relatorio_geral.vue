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
                  v-model="searchDatas"
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
                  v-model="intervalo"
                  range
                  locale="pt"
                  class="mb-1"
                />
              </b-form-group>
            </b-col>
            <b-col cols="4" md="4">
              <b-form-group
                label="Filtrar por periodo:"
                label-for="input-8"
                description="Datas periodicas."
              >
                <v-select
                  v-model="dateReport"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="dateOptions"
                  :reduce="dateOptions => dateOptions.value"
                  :clearable="false"
                ></v-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col
              cols="12"
              md="4"
              class="
                d-flex
                align-items-center
                justify-content-start
                mb-1 mb-md-0
              "
            >
              <label>mostrar</label>
              <v-select
                v-model="perPage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="perPageOptions"
                :clearable="false"
                class="per-page-selector d-inline-block mx-50"
              />
              <label>entradas</label>
            </b-col>
            <b-col> </b-col>
            <b-col></b-col>
            <b-col></b-col>
          </b-row>
        </div>
        <b-card-body>
          <b-row>
            <b-col cols="3">
              <b-button variant="outline-primary" @click="imprimir()"
                ><i class="fas fa-print"></i> Imprimir</b-button
              >
            </b-col>
            <b-col cols="12" xl="12" md="12" class="table-responsive">
              <b-table
                ref="RelatorioGeral"
                :items="generalReport"
                :fields="fieldColumns"
                primary-key="id"
                :sort-by.sync="sortBy"
                show-empty
                empty-text="Nenhum dado encontrado"
                :sort-desc.sync="isSortDirDesc"
                head-variant="light"
              >
                <template #cell(ordem)="data">
                  <span v-if="data.item.ordem !== null">
                    {{ data.item.ordem.codigo_ordem }}
                  </span>
                </template>
                <template #cell(Data_de_emissao)="data">
                  {{ dateTime(data.item.ordem.updated_at) }}
                </template>
                <template #cell(viatura_matricula)="data">
                  {{ data.item.viatura.matricula }}
                </template>
                <template #cell(combustivel)="data">
                  {{ data.item.viatura.tipo_combustivel }}
                </template>
                <template #cell(qtd)="data">
                  {{ data.item.qtd_abastecida }}
                </template>
                <template #cell(preço)="data">
                  {{
                    (data.item.preco_cunsumo / data.item.qtd_abastecida)
                      | toCurrency
                  }}
                </template>
                <template #cell(rotas_tomadas)="data">
                  <div
                    v-for="(rotas, i) in data.item.ordem_viatura_rota"
                    :key="'A' + i"
                  >
                    <span class="mr-1">{{ rotas.rota.nome_rota }}</span>
                  </div>
                </template>
                <template #cell(bombas)="data">
                  {{ data.item.ordem.bombas.nome_bombas }}
                </template>
                <template #cell(autor)="data">
                    <span v-if="data.item.ordem.approved_by !==null">
                    {{ data.item.ordem.approved_by.name }}
                    </span>

                </template>
                <template #cell(Subtotal)="data">
                  {{ data.item.preco_cunsumo | toCurrency }}
                </template>
                <template #cell(acção)="data">
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
                    <b-dropdown-item
                      :to="{
                        name: 'supply-details',
                        params: { refs: data.item.ordem.refs },
                      }"
                    >
                      <feather-icon icon="FileTextIcon" />
                      <span class="align-middle ml-50">Details</span>
                    </b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-table>
              <div class="mx-2 mb-2">
                <b-row>
                  <b-col
                    cols="12"
                    sm="8"
                    class="
                      d-flex
                      align-items-center
                      justify-content-center justify-content-sm-start
                    "
                  >
                    <span class="text-muted"
                      >mostrar {{ dataHistory.from }} de
                      {{ dataHistory.to }} para
                      {{ dataHistory.of }} entradas</span
                    >
                  </b-col>
                  <!-- Pagination -->
                  <b-col
                    cols="12"
                    sm="4"
                    class="
                      d-flex
                      align-items-center
                      justify-content-center justify-content-sm-end
                    "
                  >
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalHistoricos"
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
} from 'bootstrap-vue';
import vSelect from 'vue-select';
import Form from 'vform';
import { ref, onUnmounted } from '@vue/composition-api';
import store from '@/store';
import moment from 'moment';
import flatPickr from 'vue-flatpickr-component';
import DatePicker from 'vue2-datepicker';
import storeAbastecimentos from './storeAbastecimentos';
import 'vue2-datepicker/index.css';
import _ from 'lodash';
import useRelatorioList from './Relatorio';

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
    this.moment = moment;
  },
  setup() {
    const SUPPLY_STORE_MODULE_NAME = 'Supply';
    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.registerModule(SUPPLY_STORE_MODULE_NAME, storeAbastecimentos);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME))
        store.unregisterModule(SUPPLY_STORE_MODULE_NAME);
    });
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY');
    }
    const dateOptions = [
      { label: 'Hoje', value: 'Hoje' },
      { label: 'Semanal', value: 'Semanal' },
      { label: 'Mes', value: 'Mensal' },
      { label: 'Ano', value: 'Anual' },
    ];

    function imprimir() {
      const newLocal = 'download';
    //   alert(this.intervalo)
      if (this.intervalo) {
        this.$http
          .post('/api/printRelatorio', { intervalo: this.intervalo }, {
            responseType: 'blob',
            Accept: 'application/pdf',
          })
          .then((response) => {
            // console.log(response.data)
            const fileURL = window.URL.createObjectURL(
              new Blob([response.data], {
                type: 'application/pdf',
              })
            );
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute(newLocal, 'Relatorio.pdf');
            document.body.appendChild(fileLink);
            fileLink.click();
          });
      } else if (this.searchDatas !== '') {
        this.$http
          .post('/api/printRelatorio', { searchDatas: this.searchDatas }, {
            responseType: 'blob',
            Accept: 'application/pdf',
          })
          .then((response) => {
            const fileURL = window.URL.createObjectURL(
              new Blob([response.data], {
                type: 'application/pdf',
              })
            );
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute(newLocal, 'Relatorio.pdf');
            document.body.appendChild(fileLink);
            fileLink.click();
          });
      } else if (this.dateReport !== '') {
        this.$http
          .post('/api/printRelatorio', { dateReport: this.dateReport }, {
            responseType: 'blob',
            Accept: 'application/pdf',
          })
          .then((response) => {
            const fileURL = window.URL.createObjectURL(
              new Blob([response.data], {
                type: 'application/pdf',
              })
            );
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute(newLocal, 'Relatorio.pdf');
            document.body.appendChild(fileLink);
            fileLink.click();
          });
      } else if (this.dateReport !== '' && this.intervalo !== '' && this.searchDatas !== '') {
        this.$http
          .post('/api/printRelatorio', {dateReport: this.dateReport, intervalo: this.intervalo, searchDatas: this.searchDatas }, {
            responseType: 'blob',
            Accept: 'application/pdf',
          })
          .then((response) => {
            const fileURL = window.URL.createObjectURL(
              new Blob([response.data], {
                type: 'application/pdf',
              })
            );
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute(newLocal, 'Relatorio.pdf');
            document.body.appendChild(fileLink);
            fileLink.click();
          });
      } else {
         this.$http
          .post('/api/printRelatorio', {
            responseType: 'blob',
            Accept: 'application/pdf',
          })
          .then((response) => {
            const fileURL = window.URL.createObjectURL(
              new Blob([response.data], {
                type: 'application/pdf',
              })
            );
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute(newLocal, 'Relatorio.pdf');
            document.body.appendChild(fileLink);
            fileLink.click();
          });
      }
    }
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
    ];
    const bomba = ref(null);
    const viatura = ref(null);

    const {
      perPage,
      currentPage,
      refetchHistory,
      generalReport,
      dateReport,
      RelatorioGeral,
      totalHistoricos,
      dataHistory,
      perPageOptions,
      searchDatas,
      intervalo,
      sortBy,
      isSortDirDesc,
    } = useRelatorioList();

    return {
      perPage,
      currentPage,
      dateOptions,
      fieldColumns,
      intervalo,
      dateReport,
      bomba,
      viatura,
      refetchHistory,
      generalReport,
      RelatorioGeral,
      totalHistoricos,
      dataHistory,
      perPageOptions,
      searchDatas,
      sortBy,
      isSortDirDesc,
      dateTime,
      imprimir,
    };
  },
};
</script>

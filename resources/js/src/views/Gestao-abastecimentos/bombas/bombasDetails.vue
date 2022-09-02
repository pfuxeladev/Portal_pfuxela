<template>
  <section class="invoice-add-wrapper mt-3">
    <b-row class="invoice-add">
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <h3 class="card-title">Dados da Bomba: {{ bomba.nome_bombas }}</h3>
          </b-card-header>
          <b-card-body>
            <b-row sm>
              <b-col cols="5" md="5">
                <b-list-group>
                  <b-list-group-item
                    ><span>Capacidade: </span>
                    {{ bomba.capacidade }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><span>Tipo: </span>
                    {{ bomba.tipo_bomba }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><span>Qtd disponivel: </span>
                    {{ bomba.qtd_disponivel }}</b-list-group-item
                  >
                </b-list-group>
              </b-col>
              <b-col cols="4" md="4">
                <b-list-group>
                  <b-list-group-item
                    v-for="resp in bomba.responsavel"
                    :key="resp.id"
                    ><span>Email: </span>
                    {{ resp.email_bomba }}</b-list-group-item
                  >
                </b-list-group>
              </b-col>
              <b-col cols="3" md="3">
                <b-list-group>
                  <b-list-group-item
                    v-for="comb in bomba.combustivel"
                    :key="comb.id"
                    ><span>Combustivel: </span>
                    {{ comb.tipo_combustivel }}
                    <br />
                    <span>Pre&ccedilo actual: </span> {{ comb.preco_actual }}
                  </b-list-group-item>
                </b-list-group>
              </b-col>
              <b-col cols="8">
                <b-button id="show-btn" @click="$bvModal.show('modal-xl')">Abrir Relatorio</b-button>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <b-modal id="modal-xl" size="xl" title="Relatorio de abastecimento">
      <b-row>
        <b-col>
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
        <b-col>
          <b-form-group label="Pesquisar por codigo">
            <b-form-input type="search"  v-model="searchQuery"
                  class="d-inline-block mr-1"
                  placeholder="Search..."></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Intervalo de datas">
            <date-picker
              value-type="format"
              format="YYYY-MM-DD"
              style="width: 100%"
              id="example-datepicker1"
              v-model="intervalo"
              range
              locale="pt"
              class="mb-1"
            ></date-picker>
          </b-form-group>
        </b-col>
        <b-col>
          <b-button class="mt-2" variant="outline-primary">
            imprimir <i class="fas fa-print"></i>
          </b-button>
        </b-col>
      </b-row>

      <b-table ref="refOrderListTable" :items="fetchOrdens" responsive :fields="tableColumns" primary-key="id" :sort-by.sync="sortBy" show-empty empty-text="Nenhuma Ordem encontrada" :sort-desc.sync="isSortDirDesc" class="position-relative" style="font-size:8pt">
      <template #cell(codigo)="data">
        {{data.item.codigo_ordem}}
      </template>
      <template #cell(viaturas)="data">
        <span v-if="data.item.viatura.length > 0">
        <ul class="list-group">
            <li class="list-group-item" v-for="(via, v) in data.item.viatura" :key="'v'+v">
            {{via.matricula}}
            </li>
        </ul>
        </span>
        <span v-else>
            -
        </span>
      </template>
      <template #cell(qtd)="data">
        <span v-if="data.item.ordem_viatura.length > 0">
            <ul class="list-group">
            <li class="list-group-item" v-for="(ordVi, v) in data.item.ordem_viatura" :key="'v'+v">
            {{ordVi.qtd_abastecida}}
            </li>
        </ul>
        </span>
        <span v-else>
          0
        </span>
      </template>
      <template #cell(subtotal)="data">
        <span v-if="data.item.ordem_viatura.length > 0">
            <ul class="list-group">
            <li class="list-group-item" v-for="(ordVi, v) in data.item.ordem_viatura" :key="'p'+v">
            {{ordVi.preco_cunsumo}}
            </li>
        </ul>
        </span>
        <span v-else>
          0
        </span>
      </template>
      <template #cell(rota)="data">
        <span v-if="data.item.ordem_viatura.length > 0">
                <span v-for="(v, i) in data.item.ordem_viatura" :key="'p'+i" >
                    <div class="m-2" v-if="v.rota !== null">
                        <span v-for="(rota, r) in v.rota" :key="'r'+r">
                            {{rota.nome_rota}},
                        </span>
                        <br>
                    </div>
                </span>

        </span>
        <span v-else> --</span>
      </template>
      <template #cell(autor)="data">
        <div v-if="data.item.created_by !== null">
            {{data.item.created_by.name}}
        </div>
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
              >Showing {{ dataMeta.from }} to {{ dataMeta.to }} of
              {{ dataMeta.of }} entries</span
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
              :total-rows="totalOrdens"
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
    </b-modal>
  </section>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BCardFooter,
  BBadge,
  BLink,
  BRow,
  BCol,
  BListGroup,
  BListGroupItem,
  BImg,
  BFormGroup,
  BFormInput,
  BModal,
  BButton,
  BTable,
  BPagination,
  // eslint-disable-next-line import/newline-after-import
} from 'bootstrap-vue'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import flatPickr from 'vue-flatpickr-component'
import DatePicker from 'vue2-datepicker'
import Form from 'vform'
import store from '@/store'
import router from '@/router'
// import Table from '../../table/bs-table/Table.vue'
import vSelect from "vue-select";
import useBombasList from './bombasIndex'
import storeBombaIndex from './storeBombaIndex'
import 'vue2-datepicker/index.css'
const newLocal = 'DD/MM/YYYY hh:mm'
export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCardFooter,
    BBadge,
    BLink,
    BRow,
    BCol,
    BListGroup,
    BListGroupItem,
    BFormInput,
    BImg,
    BFormGroup,
    BTable,
    BModal,
    vSelect,
    DatePicker,
    BButton,
    BPagination,
  },
  setup() {
    const bomba = ref(null)

    const toast = useToast()
    const ORDENS_APP_STORE_MODULE_NAME = 'app-bombas'

    // Register module
    if (!store.hasModule(ORDENS_APP_STORE_MODULE_NAME)) {
      store.registerModule(ORDENS_APP_STORE_MODULE_NAME, storeBombaIndex)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ORDENS_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(ORDENS_APP_STORE_MODULE_NAME)
      }
    })

    function getBombasDetails() {
      this.$http
        .get(`/api/bombas/${router.currentRoute.params.id}`)
        .then((response) => {
          this.bomba = response.data
        })
        .catch((err) => {
          if (err.response.status === 421) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.error,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          }
        })
    }
    function dateTime(value) {
      return moment(value).format(newLocal)
    }

    const {
      fetchOrdens,
      perPage,
      tableColumns,
      totalOrdens,
      currentPage,
      dataMeta,
      perPageOptions,
      intervalo,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refOrderListTable,
      refetchData,
    } = useBombasList()
    // end submittion
    return {
      // ordens
      fetchOrdens,
      intervalo,
      perPage,
      tableColumns,
      totalOrdens,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      currentPage,
      refetchData,
      refOrderListTable,
      // fin ordens
      getBombasDetails,
      dateTime,
      bomba,
    }
  },
  created() {
    this.getBombasDetails()
  },
}
</script>

<template>
  <section>
    <b-card no-body>
      <b-card-header>
        <h3 class="card-title">{{ ProjectDta.name }}</h3>
        <br />
        <ul class="list-group list-group-flush">
          <li class="list-group-item active">
            <b>Endereço</b>: {{ ProjectDta.address_xtense }}
          </li>
          <li class="list-group-item"><b>Email</b>: {{ ProjectDta.email }}</li>
        </ul>
      </b-card-header>
      <b-card-body>
        <b-row class="mb-2">
          <b-col
            cols="12"
            md="4"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
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
          <b-col></b-col>
          <b-col>
            <b-form-group
              id="input-group-8"
              label="Dados da lista abaixo:"
              label-for="input-8"
            >
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="pesquisar..."
              /> </b-form-group
          ></b-col>
        </b-row>
        <b-table
          ref="refRotatListTable"
          class="position-relative"
          :items="fetchRotas"
          responsive
          :fields="tableColumns"
          primary-key="id"
          :sort-by.sync="sortBy"
          show-empty
          empty-text="Nenhum dado encontrado"
          :sort-desc.sync="isSortDirDesc"
          head-variant="light"
        >
          <template #cell(Rota)="data">
            {{ data.item.nome_rota }}
          </template>
          <template #cell(Total(MZN))="data">
            {{ data.item.total_order | toCurrency }}
          </template>
          <template #cell(Total(Ltr))="data">
            {{ data.item.total_abastecido }}
          </template>
          <template #cell(acções)="row">
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
              <b-dropdown-item @click="row.toggleDetails">
                <feather-icon icon="FileTextIcon" />
                <span class="align-middle ml-50"
                  >{{ row.detailsShowing ? "Hide" : "Show" }} Detalhes</span
                >
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template #row-details="row">
            <b-card>
              <table class="table table-light">
                <thead class="thead-dark">
                  <tr>
                    <th>Codigo</th>
                    <th>Viatura</th>
                    <th>Qtd</th>
                    <th>Preco</th>
                    <th>Bombas</th>
                    <th>Autor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(orders, index) in row.item.ordem_viatura"
                    :key="'O' + index"
                  >
                    <td>{{ orders.ordem.codigo_ordem }}</td>
                    <td>{{ orders.viatura.matricula }}</td>
                    <td>{{ orders.qtd_abastecida }}</td>
                    <td>{{ orders.preco_cunsumo }}</td>
                    <td>{{ orders.ordem.bombas.nome_bombas }}</td>
                    <td>{{ orders.ordem.approved_by.name }}</td>
                  </tr>
                </tbody>
              </table>
            </b-card>
          </template>
        </b-table>
      </b-card-body>
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
              >mostrar {{ dataMeta.from }} de {{ dataMeta.to }} para
              {{ dataMeta.of }} entradas</span
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
              :total-rows="totalRotas"
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
  BCard,
  BCardBody,
  BCardHeader,
  BRow,
  BCol,
  BFormInput,
  BFormGroup,
  BButton,
  BTable,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BModal,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import {
  ref, onUnmounted,
} from '@vue/composition-api'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import moment from 'moment'
import store from '@/store'
import storeProjectos from './storeProjectos'
import useRotasList from './ReportProjecto'
import router from '@/router'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BRow,
    BCol,
    BFormInput,
    BFormGroup,
    BButton,
    BTable,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BModal,
    vSelect,
  },
  created() {
    this.moment = moment
  },
  setup() {
    const PROJECT_APP_STORE_MODULE_NAME = 'app-projects'

    // Register module
    if (!store.hasModule(PROJECT_APP_STORE_MODULE_NAME)) {
      store.registerModule(PROJECT_APP_STORE_MODULE_NAME, storeProjectos)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PROJECT_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(PROJECT_APP_STORE_MODULE_NAME)
      }
    })

    const ProjectDta = ref(null)

    store
      .dispatch('app-projects/fetchProjectoDetails', {
        name: router.currentRoute.params.name,
      })
      .then(response => {
        ProjectDta.value = response.data
      })
      .catch(error => {
        if (error.response.status === 404) {
          ProjectDta.value = undefined
        }
      })

    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY')
    }
    const {
      tableColumns,
      perPage,
      currentPage,
      totalRotas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refRotatListTable,
      refetchData,
      fetchRotas,
    } = useRotasList()

    return {
      tableColumns,
      perPage,
      currentPage,
      totalRotas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refRotatListTable,
      refetchData,
      ProjectDta,
      dateTime,
      fetchRotas,
    }
  },
}
</script>

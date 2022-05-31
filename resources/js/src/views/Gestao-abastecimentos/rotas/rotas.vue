<template>

  <div>
    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >
      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
          </b-col>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                variant="outline-primary"
                @click="showModal"
              >
                <span class="text-nowrap">Ad.Rota</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refRotaListTable"
        class="position-relative"
        :items="fetchRotas"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="Nenhum dado resgistado"
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: User -->
        <template #cell(Nome)="data">
            {{ data.item.name }}
        </template>
         <template #cell(Endereco)="data">
            {{ data.item.address }}
        </template>
        <template #cell(Tamanho)="data">
            {{data.item.distance}} km's
        </template>
        <template #cell(horaPartida)="data">
            <span v-for="(hr, index) in data.item.horario" :key="hr.id">
                <span v-if="index === 0">
                <b>Turno1</b>: {{hr.turno}}, <b>{{hr.horaPartida}}</b>hr's
                </span>
                 <span v-if="index === 1">
                <b>Turno2</b>: {{hr.turno}}, <b>{{hr.horaPartida}}</b>hr's
                </span>
            </span>

        </template>
        <template #cell(horaChegada)="data">
            <span v-for="(hr, index) in data.item.horario" :key="hr.id">
                <span v-if="index === 0">
                     <b>Turno1</b>: {{hr.turno}}, <b>{{hr.horaChegada}}</b>hr's
                </span>
                 <span v-if="index === 1">
                     <b>Turno2</b>: {{hr.turno}}, <b>{{hr.horaChegada}}</b>hr's
                </span>
            </span>
        </template>
        <template #cell(Tipo_da_rota)="data">
            {{data.item.tipoRota}}
        </template>
        <!-- Column: Actions -->
        <template #cell(actions)="data">
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
            <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">mostrar {{ dataMeta.from }} de {{ dataMeta.to }} para {{ dataMeta.of }} entradas</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
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
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
      <b-modal
        ref="rotaModal"
        size="lg"
        hide-footer
        title="Cadastro de rotas"
      >
        <rota-form @refetch-data="refetchData" />
      </b-modal>

    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ref, onUnmounted } from '@vue/composition-api'
import store from '@/store'
import useRotaList from './index'
    import storeRotasModule from './storeRotasModule'
import rotaForm from './rotaForm.vue'

export default {
  components: {
    rotaForm,
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,

    vSelect,
  },
  methods: {
    showModal() {
      this.$refs['rotaModal'].show()
    },
    hideModal() {
      this.$refs['rotaModal'].hide()
    },
    toggleModal() {
      this.$refs['rotaModal'].toggle('#toggle-btn')
    },
  },
  setup() {
    const ROTAS_APP_STORE_MODULE_NAME = 'Supply'

    // Register module
    if (!store.hasModule(ROTAS_APP_STORE_MODULE_NAME)) store.registerModule(ROTAS_APP_STORE_MODULE_NAME, storeRotasModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ROTAS_APP_STORE_MODULE_NAME)) store.unregisterModule(ROTAS_APP_STORE_MODULE_NAME)
    })

    const {
      fetchRotas,
      tableColumns,
      perPage,
      currentPage,
      totalRotas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refRotaListTable,
      refetchData,
    } = useRotaList()

    return {

      fetchRotas,
      tableColumns,
      perPage,
      currentPage,
      totalRotas,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refRotaListTable,
      refetchData,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>

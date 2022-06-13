<template>
  <section class="container-fluid">
    <b-card no-body>
      <b-card-header class="pb-50">
        <h5>Filters</h5>
      </b-card-header>
      <b-card-body>
        <b-row>
          <b-col
            cols="12"
            md="4"
            class="mb-md-0 mb-2"
          >
            <label>Estado</label>
            <v-select
              v-model="statusFilter"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :value="statusFilter"
              :options="statusOptions"
              class="w-100"
              :reduce="(val) => val.value"
              @input="(val) => $emit('update:roleFilter', val)"
            />
          </b-col>
          <b-col
            cols="12"
            md="4"
            class="mb-md-0 mb-2"
          >
            <b-form-group>
              <h5>Filtrar por intervalos</h5>
              <flat-pickr
                v-model="rangeDate"
                class="form-control"
                :config="{ mode: 'range' }"
              />
            </b-form-group>
          </b-col>
          <b-col
            cols="12"
            md="4"
            class="mb-md-0 mb-2"
          >
            <label>Bombas</label>
            <v-select
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              class="w-100"
            />
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
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
            <label>Mostrar</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entradas</label>
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
                variant="primary"
                @click="showModal"
              >
                <span class="text-nowrap">Nova Ordem</span>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-table
        ref="refOrdersListTable"
        class="position-relative"
        :items="fetchOrders"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="Nenhuma ordem listada"
        :sort-desc.sync="isSortDirDesc"
      >
        <template #cell(cogido_ordem)="data">
          {{ data.item.codigo_ordem }}
        </template>
        <template #cell(data_de_emissao)="data">
          {{ dateTime(data.item.created_at) }}
        </template>
        <template #cell(status)="data">
             <b-badge
            pill
            :variant="`light-${resolveOrdersStatusVariant(data.item.estado)}`"
            class="text-capitalize"
          >
          {{ data.item.estado }}
             </b-badge>
        </template>
        <template #cell(emitida_por)="data">
          {{ data.item.created_by.name }}
        </template>
        <template #cell(acções)="data">
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
            <b-dropdown-item v-if="data.item.estado !== 'Aberta'"
              :to="{ name: 'supply-details', params: { refs: data.item.refs } }"
            >
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Detalhes</span>
            </b-dropdown-item>
             <b-dropdown-item  v-if="data.item.estado === 'Aberta'"
              :to="{ name: 'New-supply-order', params: { refs: data.item.refs } }"
            >
              <feather-icon icon="RepeatIcon" />
              <span class="align-middle ml-50">continuar</span>
            </b-dropdown-item>
            <b-dropdown-item v-if="data.item.estado === 'Pendente'"
              :to="{ name: 'Edit-Order', params: { refs: data.item.refs } }"
            >
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Editar</span>
            </b-dropdown-item>
          </b-dropdown>
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
            <span
              class="text-muted"
            >mostrar {{ dataMeta.from }} para {{ dataMeta.to }} de
              {{ dataMeta.of }} entradas</span>
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
              :total-rows="totalOrders"
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
    </b-card>
    <b-modal
      ref="OrderModal"
      size="lg"
      hide-footer
      title="Criar Ordem de Abastecimento"
    >
      <b-form
        @submit.prevent="onSubmit"
      >
        <b-row>
          <b-col cols="12" md="12">
            <b-form-group label="selecionar bombas a emitir ordem">
              <v-select
                v-model="form.bomba_id"
                label="nome_bombas"
                :options="bombas"
                :reduce="bombas => bombas.id"
              />
            </b-form-group>
          </b-col>
          <b-col cols="6" md="6" xl="6">
            <b-button
              variant="outline-danger"
              @click="hideModal"
            >Fechar</b-button>
          </b-col>
          <b-col cols="6" md="6" xl="6">
            <b-button type="submit" variant="outline-primary">
              criar ordem
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </section>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BFormGroup,
  BButton,
  BTable,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BCardBody,
  BCardHeader,
  BForm,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import Form from 'vform'
import useOrdersList from './orderList.js'
import store from '@/store'
import storeOrderModule from './storeOrderModule'

export default {
  components: {
    BCard,
    BCardHeader,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BFormGroup,
    BCardBody,
    BForm,
    flatPickr,
    vSelect,
  },
  created() {
    this.$http.get('/api/bombas').then(res => {
      this.bombas = res.data
    })
  },
  setup() {
    const ORDER_SUPPLY_STORE_MODULE_NAME = 'Supply'
    // Register module
    if (!store.hasModule(ORDER_SUPPLY_STORE_MODULE_NAME)) { store.registerModule(ORDER_SUPPLY_STORE_MODULE_NAME, storeOrderModule) }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ORDER_SUPPLY_STORE_MODULE_NAME)) { store.unregisterModule(ORDER_SUPPLY_STORE_MODULE_NAME) }
    })
    const statusOptions = [
      {
        label: 'aberta',
        value: 'aberta',
      },
      {
        label: 'pendente',
        value: 'pendente',
      },
      {
        label: 'aprovado',
        value: 'aprovado',
      },
      {
        label: 'cancelada',
        value: 'cancelada',
      },
    ]

    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }
    function showModal() {
      this.$refs.OrderModal.show()
    }
    function hideModal() {
      this.$refs.OrderModal.hide()
    }
    function toggleModal() {
      this.$refs.OrderModal.toggle('#toggle-btn')
    }

    function onSubmit() {
      this.form.post('./../api/Ordems').then(res => {
        //   console.log(res.data)
        this.$router.push({ name: 'New-supply-order', params: { refs: res.data } })
      }).catch(err => {
        if (err) {
          this.$swal.fire({
            icon: 'error',
            title: err.data.erro,
          })
        }
      })
    }
    const {
      fetchOrders,
      tableColumns,
      perPage,
      currentPage,
      totalOrders,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refOrdersListTable,
      resolveOrdersStatusVariant,
      refetchData,
      rangeDate,
      bombasFilter,
      statusFilter,
    } = useOrdersList()

    return {
      fetchOrders,
      tableColumns,
      perPage,
      currentPage,
      totalOrders,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refOrdersListTable,

      resolveOrdersStatusVariant,
      refetchData,

      // Extra Filters
      bombas: [],
      rangeDate,
      bombasFilter,
      statusOptions,
      statusFilter,
      dateTime,
      showModal,
      hideModal,
      toggleModal,
      onSubmit,
      form: new Form({
        bombas_id: null,
      }),
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
</style>

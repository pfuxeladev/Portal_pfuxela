<template>
  <b-card no-body class="mb-0">
    <div class="m-2">
      <b-row>
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
        <b-col cols="12" md="6">
          <div class="d-flex align-items-center justify-content-end">
            <b-form-input
              v-model="searchQuery"
              class="d-inline-block mr-1"
              placeholder="Search..."
            />
            <b-link class="btn btn-outline-primary" @click="showModal">
              <span class="text-nowrap">Ad.ocorrencia</span>
            </b-link>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-table
      ref="refOcorrenciaListTable"
      class="position-relative"
      :items="fetchOcorrencias"
      responsive
      :fields="tableColumns"
      primary-key="id"
      :sort-by.sync="sortBy"
      show-empty
      empty-text="No matching records found"
      :sort-desc.sync="isSortDirDesc"
    />
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
            :total-rows="totalOcorrencias"
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
    <b-modal ref="my-modal" size="lg" hide-footer title="Nova ocorrencia">
      <b-form @submit.prevent="editMode ? onSubmit : onUpdate" @reset="onReset">
        <b-row>
            <input type="hidden" v-model="form.id">
          <b-col cols="12" md="6" lg="6">
            <b-form-group label="viatura:">
              <v-select v-model="form.viatura_id"></v-select>
              <!-- <small
                v-if="form.errors.has('viatura_id')"
                class="alert text-danger"
                v-html="form.errors.get('viatura_id')"
              ></small> -->
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" lg="6">
            <b-form-group label="motorista:">
              <v-select v-model="form.motorista_id"></v-select>
              <!-- <small
                v-if="form.errors.has('motorista_id')"
                class="alert text-danger"
                v-html="form.errors.get('motorista_id')"
              ></small> -->
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" lg="6">
            <b-form-group label="data da ocorrencia:">
              <date-picker
                v-model="form.data_ocorrencia"
                value-type="format"
                format="YYYY-MM-DD"
                style="width: 100%"
              ></date-picker>
              <!-- <small
                v-if="form.errors.has('data_ocorrencia')"
                class="alert text-danger"
                v-html="form.errors.get('data_ocorrencia')"
              ></small> -->
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" lg="6">
            <b-form-group label="hora:">
              <cleave
                id="time"
                v-model="form.hora_da_ocorrencia"
                class="form-control"
                :raw="false"
                :options="options.time"
                placeholder="hh:mm:ss"
              />
              <!-- <small
                v-if="form.errors.has('hora_da_ocorrencia')"
                class="alert text-danger"
                v-html="form.errors.get('hora_da_ocorrencia')"
              ></small> -->
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" lg="6">
            <b-form-group label="periodo da ocorrencia:">
              <v-select
                v-model="form.periodo"
                :options="['Diurno', 'Noturno']"
              />
              <!-- <small
                v-if="form.errors.has('periodo')"
                class="alert text-danger"
                v-html="form.errors.get('periodo')"
              ></small> -->
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" lg="6">
            <b-form-group label="kilmetragem da viatura:">
              <b-form-input
                type="number"
                v-model="form.kilomatragem"
              ></b-form-input>
              <!-- <small
                v-if="form.errors.has('kilomatragem')"
                class="alert text-danger"
                v-html="form.errors.get('kilomatragem')"
              ></small> -->
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6" lg="6">
            <b-form-group label="tipo de ocorrencia:">
              <v-select
                v-model="form.tipo_ocorrencia"
                :options="['Informativa', 'Necessita reparacao']"
              ></v-select>
              <!-- <small
                v-if="form.errors.has('tipo_ocorrencia')"
                class="alert text-danger"
                v-html="form.errors.get('tipo_ocorrencia')"
              ></small> -->
            </b-form-group>
          </b-col>
          <b-col cols="12" md="12" lg="12">
            <b-form-group label="descricao:">
              <b-form-textarea
                id="textarea"
                v-model="form.descricao_ocorrencia"
                placeholder="Faça o Relato dos factos"
              ></b-form-textarea>
              <!-- <small
                v-if="form.errors.has('tipo_ocorrencia')"
                class="alert text-danger"
                v-html="form.errors.get('tipo_ocorrencia')"
              ></small> -->
            </b-form-group>
          </b-col>

          <b-col cols="12" md="6" lg="6">
            <b-button type="submit" variant="outline-success"
              >emitir ocorr&ecirc;ncia</b-button
            >
          </b-col>
        </b-row>
      </b-form>
      <b-row>
        <b-col cols="12" md="12" lg="12">
          <b-button
            variant="outline-warning"
            class="float-right"
            @click="toggleModal"
          >
            fechar
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </b-card>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BForm,
  BFormGroup,
  BFormTextarea,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ref, onUnmounted } from '@vue/composition-api'
import Form from 'vform'
import Cleave from 'vue-cleave-component'
import DatePicker from 'vue2-datepicker'
import storeOcorrenciaModule from './storeOcorrenciaModules'
import OcorrenciasList from './index'
import 'vue2-datepicker/index.css'

import store from '@/store'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    vSelect,
    BForm,
    BFormGroup,
    BFormTextarea,
    Cleave,
    DatePicker,
  },
  setup(props, { emit }) {
    const PIQUECT_STORE_MODULE_NAME = 'Picket'
    const editMode = false
    // Register module
    if (!store.hasModule(PIQUECT_STORE_MODULE_NAME)) {
      store.registerModule(PIQUECT_STORE_MODULE_NAME, storeOcorrenciaModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PIQUECT_STORE_MODULE_NAME)) {
        store.unregisterModule(PIQUECT_STORE_MODULE_NAME)
      }
    })

    const statusOptions = [
      {
        label: 'Resolvido',
        value: 'Resolvido',
      },
      {
        label: 'Não Resolvida',
        value: 'Não Resolvida',
      },
    ]

    function showModal() {
      this.editMode = false
      this.$refs['my-modal'].show()
    }

    function toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn')
    }

    function onReset(e) {
      e.preventDefault()
      // Reset our form values
      this.form.reset()
    }
    const form = ref(
      JSON.parse(
        JSON.stringify(
          new Form({
            id: '',
            viatura_id: '',
            motorista_id: '',
            descricao_ocorrencia: '',
            hora_da_ocorrencia: '',
            kilomatragem: '',
            tipo_ocorrencia: '',
            periodo: '',
            data_ocorrencia: '',
          }),
        ),
      ),
    )

    function onSubmit() {
      this.form
        .post('/api/Ocorrencia')
        .then(response => {
          this.$swal.fire({
            icon: 'success',
            title: response.data.success,
          })
          emit('afterAction')
          this.form.clear()
          this.form.reset()
          this.$Progress.finish()
        })
        .catch(err => {
          if (err) {
            this.$swal.fire({
              icon: 'error',
              title: 'Erro ao tentar adicionar!',
            })
          }
        })
    }
    function onUpdate() {
      this.form
        .put(`/api/Ocorrencia/${this.form.id}`)
        .then(response => {
          this.$swal.fire({
            icon: 'success',
            title: response.data.success,
          })
          emit('afterAction')
          this.form.clear()
          this.form.reset()
          this.$Progress.finish()
        })
        .catch(err => {
          if (err) {
            this.$swal.fire({
              icon: 'error',
              title: 'Erro ao tentar adicionar!',
            })
          }

          this.$Progress.fail()
        })
    }
    const options = {
      time: {
        time: true,
        timePattern: ['h', 'm', 's'],
      },
    }
    const {
      fetchOcorrencias,
      tableColumns,
      perPage,
      currentPage,
      totalOcorrencias,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refOcorrenciaListTable,
      refetchData,

      statusFilter,
    } = OcorrenciasList()

    return {
      // Sidebar

      fetchOcorrencias,
      tableColumns,
      perPage,
      currentPage,
      totalOcorrencias,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refOcorrenciaListTable,
      refetchData,
      showModal,
      toggleModal,
      onReset,
      form,
      onSubmit,
      onUpdate,
      statusOptions,
      options,
      // Extra Filters
      statusFilter,
    }
  },
}
</script>

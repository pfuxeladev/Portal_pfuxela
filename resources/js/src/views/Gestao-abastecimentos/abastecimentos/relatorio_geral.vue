<template>
    <div id="relatorio-geral">
        <section>
    <b-card no-body>
        <b-card-header class="pb-50">
            <h3>Relat&oacute;rio Geral dos abastecimento</h3>
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
                          <b-form-input v-model="searchQuery" class="d-inline-block mr-1" placeholder="pesquisar..." />
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
                          <v-select></v-select>
                          </b-form-group>
                </b-col>
            </b-row>
        </div>
         <b-row>
            <b-col cols="12" xl="12" md="12" class="table-responsive">
                </b-col>
                </b-row>
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
} from "bootstrap-vue";
import vSelect from "vue-select";
import Form from "vform";
import {
  ref,
  onUnmounted,
} from "@vue/composition-api";
import store from "@/store";
import moment from "moment";
import flatPickr from 'vue-flatpickr-component'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'General report',
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
    const SUPPLY_STORE_MODULE_NAME = "Supply";

    const dateOptions = [
      { label: 'Hoje', value: 'Hoje' },
      { label: 'Semanal', value: 'Semanal' },
      { label: 'Mes', value: 'Mensal' },
      { label: 'Ano', value: 'Anual' },
    ]
    const bomba = ref(null)
    const viatura = ref(null)
  },


}
</script>


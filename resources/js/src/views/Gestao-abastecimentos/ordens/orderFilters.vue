<template>
<b-card no-body>
    <b-card-header class="pb-50">
        <h5>
            Filters
        </h5>
    </b-card-header>
    <b-card-body>
        <b-row>
            <b-col cols="12" md="4" class="mb-md-0 mb-2">
                <label>Estado</label>
                <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :value="statusFilter" :options="statusOptions" class="w-100" :reduce="val => val.value" @input="(val) => $emit('update:roleFilter', val)" />
            </b-col>
            <b-col cols="12" md="4" class="mb-md-0 mb-2">
                <b-form-group>
                    <h5>Filtrar por intervalos</h5>
                    <flat-pickr v-model="rangeDate" class="form-control" :config="{ mode: 'range'}" />
                </b-form-group>
            </b-col>
        </b-row>
    </b-card-body>
</b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'

export default {
    data() {
        return {
            rangeDate: null
        }
    },
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    vSelect,
    flatPickr,
  },
  props: {
    statusFilter: {
      type: [String, null],
      default: null,
    },
    statusOptions: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>

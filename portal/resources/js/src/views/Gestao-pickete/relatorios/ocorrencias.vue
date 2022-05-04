<template>
  <b-card
    no-body
    class="mb-0"
  >
    <div class="m-2">
      <b-tabs
        content-class="mt-3"
        justified
      >
        <b-tab
          title="Saidas de viaturas"
          active
        >
          <b-row>
            <b-col>
              <b-link class="btn btn-outline-primary">
                <span class="text-nowrap">Nova autoriza&ccedil;&atilde;o de saida</span>
              </b-link>
            </b-col>
             <b-col>
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="Entradas de viaturas">
          <p>I'm the second tab</p>
        </b-tab>
      </b-tabs>
    </div>
  </b-card>
</template>

<script>
import {
  BCard, BRow, BCol, BTabs, BTab,
  BForm,
  BFormGroup,
  BFormInput,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ref, onUnmounted } from '@vue/composition-api'
import Cleave from 'vue-cleave-component'
import DatePicker from 'vue2-datepicker'
import store from '@/store'

export default {
  components: {
    BCard,
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

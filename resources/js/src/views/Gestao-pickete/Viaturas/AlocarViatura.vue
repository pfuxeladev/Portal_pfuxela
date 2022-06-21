<template>
    <section class="invoice-add-wrapper mt-3">
         <b-row class="invoice-add">
      <b-col cols="12" xl="12" md="12">
        <b-form>
            <d-card>

            </d-card>
        </b-form>
        </b-col>
        </b-row>
    </section>
</template>

<script>
import { BCard, BCardBody, BRow, BCol, BButton, BFormInput, BForm, BFormGroup } from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import store from '@/store'
import router from '@/router'
import StoreViaturaModule from './StoreViaturaModule'

export default {
    name: 'alocar-viatura',
    components: {
BCard, BCardBody, BRow, BCol, BButton, BFormInput, BForm, BFormGroup
    },
    setup(props) {
        
    }
}
</script>


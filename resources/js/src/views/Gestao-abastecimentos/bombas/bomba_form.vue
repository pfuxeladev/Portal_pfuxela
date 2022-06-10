<template>
  <div class="section">

  </div>
</template>

<script>
import { BCard, BCardBody, BModal, BRow, BCol, BButton, } from 'bootstrap-vue'
import vSelect from 'vue-select'
import Form from 'vform';
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import store from '@/store'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { useToast } from 'vue-toastification/composition'

export default {
  components: {
    BCard, BCardBody, BModal, BRow, BCol, BButton, vSelect,
  },
  setup(props) {

  }

}
</script>

<style>

</style>

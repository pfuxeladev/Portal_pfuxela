<template>
  <div class="section">
    <b-row>
      <b-col cols="12" xl="12" md="12">
        <b-card no-body>
            <b-form>

            </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard,
  BCardBody,
  BModal,
  BRow,
  BCol,
  BButton,
  BForm,
  BFormGroup,
  BFormInput,
  BFormFile,
  BFormDatepicker,
} from "bootstrap-vue";
import vSelect from "vue-select";
import Form from "vform";
import { ref, onUnmounted } from "@vue/composition-api";
import moment from "moment";
import store from "@/store";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { useToast } from "vue-toastification/composition";

export default {
  components: {
    BCard,
    BCardBody,
    BModal,
    BRow,
    BCol,
    BButton,
    vSelect,
    BForm,
    BFormGroup,
    BFormInput,
    BFormFile,
    BFormDatepicker,
  },
  setup(props) {
     const toast = useToast();
     const BOMBAS_APP_STORE_MODULE_NAME = "Supply";
      // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(BOMBAS_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(BOMBAS_APP_STORE_MODULE_NAME);
      }
    })

    return {
        form: new Form({
            qtd_abastecer: 0,
            preco_combustivel: 0,
            
        })
    }
  },
};
</script>

<style>
</style>

<template>
  <section class="invoice-add-wrapper mt-3">
    <b-row class="invoice-add">
      <b-col cols="12">
        <b-card no-body>
          <b-card-header style="width:100%"></b-card-header>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BCardFooter,
  BBadge,
  BLink,
  BRow,
  BCol,
  BListGroup,
  BListGroupItem,
  BImg,
  BFormGroup,
  BModal,
  // eslint-disable-next-line import/newline-after-import
} from "bootstrap-vue";
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { ref, onUnmounted } from "@vue/composition-api";
import moment from "moment";
import Form from "vform";
import store from "@/store";
import router from "@/router"

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BCardFooter,
    BBadge,
    BLink,
    BRow,
    BCol,
    BListGroup,
    BListGroupItem,
    BImg,
    BFormGroup,
    BModal,
  },
  setup() {
    const bomba = ref(null);

    const toast = useToast();
  },
};
</script>

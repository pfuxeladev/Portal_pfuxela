<template>
  <section>
    <b-card no-body>
      <b-card-header class="pb-50">
        <h3>abastecimentos fora do projecto</h3>
      </b-card-header>
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->

          <!-- Search -->
          <b-col cols="6" md="6">
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="pesquisar..."
              />
            </div>
          </b-col>
        </b-row>
      </div>
      <b-row> </b-row>
    </b-card>
  </section>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BFormInput,
  BFormGroup,
  BForm,
  BRow,
  BCol,
} from 'bootstrap-vue';
import {
  ref,
  onUnmounted
} from '@vue/composition-api';
import moment from 'moment';
import vSelect from "vue-select";
import Form from 'vform'
import { useToast } from 'vue-toastification/composition';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';
import storeAbastecimentos from "./storeAbastecimentos";
import store from '@/store';

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    vSelect,
  },
  data() {
    return {
      abastecimentos: [],
      bombas: {},
      searchQuery: null,
      moment,
    }
  },
  created() {
    this.moment = moment;
  },
  setup() {
    const SUPPLY_STORE_MODULE_NAME = 'Supply'

    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.registerModule(SUPPLY_STORE_MODULE_NAME, storeAbastecimentos);
     const toast = useToast();
    const form = new Form({
      viatura_id: null,
      bombas_id: null,
      qtd: 0,
      horaPrevistaSaida: '',
      horaPrevistaChegada: '',
      destino: '',
      justificacao: '',
      motorista_id: null,
    })
    const OrderForm = ref(
      JSON.parse(
        JSON.stringify(form),
      ),
    )
    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.unregisterModule(SUPPLY_STORE_MODULE_NAME);
    })

    function submitSupply () {
        store.dispatch('Supply/addAbastecimentoRecorrente')
        .then((response) => {
          this.$emit('refetch-data')
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.message,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          })
          this.toggleModal()
        })
        .catch(err => {
          console.log(err)
          if (err) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.error,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          }
        })
    }
    return {
      OrderForm,
      submitSupply,
    }
  },
}
</script>

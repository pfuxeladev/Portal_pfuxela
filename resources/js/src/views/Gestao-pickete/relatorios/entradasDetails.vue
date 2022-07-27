<template>
  <section>
    <b-card no-body>
        <b-row>
            <b-col cols="3">
                <b-link :to="{ name: 'Vehicle-movements' }" class="btn btn-md btn-outline-primary">voltar</b-link>
            </b-col>
        </b-row>

        <b-card-header>
            <h3>
                Matricula: {{entrada.check_list_out.viatura.matricula}}
            </h3>
        </b-card-header>
      <div class="mb-2">
         <b-row>
            <b-col cols="6">
                <b-list-group>

                </b-list-group>
                </b-col>
                <b-col cols="6">
                </b-col>
          </b-row>
        <b-card-body>
            <h3>Estado da viatura</h3>
             <table class="table table-striped">
            <thead>
                <tr>
                    <th colspan="8" class="bg-dark text-center text-uppercase text-white">
                        Conforto e Segurança
                    </th>
                </tr>
                <tr>
                    <th>Cinto de segurança</th>
                    <th>AC</th>
                    <th>Kit de reboque</th>
                    <th>Sistema ABS</th>
                    <th>Retrovisores</th>
                    <th>Kit de primeiros Socorros</th>
                    <th>Extintor</th>
                    <th>Tri&acirc;ngulo</th>
                </tr>
            </thead>
          </table>
        </b-card-body>
      </div>
    </b-card>
  </section>
</template>

<script>
import {
  BCardBody,
  BCard,
  BRow,
  BCol,
  BLink,
  BBadge,
  BCardHeader,
  BListGroup,
  BListGroupItem,
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import useOcorrenciaList from './relatorioOcorrencia'
import storeRelatorioModule from './storaRelatorioModule'
import router from '@/router'
import store from '@/store'

export default {
  data() {
    return {
      entrada: {},
    }
  },
  components: {
    BCardBody,
    BCard,
    BRow,
    BCol,
    BLink,
    BBadge,
    BCardHeader,
    BListGroup,
    BListGroupItem,
  },
  setup(props) {
    const entrada = ref(null);
    const ENTRADAS_STORE_MODULE_NAME = 'Picket';
    const toast = useToast()
    // Register module
    if (!store.hasModule(ENTRADAS_STORE_MODULE_NAME)) {
      store.registerModule(ENTRADAS_STORE_MODULE_NAME, storeRelatorioModule);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ENTRADAS_STORE_MODULE_NAME)) {
        store.unregisterModule(ENTRADAS_STORE_MODULE_NAME);
      }
    });
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm');
    }

    return {
      dateTime,
      entrada,
    };
  },
  created() {
    store
      .dispatch('Picket/fetchEntrada', { id: router.currentRoute.params.id })
      .then(response => {
        this.entrada = response.data
        console.log(response.data)
      })
      .catch(() => {
        // toast({
        //   component: ToastificationContent,
        //   props: {
        //     title: 'Erro! nenhum dado',
        //     icon: 'AlertTriangleIcon',
        //     variant: 'danger',
        //   },
        // })
      })
  },
}
</script>

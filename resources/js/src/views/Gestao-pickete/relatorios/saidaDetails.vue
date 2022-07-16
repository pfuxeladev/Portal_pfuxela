<template>
  <section>
    <b-card no-body v-for="(ver, i) in saidas" :key="i">
      <b-row>
        <b-col cols="3">
          <b-link
            :to="{ name: 'Vehicle-movements' }"
            class="btn btn-md btn-outline-primary"
            >voltar</b-link
          >
        </b-col>
      </b-row>

      <b-card-header>
        <h3>Matricula: {{ ver.checklistOut.viatura.matricula }}</h3>
      </b-card-header>
      <div class="mb-2">
        <b-row>
          <b-col cols="6">
            <b-list-group>
              <b-list-group-item>
                Carta de condu&ccedil;&atilde;o do motorista:
                {{ ver.checklistOut.motorista.carta_conducao }}
              </b-list-group-item>
              <b-list-group-item>
                Objectivo: {{ ver.checklistOut.estado }}
              </b-list-group-item>
              <b-list-group-item>
                Hora de partida: {{ ver.checklistOut.hr_inicio }}hr
              </b-list-group-item>
              <b-list-group-item>
                Kilometragem actual: {{ ver.checklistOut.km_inicio }} Km
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
        <b-card-body>
          <h3>Estado da viatura</h3>
          <b-row>
            <b-col cols="3" v-for="(chk, i) in ver.checklists" :key="chk.id">
              <table class="mb-2">
                <tr>
                  <td>{{ 1 + i }}</td>
                  <td>
                    <b>{{ chk.checklist_name }}</b>
                  </td>
                  <td class="text-right">
                    <span v-if="chk.opcao === 'No'">
                      <b-badge variant="danger">{{ chk.opcao }}</b-badge></span
                    >
                    <span v-else-if="chk.opcao === 'Parci'">
                      <b-badge variant="warning">Parcial</b-badge>
                    </span>
                    <span v-else>
                      <b-badge variant="success">{{ chk.opcao }}</b-badge></span
                    >
                  </td>
                </tr>
              </table>
            </b-col>
          </b-row>
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
} from "bootstrap-vue";
import { ref, onUnmounted } from "@vue/composition-api";
import moment from "moment";
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import useOcorrenciaList from "./relatorioOcorrencia";
import storeRelatorioModule from "./storaRelatorioModule";
import router from "@/router";
import store from "@/store";

export default {
  data() {
    return {
      saidas: {},
    };
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
    const saidas = ref(null);
    const SAIDAS_STORE_MODULE_NAME = "Picket";
    const toast = useToast();
    // Register module
    if (!store.hasModule(SAIDAS_STORE_MODULE_NAME)) {
      store.registerModule(SAIDAS_STORE_MODULE_NAME, storeRelatorioModule);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SAIDAS_STORE_MODULE_NAME)) {
        store.unregisterModule(SAIDAS_STORE_MODULE_NAME);
      }
    });

    function dateTime(value) {
      return moment(value).format("DD/MM/YYYY hh:mm");
    }

    return {
      dateTime,
      saidas,
    };
  },
  created() {
    store
      .dispatch("Picket/fetchSaida", {
        id: router.currentRoute.params.id,
      })
      .then((response) => {
        this.saidas = response.data;
        console.log(response.data);
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
      });
  },
};
</script>

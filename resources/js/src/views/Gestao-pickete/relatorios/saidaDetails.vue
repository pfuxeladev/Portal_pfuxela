<template>
  <section>
     <b-row>
        <b-col cols="3">
          <b-link
            :to="{ name: 'Vehicle-movements' }"
            class="btn btn-md btn-outline-primary"
            >voltar</b-link
          >
        </b-col>
      </b-row>
    <b-card id="checklists" no-body v-for="(ver, i) in saidas" :key="i">
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
          <hr>
          <b-row>
            <b-col cols="3" class="mb-2" v-for="(chk, i) in ver.categoria" :key="'a'+i">
                 <h3 class="card-title">{{chk.nome_categoria}}</h3>
                <b-row v-for="(checklst, k) in ver.checklists" :key="k">
                    <span class="ml-2" v-if="checklst.categoria === chk.id">
                    <table class="table table-responsive">
                        <tr>

                            <td>{{checklst.checklist_name}}</td>
                            <td class="text-right"> <span v-if="checklst.opcao === 'Ok'"><feather-icon icon="CheckIcon" style="color:green"></feather-icon></span>
                        <span v-else-if="checklst.opcao === 'No'"><feather-icon icon="XIcon" style="font-size:24px;color:red"></feather-icon></span>
                        <b-badge v-else-if="checklst.opcao === 'Parcial'" variant="warning"><feather-icon icon="AlertTriangleIcon" style="font-size:48px;color:orange"></feather-icon></b-badge></td>
                        </tr>
                    </table>
                    </span>
                </b-row>
            </b-col>
          </b-row>
        </b-card-body>
      </div>
    </b-card>
    <b-card>
        <b-card-footer>
            <b-button variant="outline-success" @click="imprimirCheck">Imprimir <i class="fas fa-print"></i></b-button>
        </b-card-footer>
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
  BCardFooter,
  BButton,
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
    BCardFooter,
    BButton,
  },
  setup(props) {
    const saidas = ref(null);
    const SAIDAS_STORE_MODULE_NAME = "Picket";
    const toast = useToast();
    // Register module
    if (!store.hasModule(SAIDAS_STORE_MODULE_NAME)) {
      store.registerModule(SAIDAS_STORE_MODULE_NAME, storeRelatorioModule);
    }

    function imprimirCheck() {
      const prtHtml = document.getElementById('checklists').innerHTML

      // Get all stylesheets HTML
      let stylesHtml = ''
      for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
        stylesHtml += node.outerHTML
      }

      // Open the print window
      const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');

      WinPrint.document.write(`<!DOCTYPE html>
        <html>
        <head>
            ${stylesHtml}
        </head>
        <body style="font-size:12pt">
            ${prtHtml}
        </body>
        </html>`)

      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close()
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
      imprimirCheck,
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

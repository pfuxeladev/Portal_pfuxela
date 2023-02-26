<template>
  <section>
    <b-card no-body v-for="(ent, index) in entrada" :key="index">
        <b-row>
            <b-col cols="3">
                <b-link :to="{ name: 'Vehicle-movements' }" class="btn btn-md btn-outline-primary">voltar</b-link>
            </b-col>
        </b-row>

        <b-card-header>
            <h3>
                Matricula: {{ent.checklistIn.check_list_out.viatura.matricula}}
            </h3>
        </b-card-header>
      <div class="mb-2">
         <b-row>
            <b-col cols="6">
                <b-list-group>
                    <b-list-group-item>
                        Kilometragem: {{ent.checklistIn.km_fim}}
                    </b-list-group-item>
                    <b-list-group-item>
                        Hora de partida: {{ent.checklistIn.check_list_out.hr_inicio}}
                    </b-list-group-item>
                    <b-list-group-item>
                        Hora de entrada: {{ent.checklistIn.hr_fim}}
                    </b-list-group-item>
                </b-list-group>
                </b-col>
          </b-row>
      </div>
       <b-card-body>
          <h3>Estado da viatura</h3>
          <hr>
          <b-row v-if="ent.checklists !== ''">

            <b-col cols="3" class="mb-2" v-for="(chk, i) in ent.categoria" :key="'a'+i">
                 <h3 class="card-title">{{chk.nome_categoria}}</h3>
                <b-row v-for="(checklst, k) in ent.checklists" :key="k">
                    <span class="ml-2" v-if="checklst.categoria === chk.id">
                    <table class="table table-responsive">
                        <tr>
                            <td>{{checklst.checklist_name}}</td>
                            <td class="text-right"><span v-if="checklst.opcao_entrada === 'Ok'"><feather-icon icon="CheckIcon" style="color:green"></feather-icon></span>
                        <span v-else-if="checklst.opcao_entrada === 'No'"><feather-icon icon="XIcon" style="color:red"></feather-icon></span>
                        <b-badge v-else-if="checklst.opcao_entrada === 'Parcial'" variant="warning"><feather-icon icon="AlertTriangleIcon" style=";color:orange"></feather-icon></b-badge></td>
                        </tr>
                    </table>
                    </span>
                </b-row>
            </b-col>
          </b-row>
          <b-row v-else>
            <b-col cols="3">
                <b-button variant="primary">Verificar o estado da viatura</b-button>
            </b-col>
          </b-row>
        </b-card-body>
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

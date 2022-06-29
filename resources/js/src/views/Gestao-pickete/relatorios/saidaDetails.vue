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
                Matricula: {{saidas.viatura.matricula}}
            </h3>
        </b-card-header>
      <div class="mb-2">
         <b-row>
            <b-col cols="6">
                <b-list-group>
                    <b-list-group-item>
                        Carta de condu&ccedil;&atilde;o do motorista: {{saidas.motorista.carta_conducao}}
                    </b-list-group-item>
                     <b-list-group-item>
                        Livrete: <span v-if="saidas.livrete_saida==1">
                            <b-badge variant="primary">Ok</b-badge>
                        </span>
                         <span v-else>Falta</span>
                    </b-list-group-item>
                     <b-list-group-item>
                        Colete do motorista: <span v-if="saidas.colete_saida==1">
                            <b-badge variant="primary">Ok</b-badge>
                        </span>
                         <span v-else> <b-badge variant="danger">Falta</b-badge></span>
                    </b-list-group-item>
                     <b-list-group-item>
                        Lista de presen&ccedil;a: <span v-if="saidas.lista_presenca==1">
                            <b-badge variant="primary">Ok</b-badge>
                        </span>
                         <span v-else>
                            <b-badge variant="danger">Falta</b-badge>
                            </span>
                    </b-list-group-item>
                </b-list-group>
                </b-col>
                <b-col cols="6">
                <b-list-group>
                    <b-list-group-item>
                        Seguros: <span v-if="saidas.seguros_saida==1">
                            <b-badge variant="primary">Ok</b-badge>
                        </span>
                         <span v-else>
                            <b-badge variant="danger">Falta</b-badge>
                            </span>
                    </b-list-group-item>
                     <b-list-group-item>
                        Document de Inspe&ccedil;&atilde;o: <span v-if="saidas.inspencao_saida==1">
                            <b-badge variant="primary">Ok</b-badge>
                        </span>
                         <span v-else>
                            <b-badge variant="danger">Falta</b-badge>
                            </span>
                    </b-list-group-item>
                     <b-list-group-item>
                        Taxa de radio difus&atilde;o: <span v-if="saidas.taxaradio_saida==1">
                            <b-badge variant="primary">Ok</b-badge>
                        </span>
                         <span v-else>
                            <b-badge variant="danger">Falta</b-badge>
                            </span>
                    </b-list-group-item>
                     <b-list-group-item>
                        Licen&ccedil;a da viatura: <span v-if="saidas.licenca_saida==1">
                            <b-badge variant="primary">Ok</b-badge>
                        </span>
                         <span v-else>
                            <b-badge variant="danger">Falta</b-badge>
                            </span>
                    </b-list-group-item>
                </b-list-group>
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
            <tbody>
                <tr>
                    <td>
                        <span v-if="saidas.CintoSeguracaState == 1">Ok</span>
                        <span v-if="saidas.CintoSeguracaState == 0">No</span>
                    </td>
                    <td>
                        {{saidas.ACState}}
                    </td>
                    <td>
                        <span v-if="saidas.kit_reboque_saida == 1">Ok</span>
                        <span v-if="saidas.kit_reboque_saida == 0">No</span>
                    </td>
                    <td>
                        {{saidas.SistemaABS_State}}
                    </td>
                    <td>
                        Ok
                    </td>
                    <td>
                       <span v-if="saidas.kit_1_socorros_saida == 1">Ok</span>
                       <span v-if="saidas.kit_1_socorros_saida == 0">Falta</span>
                    </td>
                    <td>
                        <span v-if="saidas.extintor_saida == 1">Ok</span>
                        <span v-else>Falta</span>
                    </td>
                    <td>
                       <span v-if="saidas.triangulo_saida == 1">Ok</span>
                       <span v-else>Falta</span>
                    </td>
                </tr>
                <tr>
                    <th colspan="8" class="bg-dark text-center text-uppercase text-white">
                        Estado mec&acirc;nico
                    </th>
                </tr>
                <tr class="text-uppercase" style="font-size: 0.857rem;">
                    <th>Nível Vaso Expansor</th>
                    <th>Nível Liquido Vidros</th>
                    <th>Nível Óleo de Motor</th>
                    <th>Nível &Oacute;leo de Direção</th>
                    <th>Nível Óleo Travões</th>
                    <th>Macaco</th>
                    <th>Pneu sobressalente</th>
                    <th>Chave de roda</th>
                </tr>
                <tr>
                    <td>{{saidas.vasoEspansorState}}</td>
                    <td>{{saidas.LiquidoVidroState}}</td>
                    <td> {{saidas.OleoMotorState}} </td>
                    <td>{{saidas.OleoDirecaoState}}</td>
                    <td>{{saidas.OleoTravoesState}}</td>
                    <td>
                        <span v-if="saidas.macaco_saida == 1">Ok</span>
                        <span v-else>Falta</span>
                    </td>
                    <td>
                         <span v-if="saidas.pneu_sobr_saida == 1">Ok</span>
                        <span v-else>Falta</span>
                    </td>
                    <td>
                         <span v-if="saidas.chave_roda_saida == 1">Ok</span>
                        <span v-else>Falta</span>
                    </td>
                </tr>
            </tbody>
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
      saidas: {},
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
    const saidas = ref(null);
    const SAIDAS_STORE_MODULE_NAME = 'Picket';
    const toast = useToast()
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
      return moment(value).format('DD/MM/YYYY hh:mm');
    }

    return {
      dateTime,
      saidas,
    };
  },
  created() {
    store
      .dispatch('Picket/fetchSaida', { id: router.currentRoute.params.id })
      .then(response => {
        this.saidas = response.data
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

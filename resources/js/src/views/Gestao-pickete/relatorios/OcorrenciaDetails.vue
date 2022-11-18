<template>
  <b-card no-body class="mb-0">
    <div class="m-2">
      <b-card-header>
        <h2 class="card-title">Codigo da ocorr&ecirc;ncia: {{ocorrencia.codigo}}</h2> Registado aos {{dateTime(ocorrencia.created_at)}}
      </b-card-header>
    </div>
    <b-card-body>
      <div class="m-2">
        <b-row>
          <b-col cols="6">
            <h4>Dados da viatura</h4>
            <hr>
            <ul class="list-group list-group-flush">
              <a class="list-group-item list-group-item-action active" href="#">matricula: {{ocorrencia.viatura.matricula}}</a>
              <a class="list-group-item list-group-item-action ">Capacidade do tanque (ltr): {{ocorrencia.viatura.capacidade_tanque}}</a>
              <a class="list-group-item list-group-item-action ">Qtd disponivel (ltr): {{ocorrencia.viatura.qtd_disponivel}}</a>
              <a class="list-group-item list-group-item-action ">Consumo medio (ltr/km): {{ocorrencia.viatura.capacidade_media}}</a>
              <a class="list-group-item list-group-item-action ">Quilometragem actual (km): {{ocorrencia.viatura.kilometragem}}</a><a class="list-group-item list-group-item-action ">Nr de Motor: {{ocorrencia.viatura.nr_motor}}</a>
              <a class="list-group-item list-group-item-action ">Nr de Chassis: {{ocorrencia.viatura.nr_chassi}}</a>
            </ul>
          </b-col>
          <b-col cols="6">
            <h4>Dados do motorista</h4>
            <hr>
            <ul class="list-group list-group-flush">
              <a class="list-group-item list-group-item-action active" href="#">Nome do motorista: {{ocorrencia.motorista.person.nome_completo}}</a>
              <a class="list-group-item list-group-item-action ">Carta de Conducao: {{ocorrencia.motorista.carta_conducao}}</a>
            </ul>
          </b-col>
          <b-col cols="12">
            <hr>
            <table class="table table-bordless">
                <thead>
                    <tr>
                        <th>Tipo de ocorrencia</th>
                        <th>Turno</th>
                        <th>Descricao da ocorrencia</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ocorrencia.tipo_ocorrencia}}</td>
                        <td>{{ocorrencia.periodo}}</td>
                        <td>{{ocorrencia.descricao_ocorrencia}}</td>
                        <td>{{ocorrencia.hora_da_ocorrencia}}</td>
                    </tr>
                </tbody>
            </table>
            <br>

            <i>Registado por: {{ocorrencia.created_by.name}}</i>
          </b-col>
        </b-row>
      </div>
    </b-card-body>
    <div class="m-2">
        <b-row>
            <b-col cols="3">
                <b-button variant="outline-primary">
                    <i class="fas fa-print"></i> imprimir
                </b-button>
            </b-col>
            <b-col cols="3" v-if="ocorrencia.tipo_ocorrencia === 'Necessita reparacao'">
                <b-button variant="primary" @click="AbrirFicha()">Criar Ficha de Obra</b-button>
            </b-col>
        </b-row>
    </div>
    <b-modal size="xl" ref="FichObraRef"  hide-footer title="Nova Ficha de Obra">
        <Ficha-obra-form></Ficha-obra-form>
    </b-modal>
  </b-card>
</template>
<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BLink,
  BBadge,
  BForm,
  BFormGroup,
  BFormTextarea,
  BModal,
} from 'bootstrap-vue';
import FichaObraForm from './FichaObra/FichaObraForm.vue'
import { ref, onUnmounted } from '@vue/composition-api';
import moment from 'moment';
import Cleave from 'vue-cleave-component';
import DatePicker from 'vue2-datepicker';
// eslint-disable-next-line import/order
import storeOcorrenciaModule from './storeOcorrenciaModules';
import 'vue2-datepicker/index.css';
import { useToast } from 'vue-toastification/composition';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';
import router from '@/router';
import store from '@/store';

export default {
  components: {
    BCard,
  BCardHeader,
  BCardBody,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BLink,
    BBadge,
    BForm,
    BFormGroup,
    BFormTextarea,
    Cleave,
    DatePicker,
    BModal,
    FichaObraForm
  },
  setup() {
    const ocorrencia = ref(null);
    const toast = useToast();
    // Register module
    const PIQUECT_STORE_MODULE_NAME = 'Picket';
    const editMode = false;
    // Register module
    if (!store.hasModule(PIQUECT_STORE_MODULE_NAME)) {
      store.registerModule(PIQUECT_STORE_MODULE_NAME, storeOcorrenciaModule);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PIQUECT_STORE_MODULE_NAME)) {
        store.unregisterModule(PIQUECT_STORE_MODULE_NAME);
      }
    });
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm');
    }
    function AbrirFicha(){
        this.$refs["FichObraRef"].show();
    }

    store
      .dispatch('Picket/fetchOcorrencia', { id: router.currentRoute.params.id })
      .then((response) => {
        ocorrencia.value = response.data;
        console.log(response.data);
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Erro! nenhum dado',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        });
      });

    return {
      dateTime,
      ocorrencia,
      AbrirFicha
    }
  },
};
</script>

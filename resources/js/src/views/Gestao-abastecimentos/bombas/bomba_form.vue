<template>
  <div class="section">
    <b-card no-body>
      <div class="card-header">
        <h3 class="card-title">Abastecimento da bomba interna</h3>
      </div>
      <b-card-body>
        <div class="card-header">
            <h3 class="card-title">Abastecimento recem pedidos em espera</h3>
        </div>
    <table class="table table-stripped">
        <thead>
            <tr>
                <th>Ordem</th>
                <th>Fornecedor</th>
                <th>Email do fornecedor</th>
                <th>Pre&ccedil;o/ltr</th>
                <th>Qtd</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <hr>
        <b-row>
          <b-col cols="12" xl="12" md="12">
            <b-card no-body>
              <b-form @submit.prevent="RequisitarAbastecimento">
                <b-row>
                  <b-col cols="12" md="12" lg="8">
                    <b-form-group label="Combustivel">
                      <v-select
                        v-model="form.tipo_de_combustivel"
                        :options="[
                          'Diesel',
                          'Gasolina',
                        ]"
                      ></v-select>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6" lg="6">
                    <b-form-group label="Fornecedor">
                      <v-select
                        v-model="form.fornecedor_id"
                        label="nome_bombas"
                        :options="bombas"
                        :reduce="(bombas) => bombas.id"
                      ></v-select>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6" lg="6">
                    <b-form-group label="Qtd a abastecer">
                      <b-form-input
                        type="number"
                        v-model="form.qtd_abastecida"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6" lg="6">
                    <b-form-group label="Preço de aquisiçao">
                      <b-form-input
                        type="text"
                        v-model="form.preco_combustivel"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>

                  <b-col cols="12" md="6" lg="6">
                    <b-form-group label="Data">
                      <b-form-datepicker
                        v-model="form.data_recepcao"
                        calendar-width="100%"
                        locale="pt-Br"
                      ></b-form-datepicker>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6" lg="6">
                    <b-form-group label="Inclui Iva">
                      <b-form-checkbox v-model="form.iva" :checked="false"
                        >Inc(IVA)</b-form-checkbox
                      >
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" md="12" lg="12">
                    <b-button variant="success" type="submit"
                      >enviar ordem</b-button
                    >
                    <b-button variant="secondary">cancelar</b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BForm,
  BFormGroup,
  BFormCheckbox,
  BFormInput,
  BFormTextarea,
  BFormDatepicker,
} from 'bootstrap-vue';
import vSelect from 'vue-select';
import Form from 'vform';
import { ref, onUnmounted } from '@vue/composition-api';
import moment from 'moment';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';
import { useToast } from 'vue-toastification/composition';
import router from '@/router';
import store from '@/store';

export default {
  data() {
    return {
      bombas: [],
      abastecimento_pendente: [],
      abastecimento_concluido: [],
    }
  },
  components: {
    BCard,
    BCardBody,
    BRow,
    BCol,
    BButton,
    vSelect,
    BForm,
    BFormGroup,
    BFormCheckbox,
    BFormInput,
    BFormDatepicker,
    BFormTextarea,
  },
  setup(props) {
    const toast = useToast();
    const BOMBAS_APP_STORE_MODULE_NAME = 'Supply';
    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(BOMBAS_APP_STORE_MODULE_NAME)) {
        store.unregisterModule(BOMBAS_APP_STORE_MODULE_NAME);
      }
    });

    const form = ref(
      JSON.parse(
        JSON.stringify(
          new Form({
            qtd_abastecida: 0,
            preco_combustivel: 0,
            iva: false,
            fornecedor_id: null,
            viatura_fornecedora: '',
            tipo_de_combustivel: 'Diesel',
            nome_motorista: '',
            selo_abastecimento: null,
            identificacao: null,
            observacao: null,
            data_recepcao: null,
            bombas_id: router.currentRoute.params.id,
            estado: 'Requisicao para abastecimento',
          }),
        )
      )
    );

    function RequisitarAbastecimento() {
      return new Promise((resolve, reject) => {
        this.$http
          .post(
            '/api/abastecimentoBomba',
            form.value
          )
          .then((response) => {
            toast({
              component: ToastificationContent,
              props: {
                title: response.data.success,
                icon: 'CheckSquareIcon',
                variant: 'success',
              },
            });
            window.location.reload();
          })
          .catch((err) => {
            if (err.response.status === 421) {
              toast({
                component: ToastificationContent,
                props: {
                  title: err.response.data.error,
                  icon: 'AlertTriangleIcon',
                  variant: 'danger',
                },
              });
            }
          });
      });
    }

    return {
      RequisitarAbastecimento,
      form,
    };
  },
  created() {
    this.$http.get('/api/bombas').then(res => {
      this.bombas = res.data
    })
    this.$http.get(`/api/abastecimentoPendente/${this.$route.params.id}`).then(response => {
      this.abastecimento_pendente = response.data
    })
  },
};
</script>

<style>
</style>

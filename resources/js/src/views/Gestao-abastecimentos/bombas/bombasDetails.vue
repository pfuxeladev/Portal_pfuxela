<template>
  <section class="invoice-add-wrapper mt-3">
    <b-row class="invoice-add">
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <h3 class="card-title">Dados da Bomba: {{ bomba.nome_bombas }}</h3>
          </b-card-header>
          <b-card-body>
            <b-row sm>
              <b-col cols="5" md="5">
                <b-list-group>
                  <b-list-group-item
                    ><span>Capacidade: </span>
                    {{ bomba.capacidade }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><span>Tipo: </span>
                    {{ bomba.tipo_bomba }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><span>Qtd disponivel: </span>
                    {{ bomba.qtd_disponivel }}</b-list-group-item
                  >
                </b-list-group>
              </b-col>
              <b-col cols="4" md="4">
                <b-list-group>
                  <b-list-group-item
                    v-for="resp in bomba.responsavel"
                    :key="resp.id"
                    ><span>Email: </span>
                    {{ resp.email_bomba }}</b-list-group-item
                  >
                </b-list-group>
              </b-col>
              <b-col cols="3" md="3">
                <b-list-group>
                  <b-list-group-item
                    v-for="comb in bomba.combustivel_bomba"
                    :key="comb.id"
                    ><span>Combustivel: </span>
                    {{ comb.combustivel.tipo_combustivel }}
                    <br />
                    <span>Pre&ccedil;o actual: </span> {{ comb.preco_actual }}
                  </b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>
            <hr />
            <b-row v-if="bomba.ordem.length === 0">
              <b-col cols="12">
                <b-card-header>
                  <h3 class="card-title">Resumo dos abastecimentos</h3>
                </b-card-header>
              </b-col>
              <b-col
                cols="12"
                v-for="(ordem, index) in bomba.ordem"
                :key="index"
              >
                <b-card-header>
                  <h4 class="card-title text-uppercase">
                    Codigo:
                    <span style="color: #593101"
                      >#{{ ordem.codigo_ordem }}</span
                    >
                  </h4>
                </b-card-header>
                <table class="table table-bordered table-stripped">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>viatur(matricula)</th>
                      <th>Qtd</th>
                      <th>pre&ccedil;o</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="ordVi in ordem.ordem_viatura" :key="ordVi.id">
                      <td>{{ dateTime(ordVi.updated_at) }}</td>
                      <td>{{ ordVi.viatura.matricula }}</td>
                      <td>{{ ordVi.qtd_abastecida }}</td>
                      <td>{{ ordVi.preco_cunsumo / ordVi.qtd_abastecida }}</td>
                      <td>{{ ordVi.preco_cunsumo }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <!-- open modal recepcao de combustivel -->
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.prevent="handleSubmit">
        <b-row v-if="form.estado === 'Recepcao do combustivel'">
          <b-col cols="12" lg="6" md="6">
            <b-form-group
              invalid-feedback="Name is required"
          :state="nameState"
           label="Motorista">
              <b-form-input type="text" v-model="form.nome_motorista" :state="nameState"
            required />
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6" md="6">
            <b-form-group
              invalid-feedback="Name is required"
          :state="nameState"
           label="Identificacao e tipo de documento">
              <b-form-input type="text" v-model="form.identificacao"
               :state="nameState"
            required />
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6" md="6">
            <b-form-group
              invalid-feedback="Name is required"
          :state="nameState"
           label="Selo de abastecimento">
              <b-form-input type="text" v-model="form.selo_abastecimento"
               :state="nameState"
            required />
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="6" md="6">
            <b-form-group
              invalid-feedback="Name is required"
          :state="nameState"
           label="Viatura do fornecedor">
              <b-form-input type="text" v-model="form.viatura_fornecedor"
               :state="nameState"
            required />
            </b-form-group>
          </b-col>
          <b-col cols="12" lg="12" md="12">
            <b-form-group
              invalid-feedback="Name is required"
          :state="nameState"
           label="Observacao">
              <b-form-textarea v-model="form.observacao"
               :state="nameState"
            required />
            </b-form-group>
          </b-col>
        </b-row>
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          />
        </b-form-group>
      </form>
    </b-modal>
    <!-- end modal -->
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
} from 'bootstrap-vue'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import Form from 'vform'
import store from '@/store'
import router from '@/router'
import Table from '../../table/bs-table/Table.vue'
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
    Table,
    BModal,
  },
  setup() {
    const bomba = ref(null)

    const toast = useToast()

    function getBombasDetails() {
      this.$http
        .get(`/api/bombas/${router.currentRoute.params.id}`)
        .then((response) => {
          this.bomba = response.data
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
            })
          }
        })
    }
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }
    const form = ref(
      JSON.parse(
        JSON.stringify(new Form({
          qtd_abastecida: 0,
          preco_combustivel: 0,
          iva: false,
          fornecedor_id: null,
          viatura_fornecedora: '',
          nome_motorista: '',
          selo_abastecimento: null,
          identificacao: null,
          observacao: null,
          data_recepcao: null,
          estado: 'Requisicao para abastecimento',
        })),
      ),
    )
    // submit recieving fuel
    function checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    }
    function resetModal() {
      this.name = ''
      this.nameState = null
    }
    function handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    }
    function handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
    }
    // end submittion
    return {
      getBombasDetails,
      checkFormValidity,
      resetModal,
      handleSubmit,

      handleOk,
      dateTime,
      form,
      bomba,
    };
  },
  created() {
    this.getBombasDetails();
  },
};
</script>

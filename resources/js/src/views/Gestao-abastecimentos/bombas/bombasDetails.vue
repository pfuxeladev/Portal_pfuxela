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
            <b-row cols="12" v-for="(ordem, index) in bomba.ordem" :key="index">
              <b-col
                cols="12"
                v-if="ordem.tipo_ordem === 'abastecimento_interno'"
              >
                <b-card-header>
                    <h3 class="card-title">Abastecimento da bombas locais</h3>
                  <h4 class="card-title text-uppercase">
                    Codigo:
                    <span style="color: #593101"
                      >#{{ ordem.codigo_ordem }}</span
                    >
                  </h4>
                </b-card-header>
                <table class="table table-striped table-responsive">
                  <thead>
                    <tr>
                      <th>Fornecedor</th>
                      <th>Contacto</th>
                      <th>Motorista</th>
                      <th>Viatura(forn)</th>
                      <th>Selo de abast.</th>
                      <th>Combustivel</th>
                      <th>Qtd abastecida</th>
                      <th>Pre&ccedil;o</th>
                      <th>Total</th>
                      <th>Data de abastecimento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="abst in bomba.abastecimento_bomba"
                      :key="abst.id"
                    >
                      <td>{{ abst.fornecedor }}</td>
                      <td>{{ abst.fornecedor_contacto }}</td>
                      <td>{{ abst.nome_motorista }}</td>
                      <td>{{ abst.viatura_fornecedora }}</td>
                      <td>{{ abst.selo_abastecimento }}</td>
                      <td>{{ abst.tipo_de_combustivel }}</td>
                      <td>{{ abst.qtd_abastecida }}</td>
                      <td>{{ abst.preco_combustivel }}</td>
                      <td>{{ abst.sub_total }}</td>
                      <td>{{ dateTime(abst.updated_at) }}</td>
                    </tr>
                  </tbody>
                </table>
              </b-col>
            </b-row>
            <hr />
            <b-row v-if="bomba.ordem.length > 0">
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
                  <h4
                    class="card-title text-uppercase"
                    v-if="ordem.tipo_ordem !== 'abastecimento_interno'"
                  >
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
import router from "@/router";
import Table from "../../table/bs-table/Table.vue";
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
    const bomba = ref(null);

    const toast = useToast();

    function getBombasDetails() {
      this.$http
        .get(`/api/bombas/${router.currentRoute.params.id}`)
        .then((response) => {
          this.bomba = response.data;
        })
        .catch((err) => {
          if (err.response.status === 421) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.error,
                icon: "AlertTriangleIcon",
                variant: "danger",
              },
            });
          }
        });
    }
    function dateTime(value) {
      return moment(value).format("DD/MM/YYYY hh:mm");
    }
    // end submittion
    return {
      getBombasDetails,
      dateTime,
      bomba,
    };
  },
  created() {
    this.getBombasDetails();
  },
};
</script>

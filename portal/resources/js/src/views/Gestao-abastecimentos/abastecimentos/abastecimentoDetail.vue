<template>
  <section class="invoice-preview-wrapper">

    <b-row v-if="SupplyData">
      <b-col
        cols="12"
        lg="12"
        md="10"
      >
        <b-card
          no-body
          class="invoice-preview-card"
        >

          <b-card-body class="mt-2">
            <b-row>
              <b-col cols="6">
                <b-list-group>
                  <b-list-group-item><b>Ref</b>: {{ SupplyData.refs }}</b-list-group-item>
                  <b-list-group-item><b>Ordem</b>: {{ SupplyData.ordem.codigo_ordem }}</b-list-group-item>
                  <b-list-group-item><b>Bombas</b>: {{ SupplyData.ordem.bombas.nome_bombas }} </b-list-group-item>
                  <b-list-group-item><b>Viatura</b>: {{ SupplyData.viatura.nome_viatura }}, matricula: {{ SupplyData.viatura.matricula }}</b-list-group-item>
                  <b-list-group-item><b>Qtd de combustivel abastecido</b>: {{ SupplyData.qtd_rec }}</b-list-group-item>
                </b-list-group>
              </b-col>
              <b-col
                cols="4"
                class="pull-right ml-auto"
              >
                <b-list-group>
                  <b-list-group-item><b>Requisitado por</b>: {{ SupplyData.email }}</b-list-group-item>
                  <b-list-group-item><b>Estado</b>:<span v-if="SupplyData.ordem.estado === 'pendente'">
                    <b-badge variant="warning">Pendende</b-badge>
                  </span>
                    <span v-else-if="SupplyData.ordem.estado === 'aprovado'">
                      <b>Aprovado por</b>: {{ SupplyData.ordem.codigo_ordem }}
                    </span>
                    <span v-else>Ordem rejeitada</span>
                  </b-list-group-item>
                </b-list-group>
              </b-col>

            </b-row>
          </b-card-body>
          <b-table-lite
            responsive
            :items="SupplyData.ordem.abastecimento_rota"
            :fields="fields"
          >
            <template #cell(rota)="data">
              {{ data.item.rota.nome_rota }}
            </template>
          </b-table-lite>
        </b-card>
      </b-col>
      <b-col
        cols="12"
        xl="2"
        md="2"
      >
        <b-link
          class="btn btn-md btn-outline-primary"
          :to="{ name: 'Supply' }"
        >
          Voltar
        </b-link>
      </b-col>
      <b-col
        cols="12"
        xl="2"
        md="2"
      >
        <b-button
          variant="outline-success"
          @click="Aprovar(SupplyData.ordem.refs)"
        >
          Aprovar
        </b-button>
      </b-col>
      <b-col
        cols="12"
        xl="2"
        md="2"
      >
        <b-button
          variant="outline-danger"
          @click="Reprovar(SupplyData.ordem.refs)"
        >
          reprovar
        </b-button>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  ref,
  onUnmounted,
} from '@vue/composition-api'
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BTableLite,
  BCardText,
  BButton,
  BAlert,
  BLink,
  VBToggle,
  BListGroup,
  BListGroupItem,
  BBadge,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import router from '@/router'
import storeAbastecimentos from './storeAbastecimentos'

export default {
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BTableLite,
    BCardText,
    BButton,
    BAlert,
    BLink,
    BListGroup,
    BListGroupItem,
    BBadge,
  },
  setup() {
    const SupplyData = ref(null)

    // Invoice Description
    // ? Your real data will contain this information

    const SUPPLY_STORE_MODULE_NAME = 'Supply'

    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.registerModule(SUPPLY_STORE_MODULE_NAME, storeAbastecimentos)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME)) store.unregisterModule(SUPPLY_STORE_MODULE_NAME)
    })
    store.dispatch('Supply/fetchAbastecimentoDetails', {
      refs: router.currentRoute.params.refs,
    })
      .then(response => {
        SupplyData.value = response.data
      })
      .catch(error => {
        if (error.response.status === 404) {
          SupplyData.value = undefined
        }
      })

    function Aprovar(refs) {
      console.log(refs)
    }
    function Reprovar(refs) {
      console.log(refs)
    }

    const printInvoice = () => {
      window.print()
    }
    const fields = ['Rota', 'qtd', 'razao_abastecimento', 'turno']

    return {
      SupplyData,
      printInvoice,
      fields,
      Aprovar,
      Reprovar,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss">
@media print {

    // Global Styles
    body {
        background-color: transparent !important;
    }

    nav.header-navbar {
        display: none;
    }

    .main-menu {
        display: none;
    }

    .header-navbar-shadow {
        display: none !important;
    }

    .content.app-content {
        margin-left: 0;
        padding-top: 2rem !important;
    }

    footer.footer {
        display: none;
    }

    .card {
        background-color: transparent;
        box-shadow: none;
    }

    .customizer-toggle {
        display: none !important;
    }

    // Invoice Specific Styles
    .invoice-preview-wrapper {
        .row.invoice-preview {
            .col-md-8 {
                max-width: 100%;
                flex-grow: 1;
            }

            .invoice-preview-card {
                .card-body:nth-of-type(2) {
                    .row {
                        >.col-12 {
                            max-width: 50% !important;
                        }

                        .col-12:nth-child(2) {
                            display: flex;
                            align-items: flex-start;
                            justify-content: flex-end;
                            margin-top: 0 !important;
                        }
                    }
                }
            }
        }

        // Action Right Col
        .invoice-actions {
            display: none;
        }
    }
}
</style>

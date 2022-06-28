<template>
  <div class="car-details">
    <section class="invoice-add-wrapper mt-3">
      <b-row class="invoice-add">
          <b-col>
              <b-link  :to="{ name: 'Cars' }" class="btn btn-md btn-outline-primary">voltar</b-link>
          </b-col>
        <b-col cols="12">
          <b-card>
            <b-card-header>
              <h3 class="card-title">
                Dados da viatura {{ viaturaData.id }}
              </h3>
            </b-card-header>
            <b-card-body>
              <b-row sm>
                <b-col
                  cols="2"
                  md="2"
                >
                  <b-img />
                </b-col>
                <b-col
                  cols="12"
                  md="12"
                  lg="12"
                >
                  <b-row>
                    <b-col>
                      <b-list-group>
                        <b-list-group-item>
                          <strong>Marca</strong>: {{ viaturaData.marca.nome }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Modelo</strong>: {{ viaturaData.modelo.nome_modelo }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Descri&ccedil;&atilde;o</strong>: {{ viaturaData.nome_viatura }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Matricula</strong>: {{ viaturaData.matricula }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Ano de fabrico</strong>: {{ viaturaData.ano_fabrico }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Lota&ccedil;&atilde;o</strong>: {{ viaturaData.lotacao }}
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                    <b-col>
                      <b-list-group>
                        <b-list-group-item>
                          <strong>Tipo de Combustivel</strong>: {{ viaturaData.tipo_combustivel }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Kilometragem actual</strong>: {{ viaturaData.kilometragem }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Capacidade do tanque</strong>: {{ viaturaData.capacidade_tanque }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Ltr/Km</strong>: {{ viaturaData.capacidade_media }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Qtd disponivel</strong>: {{ viaturaData.qtd_disponivel }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Estado</strong>:
                          <span v-if="viaturaData.estado === 1"><b-badge variant="success">Viatura activa</b-badge></span>
                          <span v-if="viaturaData.estado === 0"><b-badge variant="danger">Viatura Inativa</b-badge></span>
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                    <b-col>
                      <b-list-group>
                        <b-list-group-item>
                          <strong>Nr do Motor</strong>: {{ viaturaData.nr_motor }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Nr do Chassi</strong>: {{ viaturaData.nr_chassi }}
                        </b-list-group-item>
                        <b-list-group-item>
                          <strong>Nr do Livrete</strong>: {{ viaturaData.nr_livrete }}
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                  <br>
                  <table class="table table-light table-responsive table-bordered">
                    <thead class="thead-light">
                      <tr class="text-center">
                        <th colspan="2">
                          Inspec&ccedil;&atilde;o
                        </th>
                        <th colspan="2">
                          Licen&ccedil;a
                        </th>
                        <th colspan="2">
                          Manifesto
                        </th>
                        <th colspan="2">
                          Seguros
                        </th>
                        <th colspan="2">
                          Taxa de Radio de fus&atilde;o
                        </th>
                      </tr>
                      <tr>
                        <th>Data</th>
                        <th>Prazo</th>
                        <th>Data</th>
                        <th>Prazo</th>
                        <th>Data</th>
                        <th>Prazo</th>
                        <th>Data</th>
                        <th>Prazo</th>
                        <th>Data</th>
                        <th>Prazo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(docs, index) in viaturaData.viatura_document"
                        :key="index"
                      >
                        <td>{{ dateTime(docs.data_inspencao) }}</td>
                        <td>{{ dateTime(docs.prazo_inspencao) }}</td>
                        <td>{{ dateTime(docs.data_licenca) }}</td>
                        <td>{{ dateTime(docs.prazo_licenca) }}</td>
                        <td>{{ dateTime(docs.data_manifesto) }}</td>
                        <td>{{ dateTime(docs.prazo_manifesto) }}</td>
                        <td>{{ dateTime(docs.data_seguros) }}</td>
                        <td>{{ dateTime(docs.prazo_seguros) }}</td>
                        <td>{{ dateTime(docs.data_taxa_radio) }}</td>
                        <td>{{ dateTime(docs.prazo_taxa_radio) }}</td>
                      </tr>
                    </tbody>
                  </table>
                </b-col>
              </b-row>
              <b-row v-if="viaturaData.ordem_viatura !=null">
                <b-col
                  cols="12"
                  class="mt-2"

                >
                  <h3 class="card-title">
                    Historico das ordems da viatura
                  </h3>
                  <table class="table table-light">
                    <thead class="thead-light">
                      <tr>
                        <th>Codigo</th>
                        <th>Data</th>
                        <th>Qtd abastecida</th>
                        <th>Pre&ccedil;o /ltr</th>
                        <th>Pre&ccedil;o de consumo</th>
                        <th>Estado</th>
                        <th>Bombas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(order, index) in viaturaData.ordem_viatura"
                        :key="index"
                      >
                        <td>
                          {{ order.ordem.codigo_ordem }}
                        </td>
                        <td>
                          {{ dateTime(order.updated_at) }}
                        </td>
                        <td>{{ order.qtd_abastecida }}</td>
                        <td>
                          <span
                            v-for="combustivel in order.ordem.bombas.combustivel"
                            :key="combustivel.id"
                          >
                            <span v-if="combustivel.tipo_combustivel === viaturaData.tipo_combustivel">
                              {{ combustivel.preco_actual }}
                            </span>
                          </span>
                        </td>
                        <td>
                          <span
                            v-for="combustivel in order.ordem.bombas.combustivel"
                            :key="combustivel.id"
                          >
                            <span v-if="combustivel.tipo_combustivel === viaturaData.tipo_combustivel">
                              {{ (combustivel.preco_actual * order.qtd_abastecida) }}
                            </span>
                          </span>
                        </td>
                        <td>
                          <span v-if="order.ordem.approvedBy === null">
                            <b-badge variant="warning">pendente</b-badge>
                          </span>
                          <span v-if="order.ordem.approvedBy !== null">
                            <b-badge variant="success">Autorizada</b-badge>
                          </span>
                        </td>
                        <td>
                          {{ order.ordem.bombas.nome_bombas }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-col>
              </b-row>

            </b-card-body>
            <b-card-footer>
                <b-row>
                    <b-col>
                        <b>Cadastrado por</b>:
                        <span>
                            {{viaturaData.created_by.name}}
                        </span>
                    </b-col>

                </b-row>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BCardFooter, BBadge, BLink, BRow, BCol, BListGroup, BListGroupItem, BImg,
  BFormGroup,
// eslint-disable-next-line import/newline-after-import
} from 'bootstrap-vue'
import { ref, onUnmounted } from '@vue/composition-api'
import moment from 'moment'
import store from '@/store'
import router from '@/router'
import StoreViaturaModule from './StoreViaturaModule'

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
  },
  setup() {
    const viaturaData = ref(null)

    const VIATURA_APP_STORE_MODULE = 'Picket'

    // Register module
    if (!store.hasModule(VIATURA_APP_STORE_MODULE)) store.registerModule(VIATURA_APP_STORE_MODULE, StoreViaturaModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(VIATURA_APP_STORE_MODULE)) store.unregisterModule(VIATURA_APP_STORE_MODULE)
    })

    store.dispatch('Picket/fetchViatura', { id: router.currentRoute.params.id })
      .then(response => { viaturaData.value = response.data })
      .catch(error => {
        if (error.response.status === 421) {
          viaturaData.value = undefined
        }
      })

    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }

    return {
      viaturaData,
      dateTime,
    }
  },
  computed: {

    // total() {
    //   return this.viaturaData.ordem_viatura.reduce((carry, item) => carry + Number(item.qtd_abastecida * item.ordem.bmobas.combustivel[0].preco_actual), 0)
    // },

  },
}
</script>

<template>
  <section class="invoice-preview-wrapper">
<<<<<<< HEAD
    <b-row v-if="SupplyData">
      <b-col cols="12" lg="12" md="10">
        <b-card no-body class="invoice-preview-card">
=======

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

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
          <b-card-body class="mt-2">
            <b-row>
              <b-col cols="6">
                <b-list-group>
<<<<<<< HEAD
                  <b-list-group-item
                    ><b>Ref</b>: {{ SupplyData.refs }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Ordem</b>:
                    {{ SupplyData.codigo_ordem }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Bombas</b>: {{ SupplyData.bombas.nome_bombas }}
                  </b-list-group-item>
                  <b-list-group-item
                    ><b>Qtd total requisitad0</b>:
                    {{ SupplyData.abastecimento[0].qtd_rec }}</b-list-group-item
                  >
                </b-list-group>
              </b-col>
              <b-col cols="4" class="pull-right ml-auto">
                <b-list-group>
                  <b-list-group-item
                    ><b>Requisitado por</b>:
                    {{ SupplyData.created_by.name }}</b-list-group-item
                  >
                  <b-list-group-item
                    ><b>Estado</b>:
                    <span v-if="SupplyData.estado === 'Pendente'">
                      <b-badge variant="warning">Pendende</b-badge>
                    </span>
                    <span v-else-if="SupplyData.estado === 'Autorizado'">
                      <b-badge variant="success">Autorizada</b-badge>
                    </span>
                    <span v-else>Ordem rejeitada</span>
                  </b-list-group-item>
                  <b-list-group-item v-if="SupplyData.approved_by !== null">
                    <b>Autorizado por</b>: {{ SupplyData.approved_by.name }}
                  </b-list-group-item>
                </b-list-group>
              </b-col>
            </b-row>
          </b-card-body>
          <span v-if="SupplyData.ordem_viatura.length > 0">
            <table class="table table-bordered table-stripped table-light">
              <thead class="thead-light">
                <tr>
                  <th rowspan="2">Matricula</th>
                  <th rowspan="2">tipo(combustivel)</th>
                  <th rowspan="2">km(actual)</th>
                  <th rowspan="2">Qtd disponivel</th>
                  <th rowspan="2">qtd</th>
                  <th rowspan="2">Val. a pagar</th>
                  <th colspan="2">Rota & projecto</th>
                </tr>
                <tr>
                  <th>rota</th>
                  <th>projecto</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="ordem_viatura in SupplyData.ordem_viatura"
                  :key="ordem_viatura"
                >
                  <td>{{ ordem_viatura.viatura.matricula }}</td>
                  <td>{{ ordem_viatura.viatura.tipo_combustivel }}</td>
                  <td>{{ ordem_viatura.viatura.kilometragem }}</td>
                  <td>{{ ordem_viatura.viatura.qtd_disponivel }}</td>
                  <td>{{ ordem_viatura.qtd_abastecida }}</td>
                  <td>{{ ordem_viatura.preco_cunsumo }}</td>
                  <td colspan="2">
                    <tr
                      v-for="(
                        viatura_rota, index
                      ) in ordem_viatura.ordem_viatura_rota"
                      :key="index"
                    >
                      <td>{{ viatura_rota.rota.nome_rota }}</td>
                      <td>{{ viatura_rota.rota.projecto.name }}</td>
                    </tr>
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
        </b-card>
      </b-col>
      <b-col cols="12" xl="2" md="2">
        <b-link class="btn btn-md btn-outline-primary" :to="{ name: 'Supply' }">
          Voltar
        </b-link>
      </b-col>
      <b-col cols="12" xl="2" md="2">
        <span v-if="SupplyData.estado === 'Pendente'">
          <b-button variant="outline-success" @click="Aprovar(SupplyData.refs)">
            Autorizar
          </b-button>
        </span>
        <span v-if="SupplyData.estado === 'Autorizado'">
          <b-button variant="outline-success" @click="Aprovar(SupplyData.refs)">
            Reenviar
          </b-button>
        </span>
      </b-col>
      <b-col cols="12" xl="2" md="2">
        <span v-if="SupplyData.estado === 'Autorizado'">
          <b-button variant="outline-danger" @click="Reprovar(SupplyData.refs)">
            Cancelar
          </b-button>
        </span>
      </b-col>
      <b-col cols="12" xl="2" md="2" v-if="SupplyData.estado === 'Autorizado'">
        <b-button variant="warning" @click="reabrirOrdem(SupplyData.refs)"
          >Reabrir</b-button
        >
      </b-col>
      <b-col cols="12" xl="2" md="2">
        <span v-if="SupplyData.estado === 'Pendente'">
          <b-button variant="outline-danger" @click="Desfazer(SupplyData.refs)">
            cancelar envio
          </b-button>
        </span>
=======
                  <b-list-group-item><b>Ref</b>: {{ SupplyData.refs }}</b-list-group-item>
                  <b-list-group-item><b>Ordem</b>: {{ SupplyData.ordem.codigo_ordem }}</b-list-group-item>
                  <b-list-group-item><b>Bombas</b>: {{ SupplyData.ordem.bombas.nome_bombas }} </b-list-group-item>
                  <b-list-group-item><b>Qtd total requisitad0</b>: {{ SupplyData.qtd_rec }}</b-list-group-item>
                </b-list-group>
              </b-col>
              <b-col
                cols="4"
                class="pull-right ml-auto"
              >
                <b-list-group>
                  <b-list-group-item><b>Requisitado por</b>: {{ SupplyData.ordem.created_by.name }}</b-list-group-item>
                  <b-list-group-item><b>Estado</b>: <span v-if="SupplyData.ordem.estado === 'pendente'">
                    <b-badge variant="warning">Pendende</b-badge>
                  </span>
                    <span v-else-if="SupplyData.ordem.estado === 'Autorizado'">
                        <b-badge variant="success">Autorizada</b-badge>
                    </span>
                    <span v-else>Ordem rejeitada</span>
                  </b-list-group-item>
                  <b-list-group-item v-if="SupplyData.ordem.approved_by !== null">
                      <b>Autorizado por</b>: {{ SupplyData.ordem.approved_by.name }}
                  </b-list-group-item>
                </b-list-group>
              </b-col>

            </b-row>
            <b-row>
                <b-col><b>Matricula</b></b-col>
                <b-col><b>Qtd a abastecer</b></b-col>
                <b-col><b>Data</b></b-col>
            </b-row>
            <b-row v-for="(vt, index) in SupplyData.ordem.ordem_viatura" :key="index">
                <b-col cols="4" md="4">
                    {{vt.viatura.matricula}}
                </b-col>
                <b-col cols="4" md="4">
                     {{vt.qtd_abastecida}}
                </b-col>
                <b-col cols="4" md="4">
                    {{dateTime(vt.updated_at)}}
                </b-col>
            </b-row>
          </b-card-body>
          <span v-if="SupplyData.ordem.abastecimento_rota.length > 0">
            <b-table-lite
            responsive
            :items="SupplyData.ordem.abastecimento_rota"
            :fields="fields"
          >
            <template #cell(rota)="data">
              {{ data.item.rota.nome_rota }}
            </template>
          </b-table-lite>
          </span>
          <span v-else>
              <b-row class="m-1">
                  <b-col><b>Descri&ccedil;&atilde;o</b></b-col>
                  <b-col><b>Destino</b></b-col>
                  <b-col><b>Hora de partida</b></b-col>
              </b-row>
              <b-row class="m-1" v-for="extra in SupplyData.abastecimento_extra" :key="extra.id">
                  <b-col>{{extra.descricao}}</b-col>
                  <b-col>{{extra.destino}}</b-col>
                  <b-col>{{extra.horaSaida}}</b-col>
              </b-row>
          </span>
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
      <span v-if="SupplyData.ordem.estado ==='pendente'">
       <b-button
          variant="outline-success"
          @click="Aprovar(SupplyData.ordem.refs)"
        >
          Autorizar
        </b-button>
      </span>


      </b-col>
      <b-col
        cols="12"
        xl="2"
        md="2"
      >
       <span v-if="SupplyData.ordem.estado ==='Cancelado'">
       <b-button variant="warning">Reabrir</b-button>
      </span>
      <span v-else>
        <b-button
          variant="outline-danger"
          @click="Reprovar(SupplyData.ordem.refs)"
        >
          Cancelar
        </b-button>
      </span>
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
      </b-col>
    </b-row>
  </section>
</template>

<script>
<<<<<<< HEAD
import { ref, onUnmounted } from '@vue/composition-api';
=======
import {
  ref,
  onUnmounted,
} from '@vue/composition-api'
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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
<<<<<<< HEAD
} from 'bootstrap-vue';
import Ripple from 'vue-ripple-directive';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';
import { useToast } from 'vue-toastification/composition';
import store from '@/store';
import router from '@/router';
import storeAbastecimentos from './storeAbastecimentos';
import 'animate.css';
import moment from 'moment';
=======
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { useToast } from 'vue-toastification/composition'
import store from '@/store'
import router from '@/router'
import storeAbastecimentos from './storeAbastecimentos'
import 'animate.css'
import moment from 'moment'
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

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
<<<<<<< HEAD
    const SupplyData = ref(null);

    const toast = useToast();

    const SUPPLY_STORE_MODULE_NAME = 'Supply';

    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME))
      store.registerModule(SUPPLY_STORE_MODULE_NAME, storeAbastecimentos);

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME))
        store.unregisterModule(SUPPLY_STORE_MODULE_NAME);
    });
    store
      .dispatch('Supply/fetchAbastecimentoDetails', {
        refs: router.currentRoute.params.refs,
      })
      .then((response) => {
        SupplyData.value = response.data;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          SupplyData.value = undefined;
        }
      });

    function Aprovar(refs) {
      this.$swal({
        title: 'Permitir envio da ordem?',
=======
    const SupplyData = ref(null)

    const toast = useToast()

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
      this.$swal({
        title: 'Deseja permitir envio da ordem ?',
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
        showCancelButton: true,
        showClass: {
          popup: 'animate__animated animate__flipInX',
        },
        confirmButtonText: 'Sim',
<<<<<<< HEAD
      }).then((result) => {
        if (result.isConfirmed) {
          store
            .dispatch('Supply/ApproveOrder', { refs })
            .then((res) => {
              this.$emit('refetch-data');
=======
      }).then(result => {
        if (result.isConfirmed) {
          store.dispatch('Supply/ApproveOrder', { refs })
            .then(res => {
              this.$emit('refetch-data')
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
              toast({
                component: ToastificationContent,
                props: {
                  title: res.data.success,
                  icon: 'CheckSquareIcon',
                  variant: 'success',
                },
<<<<<<< HEAD
              });
            window.location.reload()
            })
            .catch((err) => {
=======
              })
            }).catch(err => {
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
              if (err.response.status === 421) {
                toast({
                  component: ToastificationContent,
                  props: {
                    title: err.response.data.erro,
                    icon: 'AlertTriangleIcon',
                    variant: 'danger',
                  },
<<<<<<< HEAD
                });
=======
                })
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
              } else if (err.response.status === 500) {
                toast({
                  component: ToastificationContent,
                  props: {
                    title: 'Erro do sistema contacte o administrador',
                    icon: 'AlertTriangleIcon',
                    variant: 'danger',
                  },
<<<<<<< HEAD
                });
              }
            });
          //   this.$swal('Saved!', '', 'success')
        } else if (result.isDenied) {
          this.$swal('Nenhuma ordem foi enviada', '', 'info');
        }
      });
    }
    function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm');
    }
    function Desfazer(refs) {
      store
        .dispatch('Supply/UndoOrder', { refs })
        .then((res) => {
          this.$emit('refetch-data');
          toast({
            component: ToastificationContent,
            props: {
              title: res.data.message,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          });
          router.push({ name: 'Orders' });
        })
        .catch((err) => {
          if (err.response.status === 421) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.erro,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            });
          } else if (err.response.status === 500) {
            toast({
              component: ToastificationContent,
              props: {
                title: 'Erro do sistema contacte o administrador',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            });
          }
        });
    }
    function Reprovar(refs) {
      store
        .dispatch('Supply/CancelOrder', { refs })
        .then((res) => {
          this.$emit('refetch-data');
          toast({
            component: ToastificationContent,
            props: {
              title: res.data.success,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          });
          router.push({ name: 'Orders' });
        })
        .catch((err) => {
          if (err.response.status === 421) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.erro,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            });
          } else if (err.response.status === 500) {
            toast({
              component: ToastificationContent,
              props: {
                title: 'Erro do sistema contacte o administrador',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            });
          }
        });
    }

    function reabrirOrdem(refs) {
      store
        .dispatch('Supply/ReopenOrder', { refs })
        .then((res) => {
          this.$emit('refetch-data');
          toast({
            component: ToastificationContent,
            props: {
              title: res.data.success,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          });
          router.push({ name: 'New-supply-order', params: { refs } });
        })
        .catch((err) => {
          if (err.response.status === 421) {
            toast({
              component: ToastificationContent,
              props: {
                title: err.response.data.erro,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            });
          } else if (err.response.status === 500) {
            toast({
              component: ToastificationContent,
              props: {
                title: 'Erro do sistema contacte o administrador',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            });
          }
        });
    }

    const printInvoice = () => {
      window.print();
    };
    const fields = ['Rota', 'turno'];
=======
                })
              }
            })
        //   this.$swal('Saved!', '', 'success')
        } else if (result.isDenied) {
          this.$swal('Nenhuma ordem foi enviada', '', 'info')
        }
      })
    }
     function dateTime(value) {
      return moment(value).format('DD/MM/YYYY hh:mm')
    }
    function Reprovar(refs) {
      store.dispatch('Supply/CancelarOrdem', { refs })
        .then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
    }

    const printInvoice = () => {
      window.print()
    }
    const fields = ['Rota', 'turno']
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

    return {
      SupplyData,
      printInvoice,
      fields,
      Aprovar,
      Reprovar,
      dateTime,
<<<<<<< HEAD
      reabrirOrdem,
      Desfazer,
    };
  },
};
=======
    }
  },
}
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
</script>

<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-invoice.scss";
</style>

<style lang="scss">
@media print {
<<<<<<< HEAD
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
            > .col-12 {
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
=======

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
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
}
</style>

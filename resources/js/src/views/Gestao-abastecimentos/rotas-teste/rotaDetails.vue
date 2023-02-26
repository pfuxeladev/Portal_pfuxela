<script>
import { defineComponent, onUnmounted, ref } from '@vue/composition-api'
import {
  BCard, BCardBody, BCardHeader, BButton, BCol, BRow, BLink, BCardTitle,
} from 'bootstrap-vue'
import store from '@/store'
import RotaTesteModule from './RotasTesteModule'
import router from '@/router'

export default defineComponent({
  name: 'DetalhesRota',
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BButton,
    BCol,
    BRow,
    BLink,
  },

  setup() {
    const ROTAS_APP_STORE_MODULE_NAME = 'ROTAS'

    // Register module
    if (!store.hasModule(ROTAS_APP_STORE_MODULE_NAME)) store.registerModule(ROTAS_APP_STORE_MODULE_NAME, RotaTesteModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ROTAS_APP_STORE_MODULE_NAME)) store.unregisterModule(ROTAS_APP_STORE_MODULE_NAME)
    })
    const rota = ref(null)
    store.dispatch('ROTAS/getRotaDetails', {
      rotaId: router.currentRoute.params.id,
    }).then(response => {
      rota.value = response.data
    })

    return {
      rota,
    }
  },
})
</script>
<template>
  <div>
    <b-card no-body class="mb-0">
        <b-card-header class="d-flex align-content-center text-center">
            <b-card-title style="font-size:24">
                {{ rota.nome_rota }}
            </b-card-title>
        </b-card-header>
        <div class="m-2">
            <b-card-body>
                <b-row>
                    <b-col>Projecto: {{ rota.projecto.name }}</b-col>
                    <b-col>Tipo de Rota: {{ rota.tipoRota }}</b-col>
                    <b-col>Endere&ccedil;o: {{ rota.endereco }}</b-col>
                    <b-col>Distancia actual: {{ rota.distancia_km }} km's</b-col>
                    <b-col>Data de actualiza&ccedil;&atilde;o: {{ rota.updated_at }}</b-col>
                </b-row>
  
            </b-card-body>
        </div>
    </b-card>
  </div>
</template>

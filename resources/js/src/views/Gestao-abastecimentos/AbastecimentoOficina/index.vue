<template>
  <section class="container-fluid">
    <BCard>
      <BCardHeader class="d-flex justify-content-between">
        <BCardTitle>
          Abastecimentos feitos da oficina
        </BCardTitle>
        <BButton
          variant="primary"
          @click="OpenModal"
        >
          Nova ordem
        </BButton>
      </BCardHeader>
      <BCardBody>
        <BTable
          :fields="CollumnFields"
          primary-key="id"
          :sort-by.sync="sortBy"
          show-empty
          empty-text="Nenhuma ordem listada"
          :sort-desc.sync="isSortDirDesc"
        />
      </BCardBody>
    </BCard>
    <BModal
      ref="my-modal"
      size="lg"
      hide-footer
      title="Criar Ordem de abastecimento"
    >
      <FormOrder
        :form="OrderForm"
        :bombas="bombas"
        :viaturas="viaturas"
      />
    </BModal>
  </section>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle, BModal, BButton, BLink, BDropdownGroup, BDropdownItem, BTable,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ref, onUnmounted } from '@vue/composition-api'
import WorkShopOrders from './index'
import WorkShopModule from './WorkShopModule'
import store from '@/store'
import FormOrder from './FormOrder'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BModal,
    BButton,
    BTable,
    BLink,
    BDropdownGroup,
    BDropdownItem,
    vSelect,
    FormOrder,
  },
  data() {
    return {
      bombas: [],
      ocorrencias: [],
      viaturas: [],
    }
  },
  created() {
    // eslint-disable-next-line no-unused-expressions
    this.$store.dispatch('Supply/listBombas').then(response => {
      this.bombas = response.data
    })

    this.$http.get('/api/listViaturaDentro').then(response => {
      this.viaturas = response.data
    })
  },

  setup() {
    const ORDER_STORE_MODULE_NAME = 'Supply'
    // Register module
    if (!store.hasModule(ORDER_STORE_MODULE_NAME)) { store.registerModule(ORDER_STORE_MODULE_NAME, WorkShopModule) }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(ORDER_STORE_MODULE_NAME)) { store.unregisterModule(ORDER_STORE_MODULE_NAME) }
    })

    const {
      WorkShopTableRef,
      CollumnFields,
      perPage,
      totalOrders,
      currentPage,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      bombasFilter,
      refetchData,
      fetchWorkShopOrder,
    } = WorkShopOrders()

    const formData = {
      ocorrencia_id: null,
      viatura_id: null,
      km_actual: null,
      qtd_actual: 0,
      qtd: 0,
      descricao: '',
      motorista_id: null,
      finalidade: '',
      bombas_id: null,
    }
    const OrderForm = ref(JSON.parse(JSON.stringify(formData)))
    const resetsupplyFormData = () => {
      OrderForm.value = JSON.parse(JSON.stringify(formData))
    }

    function OpenModal() {
      this.$refs['my-modal'].show()

    
    }

    return {
      WorkShopTableRef,
      CollumnFields,
      perPage,
      totalOrders,
      currentPage,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      bombasFilter,
      refetchData,
      fetchWorkShopOrder,
      OpenModal,
      resetsupplyFormData,
      OrderForm,
    
    }
  },
}
</script>

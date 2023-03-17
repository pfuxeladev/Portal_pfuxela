<template>
  <BCard no-body>
    <BRow class="m-1">
      <BCol cols="12">
        <BForm
          ref="form"
          @submit.stop.prevent="handleSubmit"
        >
          <BFormRow>
            <BCol cols="6">
              <BFormGroup label="Selecione a Bomba">
                <BFormSelect>
                  <template #first>
                    <b-form-select-option
                      :value="null"
                      selected
                      disabled
                    >-- Selecione a bomba --</b-form-select-option>
                  </template>
                  <b-form-select-option value="C">
                    Option C
                  </b-form-select-option>
                </BFormSelect>
              </BFormGroup>
            </BCol>
            <BCol cols="6">
              <BFormGroup label="Viatura">
                <v-select />
              </BFormGroup>
            </BCol>
          </BFormRow>
          <BFormRow>
            <BCol cols="6">
              <BFormGroup label="Motorista">
                <v-select />
              </BFormGroup>
            </BCol>
            <BCol cols="6">
              <BFormGroup label="Qtd a abastecer">
                <BFormInput type="number" />
              </BFormGroup>
            </BCol>
          </BFormRow>
          <BFormRow>
            <BCol cols="12">
              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th>Passageiro</th>
                    <th>Destino</th>
                    <th>Justificação</th>
                    <th><i class="fas fa-remove" /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width:30%">
                      <v-select />
                    </td>
                    <td>
                      <BFormInput />
                    </td>
                    <td><BFormTextarea /></td>
                    <td class="text-danger">
                      <a @click="remove(counter)">
                        <i class="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">
                      <a
                        class="btn btn-primary btn-sm"
                        @click="addRow"
                      >
                        <BIconPlus /> add
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </BCol>
          </BFormRow>
          <BFormRow class="d-flex justify-content-between">
            <BCol cols="3">
                <BButton type="reset" variant="secondary">Cancelar</BButton>
            </BCol>
            <BCol cols="3">
              <BButton
                type="submit"
                block
                variant="success"
              >
                Enviar pedido
              </BButton>
            </BCol>
          </BFormRow>
        </BForm>
      </BCol>
    </BRow>
  </BCard>
</template>
<script>
import {
  BCard,
  BRow,
  BForm,
  BFormInput,
  BFormGroup,
  BFormRow,
  BCol,
  BFormSelect,
  BFormSelectOption,
  BFormTextarea,
  BButton,
  BIconPlus,
} from 'bootstrap-vue'
import store from '@/store'
import vSelect from 'vue-select'
import { ref, onUnmounted } from '@vue/composition-api'
import {
  useToast,
} from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import AdministrativeModule from './AdministrativeModule'

export default {
  components: {
    BCard,
    BRow,
    BForm,
    BFormGroup,
    BFormInput,
    BFormRow,
    BFormSelect,
    BFormSelectOption,
    BCol,
    vSelect,
    BFormTextarea,
    BButton,
    BIconPlus,
  },
  setup() {
    const SUPPLY_STORE_MODULE_NAME = 'Supply'

    // Register module
    if (!store.hasModule(SUPPLY_STORE_MODULE_NAME)) {
      store.registerModule(SUPPLY_STORE_MODULE_NAME, AdministrativeModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(SUPPLY_STORE_MODULE_NAME)) {
        store.unregisterModule(SUPPLY_STORE_MODULE_NAME)
      }
    })
    const form = {
      bombas_id: '',
      viatura_id: '',
      motorista_id: '',
      qtd_abastecer: 1,
      previsao_saida: '',
      passenger: [{
        passageiro_id: '',
        destino: '',
        justificacao: '',
      }],
    }
    const errors = ref([])

    const toast = useToast()
    function handleSubmit() {
      store.dispatch('Supply/createAbastecimentoServico', form)
        .then(response => {
          toast({
            component: ToastificationContent,
            props: {
              title: response.data.message,
              icon: 'CheckSquareIcon',
              variant: 'success',
            },
          })
          this.$refs.alocateModal.toggle()
        }).catch(error => {
          if (error.response.status === 421) {
            toast({
              component: ToastificationContent,
              props: {
                title: error.response.data.error,
                icon: 'AlertTriangleIcon',
                variant: 'danger',
              },
            })
          } else if (error.response.status === 422) {
            errors.value = error.response.data.errors
            console.log(errors.value)
            toast({
              component: ToastificationContent,
              props: {
                title: 'Erro ...! Por Favor valide os campos nao preenchidos',
                icon: 'CheckSquareIcon',
                variant: 'danger',
              },
            })
          }
        })
    }

    return {
      form,
      handleSubmit,
    }
  },
}
</script>

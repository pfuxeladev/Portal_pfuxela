<template>
  <div>
    <BForm @submit.prevent="onSubmitOrder">
      <BFormRow>
        <BCol>
          <BFormGroup label="Matricula da viatura">
            <v-select
              v-model="form.viatura_id"
              label="matricula"
              :options="viaturas"
              :reduce="viaturas => viaturas.id"
            />
          </BFormGroup>
        </BCol>
        <BCol>
          <BFormGroup label="Km(actual)">
            <BFormInput v-model="form.km_actual" />
          </BFormGroup>
        </BCol>
      </BFormRow>
      <BFormRow>
        <BCol>
          <BFormGroup label="Qtd existente no tanque">
            <BFormInput v-model="form.qtd_actual" />
          </BFormGroup>
        </BCol>
        <BCol>
          <BFormGroup label="Ocorrencia da viatura">
            <v-select v-model="form.ocorrencia_id" />
          </BFormGroup>
        </BCol>

        <BCol>
          <BFormGroup label="Bombas">
            <v-select
              v-model="form.bombas_id"
              label="nome_bombas"
              :options="bombas"
              :reduce="bombas => bombas.id"
            />

          </BFormGroup>
        </BCol>
      </BFormRow>
      <BFormRow>
        <BCol>
          <BFormGroup label="Qtd a abastecer">
            <BFormInput
              v-model="form.qtd"
              type="number"
            />
          </BFormGroup>
        </BCol>
        <BCol>
          <BFormGroup label="Finalidade">
            <v-select
              v-model="form.finalidade"
              :options="finalidadeOptions"
            />
          </BFormGroup>
        </BCol>
      </BFormRow>
      <BFormRow>
        <BButton
          type="submit"
          variant="success"
        >
          Requisitar
        </BButton>
      </BFormRow>
    </BForm>
  </div>
</template>

<script>
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormRow,
  BCol,
  BButton,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ref, onUnmounted } from '@vue/composition-api'

export default {
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BFormRow,
    BCol,
    BButton,
    vSelect,
  },

  props: {
    form: {
      type: Object,
      default: () => ({}),
    },
    bombas: {
      type: Array,
      default: () => ({}),
    },
    viaturas: {
      type: Array,
      default: () => ({}),
    },
  },
  setup(form) {
    const finalidadeOptions = ['Test Drive', 'Manutencao', 'Reboque']

    function onSubmitOrder() {
      console.log(form)
    }

    function getKmLtr() {
        // this.$http.get('')
    }
    return {
      finalidadeOptions,
      onSubmitOrder,
    }
  },
}
</script>

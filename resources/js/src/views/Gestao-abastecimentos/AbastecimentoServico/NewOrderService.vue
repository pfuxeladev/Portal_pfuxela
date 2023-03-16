<template>
  <div class="invoice-card">
    <b-card no-body>
      <b-card-header class="d-flex justify-content-between">
        <b-card-title>Abastecimento para serviços especiais</b-card-title>
        <b-button variant="outline-primary">
          <BIconChevronBarLeft /> voltar
        </b-button>
      </b-card-header>
      <b-card-body>
        <b-form>
          <b-row class="d-flex flex-container justify-content-between">
            <b-col cols="4">
              <BFormGroup label="Nome do Cliente">
                <BFormInput type="text" />
              </BFormGroup>
              <BFormGroup label="Contacto do Cliente">
                <BFormInput type="text" />
              </BFormGroup>
              <BFormGroup label="Local de Recolha">
                <BFormInput type="text" />
              </BFormGroup>
              <BFormGroup label="Local de chegada">
                <BFormInput type="text" />
              </BFormGroup>
            </b-col>
            <b-col cols="4">
              <BFormGroup label="Hora de partida do local de recolha">
                <BFormInput type="text" />
              </BFormGroup>
              <BFormGroup label="Hora de Chegada ao local">
                <BFormInput type="text" />
              </BFormGroup>
              <BFormGroup label="Bombas de abastecimento">
                <BFormSelect label="Bombas">
                  <BFormSelectOption>Nome Bombas</BFormSelectOption>
                </BFormSelect>
              </BFormGroup>
            </b-col>
          </b-row>
          <BFormRow>
            <BCol cols="4">
              <BFormGroup label="Viaturas">
                <v-select />
              </BFormGroup>
            </BCol>
            <BCol cols="3">
              <BFormGroup label="Qtd existente">
                <BFormInput type="number" />
              </BFormGroup>
            </BCol>
            <BCol cols="3">
              <BFormGroup label="Qtd a abastecer">
                <BFormInput type="number" />
              </BFormGroup>
            </BCol>
            <BCol cols="2">
              <BButton
              class="mt-2"
                sm
                variant="outline-danger"
              >
                <BIconTrash />
              </BButton>
            </BCol>
          </BFormRow>
          <BFormRow>
            <BCol cols="1">
              <BButton variant="primary">
                <BIconPlus />
              </BButton>
            </BCol>
          </BFormRow>
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BCardBody, BCardHeader, BCardTitle, BForm, BFormGroup, BFormInput, BButton, BFormSelect, BFormSelectOption, BRow, BCol, BFormRow, BIconChevronBarLeft,
  BIconTrash, BIconPlus,
} from 'bootstrap-vue'

import vSelect from 'vue-select'

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BFormSelect,
    BFormSelectOption,
    BRow,
    BCol,
    BFormRow,
    BIconChevronBarLeft,
    BIconTrash,
    BIconPlus,
    vSelect,
  },
  data() {
    return {

    }
  },
  methods() {

  },
  setup() {
    const form = {
      viatura_id: null,
      cliente: '',
      contact_cliente: '',

    }

    return {
      form,
    }
  },
}
</script>

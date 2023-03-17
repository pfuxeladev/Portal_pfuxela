<template>
  <div class="invoice-card">
    <b-card no-body>
      <b-card-header class="d-flex justify-content-between">
        <b-card-title>Abastecimento para serviços especiais</b-card-title>
        <b-button variant="outline-primary">
          <BIconChevronLeft /> voltar
        </b-button>
      </b-card-header>
      <hr>
      <h4 class="align-item-center text-center">
        Dados do Cliente
      </h4>
      <hr>
      <b-card-body>
        <b-form>
          <b-row>
            <b-col cols="4">
              <BFormGroup label="Nome do Cliente">
                <BFormInput type="text" />
              </BFormGroup>
              <BFormGroup label="Contacto do Cliente">
                <BFormInput type="text" />
              </BFormGroup>
            </b-col>
            <b-col cols="4">
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
            </b-col>
          </b-row>
          <hr>
          <h4 class="align-item-center text-center">
            Abastecer
          </h4>
          <hr>
          <BFormRow v-for="(abst, counter) in form.abastecimentoDatas" :key="counter">
            <BCol cols="4">
              <BFormGroup label="Bombas">
                <BFormSelect v-model="abst.bombas_id">
                  <BFormSelectOption value="bombas">
                    Nome Bombas
                  </BFormSelectOption>
                </BFormSelect>
              </BFormGroup>
            </BCol>
            <BCol cols="3">
              <BFormGroup label="Viaturas">
                <v-select />
              </BFormGroup>
            </BCol>
            <BCol cols="2">
              <BFormGroup label="Qtd existente">
                <BFormInput type="number" />
              </BFormGroup>
            </BCol>
            <BCol cols="2">
              <BFormGroup label="Qtd a abastecer">
                <BFormInput type="number" />
              </BFormGroup>
            </BCol>
            <BCol
              cols="1"
              class="justify-content-end d-flex"
            >
              <BButton
                class="mt-2"
                size="sm"
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
          <hr>
          <BFormRow class="d-flex justify-content-between flex-container">
            <BCol cols="3">
              <BButton
                variant="secondary"
                @click="voltar"
              >
                Cancelar
              </BButton>
            </BCol>
            <BCol cols="2">
              <BButton block variant="success">
                Enviar pedido
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
  BIconChevronLeft,
  BIconTrash,
  BIconPlus,
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
    BIconChevronLeft,
    BIconTrash,
    BIconPlus,
    vSelect,
  },
  data() {
    return {}
  },
  methods: {
    voltar() {
      this.$router.push({ name: 'For Special Services' })
    },
  },
  setup() {
    const form = {
      name_cliente: '',
      contact_cliente: '',
      pickup_place: '',
      dropoff_place: '',
      pickup_time: '',
      dropoff_time: '',
      // array datas to push ou remove row
      abastecimentoDatas: [{
        viatura_id: null,
        bombas_id: null,
        qtd: 0,
        qtd_existente: 0,
      }],
    }

    return {
      form,
    }
  },
}
</script>

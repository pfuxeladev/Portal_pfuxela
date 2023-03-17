<template>
  <BCard no-body>
    <BRow>
      <BCol cols="12">
        <BForm ref="form" @submit.stop.prevent="handleSubmit">
          <BFormRow>
            <BCol cols="6">
              <BFormGroup label="Selecione a Bomba">
                <BFormSelect>
                  <template #first>
                    <b-form-select-option :value="null" disabled
                      >-- Selecione a bomba --</b-form-select-option
                    >
                  </template>
                  <b-form-select-option value="C">
                    Option C
                  </b-form-select-option>
                </BFormSelect>
              </BFormGroup>
            </BCol>
            <BCol cols="6">
                <BFormGroup label="Viatura">
                    <v-select></v-select>
                </BFormGroup>
            </BCol>
          </BFormRow>
          <BFormRow>
            <BCol cols="6">
                <BFormGroup label="Motorista">
                    <v-select></v-select>
                </BFormGroup>
            </BCol>
            <BCol cols="6">
                <BFormGroup label="Qtd a abastecer">
                    <BFormInput type="number"></BFormInput>
                </BFormGroup>
            </BCol>
          </BFormRow>
          <BFormRow>
            <BCol cols="6">
                <BFormGroup label="Motivos da saida">
                    <BFormInput type="text"></BFormInput>
                </BFormGroup>
            </BCol>
            <BCol cols="6">
                <BFormGroup label="Numero de passageiros a transportar">
                    <BFormInput type="text"></BFormInput>
                </BFormGroup>
            </BCol>
            <BCol cols="6">
                <BFormGroup label="Descrição do expediente">
                    <BFormTextarea placeholder=""/>
                </BFormGroup>
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
  BForm,
  BFormInput,
  BFormGroup,
  BFormRow,
  BCol,
  BFormSelect,
  BFormSelectOption,
  BFormTextarea,
} from "bootstrap-vue";

import vSelect from 'vue-select'

export default {
  components: {
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BFormRow,
    BFormSelect,
    BFormSelectOption,
    BCol,
    vSelect,
    BFormTextarea,
  },
};
</script>

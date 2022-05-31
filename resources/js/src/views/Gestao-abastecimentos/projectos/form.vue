<template>
  <b-form>
<b-row>
    <b-col cols="6">
 <b-form-group aria-label="Nome do projecto" label="Nome do projecto" description="Nome do cliente da pfuxela">
     <b-form-input v-model="form.nome">

     </b-form-input>
 </b-form-group>
    </b-col>
    <b-col cols="6">
<b-form-group>
     <b-form-input></b-form-input>
 </b-form-group>
    </b-col>
    <b-col cols="6">
<b-form-group>
     <b-form-input></b-form-input>
 </b-form-group>
    </b-col>
    <b-col cols="6">
<b-form-group>
     <b-form-input></b-form-input>
 </b-form-group>
    </b-col>
</b-row>
  </b-form>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
  BFormGroup,
  BForm,
} from "bootstrap-vue"
import vSelect from 'vue-select'
import { ref, onUnmounted } from '@vue/composition-api'
export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BForm,
    vSelect,
    BFormGroup,
  },
  data() {
      return {
          form: new Form({
              nome_projecto: '',
              contacto: null,
              contacto_alt: null,
              email: null,
              
          })
      }
  },
};
</script>


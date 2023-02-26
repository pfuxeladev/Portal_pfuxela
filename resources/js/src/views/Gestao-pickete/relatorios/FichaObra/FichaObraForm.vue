<template>
   <div>
    <b-form>
        <b-card-header>
            <b-card-title>Itens a fazer revisao/diagnosticar</b-card-title>
        </b-card-header>
        <b-row>
            <b-col cols="12">
                <validation-provider
                #default="validationContext"
                name="Descricao"
                rules="required"
              >
                <b-form-group label="Descricao">
                    <b-form-textarea
                    v-model="form.descricao"
                    :state="getValidationState(validationContext)"
                    ></b-form-textarea>
                </b-form-group>
            </validation-provider>
            </b-col>
            <b-col cols="12">
                <b-card-title>
                    <h4>Items e diagnostico a executar em plano de trabalho</h4>
                </b-card-title>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col cols="3">item nr 1</b-col>
            <b-col cols="6">
                <b-form-input placeholder="indique a item a revisar ou percorrer o diagnostico"></b-form-input>
            </b-col>
            <b-col cols="3">
                <b-button variant="outline-primary">
                    <i class="fas fa-plus"></i> add
                </b-button>
            </b-col>
        </b-row>
        <table class="table">
            <tbody>
                <tr>
                    <th>Isqueiro</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Chaves de Roda</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Ferramentas de diagnostico</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Livrete</th>
                    <td></td>
                </tr>
                <tr>
                    <th>Combustivel</th>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </b-form>
</div>
</template>
<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BFormInvalidFeedback,
  BButton,
  BTable,
  BLink,
  BBadge,
  BForm,
  BFormGroup,
  BFormTextarea,
} from 'bootstrap-vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required, alphaNum, email } from '@validations';
import formValidation from '@core/comp-functions/forms/form-validation';
import Ripple from 'vue-ripple-directive';
import vSelect from 'vue-select';
import { ref, onUnmounted } from '@vue/composition-api';
import Form from 'vform';
import Cleave from 'vue-cleave-component';
import DatePicker from 'vue2-datepicker';
import storeOcorrenciaModule from './../storeOcorrenciaModules';
import OcorrenciasList from './../index';
import 'vue2-datepicker/index.css';
import { useToast } from 'vue-toastification/composition';
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue';

import store from '@/store';
export default {
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    BTable,
    BLink,
    BBadge,
    // vSelect,
    BForm,
    BFormGroup,
    BFormTextarea,
    // Cleave,
    // DatePicker,
    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      required,
      alphaNum,
      email,
      viaturas: [],
      motoristas: [],
    };
  },
  directives: {
    Ripple,
  },
  setup({ emit }) {
    const PIQUECT_STORE_MODULE_NAME = 'Picket';
    const editMode = false;
    // Register module
    if (!store.hasModule(PIQUECT_STORE_MODULE_NAME)) {
      store.registerModule(PIQUECT_STORE_MODULE_NAME, storeOcorrenciaModule);
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PIQUECT_STORE_MODULE_NAME)) {
        store.unregisterModule(PIQUECT_STORE_MODULE_NAME);
      }
    });
    const form = ref(
      JSON.parse(
        JSON.stringify(
          new Form({}),
        ),
      ),
    )
    const { refFormObserver, getValidationState } = formValidation(form);

    return {
      form,
      refFormObserver,
      getValidationState,
    }
  },
}
</script>

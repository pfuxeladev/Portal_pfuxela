<template>
  <b-card no-body>
    <b-card-body>
      <b-form @submit.prevent="onSubmit">
        <b-row>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Nomes">
              <b-form-input v-model="form.nome"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Apelido">
              <b-form-input v-model="form.apelido"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Data de nascimento">
              <b-form-datepicker
                v-model="form.data_nascimento"
                :min="min"
                :max="max"
                value-type="format"
                format="YYYY-MM-DD"
                locale="pt"
              ></b-form-datepicker>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="NUIT">
              <b-form-input v-model="form.NUIT"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Endereço">
              <b-form-input v-model="form.endereco"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Gênero">
              <v-select v-model="form.genero" :options="['M', 'F']"></v-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Cargo">
              <b-form-input v-model="form.cargo"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="ID da Carta de Condução">
              <b-form-input v-model="form.cartaConducao"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Documento Adicional">
              <v-select
                v-model="form.doc_type"
                :options="[
                  'BI',
                  'Passaporte',
                  'Cedula pessoal',
                  'DIRE',
                  'Cedula Militar',
                ]"
              ></v-select>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Nr do Documento">
              <b-form-input v-model="form.nr_documento"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Contacto">
              <b-input-group>
                <b-input-group-prepend is-text>
                  MZ (+258)
                </b-input-group-prepend>
                <b-form-input
                  id="phone"
                  type="tel" v-model="form.contacto"
                  :raw="false"
                  :options="options.phone"
                  placeholder="1234 567 8900"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="4" lg="4">
            <b-form-group label="Contacto Alternativo">
              <b-input-group>
                <b-input-group-prepend is-text>
                  MZ (+258)
                </b-input-group-prepend>
                <b-form-input
                  id="phone2"
                  type="tel" v-model="form.contacto_alt"
                  :raw="false"
                  :options="options.phone"
                  placeholder="1234 567 8900"
                />
              </b-input-group>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="4">
            <b-button type="submit" variant="outline-primary"
              >cadastrar</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BFormGroup,
  BButton,
  BTable,
  BLink,
  BBadge,
  BCardBody,
  BForm,
  BFormDatepicker,
  BInputGroup,
  BInputGroupPrepend,
} from 'bootstrap-vue';
import vSelect from 'vue-select';
import { ref, onUnmounted } from '@vue/composition-api'

import Form from 'vform'

import store from '@/store'



import storeMotoristaModule from './storeMotoritaModules'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  data() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    // 15th two months prior
    const minDate = new Date(today);
    minDate.setFullYear(minDate.getFullYear() - 80);
    minDate.setDate(15);
    // 15th in two months
    const maxDate = new Date(today);
    maxDate.setFullYear(maxDate.getFullYear() - 20);
    maxDate.setDate(15);

    return {
      value: '',
      min: minDate,
      max: maxDate,
    };
  },
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BLink,
    BBadge,
    BCardBody,
    BForm,
    BFormGroup,
    vSelect,
    BFormDatepicker,
    BInputGroup,
    BInputGroupPrepend,
  },
  setup(props) {
    const PIQUECT_STORE_MODULE_NAME = 'Picket'

    if (!store.hasModule(PIQUECT_STORE_MODULE_NAME)) store.registerModule(PIQUECT_STORE_MODULE_NAME, storeMotoristaModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(PIQUECT_STORE_MODULE_NAME)) store.unregisterModule(PIQUECT_STORE_MODULE_NAME)
    })

    const toast = useToast()

    const form = ref(
      JSON.parse(
        JSON.stringify(
          new Form({
            id: null,
            nome: '',
            apelido: '',
            NUIT: null,
            endereco: '',
            genero: '',
            cargo: '',
            cartaConducao: '',
            doc_type: '',
            data_nascimento: null,
            // eslint-disable-next-line comma-dangle
            contacto: null,
            contacto_alt: null,
            nr_documento: '',
          }),
        ),
      ),
    )
    // const driverData = ref(JSON.parse(JSON.stringify(form)))
    const options = [
      {
        phone: {
          phone: true,
          phoneRegionCode: 'MZ',
        },
      },
    ]
    const resetdriverData = () => {
      form.value = JSON.parse(JSON.stringify(form))
    }

    function onSubmit() {
      store.dispatch('Picket/addDriver', form.value).then(response => {
        toast({
          component: ToastificationContent,
          props: {
            title: response.data.message,
            icon: 'CheckSquareIcon',
            variant: 'success',
          },
        })
        this.$router.push({ name: 'Drivers' })
      }).catch(err => {
        if (err) {
          toast({
            component: ToastificationContent,
            props: {
              title: 'Erro no cadastro do motorista verifique os campos',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        }
      })
    }
    return {
      onSubmit,
      form,
      options,
    };
  },
};
</script>

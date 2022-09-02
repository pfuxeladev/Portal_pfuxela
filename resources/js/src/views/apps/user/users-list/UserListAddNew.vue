<template>
  <b-sidebar
    id="add-new-user-sidebar"
    :visible="isAddNewUserSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div
        class="
          d-flex
          justify-content-between
          align-items-center
          content-sidebar-header
          px-2
          py-1
        "
      >
        <h5 class="mb-0">Add New User</h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />
      </div>

      <!-- BODY -->
      <validation-observer #default="{ handleSubmit }" ref="refFormObserver">
        <!-- Form -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
        >
          <!-- Nome completo -->
          <validation-provider
            #default="validationContext"
            name="Nome completo"
            rules="required"
          >
            <b-form-group label="Nome completo" label-for="full-name">
              <b-form-input
                id="full-name"
                v-model="userData.nome_completo"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder="John Doe"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Username -->
          <validation-provider
            #default="validationContext"
            name="Username"
            rules="required|alpha-num"
          >
            <b-form-group label="Username" label-for="username">
              <b-form-input
                id="username"
                v-model="userData.username"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Email -->
          <validation-provider
            #default="validationContext"
            name="Email"
            rules="required|email"
          >
            <b-form-group label="Email" label-for="email">
              <b-form-input
                id="email"
                v-model="userData.email"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- departamento -->
          <validation-provider
            #default="validationContext"
            name="Contacto"
            rules="required"
          >
            <b-form-group label="Contacto" label-for="contacto">
              <b-form-input
                id="contacto"
                v-model="userData.contacto"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
            <validation-provider
            #default="validationContext"
            name="Empresa"
            rules="required"
          >
            <b-form-group
              label="Empresa"
              label-for="empresa"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.empresa"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="nome_empresa"
                :options="empresas"
                :reduce="empresas => empresas.id"
                :clearable="false"
                input-id="empresa"
              />
              <b-form-invalid-feedback
                :state="getValidationState(validationContext)"
              >
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Country -->
          <validation-provider
            #default="validationContext"
            name="Departamento"
            rules="required"
          >
            <b-form-group
              label="Departamento"
              label-for="departamento"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.departamento"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="nome"
                :options="departamentos"
                :reduce="departamentos => departamentos.id"
                :clearable="false"
                input-id="departamento"
              />
              <b-form-invalid-feedback
                :state="getValidationState(validationContext)"
              >
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- User Role -->
          <validation-provider
            #default="validationContext"
            name="Função"
            rules="required"
          >
            <b-form-group
              label="Função"
              label-for="user-role"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.role"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="name"
                :options="roles"
                :reduce="(roles) => roles.name"
                :clearable="false"
                input-id="user-role"
              />
              <b-form-invalid-feedback
                :state="getValidationState(validationContext)"
              >
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
  <!-- departamento -->
          <validation-provider
            #default="validationContext"
            name="password"
            rules="required"
          >
            <b-form-group label="password" label-for="password">
              <b-form-input
                id="password"
                type="password"
                v-model="userData.password"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
            >
              Cancel
            </b-button>
          </div>
        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import {
  BSidebar,
  BForm,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
  BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { ref } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import Form from 'vform'
import countries from '@/@fake-db/data/other/countries'
import store from '@/store'
export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-user-sidebar-active',
  },
  props: {
    isAddNewUserSidebarActive: {
      type: Boolean,
      required: true,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    planOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      empresas: [],
      departamentos: [],
      roles: [],
      required,
      alphaNum,
      email,
      countries,
    }
  },
  created() {
    this.fetchEmpresa()
    this.fetchDepartamento()
    this.getRoles()
  },
  methods: {
    fetchEmpresa() {
      this.$http.get('/api/listEmpresa').then(response => {
        this.empresas = response.data
      })
    },
    fetchDepartamento() {
      this.$http.get('/api/listDeps').then(response => {
        this.departamentos = response.data
      })
    },
    getRoles() {
      this.$http.get('/api/roles').then(res => {
        this.roles = res.data
      })
    },
  },
  setup(props, { emit }) {
    const form = new Form({
      nome_completo: '',
      username: '',
      email: '',
      role: null,
      departamento: '',
      contacto: '',
      empresa: '',
      password: '',
    })

    const userData = ref(JSON.parse(JSON.stringify(form)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(form))
    }

    const onSubmit = () => {
      store.dispatch('app-user/addUser', userData.value).then(() => {
        emit('refetch-data')
        emit('update:is-add-new-user-sidebar-active', false)
      })
    }

    const { refFormObserver, getValidationState, resetForm } = formValidation(resetuserData)

    return {
      userData,
      onSubmit,
      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
</style>

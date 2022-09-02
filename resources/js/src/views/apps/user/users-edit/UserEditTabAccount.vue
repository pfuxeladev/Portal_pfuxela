<template>
  <div>
<<<<<<< HEAD
=======

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
          ref="previewEl"
          :src="userData.avatar"
          :text="avatarText(userData.fullName)"
          :variant="`light-${resolveUserRoleVariant(userData.role)}`"
          size="90px"
          rounded
        />
      </template>
      <h4 class="mb-1">
        {{ userData.fullName }}
      </h4>
      <div class="d-flex flex-wrap">
<<<<<<< HEAD
        <b-button variant="primary" @click="$refs.refInputEl.click()">
=======
        <b-button
          variant="primary"
          @click="$refs.refInputEl.click()"
        >
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
          <input
            ref="refInputEl"
            type="file"
            class="d-none"
            @input="inputImageRenderer"
<<<<<<< HEAD
          />
          <span class="d-none d-sm-inline">actualizar</span>
          <feather-icon icon="EditIcon" class="d-inline d-sm-none" />
        </b-button>
        <b-button variant="outline-secondary" class="ml-1">
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon icon="TrashIcon" class="d-inline d-sm-none" />
=======
          >
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon
            icon="EditIcon"
            class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
          variant="outline-secondary"
          class="ml-1"
        >
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon
            icon="TrashIcon"
            class="d-inline d-sm-none"
          />
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
        </b-button>
      </div>
    </b-media>

    <!-- User Info: Input Fields -->
<<<<<<< HEAD
    <b-form @submit.prevent="updateUser">
      <b-row>
        <!-- Field: Username -->
        <b-col cols="12" md="4">
          <b-form-group label="Username" label-for="username">
            <b-form-input id="username" v-model="userData.name" />
=======
    <b-form>
      <b-row>

        <!-- Field: Username -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Username"
            label-for="username"
          >
            <b-form-input
              id="username"
              v-model="userData.username"
            />
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
<<<<<<< HEAD
        <b-col cols="12" md="4">
          <b-form-group label="Name" label-for="full-name">
            <b-form-input
              id="full-name"
              v-model="userData.person.nome_completo"
=======
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Name"
            label-for="full-name"
          >
            <b-form-input
              id="full-name"
              v-model="userData.fullName"
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
<<<<<<< HEAD
        <b-col cols="12" md="4">
          <b-form-group label="Email" label-for="email">
            <b-form-input id="email" v-model="userData.email" type="email" />
=======
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="userData.email"
              type="email"
            />
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
          </b-form-group>
        </b-col>

        <!-- Field: Status -->
<<<<<<< HEAD
        <b-col cols="12" md="4">
          <b-form-group label="Status" label-for="user-status">
            <v-select
              v-model="userData.is_active"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="statusOptions"
              :reduce="(statusOptions) => statusOptions.id"
=======
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Status"
            label-for="user-status"
          >
            <v-select
              v-model="userData.status"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="statusOptions"
              :reduce="val => val.value"
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
              :clearable="false"
              input-id="user-status"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Role -->
<<<<<<< HEAD
        <b-col cols="12" md="4">
          <b-form-group label="User Role" label-for="user-role">
            <v-select
              v-model="userData.role_id"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              label="name"
              :options="roleOptions"
              :reduce="(roleOptions) => roleOptions.id"
=======
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="User Role"
            label-for="user-role"
          >
            <v-select
              v-model="userData.role"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="roleOptions"
              :reduce="val => val.value"
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
              :clearable="false"
              input-id="user-role"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
<<<<<<< HEAD
        <b-col cols="12" md="4">
          <b-form-group label="Company" label-for="company">
            <b-form-input id="company" v-model="userData.departamento.nome" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <!-- PERMISSION TABLE -->
          <b-card no-body class="border mt-1">
            <b-card-header class="p-1">
              <b-card-title class="font-medium-2">
                <feather-icon icon="LockIcon" size="18" />
                <span class="align-middle ml-50">Permission</span>
                <!-- {{userData.roles[0].permissions}} -->
              </b-card-title>
            </b-card-header>
            <b-row>
              <b-col
                v-for="(p, i) in permissionsData"
                :key="i"
                cols="3"
                class="mb-1"
              >

                <b-form-checkbox
                  v-model="userData.permissions"
                  v-bind:value="p"
                >
                  {{ p.name }}
                </b-form-checkbox>
              </b-col>
            </b-row>
          </b-card>

          <!-- Action Buttons -->
          <b-button
            variant="primary"
            class="mb-1 mb-sm-0 mr-0 mr-sm-1"
            type="submit"
            :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          >
            Salvar mudan&ccedil;as
          </b-button>
          <b-button
            variant="outline-secondary"
            type="reset"
            :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
=======
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Company"
            label-for="company"
          >
            <b-form-input
              id="company"
              v-model="userData.company"
            />
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>

    <!-- PERMISSION TABLE -->
    <b-card
      no-body
      class="border mt-1"
    >
      <b-card-header class="p-1">
        <b-card-title class="font-medium-2">
          <feather-icon
            icon="LockIcon"
            size="18"
          />
          <span class="align-middle ml-50">Permission</span>
        </b-card-title>
      </b-card-header>
      <b-table
        striped
        responsive
        class="mb-0"
        :items="permissionsData"
      >
        <template #cell(module)="data">
          {{ data.value }}
        </template>
        <template #cell()="data">
          <b-form-checkbox :checked="data.value" />
        </template>
      </b-table>
    </b-card>

    <!-- Action Buttons -->
    <b-button
      variant="primary"
      class="mb-1 mb-sm-0 mr-0 mr-sm-1"
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
    >
      Save Changes
    </b-button>
    <b-button
      variant="outline-secondary"
      type="reset"
      :block="$store.getters['app/currentBreakPoint'] === 'xs'"
    >
      Reset
    </b-button>
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
  </div>
</template>

<script>
import {
  BButton,
  BMedia,
  BAvatar,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BTable,
  BCard,
  BCardHeader,
  BCardTitle,
  BFormCheckbox,
} from 'bootstrap-vue'
<<<<<<< HEAD
import Form from 'vform'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { useToast } from "vue-toastification/composition";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { ref, onUnmounted } from '@vue/composition-api'
import userStoreModule from '../userStoreModule'
import router from '@/router'
import store from '@/store'
=======
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
import useUsersList from '../users-list/useUsersList'

export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    vSelect,
  },
  props: {
    userData: {
      type: Object,
      required: true,
<<<<<<< HEAD
      permissions: [{
        id: null,
        name: '',
      }],
    },
  },
  created() {
    this.getRoles()
    this.getPermissions()
  },
  setup(props) {
    const { resolveUserRoleVariant } = useUsersList()
    const toast = useToast()
    const roleOptions = [
      {
        name: '',
        id: null,
      },
    ]

    const statusOptions = [
      {
        label: 'Active',
        value: true,
      },
      {
        label: 'Inactive',
        value: false,
      },
    ]

    const permissionsData = ref(null)
=======
    },
  },
  setup(props) {
    const { resolveUserRoleVariant } = useUsersList()

    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
      { label: 'Editor', value: 'editor' },
      { label: 'Maintainer', value: 'maintainer' },
      { label: 'Subscriber', value: 'subscriber' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

    const permissionsData = [
      {
        module: 'Admin',
        read: true,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'Staff',
        read: false,
        write: true,
        create: false,
        delete: false,
      },
      {
        module: 'Author',
        read: true,
        write: false,
        create: true,
        delete: false,
      },
      {
        module: 'Contributor',
        read: false,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'User',
        read: false,
        write: false,
        create: false,
        delete: true,
      },
    ]
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

    // ? Demo Purpose => Update image on click of update
    const refInputEl = ref(null)
    const previewEl = ref(null)

<<<<<<< HEAD
    const { inputImageRenderer } = useInputImageRenderer(
      refInputEl,
      (base64) => {
        // eslint-disable-next-line no-param-reassign
        props.userData.avatar = base64
      }
    )

    function getRoles() {
      this.$http.get('/api/roles').then((res) => {
        this.roleOptions = res.data
      })
    }

    function getPermissions() {
      this.$http.get('/api/permissions').then((response) => {
        this.permissionsData = response.data
      })
    }
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    function updateUser() {
      this.$http.put(`/api/users/${router.currentRoute.params.id}`, this.userData)
        .then(response => {
        toast({
            component: ToastificationContent,
            props: {
              title: response.data.success,
              icon: "CheckSquareIcon",
              variant: "success",
            },
          })
         })
        .catch(error => {
          if (error.response.status === 404) {
            toast({
              component: ToastificationContent,
              props: {
                title: error.response.data.erro,
                icon: "AlertTriangleIcon",
                variant: "danger",
              },
            })
          }
        })
    }
    return {
      getRoles,
      getPermissions,
=======
    const { inputImageRenderer } = useInputImageRenderer(refInputEl, base64 => {
      // eslint-disable-next-line no-param-reassign
      props.userData.avatar = base64
    })

    return {
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
      resolveUserRoleVariant,
      avatarText,
      roleOptions,
      statusOptions,
      permissionsData,
<<<<<<< HEAD
=======

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
      //  ? Demo - Update Image on click of update button
      refInputEl,
      previewEl,
      inputImageRenderer,
<<<<<<< HEAD
      updateUser,
      form: new Form({
        username: '',
        nome_completo: '',
        role_id: '',
        permissions: '',
      }),
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    }
  },
}
</script>

<style lang="scss">
<<<<<<< HEAD
@import "~@core/scss/vue/libs/vue-select.scss";
=======
@import '~@core/scss/vue/libs/vue-select.scss';
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
</style>

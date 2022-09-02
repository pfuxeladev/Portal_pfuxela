<template>
  <b-card>

    <b-row>

      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="6"
        class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="userData.avatar"
            :text="avatarText(userData.fullName)"
            :variant="`light-${resolveUserRoleVariant(userData.role)}`"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ userData.fullName }}
              </h4>
              <span class="card-text">{{ userData.email }}</span>
            </div>
            <div class="d-flex flex-wrap">
              <b-button
                :to="{ name: 'apps-users-edit', params: { id: userData.id } }"
                variant="primary"
              >
                Edit
              </b-button>
<<<<<<< HEAD
=======
              <b-button
                variant="outline-danger"
                class="ml-1"
              >
                Delete
              </b-button>
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            </div>
          </div>
        </div>

        <!-- User Stats -->
        <div class="d-flex align-items-center mt-2">
          <div class="d-flex align-items-center mr-2">
            <b-avatar
              variant="light-primary"
              rounded
            >
              <feather-icon
                icon="DollarSignIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                23.3k
              </h5>
<<<<<<< HEAD
              <small>Ordens Mensais</small>
=======
              <small>Monthly Sales</small>
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            </div>
          </div>

          <div class="d-flex align-items-center">
            <b-avatar
              variant="light-success"
              rounded
            >
              <feather-icon
                icon="TrendingUpIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                $99.87k
              </h5>
<<<<<<< HEAD
              <small>Ordens Mensais(MT)</small>
=======
              <small>Annual Profit</small>
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            </div>
          </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Username</span>
            </th>
            <td class="pb-50">
<<<<<<< HEAD
              {{ userData.name }}
=======
              {{ userData.username }}
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CheckIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Status</span>
            </th>
            <td class="pb-50 text-capitalize">
<<<<<<< HEAD
                <span v-if="userData.is_active === 0">Inactivo</span>
                <span v-else>
                    Activo
                </span>
=======
              {{ userData.status }}
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="StarIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Role</span>
            </th>
<<<<<<< HEAD
            <td class="pb-50 text-capitalize" v-for="(role, r) in userData.roles" :key="'r'+r">
              {{ role.name }}
=======
            <td class="pb-50 text-capitalize">
              {{ userData.role }}
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
<<<<<<< HEAD
              <span class="font-weight-bold">departamento</span>
            </th>
            <td class="pb-50">
              {{ userData.departamento.nome }}
=======
              <span class="font-weight-bold">Country</span>
            </th>
            <td class="pb-50">
              {{ userData.country }}
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            </td>
          </tr>
          <tr>
            <th>
              <feather-icon
                icon="PhoneIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">Contact</span>
            </th>
            <td>
              {{ userData.contact }}
            </td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import useUsersList from '../users-list/useUsersList'

export default {
  components: {
    BCard, BButton, BRow, BCol, BAvatar,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveUserRoleVariant } = useUsersList()
    return {
      avatarText,
      resolveUserRoleVariant,
    }
  },
}
</script>

<style>

</style>

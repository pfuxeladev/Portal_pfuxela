<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title>Permissions</b-card-title>
      <b-card-sub-title>Permission according to roles</b-card-sub-title>
    </b-card-body>
    <b-table
      striped
      responsive
<<<<<<< HEAD
      :items="rolesData"
      :fields="permissionsData"
      class="mb-0"
    >

      <template #cell(name)="data">
        {{ data.item.name }}
      </template>
      <template #cell(permissions)="data">
        <span v-for="(p, i) in data.item.permissions" :key="'i'+i">
        <b-badge class="ml-1" variant="success">{{p.name}}</b-badge>
        </span>
=======
      :items="permissionsData"
      class="mb-0"
    >

      <template #cell(module)="data">
        {{ data.value }}
      </template>
      <template #cell()="data">
        <b-form-checkbox
          disabled
          :checked="data.value"
        />
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
      </template>

    </b-table>
  </b-card>
</template>

<script>
import {
<<<<<<< HEAD
  BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox, BBadge
} from 'bootstrap-vue'
import useUsersList from '../users-list/useUsersList'
export default {
  components: {
    BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox, BBadge
  },
  props: {
    rolesData: {
      type: Object,
      required: true,
      permissions: {
        type: Object,
        required: true,
      },
    },
  },
  setup() {
    const permissionsData = [
      { key: 'name', sortable: true },
      {
        key: 'permissions',
        permissions: [{
          key: 'name', sortable: true,
        }],
        sortable: false,
      },
    ]
    const { resolveUserRoleVariant } = useUsersList()
    return {
      permissionsData,
      resolveUserRoleVariant,
=======
  BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
  },
  setup() {
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

    return {
      permissionsData,
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    }
  },
}
</script>

<style>

</style>

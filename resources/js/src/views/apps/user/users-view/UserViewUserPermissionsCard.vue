<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title>Permiss&otilde;s</b-card-title>
      <b-card-sub-title>Permiss&otilde;s de acordo com as fun&ccedil;&otilde;s</b-card-sub-title>
    </b-card-body>
    <b-table
      striped
      responsive
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
      </template>

    </b-table>
  </b-card>
</template>

<script>
import {
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
    }
  },
}
</script>

<style>

</style>

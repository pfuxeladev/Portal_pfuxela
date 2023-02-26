<template>
  <b-card
    v-if="tableData"
    no-body
    class="card-company-table"
  >
    <b-card-title class="pl-3 mt-2">Lista das reservas rec&eacute;m feitas</b-card-title>
    <b-table
      :items="tableData"
      responsive
      :fields="fields"
      class="mb-0"
    >
      <!-- company -->
      <template #cell(company)="data">
        <div class="d-flex align-items-center">
          <b-avatar
            rounded
            size="32"
            variant="light-company"
          >
            <b-img
              :src="data.item.avatarImg"
              alt="avatar img"
            /></b-avatar>
          <div>
            <div class="font-weight-bolder">
              {{ data.item.title }}
            </div>
            <div class="font-small-2 text-muted">
              {{ data.item.subtitle }}
            </div>
          </div>
        </div>
      </template>

      <!-- category -->
      <template #cell(category)="data">
        <div class="d-flex align-items-center">
          <b-avatar
            class="mr-1"
            :variant="data.item.avatarColor"
          >
            <feather-icon
              size="18"
              :icon="data.item.avatarIcon"
            />
          </b-avatar>
          <span>{{ data.item.avatarTitle }}</span>
        </div>
      </template>

      <!-- views -->
      <template #cell(views)="data">
        <div class="d-flex flex-column">
          <span class="font-weight-bolder mb-25">{{ data.item.viewTitle }}</span>
          <span class="font-small-2 text-muted text-nowrap">{{ data.item.viewsub }}</span>
        </div>
      </template>

      <!-- revenue -->
      <template #cell(revenue)="data">
        {{ '$'+data.item.revenue }}
      </template>

      <!-- sales -->
      <template #cell(sales)="data">
        <div class="d-flex align-items-center">
          <span class="font-weight-bolder mr-1">{{ data.item.sales+'%' }}</span>
          <feather-icon
            :icon="data.item.loss ? 'TrendingDownIcon':'TrendingUpIcon'"
            :class="data.item.loss ? 'text-danger':'text-success'"
          />
        </div>
      </template>
    </b-table>
  </b-card>
</template>

<script>
import {
  BCard, BTable, BAvatar, BImg, BCardTitle,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardTitle,
    BTable,
    BAvatar,
    BImg,
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      fields: [
        { key: 'Cliente', label: 'Cliente' },
        { key: 'Viaturas', label: 'Viaturas' },
        { key: 'Nr_Pessoas', label: 'Nr_Pessoas' },
        { key: 'Total_pago', label: 'Total_pago' },
        { key: 'Data_reserva', label: 'Data_reserva' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
  .dark-layout & {
    background: $theme-dark-body-bg !important;
  }
}
</style>

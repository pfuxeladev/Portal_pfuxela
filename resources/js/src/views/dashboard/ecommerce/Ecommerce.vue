<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col xl="4" md="6">
        <ecommerce-medal :data="data.congratulations" />
      </b-col>
      <b-col xl="8" md="6">
        <ecommerce-statistics :data="data.statisticsItems" />
      </b-col>
    </b-row>
    <Brow>
      <BCol cols="12" md="10" sm="6" lg="12">
        <BCard>
          <h3
            class="card-title"
            style="display: flex; flex-direction: column; align-items: center"
          >
            Consumo Semanal de Combustivel nas Bombas no intervalo de {{ lastWeek }} at&eacute; {{ currentDate }}
          </h3>
        </BCard>
      </BCol>
    </Brow>
    <BRow>
      <BCol
        v-for="(bomb, lindex) in data.bombas"
        :key="bomb"
        lg="3"
        md="3"
        cols="6"
      >
        <BCard no-body>
          <BCardHeader>Bombas Nr: {{ 1 + lindex }}</BCardHeader>
          <BCardBody>
            <b-media no-body>
              <b-media-aside class="mr-2">
                <b-avatar size="48" variant="primary">
                  <feather-icon size="24" icon="BarChart2Icon" />
                </b-avatar>
              </b-media-aside>
              <b-media-body class="my-auto">
                <h4 class="font-weight-bolder mb-0">
                  {{ bomb.bombas }}
                </h4>
                <b-card-text class="font-small-3 mb-0">
                  {{ bomb.qtd }} lt's
                </b-card-text>
              </b-media-body>
            </b-media>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <table-by-routes />
      </BCol>
    </BRow>
    <b-row class="match-height">
      <b-col lg="4">
        <b-row class="match-height">
          <!-- Bar Chart - Orders -->
          <b-col lg="6" md="3" cols="6">
            <ecommerce-order-chart :data="data.statisticsOrder" />
          </b-col>
          <!--/ Bar Chart - Orders -->
          <b-col lg="6" md="3" cols="6">
            <ecommerce-profit-chart :data="data.statisticsProfit" />
          </b-col>
          <b-col lg="12" md="6" />
        </b-row>
      </b-col>

      <!-- Revenue Report Card -->
      <b-col lg="8">
        <ecommerce-revenue-report :data="data.revenue" />
      </b-col>
      <!--/ Revenue Report Card -->
    </b-row>

    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="12">
        <ecommerce-company-table :table-data="data.companyTable" />
      </b-col>
      <!--/ Company Table Card -->
    </b-row>
  </section>
</template>

<script>
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BCardHeader,
  BCardText,
  BButton,
  BMedia,
  BMediaAside,
  BAvatar,
  BMediaBody,
} from "bootstrap-vue";

import { BarChart2Icon, BarChartIcon } from "vue-feather-icons";
import { getUserData } from "@/auth/utils";
import EcommerceMedal from "./EcommerceMedal.vue";
import EcommerceStatistics from "./EcommerceStatistics.vue";
import EcommerceRevenueReport from "./EcommerceRevenueReport.vue";
import EcommerceOrderChart from "./EcommerceOrderChart.vue";
import EcommerceProfitChart from "./EcommerceProfitChart.vue";
import EcommerceCompanyTable from "./EcommerceCompanyTable.vue";
import TableByRoutes from './TableByRoutes.vue'
// import BombasCharts from './BombasCharts.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardText,
    BMedia,
    BMediaAside,
    BAvatar,
    BMediaBody,
    BCardHeader,
    EcommerceMedal,
    EcommerceStatistics,
    EcommerceRevenueReport,
    EcommerceOrderChart,
    EcommerceProfitChart,
    EcommerceCompanyTable,
    // BombasCharts,
    TableByRoutes,
  },
  data() {
    return {
      data: {},
      lastOrders: {},
    };
  },
  created() {
    this.$http.get("/api/dashboard").then((response) => {
      this.data = response.data;
      console.log(this.data);
      // ? Your API will return name of logged in user or you might just directly get name of logged in user
      const userData = getUserData();
      this.data.congratulations.name =
        userData[0].name.split(" ")[0] || userData[0].email;
    });
    this.$http.get("/api/LastFuelOrderSupplies").then((response) => {
      this.lastOrders = response.data;
    });
  },
  setup() {
    const date = new Date()
    const lastWeek = new Date(new Date(date).setDate(date.getDate() - 7)).toLocaleDateString('en')

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    // This arrangement can be altered based on how we want the date's format to appear.
    // const currentDate = `${day}-${month}-${year}`
    const currentDate = date.toLocaleDateString('en')


    return {
      date,
      currentDate,
      lastWeek,
    };
  },
};
</script>

<style lang="scss">
@import "~@core/scss/vue/pages/dashboard-ecommerce.scss";
@import "~@core/scss/vue/libs/chart-apex.scss";
</style>

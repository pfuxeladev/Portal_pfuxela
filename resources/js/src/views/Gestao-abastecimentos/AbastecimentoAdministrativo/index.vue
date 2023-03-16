<template>
  <div class="container-fluid">
    <BCard no-wrap>
      <BCardHeader class="d-flex justify-content-between flex-row">
        <BCardTitle
          ><BIconList /> Lista de abastecimento feitos para serviços
          administrativos</BCardTitle
        >
        <BButton variant="primary"> Abrir novo abastecimento </BButton>
      </BCardHeader>
      <BCardBody>
        <BTable responsive :fields="FieldColumn" />
      </BCardBody>
    </BCard>
  </div>
</template>
<script>
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCardTitle,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BModal,
  BButton,
  BLink,
  BIconList,
  BTable,
} from "bootstrap-vue";
import vSelect from "vue-select";
import AdministrativeService from "./index";
import { ref, onUnmounted } from "@vue/composition-api";
import store from "@/store";

export default {
  components: {
    BCard,
    BCardBody,
    BCardHeader,
    BCardTitle,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BModal,
    BButton,
    BLink,
    vSelect,
    BIconList,
    BTable,
  },
  setup(props) {
    const {
      AdministrativeTableRef,
      FieldColumn,
      perPage,
      dataMeta,
      perPageOptions,
      sortBy,
      isSortDirDesc,
      bombasFilter,
    } = AdministrativeService()

    return {
      AdministrativeTableRef,
      FieldColumn,
      perPage,
      dataMeta,
      perPageOptions,
      sortBy,
      isSortDirDesc,
      bombasFilter,
      AdministrativeService,
    }
  },
};
</script>

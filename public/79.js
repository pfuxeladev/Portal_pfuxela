(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _relatorio_saida_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorio_saida.vue */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue");
/* harmony import */ var _relatorio_entrada_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./relatorio_entrada.vue */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTab"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_3___default.a,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    relatorioSaida: _relatorio_saida_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    relatorioEntrada: _relatorio_entrada_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var PIQUECT_STORE_MODULE_NAME = 'Picket';
    var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(null);
    return {
      searchQuery: searchQuery
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _relatorioOcorrencia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relatorioOcorrencia */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js");
/* harmony import */ var _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storaRelatorioModule */ "./resources/js/src/views/Gestao-pickete/relatorios/storaRelatorioModule.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  setup: function setup() {
    var ENTRADAS_STORE_MODULE_NAME = 'Picket'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_6__["default"].hasModule(ENTRADAS_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_6__["default"].registerModule(ENTRADAS_STORE_MODULE_NAME, _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_5__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_6__["default"].hasModule(ENTRADAS_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_6__["default"].unregisterModule(ENTRADAS_STORE_MODULE_NAME);
    });

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(value).format('DD/MM/YYYY hh:mm');
    }

    var _useOcorrenciaList = Object(_relatorioOcorrencia__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        fetchEntradas = _useOcorrenciaList.fetchEntradas,
        tableColumns1 = _useOcorrenciaList.tableColumns1,
        perPage1 = _useOcorrenciaList.perPage1,
        currentPage1 = _useOcorrenciaList.currentPage1,
        totalEntradas = _useOcorrenciaList.totalEntradas,
        dataMeta2 = _useOcorrenciaList.dataMeta2,
        perPageOptions = _useOcorrenciaList.perPageOptions,
        searchQuery = _useOcorrenciaList.searchQuery,
        sortBy = _useOcorrenciaList.sortBy,
        isSortDirDesc = _useOcorrenciaList.isSortDirDesc,
        refEntradasTableList = _useOcorrenciaList.refEntradasTableList,
        refetchData1 = _useOcorrenciaList.refetchData1,
        rotaFilter = _useOcorrenciaList.rotaFilter;

    return {
      fetchEntradas: fetchEntradas,
      tableColumns1: tableColumns1,
      perPage1: perPage1,
      currentPage1: currentPage1,
      totalEntradas: totalEntradas,
      dataMeta2: dataMeta2,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      refEntradasTableList: refEntradasTableList,
      refetchData1: refetchData1,
      rotaFilter: rotaFilter,
      dateTime: dateTime
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _relatorioOcorrencia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relatorioOcorrencia */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js");
/* harmony import */ var _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storaRelatorioModule */ "./resources/js/src/views/Gestao-pickete/relatorios/storaRelatorioModule.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  setup: function setup() {
    var SAIDAS_STORE_MODULE_NAME = 'Picket'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_6__["default"].hasModule(SAIDAS_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_6__["default"].registerModule(SAIDAS_STORE_MODULE_NAME, _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_5__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_6__["default"].hasModule(SAIDAS_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_6__["default"].unregisterModule(SAIDAS_STORE_MODULE_NAME);
    });

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_3___default()(value).format('DD/MM/YYYY hh:mm');
    }

    var _useOcorrenciaList = Object(_relatorioOcorrencia__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        fetchSaidas = _useOcorrenciaList.fetchSaidas,
        tableColumns = _useOcorrenciaList.tableColumns,
        perPage = _useOcorrenciaList.perPage,
        currentPage = _useOcorrenciaList.currentPage,
        totalSaidas = _useOcorrenciaList.totalSaidas,
        dataMeta = _useOcorrenciaList.dataMeta,
        perPageOptions = _useOcorrenciaList.perPageOptions,
        searchQuery = _useOcorrenciaList.searchQuery,
        sortBy = _useOcorrenciaList.sortBy,
        isSortDirDesc = _useOcorrenciaList.isSortDirDesc,
        refSaidasTableList = _useOcorrenciaList.refSaidasTableList,
        refetchData = _useOcorrenciaList.refetchData,
        rotaFilter = _useOcorrenciaList.rotaFilter;

    return {
      fetchSaidas: fetchSaidas,
      tableColumns: tableColumns,
      perPage: perPage,
      currentPage: currentPage,
      totalSaidas: totalSaidas,
      dataMeta: dataMeta,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      refSaidasTableList: refSaidasTableList,
      refetchData: refetchData,
      rotaFilter: rotaFilter,
      dateTime: dateTime
    };
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=template&id=2e29232b&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=template&id=2e29232b& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { staticClass: "mb-0", attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [
          _c("b-card-title", [
            _vm._v("Gestão e controle de entrada e saida de viaturas"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "m-2" },
        [
          _c(
            "b-tabs",
            { attrs: { "content-class": "mt-3", justified: "" } },
            [
              _c(
                "b-tab",
                { attrs: { title: "Saidas de viaturas", active: "" } },
                [_c("relatorio-saida")],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Entradas de viaturas" } },
                [_c("relatorio-entrada")],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=template&id=1c0b48bc&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=template&id=1c0b48bc& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "div",
            { staticClass: "mb-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "d-inline-block mr-1",
                        attrs: { placeholder: "Search..." },
                        model: {
                          value: _vm.searchQuery,
                          callback: function ($$v) {
                            _vm.searchQuery = $$v
                          },
                          expression: "searchQuery",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", [_c("v-select")], 1),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-table", {
            ref: "refSaidaTableList",
            staticClass: "position-relative",
            attrs: {
              items: _vm.fetchEntradas,
              responsive: "",
              fields: _vm.tableColumns1,
              "primary-key": "id",
              "sort-by.sync": "sortBy",
              "show-empty": "",
              "empty-text": "Nenhuma de lista de saida de viaturas cadastrada",
              "sort-desc": _vm.isSortDirDesc,
            },
            on: {
              "update:sortDesc": function ($event) {
                _vm.isSortDirDesc = $event
              },
              "update:sort-desc": function ($event) {
                _vm.isSortDirDesc = $event
              },
            },
            scopedSlots: _vm._u([
              {
                key: "cell(Data_de_registo)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.dateTime(data.item.created_at)) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(Hora_de_saida)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(data.item.check_list_out.hr_inicio) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(Hora_da_chegada)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(data.item.hr_fim) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(Matricula)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(data.item.check_list_out.viatura.matricula) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(Kilometrage_actual)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(data.item.km_fim) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(Criado_por)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n                " +
                        _vm._s(data.item.user.name) +
                        "\n            "
                    ),
                  ]
                },
              },
              {
                key: "cell(acções)",
                fn: function (data) {
                  return [
                    data.item.viatura.locate !== "IN"
                      ? _c(
                          "b-dropdown",
                          {
                            attrs: {
                              variant: "link",
                              "no-caret": "",
                              right: _vm.$store.state.appConfig.isRTL,
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "button-content",
                                  fn: function () {
                                    return [
                                      _c("feather-icon", {
                                        staticClass: "align-middle text-body",
                                        attrs: {
                                          icon: "MoreVerticalIcon",
                                          size: "16",
                                        },
                                      }),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              true
                            ),
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              {
                                attrs: {
                                  to: {
                                    name: "CheckList-in-details",
                                    params: { id: data.item.id },
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "FileTextIcon" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "align-middle ml-50" },
                                  [_vm._v("Detalhes")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mx-2 mb-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "\n              d-flex\n              align-items-center\n              justify-content-center justify-content-sm-start\n            ",
                      attrs: { cols: "12", sm: "6" },
                    },
                    [
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v(
                          "motrando " +
                            _vm._s(_vm.dataMeta2.from1) +
                            " a " +
                            _vm._s(_vm.dataMeta2.to1) +
                            " de\n              " +
                            _vm._s(_vm.dataMeta2.of1) +
                            " entradas"
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "\n              d-flex\n              align-items-center\n              justify-content-center justify-content-sm-end\n            ",
                      attrs: { cols: "12", sm: "6" },
                    },
                    [
                      _c("b-pagination", {
                        staticClass: "mb-0 mt-1 mt-sm-0",
                        attrs: {
                          "total-rows": _vm.totalEntradas,
                          "per-page": _vm.perPage1,
                          "first-number": "",
                          "last-number": "",
                          "prev-class": "prev-item",
                          "next-class": "next-item",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prev-text",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "ChevronLeftIcon",
                                    size: "18",
                                  },
                                }),
                              ]
                            },
                            proxy: true,
                          },
                          {
                            key: "next-text",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "ChevronRightIcon",
                                    size: "18",
                                  },
                                }),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                        model: {
                          value: _vm.currentPage1,
                          callback: function ($$v) {
                            _vm.currentPage1 = $$v
                          },
                          expression: "currentPage1",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=template&id=61cbf286&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=template&id=61cbf286& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "div",
            { staticClass: "mb-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-link",
                        {
                          staticClass: "btn btn-outline-primary",
                          attrs: { to: { name: "CheckList-Out" } },
                        },
                        [
                          _c("span", { staticClass: "text-nowrap" }, [
                            _vm._v("Nova autorização de saida"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("b-form-input", {
                        staticClass: "d-inline-block mr-1",
                        attrs: { placeholder: "Search..." },
                        model: {
                          value: _vm.searchQuery,
                          callback: function ($$v) {
                            _vm.searchQuery = $$v
                          },
                          expression: "searchQuery",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", [_c("v-select")], 1),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-table", {
            ref: "refSaidaTableList",
            staticClass: "position-relative",
            attrs: {
              items: _vm.fetchSaidas,
              responsive: "",
              fields: _vm.tableColumns,
              "primary-key": "id",
              "sort-by.sync": "sortBy",
              "show-empty": "",
              "empty-text": "Nenhuma de lista de saida de viaturas cadastrada",
              "sort-desc": _vm.isSortDirDesc,
            },
            on: {
              "update:sortDesc": function ($event) {
                _vm.isSortDirDesc = $event
              },
              "update:sort-desc": function ($event) {
                _vm.isSortDirDesc = $event
              },
            },
            scopedSlots: _vm._u([
              {
                key: "cell(Data_de_registo)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(_vm.dateTime(data.item.created_at)) +
                        " "
                    ),
                  ]
                },
              },
              {
                key: "cell(Matricula)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(data.item.viatura.matricula) +
                        "\n      "
                    ),
                  ]
                },
              },
              {
                key: "cell(Motorista)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(data.item.motorista.person.nome_completo) +
                        "\n      "
                    ),
                  ]
                },
              },
              {
                key: "cell(Tipo)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n        " + _vm._s(data.item.tipo_saida) + "\n      "
                    ),
                  ]
                },
              },
              {
                key: "cell(acções)",
                fn: function (data) {
                  return [
                    data.item.viatura.locate !== "IN"
                      ? _c(
                          "b-dropdown",
                          {
                            attrs: {
                              variant: "link",
                              "no-caret": "",
                              right: _vm.$store.state.appConfig.isRTL,
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "button-content",
                                  fn: function () {
                                    return [
                                      _c("feather-icon", {
                                        staticClass: "align-middle text-body",
                                        attrs: {
                                          icon: "MoreVerticalIcon",
                                          size: "16",
                                        },
                                      }),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ],
                              null,
                              true
                            ),
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              {
                                attrs: {
                                  to: {
                                    name: "CheckList-out-details",
                                    params: { id: data.item.id },
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "FileTextIcon" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "align-middle ml-50" },
                                  [_vm._v("Detalhes")]
                                ),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-dropdown-item",
                              {
                                attrs: {
                                  to: {
                                    name: "CheckList-In",
                                    params: { id: data.item.id },
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "EditIcon" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "align-middle ml-50" },
                                  [_vm._v("Dar entrada")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      : _vm._e(),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mx-2 mb-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "\n            d-flex\n            align-items-center\n            justify-content-center justify-content-sm-start\n          ",
                      attrs: { cols: "12", sm: "6" },
                    },
                    [
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v(
                          "Showing " +
                            _vm._s(_vm.dataMeta.from) +
                            " to " +
                            _vm._s(_vm.dataMeta.to) +
                            " of\n            " +
                            _vm._s(_vm.dataMeta.of) +
                            " entries"
                        ),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "\n            d-flex\n            align-items-center\n            justify-content-center justify-content-sm-end\n          ",
                      attrs: { cols: "12", sm: "6" },
                    },
                    [
                      _c("b-pagination", {
                        staticClass: "mb-0 mt-1 mt-sm-0",
                        attrs: {
                          "total-rows": _vm.totalSaidas,
                          "per-page": _vm.perPage,
                          "first-number": "",
                          "last-number": "",
                          "prev-class": "prev-item",
                          "next-class": "next-item",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prev-text",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "ChevronLeftIcon",
                                    size: "18",
                                  },
                                }),
                              ]
                            },
                            proxy: true,
                          },
                          {
                            key: "next-text",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "ChevronRightIcon",
                                    size: "18",
                                  },
                                }),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                        model: {
                          value: _vm.currentPage,
                          callback: function ($$v) {
                            _vm.currentPage = $$v
                          },
                          expression: "currentPage",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ocorrencias_vue_vue_type_template_id_2e29232b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ocorrencias.vue?vue&type=template&id=2e29232b& */ "./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=template&id=2e29232b&");
/* harmony import */ var _ocorrencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ocorrencias.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ocorrencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ocorrencias_vue_vue_type_template_id_2e29232b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ocorrencias_vue_vue_type_template_id_2e29232b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ocorrencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ocorrencias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ocorrencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=template&id=2e29232b&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=template&id=2e29232b& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ocorrencias_vue_vue_type_template_id_2e29232b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ocorrencias.vue?vue&type=template&id=2e29232b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/ocorrencias.vue?vue&type=template&id=2e29232b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ocorrencias_vue_vue_type_template_id_2e29232b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ocorrencias_vue_vue_type_template_id_2e29232b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOcorrenciaList; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
 // import { title } from '@core/utils/filter'
// Notification




function useOcorrenciaList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__["useToast"])();
  var refSaidasTableList = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var refEntradaTableList = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // Table Handlers

  var tableColumns = [{
    key: 'Data_de_registo',
    sortable: true
  }, {
    key: 'Hora_de_saida',
    sortable: true
  }, {
    key: 'Matricula',
    sortable: true
  }, {
    key: 'Kilometrage_na_saida',
    sortable: true
  }, {
    key: 'Motorista',
    sortable: true
  }, {
    key: 'Tipo',
    sortable: true
  }, {
    Key: 'Criado_por',
    sortable: true
  }, {
    key: 'acções'
  }];
  var tableColumns1 = [{
    key: 'Data_de_registo',
    sortable: true
  }, {
    key: 'Hora_de_saida',
    sortable: true
  }, {
    key: 'Hora_da_chegada',
    sortable: true
  }, {
    key: 'Matricula',
    sortable: true
  }, {
    key: 'Kilometrage_actual',
    sortable: true
  }, {
    Key: 'Criado_por',
    sortable: true
  }, {
    key: 'acções'
  }];
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var perPage1 = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalSaidas = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var totalEntradas = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var totalEntradas1 = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var currentPage1 = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var rotaFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refSaidasTableList.value ? refSaidasTableList.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalSaidas.value
    };
  });
  var dataMeta2 = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refEntradaTableList.value ? refEntradaTableList.value.localItems.length : 0;
    return {
      from1: perPage1.value * (currentPage1.value - 1) + (localItemsCount ? 1 : 0),
      to1: perPage1.value * (currentPage1.value - 1) + localItemsCount,
      of1: totalEntradas1.value
    };
  });

  var refetchData = function refetchData() {
    refSaidasTableList.value.refresh();
  };

  var refetchData1 = function refetchData1() {
    refEntradaTableList.value.refresh();
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, searchQuery, rotaFilter], function () {
    refetchData();
    refetchData1();
  });

  var fetchSaidas = function fetchSaidas(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('Picket/fetchSaidas', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
      rota: rotaFilter.value
    }).then(function (response) {
      var CheckListOut = response.data;
      callback(CheckListOut.data);
      totalSaidas.value = CheckListOut.total;
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        props: {
          title: 'Erro na listagem de CheckListOut',
          icon: 'AlertTriangleIcon',
          variant: 'danger'
        }
      });
    });
  };

  var fetchEntradas = function fetchEntradas(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('Picket/fetchEntradas', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
      rota: rotaFilter.value
    }).then(function (response) {
      var checklistIn = response.data;
      callback(checklistIn.data);
      totalSaidas.value = checklistIn.total;
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        props: {
          title: 'Erro na listagem de entrada de viaturas',
          icon: 'AlertTriangleIcon',
          variant: 'danger'
        }
      });
    });
  }; // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*


  return {
    fetchSaidas: fetchSaidas,
    fetchEntradas: fetchEntradas,
    tableColumns: tableColumns,
    tableColumns1: tableColumns1,
    perPage: perPage,
    currentPage: currentPage,
    perPage1: perPage1,
    currentPage1: currentPage1,
    totalSaidas: totalSaidas,
    totalEntradas: totalEntradas,
    dataMeta: dataMeta,
    perPageOptions: perPageOptions,
    searchQuery: searchQuery,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    refSaidasTableList: refSaidasTableList,
    refEntradaTableList: refEntradaTableList,
    dataMeta2: dataMeta2,
    refetchData: refetchData,
    refetchData1: refetchData1,
    // Extra Filters
    rotaFilter: rotaFilter
  };
}

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _relatorio_entrada_vue_vue_type_template_id_1c0b48bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relatorio_entrada.vue?vue&type=template&id=1c0b48bc& */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=template&id=1c0b48bc&");
/* harmony import */ var _relatorio_entrada_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatorio_entrada.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _relatorio_entrada_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _relatorio_entrada_vue_vue_type_template_id_1c0b48bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _relatorio_entrada_vue_vue_type_template_id_1c0b48bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_entrada_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./relatorio_entrada.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_entrada_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=template&id=1c0b48bc&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=template&id=1c0b48bc& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_entrada_vue_vue_type_template_id_1c0b48bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./relatorio_entrada.vue?vue&type=template&id=1c0b48bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_entrada.vue?vue&type=template&id=1c0b48bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_entrada_vue_vue_type_template_id_1c0b48bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_entrada_vue_vue_type_template_id_1c0b48bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _relatorio_saida_vue_vue_type_template_id_61cbf286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relatorio_saida.vue?vue&type=template&id=61cbf286& */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=template&id=61cbf286&");
/* harmony import */ var _relatorio_saida_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatorio_saida.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _relatorio_saida_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _relatorio_saida_vue_vue_type_template_id_61cbf286___WEBPACK_IMPORTED_MODULE_0__["render"],
  _relatorio_saida_vue_vue_type_template_id_61cbf286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_saida_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./relatorio_saida.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_saida_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=template&id=61cbf286&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=template&id=61cbf286& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_saida_vue_vue_type_template_id_61cbf286___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./relatorio_saida.vue?vue&type=template&id=61cbf286& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/relatorio_saida.vue?vue&type=template&id=61cbf286&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_saida_vue_vue_type_template_id_61cbf286___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_saida_vue_vue_type_template_id_61cbf286___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
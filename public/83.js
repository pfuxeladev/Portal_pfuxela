(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

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
/* harmony import */ var _relatorioEntrada__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relatorioEntrada */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioEntrada.js");
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

    var _useRelatorioEntradaL = Object(_relatorioEntrada__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        fetchEntradas = _useRelatorioEntradaL.fetchEntradas,
        tableColumns = _useRelatorioEntradaL.tableColumns,
        perPage = _useRelatorioEntradaL.perPage,
        currentPage = _useRelatorioEntradaL.currentPage,
        totalEntradas = _useRelatorioEntradaL.totalEntradas,
        dataMeta = _useRelatorioEntradaL.dataMeta,
        perPageOptions = _useRelatorioEntradaL.perPageOptions,
        searchQuery = _useRelatorioEntradaL.searchQuery,
        sortBy = _useRelatorioEntradaL.sortBy,
        isSortDirDesc = _useRelatorioEntradaL.isSortDirDesc,
        refEntradasTableList = _useRelatorioEntradaL.refEntradasTableList,
        refetchData1 = _useRelatorioEntradaL.refetchData1,
        rotaFilter = _useRelatorioEntradaL.rotaFilter;

    return {
      fetchEntradas: fetchEntradas,
      tableColumns: tableColumns,
      perPage: perPage,
      currentPage: currentPage,
      totalEntradas: totalEntradas,
      dataMeta: dataMeta,
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
                    data.item.viatura.locate !== "OUT"
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
                            _vm._s(_vm.dataMeta.from) +
                            " a " +
                            _vm._s(_vm.dataMeta.to) +
                            " de\n              " +
                            _vm._s(_vm.dataMeta.of) +
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
                    { attrs: { cols: "12" } },
                    [
                      _vm.can("Create Checklist_out")
                        ? _c(
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
                          )
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-start mb-1 mb-md-0",
                    },
                    [
                      _c("label", [_vm._v("mostrar")]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "per-page-selector d-inline-block mx-50",
                        attrs: {
                          dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                          options: _vm.perPageOptions,
                          clearable: false,
                        },
                        model: {
                          value: _vm.perPage,
                          callback: function ($$v) {
                            _vm.perPage = $$v
                          },
                          expression: "perPage",
                        },
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v("entradas")]),
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
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-table", {
            ref: "refSaidasTableList",
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
                key: "cell(hora_de_saida)",
                fn: function (data) {
                  return [
                    _vm._v(
                      "\n          " + _vm._s(data.item.hr_inicio) + "\n      "
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
                key: "cell(Kilometragem_na_saida)",
                fn: function (data) {
                  return [
                    _c("div", [
                      _vm._v(
                        "\n              " +
                          _vm._s(data.item.km_inicio) +
                          "\n          "
                      ),
                    ]),
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
                    _c(
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
                            _c("span", { staticClass: "align-middle ml-50" }, [
                              _vm._v("Detalhes"),
                            ]),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        data.item.viatura.locate === "OUT"
                          ? _c(
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
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
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
                          "mostrar " +
                            _vm._s(_vm.dataMeta.from) +
                            " a " +
                            _vm._s(_vm.dataMeta.to) +
                            " de\n            " +
                            _vm._s(_vm.dataMeta.of) +
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

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioEntrada.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorioEntrada.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useRelatorioEntradaList; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
 // import { title } from '@core/utils/filter'
// Notification




function useRelatorioEntradaList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__["useToast"])();
  var refEntradaTableList = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var tableColumns = [{
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
    key: 'Kilometragem_actual',
    sortable: true
  }, {
    Key: 'Criado_por',
    sortable: true
  }, {
    key: 'acções'
  }];
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalSaidas = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var totalEntradas = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var rotaFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refEntradaTableList.value ? refEntradaTableList.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalSaidas.value
    };
  });

  var refetchData = function refetchData() {
    refEntradaTableList.value.refresh();
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, searchQuery, rotaFilter], function () {
    refetchData(); // refetchData1()
  });

  var fetchEntradas = function fetchEntradas(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('Picket/fetchEntradas', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value
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
    fetchEntradas: fetchEntradas,
    tableColumns: tableColumns,
    perPage: perPage,
    currentPage: currentPage,
    totalSaidas: totalSaidas,
    totalEntradas: totalEntradas,
    dataMeta: dataMeta,
    perPageOptions: perPageOptions,
    searchQuery: searchQuery,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    refEntradaTableList: refEntradaTableList,
    refetchData: refetchData,
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
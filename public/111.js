(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _storeAbastecimentos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storeAbastecimentos */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/storeAbastecimentos.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/index.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_10__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BFormRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRow"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_6___default.a,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  created: function created() {
    this.moment = moment__WEBPACK_IMPORTED_MODULE_5___default.a;
  },
  setup: function setup() {
    var SUPPLY_STORE_MODULE_NAME = 'Supply'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_4__["default"].hasModule(SUPPLY_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_4__["default"].registerModule(SUPPLY_STORE_MODULE_NAME, _storeAbastecimentos__WEBPACK_IMPORTED_MODULE_8__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_4__["default"].hasModule(SUPPLY_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_4__["default"].unregisterModule(SUPPLY_STORE_MODULE_NAME);
    });

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_5___default()(value).format('DD/MM/YYYY');
    }

    var dateOptions = [{
      label: 'Hoje',
      value: 'Hoje'
    }, {
      label: 'Semanal',
      value: 'Semanal'
    }, {
      label: 'Mes',
      value: 'Mensal'
    }, {
      label: 'Ano',
      value: 'Anual'
    }];
    var fieldColumns = [{
      key: 'ordem',
      sortable: true
    }, {
      key: 'Data_de_emissao',
      sortable: true
    }, {
      key: 'viatura_matricula',
      sortable: true
    }, {
      key: 'Combustivel',
      sortable: true
    }, {
      key: 'qtd',
      sortable: true
    }, {
      key: 'preço',
      sortable: true
    }, {
      key: 'rotas_tomadas',
      sortable: true
    }, {
      key: 'bombas',
      sortable: true
    }, {
      key: 'autor',
      sortable: true
    }, {
      key: 'Subtotal',
      sortable: true
    }, {
      key: 'acção'
    }];
    var bomba = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);
    var viatura = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);

    var _useAbastecimentoList = Object(_index__WEBPACK_IMPORTED_MODULE_9__["default"])(),
        perPage = _useAbastecimentoList.perPage,
        currentPage = _useAbastecimentoList.currentPage,
        refetchHistory = _useAbastecimentoList.refetchHistory,
        generalReport = _useAbastecimentoList.generalReport,
        RelatorioGeral = _useAbastecimentoList.RelatorioGeral,
        totalHistoricos = _useAbastecimentoList.totalHistoricos,
        dataHistory = _useAbastecimentoList.dataHistory,
        perPageOptions = _useAbastecimentoList.perPageOptions,
        searchQuery = _useAbastecimentoList.searchQuery,
        sortBy = _useAbastecimentoList.sortBy,
        isSortDirDesc = _useAbastecimentoList.isSortDirDesc;

    return {
      perPage: perPage,
      currentPage: currentPage,
      dateOptions: dateOptions,
      fieldColumns: fieldColumns,
      bomba: bomba,
      viatura: viatura,
      refetchHistory: refetchHistory,
      generalReport: generalReport,
      RelatorioGeral: RelatorioGeral,
      totalHistoricos: totalHistoricos,
      dataHistory: dataHistory,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      dateTime: dateTime
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=template&id=457c7aff&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=template&id=457c7aff& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "relatorio-geral" } }, [
    _c(
      "section",
      [
        _c(
          "b-card",
          { attrs: { "no-body": "" } },
          [
            _c(
              "b-card-header",
              { staticClass: "pb-50" },
              [
                _c("b-card-title", [
                  _vm._v("Relatório Geral dos abastecimento"),
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
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { attrs: { cols: "4", md: "4" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-8",
                              label: "Dados da lista abaixo:",
                              "label-for": "input-8",
                            },
                          },
                          [
                            _c("b-form-input", {
                              staticClass: "d-inline-block mr-1",
                              attrs: { placeholder: "pesquisar..." },
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
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { attrs: { cols: "4", md: "4" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-8",
                              label: "Data cadastro de viatura:",
                              "label-for": "input-8",
                              description: "Data cadastro de viatura.",
                            },
                          },
                          [
                            _c("date-picker", {
                              staticClass: "mb-1",
                              staticStyle: { width: "100%" },
                              attrs: {
                                "value-type": "format",
                                format: "YYYY-MM-DD",
                                id: "example-datepicker1",
                                range: "",
                                locale: "pt",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { attrs: { cols: "4", md: "4" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            attrs: {
                              id: "input-group-8",
                              label: "Filtrar por periodo:",
                              "label-for": "input-8",
                              description: "Datas periodicas.",
                            },
                          },
                          [
                            _c("v-select", {
                              staticClass:
                                "per-page-selector d-inline-block mx-50",
                              attrs: {
                                dir: _vm.$store.state.appConfig.isRTL
                                  ? "rtl"
                                  : "ltr",
                                options: _vm.dateOptions,
                                clearable: false,
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
                _c(
                  "b-row",
                  [
                    _c("b-col"),
                    _vm._v(" "),
                    _c("b-col"),
                    _vm._v(" "),
                    _c("b-col"),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card-body",
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { attrs: { cols: "3" } },
                      [
                        _c(
                          "b-button",
                          { attrs: { variant: "outline-primary" } },
                          [
                            _c("i", { staticClass: "fas fa-print" }),
                            _vm._v(" Imprimir"),
                          ]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      {
                        staticClass: "table-responsive",
                        attrs: { cols: "12", xl: "12", md: "12" },
                      },
                      [
                        _c("b-table", {
                          ref: "RelatorioGeral",
                          attrs: {
                            items: _vm.generalReport,
                            fields: _vm.fieldColumns,
                            "head-variant": "light",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "cell(ordem)",
                              fn: function (data) {
                                return [
                                  data.item.ordem !== null
                                    ? _c("span", [
                                        _vm._v(
                                          "\n                       " +
                                            _vm._s(
                                              data.item.ordem.codigo_ordem
                                            ) +
                                            "\n                       "
                                        ),
                                      ])
                                    : _vm._e(),
                                ]
                              },
                            },
                            {
                              key: "cell(Data_de_emissao)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(
                                        _vm.dateTime(data.item.ordem.updated_at)
                                      ) +
                                      "\n                   "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(viatura_matricula)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(data.item.viatura.matricula) +
                                      "\n                   "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(combustivel)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(
                                        data.item.viatura.tipo_combustivel
                                      ) +
                                      "\n                   "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(qtd)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(data.item.qtd_abastecida) +
                                      "\n                   "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(preço)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(
                                        _vm._f("toCurrency")(
                                          data.item.preco_cunsumo /
                                            data.item.qtd_abastecida
                                        )
                                      ) +
                                      "\n                   "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(rotas_tomadas)",
                              fn: function (data) {
                                return _vm._l(
                                  data.item.ordem_viatura_rota,
                                  function (rotas, i) {
                                    return _c("div", { key: "A" + i }, [
                                      _c("span", { staticClass: "mr-1" }, [
                                        _vm._v(_vm._s(rotas.rota.nome_rota)),
                                      ]),
                                    ])
                                  }
                                )
                              },
                            },
                            {
                              key: "cell(bombas)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(
                                        data.item.ordem.bombas.nome_bombas
                                      ) +
                                      "\n                   "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(autor)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(data.item.ordem.approved_by.name) +
                                      "\n                   "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(Subtotal)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                       " +
                                      _vm._s(
                                        _vm._f("toCurrency")(
                                          data.item.preco_cunsumo
                                        )
                                      ) +
                                      "\n                   "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(acção)",
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
                                                  staticClass:
                                                    "align-middle text-body",
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
                                              name: "supply-details",
                                              params: {
                                                refs: data.item.ordem.refs,
                                              },
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
                                            {
                                              staticClass: "align-middle ml-50",
                                            },
                                            [_vm._v("Details")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              },
                            },
                          ]),
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
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _relatorio_geral_vue_vue_type_template_id_457c7aff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relatorio_geral.vue?vue&type=template&id=457c7aff& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=template&id=457c7aff&");
/* harmony import */ var _relatorio_geral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relatorio_geral.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _relatorio_geral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _relatorio_geral_vue_vue_type_template_id_457c7aff___WEBPACK_IMPORTED_MODULE_0__["render"],
  _relatorio_geral_vue_vue_type_template_id_457c7aff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_geral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./relatorio_geral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_geral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=template&id=457c7aff&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=template&id=457c7aff& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_geral_vue_vue_type_template_id_457c7aff___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./relatorio_geral.vue?vue&type=template&id=457c7aff& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/relatorio_geral.vue?vue&type=template&id=457c7aff&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_geral_vue_vue_type_template_id_457c7aff___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_relatorio_geral_vue_vue_type_template_id_457c7aff___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
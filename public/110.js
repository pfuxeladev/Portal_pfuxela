(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _StoreViaturaModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StoreViaturaModule */ "./resources/js/src/views/Gestao-pickete/Viaturas/StoreViaturaModule.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardFooter: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardFooter"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"]
  },
  setup: function setup() {
    var viaturaData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var VIATURA_APP_STORE_MODULE = 'Picket'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(VIATURA_APP_STORE_MODULE)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].registerModule(VIATURA_APP_STORE_MODULE, _StoreViaturaModule__WEBPACK_IMPORTED_MODULE_4__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(VIATURA_APP_STORE_MODULE)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].unregisterModule(VIATURA_APP_STORE_MODULE);
    });
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('Picket/fetchViatura', {
      id: _router__WEBPACK_IMPORTED_MODULE_3__["default"].currentRoute.params.id
    }).then(function (response) {
      viaturaData.value = response.data;
    })["catch"](function (error) {
      if (error.response.status === 404) {
        viaturaData.value = undefined;
      }
    });
    return {
      viaturaData: viaturaData
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "car-details" }, [
    _c(
      "section",
      { staticClass: "invoice-add-wrapper mt-3" },
      [
        _c(
          "b-row",
          { staticClass: "invoice-add" },
          [
            _c(
              "b-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "b-card",
                  [
                    _c("b-card-header", [
                      _c("h3", { staticClass: "card-title" }, [
                        _vm._v(
                          "\n              Dados da viatura " +
                            _vm._s(_vm.viaturaData.id) +
                            "\n            "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-card-body",
                      [
                        _c(
                          "b-row",
                          { attrs: { sm: "" } },
                          [
                            _c(
                              "b-col",
                              { attrs: { cols: "2", md: "2" } },
                              [_c("b-img")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "12", lg: "12" } },
                              [
                                _c(
                                  "b-row",
                                  [
                                    _c(
                                      "b-col",
                                      [
                                        _c(
                                          "b-list-group",
                                          [
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Marca")]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.marca.nome
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Modelo")]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.modelo
                                                      .nome_modelo
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Descrição"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.nome_viatura
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Matricula"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.matricula
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Ano de fabrico"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.ano_fabrico
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Lotação")]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.lotacao
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      [
                                        _c(
                                          "b-list-group",
                                          [
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Tipo de Combustivel"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData
                                                      .tipo_combustivel
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Kilometragem actual"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.kilometragem
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Capacidade do tanque"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData
                                                      .capacidade_tanque
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Ltr/Km")]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData
                                                      .capacidade_media
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Qtd disponivel"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData
                                                      .qtd_disponivel
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Estado")]),
                                              _vm._v(
                                                ":\n                                 "
                                              ),
                                              _vm.viaturaData.estado === 1
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "success",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Viatura activa"
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.viaturaData.estado === 0
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "danger",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Viatura Inativa"
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                            ]),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      [
                                        _c(
                                          "b-list-group",
                                          [
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Nr do Motor"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.nr_motor
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Nr do Chassi"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.nr_chassi
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Nr do Livrete"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.nr_livrete
                                                  ) +
                                                  "\n                             "
                                              ),
                                            ]),
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
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-light table-responsive",
                                  },
                                  [
                                    _c(
                                      "thead",
                                      { staticClass: "thead-light" },
                                      [
                                        _c(
                                          "tr",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Inspecção")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Licença")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Manifesto")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Seguros")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [_vm._v("Taxa de Radio de fusão")]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                        ]),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.viaturaData.viatura_document,
                                        function (docs, index) {
                                          return _c("tr", { key: index }, [
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(docs.data_inspencao)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(docs.prazo_inspencao)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(docs.data_licenca)),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(docs.prazo_licenca)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(docs.data_manifesto)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(docs.prazo_manifesto)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(_vm._s(docs.data_seguros)),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(docs.prazo_seguros)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(docs.data_taxa_radio)
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(docs.prazo_taxa_radio)
                                              ),
                                            ]),
                                          ])
                                        }
                                      ),
                                      0
                                    ),
                                  ]
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

/***/ "./resources/js/src/views/Gestao-pickete/Viaturas/StoreViaturaModule.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/Viaturas/StoreViaturaModule.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchViaturas: function fetchViaturas(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/viaturas', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchViatura: function fetchViatura(ctx, _ref) {
      var id = _ref.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/viaturas/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addViatura: function addViatura(ctx, userData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/viatura', {
          user: userData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    activateViatura: function activateViatura(ctx, _ref2) {
      var id = _ref2.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/activeVehicle/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    inactivateViatura: function inactivateViatura(ctx, _ref3) {
      var id = _ref3.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/deativateVehicle/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viatura-details.vue?vue&type=template&id=0927fece& */ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece&");
/* harmony import */ var _viatura_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viatura-details.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _viatura_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viatura-details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viatura-details.vue?vue&type=template&id=0927fece& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
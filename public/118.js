(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _relatorioOcorrencia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relatorioOcorrencia */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js");
/* harmony import */ var _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storaRelatorioModule */ "./resources/js/src/views/Gestao-pickete/relatorios/storaRelatorioModule.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      entrada: {}
    };
  },
  components: {
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"]
  },
  setup: function setup(props) {
    var entrada = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var ENTRADAS_STORE_MODULE_NAME = 'Picket';
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__["useToast"])(); // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasModule(ENTRADAS_STORE_MODULE_NAME)) {
      _store__WEBPACK_IMPORTED_MODULE_8__["default"].registerModule(ENTRADAS_STORE_MODULE_NAME, _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_6__["default"]);
    } // UnRegister on leave


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasModule(ENTRADAS_STORE_MODULE_NAME)) {
        _store__WEBPACK_IMPORTED_MODULE_8__["default"].unregisterModule(ENTRADAS_STORE_MODULE_NAME);
      }
    });

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format('DD/MM/YYYY hh:mm');
    }

    return {
      dateTime: dateTime,
      entrada: entrada
    };
  },
  created: function created() {
    var _this = this;

    _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('Picket/fetchEntrada', {
      id: _router__WEBPACK_IMPORTED_MODULE_7__["default"].currentRoute.params.id
    }).then(function (response) {
      _this.entrada = response.data;
      console.log(response.data);
    })["catch"](function () {// toast({
      //   component: ToastificationContent,
      //   props: {
      //     title: 'Erro! nenhum dado',
      //     icon: 'AlertTriangleIcon',
      //     variant: 'danger',
      //   },
      // })
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5& ***!
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
    _vm._l(_vm.entrada, function (ent, index) {
      return _c(
        "b-card",
        { key: index, attrs: { "no-body": "" } },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "3" } },
                [
                  _c(
                    "b-link",
                    {
                      staticClass: "btn btn-md btn-outline-primary",
                      attrs: { to: { name: "Vehicle-movements" } },
                    },
                    [_vm._v("voltar")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-card-header", [
            _c("h3", [
              _vm._v(
                "\n              Matricula: " +
                  _vm._s(ent.checklistIn.check_list_out.viatura.matricula) +
                  "\n          "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "6" } },
                    [
                      _c(
                        "b-list-group",
                        [
                          _c("b-list-group-item", [
                            _vm._v(
                              "\n                      Kilometragem: " +
                                _vm._s(ent.checklistIn.km_fim) +
                                "\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v(
                              "\n                      Hora de partida: " +
                                _vm._s(
                                  ent.checklistIn.check_list_out.hr_inicio
                                ) +
                                "\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v(
                              "\n                      Hora de entrada: " +
                                _vm._s(ent.checklistIn.hr_fim) +
                                "\n                  "
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c("h3", [_vm._v("Estado da viatura")]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              ent.checklists !== ""
                ? _c(
                    "b-row",
                    _vm._l(ent.categoria, function (chk, i) {
                      return _c(
                        "b-col",
                        {
                          key: "a" + i,
                          staticClass: "mb-2",
                          attrs: { cols: "3" },
                        },
                        [
                          _c("h3", { staticClass: "card-title" }, [
                            _vm._v(_vm._s(chk.nome_categoria)),
                          ]),
                          _vm._v(" "),
                          _vm._l(ent.checklists, function (checklst, k) {
                            return _c("b-row", { key: k }, [
                              checklst.categoria === chk.id
                                ? _c("span", { staticClass: "ml-2" }, [
                                    _c(
                                      "table",
                                      { staticClass: "table table-responsive" },
                                      [
                                        _c("tr", [
                                          _c("td", [
                                            _vm._v(
                                              _vm._s(checklst.checklist_name)
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-right" },
                                            [
                                              checklst.opcao_entrada === "Ok"
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c("feather-icon", {
                                                        staticStyle: {
                                                          color: "green",
                                                        },
                                                        attrs: {
                                                          icon: "CheckIcon",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  )
                                                : checklst.opcao_entrada ===
                                                  "No"
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c("feather-icon", {
                                                        staticStyle: {
                                                          color: "red",
                                                        },
                                                        attrs: {
                                                          icon: "XIcon",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  )
                                                : checklst.opcao_entrada ===
                                                  "Parcial"
                                                ? _c(
                                                    "b-badge",
                                                    {
                                                      attrs: {
                                                        variant: "warning",
                                                      },
                                                    },
                                                    [
                                                      _c("feather-icon", {
                                                        staticStyle: {
                                                          color: "orange",
                                                        },
                                                        attrs: {
                                                          icon: "AlertTriangleIcon",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                            ],
                                            1
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ])
                                : _vm._e(),
                            ])
                          }),
                        ],
                        2
                      )
                    }),
                    1
                  )
                : _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "3" } },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("Verificar o estado da viatura"),
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
        ],
        1
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entradasDetails.vue?vue&type=template&id=3736a4b5& */ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5&");
/* harmony import */ var _entradasDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entradasDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _entradasDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./entradasDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./entradasDetails.vue?vue&type=template&id=3736a4b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
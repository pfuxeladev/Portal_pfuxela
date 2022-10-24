(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[122],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_wamp64_www_portal_pfuxela_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _relatorioOcorrencia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./relatorioOcorrencia */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js");
/* harmony import */ var _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storaRelatorioModule */ "./resources/js/src/views/Gestao-pickete/relatorios/storaRelatorioModule.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      saidas: {}
    };
  },
  components: {
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardHeader"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroupItem"],
    BCardFooter: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardFooter"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"]
  },
  setup: function setup(props) {
    var saidas = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);
    var SAIDAS_STORE_MODULE_NAME = "Picket";
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_5__["useToast"])(); // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_10__["default"].hasModule(SAIDAS_STORE_MODULE_NAME)) {
      _store__WEBPACK_IMPORTED_MODULE_10__["default"].registerModule(SAIDAS_STORE_MODULE_NAME, _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_8__["default"]);
    }

    function imprimirCheck() {
      var prtHtml = document.getElementById('checklists').innerHTML; // Get all stylesheets HTML

      var stylesHtml = '';

      for (var _i = 0, _arr = Object(C_wamp64_www_portal_pfuxela_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelectorAll('link[rel="stylesheet"], style')); _i < _arr.length; _i++) {
        var node = _arr[_i];
        stylesHtml += node.outerHTML;
      } // Open the print window


      var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
      WinPrint.document.write("<!DOCTYPE html>\n        <html>\n        <head>\n            ".concat(stylesHtml, "\n        </head>\n        <body style=\"font-size:12pt\">\n            ").concat(prtHtml, "\n        </body>\n        </html>"));
      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      WinPrint.close();
    } // UnRegister on leave


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_10__["default"].hasModule(SAIDAS_STORE_MODULE_NAME)) {
        _store__WEBPACK_IMPORTED_MODULE_10__["default"].unregisterModule(SAIDAS_STORE_MODULE_NAME);
      }
    });

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(value).format("DD/MM/YYYY hh:mm");
    }

    return {
      dateTime: dateTime,
      saidas: saidas,
      imprimirCheck: imprimirCheck
    };
  },
  created: function created() {
    var _this = this;

    _store__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch("Picket/fetchSaida", {
      id: _router__WEBPACK_IMPORTED_MODULE_9__["default"].currentRoute.params.id
    }).then(function (response) {
      _this.saidas = response.data;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=template&id=00c0570b&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=template&id=00c0570b& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _vm._l(_vm.saidas, function (ver, i) {
        return _c(
          "b-card",
          { key: i, attrs: { id: "checklists", "no-body": "" } },
          [
            _c("b-card-header", [
              _c("h3", [
                _vm._v(
                  "Matricula: " + _vm._s(ver.checklistOut.viatura.matricula)
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
                                "\n              Carta de condução do motorista:\n              " +
                                  _vm._s(
                                    ver.checklistOut.motorista.carta_conducao
                                  ) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("b-list-group-item", [
                              _vm._v(
                                "\n              Objectivo: " +
                                  _vm._s(ver.checklistOut.estado) +
                                  "\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("b-list-group-item", [
                              _vm._v(
                                "\n              Hora de partida: " +
                                  _vm._s(ver.checklistOut.hr_inicio) +
                                  "hr\n            "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("b-list-group-item", [
                              _vm._v(
                                "\n              Kilometragem actual: " +
                                  _vm._s(ver.checklistOut.km_inicio) +
                                  " Km\n            "
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
                _c(
                  "b-card-body",
                  [
                    _c("h3", [_vm._v("Estado da viatura")]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c(
                      "b-row",
                      _vm._l(ver.categoria, function (chk, i) {
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
                            _vm._l(ver.checklists, function (checklst, k) {
                              return _c("b-row", { key: k }, [
                                checklst.categoria === chk.id
                                  ? _c("span", { staticClass: "ml-2" }, [
                                      _c(
                                        "table",
                                        {
                                          staticClass: "table table-responsive",
                                        },
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
                                                checklst.opcao === "Ok"
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
                                                  : checklst.opcao === "No"
                                                  ? _c(
                                                      "span",
                                                      [
                                                        _c("feather-icon", {
                                                          staticStyle: {
                                                            "font-size": "24px",
                                                            color: "red",
                                                          },
                                                          attrs: {
                                                            icon: "XIcon",
                                                          },
                                                        }),
                                                      ],
                                                      1
                                                    )
                                                  : checklst.opcao === "Parcial"
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
                                                            "font-size": "48px",
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
      _vm._v(" "),
      _c(
        "b-card",
        [
          _c(
            "b-card-footer",
            [
              _c(
                "b-button",
                {
                  attrs: { variant: "outline-success" },
                  on: { click: _vm.imprimirCheck },
                },
                [_vm._v("Imprimir "), _c("i", { staticClass: "fas fa-print" })]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saidaDetails_vue_vue_type_template_id_00c0570b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saidaDetails.vue?vue&type=template&id=00c0570b& */ "./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=template&id=00c0570b&");
/* harmony import */ var _saidaDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saidaDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _saidaDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _saidaDetails_vue_vue_type_template_id_00c0570b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _saidaDetails_vue_vue_type_template_id_00c0570b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saidaDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./saidaDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_saidaDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=template&id=00c0570b&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=template&id=00c0570b& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saidaDetails_vue_vue_type_template_id_00c0570b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./saidaDetails.vue?vue&type=template&id=00c0570b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/saidaDetails.vue?vue&type=template&id=00c0570b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saidaDetails_vue_vue_type_template_id_00c0570b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_saidaDetails_vue_vue_type_template_id_00c0570b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
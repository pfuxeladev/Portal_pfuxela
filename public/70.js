(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"],
    BFormSelectOption: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelectOption"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRow"],
    BIconChevronLeft: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIconChevronLeft"],
    BIconTrash: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIconTrash"],
    BIconPlus: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BIconPlus"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {};
  },
  methods: {
    voltar: function voltar() {
      this.$router.push({
        name: 'For Special Services'
      });
    }
  },
  setup: function setup() {
    var form = {
      name_cliente: '',
      contact_cliente: '',
      pickup_place: '',
      dropoff_place: '',
      pickup_time: '',
      dropoff_time: '',
      // array datas to push ou remove row
      abastecimentoDatas: [{
        viatura_id: null,
        bombas_id: null,
        qtd: 0,
        qtd_existente: 0
      }]
    };
    return {
      form: form
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=template&id=143c445d&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=template&id=143c445d& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "invoice-card" },
    [
      _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            { staticClass: "d-flex justify-content-between" },
            [
              _c("b-card-title", [
                _vm._v("Abastecimento para serviços especiais"),
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                { attrs: { variant: "outline-primary" } },
                [_c("BIconChevronLeft"), _vm._v(" voltar\n      ")],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("h4", { staticClass: "align-item-center text-center" }, [
            _vm._v("\n      Dados do Cliente\n    "),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-form",
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "BFormGroup",
                            { attrs: { label: "Nome do Cliente" } },
                            [_c("BFormInput", { attrs: { type: "text" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "BFormGroup",
                            { attrs: { label: "Contacto do Cliente" } },
                            [_c("BFormInput", { attrs: { type: "text" } })],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "BFormGroup",
                            { attrs: { label: "Local de Recolha" } },
                            [_c("BFormInput", { attrs: { type: "text" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "BFormGroup",
                            { attrs: { label: "Local de chegada" } },
                            [_c("BFormInput", { attrs: { type: "text" } })],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "BFormGroup",
                            {
                              attrs: {
                                label: "Hora de partida do local de recolha",
                              },
                            },
                            [_c("BFormInput", { attrs: { type: "text" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "BFormGroup",
                            { attrs: { label: "Hora de Chegada ao local" } },
                            [_c("BFormInput", { attrs: { type: "text" } })],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("h4", { staticClass: "align-item-center text-center" }, [
                    _vm._v("\n          Abastecer\n        "),
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _vm._l(_vm.form.abastecimentoDatas, function (abst, counter) {
                    return _c(
                      "BFormRow",
                      { key: counter },
                      [
                        _c(
                          "BCol",
                          { attrs: { cols: "4" } },
                          [
                            _c(
                              "BFormGroup",
                              { attrs: { label: "Bombas" } },
                              [
                                _c(
                                  "BFormSelect",
                                  {
                                    model: {
                                      value: abst.bombas_id,
                                      callback: function ($$v) {
                                        _vm.$set(abst, "bombas_id", $$v)
                                      },
                                      expression: "abst.bombas_id",
                                    },
                                  },
                                  [
                                    _c(
                                      "BFormSelectOption",
                                      { attrs: { value: "bombas" } },
                                      [
                                        _vm._v(
                                          "\n                  Nome Bombas\n                "
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
                        _vm._v(" "),
                        _c(
                          "BCol",
                          { attrs: { cols: "3" } },
                          [
                            _c(
                              "BFormGroup",
                              { attrs: { label: "Viaturas" } },
                              [_c("v-select")],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "BCol",
                          { attrs: { cols: "2" } },
                          [
                            _c(
                              "BFormGroup",
                              { attrs: { label: "Qtd existente" } },
                              [_c("BFormInput", { attrs: { type: "number" } })],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "BCol",
                          { attrs: { cols: "2" } },
                          [
                            _c(
                              "BFormGroup",
                              { attrs: { label: "Qtd a abastecer" } },
                              [_c("BFormInput", { attrs: { type: "number" } })],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "BCol",
                          {
                            staticClass: "justify-content-end d-flex",
                            attrs: { cols: "1" },
                          },
                          [
                            _c(
                              "BButton",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  size: "sm",
                                  variant: "outline-danger",
                                },
                              },
                              [_c("BIconTrash")],
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
                    "BFormRow",
                    [
                      _c(
                        "BCol",
                        { attrs: { cols: "1" } },
                        [
                          _c(
                            "BButton",
                            { attrs: { variant: "primary" } },
                            [_c("BIconPlus")],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "BFormRow",
                    {
                      staticClass:
                        "d-flex justify-content-between flex-container",
                    },
                    [
                      _c(
                        "BCol",
                        { attrs: { cols: "3" } },
                        [
                          _c(
                            "BButton",
                            {
                              attrs: { variant: "secondary" },
                              on: { click: _vm.voltar },
                            },
                            [_vm._v("\n              Cancelar\n            ")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "BCol",
                        { attrs: { cols: "2" } },
                        [
                          _c(
                            "BButton",
                            { attrs: { block: "", variant: "success" } },
                            [
                              _vm._v(
                                "\n              Enviar pedido\n            "
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
                2
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

/***/ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewOrderService_vue_vue_type_template_id_143c445d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewOrderService.vue?vue&type=template&id=143c445d& */ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=template&id=143c445d&");
/* harmony import */ var _NewOrderService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewOrderService.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewOrderService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewOrderService_vue_vue_type_template_id_143c445d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewOrderService_vue_vue_type_template_id_143c445d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrderService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewOrderService.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrderService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=template&id=143c445d&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=template&id=143c445d& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrderService_vue_vue_type_template_id_143c445d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewOrderService.vue?vue&type=template&id=143c445d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/NewOrderService.vue?vue&type=template&id=143c445d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrderService_vue_vue_type_template_id_143c445d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewOrderService_vue_vue_type_template_id_143c445d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _storeOrderModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storeOrderModule */ "./resources/js/src/views/Gestao-abastecimentos/ordens/storeOrderModule.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BModal"],
    BFormRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRow"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BFormText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormText"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTextarea"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      bombas: [],
      viaturas: [],
      rota: [],
      projecto: []
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/api/bombas').then(function (res) {
      _this.bombas = res.data;
    });
    this.$http.get('/api/listarViaturas').then(function (res) {
      _this.viaturas = res.data;
    });
    this.fetchProjectos();
    this.fetchRotas();
  },
  methods: {
    fetchProjectos: function fetchProjectos() {
      var _this2 = this;

      this.$http.get('/api/listProject').then(function (response) {
        _this2.projecto = response.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchRotas: function fetchRotas() {
      var _this3 = this;

      //   for (let i = 0; i < this.form.abastecer.length; i++ ) {
      this.$http.get('/api/todasRotas/').then(function (res) {
        _this3.rota = res.data;

        if (res.data === '') {
          _this3.$swal.fire({
            icon: 'error',
            title: 'Nao existe nenhuma rota cadastrada!'
          });
        }
      })["catch"](function (err) {
        _this3.$swal.fire({
          icon: 'error',
          title: 'Erro ao tentar buscar!'
        });
      }); //   }
    }
  },
  setup: function setup(props) {
    var ORDER_SUPPLY_STORE_MODULE_NAME = 'Supply';
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_6__["useToast"])(); // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_7__["default"].hasModule(ORDER_SUPPLY_STORE_MODULE_NAME)) {
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].registerModule(ORDER_SUPPLY_STORE_MODULE_NAME, _storeOrderModule__WEBPACK_IMPORTED_MODULE_9__["default"]);
    } // UnRegister on leave


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_7__["default"].hasModule(ORDER_SUPPLY_STORE_MODULE_NAME)) {
        _store__WEBPACK_IMPORTED_MODULE_7__["default"].unregisterModule(ORDER_SUPPLY_STORE_MODULE_NAME);
      }
    });
    var orderData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(null);
    var form = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(JSON.parse(JSON.stringify(new vform__WEBPACK_IMPORTED_MODULE_10__["default"]({
      orderData: orderData,
      rota_id: {}
    }))));
    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch('Supply/fetchOrder', {
      refs: _router__WEBPACK_IMPORTED_MODULE_8__["default"].currentRoute.params.refs
    }).then(function (response) {
      orderData.value = response.data;
      form.value = orderData;
    })["catch"](function (error) {
      if (error.response.status === 404) {
        orderData.value = undefined;
      }
    });

    function Actualizar() {
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch('Supply/updateOrder', orderData.value).then(function (response) {
        toast({
          component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
          props: {
            title: response.data.success,
            icon: 'CheckSquareIcon',
            variant: 'success'
          }
        }); //   window.location.reload()

        _router__WEBPACK_IMPORTED_MODULE_8__["default"].push({
          name: 'supply-details',
          params: {
            refs: _router__WEBPACK_IMPORTED_MODULE_8__["default"].currentRoute.params.refs
          }
        });
      })["catch"](function (err) {
        if (err) {
          toast({
            component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            props: {
              title: err.response.data.erro,
              icon: 'AlertTriangleIcon',
              variant: 'danger'
            }
          });
        }
      });
    }

    return {
      orderData: orderData,
      form: form,
      Actualizar: Actualizar
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=template&id=4e185fc2&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=template&id=4e185fc2& ***!
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
    { staticClass: "container-fluid" },
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
                _vm._v("Actualizar a ordem de abastecimento"),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-card-body",
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.Actualizar()
                    },
                  },
                },
                [
                  _c(
                    "b-form-row",
                    [
                      _c(
                        "b-col",
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: {
                                label: "Referencia da ordem",
                                "label-for": "Referencia da ordem",
                              },
                            },
                            [
                              _vm._v(
                                "\n                    Ref: " +
                                  _vm._s(_vm.orderData.refs) +
                                  "\n                "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        [
                          _c(
                            "b-form-group",
                            {
                              attrs: { label: "Bombas", "label-for": "Bombas" },
                            },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "nome_bombas",
                                  options: _vm.bombas,
                                  reduce: function (bombas) {
                                    return bombas.id
                                  },
                                },
                                model: {
                                  value: _vm.orderData.bombas_id,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.orderData, "bombas_id", $$v)
                                  },
                                  expression: "orderData.bombas_id",
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
                    "b-form-row",
                    [
                      _c(
                        "b-col",
                        {
                          staticClass: "table-responsive",
                          staticStyle: { height: "300px" },
                          attrs: { cols: "12" },
                        },
                        [
                          _c(
                            "table",
                            { staticClass: "table table-light height-auto" },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_vm._v("viatura")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Rota requisita")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Rota a substituir")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("qtd")]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(
                                  _vm.orderData.ordem_viatura,
                                  function (vi, z) {
                                    return _c("tr", { key: z }, [
                                      _c("td", [
                                        _vm._v(
                                          "\n                                  " +
                                            _vm._s(vi.viatura.matricula)
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        _vm._l(
                                          vi.ordem_viatura_rota,
                                          function (rt, i) {
                                            return _c("span", { key: i }, [
                                              _vm._v(
                                                "\n                                      " +
                                                  _vm._s(rt.rota.nome_rota) +
                                                  ",\n                                  "
                                              ),
                                            ])
                                          }
                                        ),
                                        0
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        _vm._l(
                                          vi.ordem_viatura_rota,
                                          function (rt, i) {
                                            return _c(
                                              "span",
                                              { key: i },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    label: "nome_rota",
                                                    options: _vm.rota,
                                                    reduce: function (rota) {
                                                      return rota.id
                                                    },
                                                  },
                                                  model: {
                                                    value: rt.rota.nome_rota,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        rt.rota,
                                                        "nome_rota",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "rt.rota.nome_rota",
                                                  },
                                                }),
                                              ],
                                              1
                                            )
                                          }
                                        ),
                                        0
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c("b-form-input", {
                                            attrs: { type: "text" },
                                            model: {
                                              value: vi.qtd_abastecida,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  vi,
                                                  "qtd_abastecida",
                                                  $$v
                                                )
                                              },
                                              expression: "vi.qtd_abastecida",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ])
                                  }
                                ),
                                0
                              ),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { type: "submit", variant: "outline-primary" },
                        },
                        [
                          _vm._v(
                            "\n                Actualizar a ordem\n              "
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderEdit_vue_vue_type_template_id_4e185fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderEdit.vue?vue&type=template&id=4e185fc2& */ "./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=template&id=4e185fc2&");
/* harmony import */ var _orderEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _orderEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderEdit_vue_vue_type_template_id_4e185fc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderEdit_vue_vue_type_template_id_4e185fc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./orderEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=template&id=4e185fc2&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=template&id=4e185fc2& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderEdit_vue_vue_type_template_id_4e185fc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./orderEdit.vue?vue&type=template&id=4e185fc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/ordens/orderEdit.vue?vue&type=template&id=4e185fc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderEdit_vue_vue_type_template_id_4e185fc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderEdit_vue_vue_type_template_id_4e185fc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[118],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _storeAbastecimentos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storeAbastecimentos */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/storeAbastecimentos.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // eslint-disable-next-line import/no-extraneous-dependencies









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCollapse"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardSubTitle"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BModal"],
    BFormRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRow"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BFormText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTextarea"]
  },
  data: function data() {
    return {
      viatura: [],
      rota: [],
      projecto: [],
      rec_abast: null,
      bombas: {},
      abastecimento: [],
      OpenOrder: {},
      form: new vform__WEBPACK_IMPORTED_MODULE_3__["default"]({
        ordem_id: this.$route.params.refs,
        projecto_id: null,
        viatura_id: null,
        rota_id: null,
        qtd_abastecer: 0,
        observacao: null
      })
    };
  },
  created: function created() {
    this.fetchProjectos();
    this.fetchViaturas();
    this.fetchBombas();
    this.getSubmited();
    this.getQtd();
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mounted: function mounted() {// console.log(this.bombas)
  },
  methods: {
    getQtd: function getQtd() {
      var _this = this;

      //   alert(viatura_id)
      this.$http.get("/api/getQtdDisponivel/".concat(this.form.viatura_id)).then(function (res) {
        _this.rec_abast = res.data;
        console.log(_this.rec_abast);
      })["catch"](function (err) {});
    },
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

      console.log(this.form.abastecer); //   for (let i = 0; i < this.form.abastecer.length; i++ ) {

      this.$http.get("/api/RotaByProject/".concat(this.form.projecto_id)).then(function (res) {
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
    },
    fetchBombas: function fetchBombas() {
      var _this4 = this;

      this.$http.get("/api/bomba/".concat(this.$route.params.refs)).then(function (res) {
        _this4.bombas = res.data; // console.log(this.bombas)
      });
    },
    fetchViaturas: function fetchViaturas() {
      var _this5 = this;

      this.$http.get('/api/listarViaturas').then(function (res) {
        _this5.viatura = res.data;
      });
    },
    returnAbastecimento: function returnAbastecimento() {
      var _this6 = this;

      this.$http.get("/api/CurrentAbst/".concat(this.$route.params.refs)).then(function (res) {
        _this6.abastecimento = res.data;
      });
    },
    NovaOrdem: function NovaOrdem() {
      var _this7 = this;

      this.$Progress.start();
      this.form.post('/api/Abastecimento').then(function (res) {
        if (res.status === 200) {
          _this7.$swal.fire({
            icon: 'success',
            title: res.data.success
          }); // location.reload()


          _this7.$Progress.finish();

          _this7.form.reset(); // eslint-disable-next-line no-restricted-globals


          window.location.reload();
        }
      })["catch"](function (err) {
        if (err.response.status === 421) {
          _this7.$swal.fire({
            icon: 'error',
            title: err.response.data.erro
          });

          _this7.$Progress.fail();
        } else if (err.response.status === 422) {
          _this7.$swal.fire({
            icon: 'error',
            title: "".concat(err.response.data.errors.viatura_id, "<br/>").concat(err.response.data.errors.rota_id, "<br/>").concat(err.response.data.errors.turno, "<br/>").concat(err.response.data.errors.qtd_abastecer)
          });

          _this7.$Progress.fail();
        }
      });
    },
    onReset: function onReset(event) {
      var _this8 = this;

      event.preventDefault(); // Reset our form values

      this.form.reset(); // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this8.show = true;
      });
    }
  },
  setup: function setup() {
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_6__["useToast"])();
    var SUPPLY_STORE_MODULE_NAME = 'Supply'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_9__["default"].hasModule(SUPPLY_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_9__["default"].registerModule(SUPPLY_STORE_MODULE_NAME, _storeAbastecimentos__WEBPACK_IMPORTED_MODULE_10__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_9__["default"].hasModule(SUPPLY_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_9__["default"].unregisterModule(SUPPLY_STORE_MODULE_NAME);
    });

    function getSubmited() {
      var _this9 = this;

      this.$http.get("/api/Ordems/".concat(_router__WEBPACK_IMPORTED_MODULE_8__["default"].currentRoute.params.refs)).then(function (response) {
        _this9.OpenOrder = response.data;
        console.log(_this9.OpenOrder);
      })["catch"](function (error) {
        if (error) {
          console.log(error);
          toast({
            component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            props: {
              title: 'Nenhuma viatura submitida a ordem',
              icon: 'AlertTriangleIcon',
              variant: 'danger'
            }
          });
        }
      });
    }

    function enviarPedido(order) {
      this.$swal({
        title: 'Tem certeza que deseja submeter a ordem?',
        text: 'Nao podera reverter essa accao!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim!',
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger ml-1'
        },
        buttonsStyling: false
      }).then(function (result) {
        if (result.value) {
          _store__WEBPACK_IMPORTED_MODULE_9__["default"].dispatch('Supply/addAbastecimento', order).then(function (response) {
            toast({
              component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
              props: {
                title: response.data.success,
                icon: 'CheckSquareIcon',
                variant: 'success'
              }
            }); //   this.$router.push({ name: 'supply-details', params: { refs: router.currentRoute.params.refs } })
            //   window.location.reload()
          })["catch"](function (err) {
            if (err) {
              toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
                props: {
                  title: err.response.data.error,
                  icon: 'AlertTriangleIcon',
                  variant: 'danger'
                }
              });
            }
          });
        }
      }); //   console.log(order)
    }

    function removerPedido(order) {
      console.log(order);
      _store__WEBPACK_IMPORTED_MODULE_9__["default"].dispatch('Supply/removeLine', {
        refs: order.ordem_id
      }).then(function (response) {
        toast({
          component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
          props: {
            title: response.data.success,
            icon: 'CheckSquareIcon',
            variant: 'success'
          }
        });
        window.location.reload();
      })["catch"](function (err) {
        if (err.response.status === 421) {
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
      getSubmited: getSubmited,
      enviarPedido: enviarPedido,
      removerPedido: removerPedido
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=template&id=09740ea8&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=template&id=09740ea8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "invoice-add-wrapper",
      attrs: { title: "Novo-abastecimento" },
    },
    [
      _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c("b-card-header", { staticClass: "pb-50" }, [
            _c("h3", [_vm._v("Novo Abastecimento")]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "invoice-add", attrs: { cols: "12" } },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.NovaOrdem()
                    },
                    reset: _vm.onReset,
                    keydown: function ($event) {
                      return _vm.form.onKeydown($event)
                    },
                  },
                },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "invoice-preview-card p-2",
                      attrs: { "no-body": "" },
                    },
                    [
                      _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { cols: "6", md: "6" } }, [
                            _c("b", [_vm._v("Refs")]),
                            _vm._v(
                              ": " +
                                _vm._s(_vm.form.ordem_id) +
                                "\n            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("b-col", { attrs: { cols: "6", md: "6" } }, [
                            _c("b", [_vm._v("bombas")]),
                            _vm._v(
                              ":\n              " +
                                _vm._s(_vm.bombas.nome_bombas) +
                                "\n            "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("hr"),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "12", xl: "12" } },
                            [
                              _c(
                                "b-card-body",
                                {
                                  staticClass:
                                    "invoice-padding form-item-section",
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table table-bordered table-stripped",
                                        },
                                        [
                                          _c(
                                            "thead",
                                            { staticClass: "thead-light" },
                                            [
                                              _c("tr", [
                                                _c(
                                                  "th",
                                                  {
                                                    staticClass: "text-danger",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                          viatura(matr)\n                        "
                                                    ),
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("projecto")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Rota")]),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v(
                                                    "\n                          Qtd("
                                                  ),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass:
                                                        "text-lowercase",
                                                    },
                                                    [_vm._v("ltr")]
                                                  ),
                                                  _vm._v(
                                                    ")\n                        "
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Turno")]),
                                              ]),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("tbody", [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                {
                                                  staticStyle: { width: "20%" },
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      label: "matricula",
                                                      options: _vm.viatura,
                                                      reduce: function (
                                                        viatura
                                                      ) {
                                                        return viatura.id
                                                      },
                                                    },
                                                    on: {
                                                      input: function ($event) {
                                                        return _vm.getQtd()
                                                      },
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.viatura_id,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "viatura_id",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.viatura_id",
                                                    },
                                                  }),
                                                  _vm._v(
                                                    "\n                          (" +
                                                      _vm._s(_vm.rec_abast) +
                                                      ")\n                        "
                                                  ),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                {
                                                  staticStyle: { width: "20%" },
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      label: "name",
                                                      options: _vm.projecto,
                                                      reduce: function (
                                                        projecto
                                                      ) {
                                                        return projecto.id
                                                      },
                                                    },
                                                    on: {
                                                      input: _vm.fetchRotas,
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.projecto_id,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "projecto_id",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.projecto_id",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                {
                                                  staticStyle: { width: "30%" },
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      multiple: "",
                                                      label: "nome_rota",
                                                      options: _vm.rota,
                                                      reduce: function (rota) {
                                                        return rota.id
                                                      },
                                                    },
                                                    model: {
                                                      value: _vm.form.rota_id,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "rota_id",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.rota_id",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                [
                                                  _c("b-form-input", {
                                                    attrs: {
                                                      type: "number",
                                                      placeholder:
                                                        "Qtd em litros",
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.form.qtd_abastecer,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "qtd_abastecer",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "form.qtd_abastecer",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "td",
                                                {
                                                  staticStyle: { width: "30%" },
                                                },
                                                [
                                                  _c("v-select", {
                                                    attrs: {
                                                      options: [
                                                        "manha",
                                                        "tarde",
                                                      ],
                                                    },
                                                    model: {
                                                      value: _vm.form.turno,
                                                      callback: function ($$v) {
                                                        _vm.$set(
                                                          _vm.form,
                                                          "turno",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "form.turno",
                                                    },
                                                  }),
                                                ],
                                                1
                                              ),
                                            ]),
                                          ]),
                                          _vm._v(" "),
                                          _c("tfoot", [
                                            _c("tr", [
                                              _c(
                                                "td",
                                                {
                                                  staticClass:
                                                    "content-align-right",
                                                  attrs: { colspan: "5" },
                                                },
                                                [
                                                  _c(
                                                    "b-form-group",
                                                    {
                                                      attrs: {
                                                        label: "Justificação",
                                                      },
                                                    },
                                                    [
                                                      _c("b-form-textarea", {
                                                        model: {
                                                          value:
                                                            _vm.form.observacao,
                                                          callback: function (
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.form,
                                                              "observacao",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "form.observacao",
                                                        },
                                                      }),
                                                    ],
                                                    1
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
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
                          _c(
                            "b-col",
                            { attrs: { cols: "9" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "reset",
                                    variant: "secondary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                limpar campos\n              "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            {
                              staticClass: "pull-right float-right",
                              attrs: { cols: "3" },
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "submit",
                                    variant: "outline-primary",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                adicionar a ordem\n              "
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
          _vm._v(" "),
          _vm.bombas.estado === "Aberta" || _vm.bombas.estado === "Pendente"
            ? _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "b-button",
                            {
                              directives: [
                                {
                                  name: "ripple",
                                  rawName: "v-ripple.400",
                                  value: "rgba(113, 102, 240, 0.15)",
                                  expression: "'rgba(113, 102, 240, 0.15)'",
                                  modifiers: { 400: true },
                                },
                              ],
                              attrs: { variant: "outline-success" },
                              on: {
                                click: function ($event) {
                                  return _vm.enviarPedido(_vm.OpenOrder)
                                },
                              },
                            },
                            [_vm._v("enviar pedido de abastecimento")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-light" }, [
                    _c("thead", { staticClass: "thead-light" }, [
                      _c("tr", [
                        _c("th", [_vm._v("Viatura")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Km(actual)")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Qtd a abastecer")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("preço/(ltr)")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Rotas")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Subtotal")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("editar")]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.OpenOrder.ordem_viatura, function (order) {
                        return _c("tr", { key: order.id }, [
                          _c("td", [_vm._v(_vm._s(order.viatura.matricula))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(order.viatura.kilometragem)),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(order.qtd_abastecida))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(
                                    order.preco_cunsumo / order.qtd_abastecida
                                  ) +
                                  "\n              "
                              ),
                            ]),
                            _vm._v(" MZN\n          "),
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            _vm._l(order.ordem_viatura_rota, function (rotas) {
                              return _c("span", { key: rotas }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(rotas.rota.nome_rota) +
                                    ",\n              "
                                ),
                              ])
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(order.preco_cunsumo) +
                                  "\n              "
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { sm: "", variant: "outline-danger" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.removerPedido(order)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fas fa-remove" })]
                              ),
                            ],
                            1
                          ),
                        ])
                      }),
                      0
                    ),
                  ]),
                ],
                1
              )
            : _vm._e(),
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

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novo_abastecimento_vue_vue_type_template_id_09740ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novo_abastecimento.vue?vue&type=template&id=09740ea8& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=template&id=09740ea8&");
/* harmony import */ var _novo_abastecimento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novo_abastecimento.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _novo_abastecimento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _novo_abastecimento_vue_vue_type_template_id_09740ea8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _novo_abastecimento_vue_vue_type_template_id_09740ea8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_novo_abastecimento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./novo_abastecimento.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_novo_abastecimento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=template&id=09740ea8&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=template&id=09740ea8& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_novo_abastecimento_vue_vue_type_template_id_09740ea8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./novo_abastecimento.vue?vue&type=template&id=09740ea8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=template&id=09740ea8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_novo_abastecimento_vue_vue_type_template_id_09740ea8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_novo_abastecimento_vue_vue_type_template_id_09740ea8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
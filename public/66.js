(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _RotasTesteModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RotasTesteModule */ "./resources/js/src/views/Gestao-abastecimentos/rotas-teste/RotasTesteModule.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  name: 'DetalhesRota',
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"]
  },
  setup: function setup() {
    var ROTAS_APP_STORE_MODULE_NAME = 'ROTAS'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(ROTAS_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].registerModule(ROTAS_APP_STORE_MODULE_NAME, _RotasTesteModule__WEBPACK_IMPORTED_MODULE_3__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(ROTAS_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].unregisterModule(ROTAS_APP_STORE_MODULE_NAME);
    });
    var rota = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('ROTAS/getRotaDetails', {
      rotaId: _router__WEBPACK_IMPORTED_MODULE_4__["default"].currentRoute.params.id
    }).then(function (response) {
      rota.value = response.data;
    });
    return {
      rota: rota
    };
  }
}));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=template&id=5064a3bb&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=template&id=5064a3bb& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-card",
        { staticClass: "mb-0", attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            { staticClass: "d-flex align-content-center text-center" },
            [
              _c("b-card-title", { staticStyle: { "font-size": "24" } }, [
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.rota.nome_rota) +
                    "\n          "
                ),
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
                "b-card-body",
                [
                  _c(
                    "b-row",
                    [
                      _c("b-col", [
                        _vm._v("Projecto: " + _vm._s(_vm.rota.projecto.name)),
                      ]),
                      _vm._v(" "),
                      _c("b-col", [
                        _vm._v("Tipo de Rota: " + _vm._s(_vm.rota.tipoRota)),
                      ]),
                      _vm._v(" "),
                      _c("b-col", [
                        _vm._v("Endereço: " + _vm._s(_vm.rota.endereco)),
                      ]),
                      _vm._v(" "),
                      _c("b-col", [
                        _vm._v(
                          "Distancia actual: " +
                            _vm._s(_vm.rota.distancia_km) +
                            " km's"
                        ),
                      ]),
                      _vm._v(" "),
                      _c("b-col", [
                        _vm._v(
                          "Data de actualização: " + _vm._s(_vm.rota.updated_at)
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/rotas-teste/RotasTesteModule.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/rotas-teste/RotasTesteModule.js ***!
  \**************************************************************************************/
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
    fetchRotas: function fetchRotas(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/rotaByDistance', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    getRotaDetails: function getRotaDetails(ctx, _ref) {
      var rotaId = _ref.rotaId;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/Rotas/".concat(rotaId)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rotaDetails_vue_vue_type_template_id_5064a3bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rotaDetails.vue?vue&type=template&id=5064a3bb& */ "./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=template&id=5064a3bb&");
/* harmony import */ var _rotaDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotaDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _rotaDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _rotaDetails_vue_vue_type_template_id_5064a3bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _rotaDetails_vue_vue_type_template_id_5064a3bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rotaDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./rotaDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rotaDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=template&id=5064a3bb&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=template&id=5064a3bb& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rotaDetails_vue_vue_type_template_id_5064a3bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./rotaDetails.vue?vue&type=template&id=5064a3bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/rotas-teste/rotaDetails.vue?vue&type=template&id=5064a3bb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rotaDetails_vue_vue_type_template_id_5064a3bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_rotaDetails_vue_vue_type_template_id_5064a3bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
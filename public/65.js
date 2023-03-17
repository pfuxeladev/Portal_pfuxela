(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  setup: function setup() {
    var _AbastecimentoService = Object(_index__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        TableAbastecimentoServicoRef = _AbastecimentoService.TableAbastecimentoServicoRef,
        perPage = _AbastecimentoService.perPage,
        totalOrderServices = _AbastecimentoService.totalOrderServices,
        currentPage = _AbastecimentoService.currentPage,
        perPageOptions = _AbastecimentoService.perPageOptions,
        querySearch = _AbastecimentoService.querySearch,
        sortBy = _AbastecimentoService.sortBy,
        isSortDirDesc = _AbastecimentoService.isSortDirDesc,
        dataMeta = _AbastecimentoService.dataMeta,
        bombasFilter = _AbastecimentoService.bombasFilter,
        columnField = _AbastecimentoService.columnField;

    return {
      TableAbastecimentoServicoRef: TableAbastecimentoServicoRef,
      perPage: perPage,
      totalOrderServices: totalOrderServices,
      currentPage: currentPage,
      perPageOptions: perPageOptions,
      querySearch: querySearch,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      dataMeta: dataMeta,
      bombasFilter: bombasFilter,
      columnField: columnField
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=template&id=6dd1a408&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=template&id=6dd1a408& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "BCard",
    [
      _c(
        "BCardHeader",
        { staticClass: "d-flex flex-container justify-content-between" },
        [
          _c("BCardTitle", [_vm._v("Abastecimento relativo a serviços")]),
          _vm._v(" "),
          _c(
            "span",
            [
              _c(
                "b-link",
                {
                  staticClass: "btn btn-primary",
                  attrs: {
                    variant: "primary",
                    to: { name: "New Order Service" },
                  },
                },
                [_vm._v("Novo Pedido")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "BCardBody",
        [
          _c(
            "BRow",
            [
              _c("BCol", { attrs: { cols: "12", md: "12" } }, [
                _c(
                  "div",
                  { staticClass: "table-responsive" },
                  [
                    _c("BTable", {
                      staticClass: "position-relative",
                      attrs: {
                        fields: _vm.columnField,
                        "primary-key": "id",
                        "sort-by": _vm.sortBy,
                        "show-empty": "",
                        "empty-text": "Nenhum registo feito",
                        "sort-desc": _vm.isSortDirDesc,
                      },
                      on: {
                        "update:sortBy": function ($event) {
                          _vm.sortBy = $event
                        },
                        "update:sort-by": function ($event) {
                          _vm.sortBy = $event
                        },
                        "update:sortDesc": function ($event) {
                          _vm.isSortDirDesc = $event
                        },
                        "update:sort-desc": function ($event) {
                          _vm.isSortDirDesc = $event
                        },
                      },
                    }),
                  ],
                  1
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AbastecimentoService; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");

function AbastecimentoService() {
  var TableAbastecimentoServicoRef = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalOrderServices = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var querySearch = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])();
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var bombasFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var columnField = [{
    key: 'Codigo',
    sortable: true
  }, {
    key: 'Viatura',
    sortable: true
  }, {
    key: 'Qtd_abastecida',
    sortable: true
  }, {
    key: 'Qtd_actual',
    sortable: true
  }, {
    key: 'Bombas',
    sortable: true
  }, {
    key: 'Cliente',
    sortable: true
  }, {
    key: 'Contacto',
    sortable: true
  }, {
    key: 'Local_recolha',
    sortable: true
  }, {
    key: 'Local_chegada',
    sortable: true
  }, {
    key: 'Hora_partida',
    sortable: true
  }, {
    key: 'Hora_chagada',
    sortable: true
  }, {
    key: 'requisitado_por',
    sortable: true
  }, {
    key: 'Aprovado_por',
    sortable: true
  }, {
    key: 'acção'
  }];
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = TableAbastecimentoServicoRef.value ? TableAbastecimentoServicoRef.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalOrderServices.value
    };
  });

  var refetchData = function refetchData() {
    TableAbastecimentoServicoRef.value.refresh();
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, querySearch, bombasFilter], function () {
    refetchData();
  });
  return {
    TableAbastecimentoServicoRef: TableAbastecimentoServicoRef,
    perPage: perPage,
    totalOrderServices: totalOrderServices,
    currentPage: currentPage,
    perPageOptions: perPageOptions,
    querySearch: querySearch,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    dataMeta: dataMeta,
    bombasFilter: bombasFilter,
    columnField: columnField
  };
} // export default AbastecimentoService()

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6dd1a408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6dd1a408& */ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=template&id=6dd1a408&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6dd1a408___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6dd1a408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=template&id=6dd1a408&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=template&id=6dd1a408& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6dd1a408___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6dd1a408& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/AbastecimentoServico/index.vue?vue&type=template&id=6dd1a408&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6dd1a408___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6dd1a408___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
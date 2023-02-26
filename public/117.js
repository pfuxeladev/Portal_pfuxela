(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./resources/js/src/views/Gestao-abastecimentos/projectos/index.js");
/* harmony import */ var _storeProjectos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storeProjectos */ "./resources/js/src/views/Gestao-abastecimentos/projectos/storeProjectos.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Projects",
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  setup: function setup() {
    var PROJECT_APP_STORE_MODULE_NAME = "app-projects"; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(PROJECT_APP_STORE_MODULE_NAME)) {
      _store__WEBPACK_IMPORTED_MODULE_3__["default"].registerModule(PROJECT_APP_STORE_MODULE_NAME, _storeProjectos__WEBPACK_IMPORTED_MODULE_5__["default"]);
    } // UnRegister on leave


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(PROJECT_APP_STORE_MODULE_NAME)) {
        _store__WEBPACK_IMPORTED_MODULE_3__["default"].unregisterModule(PROJECT_APP_STORE_MODULE_NAME);
      }
    });
    var isAddNewProjectsidebarActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
    var roleOptions = [];
    var planOptions = [];
    var statusOptions = [];

    var _useprojectsList = Object(_index__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        fetchProjects = _useprojectsList.fetchProjects,
        tableColumns = _useprojectsList.tableColumns,
        perPage = _useprojectsList.perPage,
        currentPage = _useprojectsList.currentPage,
        totalProjects = _useprojectsList.totalProjects,
        dataMeta = _useprojectsList.dataMeta,
        perPageOptions = _useprojectsList.perPageOptions,
        searchQuery = _useprojectsList.searchQuery,
        sortBy = _useprojectsList.sortBy,
        isSortDirDesc = _useprojectsList.isSortDirDesc,
        refProjectListTable = _useprojectsList.refProjectListTable,
        refetchData = _useprojectsList.refetchData,
        roleFilter = _useprojectsList.roleFilter,
        planFilter = _useprojectsList.planFilter,
        statusFilter = _useprojectsList.statusFilter;

    return {
      // Sidebar
      isAddNewProjectsidebarActive: isAddNewProjectsidebarActive,
      fetchProjects: fetchProjects,
      tableColumns: tableColumns,
      perPage: perPage,
      currentPage: currentPage,
      totalProjects: totalProjects,
      dataMeta: dataMeta,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      refProjectListTable: refProjectListTable,
      refetchData: refetchData,
      roleOptions: roleOptions,
      planOptions: planOptions,
      statusOptions: statusOptions,
      // Extra Filters
      roleFilter: roleFilter,
      planFilter: planFilter,
      statusFilter: statusFilter
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=template&id=162568f4&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=template&id=162568f4& ***!
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
    { attrs: { "no-body": "" } },
    [
      _c("b-card-header", { staticClass: "pb-50" }, [
        _c("h5", [_vm._v("Filtros")]),
      ]),
      _vm._v(" "),
      _c(
        "b-card-body",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "mb-md-0 mb-2", attrs: { cols: "12", md: "4" } },
                [
                  _c("label", [_vm._v("Projetos")]),
                  _vm._v(" "),
                  _c("v-select", {
                    staticClass: "w-100",
                    attrs: {
                      dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                      value: _vm.roleFilter,
                      "primary-key": "id",
                      options: _vm.roleOptions,
                      reduce: function (val) {
                        return val.value
                      },
                    },
                    on: {
                      input: function (val) {
                        return _vm.$emit("update:roleFilter", val)
                      },
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mb-md-0 mb-2", attrs: { cols: "12", md: "4" } },
                [
                  _c("label", [_vm._v("Nome")]),
                  _vm._v(" "),
                  _c("v-select", {
                    staticClass: "w-100",
                    attrs: {
                      dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                      value: _vm.planFilter,
                      options: _vm.planOptions,
                      reduce: function (val) {
                        return val.value
                      },
                    },
                    on: {
                      input: function (val) {
                        return _vm.$emit("update:NameFilter", val)
                      },
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { staticClass: "mb-md-0 mb-2", attrs: { cols: "12", md: "4" } },
                [
                  _c("label", [_vm._v("pesquisar")]),
                  _vm._v(" "),
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
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { staticClass: "table-responsive mt-2", attrs: { cols: "12" } },
                [
                  _c("b-table", {
                    ref: "refProjectListTable",
                    staticClass: "position-relative",
                    attrs: {
                      items: _vm.fetchProjects,
                      responsive: "",
                      fields: _vm.tableColumns,
                      "primary-key": "id",
                      "sort-by": _vm.sortBy,
                      "show-empty": "",
                      "empty-text": "No matching records found",
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
                    scopedSlots: _vm._u([
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
                                        name: "Project Report",
                                        params: { name: data.item.name },
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
                                      [_vm._v("Relatorios")]
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
                          attrs: { cols: "10", sm: "10" },
                        },
                        [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v(
                              "mostrar " +
                                _vm._s(_vm.dataMeta.from) +
                                " à " +
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
                          attrs: { cols: "2", sm: "2" },
                        },
                        [
                          _c("b-pagination", {
                            staticClass: "mb-0 mt-1 mt-sm-0",
                            attrs: {
                              "total-rows": _vm.totalProjects,
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
      ),
      _vm._v(" "),
      _c("b-modal"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/projectos/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/projectos/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useprojectsList; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");

 // Notification




function useprojectsList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_2__["useToast"])();
  var refProjectListTable = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // Table Handlers

  var tableColumns = [{
    key: 'name',
    sortable: true
  }, {
    key: 'email',
    sortable: true
  }, {
    key: 'telephone',
    sortable: true
  }, {
    key: 'address_xtense',
    sortable: true
  }, {
    key: 'contact_emg',
    sortable: true
  }, {
    key: 'nrPassagers',
    sortable: true
  }, // { key: 'rota', sortable: true },
  {
    key: 'acções'
  }];
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalProjects = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var roleFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var planFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var statusFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refProjectListTable.value ? refProjectListTable.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalProjects.value
    };
  });

  var refetchData = function refetchData() {
    refProjectListTable.value.refresh();
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], function () {
    refetchData();
  });

  var fetchProjects = function fetchProjects(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch('app-projects/fetchProjectos', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value
    }).then(function (response) {
      var projects = response.data;
      callback(projects.data);
      totalProjects.value = projects.total;
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        props: {
          title: 'Error fetching projects list',
          icon: 'AlertTriangleIcon',
          variant: 'danger'
        }
      });
    });
  }; // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*


  return {
    fetchProjects: fetchProjects,
    tableColumns: tableColumns,
    perPage: perPage,
    currentPage: currentPage,
    totalProjects: totalProjects,
    dataMeta: dataMeta,
    perPageOptions: perPageOptions,
    searchQuery: searchQuery,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    refProjectListTable: refProjectListTable,
    refetchData: refetchData,
    // Extra Filters
    roleFilter: roleFilter,
    planFilter: planFilter,
    statusFilter: statusFilter
  };
}

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lista_vue_vue_type_template_id_162568f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista.vue?vue&type=template&id=162568f4& */ "./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=template&id=162568f4&");
/* harmony import */ var _lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lista_vue_vue_type_template_id_162568f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lista_vue_vue_type_template_id_162568f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./lista.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=template&id=162568f4&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=template&id=162568f4& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lista_vue_vue_type_template_id_162568f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./lista.vue?vue&type=template&id=162568f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/projectos/lista.vue?vue&type=template&id=162568f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lista_vue_vue_type_template_id_162568f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lista_vue_vue_type_template_id_162568f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
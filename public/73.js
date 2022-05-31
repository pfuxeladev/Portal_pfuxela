(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  props: {
    variant: {
      type: String,
      "default": 'primary'
    },
    icon: {
      type: String,
      "default": null
    },
    title: {
      type: String,
      "default": null
    },
    text: {
      type: String,
      "default": null
    },
    hideClose: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/comp-functions/forms/form-validation */ "./resources/js/src/@core/comp-functions/forms/form-validation.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-cleave-component */ "./node_modules/vue-cleave-component/dist/vue-cleave.min.js");
/* harmony import */ var vue_cleave_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_cleave_component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var _storeOcorrenciaModules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./storeOcorrenciaModules */ "./resources/js/src/views/Gestao-pickete/relatorios/storeOcorrenciaModules.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index */ "./resources/js/src/views/Gestao-pickete/relatorios/index.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInvalidFeedback"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_6___default.a,
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTextarea"],
    Cleave: vue_cleave_component__WEBPACK_IMPORTED_MODULE_9___default.a,
    DatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"],
    // Form Validation
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"]
  },
  data: function data() {
    return {
      required: _validations__WEBPACK_IMPORTED_MODULE_3__["required"],
      alphaNum: _validations__WEBPACK_IMPORTED_MODULE_3__["alphaNum"],
      email: _validations__WEBPACK_IMPORTED_MODULE_3__["email"],
      viaturas: [],
      motoristas: []
    };
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  created: function created() {
    this.listViaturas();
    this.listMotoristas();
  },
  methods: {
    listViaturas: function listViaturas() {
      var _this = this;

      this.$http.get('/api/listAllViaturas').then(function (response) {
        _this.viaturas = response.data;
      });
    },
    listMotoristas: function listMotoristas() {
      var _this2 = this;

      this.$http.get('/api/listMotoristas').then(function (response) {
        _this2.motoristas = response.data;
      });
    }
  },
  setup: function setup(_ref) {
    var emit = _ref.emit;
    var PIQUECT_STORE_MODULE_NAME = 'Picket';
    var editMode = false; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_16__["default"].hasModule(PIQUECT_STORE_MODULE_NAME)) {
      _store__WEBPACK_IMPORTED_MODULE_16__["default"].registerModule(PIQUECT_STORE_MODULE_NAME, _storeOcorrenciaModules__WEBPACK_IMPORTED_MODULE_11__["default"]);
    } // UnRegister on leave


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_16__["default"].hasModule(PIQUECT_STORE_MODULE_NAME)) {
        _store__WEBPACK_IMPORTED_MODULE_16__["default"].unregisterModule(PIQUECT_STORE_MODULE_NAME);
      }
    });
    var statusOptions = [{
      label: 'Resolvido',
      value: 'Resolvido'
    }, {
      label: 'Não Resolvida',
      value: 'Não Resolvida'
    }];

    function showModal() {
      this.editMode = false;
      this.$refs['my-modal'].show();
    }

    function toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn');
    }

    function onReset(e) {
      e.preventDefault(); // Reset our form values

      this.form.reset();
    }

    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_14__["useToast"])();
    var form = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["ref"])(JSON.parse(JSON.stringify(new vform__WEBPACK_IMPORTED_MODULE_8__["default"]({
      id: '',
      viatura_id: '',
      motorista_id: '',
      descricao_ocorrencia: '',
      hora_da_ocorrencia: '',
      kilometragem: '',
      tipo_ocorrencia: '',
      periodo: '',
      data_ocorrencia: ''
    }))));

    function onSubmit() {
      var _this3 = this;

      this.editMode = false;
      _store__WEBPACK_IMPORTED_MODULE_16__["default"].dispatch('Picket/addOcorrencia', form.value).then(function (response) {
        _this3.$emit('refetch-data');

        toast({
          component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
          props: {
            title: response.data.message,
            icon: 'CheckSquareIcon',
            variant: 'success'
          }
        });

        _this3.toggleModal();
      })["catch"](function (err) {
        console.log(err);

        if (err) {
          toast({
            component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
            props: {
              title: err.response.data.error,
              icon: 'AlertTriangleIcon',
              variant: 'danger'
            }
          });
        }
      });
    }

    var _formValidation = Object(_core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_4__["default"])(form),
        refFormObserver = _formValidation.refFormObserver,
        getValidationState = _formValidation.getValidationState;

    var options = {
      time: {
        time: true,
        timePattern: ['h', 'm', 's']
      }
    };

    var _OcorrenciasList = Object(_index__WEBPACK_IMPORTED_MODULE_12__["default"])(),
        fetchOcorrencias = _OcorrenciasList.fetchOcorrencias,
        tableColumns = _OcorrenciasList.tableColumns,
        perPage = _OcorrenciasList.perPage,
        currentPage = _OcorrenciasList.currentPage,
        totalOcorrencias = _OcorrenciasList.totalOcorrencias,
        dataMeta = _OcorrenciasList.dataMeta,
        perPageOptions = _OcorrenciasList.perPageOptions,
        searchQuery = _OcorrenciasList.searchQuery,
        sortBy = _OcorrenciasList.sortBy,
        isSortDirDesc = _OcorrenciasList.isSortDirDesc,
        refOcorrenciaListTable = _OcorrenciasList.refOcorrenciaListTable,
        refetchData = _OcorrenciasList.refetchData,
        statusFilter = _OcorrenciasList.statusFilter;

    return {
      // Sidebar
      fetchOcorrencias: fetchOcorrencias,
      tableColumns: tableColumns,
      perPage: perPage,
      currentPage: currentPage,
      totalOcorrencias: totalOcorrencias,
      dataMeta: dataMeta,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      refOcorrenciaListTable: refOcorrenciaListTable,
      refetchData: refetchData,
      showModal: showModal,
      toggleModal: toggleModal,
      onReset: onReset,
      form: form,
      onSubmit: onSubmit,
      statusOptions: statusOptions,
      options: options,
      // Extra Filters
      statusFilter: statusFilter,
      refFormObserver: refFormObserver,
      getValidationState: getValidationState
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".toastification-close-icon[data-v-7834b2fa],\n.toastification-title[data-v-7834b2fa] {\n  line-height: 26px;\n}\n.toastification-title[data-v-7834b2fa] {\n  color: inherit;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "toastification" }, [
    _c(
      "div",
      { staticClass: "d-flex align-items-start" },
      [
        _c(
          "b-avatar",
          {
            staticClass: "mr-75 flex-shrink-0",
            attrs: { variant: _vm.variant, size: "1.8rem" },
          },
          [_c("feather-icon", { attrs: { icon: _vm.icon, size: "15" } })],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-grow-1" }, [
          _c("div", [
            _vm.title
              ? _c("h5", {
                  staticClass: "mb-0 font-weight-bolder toastification-title",
                  class: "text-" + _vm.variant,
                  domProps: { textContent: _vm._s(_vm.title) },
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.text
              ? _c("small", {
                  staticClass: "d-inline-block text-body",
                  domProps: { textContent: _vm._s(_vm.text) },
                })
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "cursor-pointer toastification-close-icon ml-auto ",
              on: {
                click: function ($event) {
                  return _vm.$emit("close-toast")
                },
              },
            },
            [
              !_vm.hideClose
                ? _c("feather-icon", {
                    staticClass: "text-body",
                    attrs: { icon: "XIcon" },
                  })
                : _vm._e(),
            ],
            1
          ),
        ]),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=template&id=411f114b&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=template&id=411f114b& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mb-0", attrs: { "no-body": "" } },
    [
      _c(
        "div",
        { staticClass: "m-2" },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                {
                  staticClass:
                    "d-flex align-items-center justify-content-start mb-1 mb-md-0",
                  attrs: { cols: "12", md: "6" },
                },
                [
                  _c("label", [_vm._v("Show")]),
                  _vm._v(" "),
                  _c("v-select", {
                    staticClass: "per-page-selector d-inline-block mx-50",
                    attrs: {
                      dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                      options: _vm.perPageOptions,
                      clearable: false,
                    },
                    model: {
                      value: _vm.perPage,
                      callback: function ($$v) {
                        _vm.perPage = $$v
                      },
                      expression: "perPage",
                    },
                  }),
                  _vm._v(" "),
                  _c("label", [_vm._v("entries")]),
                ],
                1
              ),
              _vm._v(" "),
              _c("b-col", { attrs: { cols: "12", md: "6" } }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex align-items-center justify-content-end",
                  },
                  [
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
                    _vm._v(" "),
                    _c(
                      "b-link",
                      {
                        staticClass: "btn btn-outline-primary",
                        on: { click: _vm.showModal },
                      },
                      [
                        _c("span", { staticClass: "text-nowrap" }, [
                          _vm._v("Ad.ocorrencia"),
                        ]),
                      ]
                    ),
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
      _vm._v(" "),
      _c("b-table", {
        ref: "refOcorrenciaListTable",
        staticClass: "position-relative",
        attrs: {
          items: _vm.fetchOcorrencias,
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
            key: "cell(Data)",
            fn: function (data) {
              return [
                _vm._v("\n      " + _vm._s(data.item.data_ocorrencia) + "\n  "),
              ]
            },
          },
          {
            key: "cell(Hora)",
            fn: function (data) {
              return [
                _vm._v(
                  "\n      " + _vm._s(data.item.hora_da_ocorrencia) + "\n  "
                ),
              ]
            },
          },
          {
            key: "cell(Desrição)",
            fn: function (data) {
              return [
                _vm._v(
                  "\n      " + _vm._s(data.item.descricao_ocorrencia) + "\n  "
                ),
              ]
            },
          },
        ]),
      }),
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
                    "\n          d-flex\n          align-items-center\n          justify-content-center justify-content-sm-start\n        ",
                  attrs: { cols: "12", sm: "6" },
                },
                [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v(
                      "Showing " +
                        _vm._s(_vm.dataMeta.from) +
                        " to " +
                        _vm._s(_vm.dataMeta.to) +
                        " of\n          " +
                        _vm._s(_vm.dataMeta.of) +
                        " entries"
                    ),
                  ]),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass:
                    "\n          d-flex\n          align-items-center\n          justify-content-center justify-content-sm-end\n        ",
                  attrs: { cols: "12", sm: "6" },
                },
                [
                  _c("b-pagination", {
                    staticClass: "mb-0 mt-1 mt-sm-0",
                    attrs: {
                      "total-rows": _vm.totalOcorrencias,
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
                              attrs: { icon: "ChevronLeftIcon", size: "18" },
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
                              attrs: { icon: "ChevronRightIcon", size: "18" },
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
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "my-modal",
          attrs: { size: "lg", "hide-footer": "", title: "Nova ocorrencia" },
        },
        [
          _c("validation-observer", {
            ref: "refFormObserver",
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function (ref) {
                  var handleSubmit = ref.handleSubmit
                  return [
                    _c(
                      "b-form",
                      {
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return handleSubmit(_vm.onSubmit)
                          },
                          reset: _vm.onReset,
                        },
                      },
                      [
                        _c(
                          "b-row",
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.id,
                                  expression: "form.id",
                                },
                              ],
                              attrs: { type: "hidden" },
                              domProps: { value: _vm.form.id },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(_vm.form, "id", $event.target.value)
                                },
                              },
                            }),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6", lg: "6" } },
                              [
                                _c("validation-provider", {
                                  attrs: { name: "viatura", rules: "required" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "viatura",
                                                  state:
                                                    _vm.getValidationState(
                                                      validationContext
                                                    ),
                                                },
                                              },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    label: "matricula",
                                                    options: _vm.viaturas,
                                                    reduce: function (
                                                      viaturas
                                                    ) {
                                                      return viaturas.id
                                                    },
                                                  },
                                                  model: {
                                                    value: _vm.form.viatura_id,
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
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6", lg: "6" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "motorista",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              { attrs: { label: "motorista" } },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    label: "nome",
                                                    options: _vm.motoristas,
                                                    reduce: function (
                                                      motoristas
                                                    ) {
                                                      return motoristas.id
                                                    },
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.motorista_id,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "motorista_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.motorista_id",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6", lg: "6" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "data da ocorrencia",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "data da ocorrencia:",
                                                },
                                              },
                                              [
                                                _c("date-picker", {
                                                  staticStyle: {
                                                    width: "100%",
                                                  },
                                                  attrs: {
                                                    "value-type": "format",
                                                    format: "YYYY-MM-DD",
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    trim: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.data_ocorrencia,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "data_ocorrencia",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.data_ocorrencia",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6", lg: "6" } },
                              [
                                _c("validation-provider", {
                                  attrs: { name: "hora", rules: "required" },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              { attrs: { label: "hora" } },
                                              [
                                                _c("cleave", {
                                                  staticClass: "form-control",
                                                  attrs: {
                                                    id: "time",
                                                    raw: false,
                                                    options: _vm.options.time,
                                                    placeholder: "hh:mm:ss",
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    trim: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form
                                                        .hora_da_ocorrencia,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "hora_da_ocorrencia",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.hora_da_ocorrencia",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6", lg: "6" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "periodo da ocorrencia",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    "periodo da ocorrencia",
                                                  state:
                                                    _vm.getValidationState(
                                                      validationContext
                                                    ),
                                                },
                                              },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    options: [
                                                      "Diurno",
                                                      "Noturno",
                                                    ],
                                                    trim: "",
                                                  },
                                                  model: {
                                                    value: _vm.form.periodo,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "periodo",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.periodo",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6", lg: "6" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "kilometragem actual da viatura",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label:
                                                    "kilometragem actual da viatura",
                                                },
                                              },
                                              [
                                                _c("b-form-input", {
                                                  attrs: {
                                                    type: "number",
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    trim: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.kilometragem,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "kilometragem",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.kilometragem",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6", lg: "6" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "tipo de ocorrencia",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              {
                                                attrs: {
                                                  label: "tipo de ocorrencia",
                                                  state:
                                                    _vm.getValidationState(
                                                      validationContext
                                                    ),
                                                },
                                              },
                                              [
                                                _c("v-select", {
                                                  attrs: {
                                                    options: [
                                                      "Informativa",
                                                      "Necessita reparacao",
                                                    ],
                                                    trim: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form.tipo_ocorrencia,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "tipo_ocorrencia",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.tipo_ocorrencia",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "12", lg: "12" } },
                              [
                                _c("validation-provider", {
                                  attrs: {
                                    name: "descricao",
                                    rules: "required",
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function (validationContext) {
                                          return [
                                            _c(
                                              "b-form-group",
                                              { attrs: { label: "descricao" } },
                                              [
                                                _c("b-form-textarea", {
                                                  attrs: {
                                                    id: "textarea",
                                                    placeholder:
                                                      "Faça o Relato dos factos",
                                                    state:
                                                      _vm.getValidationState(
                                                        validationContext
                                                      ),
                                                    trim: "",
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.form
                                                        .descricao_ocorrencia,
                                                    callback: function ($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "descricao_ocorrencia",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "form.descricao_ocorrencia",
                                                  },
                                                }),
                                                _vm._v(" "),
                                                _c("b-form-invalid-feedback", [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        validationContext
                                                          .errors[0]
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]),
                                              ],
                                              1
                                            ),
                                          ]
                                        },
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "6", lg: "6" } },
                              [
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      type: "submit",
                                      variant: "outline-success",
                                    },
                                  },
                                  [_vm._v("emitir ocorrência")]
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
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12", md: "12", lg: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "float-right",
                      attrs: { variant: "outline-warning" },
                      on: { click: _vm.toggleModal },
                    },
                    [_vm._v("\n          fechar\n        ")]
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

/***/ "./resources/js/src/@core/comp-functions/forms/form-validation.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/@core/comp-functions/forms/form-validation.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formValidation; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
 // ===========================================================
// ! This is coupled with "veeValidate" plugin
// ===========================================================

function formValidation(resetFormData) {
  var clearFormData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  // ------------------------------------------------
  // refFormObserver
  // ! This is for veeValidate Observer
  // * Used for veeValidate form observer
  // ------------------------------------------------
  var refFormObserver = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // ------------------------------------------------
  // resetObserver
  // ! This function is coupled with veeValidate
  // * It resets form observer
  // ------------------------------------------------

  var resetObserver = function resetObserver() {
    refFormObserver.value.reset();
  }; // ------------------------------------------------
  // getValidationState
  // ! This function is coupled with veeValidate
  // * It returns true/false based on validation
  // ------------------------------------------------
  // eslint-disable-next-line object-curly-newline


  var getValidationState = function getValidationState(_ref) {
    var dirty = _ref.dirty,
        validated = _ref.validated,
        fieldRequired = _ref.required,
        changed = _ref.changed,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
    var result = dirty || validated ? valid : null;
    return !fieldRequired && !changed ? null : result;
  }; // ------------------------------------------------
  // resetForm
  // ! This function is coupled with veeValidate
  // * This uses resetFormData arg to reset form data
  // ------------------------------------------------


  var resetForm = function resetForm() {
    resetFormData();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
      resetObserver();
    });
  }; // ------------------------------------------------
  // clearForm
  // ! This function is coupled with veeValidate
  // * This uses clearFormData arg to reset form data
  // ------------------------------------------------


  var clearForm = function clearForm() {
    clearFormData();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
      resetObserver();
    });
  };

  return {
    refFormObserver: refFormObserver,
    resetObserver: resetObserver,
    getValidationState: getValidationState,
    resetForm: resetForm,
    clearForm: clearForm
  };
}

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony import */ var _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7834b2fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/toastification/ToastificationContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=style&index=0&id=7834b2fa&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_style_index_0_id_7834b2fa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/toastification/ToastificationContent.vue?vue&type=template&id=7834b2fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToastificationContent_vue_vue_type_template_id_7834b2fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/utils/filter.js":
/*!************************************************!*\
  !*** ./resources/js/src/@core/utils/filter.js ***!
  \************************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/utils/utils.js");











var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_10__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./resources/js/src/@core/utils/utils.js":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/utils/utils.js ***!
  \***********************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var C_wamp64_www_portal_pfuxela_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_wamp64_www_portal_pfuxela_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return Object(C_wamp64_www_portal_pfuxela_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_2__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return Object(C_wamp64_www_portal_pfuxela_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_wamp64_www_portal_pfuxela_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validations.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validations.js ***!
  \*****************************************************************/
/*! exports provided: required, email, min, confirmed, regex, between, alpha, integer, digits, alphaDash, alphaNum, length, positive, credit, password, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmed", function() { return confirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaDash", function() { return alphaDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNum", function() { return alphaNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positive", function() { return positive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credit", function() { return credit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json");
var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json", 1);
/* harmony import */ var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json");
var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json", 1);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators */ "./resources/js/src/@core/utils/validations/validators.js");



 // eslint-disable-next-line object-curly-newline

 // ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

var required = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('required', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]);
var email = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('email', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
var min = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('min', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"]);
var confirmed = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"]);
var regex = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('regex', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["regex"]);
var between = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('between', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["between"]);
var alpha = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha"]);
var integer = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('integer', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
var digits = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('digits', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["digits"]);
var alphaDash = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-dash', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
var alphaNum = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-num', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
var length = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('length', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["length"]);
var positive = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('positive', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPositive"],
  message: 'Please enter positive number!'
});
var credit = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('credit-card', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorCreditCard"],
  message: 'It is not valid credit card!'
});
var password = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('password', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPassword"],
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit'
});
var url = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('url', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorUrlValidator"],
  message: 'URL is invalid'
}); // Install English and Arabic localizations.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["localize"])({
  en: {
    messages: vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__.messages,
    names: {
      email: 'Email',
      password: 'Password'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  ar: {
    messages: vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر'
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك'
      }
    }
  }
}); // ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////
// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
// }
// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }
// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }
// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation
//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/
//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }
// export const date = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }
// export const max = (val, max) => {
//   // If blank return
//   if (val === undefined || val === null) return true
//   return val.length <= max || `More than ${max} characters are not allowed`
// }
// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }
// export const min = (val, min) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   return val.length >= min || `Minimum ${min} characters are required`
// }
// export const num_range = (val, min, max) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validators.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validators.js ***!
  \****************************************************************/
/*! exports provided: validatorPositive, validatorPassword, validatorCreditCard, validatorUrlValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPositive", function() { return validatorPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPassword", function() { return validatorPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorCreditCard", function() { return validatorCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorUrlValidator", function() { return validatorUrlValidator; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);


var validatorPositive = function validatorPositive(value) {
  if (value >= 0) {
    return true;
  }

  return false;
};
var validatorPassword = function validatorPassword(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */

  var validPassword = regExp.test(password);
  return validPassword;
};
var validatorCreditCard = function validatorCreditCard(creditnum) {
  /* eslint-disable no-useless-escape */
  var cRegExp = /^(?:3[47][0-9]{13})$/;
  /* eslint-enable no-useless-escape */

  var validCreditCard = cRegExp.test(creditnum);
  return validCreditCard;
};
var validatorUrlValidator = function validatorUrlValidator(val) {
  if (val === undefined || val === null || val.length === 0) {
    return true;
  }
  /* eslint-disable no-useless-escape */


  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  /* eslint-enable no-useless-escape */

  return re.test(val);
};

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gestao_ocorrencias_vue_vue_type_template_id_411f114b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestao_ocorrencias.vue?vue&type=template&id=411f114b& */ "./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=template&id=411f114b&");
/* harmony import */ var _gestao_ocorrencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestao_ocorrencias.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _gestao_ocorrencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gestao_ocorrencias_vue_vue_type_template_id_411f114b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gestao_ocorrencias_vue_vue_type_template_id_411f114b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gestao_ocorrencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./gestao_ocorrencias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gestao_ocorrencias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=template&id=411f114b&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=template&id=411f114b& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gestao_ocorrencias_vue_vue_type_template_id_411f114b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./gestao_ocorrencias.vue?vue&type=template&id=411f114b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/gestao_ocorrencias.vue?vue&type=template&id=411f114b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gestao_ocorrencias_vue_vue_type_template_id_411f114b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gestao_ocorrencias_vue_vue_type_template_id_411f114b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OcorrenciasList; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");


 // Notification



function OcorrenciasList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__["useToast"])();
  var refOcorrenciaListTable = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // Table Handlers

  var tableColumns = [{
    key: 'codigo',
    sortable: true
  }, {
    key: 'Data',
    sortable: true
  }, {
    key: 'Hora',
    sortable: true
  }, {
    key: 'motorista',
    sortable: true
  }, {
    key: 'Desrição',
    sortable: true
  }, {
    key: 'viatura',
    sortable: true
  }, {
    key: 'motorista',
    sortable: true
  }, {
    key: 'created_by.email',
    sortable: true
  }, {
    key: 'status',
    sortable: true
  }, {
    key: 'actions'
  }];
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalOcorrencias = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var roleFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var planFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var statusFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refOcorrenciaListTable.value ? refOcorrenciaListTable.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalOcorrencias.value
    };
  });

  var refetchData = function refetchData() {
    refOcorrenciaListTable.value.refresh();
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], function () {
    refetchData();
  });

  var fetchOcorrencias = function fetchOcorrencias(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('Picket/fetchOcorrencias', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
      role: roleFilter.value,
      plan: planFilter.value,
      status: statusFilter.value
    }).then(function (response) {
      var viaturas = response.data;
      callback(viaturas.data);
      totalOcorrencias.value = viaturas.total;
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        props: {
          title: 'Error fetching users list',
          icon: 'AlertTriangleIcon',
          variant: 'danger'
        }
      });
    });
  };

  return {
    fetchOcorrencias: fetchOcorrencias,
    tableColumns: tableColumns,
    perPage: perPage,
    currentPage: currentPage,
    totalOcorrencias: totalOcorrencias,
    dataMeta: dataMeta,
    perPageOptions: perPageOptions,
    searchQuery: searchQuery,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    refOcorrenciaListTable: refOcorrenciaListTable,
    refetchData: refetchData,
    // Extra Filters
    roleFilter: roleFilter,
    planFilter: planFilter,
    statusFilter: statusFilter
  };
}

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/storeOcorrenciaModules.js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/storeOcorrenciaModules.js ***!
  \************************************************************************************/
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
    fetchOcorrencias: function fetchOcorrencias(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/Ocorrencia', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchOcorrencia: function fetchOcorrencia(ctx, _ref) {
      var id = _ref.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/Ocorrencia/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addOcorrencia: function addOcorrencia(ctx, ocorrenciaData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/Ocorrencia', ocorrenciaData).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    } // addViatura(ctx, userData) {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .post('/api/viatura', { user: userData })
    //       .then(response => resolve(response))
    //       .catch(error => reject(error))
    //   })
    // },

  }
});

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _storeAbastecimentos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storeAbastecimentos */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/storeAbastecimentos.js");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"],
    'b-toggle': bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["VBToggle"]
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BTableLite: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTableLite"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroupItem"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  setup: function setup() {
    var SupplyData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4__["useToast"])();
    var SUPPLY_STORE_MODULE_NAME = 'Supply'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_5__["default"].hasModule(SUPPLY_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_5__["default"].registerModule(SUPPLY_STORE_MODULE_NAME, _storeAbastecimentos__WEBPACK_IMPORTED_MODULE_7__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_5__["default"].hasModule(SUPPLY_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_5__["default"].unregisterModule(SUPPLY_STORE_MODULE_NAME);
    });
    _store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch('Supply/fetchAbastecimentoDetails', {
      refs: _router__WEBPACK_IMPORTED_MODULE_6__["default"].currentRoute.params.refs
    }).then(function (response) {
      SupplyData.value = response.data;
    })["catch"](function (error) {
      if (error.response.status === 404) {
        SupplyData.value = undefined;
      }
    });

    function Aprovar(refs) {
      var _this = this;

      this.$swal({
        title: 'Deseja permitir envio da ordem ?',
        showCancelButton: true,
        showClass: {
          popup: 'animate__animated animate__flipInX'
        },
        confirmButtonText: 'Sim'
      }).then(function (result) {
        if (result.isConfirmed) {
          _store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch('Supply/ApproveOrder', {
            refs: refs
          }).then(function (res) {
            _this.$emit('refetch-data');

            toast({
              component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
              props: {
                title: res.data.success,
                icon: 'CheckSquareIcon',
                variant: 'success'
              }
            });
          })["catch"](function (err) {
            if (err.response.status === 421) {
              toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                props: {
                  title: err.response.data.erro,
                  icon: 'AlertTriangleIcon',
                  variant: 'danger'
                }
              });
            } else if (err.response.status === 500) {
              toast({
                component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
                props: {
                  title: 'Erro do sistema contacte o administrador',
                  icon: 'AlertTriangleIcon',
                  variant: 'danger'
                }
              });
            }
          }); //   this.$swal('Saved!', '', 'success')
        } else if (result.isDenied) {
          _this.$swal('Nenhuma ordem foi enviada', '', 'info');
        }
      });
    }

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_9___default()(value).format('DD/MM/YYYY hh:mm');
    }

    function Reprovar(refs) {
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].dispatch('Supply/CancelarOrdem', {
        refs: refs
      }).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    }

    var printInvoice = function printInvoice() {
      window.print();
    };

    var fields = ['Rota', 'turno'];
    return {
      SupplyData: SupplyData,
      printInvoice: printInvoice,
      fields: fields,
      Aprovar: Aprovar,
      Reprovar: Reprovar,
      dateTime: dateTime
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir=ltr] .invoice-preview .invoice-padding[data-v-5164c1fc], [dir=ltr] .invoice-edit .invoice-padding[data-v-5164c1fc], [dir=ltr] .invoice-add .invoice-padding[data-v-5164c1fc] {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}[dir=rtl] .invoice-preview .invoice-padding[data-v-5164c1fc], [dir=rtl] .invoice-edit .invoice-padding[data-v-5164c1fc], [dir=rtl] .invoice-add .invoice-padding[data-v-5164c1fc] {\n  padding-right: 2.5rem;\n  padding-left: 2.5rem;\n}\n[dir=ltr] .invoice-preview .table th[data-v-5164c1fc]:first-child, [dir=ltr] .invoice-preview .table td[data-v-5164c1fc]:first-child, [dir=ltr] .invoice-edit .table th[data-v-5164c1fc]:first-child, [dir=ltr] .invoice-edit .table td[data-v-5164c1fc]:first-child, [dir=ltr] .invoice-add .table th[data-v-5164c1fc]:first-child, [dir=ltr] .invoice-add .table td[data-v-5164c1fc]:first-child {\n  padding-left: 2.5rem;\n}\n[dir=rtl] .invoice-preview .table th[data-v-5164c1fc]:first-child, [dir=rtl] .invoice-preview .table td[data-v-5164c1fc]:first-child, [dir=rtl] .invoice-edit .table th[data-v-5164c1fc]:first-child, [dir=rtl] .invoice-edit .table td[data-v-5164c1fc]:first-child, [dir=rtl] .invoice-add .table th[data-v-5164c1fc]:first-child, [dir=rtl] .invoice-add .table td[data-v-5164c1fc]:first-child {\n  padding-right: 2.5rem;\n}\n.invoice-preview .logo-wrapper[data-v-5164c1fc],\n.invoice-edit .logo-wrapper[data-v-5164c1fc],\n.invoice-add .logo-wrapper[data-v-5164c1fc] {\n  display: flex;\n  align-items: center;\n}\n[dir] .invoice-preview .logo-wrapper[data-v-5164c1fc], [dir] .invoice-edit .logo-wrapper[data-v-5164c1fc], [dir] .invoice-add .logo-wrapper[data-v-5164c1fc] {\n  margin-bottom: 1.9rem;\n}\n.invoice-preview .logo-wrapper .invoice-logo[data-v-5164c1fc],\n.invoice-edit .logo-wrapper .invoice-logo[data-v-5164c1fc],\n.invoice-add .logo-wrapper .invoice-logo[data-v-5164c1fc] {\n  font-size: 2.142rem;\n  font-weight: bold;\n  letter-spacing: -0.54px;\n}\n[dir] .invoice-preview .logo-wrapper .invoice-logo[data-v-5164c1fc], [dir] .invoice-edit .logo-wrapper .invoice-logo[data-v-5164c1fc], [dir] .invoice-add .logo-wrapper .invoice-logo[data-v-5164c1fc] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-preview .logo-wrapper .invoice-logo[data-v-5164c1fc], [dir=ltr] .invoice-edit .logo-wrapper .invoice-logo[data-v-5164c1fc], [dir=ltr] .invoice-add .logo-wrapper .invoice-logo[data-v-5164c1fc] {\n  margin-left: 1rem;\n}\n[dir=rtl] .invoice-preview .logo-wrapper .invoice-logo[data-v-5164c1fc], [dir=rtl] .invoice-edit .logo-wrapper .invoice-logo[data-v-5164c1fc], [dir=rtl] .invoice-add .logo-wrapper .invoice-logo[data-v-5164c1fc] {\n  margin-right: 1rem;\n}\n.invoice-preview .invoice-title[data-v-5164c1fc],\n.invoice-edit .invoice-title[data-v-5164c1fc],\n.invoice-add .invoice-title[data-v-5164c1fc] {\n  font-size: 1.285rem;\n}\n[dir] .invoice-preview .invoice-title[data-v-5164c1fc], [dir] .invoice-edit .invoice-title[data-v-5164c1fc], [dir] .invoice-add .invoice-title[data-v-5164c1fc] {\n  margin-bottom: 1rem;\n}\n.invoice-preview .invoice-title .invoice-number[data-v-5164c1fc],\n.invoice-edit .invoice-title .invoice-number[data-v-5164c1fc],\n.invoice-add .invoice-title .invoice-number[data-v-5164c1fc] {\n  font-weight: 600;\n}\n.invoice-preview .invoice-date-wrapper[data-v-5164c1fc],\n.invoice-edit .invoice-date-wrapper[data-v-5164c1fc],\n.invoice-add .invoice-date-wrapper[data-v-5164c1fc] {\n  display: flex;\n  align-items: center;\n}\n[dir] .invoice-preview .invoice-date-wrapper[data-v-5164c1fc]:not(:last-of-type), [dir] .invoice-edit .invoice-date-wrapper[data-v-5164c1fc]:not(:last-of-type), [dir] .invoice-add .invoice-date-wrapper[data-v-5164c1fc]:not(:last-of-type) {\n  margin-bottom: 0.5rem;\n}\n.invoice-preview .invoice-date-wrapper .invoice-date-title[data-v-5164c1fc],\n.invoice-edit .invoice-date-wrapper .invoice-date-title[data-v-5164c1fc],\n.invoice-add .invoice-date-wrapper .invoice-date-title[data-v-5164c1fc] {\n  width: 7rem;\n}\n[dir] .invoice-preview .invoice-date-wrapper .invoice-date-title[data-v-5164c1fc], [dir] .invoice-edit .invoice-date-wrapper .invoice-date-title[data-v-5164c1fc], [dir] .invoice-add .invoice-date-wrapper .invoice-date-title[data-v-5164c1fc] {\n  margin-bottom: 0;\n}\n.invoice-preview .invoice-date-wrapper .invoice-date[data-v-5164c1fc],\n.invoice-edit .invoice-date-wrapper .invoice-date[data-v-5164c1fc],\n.invoice-add .invoice-date-wrapper .invoice-date[data-v-5164c1fc] {\n  font-weight: 600;\n}\n[dir] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-5164c1fc], [dir] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-5164c1fc], [dir] .invoice-add .invoice-date-wrapper .invoice-date[data-v-5164c1fc] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-5164c1fc], [dir=ltr] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-5164c1fc], [dir=ltr] .invoice-add .invoice-date-wrapper .invoice-date[data-v-5164c1fc] {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .invoice-preview .invoice-date-wrapper .invoice-date[data-v-5164c1fc], [dir=rtl] .invoice-edit .invoice-date-wrapper .invoice-date[data-v-5164c1fc], [dir=rtl] .invoice-add .invoice-date-wrapper .invoice-date[data-v-5164c1fc] {\n  margin-right: 0.5rem;\n}\n[dir] .invoice-preview .invoice-spacing[data-v-5164c1fc], [dir] .invoice-edit .invoice-spacing[data-v-5164c1fc], [dir] .invoice-add .invoice-spacing[data-v-5164c1fc] {\n  margin: 1.45rem 0;\n}\n.invoice-preview .invoice-number-date .title[data-v-5164c1fc],\n.invoice-edit .invoice-number-date .title[data-v-5164c1fc],\n.invoice-add .invoice-number-date .title[data-v-5164c1fc] {\n  width: 115px;\n}\n.invoice-preview .invoice-total-wrapper[data-v-5164c1fc],\n.invoice-edit .invoice-total-wrapper[data-v-5164c1fc],\n.invoice-add .invoice-total-wrapper[data-v-5164c1fc] {\n  width: 100%;\n  max-width: 12rem;\n}\n.invoice-preview .invoice-total-wrapper .invoice-total-item[data-v-5164c1fc],\n.invoice-edit .invoice-total-wrapper .invoice-total-item[data-v-5164c1fc],\n.invoice-add .invoice-total-wrapper .invoice-total-item[data-v-5164c1fc] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir] .invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-5164c1fc], [dir] .invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-5164c1fc], [dir] .invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-title[data-v-5164c1fc] {\n  margin-bottom: 0.35rem;\n}\n.invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-5164c1fc],\n.invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-5164c1fc],\n.invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-5164c1fc] {\n  font-weight: 600;\n}\n[dir] .invoice-preview .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-5164c1fc], [dir] .invoice-edit .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-5164c1fc], [dir] .invoice-add .invoice-total-wrapper .invoice-total-item .invoice-total-amount[data-v-5164c1fc] {\n  margin-bottom: 0.35rem;\n}\n@media (min-width: 768px) {\n[dir] .invoice-preview .invoice-title[data-v-5164c1fc], [dir] .invoice-edit .invoice-title[data-v-5164c1fc], [dir] .invoice-add .invoice-title[data-v-5164c1fc] {\n    margin-bottom: 3rem;\n}\n[dir=ltr] .invoice-preview .invoice-title[data-v-5164c1fc], [dir=ltr] .invoice-edit .invoice-title[data-v-5164c1fc], [dir=ltr] .invoice-add .invoice-title[data-v-5164c1fc] {\n    text-align: right;\n}\n[dir=rtl] .invoice-preview .invoice-title[data-v-5164c1fc], [dir=rtl] .invoice-edit .invoice-title[data-v-5164c1fc], [dir=rtl] .invoice-add .invoice-title[data-v-5164c1fc] {\n    text-align: left;\n}\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-title[data-v-5164c1fc], [dir] .invoice-add .invoice-preview-card .invoice-title[data-v-5164c1fc] {\n  margin-bottom: 0;\n}\n[dir=ltr] .invoice-edit .invoice-preview-card .invoice-title[data-v-5164c1fc], [dir=ltr] .invoice-add .invoice-preview-card .invoice-title[data-v-5164c1fc] {\n  text-align: left;\n  margin-right: 3.5rem;\n}\n[dir=rtl] .invoice-edit .invoice-preview-card .invoice-title[data-v-5164c1fc], [dir=rtl] .invoice-add .invoice-preview-card .invoice-title[data-v-5164c1fc] {\n  text-align: right;\n  margin-left: 3.5rem;\n}\n.invoice-edit .invoice-preview-card .invoice-edit-input[data-v-5164c1fc],\n.invoice-edit .invoice-preview-card .invoice-edit-input-group[data-v-5164c1fc],\n.invoice-add .invoice-preview-card .invoice-edit-input[data-v-5164c1fc],\n.invoice-add .invoice-preview-card .invoice-edit-input-group[data-v-5164c1fc] {\n  max-width: 11.21rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-product-details[data-v-5164c1fc], [dir] .invoice-add .invoice-preview-card .invoice-product-details[data-v-5164c1fc] {\n  background-color: #fcfcfc;\n  padding: 3.75rem 3.45rem 2.3rem 3.45rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-product-details .product-details-border[data-v-5164c1fc], [dir] .invoice-add .invoice-preview-card .invoice-product-details .product-details-border[data-v-5164c1fc] {\n  border: 1px solid #ebe9f1;\n  border-radius: 0.357rem;\n}\n[dir] .invoice-edit .invoice-preview-card .invoice-to-title[data-v-5164c1fc], [dir] .invoice-add .invoice-preview-card .invoice-to-title[data-v-5164c1fc] {\n  margin-bottom: 1.9rem;\n}\n.invoice-edit .invoice-preview-card .col-title[data-v-5164c1fc],\n.invoice-add .invoice-preview-card .col-title[data-v-5164c1fc] {\n  position: absolute;\n  top: -3.2rem;\n}\n.invoice-edit .invoice-preview-card .item-options-menu[data-v-5164c1fc],\n.invoice-add .invoice-preview-card .item-options-menu[data-v-5164c1fc] {\n  min-width: 20rem;\n}\n[dir] .invoice-edit .invoice-preview-card .repeater-wrapper[data-v-5164c1fc]:not(:last-child), [dir] .invoice-add .invoice-preview-card .repeater-wrapper[data-v-5164c1fc]:not(:last-child) {\n  margin-bottom: 3rem;\n}\n.invoice-edit .invoice-preview-card .invoice-calculations .total-amt-title[data-v-5164c1fc],\n.invoice-add .invoice-preview-card .invoice-calculations .total-amt-title[data-v-5164c1fc] {\n  width: 100px;\n}\n@media (max-width: 769px) {\n.invoice-edit .invoice-preview-card .invoice-title[data-v-5164c1fc],\n.invoice-add .invoice-preview-card .invoice-title[data-v-5164c1fc] {\n    width: 115px;\n}\n[dir=ltr] .invoice-edit .invoice-preview-card .invoice-title[data-v-5164c1fc], [dir=ltr] .invoice-add .invoice-preview-card .invoice-title[data-v-5164c1fc] {\n    margin-right: 0;\n}\n[dir=rtl] .invoice-edit .invoice-preview-card .invoice-title[data-v-5164c1fc], [dir=rtl] .invoice-add .invoice-preview-card .invoice-title[data-v-5164c1fc] {\n    margin-left: 0;\n}\n.invoice-edit .invoice-preview-card .invoice-edit-input[data-v-5164c1fc],\n.invoice-add .invoice-preview-card .invoice-edit-input[data-v-5164c1fc] {\n    max-width: 100%;\n}\n}\n@media (max-width: 992px) {\n.invoice-edit .col-title[data-v-5164c1fc],\n.invoice-add .col-title[data-v-5164c1fc] {\n    top: -1.5rem !important;\n}\n}\n@media print {\n[dir] .invoice-edit hr[data-v-5164c1fc], [dir] .invoice-add hr[data-v-5164c1fc] {\n    margin-top: 1rem !important;\n    margin-bottom: 1rem !important;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media print {\n[dir] body {\n    background-color: transparent !important;\n}\nnav.header-navbar {\n    display: none;\n}\n.main-menu {\n    display: none;\n}\n.header-navbar-shadow {\n    display: none !important;\n}\n[dir] .content.app-content {\n    padding-top: 2rem !important;\n}\n[dir=ltr] .content.app-content {\n    margin-left: 0;\n}\n[dir=rtl] .content.app-content {\n    margin-right: 0;\n}\nfooter.footer {\n    display: none;\n}\n[dir] .card {\n    background-color: transparent;\n    box-shadow: none;\n}\n.customizer-toggle {\n    display: none !important;\n}\n.invoice-preview-wrapper .row.invoice-preview .col-md-8 {\n    max-width: 100%;\n    flex-grow: 1;\n}\n.invoice-preview-wrapper .row.invoice-preview .invoice-preview-card .card-body:nth-of-type(2) .row > .col-12 {\n    max-width: 50% !important;\n}\n.invoice-preview-wrapper .row.invoice-preview .invoice-preview-card .card-body:nth-of-type(2) .row .col-12:nth-child(2) {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-end;\n}\n[dir] .invoice-preview-wrapper .row.invoice-preview .invoice-preview-card .card-body:nth-of-type(2) .row .col-12:nth-child(2) {\n    margin-top: 0 !important;\n}\n.invoice-preview-wrapper .invoice-actions {\n    display: none;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./abastecimentoDetail.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=template&id=5164c1fc&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=template&id=5164c1fc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "invoice-preview-wrapper" },
    [
      _vm.SupplyData
        ? _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12", lg: "12", md: "10" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "invoice-preview-card",
                      attrs: { "no-body": "" },
                    },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "mt-2" },
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
                                        _c("b", [_vm._v("Ref")]),
                                        _vm._v(
                                          ": " + _vm._s(_vm.SupplyData.refs)
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-list-group-item", [
                                        _c("b", [_vm._v("Ordem")]),
                                        _vm._v(
                                          ": " +
                                            _vm._s(
                                              _vm.SupplyData.ordem.codigo_ordem
                                            )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-list-group-item", [
                                        _c("b", [_vm._v("Bombas")]),
                                        _vm._v(
                                          ": " +
                                            _vm._s(
                                              _vm.SupplyData.ordem.bombas
                                                .nome_bombas
                                            ) +
                                            " "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-list-group-item", [
                                        _c("b", [
                                          _vm._v("Qtd total requisitad0"),
                                        ]),
                                        _vm._v(
                                          ": " + _vm._s(_vm.SupplyData.qtd_rec)
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
                                {
                                  staticClass: "pull-right ml-auto",
                                  attrs: { cols: "4" },
                                },
                                [
                                  _c(
                                    "b-list-group",
                                    [
                                      _c("b-list-group-item", [
                                        _c("b", [_vm._v("Requisitado por")]),
                                        _vm._v(
                                          ": " +
                                            _vm._s(
                                              _vm.SupplyData.ordem.created_by
                                                .name
                                            )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-list-group-item", [
                                        _c("b", [_vm._v("Estado")]),
                                        _vm._v(": "),
                                        _vm.SupplyData.ordem.estado ===
                                        "pendente"
                                          ? _c(
                                              "span",
                                              [
                                                _c(
                                                  "b-badge",
                                                  {
                                                    attrs: {
                                                      variant: "warning",
                                                    },
                                                  },
                                                  [_vm._v("Pendende")]
                                                ),
                                              ],
                                              1
                                            )
                                          : _vm.SupplyData.ordem.estado ===
                                            "Autorizado"
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
                                                  [_vm._v("Autorizada")]
                                                ),
                                              ],
                                              1
                                            )
                                          : _c("span", [
                                              _vm._v("Ordem rejeitada"),
                                            ]),
                                      ]),
                                      _vm._v(" "),
                                      _vm.SupplyData.ordem.approved_by !== null
                                        ? _c("b-list-group-item", [
                                            _c("b", [_vm._v("Autorizado por")]),
                                            _vm._v(
                                              ": " +
                                                _vm._s(
                                                  _vm.SupplyData.ordem
                                                    .approved_by.name
                                                ) +
                                                "\n                "
                                            ),
                                          ])
                                        : _vm._e(),
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
                            "b-row",
                            [
                              _c("b-col", [_c("b", [_vm._v("Matricula")])]),
                              _vm._v(" "),
                              _c("b-col", [
                                _c("b", [_vm._v("Qtd a abastecer")]),
                              ]),
                              _vm._v(" "),
                              _c("b-col", [_c("b", [_vm._v("Data")])]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(
                            _vm.SupplyData.ordem.ordem_viatura,
                            function (vt, index) {
                              return _c(
                                "b-row",
                                { key: index },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "4", md: "4" } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(vt.viatura.matricula) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "4", md: "4" } },
                                    [
                                      _vm._v(
                                        "\n                   " +
                                          _vm._s(vt.qtd_abastecida) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-col",
                                    { attrs: { cols: "4", md: "4" } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(_vm.dateTime(vt.updated_at)) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            }
                          ),
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.SupplyData.ordem.abastecimento_rota.length > 0
                        ? _c(
                            "span",
                            [
                              _c("b-table-lite", {
                                attrs: {
                                  responsive: "",
                                  items:
                                    _vm.SupplyData.ordem.abastecimento_rota,
                                  fields: _vm.fields,
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "cell(rota)",
                                      fn: function (data) {
                                        return [
                                          _vm._v(
                                            "\n            " +
                                              _vm._s(data.item.rota.nome_rota) +
                                              "\n          "
                                          ),
                                        ]
                                      },
                                    },
                                  ],
                                  null,
                                  false,
                                  2890230046
                                ),
                              }),
                            ],
                            1
                          )
                        : _c(
                            "span",
                            [
                              _c(
                                "b-row",
                                { staticClass: "m-1" },
                                [
                                  _c("b-col", [_c("b", [_vm._v("Descrição")])]),
                                  _vm._v(" "),
                                  _c("b-col", [_c("b", [_vm._v("Destino")])]),
                                  _vm._v(" "),
                                  _c("b-col", [
                                    _c("b", [_vm._v("Hora de partida")]),
                                  ]),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm._l(
                                _vm.SupplyData.abastecimento_extra,
                                function (extra) {
                                  return _c(
                                    "b-row",
                                    { key: extra.id, staticClass: "m-1" },
                                    [
                                      _c("b-col", [
                                        _vm._v(_vm._s(extra.descricao)),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-col", [
                                        _vm._v(_vm._s(extra.destino)),
                                      ]),
                                      _vm._v(" "),
                                      _c("b-col", [
                                        _vm._v(_vm._s(extra.horaSaida)),
                                      ]),
                                    ],
                                    1
                                  )
                                }
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
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "12", xl: "2", md: "2" } },
                [
                  _c(
                    "b-link",
                    {
                      staticClass: "btn btn-md btn-outline-primary",
                      attrs: { to: { name: "Supply" } },
                    },
                    [_vm._v("\n        Voltar\n      ")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("b-col", { attrs: { cols: "12", xl: "2", md: "2" } }, [
                _vm.SupplyData.ordem.estado === "pendente"
                  ? _c(
                      "span",
                      [
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "outline-success" },
                            on: {
                              click: function ($event) {
                                return _vm.Aprovar(_vm.SupplyData.ordem.refs)
                              },
                            },
                          },
                          [_vm._v("\n        Autorizar\n      ")]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
              ]),
              _vm._v(" "),
              _c("b-col", { attrs: { cols: "12", xl: "2", md: "2" } }, [
                _vm.SupplyData.ordem.estado === "Cancelado"
                  ? _c(
                      "span",
                      [
                        _c("b-button", { attrs: { variant: "warning" } }, [
                          _vm._v("Reabrir"),
                        ]),
                      ],
                      1
                    )
                  : _c(
                      "span",
                      [
                        _c(
                          "b-button",
                          {
                            attrs: { variant: "outline-danger" },
                            on: {
                              click: function ($event) {
                                return _vm.Reprovar(_vm.SupplyData.ordem.refs)
                              },
                            },
                          },
                          [_vm._v("\n        Cancelar\n      ")]
                        ),
                      ],
                      1
                    ),
              ]),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abastecimentoDetail_vue_vue_type_template_id_5164c1fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abastecimentoDetail.vue?vue&type=template&id=5164c1fc&scoped=true& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=template&id=5164c1fc&scoped=true&");
/* harmony import */ var _abastecimentoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abastecimentoDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _abastecimentoDetail_vue_vue_type_style_index_0_id_5164c1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true&");
/* harmony import */ var _abastecimentoDetail_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abastecimentoDetail.vue?vue&type=style&index=1&lang=scss& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _abastecimentoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _abastecimentoDetail_vue_vue_type_template_id_5164c1fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _abastecimentoDetail_vue_vue_type_template_id_5164c1fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5164c1fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./abastecimentoDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_0_id_5164c1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=0&id=5164c1fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_0_id_5164c1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_0_id_5164c1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_0_id_5164c1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_0_id_5164c1fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./abastecimentoDetail.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=template&id=5164c1fc&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=template&id=5164c1fc&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_template_id_5164c1fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./abastecimentoDetail.vue?vue&type=template&id=5164c1fc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/abastecimentoDetail.vue?vue&type=template&id=5164c1fc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_template_id_5164c1fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_abastecimentoDetail_vue_vue_type_template_id_5164c1fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
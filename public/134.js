(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[134],{

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
      bomba: [{
        id: null,
        nome_bombas: ''
      }],
      abastecimento: [],
      OpenOrder: {},
      form: new vform__WEBPACK_IMPORTED_MODULE_3__["default"]({
        bombas_id: null,
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
    var _this = this;

    this.fetchProjectos();
    this.fetchViaturas();
    this.fetchBombas();
    this.getSubmited();
    this.getQtd();
    this.$http.get('/api/bombas').then(function (res) {
      _this.bomba = res.data;
    });
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mounted: function mounted() {// console.log(this.bombas)
  },
  methods: {
    getQtd: function getQtd() {
      var _this2 = this;

      //   alert(viatura_id)
      this.$http.get("/api/getQtdDisponivel/".concat(this.form.viatura_id)).then(function (res) {
        _this2.rec_abast = res.data;
        console.log(_this2.rec_abast);
      })["catch"](function (err) {});
    },
    fetchProjectos: function fetchProjectos() {
      var _this3 = this;

      this.$http.get('/api/listProject').then(function (response) {
        _this3.projecto = response.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    fetchRotas: function fetchRotas() {
      var _this4 = this;

      console.log(this.form.abastecer); //   for (let i = 0; i < this.form.abastecer.length; i++ ) {

      this.$http.get('/api/todasRotas').then(function (res) {
        _this4.rota = res.data;

        if (res.data === '') {
          _this4.$swal.fire({
            icon: 'error',
            title: 'Nao existe nenhuma rota cadastrada!'
          });
        }
      })["catch"](function (err) {
        _this4.$swal.fire({
          icon: 'error',
          title: 'Erro ao tentar buscar!'
        });
      }); //   }
    },
    fetchBombas: function fetchBombas() {
      var _this5 = this;

      this.$http.get("/api/bomba/".concat(this.$route.params.refs)).then(function (res) {
        _this5.bombas = res.data; // console.log(this.bombas)
      });
    },
    fetchViaturas: function fetchViaturas() {
      var _this6 = this;

      this.$http.get('/api/listarViaturas').then(function (res) {
        _this6.viatura = res.data;
      });
    },
    returnAbastecimento: function returnAbastecimento() {
      var _this7 = this;

      this.$http.get("/api/CurrentAbst/".concat(this.$route.params.refs)).then(function (res) {
        _this7.abastecimento = res.data;
      });
    },
    NovaOrdem: function NovaOrdem() {
      var _this8 = this;

      this.$Progress.start();
      this.form.post('/api/Abastecimento').then(function (res) {
        if (res.status === 200) {
          _this8.$swal.fire({
            icon: 'success',
            title: res.data.success
          }); // location.reload()


          _this8.$Progress.finish();

          _this8.form.reset(); // eslint-disable-next-line no-restricted-globals


          _router__WEBPACK_IMPORTED_MODULE_8__["default"].push({
            name: 'supply-details',
            params: {
              refs: _router__WEBPACK_IMPORTED_MODULE_8__["default"].currentRoute.params.refs
            }
          });
          window.location.reload();
        }
      })["catch"](function (err) {
        if (err.response.status === 421) {
          _this8.$swal.fire({
            icon: 'error',
            title: err.response.data.erro
          });

          _this8.$Progress.fail();
        } else if (err.response.status === 422) {
          _this8.$swal.fire({
            icon: 'error',
            title: "".concat(err.response.data.errors.viatura_id, "<br/>").concat(err.response.data.errors.rota_id, "<br/>").concat(err.response.data.errors.turno, "<br/>").concat(err.response.data.errors.qtd_abastecer)
          });

          _this8.$Progress.fail();
        }
      });
    },
    onReset: function onReset(event) {
      var _this9 = this;

      event.preventDefault(); // Reset our form values

      this.form.reset(); // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this9.show = true;
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
      var _this10 = this;

      this.$http.get("/api/Ordems/".concat(_router__WEBPACK_IMPORTED_MODULE_8__["default"].currentRoute.params.refs)).then(function (response) {
        _this10.OpenOrder = response.data;
        console.log(_this10.OpenOrder);
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
      var _this11 = this;

      this.$swal({
        title: 'Submeter a ordem? <br/> Não poderá reverter essa acção!',
        // text: 'Nao podera reverter essa accao!',
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
            });

            _this11.$router.push({
              name: 'supply-details',
              params: {
                refs: _router__WEBPACK_IMPORTED_MODULE_8__["default"].currentRoute.params.refs
              }
            });

            window.location.reload();
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
      //   console.log(order)
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

/***/ "./node_modules/vform/dist/vform.es.js":
/*!*********************************************!*\
  !*** ./node_modules/vform/dist/vform.es.js ***!
  \*********************************************/
/*! exports provided: default, Errors, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Errors", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return g; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(s)for(var a of s(i))r.call(i,a)&&o(e,a,i[a]);return e};const n=e=>void 0===e,c=e=>Array.isArray(e),l=e=>e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.slice,u=(e,t,s,r)=>((t=t||{}).indices=!n(t.indices)&&t.indices,t.nullsAsUndefineds=!n(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!n(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!n(t.allowEmptyArrays)&&t.allowEmptyArrays,s=s||new FormData,n(e)||(null===e?t.nullsAsUndefineds||s.append(r,""):(e=>"boolean"==typeof e)(e)?t.booleansAsIntegers?s.append(r,e?1:0):s.append(r,e):c(e)?e.length?e.forEach(((e,o)=>{const i=r+"["+(t.indices?o:"")+"]";u(e,t,s,i)})):t.allowEmptyArrays&&s.append(r+"[]",""):(e=>e instanceof Date)(e)?s.append(r,e.toISOString()):!(e=>e===Object(e))(e)||(e=>l(e)&&"string"==typeof e.name&&("object"==typeof e.lastModifiedDate||"number"==typeof e.lastModified))(e)||l(e)?s.append(r,e):Object.keys(e).forEach((o=>{const i=e[o];if(c(i))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);u(i,t,s,r?r+"["+o+"]":o)}))),s);var h={serialize:u};function d(e){if(null===e||"object"!=typeof e)return e;const t=Array.isArray(e)?[]:{};return Object.keys(e).forEach((s=>{t[s]=d(e[s])})),t}function f(e){return Array.isArray(e)?e:[e]}function p(e){return e instanceof File||e instanceof Blob||e instanceof FileList||"object"==typeof e&&null!==e&&void 0!==Object.values(e).find((e=>p(e)))}class y{constructor(){this.errors={},this.errors={}}set(e,t){"object"==typeof e?this.errors=e:this.set(i(i({},this.errors),{[e]:f(t)}))}all(){return this.errors}has(e){return Object.prototype.hasOwnProperty.call(this.errors,e)}hasAny(...e){return e.some((e=>this.has(e)))}any(){return Object.keys(this.errors).length>0}get(e){if(this.has(e))return this.getAll(e)[0]}getAll(e){return f(this.errors[e]||[])}only(...e){const t=[];return e.forEach((e=>{const s=this.get(e);s&&t.push(s)})),t}flatten(){return Object.values(this.errors).reduce(((e,t)=>e.concat(t)),[])}clear(e){const t={};e&&Object.keys(this.errors).forEach((s=>{s!==e&&(t[s]=this.errors[s])})),this.set(t)}}class g{constructor(e={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new y,this.progress=void 0,this.update(e)}static make(e){return new this(e)}update(e){this.originalData=Object.assign({},this.originalData,d(e)),Object.assign(this,e)}fill(e={}){this.keys().forEach((t=>{this[t]=e[t]}))}data(){return this.keys().reduce(((e,t)=>i(i({},e),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((e=>!g.ignore.includes(e)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),g.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((e=>!g.ignore.includes(e))).forEach((e=>{this[e]=d(this.originalData[e])}))}get(e,t={}){return this.submit("get",e,t)}post(e,t={}){return this.submit("post",e,t)}patch(e,t={}){return this.submit("patch",e,t)}put(e,t={}){return this.submit("put",e,t)}delete(e,t={}){return this.submit("delete",e,t)}submit(e,t,s={}){return this.startProcessing(),s=i({data:{},params:{},url:this.route(t),method:e,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===e.toLowerCase()?s.params=i(i({},this.data()),s.params):(s.data=i(i({},this.data()),s.data),p(s.data)&&!s.transformRequest&&(s.transformRequest=[e=>h.serialize(e)])),new Promise(((e,t)=>{(g.axios||axios__WEBPACK_IMPORTED_MODULE_0___default.a).request(s).then((t=>{this.finishProcessing(),e(t)})).catch((e=>{this.handleErrors(e),t(e)}))}))}handleErrors(e){this.busy=!1,this.progress=void 0,e.response&&this.errors.set(this.extractErrors(e.response))}extractErrors(e){return e.data&&"object"==typeof e.data?e.data.errors?i({},e.data.errors):e.data.message?{error:e.data.message}:i({},e.data):{error:g.errorMessage}}handleUploadProgress(e){this.progress={total:e.total,loaded:e.loaded,percentage:Math.round(100*e.loaded/e.total)}}route(e,t={}){let s=e;return Object.prototype.hasOwnProperty.call(g.routes,e)&&(s=decodeURI(g.routes[e])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((e=>{s=s.replace(`{${e}}`,t[e])})),s}onKeydown(e){const t=e.target;t.name&&this.errors.clear(t.name)}}g.routes={},g.errorMessage="Something went wrong. Please try again.",g.recentlySuccessfulTimeout=2e3,g.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];/* harmony default export */ __webpack_exports__["default"] = (g);


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
                          _c(
                            "b-col",
                            { attrs: { cols: "6", md: "6" } },
                            [
                              _c("b", [_vm._v("bombas")]),
                              _vm._v(":\n              "),
                              _c("v-select", {
                                attrs: {
                                  label: "nome_bombas",
                                  options: _vm.bomba,
                                  reduce: function (bomba) {
                                    return bomba.id
                                  },
                                },
                                model: {
                                  value: _vm.form.bombas_id,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "bombas_id", $$v)
                                  },
                                  expression: "form.bombas_id",
                                },
                              }),
                            ],
                            1
                          ),
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
                                                      ")Litros no tanque\n                        "
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
                                                      type: "text",
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
          _vm.OpenOrder.estado === "Aberta" ||
          _vm.OpenOrder.estado === "Pendente"
            ? _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
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
                      _vm._l(
                        _vm.OpenOrder.ordem_viatura,
                        function (order, index) {
                          return _c("tr", { key: index }, [
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
                              _vm._l(
                                order.ordem_viatura_rota,
                                function (rotas) {
                                  return _c("span", { key: rotas }, [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(rotas.rota.nome_rota) +
                                        ",\n              "
                                    ),
                                  ])
                                }
                              ),
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
                                    attrs: {
                                      sm: "",
                                      variant: "outline-danger",
                                    },
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
                        }
                      ),
                      0
                    ),
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3" },
                    [
                      _c(
                        "b-col",
                        { staticClass: "text-center", attrs: { cols: "12" } },
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



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/storeAbastecimentos.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/storeAbastecimentos.js ***!
  \********************************************************************************************/
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
    fetchAbastecimentos: function fetchAbastecimentos(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/Abastecimento', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchAbastecimentoDetails: function fetchAbastecimentoDetails(ctx, _ref) {
      var refs = _ref.refs;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/Ordems/".concat(refs)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addAbastecimento: function addAbastecimento(ctx, SupplyDatas) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/submeterAbst', SupplyDatas).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addAbastecimentoRecorrente: function addAbastecimentoRecorrente(ctx, SupplyDatas) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/abastecimento_extra', SupplyDatas).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    ApproveOrder: function ApproveOrder(ctx, _ref2) {
      var refs = _ref2.refs;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/AprovarOrdem/".concat(refs)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    CancelOrder: function CancelOrder(ctx, _ref3) {
      var refs = _ref3.refs;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/CancelarOrdem/".concat(refs)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    AbastecimentoRecorrente: function AbastecimentoRecorrente(ctx, abstData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/AbastecimentoRecorrente', abstData).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    getAbastecimentoExtraOrdinario: function getAbastecimentoExtraOrdinario() {},
    fetchAbstRecDetails: function fetchAbstRecDetails(ctx, _ref4) {
      var refs = _ref4.refs;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/AbstCorrDetails/".concat(refs)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    getHistory: function getHistory(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/RelatorioGeral', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    // ReabrirOrdem
    ReopenOrder: function ReopenOrder(ctx, _ref5) {
      var refs = _ref5.refs;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/ReabrirOrdem/".concat(refs)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    // verOrdensAbertas
    getOpenOrder: function getOpenOrder(ctx, _ref6) {
      var refs = _ref6.refs;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/Ordems/".concat(refs)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    removeLine: function removeLine(ctx, _ref7) {
      var refs = _ref7.refs;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/removeLine/".concat(refs)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ })

}]);
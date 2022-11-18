(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storaRelatorioModule */ "./resources/js/src/views/Gestao-pickete/relatorios/storaRelatorioModule.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckbox"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTextarea"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    BFormTimepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormTimepicker"],
    BFormRadioGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRadioGroup"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormCheckboxGroup"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BModal"]
  },
  data: function data() {
    return {
      rota: [],
      motoristas: [],
      viatura: [],
      value: null,
      options: [{
        text: "Ok",
        value: "Ok"
      }, {
        text: "No",
        value: "No"
      }, {
        text: "Parcial",
        value: "Parcial"
      }],
      options2: [{
        text: "Rota",
        value: "Rota"
      }, {
        text: "Outros Servicos",
        value: "Outros Servicos"
      }, {
        text: "Expediente",
        value: "Expediente"
      }]
    };
  },
  computed: {
    state: function state() {
      return Boolean(this.value);
    }
  },
  mounted: function mounted() {
    this.getRotas();
    this.getMotoristas();
    this.getViaturas();
    this.changeOption();
    this.getKmActual();
  },
  methods: {
    getRotas: function getRotas() {
      var _this = this;

      this.$http.get("/api/todasRotas").then(function (res) {
        _this.rota = res.data;
      });
    },
    getViaturas: function getViaturas() {
      var _this2 = this;

      this.$http.get("/api/listViaturaDentro").then(function (res) {
        _this2.viatura = res.data;
      });
    },
    getMotoristas: function getMotoristas() {
      var _this3 = this;

      this.$http.get("/api/listMotoristas").then(function (res) {
        _this3.motoristas = res.data;
      });
    },
    getKmActual: function getKmActual() {
      var _this4 = this;

      //   console.log(this.form.viatura_id)
      this.$http.get("/api/kmActual/".concat(this.form.viatura_id)).then(function (res) {
        _this4.form.km_inicio = res.data.kilometragem;
      });
    },
    changeOption: function changeOption() {
      if (this.form.isRota === true) {
        this.form.isOuthers = false;
      }
    },
    changeOption1: function changeOption1() {
      if (this.form.isOuthers === true) {
        this.form.isRota = false;
      }
    },
    openModal: function openModal() {
      this.$refs["Atributos"].show();
    }
  },
  setup: function setup() {
    var CHECKLISTOUT_STORE_MODULE_NAME = "Picket";
    if (!_store__WEBPACK_IMPORTED_MODULE_7__["default"].hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_7__["default"].registerModule(CHECKLISTOUT_STORE_MODULE_NAME, _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_8__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_7__["default"].hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_7__["default"].unregisterModule(CHECKLISTOUT_STORE_MODULE_NAME);
    });
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4__["useToast"])();
    var options = [{
      text: "Okay",
      value: "Okay"
    }, {
      text: "No",
      value: "No"
    }, {
      text: "Parcial",
      value: "Parcial"
    }];
    var chklst = [{
      id: null,
      checklist_name: "",
      opcao: ""
    }];
    var form = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])(JSON.parse(JSON.stringify(new vform__WEBPACK_IMPORTED_MODULE_3__["default"]({
      motorista_id: null,
      viatura_id: null,
      isRota: false,
      isOuthers: false,
      carta_conducao: true,
      km_inicio: 0,
      hora_inicio: "0:00",
      tipo_saida: "",
      litros_tanque: 0,
      checklist_var: {
        id: null,
        checklist_name: "",
        opcao: ""
      }
    }))));
    var attributeChecklist = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])(JSON.parse(JSON.stringify(new vform__WEBPACK_IMPORTED_MODULE_3__["default"]({
      checklist_name: null,
      categoria: "",
      email_forward: ""
    }))));

    function addMore() {
      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch("Picket/addAtributo", attributeChecklist.value).then(function (res) {
        toast({
          component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
          props: {
            title: res.data.success,
            icon: "CheckSquareIcon",
            variant: "success"
          }
        });
        window.location.reload();
      })["catch"](function (err) {
        if (err.response.status === 421) {
          toast({
            component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            props: {
              title: err.response.data.erro,
              icon: "AlertTriangleIcon",
              variant: "danger"
            }
          });
        }
      });
    }

    function OnSubmit() {
      var _this5 = this;

      _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch("Picket/addCheckListOut", form.value).then(function (response) {
        toast({
          component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
          props: {
            title: response.data.message,
            icon: "CheckSquareIcon",
            variant: "success"
          }
        });

        _this5.$router.push({
          name: "Vehicle-movements"
        });
      })["catch"](function (err) {
        if (err.response.status === 421) {
          toast({
            component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            props: {
              title: err.response.data.error,
              icon: "AlertTriangleIcon",
              variant: "danger"
            }
          });
        } else if (err.response.status === 422) {
          toast({
            component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            props: {
              title: "Erro..! verifique se todos campos estão devidamente preenchidos",
              icon: "AlertTriangleIcon",
              variant: "danger"
            }
          });
        } else {
          toast({
            component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
            props: {
              title: err.response.data.error,
              icon: "AlertTriangleIcon",
              variant: "danger"
            }
          });
        }
      });
    }

    return {
      OnSubmit: OnSubmit,
      form: form,
      attributeChecklist: attributeChecklist,
      chklst: chklst,
      addMore: addMore,
      options: options
    };
  },
  created: function created() {
    var _this6 = this;

    _store__WEBPACK_IMPORTED_MODULE_7__["default"].dispatch("Picket/getAtributos").then(function (res) {
      _this6.form.checklist_var = res.data;
    }); // this.form.checklist_var = this.chklst
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=template&id=25f0d606&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=template&id=25f0d606& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "content-header" },
        [
          _c(
            "b-col",
            {
              staticClass: "content-header-left mb-2",
              attrs: { cols: "12", md: "9" },
            },
            [
              _c(
                "b-row",
                { staticClass: "breadcrumb-top" },
                [
                  _c("b-col", { attrs: { cols: "12" } }, [
                    _c(
                      "h2",
                      {
                        staticClass:
                          "content-header-title float-left pr-1 mb-0",
                      },
                      [
                        _vm._v(
                          "\n            Pedido de Autorização de Saida\n          "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "breadcrumb-wrapper" }, [
                      _c("ol", { staticClass: "breadcrumb" }, [
                        _c(
                          "li",
                          { staticClass: "breadcrumb-item" },
                          [
                            _c(
                              "b-link",
                              {
                                staticClass: "router-link-active",
                                attrs: {
                                  to: { name: "Vehicle-movements" },
                                  target: "_self",
                                },
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticClass:
                                      "align-text-top feather feather-home",
                                    attrs: {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "16px",
                                      height: "16px",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      "stroke-width": "2",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                    },
                                  },
                                  [
                                    _c("path", {
                                      attrs: {
                                        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                                      },
                                    }),
                                    _vm._v(" "),
                                    _c("polyline", {
                                      attrs: {
                                        points: "9 22 9 12 15 12 15 22",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("li", { staticClass: "breadcrumb-item" }, [
                          _c("a", { attrs: { href: "#", target: "_self" } }, [
                            _vm._v(" Saida de viatura "),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "breadcrumb-item active" }, [
                          _c(
                            "span",
                            { attrs: { "aria-current": "location" } },
                            [_vm._v(" Autorização ")]
                          ),
                        ]),
                      ]),
                    ]),
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
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("b-card-title", [
                _vm._v("\n        Formulário de inspenção\n      "),
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "outline-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.openModal()
                            },
                          },
                        },
                        [_vm._v("criar atributos da checklist")]
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
          _c("hr"),
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
                      return _vm.OnSubmit.apply(null, arguments)
                    },
                  },
                },
                [
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "3", lg: "6", xl: "6" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Matricula" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "matricula",
                                  options: _vm.viatura,
                                  reduce: function (viatura) {
                                    return viatura.id
                                  },
                                },
                                on: {
                                  input: function ($event) {
                                    return _vm.getKmActual()
                                  },
                                },
                                model: {
                                  value: _vm.form.viatura_id,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "viatura_id", $$v)
                                  },
                                  expression: "form.viatura_id",
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
                        "b-col",
                        { attrs: { cols: "12", md: "3", lg: "6", xl: "6" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Motorista" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "nome",
                                  options: _vm.motoristas,
                                  reduce: function (motoristas) {
                                    return motoristas.id
                                  },
                                },
                                model: {
                                  value: _vm.form.motorista_id,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "motorista_id", $$v)
                                  },
                                  expression: "form.motorista_id",
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
                        "b-col",
                        { attrs: { cols: "12", md: "3", lg: "6", xl: "6" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "Kilometragem actual" } },
                            [
                              _c("b-form-input", {
                                attrs: { type: "text", readonly: "" },
                                model: {
                                  value: _vm.form.km_inicio,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "km_inicio", $$v)
                                  },
                                  expression: "form.km_inicio",
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
                        "b-col",
                        { attrs: { cols: "12", md: "3", lg: "6", xl: "6" } },
                        [
                          _c(
                            "b-form-group",
                            { attrs: { label: "hora de partida" } },
                            [
                              _c("b-form-timepicker", {
                                attrs: { locale: "pt-Br" },
                                model: {
                                  value: _vm.form.hora_inicio,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.form, "hora_inicio", $$v)
                                  },
                                  expression: "form.hora_inicio",
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
                        "b-col",
                        { attrs: { cols: "12", md: "6", lg: "8", xl: "10" } },
                        [
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c(
                              "tbody",
                              [
                                _vm._l(
                                  _vm.form.checklist_var,
                                  function (chk, i) {
                                    return _c("tr", { key: "B" + i }, [
                                      _c("td", [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: chk.id,
                                              expression: "chk.id",
                                            },
                                          ],
                                          attrs: { type: "hidden" },
                                          domProps: { value: chk.id },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                chk,
                                                "id",
                                                $event.target.value
                                              )
                                            },
                                          },
                                        }),
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(chk.checklist_name) +
                                            "\n                  "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "b-form-group",
                                            [
                                              _c("b-form-radio-group", {
                                                attrs: {
                                                  options: _vm.options,
                                                  required: "",
                                                },
                                                model: {
                                                  value: chk.opcao,
                                                  callback: function ($$v) {
                                                    _vm.$set(chk, "opcao", $$v)
                                                  },
                                                  expression: "chk.opcao",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ])
                                  }
                                ),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", [_vm._v("Tipo de Saida")]),
                                  _vm._v(" "),
                                  _c(
                                    "td",
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          label: "text",
                                          options: _vm.options2,
                                          reduce: function (options2) {
                                            return options2.value
                                          },
                                        },
                                        model: {
                                          value: _vm.form.tipo_saida,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "tipo_saida",
                                              $$v
                                            )
                                          },
                                          expression: "form.tipo_saida",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ]),
                              ],
                              2
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-2" },
                    [
                      _c(
                        "b-col",
                        { attrs: { cols: "6", md: "6" } },
                        [
                          _c("b-button", { attrs: { type: "reset" } }, [
                            _vm._v(" limpar "),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "6", md: "6" } },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                type: "submit",
                                variant: "outline-primary",
                              },
                            },
                            [_vm._v("\n              submeter\n            ")]
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
      _c(
        "b-modal",
        {
          ref: "Atributos",
          attrs: { size: "lg", "hide-footer": "", title: "Novo atributo" },
        },
        [
          _c(
            "b-form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.addMore()
                },
              },
            },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Nome do atributo" } },
                        [
                          _c("b-form-input", {
                            attrs: { type: "text" },
                            model: {
                              value: _vm.attributeChecklist.checklist_name,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.attributeChecklist,
                                  "checklist_name",
                                  $$v
                                )
                              },
                              expression: "attributeChecklist.checklist_name",
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
                    "b-col",
                    { attrs: { cols: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Categoria ocorrencia" } },
                        [
                          _c("v-select", {
                            attrs: {
                              options: [
                                "Controle Externo",
                                "Motor",
                                "Parte electrica",
                                "Conforto e Segurança",
                                "Documentação",
                              ],
                            },
                            model: {
                              value: _vm.attributeChecklist.categoria,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.attributeChecklist,
                                  "categoria",
                                  $$v
                                )
                              },
                              expression: "attributeChecklist.categoria",
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
                    "b-col",
                    { attrs: { cols: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Ëmail a encaminhar ocorrencia" } },
                        [
                          _c("b-form-input", {
                            attrs: { type: "email" },
                            model: {
                              value: _vm.attributeChecklist.email_forward,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.attributeChecklist,
                                  "email_forward",
                                  $$v
                                )
                              },
                              expression: "attributeChecklist.email_forward",
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
                "b-row",
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-2",
                          attrs: { type: "submit", variant: "outline-success" },
                        },
                        [
                          _c("i", { staticClass: "fas fa-paper-plane" }),
                          _vm._v("\n            adicionar\n          "),
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

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nova_saida_vue_vue_type_template_id_25f0d606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nova_saida.vue?vue&type=template&id=25f0d606& */ "./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=template&id=25f0d606&");
/* harmony import */ var _nova_saida_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nova_saida.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nova_saida_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nova_saida_vue_vue_type_template_id_25f0d606___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nova_saida_vue_vue_type_template_id_25f0d606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_saida_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./nova_saida.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_saida_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=template&id=25f0d606&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=template&id=25f0d606& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_saida_vue_vue_type_template_id_25f0d606___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./nova_saida.vue?vue&type=template&id=25f0d606& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/nova_saida.vue?vue&type=template&id=25f0d606&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_saida_vue_vue_type_template_id_25f0d606___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_saida_vue_vue_type_template_id_25f0d606___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
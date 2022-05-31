(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/novo_abastecimento.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BFormRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRow"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormText"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"]
  },
  data: function data() {
    return {
      viatura: [],
      rota: [],
      projecto: [],
      rec_abast: null,
      bombas: {},
      abastecimento: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
    this.fetchBombas(); // single data

    this.getQtd();
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
        _this4.bombas = res.data;
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
        _this7.$swal.fire({
          icon: 'error',
          title: res.data.success
        });

        _this7.$Progress.finish();

        _this7.$router.push({
          name: 'Supply'
        });

        _this7.form.reset();
      })["catch"](function (err) {
        if (err) {
          _this7.$swal.fire({
            icon: 'error',
            title: 'Erro ao tentar adicionar!'
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
                                _vm._s(_vm.bombas.bombas) +
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
                                                _c("th", [
                                                  _vm._v(
                                                    "\n                          Turno\n                        "
                                                  ),
                                                ]),
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
                                                      ")\n\n                        "
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
                            { attrs: { cols: "10" } },
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
                              attrs: { cols: "2" },
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    type: "submit",
                                    variant: "outline-success",
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                enviar\n              "
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
          _c("b-col", { attrs: { cols: "12" } }, [
            _c("table", { staticClass: "table table-light" }, [
              _c("thead", { staticClass: "thead-light" }, [
                _c("tr", [
                  _c("th", [_vm._v("Viatura")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Km(inicial)")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Bombas")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Qtd disponivel")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Qtd a abastecer")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("preço/(ltr)")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Projecto")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Rotas")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Subtotal")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("editar")]),
                ]),
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                  _vm._v(" "),
                  _c("td"),
                ]),
              ]),
            ]),
          ]),
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
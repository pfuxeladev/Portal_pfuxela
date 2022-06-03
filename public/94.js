(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Bombas',
  show: true,
  editMode: false,
  components: {
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCollapse"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardSubTitle"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardTitle"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCardBody"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BBadge"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_3___default.a,
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BModal"],
    BFormRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormRow"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BFormText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormText"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormCheckboxGroup"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormCheckbox"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BListGroupItem"]
  },
  data: function data() {
    return {
      show: false,
      editMode: false,
      options: [{
        item: 'Gasolina',
        name: 'Gasolina'
      }, {
        item: 'Diesel',
        name: 'Diesel'
      }],
      tipo_bomba: null,
      bombas: [],
      details: {
        responsavel: [],
        combustivel: [],
        combustivel_bomba: []
      },
      combustivel: [],
      form: new vform__WEBPACK_IMPORTED_MODULE_4__["default"]({
        id: null,
        nome_bombas: '',
        capacidade: '',
        tipo_bomba: '',
        combustivel_tipos: [],
        //   responsavel
        preco_diesel: 0,
        preco_gasolina: 0,
        responsavel: [{
          nome: '',
          email_bomba: '',
          contacto: '',
          contacto_alt: ''
        }],
        unit_measure: null
      })
    };
  },
  created: function created() {
    var _this = this;

    this.$http.get('/api/bombas').then(function (res) {
      _this.bombas = res.data;
    });
    this.$http.get('/api/listCombustivel').then(function (res) {
      _this.combustivel = res.data;
    });
  },
  methods: {
    OpenForm: function OpenForm() {
      this.show = true;
    },
    closeForm: function closeForm() {
      this.show = false;
    },
    showModal: function showModal() {
      this.editMode = false;
      this.$refs['my-modal'].show();
      this.form.reset();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    toggleModal: function toggleModal() {
      this.$refs['my-modal'].toggle('#toggle-btn');
    },
    add: function add() {
      this.form.responsavel.push({
        nome: '',
        email_bomba: '',
        contacto: '',
        contacto_alt: ''
      });
    },
    rmRow: function rmRow(index) {
      this.form.responsavel.splice(index, 1);
    },
    returnBombas: function returnBombas() {
      var _this2 = this;

      this.$http.get('/api/bombas').then(function (res) {
        _this2.bombas = res.data;
      });
    },
    onSubmit: function onSubmit(event) {
      var _this3 = this;

      this.$Progress.start();
      this.form.post('/api/bombas').then(function (res) {
        _this3.$swal.fire({
          icon: 'success',
          title: res.data.message
        });

        Fire.$emit('afterAction');

        _this3.form.clear();

        _this3.form.reset();

        _this3.$Progress.finish();

        _this3.returnBombas();

        _this3.hideModal();
      })["catch"](function (err) {
        _this3.$swal.fire({
          icon: 'error',
          title: 'Erro ao tentar adicionar!'
        });

        _this3.$Progress.fail();
      });
    },
    // actualizar ,combustivel
    updateFuel: function updateFuel() {
      var _this4 = this;

      console.log(this.combustivel);
      this.$http.post('/api/updateCombustivel', this.combustivel).then(function (res) {
        _this4.show = false;

        _this4.$swal.fire({
          icon: 'success',
          title: res.data.success
        });
      });
    },
    // end metodo
    openUpdate: function openUpdate(b) {
      this.$refs['my-modal'].show();
      this.form.fill(b);
      this.editMode = true;
    },
    openDetails: function openDetails(b) {
      this.details = b; //   document.getElementById('ResponsavelBomba').show()

      this.$refs.responsavel.toggle('#open-dtl');
    },
    onUpdateForm: function onUpdateForm() {
      var _this5 = this;

      this.$Progress.start();
      this.form.put("/api/bombas/".concat(this.form.id)).then(function (res) {
        _this5.$swal.fire({
          icon: 'success',
          title: res.data.message
        });

        _this5.form.clear();

        _this5.$Progress.finish();

        _this5.returnBombas();

        _this5.hideModal();
      })["catch"](function (err) {
        if (err) {
          _this5.$swal.fire({
            icon: 'error',
            title: 'Erro ao tentar adicionar!'
          });
        }

        _this5.$Progress.fail();
      });
    },
    onReset: function onReset(event) {
      var _this6 = this;

      event.preventDefault(); // Reset our form values

      this.form.reset(); // Trick to reset/clear native browser form validation state

      this.show = false;
      this.$nextTick(function () {
        _this6.show = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=template&id=237da572&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=template&id=237da572& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "bombas" } }, [
    _c(
      "section",
      [
        _c(
          "b-card",
          { attrs: { "no-body": "" } },
          [
            _c(
              "b-card-header",
              { staticClass: "pb-50" },
              [
                _c("h5", [_vm._v("Filtros")]),
                _vm._v(" "),
                _c("span", { staticClass: "floa-right pull-right" }),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "outline-primary" },
                    on: {
                      click: function ($event) {
                        return _vm.$bvModal.show("formBombas")
                      },
                    },
                  },
                  [_vm._v("\n          Adicionar nova\n        ")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card-body",
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      {
                        staticClass: "mb-md-0 mb-2",
                        attrs: { cols: "12", md: "6" },
                      },
                      [
                        _c("label", [_vm._v("Bombas Registadas")]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: { options: ["interna", "externa"] },
                          model: {
                            value: _vm.tipo_bomba,
                            callback: function ($$v) {
                              _vm.tipo_bomba = $$v
                            },
                            expression: "tipo_bomba",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      {
                        staticClass: "mb-md-0 mb-2",
                        attrs: { cols: "12", md: "6" },
                      },
                      [
                        _c(
                          "b-button",
                          {
                            staticClass: "mt-2",
                            attrs: { variant: "primary" },
                            on: {
                              click: function ($event) {
                                return _vm.OpenForm()
                              },
                            },
                          },
                          [_vm._v("Actualizar preços de combustivel")]
                        ),
                        _vm._v(" "),
                        _vm.show === true
                          ? _c(
                              "b-form",
                              {
                                on: {
                                  submit: function ($event) {
                                    $event.preventDefault()
                                    return _vm.updateFuel()
                                  },
                                },
                              },
                              [
                                _c(
                                  "b-form-row",
                                  [
                                    _vm._l(_vm.combustivel, function (c) {
                                      return _c(
                                        "b-col",
                                        {
                                          key: c.id,
                                          attrs: { cols: "12", md: "12" },
                                        },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                label: c.tipo_combustivel,
                                              },
                                            },
                                            [
                                              _c("b-form-input", {
                                                model: {
                                                  value: c.preco_actual,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      c,
                                                      "preco_actual",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "c.preco_actual",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "12", md: "12" } },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            on: {
                                              click: function ($event) {
                                                return _vm.closeForm()
                                              },
                                            },
                                          },
                                          [_vm._v(" fechar ")]
                                        ),
                                        _vm._v(" "),
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
                                              "\n                    submit\n                  "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  2
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
          { staticClass: "mb-0", attrs: { "no-body": "" } },
          [
            _c("b-row", [
              _c("div", { staticClass: "col-12 col-md-12 table-responsive" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-striped table-bordered table-inverse",
                  },
                  [
                    _c("thead", { staticClass: "thead-inverse" }, [
                      _c("tr", [
                        _c("th", [_vm._v("#")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nome da bomba")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Capacidade")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("disponibilidade")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("tipo")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Combustivel")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Cadastrado por")]),
                        _vm._v(" "),
                        _c("th", [_c("i", { staticClass: "fas fa-cogs" })]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.bombas, function (b, index) {
                        return _c("tr", { key: b.id }, [
                          _c("td", [_vm._v(_vm._s(1 + index))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(b.nome_bombas))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(b.capacidade))]),
                          _vm._v(" "),
                          _c("td", [
                            b.status == "disponivel"
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "success" } },
                                      [_vm._v("disponivel")]
                                    ),
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            b.status == "indisponivel"
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("indiponivel")]
                                    ),
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            b.status == "manutencao"
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("Sub manutencao")]
                                    ),
                                  ],
                                  1
                                )
                              : _vm._e(),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(b.tipo_bomba))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            _vm._l(b.combustivel, function (comb) {
                              return _c("span", { key: comb.id }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(comb.tipo_combustivel) +
                                    ",\n                  "
                                ),
                              ])
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(b.created_by.name))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "d-flex justify-content-around" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "btn btn-sm btn-outline-primary",
                                  attrs: { id: "open-dtl" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.openDetails(b)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fas fa-users" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "btn btn-sm btn-outline-warning ml-1",
                                  on: {
                                    click: function ($event) {
                                      return _vm.openUpdate(b)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fas fa-edit" })]
                              ),
                              _vm._v(" "),
                              b.tipo_bomba === "interna"
                                ? _c(
                                    "span",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-outline-success ml-1",
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-gas-pump",
                                      }),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          ),
                        ])
                      }),
                      0
                    ),
                  ]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                ref: "my-modal",
                attrs: {
                  id: "formBombas",
                  size: "lg",
                  "hide-footer": "",
                  title: "Bomba",
                },
              },
              [
                _c(
                  "form",
                  {
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        _vm.editMode ? _vm.onUpdateForm() : _vm.onSubmit()
                      },
                      reset: _vm.onReset,
                      keydown: function ($event) {
                        return _vm.form.onKeydown($event)
                      },
                    },
                  },
                  [
                    _c(
                      "b-row",
                      [
                        _c(
                          "b-col",
                          { attrs: { cols: "4" } },
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
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-1",
                                  label: "Nome da bomba:",
                                  "label-for": "input-1",
                                },
                              },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "input-1",
                                    type: "text",
                                    placeholder: "Digite o nome da bomba",
                                  },
                                  model: {
                                    value: _vm.form.nome_bombas,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "nome_bombas", $$v)
                                    },
                                    expression: "form.nome_bombas",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.form.errors.has("nome_bombas")
                                  ? _c("small", {
                                      staticClass: "alert text-danger",
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.form.errors.get("nome_bombas")
                                        ),
                                      },
                                    })
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { cols: "4" } },
                          [
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-1",
                                  label: "Capacidade:",
                                  "label-for": "input-1",
                                },
                              },
                              [
                                _c("b-form-input", {
                                  attrs: { id: "input-1", type: "text" },
                                  model: {
                                    value: _vm.form.capacidade,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "capacidade", $$v)
                                    },
                                    expression: "form.capacidade",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.form.errors.has("capacidade")
                                  ? _c("small", {
                                      staticClass: "alert text-danger",
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.form.errors.get("capacidade")
                                        ),
                                      },
                                    })
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { cols: "4" } },
                          [
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  id: "input-group-1",
                                  label: "Tipo:",
                                  "label-for": "input-1",
                                },
                              },
                              [
                                _c("v-select", {
                                  attrs: { options: ["interna", "externa"] },
                                  model: {
                                    value: _vm.form.tipo_bomba,
                                    callback: function ($$v) {
                                      _vm.$set(_vm.form, "tipo_bomba", $$v)
                                    },
                                    expression: "form.tipo_bomba",
                                  },
                                }),
                                _vm._v(" "),
                                _vm.form.errors.has("tipo_bomba")
                                  ? _c("small", {
                                      staticClass: "alert text-danger",
                                      domProps: {
                                        innerHTML: _vm._s(
                                          _vm.form.errors.get("tipo_bomba")
                                        ),
                                      },
                                    })
                                  : _vm._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { cols: "12" } },
                          [
                            _c("b-form-checkbox-group", {
                              staticClass: "mb-1 d-block",
                              attrs: {
                                options: _vm.options,
                                "value-field": "item",
                                "text-field": "name",
                                "disabled-field": "notEnabled",
                              },
                              model: {
                                value: _vm.form.combustivel_tipos,
                                callback: function ($$v) {
                                  _vm.$set(_vm.form, "combustivel_tipos", $$v)
                                },
                                expression: "form.combustivel_tipos",
                              },
                            }),
                            _vm._v(" "),
                            _c("hr"),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("b-col", { attrs: { cols: "12" } }, [
                          _c("h4", { staticClass: "card-title" }, [
                            _vm._v("Responsavel"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "btn btn-sm btn-outline-primary",
                              on: {
                                click: function ($event) {
                                  return _vm.add()
                                },
                              },
                            },
                            [_c("i", { staticClass: "fas fa-plus" })]
                          ),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.form.responsavel, function (resp, index) {
                      return _c(
                        "b-row",
                        { key: index, ref: "responsavel", refInFor: true },
                        [
                          _c(
                            "b-col",
                            { attrs: { cols: "6" } },
                            [
                              _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    id: "input-group-2",
                                    label: "Nome do responsavel:",
                                    "label-for": "input-2",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: { id: "input-2", type: "text" },
                                    model: {
                                      value: resp.nome,
                                      callback: function ($$v) {
                                        _vm.$set(resp, "nome", $$v)
                                      },
                                      expression: "resp.nome",
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
                                {
                                  attrs: {
                                    id: "input-group-3",
                                    label: "Email:",
                                    "label-for": "input-3",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "input-3",
                                      type: "email",
                                      placeholder: "Digite endereco",
                                    },
                                    model: {
                                      value: resp.email_bomba,
                                      callback: function ($$v) {
                                        _vm.$set(resp, "email_bomba", $$v)
                                      },
                                      expression: "resp.email_bomba",
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
                                {
                                  attrs: {
                                    id: "input-group-4",
                                    label: "Contacto:",
                                    "label-for": "input-4",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "input-4",
                                      type: "tel",
                                      placeholder: "Digite contacto",
                                    },
                                    model: {
                                      value: resp.contacto,
                                      callback: function ($$v) {
                                        _vm.$set(resp, "contacto", $$v)
                                      },
                                      expression: "resp.contacto",
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
                                {
                                  attrs: {
                                    id: "input-group-4",
                                    label: "Contacto alternativo:",
                                    "label-for": "input-4",
                                  },
                                },
                                [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "input-4",
                                      type: "tel",
                                      placeholder: "Digite contacto",
                                    },
                                    model: {
                                      value: resp.contacto_alt,
                                      callback: function ($$v) {
                                        _vm.$set(resp, "contacto_alt", $$v)
                                      },
                                      expression: "resp.contacto_alt",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-col", [
                            _c(
                              "span",
                              {
                                staticClass: "btn btn-sm btn-outline-primary",
                                on: { click: _vm.rmRow },
                              },
                              [_c("i", { staticClass: "fas fa-remove" })]
                            ),
                          ]),
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "b-row",
                      [
                        _c(
                          "b-col",
                          { attrs: { cols: "2" } },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "mt-2",
                                attrs: {
                                  variant: "outline-warning",
                                  block: "",
                                },
                                on: { click: _vm.toggleModal },
                              },
                              [
                                _vm._v(
                                  "\n                Fechar\n              "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-col",
                          { attrs: { cols: "10" } },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "mt-2 pull-right",
                                attrs: {
                                  type: "submit",
                                  variant: "outline-primary",
                                },
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.editMode ? "Actualizar" : "Adicionar"
                                    ) +
                                    "\n              "
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
                  2
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                ref: "responsavel",
                attrs: {
                  id: "ResponsavelBomba",
                  size: "lg",
                  "hide-footer": "",
                  title: "Responsavel da bomba",
                },
              },
              [
                _c(
                  "b-card",
                  [
                    _c(
                      "b-row",
                      _vm._l(_vm.details.responsavel, function (responsaveis) {
                        return _c(
                          "b-col",
                          {
                            key: responsaveis.id,
                            attrs: { cols: "6", md: "6" },
                          },
                          [
                            _c(
                              "b-list-group",
                              [
                                _c("b-list-group-item", [
                                  _vm._v("Nome: " + _vm._s(responsaveis.nome)),
                                ]),
                                _vm._v(" "),
                                _c("b-list-group-item", [
                                  _vm._v(
                                    "Email: " + _vm._s(responsaveis.email_bomba)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("b-list-group-item", [
                                  _vm._v(
                                    "Contacto: " + _vm._s(responsaveis.contacto)
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("b-list-group-item", [
                                  _vm._v(
                                    "Contacto alternativo:\n                  " +
                                      _vm._s(responsaveis.contacto_alt)
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        )
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-form",
                      [
                        _c(
                          "b-row",
                          { staticClass: "mt-1" },
                          [
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "12" } },
                              [
                                _c(
                                  "b-list-group",
                                  _vm._l(
                                    _vm.details.combustivel_bomba,
                                    function (comb) {
                                      return _c(
                                        "b-list-group-item",
                                        { key: comb.id },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                {
                                                  attrs: { for: "combustivel" },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        comb.combustivel
                                                          .tipo_combustivel
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("b-form-input", {
                                                model: {
                                                  value: comb.preco_actual,
                                                  callback: function ($$v) {
                                                    _vm.$set(
                                                      comb,
                                                      "preco_actual",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "comb.preco_actual",
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]
                                      )
                                    }
                                  ),
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
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bombas_vue_vue_type_template_id_237da572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bombas.vue?vue&type=template&id=237da572& */ "./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=template&id=237da572&");
/* harmony import */ var _bombas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bombas.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _bombas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bombas_vue_vue_type_template_id_237da572___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bombas_vue_vue_type_template_id_237da572___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bombas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./bombas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bombas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=template&id=237da572&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=template&id=237da572& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bombas_vue_vue_type_template_id_237da572___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./bombas.vue?vue&type=template&id=237da572& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/bombas/bombas.vue?vue&type=template&id=237da572&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bombas_vue_vue_type_template_id_237da572___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bombas_vue_vue_type_template_id_237da572___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
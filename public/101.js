(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./storaRelatorioModule */ "./resources/js/src/views/Gestao-pickete/relatorios/storaRelatorioModule.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormRadio"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormFile"]
  },
  data: function data() {
    return {
      rota: [],
      motoristas: [],
      viatura: [],
      value: null,
      incidentes: [],
      options: [{
        text: 'Ok',
        value: 'Ok'
      }, {
        text: 'No',
        value: 'No'
      }, {
        text: 'Parcial',
        value: 'Parcial'
      }, {
        text: 'Em Falta',
        value: 'Em Falta'
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
  },
  created: function created() {
    var _this = this;

    this.$http.get('/api/listaIncedentes').then(function (res) {
      _this.incidentes = res.data;
    });
  },
  methods: {
    getRotas: function getRotas() {
      var _this2 = this;

      this.$http.get('/api/todasRotas').then(function (res) {
        _this2.rota = res.data;
      });
    },
    getViaturas: function getViaturas() {
      var _this3 = this;

      this.$http.get('/api/listViaturaFora').then(function (res) {
        _this3.viatura = res.data;
      });
    },
    getMotoristas: function getMotoristas() {
      var _this4 = this;

      this.$http.get('/api/listMotoristas').then(function (res) {
        _this4.motoristas = res.data;
      });
    }
  },
  setup: function setup() {
    var CHECKLISTOUT_STORE_MODULE_NAME = 'Picket';

    if (!_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) {
      _store__WEBPACK_IMPORTED_MODULE_8__["default"].registerModule(CHECKLISTOUT_STORE_MODULE_NAME, _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_9__["default"]);
    }

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasModule(CHECKLISTOUT_STORE_MODULE_NAME)) {
        _store__WEBPACK_IMPORTED_MODULE_8__["default"].unregisterModule(CHECKLISTOUT_STORE_MODULE_NAME);
      }
    });
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_4__["useToast"])();
    var checkListIn = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])(null);
    var listFiles = []; // const ficheiros = ref(null)

    var form = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_6__["ref"])(JSON.parse(JSON.stringify(new vform__WEBPACK_IMPORTED_MODULE_3__["default"]({
      check_list_out_id: _router__WEBPACK_IMPORTED_MODULE_10__["default"].currentRoute.params.id,
      motorista_id: null,
      viatura_id: null,
      carta_conducao: true,
      km_fim: 0,
      hr_fim: '0:00',
      teste_alcool: false,
      uniforme: false,
      CintoSeguracaState: false,
      colete_entrada: false,
      lista_presenca: false,
      licenca_entrada: false,
      pneu_sobr_entrada: false,
      macaco_entrada: false,
      inspencao_entrada: false,
      triangulo_entrada: false,
      chave_roda_entrada: false,
      kit_reboque_entrada: false,
      kit_1_socorro_entrada: false,
      extintor_entrada: false,
      livrete_entrada: false,
      seguros_entrada: false,
      taxaradio_entrada: false,
      motorista_dss: false,
      relatorio_geral: '',
      is_incidente: false,
      anexos: null,
      // incidente
      incidente_id: null
    }))));
    _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('Picket/fetchSaida', {
      id: _router__WEBPACK_IMPORTED_MODULE_10__["default"].currentRoute.params.id
    }).then(function (response) {
      checkListIn.value = response.data;
    })["catch"](function (error) {
      if (error.response.status === 404) {
        checkListIn.value = undefined;
      }
    });

    function onChange(e) {
      var _this5 = this;

      var ficheiros = e.target.files[0];
      var reader = new FileReader();

      reader.onload = function () {
        _this5.form.anexos = reader.result;
      };

      reader.readAsDataURL(ficheiros);
    }

    function OnSubmit() {
      var _this6 = this;

      //   form.value.anexos = formData.append('anexos', listFiles)
      _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('Picket/addCheckListIn', form.value).then(function (response) {
        toast({
          component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
          props: {
            title: response.data.message,
            icon: 'CheckSquareIcon',
            variant: 'success'
          }
        });

        _this6.$router.push({
          name: 'Vehicle-movements'
        });
      })["catch"](function (err) {
        if (err) {
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

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_7___default()(value).format('DD/MM/YYYY hh:mm');
    }

    return {
      OnSubmit: OnSubmit,
      checkListIn: checkListIn,
      form: form,
      listFiles: listFiles,
      dateTime: dateTime,
      onChange: onChange
    };
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=template&id=186b69c5&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=template&id=186b69c5& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
                          "\n            Pedido de Entrada de viatura\n          "
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
                                  to: { name: "vehicle-movements" },
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
                            _vm._v(
                              " " +
                                _vm._s(_vm.checkListIn.viatura.matricula) +
                                " "
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("li", { staticClass: "breadcrumb-item active" }, [
                          _c(
                            "span",
                            { attrs: { "aria-current": "location" } },
                            [
                              _vm._v(
                                "data da saida: " +
                                  _vm._s(
                                    _vm.dateTime(_vm.checkListIn.created_at)
                                  ) +
                                  " "
                              ),
                            ]
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
                  attrs: { enctype: "multipart/form-data" },
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
                            {
                              attrs: { label: "Matricula da viatura reserva" },
                            },
                            [
                              _c("v-select", {
                                attrs: {
                                  label: "matricula",
                                  options: _vm.viatura,
                                  reduce: function (viatura) {
                                    return viatura.id
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
                            "b-row",
                            [
                              _c(
                                "b-col",
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: { label: "Kilometragem na saida" },
                                    },
                                    [
                                      _c("b", { staticClass: "text-right" }, [
                                        _vm._v(
                                          " " +
                                            _vm._s(_vm.checkListIn.km_inicio) +
                                            " Km"
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                [
                                  _c(
                                    "b-form-group",
                                    {
                                      attrs: {
                                        label: "Kilometragem na entrada",
                                      },
                                    },
                                    [
                                      _c("b-form-input", {
                                        attrs: { type: "number" },
                                        model: {
                                          value: _vm.form.km_fim,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "km_fim", $$v)
                                          },
                                          expression: "form.km_fim",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "3", lg: "6", xl: "6" } },
                        [
                          _c(
                            "b-row",
                            [
                              _c(
                                "b-col",
                                [
                                  _c(
                                    "b-form-group",
                                    { attrs: { label: "hora de saida" } },
                                    [
                                      _c("b", [
                                        _vm._v(
                                          " " +
                                            _vm._s(_vm.checkListIn.hr_inicio) +
                                            " "
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                [
                                  _c(
                                    "b-form-group",
                                    { attrs: { label: "hora de entrada" } },
                                    [
                                      _c("b-form-timepicker", {
                                        attrs: { locale: "pt-Br" },
                                        model: {
                                          value: _vm.form.hr_fim,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "hr_fim", $$v)
                                          },
                                          expression: "form.hr_fim",
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
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { attrs: { cols: "12", md: "6", lg: "8", xl: "10" } },
                        [
                          _c("table", { staticClass: "table table-bordered" }, [
                            _c("tbody", [
                              _c("tr", [
                                _c("td", { staticStyle: { width: "30%" } }, [
                                  _vm._v(
                                    "\n                    Tinha cinto de Segurança\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.CintoSeguracaState,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "CintoSeguracaState",
                                            $$v
                                          )
                                        },
                                        expression: "form.CintoSeguracaState",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticStyle: { width: "30%" } }, [
                                  _vm._v(
                                    "\n                    Tinha Carta de condução\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.carta_conducao,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "carta_conducao",
                                            $$v
                                          )
                                        },
                                        expression: "form.carta_conducao",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticStyle: { width: "30%" } }, [
                                  _vm._v(
                                    "\n                    O Motorista Paticipou no DSS?\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.motorista_dss,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "motorista_dss",
                                            $$v
                                          )
                                        },
                                        expression: "form.motorista_dss",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticStyle: { width: "30%" } }, [
                                  _vm._v(
                                    "\n                    Teste de álcool\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.teste_alcool,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "teste_alcool",
                                            $$v
                                          )
                                        },
                                        expression: "form.teste_alcool",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", { staticStyle: { width: "30%" } }, [
                                  _vm._v(
                                    "\n                    Kit de primeiros socorros\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.kit_1_socorro_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "kit_1_socorro_entrada",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "form.kit_1_socorro_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Extintor na saida")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.extintor_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "extintor_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.extintor_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Livrete da viatura")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.livrete_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "livrete_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.livrete_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Licença")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.licenca_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "licenca_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.licenca_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [
                                  _vm._v("Documento de seguros em dia"),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.seguros_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "seguros_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.seguros_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Taxa de radio de fusão")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.taxaradio_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "taxaradio_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.taxaradio_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Tinha uniforme")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.uniforme,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.form, "uniforme", $$v)
                                        },
                                        expression: "form.uniforme",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Lista de presença")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.lista_presenca,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "lista_presenca",
                                            $$v
                                          )
                                        },
                                        expression: "form.lista_presenca",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Colete na saida")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.colete_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "colete_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.colete_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Pneu sobressalente")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.pneu_sobr_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "pneu_sobr_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.pneu_sobr_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Macaco na saida")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.macaco_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "macaco_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.macaco_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Documento de inspenção")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.inspencao_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "inspencao_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.inspencao_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Triângulo")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.triangulo_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "triangulo_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.triangulo_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Chave de rodas")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.chave_roda_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "chave_roda_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.chave_roda_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Kit de reboque")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.kit_reboque_entrada,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "kit_reboque_entrada",
                                            $$v
                                          )
                                        },
                                        expression: "form.kit_reboque_entrada",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Houve algum incidente")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-checkbox", {
                                      attrs: { switch: "", size: "lg" },
                                      model: {
                                        value: _vm.form.is_incidente,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "is_incidente",
                                            $$v
                                          )
                                        },
                                        expression: "form.is_incidente",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c(
                                "tr",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.form.is_incidente === true,
                                      expression: "form.is_incidente === true",
                                    },
                                  ],
                                  attrs: { id: "rotas" },
                                },
                                [
                                  _c(
                                    "td",
                                    { attrs: { colspan: "2" } },
                                    [
                                      _c(
                                        "b-form-radio-group",
                                        _vm._l(_vm.incidentes, function (inc) {
                                          return _c(
                                            "b-form-radio",
                                            {
                                              key: inc.id,
                                              attrs: { value: inc.id },
                                              model: {
                                                value: _vm.form.incidente_id,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.form,
                                                    "incidente_id",
                                                    $$v
                                                  )
                                                },
                                                expression: "form.incidente_id",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(inc.tipo_incidente) +
                                                  "\n                      "
                                              ),
                                            ]
                                          )
                                        }),
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Relatório geral")]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c("b-form-textarea", {
                                      model: {
                                        value: _vm.form.relatorio_geral,
                                        callback: function ($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "relatorio_geral",
                                            $$v
                                          )
                                        },
                                        expression: "form.relatorio_geral",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c("td", [_vm._v("Anexar Ficheiros")]),
                                _vm._v(" "),
                                _c("td", [
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "file",
                                      placeholder:
                                        "Selecione ficheiros e descarregue aqui...",
                                      "drop-placeholder": "Drop file here...",
                                    },
                                    on: { input: _vm.onChange },
                                  }),
                                ]),
                              ]),
                            ]),
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
                            _vm._v("\n              limpar\n            "),
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
                            [_vm._v("submeter")]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nova_entrada_vue_vue_type_template_id_186b69c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nova_entrada.vue?vue&type=template&id=186b69c5& */ "./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=template&id=186b69c5&");
/* harmony import */ var _nova_entrada_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nova_entrada.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nova_entrada_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nova_entrada_vue_vue_type_template_id_186b69c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nova_entrada_vue_vue_type_template_id_186b69c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_entrada_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./nova_entrada.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_entrada_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=template&id=186b69c5&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=template&id=186b69c5& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_entrada_vue_vue_type_template_id_186b69c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./nova_entrada.vue?vue&type=template&id=186b69c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/nova_entrada.vue?vue&type=template&id=186b69c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_entrada_vue_vue_type_template_id_186b69c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nova_entrada_vue_vue_type_template_id_186b69c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
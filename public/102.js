(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _relatorioOcorrencia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relatorioOcorrencia */ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js");
/* harmony import */ var _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storaRelatorioModule */ "./resources/js/src/views/Gestao-pickete/relatorios/storaRelatorioModule.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      entrada: {}
    };
  },
  components: {
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"]
  },
  setup: function setup(props) {
    var entrada = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var ENTRADAS_STORE_MODULE_NAME = 'Picket';
    var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__["useToast"])(); // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasModule(ENTRADAS_STORE_MODULE_NAME)) {
      _store__WEBPACK_IMPORTED_MODULE_8__["default"].registerModule(ENTRADAS_STORE_MODULE_NAME, _storaRelatorioModule__WEBPACK_IMPORTED_MODULE_6__["default"]);
    } // UnRegister on leave


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_8__["default"].hasModule(ENTRADAS_STORE_MODULE_NAME)) {
        _store__WEBPACK_IMPORTED_MODULE_8__["default"].unregisterModule(ENTRADAS_STORE_MODULE_NAME);
      }
    });

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format('DD/MM/YYYY hh:mm');
    }

    return {
      dateTime: dateTime,
      entrada: entrada
    };
  },
  created: function created() {
    var _this = this;

    _store__WEBPACK_IMPORTED_MODULE_8__["default"].dispatch('Picket/fetchEntrada', {
      id: _router__WEBPACK_IMPORTED_MODULE_7__["default"].currentRoute.params.id
    }).then(function (response) {
      _this.entrada = response.data;
      console.log(response.data);
    })["catch"](function () {// toast({
      //   component: ToastificationContent,
      //   props: {
      //     title: 'Erro! nenhum dado',
      //     icon: 'AlertTriangleIcon',
      //     variant: 'danger',
      //   },
      // })
    });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "3" } },
                [
                  _c(
                    "b-link",
                    {
                      staticClass: "btn btn-md btn-outline-primary",
                      attrs: { to: { name: "Vehicle-movements" } },
                    },
                    [_vm._v("voltar")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("b-card-header", [
            _c("h3", [
              _vm._v(
                "\n              Matricula: " +
                  _vm._s(_vm.entrada.viatura.matricula) +
                  "\n          "
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mb-2" },
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
                            _vm._v(
                              "\n                      Carta de condução do motorista: " +
                                _vm._s(_vm.entrada.motorista.carta_conducao) +
                                "\n                  "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v("\n                      Livrete: "),
                            _vm.entrada.livrete_saida == 1
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "primary" } },
                                      [_vm._v("Ok")]
                                    ),
                                  ],
                                  1
                                )
                              : _c("span", [_vm._v("Falta")]),
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v(
                              "\n                      Colete do motorista: "
                            ),
                            _vm.entrada.colete_saida == 1
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "primary" } },
                                      [_vm._v("Ok")]
                                    ),
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("Falta")]
                                    ),
                                  ],
                                  1
                                ),
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v(
                              "\n                      Lista de presença: "
                            ),
                            _vm.entrada.lista_presenca == 1
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "primary" } },
                                      [_vm._v("Ok")]
                                    ),
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("Falta")]
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
                  _c(
                    "b-col",
                    { attrs: { cols: "6" } },
                    [
                      _c(
                        "b-list-group",
                        [
                          _c("b-list-group-item", [
                            _vm._v("\n                      Seguros: "),
                            _vm.entrada.seguros_saida == 1
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "primary" } },
                                      [_vm._v("Ok")]
                                    ),
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("Falta")]
                                    ),
                                  ],
                                  1
                                ),
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v(
                              "\n                      Document de Inspeção: "
                            ),
                            _vm.entrada.inspencao_saida == 1
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "primary" } },
                                      [_vm._v("Ok")]
                                    ),
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("Falta")]
                                    ),
                                  ],
                                  1
                                ),
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v(
                              "\n                      Taxa de radio difusão: "
                            ),
                            _vm.entrada.taxaradio_saida == 1
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "primary" } },
                                      [_vm._v("Ok")]
                                    ),
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("Falta")]
                                    ),
                                  ],
                                  1
                                ),
                          ]),
                          _vm._v(" "),
                          _c("b-list-group-item", [
                            _vm._v(
                              "\n                      Licença da viatura: "
                            ),
                            _vm.entrada.licenca_saida == 1
                              ? _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "primary" } },
                                      [_vm._v("Ok")]
                                    ),
                                  ],
                                  1
                                )
                              : _c(
                                  "span",
                                  [
                                    _c(
                                      "b-badge",
                                      { attrs: { variant: "danger" } },
                                      [_vm._v("Falta")]
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
                ],
                1
              ),
              _vm._v(" "),
              _c("b-card-body", [
                _c("h3", [_vm._v("Estado da viatura")]),
                _vm._v(" "),
                _c("table", { staticClass: "table table-striped" }, [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass:
                            "bg-dark text-center text-uppercase text-white",
                          attrs: { colspan: "8" },
                        },
                        [
                          _vm._v(
                            "\n                      Conforto e Segurança\n                  "
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("Cinto de segurança")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("AC")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Kit de reboque")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Sistema ABS")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Retrovisores")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Kit de primeiros Socorros")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Extintor")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Triângulo")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("td", [
                        _vm.entrada.CintoSeguracaState == 1
                          ? _c("span", [_vm._v("Ok")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.entrada.CintoSeguracaState == 0
                          ? _c("span", [_vm._v("No")])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.entrada.ACState) +
                            "\n                  "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.entrada.kit_reboque_saida == 1
                          ? _c("span", [_vm._v("Ok")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.entrada.kit_reboque_saida == 0
                          ? _c("span", [_vm._v("No")])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                      " +
                            _vm._s(_vm.entrada.SistemaABS_State) +
                            "\n                  "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                      Ok\n                  "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.entrada.kit_1_socorros_saida == 1
                          ? _c("span", [_vm._v("Ok")])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.entrada.kit_1_socorros_saida == 0
                          ? _c("span", [_vm._v("Falta")])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.entrada.extintor_saida == 1
                          ? _c("span", [_vm._v("Ok")])
                          : _c("span", [_vm._v("Falta")]),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.entrada.triangulo_saida == 1
                          ? _c("span", [_vm._v("Ok")])
                          : _c("span", [_vm._v("Falta")]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass:
                            "bg-dark text-center text-uppercase text-white",
                          attrs: { colspan: "8" },
                        },
                        [
                          _vm._v(
                            "\n                      Estado mecânico\n                  "
                          ),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "tr",
                      {
                        staticClass: "text-uppercase",
                        staticStyle: { "font-size": "0.857rem" },
                      },
                      [
                        _c("th", [_vm._v("Nível Vaso Expansor")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nível Liquido Vidros")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nível Óleo de Motor")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nível Óleo de Direção")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Nível Óleo Travões")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Macaco")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Pneu sobressalente")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Chave de roda")]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(_vm.entrada.vasoEspansorState))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.entrada.LiquidoVidroState))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(" " + _vm._s(_vm.entrada.OleoMotorState) + " "),
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.entrada.OleoDirecaoState))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm.entrada.OleoTravoesState))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.entrada.macaco_saida == 1
                          ? _c("span", [_vm._v("Ok")])
                          : _c("span", [_vm._v("Falta")]),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.entrada.pneu_sobr_saida == 1
                          ? _c("span", [_vm._v("Ok")])
                          : _c("span", [_vm._v("Falta")]),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.entrada.chave_roda_saida == 1
                          ? _c("span", [_vm._v("Ok")])
                          : _c("span", [_vm._v("Falta")]),
                      ]),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entradasDetails.vue?vue&type=template&id=3736a4b5& */ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5&");
/* harmony import */ var _entradasDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entradasDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _entradasDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./entradasDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./entradasDetails.vue?vue&type=template&id=3736a4b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/relatorios/entradasDetails.vue?vue&type=template&id=3736a4b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_entradasDetails_vue_vue_type_template_id_3736a4b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/relatorios/relatorioOcorrencia.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOcorrenciaList; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./resources/js/src/@core/components/toastification/ToastificationContent.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
 // import { title } from '@core/utils/filter'
// Notification




function useOcorrenciaList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_1__["useToast"])();
  var refSaidasTableList = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // Table Handlers

  var tableColumns = [{
    key: 'Data_de_registo',
    sortable: true
  }, {
    key: 'Hora_de_saida',
    sortable: true
  }, {
    key: 'Matricula',
    sortable: true
  }, {
    key: 'Kilometragem_na_saida',
    sortable: true
  }, {
    key: 'Motorista',
    sortable: true
  }, {
    Key: 'Criado_por',
    sortable: true
  }, {
    key: 'acções'
  }];
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalSaidas = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var rotaFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refSaidasTableList.value ? refSaidasTableList.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalSaidas.value
    };
  });

  var refetchData = function refetchData() {
    refSaidasTableList.value.refresh();
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, searchQuery, rotaFilter], function () {
    refetchData();
  });

  var fetchSaidas = function fetchSaidas(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('Picket/fetchSaidas', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
      rota: rotaFilter.value
    }).then(function (response) {
      var CheckListOut = response.data;
      callback(CheckListOut.data);
      totalSaidas.value = CheckListOut.total;
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        props: {
          title: 'Erro na listagem de CheckListOut',
          icon: 'AlertTriangleIcon',
          variant: 'danger'
        }
      });
    });
  }; // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*


  return {
    fetchSaidas: fetchSaidas,
    tableColumns: tableColumns,
    perPage: perPage,
    currentPage: currentPage,
    totalSaidas: totalSaidas,
    dataMeta: dataMeta,
    perPageOptions: perPageOptions,
    searchQuery: searchQuery,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    refSaidasTableList: refSaidasTableList,
    refetchData: refetchData,
    // Extra Filters
    rotaFilter: rotaFilter
  };
}

/***/ })

}]);
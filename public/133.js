(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[133],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _StoreViaturaModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StoreViaturaModule */ "./resources/js/src/views/Gestao-pickete/Viaturas/StoreViaturaModule.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardFooter: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardFooter"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"]
  },
  setup: function setup() {
    var viaturaData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var VIATURA_APP_STORE_MODULE = 'Picket'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(VIATURA_APP_STORE_MODULE)) _store__WEBPACK_IMPORTED_MODULE_3__["default"].registerModule(VIATURA_APP_STORE_MODULE, _StoreViaturaModule__WEBPACK_IMPORTED_MODULE_5__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_3__["default"].hasModule(VIATURA_APP_STORE_MODULE)) _store__WEBPACK_IMPORTED_MODULE_3__["default"].unregisterModule(VIATURA_APP_STORE_MODULE);
    });
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('Picket/fetchViatura', {
      id: _router__WEBPACK_IMPORTED_MODULE_4__["default"].currentRoute.params.id
    }).then(function (response) {
      viaturaData.value = response.data;
    })["catch"](function (error) {
      if (error.response.status === 421) {
        viaturaData.value = undefined;
      }
    });

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(value).format('DD/MM/YYYY hh:mm');
    }

    return {
      viaturaData: viaturaData,
      dateTime: dateTime
    };
  },
  computed: {// total() {
    //   return this.viaturaData.ordem_viatura.reduce((carry, item) => carry + Number(item.qtd_abastecida * item.ordem.bmobas.combustivel[0].preco_actual), 0)
    // },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "car-details" }, [
    _c(
      "section",
      { staticClass: "invoice-add-wrapper mt-3" },
      [
        _c(
          "b-row",
          { staticClass: "invoice-add" },
          [
            _c(
              "b-col",
              [
                _c(
                  "b-link",
                  {
                    staticClass: "btn btn-md btn-outline-primary",
                    attrs: { to: { name: "Cars" } },
                  },
                  [_vm._v("voltar")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              { attrs: { cols: "12" } },
              [
                _c(
                  "b-card",
                  [
                    _c("b-card-header", [
                      _c("h3", { staticClass: "card-title" }, [
                        _vm._v(
                          "\n              Dados da viatura " +
                            _vm._s(_vm.viaturaData.id) +
                            "\n            "
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-card-body",
                      [
                        _c(
                          "b-row",
                          { attrs: { sm: "" } },
                          [
                            _c(
                              "b-col",
                              { attrs: { cols: "2", md: "2" } },
                              [_c("b-img")],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-col",
                              { attrs: { cols: "12", md: "12", lg: "12" } },
                              [
                                _c(
                                  "b-row",
                                  [
                                    _c(
                                      "b-col",
                                      [
                                        _c(
                                          "b-list-group",
                                          [
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Marca")]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.marca.nome
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Modelo")]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.modelo
                                                      .nome_modelo
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Descrição"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.nome_viatura
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Matricula"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.matricula
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Ano de fabrico"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.ano_fabrico
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Lotação")]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.lotacao
                                                  ) +
                                                  "\n                      "
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
                                      [
                                        _c(
                                          "b-list-group",
                                          [
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Tipo de Combustivel"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData
                                                      .tipo_combustivel
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Kilometragem actual"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.kilometragem
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Capacidade do tanque"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData
                                                      .capacidade_tanque
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Ltr/Km")]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData
                                                      .capacidade_media
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Qtd disponivel"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData
                                                      .qtd_disponivel
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [_vm._v("Estado")]),
                                              _vm._v(
                                                ":\n                        "
                                              ),
                                              _vm.viaturaData.estado === 1
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
                                                        [
                                                          _vm._v(
                                                            "Viatura activa"
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.viaturaData.estado === 0
                                                ? _c(
                                                    "span",
                                                    [
                                                      _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "danger",
                                                          },
                                                        },
                                                        [
                                                          _vm._v(
                                                            "Viatura Inativa"
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  )
                                                : _vm._e(),
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
                                      [
                                        _c(
                                          "b-list-group",
                                          [
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Nr do Motor"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.nr_motor
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Nr do Chassi"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.nr_chassi
                                                  ) +
                                                  "\n                      "
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("b-list-group-item", [
                                              _c("strong", [
                                                _vm._v("Nr do Livrete"),
                                              ]),
                                              _vm._v(
                                                ": " +
                                                  _vm._s(
                                                    _vm.viaturaData.nr_livrete
                                                  ) +
                                                  "\n                      "
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
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "table",
                                  {
                                    staticClass:
                                      "table table-light table-responsive table-bordered",
                                  },
                                  [
                                    _c(
                                      "thead",
                                      { staticClass: "thead-light" },
                                      [
                                        _c(
                                          "tr",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [
                                                _vm._v(
                                                  "\n                        Inspecção\n                      "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [
                                                _vm._v(
                                                  "\n                        Licença\n                      "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [
                                                _vm._v(
                                                  "\n                        Manifesto\n                      "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [
                                                _vm._v(
                                                  "\n                        Seguros\n                      "
                                                ),
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "th",
                                              { attrs: { colspan: "2" } },
                                              [
                                                _vm._v(
                                                  "\n                        Taxa de Radio de fusão\n                      "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("tr", [
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Data")]),
                                          _vm._v(" "),
                                          _c("th", [_vm._v("Prazo")]),
                                        ]),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(
                                        _vm.viaturaData.viatura_document,
                                        function (docs, index) {
                                          return _c("tr", { key: index }, [
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.data_inspencao
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.prazo_inspencao
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.data_licenca
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.prazo_licenca
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.data_manifesto
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.prazo_manifesto
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.data_seguros
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.prazo_seguros
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.data_taxa_radio
                                                  )
                                                )
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.dateTime(
                                                    docs.prazo_taxa_radio
                                                  )
                                                )
                                              ),
                                            ]),
                                          ])
                                        }
                                      ),
                                      0
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
                        _vm.viaturaData.ordem_viatura != null
                          ? _c(
                              "b-row",
                              [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mt-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c("h3", { staticClass: "card-title" }, [
                                      _vm._v(
                                        "\n                  Historico das ordems da viatura\n                "
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "table",
                                      { staticClass: "table table-light" },
                                      [
                                        _c(
                                          "thead",
                                          { staticClass: "thead-light" },
                                          [
                                            _c("tr", [
                                              _c("th", [_vm._v("Codigo")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Data")]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v("Qtd abastecida"),
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Preço /ltr")]),
                                              _vm._v(" "),
                                              _c("th", [
                                                _vm._v("Preço de consumo"),
                                              ]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Estado")]),
                                              _vm._v(" "),
                                              _c("th", [_vm._v("Bombas")]),
                                            ]),
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "tbody",
                                          _vm._l(
                                            _vm.viaturaData.ordem_viatura,
                                            function (order, index) {
                                              return _c("tr", { key: index }, [
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        order.ordem.codigo_ordem
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.dateTime(
                                                          order.updated_at
                                                        )
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    _vm._s(order.qtd_abastecida)
                                                  ),
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  _vm._l(
                                                    order.ordem.bombas
                                                      .combustivel,
                                                    function (combustivel) {
                                                      return _c(
                                                        "span",
                                                        { key: combustivel.id },
                                                        [
                                                          combustivel.tipo_combustivel ===
                                                          _vm.viaturaData
                                                            .tipo_combustivel
                                                            ? _c("span", [
                                                                _vm._v(
                                                                  "\n                            " +
                                                                    _vm._s(
                                                                      combustivel.preco_actual
                                                                    ) +
                                                                    "\n                          "
                                                                ),
                                                              ])
                                                            : _vm._e(),
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  _vm._l(
                                                    order.ordem.bombas
                                                      .combustivel,
                                                    function (combustivel) {
                                                      return _c(
                                                        "span",
                                                        { key: combustivel.id },
                                                        [
                                                          combustivel.tipo_combustivel ===
                                                          _vm.viaturaData
                                                            .tipo_combustivel
                                                            ? _c("span", [
                                                                _vm._v(
                                                                  "\n                            " +
                                                                    _vm._s(
                                                                      combustivel.preco_actual *
                                                                        order.qtd_abastecida
                                                                    ) +
                                                                    "\n                          "
                                                                ),
                                                              ])
                                                            : _vm._e(),
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                ),
                                                _vm._v(" "),
                                                _c("td", [
                                                  order.ordem.approvedBy ===
                                                  null
                                                    ? _c(
                                                        "span",
                                                        [
                                                          _c(
                                                            "b-badge",
                                                            {
                                                              attrs: {
                                                                variant:
                                                                  "warning",
                                                              },
                                                            },
                                                            [_vm._v("pendente")]
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  order.ordem.approvedBy !==
                                                  null
                                                    ? _c(
                                                        "span",
                                                        [
                                                          _c(
                                                            "b-badge",
                                                            {
                                                              attrs: {
                                                                variant:
                                                                  "success",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Autorizada"
                                                              ),
                                                            ]
                                                          ),
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                ]),
                                                _vm._v(" "),
                                                _c("td", [
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        order.ordem.bombas
                                                          .nome_bombas
                                                      ) +
                                                      "\n                      "
                                                  ),
                                                ]),
                                              ])
                                            }
                                          ),
                                          0
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ],
                              1
                            )
                          : _vm._e(),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card-footer",
                      [
                        _c(
                          "b-row",
                          [
                            _c("b-col", [
                              _c("b", [_vm._v("Cadastrado por")]),
                              _vm._v(":\n                      "),
                              _c("span", [
                                _vm._v(
                                  "\n                          " +
                                    _vm._s(_vm.viaturaData.created_by.name) +
                                    "\n                      "
                                ),
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

/***/ "./resources/js/src/views/Gestao-pickete/Viaturas/StoreViaturaModule.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/Viaturas/StoreViaturaModule.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\wamp64\\www\\portal_pfuxela\\resources\\js\\src\\views\\Gestao-pickete\\Viaturas\\StoreViaturaModule.js: Unexpected token, expected \",\" (74:57)\n\n\u001b[0m \u001b[90m 72 |\u001b[39m     \u001b[33mUpdateAlocatedVehicle\u001b[39m(ctx\u001b[33m,\u001b[39m { id\u001b[33m,\u001b[39m viatura }) {\u001b[0m\n\u001b[0m \u001b[90m 73 |\u001b[39m       \u001b[36mreturn\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mPromise\u001b[39m((resolve\u001b[33m,\u001b[39m reject) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 74 |\u001b[39m         axios\u001b[33m.\u001b[39mput(\u001b[32m`/api/viaturasAlocadas/${id}`\u001b[39m\u001b[33m,\u001b[39m viatura })\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 75 |\u001b[39m           \u001b[33m.\u001b[39mthen(response \u001b[33m=>\u001b[39m resolve(response))\u001b[0m\n\u001b[0m \u001b[90m 76 |\u001b[39m           \u001b[33m.\u001b[39m\u001b[36mcatch\u001b[39m(error \u001b[33m=>\u001b[39m reject(error))\u001b[0m\n\u001b[0m \u001b[90m 77 |\u001b[39m       })\u001b[0m\n    at instantiate (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at Object.raise (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:3334:19)\n    at Object.unexpected (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:3372:16)\n    at Object.expect (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:4001:28)\n    at Object.parseCallExpressionArguments (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12747:14)\n    at Object.parseCoverCallAndAsyncArrowHead (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12662:29)\n    at Object.parseSubscript (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12587:19)\n    at Object.parseSubscripts (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12556:19)\n    at Object.parseExprSubscripts (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12545:17)\n    at Object.parseUpdate (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12518:21)\n    at Object.parseMaybeUnary (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12489:23)\n    at Object.parseMaybeUnaryOrPrivate (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12283:61)\n    at Object.parseExprOps (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12290:23)\n    at Object.parseMaybeConditional (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12260:23)\n    at Object.parseMaybeAssign (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12213:21)\n    at Object.parseExpressionBase (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12149:23)\n    at C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12143:39\n    at Object.allowInAnd (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14231:16)\n    at Object.parseExpression (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12143:17)\n    at Object.parseStatementContent (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14671:23)\n    at Object.parseStatement (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14528:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15167:25)\n    at Object.parseBlockBody (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15158:10)\n    at Object.parseBlock (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15142:10)\n    at Object.parseFunctionBody (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:13836:24)\n    at Object.parseArrowExpression (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:13808:10)\n    at Object.parseParenAndDistinguishExpression (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:13310:12)\n    at Object.parseExprAtom (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12867:23)\n    at Object.parseExprAtom (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:8033:20)\n    at Object.parseExprSubscripts (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12539:23)\n    at Object.parseUpdate (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12518:21)\n    at Object.parseMaybeUnary (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12489:23)\n    at Object.parseMaybeUnaryOrPrivate (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12283:61)\n    at Object.parseExprOps (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12290:23)\n    at Object.parseMaybeConditional (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12260:23)");

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viatura-details.vue?vue&type=template&id=0927fece& */ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece&");
/* harmony import */ var _viatura_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viatura-details.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _viatura_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__["render"],
  _viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viatura-details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./viatura-details.vue?vue&type=template&id=0927fece& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-pickete/Viaturas/viatura-details.vue?vue&type=template&id=0927fece&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_viatura_details_vue_vue_type_template_id_0927fece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.es.js");
/* harmony import */ var _storeAbastecimentos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeAbastecimentos */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/storeAbastecimentos.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"]
  },
  data: function data() {
    return {
      abastecimentos: [],
      bombas: {},
      searchQuery: null,
      form: new vform__WEBPACK_IMPORTED_MODULE_2__["default"]({}),
      moment: moment__WEBPACK_IMPORTED_MODULE_7___default.a
    };
  },
  created: function created() {
    this.moment = moment__WEBPACK_IMPORTED_MODULE_7___default.a;
  },
  setup: function setup() {
    var SUPPLY_STORE_MODULE_NAME = "Supply"; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_6__["default"].hasModule(SUPPLY_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_6__["default"].registerModule(SUPPLY_STORE_MODULE_NAME, _storeAbastecimentos__WEBPACK_IMPORTED_MODULE_3__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_6__["default"].hasModule(SUPPLY_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_6__["default"].unregisterModule(SUPPLY_STORE_MODULE_NAME);
    });

    function dateTime(value) {
      return moment__WEBPACK_IMPORTED_MODULE_7___default()(value).format('DD/MM/YYYY hh:mm');
    }

    var _useAbastecimentoList = Object(_index__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        fetchAbastecimentos = _useAbastecimentoList.fetchAbastecimentos,
        tableColumns = _useAbastecimentoList.tableColumns,
        perPage = _useAbastecimentoList.perPage,
        currentPage = _useAbastecimentoList.currentPage,
        totalAbastecimentos = _useAbastecimentoList.totalAbastecimentos,
        dataMeta = _useAbastecimentoList.dataMeta,
        perPageOptions = _useAbastecimentoList.perPageOptions,
        searchQuery = _useAbastecimentoList.searchQuery,
        sortBy = _useAbastecimentoList.sortBy,
        isSortDirDesc = _useAbastecimentoList.isSortDirDesc,
        refAbastecimentoListTable = _useAbastecimentoList.refAbastecimentoListTable,
        refetchData = _useAbastecimentoList.refetchData;

    return {
      fetchAbastecimentos: fetchAbastecimentos,
      tableColumns: tableColumns,
      perPage: perPage,
      currentPage: currentPage,
      totalAbastecimentos: totalAbastecimentos,
      dataMeta: dataMeta,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      refAbastecimentoListTable: refAbastecimentoListTable,
      refetchData: refetchData,
      dateTime: dateTime
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=template&id=78d13bee&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=template&id=78d13bee& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
          _c("b-card-header", { staticClass: "pb-50" }, [
            _c("h3", [_vm._v("Relatório de abastacimentos")]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "m-2" },
            [
              _c(
                "b-row",
                [
                  _c("b-col", { attrs: { cols: "6", md: "6" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex align-items-center justify-content-end",
                      },
                      [
                        _c("b-form-input", {
                          staticClass: "d-inline-block mr-1",
                          attrs: { placeholder: "pesquisar..." },
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
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm.can("View Report")
            ? _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "table-responsive",
                      attrs: { cols: "12", xl: "12", md: "12" },
                    },
                    [
                      _c("b-table", {
                        ref: "refAbastecimentoListTable",
                        staticClass: "position-relative",
                        attrs: {
                          items: _vm.fetchAbastecimentos,
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
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "cell(ordem)",
                              fn: function (data) {
                                return [
                                  data.item.ordem !== null
                                    ? _c("span", [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(
                                              data.item.ordem.codigo_ordem
                                            ) +
                                            "\n                        "
                                        ),
                                      ])
                                    : _vm._e(),
                                ]
                              },
                            },
                            {
                              key: "cell(estado)",
                              fn: function (data) {
                                return [
                                  data.item.ordem !== null
                                    ? _c("span", [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(data.item.ordem.estado) +
                                            "\n                        "
                                        ),
                                      ])
                                    : _c("span", [
                                        _vm._v(
                                          "\n                            -\n                        "
                                        ),
                                      ]),
                                ]
                              },
                            },
                            {
                              key: "cell(bombas)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        data.item.ordem.bombas.nome_bombas
                                      ) +
                                      "\n                    "
                                  ),
                                ]
                              },
                            },
                            {
                              key: "cell(Data_de_emissao)",
                              fn: function (data) {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm.dateTime(data.item.ordem.created_at)
                                      ) +
                                      "\n                    "
                                  ),
                                ]
                              },
                            },
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
                                              name: "supply-details",
                                              params: {
                                                refs: data.item.ordem.refs,
                                              },
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
                                            {
                                              staticClass: "align-middle ml-50",
                                            },
                                            [_vm._v("Details")]
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
                          ],
                          null,
                          false,
                          2534658875
                        ),
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
                                    "d-flex align-items-center justify-content-center justify-content-sm-start",
                                  attrs: { cols: "12", sm: "8" },
                                },
                                [
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v(
                                      "mostrar " +
                                        _vm._s(_vm.dataMeta.from) +
                                        " de " +
                                        _vm._s(_vm.dataMeta.to) +
                                        " para " +
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
                                    "d-flex align-items-center justify-content-center justify-content-sm-end",
                                  attrs: { cols: "12", sm: "4" },
                                },
                                [
                                  _c("b-pagination", {
                                    staticClass: "mb-0 mt-1 mt-sm-0",
                                    attrs: {
                                      "total-rows": _vm.totalAbastecimentos,
                                      "per-page": _vm.perPage,
                                      "first-number": "",
                                      "last-number": "",
                                      "prev-class": "prev-item",
                                      "next-class": "next-item",
                                    },
                                    scopedSlots: _vm._u(
                                      [
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
                                      ],
                                      null,
                                      false,
                                      1308952388
                                    ),
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

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _historicos_vue_vue_type_template_id_78d13bee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historicos.vue?vue&type=template&id=78d13bee& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=template&id=78d13bee&");
/* harmony import */ var _historicos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historicos.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _historicos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _historicos_vue_vue_type_template_id_78d13bee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _historicos_vue_vue_type_template_id_78d13bee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_historicos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./historicos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_historicos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=template&id=78d13bee&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=template&id=78d13bee& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_historicos_vue_vue_type_template_id_78d13bee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./historicos.vue?vue&type=template&id=78d13bee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Gestao-abastecimentos/abastecimentos/historicos.vue?vue&type=template&id=78d13bee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_historicos_vue_vue_type_template_id_78d13bee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_historicos_vue_vue_type_template_id_78d13bee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Gestao-abastecimentos/abastecimentos/index.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/Gestao-abastecimentos/abastecimentos/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\wamp64\\www\\portal_pfuxela\\resources\\js\\src\\views\\Gestao-abastecimentos\\abastecimentos\\index.js: Unexpected token, expected \",\" (25:4)\n\n\u001b[0m \u001b[90m 23 |\u001b[39m     { key\u001b[33m:\u001b[39m \u001b[32m'user.name'\u001b[39m\u001b[33m,\u001b[39m sortable\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m     { \u001b[33mKey\u001b[39m\u001b[33m:\u001b[39m \u001b[32m'imprimir'\u001b[39m\u001b[33m,\u001b[39m sortable\u001b[33m:\u001b[39m \u001b[36mtrue\u001b[39m}\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m     { key\u001b[33m:\u001b[39m \u001b[32m'acções'\u001b[39m }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m   ]\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m   \u001b[36mconst\u001b[39m fieldCollumns \u001b[33m=\u001b[39m [\u001b[0m\n    at instantiate (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at Object.raise (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:3334:19)\n    at Object.unexpected (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:3372:16)\n    at Object.expect (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:4001:28)\n    at Object.parseExprList (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:13895:14)\n    at Object.parseArrayLike (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:13785:26)\n    at Object.parseExprAtom (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12878:23)\n    at Object.parseExprAtom (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:8033:20)\n    at Object.parseExprSubscripts (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12539:23)\n    at Object.parseUpdate (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12518:21)\n    at Object.parseMaybeUnary (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12489:23)\n    at Object.parseMaybeUnaryOrPrivate (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12283:61)\n    at Object.parseExprOps (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12290:23)\n    at Object.parseMaybeConditional (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12260:23)\n    at Object.parseMaybeAssign (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12213:21)\n    at C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12171:39\n    at Object.allowInAnd (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14231:16)\n    at Object.parseMaybeAssignAllowIn (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:12171:17)\n    at Object.parseVar (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15255:91)\n    at Object.parseVarStatement (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15057:10)\n    at Object.parseStatementContent (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14603:21)\n    at Object.parseStatement (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14528:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15167:25)\n    at Object.parseBlockBody (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15158:10)\n    at Object.parseBlock (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15142:10)\n    at Object.parseFunctionBody (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:13836:24)\n    at Object.parseFunctionBodyAndFinish (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:13820:10)\n    at C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15317:12\n    at Object.withSmartMixTopicForbiddingContext (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14208:14)\n    at Object.parseFunction (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15316:10)\n    at Object.parseExportDefaultExpression (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15874:19)\n    at Object.parseExport (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15786:31)\n    at Object.parseStatementContent (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14644:27)\n    at Object.parseStatement (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:14528:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\wamp64\\www\\portal_pfuxela\\node_modules\\@babel\\parser\\lib\\index.js:15167:25)");

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
        _axios__WEBPACK_IMPORTED_MODULE_1__["default"].post('/api/RelatorioGeral', {
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
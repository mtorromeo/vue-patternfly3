/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _router = __webpack_require__(/*! ./router */ 1);
	
	var _router2 = _interopRequireDefault(_router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.debug = true; /* global Vue */
	
	
	new Vue({
	  el: '#app',
	  router: _router2.default,
	
	  data: function data() {
	    return {
	      layout: 'vertical',
	      layoutIcons: true,
	      layoutCollapsable: true
	    };
	  }
	});

/***/ },
/* 1 */
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(/*! ./pages/home.vue */ 2);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _getStarted = __webpack_require__(/*! ./pages/get-started.vue */ 5);
	
	var _getStarted2 = _interopRequireDefault(_getStarted);
	
	var _layout = __webpack_require__(/*! ./pages/layout.vue */ 8);
	
	var _layout2 = _interopRequireDefault(_layout);
	
	var _components = __webpack_require__(/*! ./pages/components.vue */ 21);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _notifications = __webpack_require__(/*! ./pages/notifications.vue */ 30);
	
	var _notifications2 = _interopRequireDefault(_notifications);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var router = new VueRouter({
	  routes: [{
	    path: '/',
	    component: _home2.default
	  }, {
	    path: '/get-started',
	    component: _getStarted2.default
	  }, {
	    path: '/layout',
	    component: _layout2.default
	  }, {
	    path: '/notifications',
	    component: _notifications2.default
	  }, {
	    path: '/components',
	    component: _components2.default
	  }]
	}); /* global VueRouter */
	
	exports.default = router;

/***/ },
/* 2 */
/*!****************************!*\
  !*** ./src/pages/home.vue ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./home.vue */ 3)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-2639deb0!vue-loader/lib/selector?type=template&index=0!./home.vue */ 4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/mnt/media/development/vue-patternfly/docs/src/pages/home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2639deb0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2639deb0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] home.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 3 */
/*!******************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/home.vue ***!
  \******************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _package = __webpack_require__(/*! ../../../package.json */ 33);
	
	var _package2 = _interopRequireDefault(_package);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'home-page',
	
	  data: function data() {
	    return {
	      version: _package2.default.version
	    };
	  },
	
	
	  computed: {
	    github: function github() {
	      return _package2.default.repository.url.replace(/^git+|\.git$/, '');
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 4 */
/*!**********************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler.js?id=data-v-2639deb0!../~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/home.vue ***!
  \**********************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('article', {
	    staticClass: "home"
	  }, [_h('header', {
	    staticClass: "jumbotron"
	  }, [_h('h1', ["Vue PatternFly"]), " ", _h('p', {
	    staticClass: "description"
	  }, ["\n      PatternFly components for Vue.js 2\n    "]), " ", _h('p', [_h('router-link', {
	    attrs: {
	      "to": "/get-started",
	      "exact": true
	    }
	  }, [_h('a', {
	    staticClass: "btn btn-primary"
	  }, ["Get Started"])]), " ", _h('a', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "href": _vm.github
	    }
	  }, ["GITHUB"])]), " ", _h('p', {
	    staticClass: "version"
	  }, ["\n      Version " + _vm._s(_vm.version) + "\n    "])]), " ", _h('section', {
	    staticClass: "container-fluid"
	  }, [_h('h2', ["About Vue PatternFly"]), " ", _h('p', ["Vue PatternFly implements a set of reusable Vue.js components following the PatternFly design patterns and usage guidelines to facilitate building of enterprise IT applications."]), " ", _h('div', {
	    staticClass: "row row-cards-pf"
	  }, [_h('div', {
	    staticClass: "col-xs-12 col-md-4"
	  }, [_h('pf-card', {
	    attrs: {
	      "title": "About Vue.js"
	    }
	  }, [_h('div', ["«Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.»"]), " ", _h('div', [_h('a', {
	    attrs: {
	      "href": "https://vuejs.org/",
	      "target": "_blank"
	    }
	  }, ["WebSite ", _h('span', {
	    staticClass: "fa fa-external-link"
	  })])])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-md-4"
	  }, [_h('pf-card', {
	    attrs: {
	      "title": "About PatternFly"
	    }
	  }, [_h('div', ["«PatternFly is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides and an active community that helps support it all.»"]), " ", _h('div', [_h('a', {
	    attrs: {
	      "href": "http://www.patternfly.org/",
	      "target": "_blank"
	    }
	  }, ["WebSite ", _h('span', {
	    staticClass: "fa fa-external-link"
	  })])])])]), " ", _h('div', {
	    staticClass: "col-xs-12 col-md-4"
	  }, [_h('pf-card', {
	    attrs: {
	      "title": "About VueStrap"
	    }
	  }, [_h('div', ["«Bootstrap components built with Vue.js.»"]), " ", _h('div', ["Since PatternFly is built on top of the Bootstrap framework, VueStrap is a natural complement library."]), " ", _h('div', [_h('a', {
	    attrs: {
	      "href": "http://yuche.github.io/vue-strap/",
	      "target": "_blank"
	    }
	  }, ["WebSite ", _h('span', {
	    staticClass: "fa fa-external-link"
	  })])])])])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2639deb0", module.exports)
	  }
	}

/***/ },
/* 5 */
/*!***********************************!*\
  !*** ./src/pages/get-started.vue ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./get-started.vue */ 6)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-05ff09c9!vue-loader/lib/selector?type=template&index=0!./get-started.vue */ 7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/mnt/media/development/vue-patternfly/docs/src/pages/get-started.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-05ff09c9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-05ff09c9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] get-started.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 6 */
/*!*************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/get-started.vue ***!
  \*************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  name: 'get-started-page'
	};

/***/ },
/* 7 */
/*!*****************************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler.js?id=data-v-05ff09c9!../~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/get-started.vue ***!
  \*****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('article', {
	    staticClass: "page"
	  }, [_h('header', [_h('h1', ["Get Started"])]), " ", _h('section', [_h('p', ["Using the vue-patternfly module is really simple as it can be simply included in the HTML of the page as a script tag or required/imported following either CommonJS or AMD specs."]), " ", _h('p', ["The guide that you are reading is using vue-patternfly itself and imports every dependency as script/style tags."]), " ", _h('h3', ["HTML"]), " ", _h('pre', [_h('code', {
	    staticClass: "lang-html"
	  }, ["<html>\n    <head>\n      <link rel=\"stylesheet\" href=\"https://unpkg.com/patternfly/dist/css/patternfly.min.css\">\n      <link rel=\"stylesheet\" href=\"https://unpkg.com/patternfly/dist/css/patternfly-additions.min.css\">\n      <link rel=\"stylesheet\" href=\"https://unpkg.com/c3/c3.min.css\">\n      <link rel=\"stylesheet\" href=\"https://unpkg.com/vue-patternfly/styles/patternfly-alt.css\">\n    </head>\n    <body>\n      <pf-layout id=\"app\"></pf-layout>\n\n      <script src=\"https://unpkg.com/d3/d3.min.js\"></script>\n      <script src=\"https://unpkg.com/c3/c3.min.js\"></script>\n      <script src=\"https://unpkg.com/vue/dist/vue.min.js\"></script>\n      <script src=\"https://unpkg.com/vue-router/dist/vue-router.min.js\"></script>\n      <script src=\"https://rawgithub.com/yuche/vue-strap/071995989df214c149f5f74a27872d67daa81a10/dist/vue-strap.min.js\"></script>\n      <script src=\"https://unpkg.com/vue-patternfly/dist/vue-patternfly.js\"></script>\n    </body>\n</html>"])]), " ", _h('h3', ["JavaScript"]), " ", _h('pre', [_h('code', {
	    staticClass: "lang-javascript"
	  }, ["// If using a module system, import Vue and VuePatternfly and call Vue.use(VuePatternfly).\n\nconst app = new Vue({\n  el: '#app'\n})"])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-05ff09c9", module.exports)
	  }
	}

/***/ },
/* 8 */
/*!******************************!*\
  !*** ./src/pages/layout.vue ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./layout.vue */ 9)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-c5c6058a!vue-loader/lib/selector?type=template&index=0!./layout.vue */ 20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/mnt/media/development/vue-patternfly/docs/src/pages/layout.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-c5c6058a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-c5c6058a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] layout.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 9 */
/*!********************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/layout.vue ***!
  \********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _buttonGroup = __webpack_require__(/*! vue-strap/src/buttonGroup.vue */ 10);
	
	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
	
	var _Radio = __webpack_require__(/*! vue-strap/src/Radio.vue */ 13);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  name: 'layout-page',
	
	  components: {
	    ButtonGroup: _buttonGroup2.default,
	    Radio: _Radio2.default
	  }
	};

/***/ },
/* 10 */
/*!******************************************!*\
  !*** ../~/vue-strap/src/buttonGroup.vue ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./buttonGroup.vue */ 11)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-d64093e0!vue-loader/lib/selector?type=template&index=0!./buttonGroup.vue */ 12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/mnt/media/development/vue-patternfly/node_modules/vue-strap/src/buttonGroup.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d64093e0", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d64093e0", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] buttonGroup.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/*!********************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!../~/vue-strap/src/buttonGroup.vue ***!
  \********************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    buttons: { default: true },
	    justified: { type: Boolean, default: false },
	    type: { type: String, default: 'default' },
	    value: { default: null },
	    vertical: { type: Boolean, default: false }
	  },
	  data: function data() {
	    this._btnGroup = true;
	    return {
	      val: this.value
	    };
	  },
	
	  watch: {
	    val: function val(_val) {
	      this.$emit('input', _val);
	    }
	  }
	};

/***/ },
/* 12 */
/*!************************************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler.js?id=data-v-d64093e0!../~/vue-loader/lib/selector.js?type=template&index=0!../~/vue-strap/src/buttonGroup.vue ***!
  \************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    class: {
	      'btn-group': _vm.buttons, 'btn-group-justified': _vm.justified, 'btn-group-vertical': _vm.vertical
	    },
	    attrs: {
	      "data-toggle": _vm.buttons && 'buttons'
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d64093e0", module.exports)
	  }
	}

/***/ },
/* 13 */
/*!************************************!*\
  !*** ../~/vue-strap/src/Radio.vue ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!vue-loader/lib/style-rewriter?id=data-v-1d5228be!vue-loader/lib/selector?type=styles&index=0!./Radio.vue */ 14)
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./Radio.vue */ 18)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-1d5228be!vue-loader/lib/selector?type=template&index=0!./Radio.vue */ 19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/mnt/media/development/vue-patternfly/node_modules/vue-strap/src/Radio.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1d5228be", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1d5228be", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Radio.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ../~/vue-style-loader!../~/css-loader?sourceMap!../~/vue-loader/lib/style-rewriter.js?id=data-v-1d5228be!../~/vue-loader/lib/selector.js?type=styles&index=0!../~/vue-strap/src/Radio.vue ***!
  \*************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../css-loader?sourceMap!./../../vue-loader/lib/style-rewriter.js?id=data-v-1d5228be!./../../vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue */ 15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../vue-style-loader/addStyles.js */ 17)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js?sourceMap!./../../vue-loader/lib/style-rewriter.js?id=data-v-1d5228be!./../../vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue", function() {
				var newContent = require("!!./../../css-loader/index.js?sourceMap!./../../vue-loader/lib/style-rewriter.js?id=data-v-1d5228be!./../../vue-loader/lib/selector.js?type=styles&index=0!./Radio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/*!***************************************************************************************************************************************************************************!*\
  !*** ../~/css-loader?sourceMap!../~/vue-loader/lib/style-rewriter.js?id=data-v-1d5228be!../~/vue-loader/lib/selector.js?type=styles&index=0!../~/vue-strap/src/Radio.vue ***!
  \***************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../css-loader/lib/css-base.js */ 16)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.radio { position: relative;\n}\n.radio > label > input {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  z-index: -1;\n  box-sizing: border-box;\n}\n.radio > label > .icon {\n  position: absolute;\n  top: .15rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  text-align: center;\n  user-select: none;\n  border-radius: .7rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.radio:not(.active) > label > .icon {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\n.radio > label > input:focus ~ .icon {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.radio.active > label > .icon {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\n}\n.radio.active .btn-default { filter: brightness(75%);\n}\n.radio.disabled > label > .icon,\n.radio.readonly > label > .icon,\n.btn.readonly {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=radio] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}\n", "", {"version":3,"sources":["/../node_modules/vue-strap/src/Radio.vue?59cee086"],"names":[],"mappings":";AAmGA,SAAA,mBAAA;CAAA;AACA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;EACA,QAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,6BAAA;EACA,mCAAA;EACA,yBAAA;CACA;AACA;EACA,uBAAA;EACA,uBAAA;CACA;AACA;EACA,WAAA;EACA,0BAAA;EACA,0EAAA;CACA;AACA;EACA,2BAAA;EACA,8OAAA;CACA;AACA,6BAAA,wBAAA;CAAA;AAEA;;;EAGA,0BAAA;EACA,iBAAA;EACA,aAAA;CACA;AACA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;CACA","file":"Radio.vue","sourcesContent":["<template>\n  <div :is=\"buttonStyle?'label':'div'\" @click.prevent=\"toggle\"\n    :class=\"[(buttonStyle?'btn btn-'+typeColor:'radio '+typeColor),{active:active,disabled:disabled,readonly:readonly}]\"\n  >\n    <template v-if=\"buttonStyle\">\n      <input type=\"radio\" autocomplete=\"off\" ref=\"input\"\n        v-show=\"!readonly\"\n        v-model=\"check\"\n        :value=\"checkedValue\"\n        :name=\"name\"\n        :readonly=\"readonly\"\n        :disabled=\"disabled\"\n      />\n      <slot></slot>\n    </template>\n    <label v-else class=\"open\">\n      <input type=\"radio\" autocomplete=\"off\" ref=\"input\"\n        v-model=\"check\"\n        :value=\"checkedValue\"\n        :name=\"name\"\n        :readonly=\"readonly\"\n        :disabled=\"disabled\"\n      />\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\n      <slot></slot>\n    </label>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    button: {type: Boolean, default: false},\n    checkedValue: {default: true},\n    disabled: {type: Boolean, default: false},\n    name: {type: String, default: null},\n    readonly: {type: Boolean, default: false},\n    type: {type: String, default: null},\n    value: {default: false}\n  },\n  data () {\n    return {\n      check: this.value\n    }\n  },\n  computed: {\n    active () { return this.check === this.checkedValue },\n    parentValue () { return this._inGroup ? this.$parent.val === this.value : null },\n    buttonStyle () { return this.button || (this._inGroup && this.$parent.buttons) },\n    typeColor () { return (this.type || (this.$parent && this.$parent.type)) || 'default' }\n  },\n  watch: {\n    check (val) {\n      if (this.checkedValue === val) {\n        this.$emit('input', val)\n        this.$emit('checked', true)\n        if (this._inGroup) { this.$parent.val = val }\n      }\n    },\n    parentValue (val) {\n      if (this.check !== val && this.checkedValue === val) { this.check = val }\n    },\n    value (val) {\n      this.check = this.checkedValue === val ? val : null\n    }\n  },\n  created () {\n    var parent = this.$parent\n    if (parent && parent._btnGroup && !parent._checkboxGroup) {\n      this._inGroup = true\n      parent._radioGroup = true\n    }\n    if (this.$parent._radioGroup) {\n      if (this.$parent.val) {\n        this.check = (this.$parent.val === this.checkedValue)\n      } else if (this.check) {\n        this.$parent.val = this.checkedValue\n      }\n    }\n  },\n  methods: {\n    focus () {\n      this.$refs.input.focus()\n    },\n    toggle () {\n      if (this.disabled) { return }\n      this.focus()\n      if (this.readonly) { return }\n      this.check = this.checkedValue\n      if (this._inGroup) {\n        this.$parent.val = this.checkedValue\n      }\n    }\n  }\n}\n</script>\n\n<style scope>\n.radio { position: relative; }\n.radio > label > input {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  z-index: -1;\n  box-sizing: border-box;\n}\n.radio > label > .icon {\n  position: absolute;\n  top: .15rem;\n  left: 0;\n  display: block;\n  width: 1.4rem;\n  height: 1.4rem;\n  text-align: center;\n  user-select: none;\n  border-radius: .7rem;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n.radio:not(.active) > label > .icon {\n  background-color: #ddd;\n  border: 1px solid #bbb;\n}\n.radio > label > input:focus ~ .icon {\n  outline: 0;\n  border: 1px solid #66afe9;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\n}\n.radio.active > label > .icon {\n  background-size: 1rem 1rem;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\n}\n.radio.active .btn-default { filter: brightness(75%); }\n\n.radio.disabled > label > .icon,\n.radio.readonly > label > .icon,\n.btn.readonly {\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\nlabel.btn > input[type=radio] {\n  position: absolute;\n  clip: rect(0,0,0,0);\n  pointer-events: none;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 16 */
/*!***************************************!*\
  !*** ../~/css-loader/lib/css-base.js ***!
  \***************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 17 */
/*!******************************************!*\
  !*** ../~/vue-style-loader/addStyles.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 18 */
/*!**************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!../~/vue-strap/src/Radio.vue ***!
  \**************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    button: { type: Boolean, default: false },
	    checkedValue: { default: true },
	    disabled: { type: Boolean, default: false },
	    name: { type: String, default: null },
	    readonly: { type: Boolean, default: false },
	    type: { type: String, default: null },
	    value: { default: false }
	  },
	  data: function data() {
	    return {
	      check: this.value
	    };
	  },
	
	  computed: {
	    active: function active() {
	      return this.check === this.checkedValue;
	    },
	    parentValue: function parentValue() {
	      return this._inGroup ? this.$parent.val === this.value : null;
	    },
	    buttonStyle: function buttonStyle() {
	      return this.button || this._inGroup && this.$parent.buttons;
	    },
	    typeColor: function typeColor() {
	      return this.type || this.$parent && this.$parent.type || 'default';
	    }
	  },
	  watch: {
	    check: function check(val) {
	      if (this.checkedValue === val) {
	        this.$emit('input', val);
	        this.$emit('checked', true);
	        if (this._inGroup) {
	          this.$parent.val = val;
	        }
	      }
	    },
	    parentValue: function parentValue(val) {
	      if (this.check !== val && this.checkedValue === val) {
	        this.check = val;
	      }
	    },
	    value: function value(val) {
	      this.check = this.checkedValue === val ? val : null;
	    }
	  },
	  created: function created() {
	    var parent = this.$parent;
	    if (parent && parent._btnGroup && !parent._checkboxGroup) {
	      this._inGroup = true;
	      parent._radioGroup = true;
	    }
	    if (this.$parent._radioGroup) {
	      if (this.$parent.val) {
	        this.check = this.$parent.val === this.checkedValue;
	      } else if (this.check) {
	        this.$parent.val = this.checkedValue;
	      }
	    }
	  },
	
	  methods: {
	    focus: function focus() {
	      this.$refs.input.focus();
	    },
	    toggle: function toggle() {
	      if (this.disabled) {
	        return;
	      }
	      this.focus();
	      if (this.readonly) {
	        return;
	      }
	      this.check = this.checkedValue;
	      if (this._inGroup) {
	        this.$parent.val = this.checkedValue;
	      }
	    }
	  }
	};

/***/ },
/* 19 */
/*!******************************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler.js?id=data-v-1d5228be!../~/vue-loader/lib/selector.js?type=template&index=0!../~/vue-strap/src/Radio.vue ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h(_vm.buttonStyle ? 'label' : 'div', {
	    tag: "div",
	    class: [(_vm.buttonStyle ? 'btn btn-' + _vm.typeColor : 'radio ' + _vm.typeColor), {
	      active: _vm.active,
	      disabled: _vm.disabled,
	      readonly: _vm.readonly
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        _vm.toggle($event)
	      }
	    }
	  }, [(_vm.buttonStyle) ? [_h('input', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!_vm.readonly),
	      expression: "!readonly"
	    }, {
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check),
	      expression: "check"
	    }],
	    ref: "input",
	    attrs: {
	      "type": "radio",
	      "autocomplete": "off",
	      "name": _vm.name,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.checkedValue,
	      "checked": _vm._q(_vm.check, _vm.checkedValue)
	    },
	    on: {
	      "change": function($event) {
	        _vm.check = _vm.checkedValue
	      }
	    }
	  }), " ", _vm._t("default")] : _h('label', {
	    staticClass: "open"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.check),
	      expression: "check"
	    }],
	    ref: "input",
	    attrs: {
	      "type": "radio",
	      "autocomplete": "off",
	      "name": _vm.name,
	      "readonly": _vm.readonly,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": _vm.checkedValue,
	      "checked": _vm._q(_vm.check, _vm.checkedValue)
	    },
	    on: {
	      "change": function($event) {
	        _vm.check = _vm.checkedValue
	      }
	    }
	  }), " ", _h('span', {
	    staticClass: "icon dropdown-toggle",
	    class: [_vm.active ? 'btn-' + _vm.typeColor : '', {
	      bg: _vm.typeColor === 'default'
	    }]
	  }), " ", (_vm.active && _vm.typeColor === 'default') ? _h('span', {
	    staticClass: "icon"
	  }) : _vm._e(), " ", _vm._t("default")]), " "])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1d5228be", module.exports)
	  }
	}

/***/ },
/* 20 */
/*!************************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler.js?id=data-v-c5c6058a!../~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/layout.vue ***!
  \************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('article', {
	    staticClass: "page"
	  }, [_vm._m(0), " ", _h('section', [_h('p', ["The pf-layout component handles the application's navigation controls and is a perfect fit as the root element of the Vue.js application."]), " ", _h('h3', ["Live Controls"]), " ", _h('form', {
	    staticClass: "form-horizontal"
	  }, [_h('div', {
	    staticClass: "form-group"
	  }, [_h('label', {
	    staticClass: "col-sm-2 control-label"
	  }, ["Direction"]), " ", _h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('button-group', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.$root.layout),
	      expression: "$root.layout"
	    }],
	    domProps: {
	      "value": (_vm.$root.layout)
	    },
	    on: {
	      "input": function($event) {
	        _vm.$root.layout = $event
	      }
	    }
	  }, [_h('radio', {
	    attrs: {
	      "value": _vm.$root.layout,
	      "checked-value": "horizontal"
	    }
	  }, ["Horizontal"]), " ", _h('radio', {
	    attrs: {
	      "value": _vm.$root.layout,
	      "checked-value": "vertical"
	    }
	  }, ["Vertical"])])])]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('label', {
	    staticClass: "col-sm-2 control-label",
	    attrs: {
	      "for": "iconInput"
	    }
	  }, ["Icons"]), " ", _h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.$root.layoutIcons),
	      expression: "$root.layoutIcons"
	    }],
	    attrs: {
	      "type": "checkbox",
	      "id": "iconInput"
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.$root.layoutIcons) ? _vm._i(_vm.$root.layoutIcons, null) > -1 : _vm._q(_vm.$root.layoutIcons, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = _vm.$root.layoutIcons,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.$root.layoutIcons = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.$root.layoutIcons = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.$root.layoutIcons = $$c
	        }
	      }
	    }
	  })])]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('label', {
	    staticClass: "col-sm-2 control-label",
	    attrs: {
	      "for": "collapseInput"
	    }
	  }, ["Collapsable"]), " ", _h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.$root.layoutCollapsable),
	      expression: "$root.layoutCollapsable"
	    }],
	    attrs: {
	      "type": "checkbox",
	      "id": "collapseInput"
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.$root.layoutCollapsable) ? _vm._i(_vm.$root.layoutCollapsable, null) > -1 : _vm._q(_vm.$root.layoutCollapsable, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = _vm.$root.layoutCollapsable,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.$root.layoutCollapsable = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.$root.layoutCollapsable = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.$root.layoutCollapsable = $$c
	        }
	      }
	    }
	  })])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('header', [_h('h1', ["Layout"])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-c5c6058a", module.exports)
	  }
	}

/***/ },
/* 21 */
/*!**********************************!*\
  !*** ./src/pages/components.vue ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./components.vue */ 22)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-6887caa7!vue-loader/lib/selector?type=template&index=0!./components.vue */ 29)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/mnt/media/development/vue-patternfly/docs/src/pages/components.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6887caa7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6887caa7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] components.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 22 */
/*!************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components.vue ***!
  \************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(/*! vue-strap/src/Dropdown.vue */ 23);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'components-page',
	
	  components: {
	    Dropdown: _Dropdown2.default
	  },
	
	  data: function data() {
	    return {
	      sortField: {},
	      sortAscending: true,
	      filters: []
	    };
	  },
	
	
	  methods: {
	    setSort: function setSort(field, ascending) {
	      this.sortField = field;
	      this.sortAscending = ascending;
	    },
	    addFilter: function addFilter(filter, value) {
	      var f = {};
	      f[filter.title] = value;
	      this.filters.push(f);
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 23 */
/*!***************************************!*\
  !*** ../~/vue-strap/src/Dropdown.vue ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./Dropdown.vue */ 24)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-19760a9e!vue-loader/lib/selector?type=template&index=0!./Dropdown.vue */ 28)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/mnt/media/development/vue-patternfly/node_modules/vue-strap/src/Dropdown.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-19760a9e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-19760a9e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 24 */
/*!*****************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!../~/vue-strap/src/Dropdown.vue ***!
  \*****************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _NodeList = __webpack_require__(/*! ./utils/NodeList.js */ 25);
	
	var _NodeList2 = _interopRequireDefault(_NodeList);
	
	var _ClickOutside = __webpack_require__(/*! ./directives/ClickOutside.js */ 26);
	
	var _ClickOutside2 = _interopRequireDefault(_ClickOutside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  directives: {
	    ClickOutside: _ClickOutside2.default
	  },
	  props: {
	    disabled: { type: Boolean, default: false },
	    size: { type: String, default: null },
	    text: { type: String, default: null },
	    type: { type: String, default: 'default' },
	    value: { type: Boolean, default: false }
	  },
	  data: function data() {
	    var show = this.value;
	    return { show: show };
	  },
	
	  watch: {
	    show: function show(val) {
	      this.$emit('input', val);
	    },
	    value: function value(val) {
	      this.show = val;
	    }
	  },
	  computed: {
	    buttonSize: function buttonSize() {
	      return ~['lg', 'sm', 'xs'].indexOf(this.size) ? 'btn-' + this.size : '';
	    },
	    inInput: function inInput() {
	      return this.$parent._input;
	    },
	    isLi: function isLi() {
	      return this.$parent._isTabs || this.$parent._navbar || this.$parent.menu;
	    },
	    menu: function menu() {
	      return !this.$parent || this.$parent.navbar;
	    },
	    slots: function slots() {
	      return this._slotContents;
	    },
	    submenu: function submenu() {
	      return this.$parent && (this.$parent.menu || this.$parent.submenu);
	    }
	  },
	  methods: {
	    blur: function blur() {
	      this.show = false;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;
	
	    var $el = (0, _NodeList2.default)(this.$el);
	    $el.findChildren('a,button.dropdown-toggle').on('click', function (e) {
	      e.preventDefault();
	      if (!_this.disabled) {
	        _this.show = !_this.show;
	      }
	      return false;
	    });
	    $el.findChildren('ul').on('click', 'li>a', function (e) {
	      _this.show = false;
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    (0, _NodeList2.default)(this.$el).findChildren('a,button,ul').off();
	  }
	};

/***/ },
/* 25 */
/*!********************************************!*\
  !*** ../~/vue-strap/src/utils/NodeList.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ArrayProto = Array.prototype;
	var nodeError = new Error('Passed arguments must be of Node');
	var blurEvent = void 0;
	var blurList = [];
	var Events = [];
	
	function isNode(val) {
	  return val instanceof window.Node;
	}
	function isNodeList(val) {
	  return val instanceof window.NodeList || val instanceof NodeList || val instanceof window.HTMLCollection || val instanceof Array;
	}
	
	var NodeList = function () {
	  function NodeList(args) {
	    _classCallCheck(this, NodeList);
	
	    var nodes = args;
	    if (args[0] === window) {
	      nodes = [window];
	    } else if (typeof args[0] === 'string') {
	      nodes = (args[1] || document).querySelectorAll(args[0]);
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    } else if (0 in args && !isNode(args[0]) && args[0] && 'length' in args[0]) {
	      nodes = args[0];
	      if (args[1]) {
	        this.owner = args[1];
	      }
	    }
	    if (nodes) {
	      for (var i in nodes) {
	        this[i] = nodes[i];
	      }
	      this.length = nodes.length;
	    } else {
	      this.length = 0;
	    }
	  }
	
	  _createClass(NodeList, [{
	    key: 'concat',
	    value: function concat() {
	      var nodes = ArrayProto.slice.call(this);
	      function flatten(arr) {
	        ArrayProto.forEach.call(arr, function (el) {
	          if (isNode(el)) {
	            if (!~nodes.indexOf(el)) nodes.push(el);
	          } else if (isNodeList(el)) {
	            flatten(el);
	          }
	        });
	      }
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (isNode(arg)) {
	          if (!~nodes.indexOf(arg)) nodes.push(arg);
	        } else if (isNodeList(arg)) {
	          flatten(arg);
	        } else {
	          throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
	        }
	      });
	      return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var notRemoved = flatten(this).filter(function (el) {
	        if (el.remove) {
	          el.remove();
	        } else if (el.parentNode) {
	          el.parentNode.removeChild(el);
	        }
	        return document.body.contains(el);
	      });
	      if (notRemoved.length) console.warn('NodeList: Some nodes could not be deleted.');
	      return notRemoved;
	    }
	  }, {
	    key: 'each',
	    value: function each() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'filter',
	    value: function filter() {
	      return NodeListJS(ArrayProto.filter.apply(this, arguments), this);
	    }
	  }, {
	    key: 'find',
	    value: function find(element) {
	      var nodes = [];
	      flatten(this).forEach(function (node) {
	        ArrayProto.push.apply(nodes, node.querySelectorAll(element));
	      });
	      return flatten(nodes, this.owner);
	    }
	  }, {
	    key: 'findChildren',
	    value: function findChildren(element) {
	      var _this = this;
	
	      if (element) return this.find(element).filter(function (el) {
	        return _this.includes(el.parentElement);
	      });
	      return flatten(this.map(function (el) {
	        return el.children;
	      }));
	    }
	  }, {
	    key: 'forEach',
	    value: function forEach() {
	      ArrayProto.forEach.apply(this, arguments);
	      return this;
	    }
	  }, {
	    key: 'includes',
	    value: function includes(element, index) {
	      return ~this.indexOf(element, index);
	    }
	  }, {
	    key: 'map',
	    value: function map() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      var mapped = ArrayProto.map.apply(this, args);
	      return mapped.some(function (el) {
	        return isNode(el) || isNodeList(el);
	      }) ? flatten(mapped, this) : mapped;
	    }
	  }, {
	    key: 'parent',
	    value: function parent() {
	      return flatten(this.map(function (el) {
	        return el.parentNode;
	      }), this);
	    }
	  }, {
	    key: 'pop',
	    value: function pop(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      var pop = ArrayProto.pop.bind(this);
	      while (amount--) {
	        nodes.push(pop());
	      }return NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'push',
	    value: function push() {
	      var _this2 = this;
	
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this2.indexOf(arg)) ArrayProto.push.call(_this2, arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'shift',
	    value: function shift(amount) {
	      if (typeof amount !== 'number') {
	        amount = 1;
	      }
	      var nodes = [];
	      while (amount--) {
	        nodes.push(ArrayProto.shift.call(this));
	      }return nodes.length == 1 ? nodes[0] : NodeListJS(nodes, this);
	    }
	  }, {
	    key: 'slice',
	    value: function slice() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      return NodeListJS(ArrayProto.slice.apply(this, args), this);
	    }
	  }, {
	    key: 'splice',
	    value: function splice() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      for (var i = 2, l = args.length; i < l; i++) {
	        if (!isNode(args[i])) throw nodeError;
	      }
	      ArrayProto.splice.apply(this, args);
	      return this;
	    }
	  }, {
	    key: 'unshift',
	    value: function unshift() {
	      var _this3 = this;
	
	      var unshift = ArrayProto.unshift.bind(this);
	
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      ArrayProto.forEach.call(args, function (arg) {
	        if (!isNode(arg)) throw nodeError;
	        if (!~_this3.indexOf(arg)) unshift(arg);
	      });
	      return this;
	    }
	  }, {
	    key: 'addClass',
	    value: function addClass(classes) {
	      return this.toggleClass(classes, true);
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(classes) {
	      return this.toggleClass(classes, false);
	    }
	  }, {
	    key: 'toggleClass',
	    value: function toggleClass(classes, value) {
	      var _this4 = this;
	
	      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
	      if (typeof classes === 'string') {
	        classes = classes.trim().replace(/\s+/, ' ').split(' ');
	      }
	      classes.forEach(function (c) {
	        return _this4.each(function (el) {
	          return el.classList[method](c);
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'get',
	    value: function get(prop) {
	      var arr = [];
	      this.each(function (el) {
	        if (el !== null) {
	          el = el[prop];
	        }
	        arr.push(el);
	      });
	      return flatten(arr, this);
	    }
	  }, {
	    key: 'set',
	    value: function set(prop, value) {
	      if (prop.constructor === Object) {
	        this.each(function (el) {
	          if (el) {
	            for (var key in prop) {
	              if (key in el) {
	                el[key] = prop[key];
	              }
	            }
	          }
	        });
	      } else {
	        this.each(function (el) {
	          if (prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	      return this;
	    }
	  }, {
	    key: 'call',
	    value: function call() {
	      for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        args[_key7] = arguments[_key7];
	      }
	
	      var method = ArrayProto.shift.call(args);
	      var arr = [];
	      var returnThis = true;
	      this.each(function (el) {
	        if (el && el[method] instanceof Function) {
	          el = el[method].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      });
	      return returnThis ? this : flatten(arr, this);
	    }
	  }, {
	    key: 'item',
	    value: function item(index) {
	      return NodeListJS([this[index]], this);
	    }
	  }, {
	    key: 'on',
	
	
	    // event handlers
	    value: function on(events, selector, callback) {
	      if (typeof events === 'string') {
	        events = events.trim().replace(/\s+/, ' ').split(' ');
	      }
	      if (!this || !this.length) return this;
	      if (callback === undefined) {
	        callback = selector;
	        selector = null;
	      }
	      if (!callback) return this;
	      var fn = callback;
	      callback = selector ? function (e) {
	        var els = NodeListJS(selector, this);
	        if (!els.length) {
	          return;
	        }
	        els.some(function (el) {
	          var target = el.contains(e.target);
	          if (target) fn.call(el, e, el);
	          return target;
	        });
	      } : function (e) {
	        fn.apply(this, [e, this]);
	      };
	      this.each(function (el) {
	        events.forEach(function (event) {
	          if (el === window || isNode(el)) {
	            el.addEventListener(event, callback, false);
	            Events.push({
	              el: el,
	              event: event,
	              callback: callback
	            });
	          }
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      if (events instanceof Function) {
	        callback = events;
	        events = null;
	      }
	      if (typeof events === 'string' && callback instanceof Function) {
	        this.each(function (el) {
	          events.split(' ').forEach(function (event) {
	            Events.forEach(function (e) {
	              if (Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
	                Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                delete Events[e];
	              }
	            });
	          });
	        });
	      } else if (typeof events === 'string') {
	        this.each(function (el) {
	          events.split(' ').forEach(function (event) {
	            Events.forEach(function (e) {
	              if (Events[e] && Events[e].el === el && Events[e].event === event) {
	                Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	                delete Events[e];
	              }
	            });
	          });
	        });
	      } else if (callback instanceof Function) {
	        this.each(function (el) {
	          Events.forEach(function (e) {
	            if (Events[e] && Events[e].el === el && Events[e].callback === callback) {
	              Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	              delete Events[e];
	            }
	          });
	        });
	      } else {
	        this.each(function (el) {
	          Events.forEach(function (e) {
	            if (Events[e] && Events[e].el === el) {
	              Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
	              delete Events[e];
	            }
	          });
	        });
	      }
	      Events = Events.filter(function (el) {
	        return el !== undefined;
	      });
	      return this;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(callback) {
	      if (!this || !this.length) return this;
	      if (!callback) return this;
	      this.each(function (el) {
	        blurList.push({ el: el, callback: callback });
	      });
	      if (!blurEvent) {
	        blurEvent = function blurEvent(e) {
	          blurList.forEach(function (item) {
	            var target = item.el.contains(e.target) || item.el === e.target;
	            if (!target) item.callback.call(item.el, e, item.el);
	          });
	        };
	        document.addEventListener('click', blurEvent, false);
	        document.addEventListener('touchstart', blurEvent, false);
	      }
	      return this;
	    }
	  }, {
	    key: 'offBlur',
	    value: function offBlur(callback) {
	      this.each(function (el) {
	        blurList = blurList.filter(function (blur) {
	          if (blur && blur.el === el && (!callback || blur.callback === callback)) {
	            return false;
	          }
	          return el;
	        });
	      });
	      return this;
	    }
	  }, {
	    key: 'asArray',
	    get: function get() {
	      return ArrayProto.slice.call(this);
	    }
	  }]);
	
	  return NodeList;
	}();
	
	var NL = NodeList.prototype;
	
	function flatten(arr, owner) {
	  var list = [];
	  ArrayProto.forEach.call(arr, function (el) {
	    if (isNode(el)) {
	      if (!~list.indexOf(el)) list.push(el);
	    } else if (isNodeList(el)) {
	      for (var id in el) {
	        list.push(el[id]);
	      }
	    } else if (el !== null) {
	      arr.get = NL.get;
	      arr.set = NL.set;
	      arr.call = NL.call;
	      arr.owner = owner;
	      return arr;
	    }
	  });
	  return NodeListJS(list, owner);
	}
	
	Object.getOwnPropertyNames(ArrayProto).forEach(function (key) {
	  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
	    NL[key] = ArrayProto[key];
	  }
	});
	if (window.Symbol && Symbol.iterator) {
	  NL[Symbol.iterator] = NL.values = ArrayProto[Symbol.iterator];
	}
	var div = document.createElement('div');
	function setterGetter(prop) {
	  var _this5 = this;
	
	  if (NL[prop]) return;
	  if (div[prop] instanceof Function) {
	    NL[prop] = function () {
	      for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
	        args[_key8] = arguments[_key8];
	      }
	
	      var arr = [];
	      var returnThis = true;
	      for (var i in NL) {
	        var el = NL[i];
	        if (el && el[prop] instanceof Function) {
	          el = el[prop].apply(el, args);
	          arr.push(el);
	          if (returnThis && el !== undefined) {
	            returnThis = false;
	          }
	        } else {
	          arr.push(undefined);
	        }
	      }
	      return returnThis ? _this5 : flatten(arr, _this5);
	    };
	  } else {
	    Object.defineProperty(NL, prop, {
	      get: function get() {
	        var arr = [];
	        this.each(function (el) {
	          if (el !== null) {
	            el = el[prop];
	          }
	          arr.push(el);
	        });
	        return flatten(arr, this);
	      },
	      set: function set(value) {
	        this.each(function (el) {
	          if (el && prop in el) {
	            el[prop] = value;
	          }
	        });
	      }
	    });
	  }
	}
	for (var prop in div) {
	  setterGetter(prop);
	}function NodeListJS() {
	  for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
	    args[_key9] = arguments[_key9];
	  }
	
	  return new NodeList(args);
	}
	window.NL = NodeListJS;
	
	exports.default = NodeListJS;

/***/ },
/* 26 */
/*!*****************************************************!*\
  !*** ../~/vue-strap/src/directives/ClickOutside.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Click outside directive
	 */
	var binded = [];
	
	function handler(e) {
	  binded.forEach(function (el) {
	    if (!el.node.contains(e.target)) el.callback(e);
	  });
	}
	
	function addListener(node, callback) {
	  if (!binded.length) document.addEventListener('click', handler, false);
	  binded.push({ node: node, callback: callback });
	}
	
	function removeListener(node, callback) {
	  binded = binded.filter(function (el) {
	    return el.node !== node ? true : !callback ? false : el.node.callback !== callback;
	  });
	  if (!binded.length) document.removeEventListener('click', handler, false);
	}
	
	exports.default = {
	  bind: function bind(el, binding) {
	    removeListener(el, binding.value);
	    if (typeof binding.value !== 'function') {
	      if (process.env.NODE_ENV !== 'production') {
	        Vue.util.warn('ClickOutside only work with a function, received: v-' + binding.name + '="' + binding.expression + '"');
	      }
	    } else {
	      addListener(el, binding.value);
	    }
	  },
	  update: function update(el, binding) {
	    if (binding.value !== binding.oldValue) {
	      removeListener(el, binding.oldValue);
	      addListener(el, binding.value);
	    }
	  },
	  unbind: function unbind(el, binding) {
	    removeEventListener(el, binding.value);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/process/browser.js */ 27)))

/***/ },
/* 27 */
/*!**************************************!*\
  !*** (webpack)/~/process/browser.js ***!
  \**************************************/
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 28 */
/*!*********************************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler.js?id=data-v-19760a9e!../~/vue-loader/lib/selector.js?type=template&index=0!../~/vue-strap/src/Dropdown.vue ***!
  \*********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h(_vm.isLi ? 'li' : 'div', {
	    directives: [{
	      name: "click-outside",
	      rawName: "v-click-outside",
	      value: (_vm.blur),
	      expression: "blur"
	    }],
	    tag: "div",
	    class: [{
	      open: _vm.show,
	      disabled: _vm.disabled,
	      dropdown: _vm.isLi,
	      'input-group-btn': _vm.inInput,
	      'btn-group': !_vm.isLi && !_vm.inInput
	    }]
	  }, [_vm._t("before"), " ", _vm._t("button", [(_vm.isLi) ? _h('a', {
	    class: ['dropdown-toggle', _vm.buttonSize, {
	      disabled: _vm.disabled
	    }],
	    attrs: {
	      "role": "button"
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 27) { return; }
	        _vm.show = false
	      }
	    }
	  }, ["\n      " + _vm._s(_vm.text) + "\n      ", _h('span', {
	    staticClass: "caret"
	  })]) : _h('button', {
	    class: ['btn btn-' + _vm.type, _vm.buttonSize, 'dropdown-toggle'],
	    attrs: {
	      "type": "button",
	      "disabled": _vm.disabled
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 27) { return; }
	        _vm.show = false
	      }
	    }
	  }, ["\n      " + _vm._s(_vm.text) + "\n      ", _h('span', {
	    staticClass: "caret"
	  })]), " "]), " ", _vm._t("dropdown-menu", [_h('ul', {
	    staticClass: "dropdown-menu"
	  }, [_vm._t("default")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-19760a9e", module.exports)
	  }
	}

/***/ },
/* 29 */
/*!****************************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler.js?id=data-v-6887caa7!../~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components.vue ***!
  \****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('article', {
	    staticClass: "page"
	  }, [_vm._m(0), " ", _h('section', [_h('h2', ["Toolbar"]), " ", _h('pf-toolbar', {
	    ref: "toolbar",
	    attrs: {
	      "filter-fields": [{
	        title: 'Name',
	      }, {
	        title: 'Age',
	      }, {
	        title: 'Address',
	      }, {
	        title: 'Birth Month',
	        placeholder: 'Filter by Birth Month...',
	        values: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	      }],
	      "sort-fields": [{
	        title: 'Name',
	      }, {
	        title: 'Date',
	      }],
	      "views": "table,card,list",
	      "result-count": 0
	    },
	    on: {
	      "filters": function($event) {
	        _vm.filters = $event
	      },
	      "sort-change": _vm.setSort
	    }
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button",
	      "title": "Title 1"
	    },
	    on: {
	      "click": function($event) {
	        _vm.$refs.toolbar.filters.push({
	          title: 'Test',
	          value: 1
	        })
	      }
	    }
	  }, ["\n        Action 1\n      "]), " ", _h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "button",
	      "title": "Title 2"
	    }
	  }, ["\n        Action 2\n      "]), " ", _h('button', {
	    staticClass: "btn btn-danger",
	    attrs: {
	      "type": "button",
	      "title": "Title 3"
	    }
	  }, ["\n        Action 3\n      "]), " ", _h('dropdown', {
	    staticClass: "dropdown-kebab-pf",
	    attrs: {
	      "type": "link"
	    }
	  }, [_h('li', {
	    attrs: {
	      "role": "menuitem"
	    }
	  }, [_h('a', {
	    attrs: {
	      "title": "Menu Title 1"
	    }
	  }, ["Menu Item 1"])]), " ", _h('li', {
	    attrs: {
	      "role": "menuitem"
	    }
	  }, [_h('a', {
	    attrs: {
	      "title": "Menu Title 2"
	    }
	  }, ["Menu Item 2"])]), " ", _h('li', {
	    staticClass: "divider",
	    attrs: {
	      "role": "separator"
	    }
	  }), " ", _h('li', {
	    attrs: {
	      "role": "menuitem"
	    }
	  }, [_h('a', {
	    attrs: {
	      "title": "Menu Title 3"
	    }
	  }, ["Menu Item 3"])])])]), " ", _h('pre', ["Filters: " + _vm._s(_vm.filters) + "\n    Sort: " + _vm._s(_vm.sortField.title) + " " + _vm._s(_vm.sortAscending ? 'ascending' : 'descending')]), " ", _h('h2', ["Aggregate Status Card"]), " ", _h('div', {
	    staticClass: "row row-cards-pf"
	  }, [_h('div', {
	    staticClass: "col-md-3 col-lg-2"
	  }, [_h('pf-aggregate-status-card', {
	    attrs: {
	      "icon-class": "fa fa-shield",
	      "title": "Nodes",
	      "count": "793",
	      "href": "#"
	    }
	  }, [_h('pf-card-notification', {
	    attrs: {
	      "icon-class": "pficon pficon-error-circle-o",
	      "href": "#",
	      "count": "3"
	    }
	  }), " ", _h('pf-card-notification', {
	    attrs: {
	      "icon-class": "pficon pficon-warning-triangle-o",
	      "href": "#",
	      "count": "1"
	    }
	  })])]), " ", _h('div', {
	    staticClass: "col-md-3 col-lg-2"
	  }, [_h('pf-aggregate-status-card', {
	    attrs: {
	      "title": "Ipsum",
	      "count": "0",
	      "layout": "tall"
	    }
	  }, [_h('pf-card-notification', {
	    attrs: {
	      "icon-class": "pficon pficon-error-circle-o",
	      "href": "#",
	      "count": "3"
	    }
	  }), " ", _h('pf-card-notification', {
	    attrs: {
	      "icon-class": "pficon pficon-warning-triangle-o",
	      "href": "#",
	      "count": "1"
	    }
	  })])]), " ", _h('div', {
	    staticClass: "col-md-3 col-lg-2"
	  }, [_h('pf-aggregate-status-card', {
	    attrs: {
	      "icon-class": "fa fa-paper-plane",
	      "title": "Amet",
	      "count": "9",
	      "layout": "mini",
	      "accented": false
	    }
	  }, [_h('pf-card-notification', {
	    attrs: {
	      "icon-class": "pficon pficon-ok"
	    }
	  })])])]), " ", _h('div', {
	    staticClass: "row row-cards-pf"
	  }, [_h('div', {
	    staticClass: "col-md-6 col-lg-4"
	  }, [_h('h2', ["C3 Chart"]), " ", _h('pf-card', {
	    attrs: {
	      "title": "System Resources",
	      "foot-note": "Footer",
	      "filter": {
	        position: 'header',
	        filters: [{
	          label: 'Filtro 1'
	        }, {
	          label: 'Filtro 2'
	        } ]
	      }
	    }
	  }, [_h('pf-c3-chart', {
	    attrs: {
	      "type": "donut",
	      "title": "Memory",
	      "data": {
	        columns: [
	          ['Used', 123],
	          ['Available', 74]
	        ],
	        groups: [
	          ['used', 'available']
	        ]
	      }
	    }
	  })])]), " ", _h('div', {
	    staticClass: "col-md-12 col-lg-8"
	  }, [_h('h2', ["Utilization Bar Card"]), " ", _h('pf-card', {
	    attrs: {
	      "title": "System Resources"
	    }
	  }, [_h('pf-utilization-bar-chart', {
	    attrs: {
	      "title": "RAM Usage",
	      "units": "MB",
	      "value": 8,
	      "total": 24
	    }
	  }), " ", _h('label', {
	    staticClass: "label-title"
	  }, ["Inline Layouts with Error, Warning, and Ok Thresholds"]), " ", _h('pf-utilization-bar-chart', {
	    attrs: {
	      "title": "Disk I/O",
	      "units": "I/Ops",
	      "value": 450,
	      "total": 500,
	      "inline": "",
	      "warning": 60,
	      "error": 85
	    }
	  }), " ", _h('pf-utilization-bar-chart', {
	    attrs: {
	      "title": "CPU Usage",
	      "units": "MHz",
	      "value": 420,
	      "total": 500,
	      "inline": "",
	      "warning": 60,
	      "error": 85
	    }
	  }), " ", _h('pf-utilization-bar-chart', {
	    attrs: {
	      "title": "Memory",
	      "units": "GBs",
	      "value": 25,
	      "total": 100,
	      "inline": "",
	      "warning": 60,
	      "error": 85
	    }
	  }), " ", _h('pf-utilization-bar-chart')])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('header', [_h('h1', ["Components"])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-6887caa7", module.exports)
	  }
	}

/***/ },
/* 30 */
/*!*************************************!*\
  !*** ./src/pages/notifications.vue ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./notifications.vue */ 31)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-48ab54e7!vue-loader/lib/selector?type=template&index=0!./notifications.vue */ 32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/mnt/media/development/vue-patternfly/docs/src/pages/notifications.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-48ab54e7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-48ab54e7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] notifications.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 31 */
/*!***************************************************************************************************************!*\
  !*** ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/notifications.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  name: 'notifications-page',
	
	  data: function data() {
	    return {
	      notificationMessage: 'Test notification',
	      notificationType: 'info',
	      notificationToast: false
	    };
	  },
	
	
	  methods: {
	    notify: function notify() {
	      this.$refs.notifications.add('<strong>' + this.notificationType + '!</strong> ' + this.notificationMessage, this.notificationType);
	    }
	  }
	};

/***/ },
/* 32 */
/*!*******************************************************************************************************************************************************!*\
  !*** ../~/vue-loader/lib/template-compiler.js?id=data-v-48ab54e7!../~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/notifications.vue ***!
  \*******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('article', {
	    staticClass: "page"
	  }, [_vm._m(0), " ", _h('section', [_h('pf-notifications', {
	    ref: "notifications",
	    attrs: {
	      "toast": _vm.notificationToast
	    }
	  }), " ", _h('form', {
	    staticClass: "form-horizontal",
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        _vm.notify($event)
	      }
	    }
	  }, [_h('div', {
	    staticClass: "form-group"
	  }, [_h('label', {
	    staticClass: "col-sm-2 control-label"
	  }, ["Message"]), " ", _h('div', {
	    staticClass: "col-sm-10"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.notificationMessage),
	      expression: "notificationMessage"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.notificationMessage)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.notificationMessage = $event.target.value
	      }
	    }
	  })])]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('label', {
	    staticClass: "col-sm-2 control-label"
	  }, ["Type"]), " ", _h('div', {
	    staticClass: "col-sm-2"
	  }, [_h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.notificationType),
	      expression: "notificationType"
	    }],
	    staticClass: "form-control",
	    on: {
	      "change": function($event) {
	        _vm.notificationType = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          var val = "_value" in o ? o._value : o.value;
	          return val
	        })[0]
	      }
	    }
	  }, [_h('option', {
	    attrs: {
	      "value": "info"
	    }
	  }, ["info"]), " ", _h('option', {
	    attrs: {
	      "value": "success"
	    }
	  }, ["success"]), " ", _h('option', {
	    attrs: {
	      "value": "warning"
	    }
	  }, ["warning"]), " ", _h('option', {
	    attrs: {
	      "value": "danger"
	    }
	  }, ["danger"])])])]), " ", _h('div', {
	    staticClass: "form-group"
	  }, [_h('label', {
	    staticClass: "col-sm-2 control-label",
	    attrs: {
	      "for": "notification-toast"
	    }
	  }, ["Toast"]), " ", _h('div', {
	    staticClass: "col-sm-2"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.notificationToast),
	      expression: "notificationToast"
	    }],
	    attrs: {
	      "id": "notification-toast",
	      "type": "checkbox"
	    },
	    domProps: {
	      "checked": Array.isArray(_vm.notificationToast) ? _vm._i(_vm.notificationToast, null) > -1 : _vm._q(_vm.notificationToast, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = _vm.notificationToast,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _vm._i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (_vm.notificationToast = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_vm.notificationToast = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.notificationToast = $$c
	        }
	      }
	    }
	  })])]), " ", _vm._m(1)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('header', [_h('h1', ["Notifications"])])
	},function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "form-group"
	  }, [_h('div', {
	    staticClass: "col-sm-10 col-sm-offset-2"
	  }, [_h('button', {
	    staticClass: "btn btn-default",
	    attrs: {
	      "type": "submit"
	    }
	  }, ["Notify"])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-48ab54e7", module.exports)
	  }
	}

/***/ },
/* 33 */
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = {
		"name": "vue-patternfly",
		"version": "0.0.1",
		"description": "PatternFly components for Vue.js 2",
		"main": "dist/vue-patternfly.js",
		"directories": {
			"test": "test"
		},
		"scripts": {
			"purge": "rm -rf dist/",
			"dev": "webpack-dev-server --inline --hot -dw --port 8000",
			"compile": "webpack --progress --hide-modules -pc",
			"build": "npm run purge && npm run compile",
			"lint": "eslint src/* test/*",
			"prepublish": "npm run lint && npm run build"
		},
		"files": [
			"dist/",
			"src/"
		],
		"keywords": [
			"vue",
			"patternfly"
		],
		"author": "Massimiliano Torromeo <massimiliano.torromeo@gmail.com>",
		"license": "MIT",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/mtorromeo/vue-patternfly.git"
		},
		"bugs": {
			"url": "https://github.com/mtorromeo/vue-patternfly/issues"
		},
		"homepage": "https://github.com/mtorromeo/vue-patternfly#readme",
		"dependencies": {
			"c3": "^0.4.11",
			"patternfly": "^3.14.0",
			"positioner": "^0.2.0",
			"vue": "^2.1.0",
			"vue-strap": "yuche/vue-strap#v2"
		},
		"devDependencies": {
			"babel-core": "^6.18.2",
			"babel-eslint": "^7.1.1",
			"babel-loader": "^6.2.8",
			"babel-preset-es2015": "^6.18.0",
			"css-loader": "^0.26.0",
			"eslint": "^3.10.2",
			"eslint-plugin-html": "^1.7.0",
			"eslint-plugin-import": "^1.16.0",
			"json-loader": "^0.5.4",
			"style-loader": "^0.13.1",
			"vue-html-loader": "^1.2.3",
			"vue-loader": "^10.0.0",
			"vue-router": "^2.1.1",
			"vue-template-compiler": "^2.1.0",
			"webpack": "^1.13.3",
			"webpack-dev-server": "^1.16.2"
		}
	};

/***/ }
/******/ ]);
//# sourceMappingURL=docs.js.map
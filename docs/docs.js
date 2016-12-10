(function (vueStrap,VuePatternfly) {
'use strict';

VuePatternfly = 'default' in VuePatternfly ? VuePatternfly['default'] : VuePatternfly;

var name = "vue-patternfly";
var version = "0.0.2";
var description = "PatternFly components for Vue.js 2";
var main = "dist/vue-patternfly.min.js";
var directories = { "test": "test" };
var scripts = { "purge": "rm -rf dist/*", "docs": "cd docs && rollup -cw", "compile-docs": "cd docs && rollup -c && uglifyjs --screw-ie8 -mco docs.js docs.js", "compile": "rollup -c && uglifyjs --screw-ie8 -mco dist/vue-patternfly.min.js dist/vue-patternfly.min.js", "dev": "rollup -cw", "build": "npm run purge && npm run compile", "lint": "eslint src/*.js test/*", "prepublish": "npm run lint && npm run build" };
var files = ["dist/", "src/"];
var keywords = ["vue", "patternfly"];
var author = "Massimiliano Torromeo <massimiliano.torromeo@gmail.com>";
var license = "MIT";
var repository = { "type": "git", "url": "git+https://github.com/mtorromeo/vue-patternfly.git" };
var bugs = { "url": "https://github.com/mtorromeo/vue-patternfly/issues" };
var homepage = "https://github.com/mtorromeo/vue-patternfly#readme";
var dependencies = { "c3": "^0.4.11", "patternfly": "^3.14.0", "positioner": "^0.2.0", "vue": "^2.1.0", "vue-strap": "yuche/vue-strap#v2" };
var devDependencies = { "babel-core": "^6.20.0", "babel-eslint": "^7.1.1", "babel-plugin-external-helpers": "^6.18.0", "babel-preset-es2015": "^6.18.0", "eslint": "^3.10.2", "eslint-plugin-html": "^1.7.0", "eslint-plugin-import": "^1.16.0", "rollup": "^0.36.3", "rollup-plugin-babel": "^2.6.1", "rollup-plugin-commonjs": "^5.0.5", "rollup-plugin-css-only": "^0.1.0", "rollup-plugin-json": "^2.0.2", "rollup-plugin-node-resolve": "^2.0.0", "rollup-plugin-string": "^2.0.2", "rollup-plugin-vue2": "^0.6.1", "rollup-watch": "^2.5.0", "uglifyjs": "^2.4.10", "vue-router": "^2.1.1", "vue-template-compiler": "^2.1.0" };
var pkg = {
	name: name,
	version: version,
	description: description,
	main: main,
	directories: directories,
	scripts: scripts,
	files: files,
	keywords: keywords,
	author: author,
	license: license,
	repository: repository,
	bugs: bugs,
	homepage: homepage,
	dependencies: dependencies,
	devDependencies: devDependencies
};

var HomePage = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('article', { staticClass: "home" }, [_h('header', { staticClass: "jumbotron" }, [_h('h1', ["Vue PatternFly"]), " ", _h('p', { staticClass: "description" }, ["\n      PatternFly components for Vue.js 2\n    "]), " ", _h('p', [_h('router-link', { attrs: { "to": "/get-started", "exact": true } }, [_h('a', { staticClass: "btn btn-primary" }, ["Get Started"])]), " ", _h('a', { staticClass: "btn btn-default", attrs: { "href": _vm.github } }, [_h('span', { staticClass: "fa fa-github" }), " GITHUB"])]), " ", _h('p', { staticClass: "version" }, ["\n      Version " + _vm._s(_vm.version) + "\n    "])]), " ", _h('section', { staticClass: "container-fluid" }, [_h('h2', ["About Vue PatternFly"]), " ", _h('p', ["Vue PatternFly implements a set of reusable Vue.js components following the PatternFly design patterns and usage guidelines to facilitate building of enterprise IT applications."]), " ", _h('div', { staticClass: "row row-cards-pf" }, [_h('div', { staticClass: "col-xs-12 col-md-4" }, [_h('pf-card', { attrs: { "title": "About Vue.js" } }, [_h('div', ["«Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.»"]), " ", _h('div', [_h('a', { attrs: { "href": "https://vuejs.org/", "target": "_blank" } }, ["WebSite ", _h('span', { staticClass: "fa fa-external-link" })])])])]), " ", _h('div', { staticClass: "col-xs-12 col-md-4" }, [_h('pf-card', { attrs: { "title": "About PatternFly" } }, [_h('div', ["«PatternFly is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides and an active community that helps support it all.»"]), " ", _h('div', [_h('a', { attrs: { "href": "http://www.patternfly.org/", "target": "_blank" } }, ["WebSite ", _h('span', { staticClass: "fa fa-external-link" })])])])]), " ", _h('div', { staticClass: "col-xs-12 col-md-4" }, [_h('pf-card', { attrs: { "title": "About VueStrap" } }, [_h('div', ["«Bootstrap components built with Vue.js.»"]), " ", _h('div', ["Since PatternFly is built on top of the Bootstrap framework, VueStrap is a natural complement library."]), " ", _h('div', [_h('a', { attrs: { "href": "http://yuche.github.io/vue-strap/", "target": "_blank" } }, ["WebSite ", _h('span', { staticClass: "fa fa-external-link" })])])])])])])]);
  },
  staticRenderFns: [],
  name: 'home-page',

  data: function data() {
    return {
      version: pkg.version
    };
  },


  computed: {
    github: function github() {
      return pkg.repository.url.replace(/^git\+|\.git$/g, '');
    }
  }
};

var example1 = "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/patternfly/dist/css/patternfly.min.css\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/patternfly/dist/css/patternfly-additions.min.css\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/c3/c3.min.css\">\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/vue-patternfly/dist/vue-patternfly.css\">\n</head>\n<body>\n  <pf-layout id=\"app\"></pf-layout>\n\n  <script src=\"https://unpkg.com/d3/d3.min.js\"></script>\n  <script src=\"https://unpkg.com/c3/c3.min.js\"></script>\n  <script src=\"https://unpkg.com/vue/dist/vue.min.js\"></script>\n  <script src=\"https://unpkg.com/vue-router/dist/vue-router.min.js\"></script>\n  <script src=\"https://rawgithub.com/yuche/vue-strap/071995989df214c149f5f74a27872d67daa81a10/dist/vue-strap.min.js\"></script>\n  <script src=\"https://unpkg.com/vue-patternfly/dist/vue-patternfly.min.js\"></script>\n</body>\n</html>\n";

var initsample = "// If using a module system, import Vue and VuePatternfly and call Vue.use(VuePatternfly).\n\nconst app = new Vue({\nel: '#app'\n})\n";

var GetStartedPage = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('article', { staticClass: "page" }, [_vm._m(0), " ", _h('section', [_h('p', ["Using the vue-patternfly module is really simple as it can be simply included in the HTML of the page as a script tag or required/imported following either CommonJS or AMD specs."]), " ", _h('p', ["The guide that you are reading is using vue-patternfly itself and imports every dependency as script/style tags."]), " ", _h('h3', ["HTML"]), " ", _h('pre', [_h('code', { staticClass: "lang-html", domProps: { "textContent": _vm._s(_vm.example1) } })]), " ", _h('h3', ["JavaScript"]), " ", _h('pre', [_h('code', { staticClass: "lang-javascript", domProps: { "textContent": _vm._s(_vm.initsample) } })])])]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Get Started"])]);
  }],
  name: 'get-started-page',

  data: function data() {
    return {
      example1: example1,
      initsample: initsample
    };
  }
};

var vueroutersample = "<pf-layout id=\"app\" :icons=\"true\">\n  <router-link slot=\"brand\" to=\"/\" :exact=\"true\">\n  <a class=\"navbar-brand\">\n    <span class=\"navbar-brand-name\">Vue PatternFly</span>\n  </a>\n  </router-link>\n\n  <template slot=\"vertical-menu\">\n    <router-link tag=\"li\" class=\"list-group-item\" active-class=\"active\" to=\"/get-started\" :exact=\"true\">\n      <a>\n        <span class=\"fa fa-play-circle\" title=\"Get Started\"></span>\n        <span class=\"list-group-item-value\">Get Started</span>\n      </a>\n    </router-link>\n    <router-link tag=\"li\" class=\"list-group-item\" active-class=\"active\" to=\"/layout\" :exact=\"true\">\n      <a>\n        <span class=\"fa fa-columns\" title=\"Layout\"></span>\n        <span class=\"list-group-item-value\">Layout</span>\n      </a>\n    </router-link>\n  </template>\n\n  <router-view></router-view>\n</pf-layout>\n";

var LayoutPage = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('article', { staticClass: "page" }, [_vm._m(0), " ", _h('section', [_h('p', ["This component handles the application's navigation controls and is a perfect fit for the root element of the Vue.js application."]), " ", _vm._m(1), " ", _h('h4', ["Related documentation"]), " ", _vm._m(2), " ", _h('h3', ["Props"]), " ", _h('table', { staticClass: "table table-striped table-hover" }, [_vm._m(3), " ", _h('tbody', [_h('tr', [_h('td', ["horizontal"]), " ", _h('td', ["Enable horizontal navigation layout"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["false"]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.$root.layoutHorizontal, expression: "$root.layoutHorizontal" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.$root.layoutHorizontal) ? _vm._i(_vm.$root.layoutHorizontal, null) > -1 : _vm._q(_vm.$root.layoutHorizontal, true) }, on: { "change": function change($event) {
          var $$a = _vm.$root.layoutHorizontal,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$c) {
              $$i < 0 && (_vm.$root.layoutHorizontal = $$a.concat($$v));
            } else {
              $$i > -1 && (_vm.$root.layoutHorizontal = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$root.layoutHorizontal = $$c;
          }
        } } })])]), " ", _h('tr', [_h('td', ["icons"]), " ", _h('td', ["Display icons in the vertical navigation enabling a compact menu when collapsed"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["false"]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.$root.layoutIcons, expression: "$root.layoutIcons" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.$root.layoutIcons) ? _vm._i(_vm.$root.layoutIcons, null) > -1 : _vm._q(_vm.$root.layoutIcons, true) }, on: { "change": function change($event) {
          var $$a = _vm.$root.layoutIcons,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$c) {
              $$i < 0 && (_vm.$root.layoutIcons = $$a.concat($$v));
            } else {
              $$i > -1 && (_vm.$root.layoutIcons = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$root.layoutIcons = $$c;
          }
        } } })])]), " ", _h('tr', [_h('td', ["collapsable"]), " ", _h('td', ["Collapse the vertical navigation menu"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["true"]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.$root.layoutCollapsable, expression: "$root.layoutCollapsable" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.$root.layoutCollapsable) ? _vm._i(_vm.$root.layoutCollapsable, null) > -1 : _vm._q(_vm.$root.layoutCollapsable, true) }, on: { "change": function change($event) {
          var $$a = _vm.$root.layoutCollapsable,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$c) {
              $$i < 0 && (_vm.$root.layoutCollapsable = $$a.concat($$v));
            } else {
              $$i > -1 && (_vm.$root.layoutCollapsable = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$root.layoutCollapsable = $$c;
          }
        } } })])]), " ", _h('tr', [_h('td', ["disabled"]), " ", _h('td', ["Disable all layout elements"]), " ", _h('td', ["Boolean"]), " ", _h('td', ["false"]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.$root.layoutDisabled, expression: "$root.layoutDisabled" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.$root.layoutDisabled) ? _vm._i(_vm.$root.layoutDisabled, null) > -1 : _vm._q(_vm.$root.layoutDisabled, true) }, on: { "change": function change($event) {
          var $$a = _vm.$root.layoutDisabled,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$c) {
              $$i < 0 && (_vm.$root.layoutDisabled = $$a.concat($$v));
            } else {
              $$i > -1 && (_vm.$root.layoutDisabled = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$root.layoutDisabled = $$c;
          }
        } } })])])])]), " ", _h('h3', ["Slots"]), " ", _vm._m(4), " ", _h('h3', ["Example with vue-router"]), " ", _h('pre', [_h('code', { staticClass: "lang-html", domProps: { "textContent": _vm._s(_vm.vueroutersample) } })])])]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Layout ", _h('code', ["<pf-layout>"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('p', ["It works well with ", _h('i', ["vue-router"]), " to handle the application routing using ", _h('code', ["<router-link>"]), " in the menu slots and ", _h('code', ["<router-view>"]), " as the default slot (See the vue-router example below)."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('ol', [_h('li', [_h('a', { attrs: { "href": "http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/", "target": "_blank" } }, ["Pattern Library > Horizontal Navigation"])]), " ", _h('li', [_h('a', { attrs: { "href": "http://www.patternfly.org/pattern-library/navigation/vertical-navigation/", "target": "_blank" } }, ["Pattern Library > Vertical Navigation"])]), " ", _h('li', [_h('a', { attrs: { "href": "http://router.vuejs.org/en/", "target": "_blank" } }, ["Vue Router"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Description"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Value"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('table', { staticClass: "table table-striped table-hover" }, [_h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Description"])])]), " ", _h('tbody', [_h('tr', [_h('td', ["default"]), " ", _h('td', ["Page content"])]), " ", _h('tr', [_h('td', ["brand"]), " ", _h('td', ["The top-left brand image / title"])]), " ", _h('tr', [_h('td', ["utility-menu"]), " ", _h('td', ["The top-right utility menu"])]), " ", _h('tr', [_h('td', ["horizontal-menu"]), " ", _h('td', ["The horizontal navigation menu"])]), " ", _h('tr', [_h('td', ["vertical-menu"]), " ", _h('td', ["The vertical navigation menu"])])])]);
  }],
  name: 'layout-page',

  data: function data() {
    return {
      vueroutersample: vueroutersample
    };
  }
};

var ComponentsPage = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('article', { staticClass: "page" }, [_vm._m(0), " ", _h('section', [_h('h2', ["Toolbar"]), " ", _h('pf-toolbar', { ref: "toolbar", attrs: { "filter-fields": [{
          title: 'Name'
        }, {
          title: 'Age'
        }, {
          title: 'Address'
        }, {
          title: 'Birth Month',
          placeholder: 'Filter by Birth Month...',
          values: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }], "sort-fields": [{
          title: 'Name'
        }, {
          title: 'Date'
        }], "views": "table,card,list", "result-count": 0 }, on: { "filters": function filters($event) {
          _vm.filters = $event;
        }, "sort-change": _vm.setSort } }, [_h('button', { staticClass: "btn btn-default", attrs: { "type": "button", "title": "Title 1" }, on: { "click": function click($event) {
          _vm.$refs.toolbar.filters.push({ title: 'Test', value: 1 });
        } } }, ["\n        Action 1\n      "]), " ", _h('button', { staticClass: "btn btn-default", attrs: { "type": "button", "title": "Title 2" } }, ["\n        Action 2\n      "]), " ", _h('button', { staticClass: "btn btn-danger", attrs: { "type": "button", "title": "Title 3" } }, ["\n        Action 3\n      "]), " ", _h('dropdown', { staticClass: "dropdown-kebab-pf", attrs: { "type": "link" } }, [_h('li', { attrs: { "role": "menuitem" } }, [_h('a', { attrs: { "title": "Menu Title 1" } }, ["Menu Item 1"])]), " ", _h('li', { attrs: { "role": "menuitem" } }, [_h('a', { attrs: { "title": "Menu Title 2" } }, ["Menu Item 2"])]), " ", _h('li', { staticClass: "divider", attrs: { "role": "separator" } }), " ", _h('li', { attrs: { "role": "menuitem" } }, [_h('a', { attrs: { "title": "Menu Title 3" } }, ["Menu Item 3"])])])]), " ", _h('pre', ["Filters: " + _vm._s(_vm.filters) + "\n    Sort: " + _vm._s(_vm.sortField.title) + " " + _vm._s(_vm.sortAscending ? 'ascending' : 'descending')]), " ", _h('h2', ["Aggregate Status Card"]), " ", _h('div', { staticClass: "row row-cards-pf" }, [_h('div', { staticClass: "col-md-3 col-lg-2" }, [_h('pf-aggregate-status-card', { attrs: { "icon-class": "fa fa-shield", "title": "Nodes", "count": "793", "href": "#" } }, [_h('pf-card-notification', { attrs: { "icon-class": "pficon pficon-error-circle-o", "href": "#", "count": "3" } }), " ", _h('pf-card-notification', { attrs: { "icon-class": "pficon pficon-warning-triangle-o", "href": "#", "count": "1" } })])]), " ", _h('div', { staticClass: "col-md-3 col-lg-2" }, [_h('pf-aggregate-status-card', { attrs: { "title": "Ipsum", "count": "0", "layout": "tall" } }, [_h('pf-card-notification', { attrs: { "icon-class": "pficon pficon-error-circle-o", "href": "#", "count": "3" } }), " ", _h('pf-card-notification', { attrs: { "icon-class": "pficon pficon-warning-triangle-o", "href": "#", "count": "1" } })])]), " ", _h('div', { staticClass: "col-md-3 col-lg-2" }, [_h('pf-aggregate-status-card', { attrs: { "icon-class": "fa fa-paper-plane", "title": "Amet", "count": "9", "layout": "mini", "accented": false } }, [_h('pf-card-notification', { attrs: { "icon-class": "pficon pficon-ok" } })])])]), " ", _h('div', { staticClass: "row row-cards-pf" }, [_h('div', { staticClass: "col-md-6 col-lg-4" }, [_h('h2', ["C3 Chart"]), " ", _h('pf-card', { attrs: { "title": "System Resources", "foot-note": "Footer", "filter": {
          position: 'header',
          filters: [{ label: 'Filtro 1' }, { label: 'Filtro 2' }]
        } } }, [_h('pf-c3-chart', { attrs: { "type": "donut", "title": "Memory", "data": {
          columns: [['Used', 123], ['Available', 74]],
          groups: [['used', 'available']]
        } } })])]), " ", _h('div', { staticClass: "col-md-12 col-lg-8" }, [_h('h2', ["Utilization Bar Card"]), " ", _h('pf-card', { attrs: { "title": "System Resources" } }, [_h('pf-utilization-bar-chart', { attrs: { "title": "RAM Usage", "units": "MB", "value": 8, "total": 24 } }), " ", _h('label', { staticClass: "label-title" }, ["Inline Layouts with Error, Warning, and Ok Thresholds"]), " ", _h('pf-utilization-bar-chart', { attrs: { "title": "Disk I/O", "units": "I/Ops", "value": 450, "total": 500, "inline": "", "warning": 60, "error": 85 } }), " ", _h('pf-utilization-bar-chart', { attrs: { "title": "CPU Usage", "units": "MHz", "value": 420, "total": 500, "inline": "", "warning": 60, "error": 85 } }), " ", _h('pf-utilization-bar-chart', { attrs: { "title": "Memory", "units": "GBs", "value": 25, "total": 100, "inline": "", "warning": 60, "error": 85 } }), " ", _h('pf-utilization-bar-chart')])])])])]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Components"])]);
  }],
  name: 'components-page',

  components: {
    dropdown: vueStrap.dropdown
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
};

var Notification = VuePatternfly.Notification;
var Notifications = VuePatternfly.Notifications;

var NotificationsPage = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('article', { staticClass: "page" }, [_vm._m(0), " ", _h('section', [_vm._m(1), " ", _vm._m(2), " ", _h('h4', ["Related documentation"]), " ", _vm._m(3), " ", _h('pf-notifications', { ref: "notifications", attrs: { "toast": _vm.notificationsToast } }), " ", _h('h3', ["Props"]), " ", _h('table', { staticClass: "table table-striped table-hover" }, [_vm._m(4), " ", _h('tbody', [_h('tr', [_h('td', ["toast"]), " ", _vm._m(5), " ", _h('td', ["Boolean"]), " ", _h('td', [_vm._s(_vm.notificationsProps.toast.default)]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationsToast, expression: "notificationsToast" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.notificationsToast) ? _vm._i(_vm.notificationsToast, null) > -1 : _vm._q(_vm.notificationsToast, true) }, on: { "change": function change($event) {
          var $$a = _vm.notificationsToast,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$c) {
              $$i < 0 && (_vm.notificationsToast = $$a.concat($$v));
            } else {
              $$i > -1 && (_vm.notificationsToast = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.notificationsToast = $$c;
          }
        } } })])])])]), " ", _h('h3', ["Methods"]), " ", _h('table', { staticClass: "table table-striped table-hover" }, [_vm._m(6), " ", _h('tbody', [_h('tr', [_h('td', { attrs: { "rowspan": "2" } }, ["add()"]), " ", _h('td', ["notification"]), " ", _vm._m(7), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationsMessage, expression: "notificationsMessage" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notificationsMessage) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notificationsMessage = $event.target.value;
        } } })]), " ", _h('td', { attrs: { "rowspan": "2" } }, [_h('button', { staticClass: "btn btn-default", on: { "click": _vm.notify } }, [_h('span', { staticClass: "fa fa-play-circle" }), "\n              Run\n            "])])]), " ", _h('tr', [_h('td', ["type"]), " ", _vm._m(8), " ", _h('td', [_h('select', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationsType, expression: "notificationsType" }], staticClass: "form-control", on: { "change": function change($event) {
          _vm.notificationsType = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;return val;
          })[0];
        } } }, [_h('option', { attrs: { "value": "info" } }, ["info"]), " ", _h('option', { attrs: { "value": "success" } }, ["success"]), " ", _h('option', { attrs: { "value": "warning" } }, ["warning"]), " ", _h('option', { attrs: { "value": "danger" } }, ["danger"])])])])])])]), " ", _vm._m(9), " ", _h('section', [_h('pf-notification', { attrs: { "delay": _vm.notificationDelay, "type": _vm.notificationType, "toast": _vm.notificationToast, "persistent": _vm.notificationPersistent, "action": _vm.notificationAction } }, [_h('div', { domProps: { "innerHTML": _vm._s(_vm.notificationMessage) } })]), " ", _h('h3', ["Props"]), " ", _h('table', { staticClass: "table table-striped table-hover" }, [_vm._m(10), " ", _h('tbody', [_h('tr', [_h('td', ["delay"]), " ", _h('td', ["The delay in milliseconds after which the notification is automatically dismissed."]), " ", _h('td', ["Number"]), " ", _h('td', [_vm._s(_vm.notificationProps.delay.default)]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationDelay, expression: "notificationDelay" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notificationDelay) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notificationDelay = $event.target.value;
        } } })])]), " ", _h('tr', [_h('td', ["type"]), " ", _h('td', ["The type of notification. Can be on of: info, success, warning, danger."]), " ", _h('td', ["String"]), " ", _h('td', [_vm._s(_vm.notificationProps.type.default)]), " ", _h('td', [_h('select', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationType, expression: "notificationType" }], staticClass: "form-control", on: { "change": function change($event) {
          _vm.notificationType = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;return val;
          })[0];
        } } }, [_h('option', { attrs: { "value": "info" } }, ["info"]), " ", _h('option', { attrs: { "value": "success" } }, ["success"]), " ", _h('option', { attrs: { "value": "warning" } }, ["warning"]), " ", _h('option', { attrs: { "value": "danger" } }, ["danger"])])])]), " ", _h('tr', [_h('td', ["toast"]), " ", _vm._m(11), " ", _h('td', ["Boolean"]), " ", _h('td', [_vm._s(_vm.notificationProps.toast.default)]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationToast, expression: "notificationToast" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.notificationToast) ? _vm._i(_vm.notificationToast, null) > -1 : _vm._q(_vm.notificationToast, true) }, on: { "change": function change($event) {
          var $$a = _vm.notificationToast,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$c) {
              $$i < 0 && (_vm.notificationToast = $$a.concat($$v));
            } else {
              $$i > -1 && (_vm.notificationToast = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.notificationToast = $$c;
          }
        } } })])]), " ", _h('tr', [_h('td', ["persistent"]), " ", _h('td', ["Disables the controls to dismiss the notification."]), " ", _h('td', ["Boolean"]), " ", _h('td', [_vm._s(_vm.notificationProps.persistent.default)]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationPersistent, expression: "notificationPersistent" }], attrs: { "type": "checkbox" }, domProps: { "checked": Array.isArray(_vm.notificationPersistent) ? _vm._i(_vm.notificationPersistent, null) > -1 : _vm._q(_vm.notificationPersistent, true) }, on: { "change": function change($event) {
          var $$a = _vm.notificationPersistent,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;if (Array.isArray($$a)) {
            var $$v = null,
                $$i = _vm._i($$a, $$v);if ($$c) {
              $$i < 0 && (_vm.notificationPersistent = $$a.concat($$v));
            } else {
              $$i > -1 && (_vm.notificationPersistent = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.notificationPersistent = $$c;
          }
        } } })])]), " ", _h('tr', [_h('td', ["action.name"]), " ", _h('td', ["The text of an action button to add to the notification. This is mandatory to enable the action."]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationAction.name, expression: "notificationAction.name" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notificationAction.name) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notificationAction.name = $event.target.value;
        } } })])]), " ", _h('tr', [_h('td', ["action.title"]), " ", _h('td', ["The title for the action button."]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationAction.title, expression: "notificationAction.title" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notificationAction.title) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notificationAction.title = $event.target.value;
        } } })])]), " ", _h('tr', [_h('td', ["action.button"]), " ", _h('td', ["Controls the type of button to use for the action."]), " ", _h('td', ["String"]), " ", _h('td', ["link"]), " ", _h('td', [_h('select', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationAction.button, expression: "notificationAction.button" }], staticClass: "form-control", on: { "change": function change($event) {
          _vm.notificationAction.button = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;return val;
          })[0];
        } } }, [_h('option', { attrs: { "value": "link" } }, ["link"]), " ", _h('option', { attrs: { "value": "default" } }, ["default"]), " ", _h('option', { attrs: { "value": "primary" } }, ["primary"]), " ", _h('option', { attrs: { "value": "info" } }, ["info"]), " ", _h('option', { attrs: { "value": "success" } }, ["success"]), " ", _h('option', { attrs: { "value": "warning" } }, ["warning"]), " ", _h('option', { attrs: { "value": "danger" } }, ["danger"])])])]), " ", _h('tr', [_h('td', ["action.emit"]), " ", _h('td', ["The name of an event that should be emitted when the action is triggered."]), " ", _h('td', ["String"]), " ", _h('td', ["action"]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationAction.emit, expression: "notificationAction.emit" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notificationAction.emit) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notificationAction.emit = $event.target.value;
        } } })])])])]), " ", _h('h3', ["Slots"]), " ", _h('table', { staticClass: "table table-striped table-hover" }, [_vm._m(12), " ", _h('tbody', [_h('tr', [_h('td', ["default"]), " ", _h('td', ["The notification message"]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notificationMessage, expression: "notificationMessage" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notificationMessage) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notificationMessage = $event.target.value;
        } } })])])])])])]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Notifications ", _h('code', ["<pf-notifications>"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('p', ["This component is a container for other ", _h('code', ["<pf-notification>"]), " components. Notifications can be placed inside its default slot or added programmatically by calling the ", _h('code', ["add()"]), " method."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('p', ["Notification dismissals will be handled automatically for the notifications added programmatically. For ", _h('code', ["<pf-notification>"]), " components placed inside the default slot or without using the ", _h('code', ["<pf-notifications>"]), " container you will have to listen to the ", _h('code', ["@dismiss"]), " event."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('ol', [_h('li', [_h('a', { attrs: { "href": "http://www.patternfly.org/pattern-library/communication/toast-notifications/#/api", "target": "_blank" } }, ["Pattern Library > Toast Notifications"])]), " ", _h('li', [_h('a', { attrs: { "href": "http://www.patternfly.org/pattern-library/communication/inline-notifications/#/api", "target": "_blank" } }, ["Pattern Library > Inline Notifications"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Description"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Value"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('td', ["Defines this as a container for toast notifications. The property is propagated to every ", _h('code', ["<pf-notification>"]), " added programmatically. You are responsible to keep the property in sync for ", _h('code', ["<pf-notification>"]), "s inserted manually."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Argument"]), " ", _h('th', ["Description"]), " ", _h('th', { attrs: { "colspan": "2" } }, ["Value"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('td', ["The notification message string or an ", _h('code', ["Object"]), " with every ", _h('code', ["<pf-notification>"]), " property to use."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('td', [_h('code', ["<pf-notification>"]), "'s type"]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Notification ", _h('code', ["<pf-notification>"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Description"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _h('th', ["Value"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('td', ["Make this a toast notification. These need to be placed inside a container with the ", _h('code', ["toast-notifications-list-pf"]), " CSS class or inside a ", _h('code', ["<pf-notifications>"]), " component."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Description"]), " ", _h('th', ["HTML"])])]);
  }],
  name: 'notifications-page',

  components: {
    'pf-notification': Notification
  },

  data: function data() {
    return {
      notificationProps: Notification.props,
      notificationDelay: Notification.props.delay.default,
      notificationType: Notification.props.type.default,
      notificationToast: Notification.props.toast.default,
      notificationPersistent: Notification.props.persistent.default,
      notificationMessage: '<strong>Test</strong> notification',
      notificationsProps: Notifications.props,
      notificationsMessage: '<strong>Test</strong> notification',
      notificationsType: 'info',
      notificationsToast: Notifications.props.toast.default,
      notificationAction: {
        name: '',
        title: '',
        button: 'link',
        emit: ''
      }
    };
  },


  methods: {
    notify: function notify() {
      this.$refs.notifications.add(this.notificationsMessage, this.notificationsType);
    }
  }
};

/* global VueRouter */

var router = new VueRouter({
  routes: [{
    path: '/',
    component: HomePage
  }, {
    path: '/get-started',
    component: GetStartedPage
  }, {
    path: '/layout',
    component: LayoutPage
  }, {
    path: '/notifications',
    component: NotificationsPage
  }, {
    path: '/components',
    component: ComponentsPage
  }]
});

router.afterEach(function () {
  router.app.$nextTick(function () {
    if (typeof window.Prism != 'undefined') {
      window.Prism.highlightAll();
    }
  });
});

/* global Vue */
Vue.debug = true;

new Vue({
  el: '#app',
  router: router,

  data: function data() {
    return {
      layoutHorizontal: false,
      layoutDisabled: false,
      layoutIcons: true,
      layoutCollapsable: true
    };
  }
});

}(VueStrap,VuePatternfly));
//# sourceMappingURL=docs.js.map

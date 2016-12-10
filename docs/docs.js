(function (VuePatternfly,vueStrap) {
'use strict';

VuePatternfly = 'default' in VuePatternfly ? VuePatternfly['default'] : VuePatternfly;

var name = "vue-patternfly";
var version = "0.0.3";
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

var initsample = "// If using a module system, import Vue and VuePatternfly and call Vue.use(VuePatternfly).\n\nconst app = new Vue({\n  el: '#app',\n});\n";

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

var Layout = VuePatternfly.Layout;

var LayoutPage = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('article', { staticClass: "page" }, [_vm._m(0), " ", _h('section', [_h('p', ["This component handles the application's navigation controls and is a perfect fit for the root element of the Vue.js application."]), " ", _vm._m(1), " ", _h('h4', ["Related documentation"]), " ", _vm._m(2), " ", _h('props-table', { attrs: { "component-props": _vm.layoutProps } }, [_h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.$root.layoutHorizontal, expression: "$root.layoutHorizontal" }], attrs: { "name": "horizontal", "description": "Enable horizontal navigation layout" }, domProps: { "value": _vm.$root.layoutHorizontal }, on: { "input": function input($event) {
          _vm.$root.layoutHorizontal = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.$root.layoutIcons, expression: "$root.layoutIcons" }], attrs: { "name": "icons", "description": "Display icons in the vertical navigation enabling a compact menu when collapsed" }, domProps: { "value": _vm.$root.layoutIcons }, on: { "input": function input($event) {
          _vm.$root.layoutIcons = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.$root.layoutCollapsable, expression: "$root.layoutCollapsable" }], attrs: { "name": "collapsable", "description": "Collapse the vertical navigation menu" }, domProps: { "value": _vm.$root.layoutCollapsable }, on: { "input": function input($event) {
          _vm.$root.layoutCollapsable = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.$root.layoutDisabled, expression: "$root.layoutDisabled" }], attrs: { "name": "disabled", "description": "Disable all layout elements" }, domProps: { "value": _vm.$root.layoutDisabled }, on: { "input": function input($event) {
          _vm.$root.layoutDisabled = $event;
        } } })]), " ", _h('h3', ["Slots"]), " ", _vm._m(3), " ", _h('h3', ["Example with vue-router"]), " ", _h('pre', [_h('code', { staticClass: "lang-html", domProps: { "textContent": _vm._s(_vm.vueroutersample) } })])])]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Layout ", _h('code', ["<pf-layout>"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('p', ["It works well with ", _h('i', ["vue-router"]), " to handle the application routing using ", _h('code', ["<router-link>"]), " in the menu slots and ", _h('code', ["<router-view>"]), " as the default slot (See the vue-router example below)."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('ol', [_h('li', [_h('a', { attrs: { "href": "http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/", "target": "_blank" } }, ["Pattern Library > Horizontal Navigation"])]), " ", _h('li', [_h('a', { attrs: { "href": "http://www.patternfly.org/pattern-library/navigation/vertical-navigation/", "target": "_blank" } }, ["Pattern Library > Vertical Navigation"])]), " ", _h('li', [_h('a', { attrs: { "href": "http://router.vuejs.org/en/", "target": "_blank" } }, ["Vue Router"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('table', { staticClass: "table table-striped table-hover" }, [_h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Description"])])]), " ", _h('tbody', [_h('tr', [_h('td', ["default"]), " ", _h('td', ["Page content"])]), " ", _h('tr', [_h('td', ["brand"]), " ", _h('td', ["The top-left brand image / title"])]), " ", _h('tr', [_h('td', ["utility-menu"]), " ", _h('td', ["The top-right utility menu"])]), " ", _h('tr', [_h('td', ["horizontal-menu"]), " ", _h('td', ["The horizontal navigation menu"])]), " ", _h('tr', [_h('td', ["vertical-menu"]), " ", _h('td', ["The vertical navigation menu"])])])]);
  }],
  name: 'layout-page',

  data: function data() {
    return {
      vueroutersample: vueroutersample,
      layoutProps: Layout.props
    };
  }
};

var Notification = VuePatternfly.Notification;
var Notifications = VuePatternfly.Notifications;

var NotificationsPage = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('article', { staticClass: "page" }, [_vm._m(0), " ", _h('section', [_vm._m(1), " ", _vm._m(2), " ", _h('h4', ["Related documentation"]), " ", _vm._m(3), " ", _h('pf-notifications', { ref: "notifications", attrs: { "toast": _vm.notifications.toast } }), " ", _h('props-table', { attrs: { "component-props": _vm.notificationsProps } }, [_h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.notifications.toast, expression: "notifications.toast" }], attrs: { "name": "toast", "description": "Defines this as a container for toast notifications. The property is propagated to every <code>&lt;pf-notification&gt;</code> added programmatically. You are responsible to keep the property in sync for <code>&lt;pf-notification&gt;</code>s inserted manually." }, domProps: { "value": _vm.notifications.toast }, on: { "input": function input($event) {
          _vm.notifications.toast = $event;
        } } })]), " ", _h('h3', ["Methods"]), " ", _h('table', { staticClass: "table table-striped table-hover" }, [_vm._m(4), " ", _h('tbody', [_h('tr', [_h('td', { attrs: { "rowspan": "2" } }, ["add()"]), " ", _h('td', ["notification"]), " ", _vm._m(5), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notifications.message, expression: "notifications.message" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notifications.message) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notifications.message = $event.target.value;
        } } })]), " ", _h('td', { attrs: { "rowspan": "2" } }, [_h('button', { staticClass: "btn btn-default", on: { "click": _vm.notify } }, [_h('span', { staticClass: "fa fa-play-circle" }), "\n              Run\n            "])])]), " ", _h('tr', [_h('td', ["type"]), " ", _vm._m(6), " ", _h('td', [_h('select', { directives: [{ name: "model", rawName: "v-model", value: _vm.notifications.type, expression: "notifications.type" }], staticClass: "form-control", on: { "change": function change($event) {
          _vm.notifications.type = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;return val;
          })[0];
        } } }, [_h('option', { attrs: { "value": "info" } }, ["info"]), " ", _h('option', { attrs: { "value": "success" } }, ["success"]), " ", _h('option', { attrs: { "value": "warning" } }, ["warning"]), " ", _h('option', { attrs: { "value": "danger" } }, ["danger"])])])])])])]), " ", _vm._m(7), " ", _h('section', [_h('pf-notification', { attrs: { "delay": _vm.notification.delay, "type": _vm.notification.type, "toast": _vm.notification.toast, "persistent": _vm.notification.persistent, "action": _vm.notification.action } }, [_h('div', { domProps: { "innerHTML": _vm._s(_vm.notification.message) } })]), " ", _h('props-table', { attrs: { "component-props": _vm.notificationProps } }, [_h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.delay, expression: "notification.delay" }], attrs: { "name": "delay", "description": "The delay in milliseconds after which the notification is automatically dismissed." }, domProps: { "value": _vm.notification.delay }, on: { "input": function input($event) {
          _vm.notification.delay = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.type, expression: "notification.type" }], attrs: { "name": "type", "description": "The type of notification. Can be on of: info, success, warning, danger.", "options": ['info', 'success', 'warning', 'danger'] }, domProps: { "value": _vm.notification.type }, on: { "input": function input($event) {
          _vm.notification.type = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.toast, expression: "notification.toast" }], attrs: { "name": "toast", "description": "Make this a toast notification. These need to be placed inside a container with the <code>toast-notifications-list-pf</code> CSS class or inside a <code>&lt;pf-notifications&gt;</code> component." }, domProps: { "value": _vm.notification.toast }, on: { "input": function input($event) {
          _vm.notification.toast = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.persistent, expression: "notification.persistent" }], attrs: { "name": "persistent", "description": "Disables the controls to dismiss the notification." }, domProps: { "value": _vm.notification.persistent }, on: { "input": function input($event) {
          _vm.notification.persistent = $event;
        } } }), " ", _h('tr', [_h('td', ["action.name"]), " ", _h('td', ["The text of an action button to add to the notification. This is mandatory to enable the action."]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.action.name, expression: "notification.action.name" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notification.action.name) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notification.action.name = $event.target.value;
        } } })])]), " ", _h('tr', [_h('td', ["action.title"]), " ", _h('td', ["The title for the action button."]), " ", _h('td', ["String"]), " ", _h('td'), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.action.title, expression: "notification.action.title" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notification.action.title) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notification.action.title = $event.target.value;
        } } })])]), " ", _h('tr', [_h('td', ["action.button"]), " ", _h('td', ["Controls the type of button to use for the action."]), " ", _h('td', ["String"]), " ", _h('td', ["link"]), " ", _h('td', [_h('select', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.action.button, expression: "notification.action.button" }], staticClass: "form-control", on: { "change": function change($event) {
          _vm.notification.action.button = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;return val;
          })[0];
        } } }, [_h('option', { attrs: { "value": "link" } }, ["link"]), " ", _h('option', { attrs: { "value": "default" } }, ["default"]), " ", _h('option', { attrs: { "value": "primary" } }, ["primary"]), " ", _h('option', { attrs: { "value": "info" } }, ["info"]), " ", _h('option', { attrs: { "value": "success" } }, ["success"]), " ", _h('option', { attrs: { "value": "warning" } }, ["warning"]), " ", _h('option', { attrs: { "value": "danger" } }, ["danger"])])])]), " ", _h('tr', [_h('td', ["action.emit"]), " ", _h('td', ["The name of an event that should be emitted when the action is triggered."]), " ", _h('td', ["String"]), " ", _h('td', ["action"]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.action.emit, expression: "notification.action.emit" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notification.action.emit) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notification.action.emit = $event.target.value;
        } } })])])]), " ", _h('h3', ["Slots"]), " ", _h('table', { staticClass: "table table-striped table-hover" }, [_vm._m(8), " ", _h('tbody', [_h('tr', [_h('td', ["default"]), " ", _h('td', ["The notification message"]), " ", _h('td', [_h('input', { directives: [{ name: "model", rawName: "v-model", value: _vm.notification.message, expression: "notification.message" }], staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm._s(_vm.notification.message) }, on: { "input": function input($event) {
          if ($event.target.composing) {
            return;
          }_vm.notification.message = $event.target.value;
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
    var _vm = this;var _h = _vm.$createElement;return _h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Argument"]), " ", _h('th', ["Description"]), " ", _h('th', { attrs: { "colspan": "2" } }, ["Value"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('td', ["The notification message string or an ", _h('code', ["Object"]), " with every ", _h('code', ["<pf-notification>"]), " property to use."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('td', [_h('code', ["<pf-notification>"]), "'s type"]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Notification ", _h('code', ["<pf-notification>"])])]);
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
      notification: {
        delay: Notification.props.delay.default,
        type: Notification.props.type.default,
        toast: Notification.props.toast.default,
        persistent: Notification.props.persistent.default,
        message: '<strong>Test</strong> notification',
        action: {
          name: '',
          title: '',
          button: 'link',
          emit: ''
        }
      },
      notificationsProps: Notifications.props,
      notifications: {
        message: '<strong>Test</strong> notification',
        type: 'info',
        toast: Notifications.props.toast.default
      }
    };
  },


  methods: {
    notify: function notify() {
      this.$refs.notifications.add(this.notifications.message, this.notifications.type);
    }
  }
};

var cardcontainersample = "<div class=\"cards-pf container-fluid container-cards-pf\">\n  <div class=\"row row-cards-pf\">\n    <div class=\"col-md-4\">\n      <pf-card></pf-card>\n    </div>\n    <div class=\"col-md-4\">\n      <pf-card></pf-card>\n    </div>\n    <div class=\"col-md-4\">\n      <pf-card></pf-card>\n    </div>\n  </div>\n</div>\n";

var Card = VuePatternfly.Card;
var AggregateStatusCard = VuePatternfly.AggregateStatusCard;
var CardNotification = VuePatternfly.CardNotification;

var CardsPage = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('article', { staticClass: "page" }, [_vm._m(0), " ", _h('section', [_h('p', ["This card components are designed for dashboard views and are meant to be placed on a darker background which can be implemented like in the following snippet."]), " ", _h('pre', [_h('code', { staticClass: "language-markup", domProps: { "textContent": _vm._s(_vm.cardcontainersample) } })]), " ", _h('h4', ["Related documentation"]), " ", _vm._m(1), " ", _h('div', { staticClass: "cards-pf container-fluid container-cards-pf" }, [_h('div', { staticClass: "row-cards-pf" }, [_h('pf-card', { staticClass: "col-md-5 col-lg-3", attrs: { "title": _vm.card.title, "sub-title": _vm.card.subTitle, "foot-note": _vm.card.footNote, "foot-href": _vm.card.footHref, "foot-icon": _vm.card.footIcon, "accented": _vm.card.accented, "show-titles-separator": _vm.card.showTitlesSeparator } })])]), " ", _h('props-table', { attrs: { "component-props": _vm.cardProps } }, [_h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.card.title, expression: "card.title" }], attrs: { "name": "title", "description": "Title for the card" }, domProps: { "value": _vm.card.title }, on: { "input": function input($event) {
          _vm.card.title = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.card.subTitle, expression: "card.subTitle" }], attrs: { "name": "subTitle", "description": "Subtitle for the card" }, domProps: { "value": _vm.card.subTitle }, on: { "input": function input($event) {
          _vm.card.subTitle = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.card.footNote, expression: "card.footNote" }], attrs: { "name": "footNote", "description": "Display this text in a footer of the card" }, domProps: { "value": _vm.card.footNote }, on: { "input": function input($event) {
          _vm.card.footNote = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.card.footHref, expression: "card.footHref" }], attrs: { "name": "footHref", "description": "Make the footer a link to this href" }, domProps: { "value": _vm.card.footHref }, on: { "input": function input($event) {
          _vm.card.footHref = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.card.footIcon, expression: "card.footIcon" }], attrs: { "name": "footIcon", "description": "Footer icon represented by icon font CSS classes" }, domProps: { "value": _vm.card.footIcon }, on: { "input": function input($event) {
          _vm.card.footIcon = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.card.accented, expression: "card.accented" }], attrs: { "name": "accented", "description": "Display accent on top of card" }, domProps: { "value": _vm.card.accented }, on: { "input": function input($event) {
          _vm.card.accented = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.card.showTitlesSeparator, expression: "card.showTitlesSeparator" }], attrs: { "name": "showTitlesSeparator", "description": "Show separation between title and content" }, domProps: { "value": _vm.card.showTitlesSeparator }, on: { "input": function input($event) {
          _vm.card.showTitlesSeparator = $event;
        } } })])]), " ", _vm._m(2), " ", _h('section', [_vm._m(3), " ", _h('h4', ["Related documentation"]), " ", _vm._m(4), " ", _h('div', { staticClass: "cards-pf container-fluid container-cards-pf" }, [_h('div', { staticClass: "row-cards-pf" }, [_h('pf-aggregate-status-card', { staticClass: "col-md-5 col-lg-3", attrs: { "title": _vm.aggcard.title, "count": _vm.aggcard.count, "href": _vm.aggcard.href, "icon-class": _vm.aggcard.iconClass, "layout": _vm.aggcard.layout, "accented": _vm.aggcard.accented } }, [_h('pf-card-notification', { attrs: { "icon-class": _vm.notcard.iconClass, "href": _vm.notcard.href, "count": _vm.notcard.count } }), " ", _h('pf-card-notification', { attrs: { "icon-class": "pficon pficon-warning-triangle-o", "href": "#", "count": "1" } })])])]), " ", _h('props-table', { attrs: { "title": "pf-aggregate-status-card props", "component-props": _vm.aggcardProps } }, [_h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.aggcard.title, expression: "aggcard.title" }], attrs: { "name": "title", "description": "Name of the represented items" }, domProps: { "value": _vm.aggcard.title }, on: { "input": function input($event) {
          _vm.aggcard.title = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.aggcard.count, expression: "aggcard.count" }], attrs: { "name": "count", "description": "Number of items represented" }, domProps: { "value": _vm.aggcard.count }, on: { "input": function input($event) {
          _vm.aggcard.count = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.aggcard.href, expression: "aggcard.href" }], attrs: { "name": "href", "description": "Make the title a link to this href" }, domProps: { "value": _vm.aggcard.href }, on: { "input": function input($event) {
          _vm.aggcard.href = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.aggcard.iconClass, expression: "aggcard.iconClass" }], attrs: { "name": "iconClass", "description": "Icon represented by icon font CSS classes" }, domProps: { "value": _vm.aggcard.iconClass }, on: { "input": function input($event) {
          _vm.aggcard.iconClass = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.aggcard.layout, expression: "aggcard.layout" }], attrs: { "name": "layout", "options": ['', 'mini', 'tall'], "description": "Alternative layout" }, domProps: { "value": _vm.aggcard.layout }, on: { "input": function input($event) {
          _vm.aggcard.layout = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.aggcard.accented, expression: "aggcard.accented" }], attrs: { "name": "accented", "description": "Display accent on top of card" }, domProps: { "value": _vm.aggcard.accented }, on: { "input": function input($event) {
          _vm.aggcard.accented = $event;
        } } })]), " ", _h('props-table', { attrs: { "title": "pf-card-notification props", "component-props": _vm.notcardProps } }, [_h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.notcard.count, expression: "notcard.count" }], attrs: { "name": "count", "description": "Number of items represented" }, domProps: { "value": _vm.notcard.count }, on: { "input": function input($event) {
          _vm.notcard.count = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.notcard.href, expression: "notcard.href" }], attrs: { "name": "href", "description": "Link to this href" }, domProps: { "value": _vm.notcard.href }, on: { "input": function input($event) {
          _vm.notcard.href = $event;
        } } }), " ", _h('props-row', { directives: [{ name: "model", rawName: "v-model", value: _vm.notcard.iconClass, expression: "notcard.iconClass" }], attrs: { "name": "iconClass", "description": "Icon represented by icon font CSS classes" }, domProps: { "value": _vm.notcard.iconClass }, on: { "input": function input($event) {
          _vm.notcard.iconClass = $event;
        } } })])])]);
  },
  staticRenderFns: [function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Card ", _h('code', ["<pf-card>"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('ol', [_h('li', [_h('a', { attrs: { "href": "http://www.patternfly.org/pattern-library/dashboard/dashboard-card/#/api", "target": "_blank" } }, ["Pattern Library > Dashboard Cards"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('header', [_h('h1', ["Aggregate Status Card ", _h('code', ["<pf-aggregate-status-card>"]), " + Card Notification ", _h('code', ["<pf-card-notification>"])])]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('p', ["The aggregated status card shows a total number of objects and an aggregated status for those objects. The component works by using a container ", _h('code', ["<pf-aggregate-status-card>"]), " with one or more ", _h('code', ["<pf-card-notification>"]), " components inside."]);
  }, function () {
    var _vm = this;var _h = _vm.$createElement;return _h('ol', [_h('li', [_h('a', { attrs: { "href": "http://www.patternfly.org/pattern-library/cards/aggregate-status-card/#/api", "target": "_blank" } }, ["Pattern Library > Aggregate Status Card"])])]);
  }],
  name: 'cards-page',

  data: function data() {
    return {
      cardcontainersample: cardcontainersample,
      cardProps: Card.props,
      card: {
        title: 'Test title',
        subTitle: '',
        footNote: '',
        footHref: '',
        footIcon: 'fa fa-bell',
        accented: true,
        showTitlesSeparator: true
      },
      aggcardProps: AggregateStatusCard.props,
      aggcard: {
        title: 'Issues',
        count: 4,
        href: '#',
        iconClass: 'fa fa-warning',
        layout: '',
        accented: true
      },
      notcardProps: CardNotification.props,
      notcard: {
        count: 3,
        href: '#',
        iconClass: 'pficon pficon-error-circle-o'
      }
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
        } } }, ["\n        Action 1\n      "]), " ", _h('button', { staticClass: "btn btn-default", attrs: { "type": "button", "title": "Title 2" } }, ["\n        Action 2\n      "]), " ", _h('button', { staticClass: "btn btn-danger", attrs: { "type": "button", "title": "Title 3" } }, ["\n        Action 3\n      "]), " ", _h('dropdown', { staticClass: "dropdown-kebab-pf", attrs: { "type": "link" } }, [_h('li', { attrs: { "role": "menuitem" } }, [_h('a', { attrs: { "title": "Menu Title 1" } }, ["Menu Item 1"])]), " ", _h('li', { attrs: { "role": "menuitem" } }, [_h('a', { attrs: { "title": "Menu Title 2" } }, ["Menu Item 2"])]), " ", _h('li', { staticClass: "divider", attrs: { "role": "separator" } }), " ", _h('li', { attrs: { "role": "menuitem" } }, [_h('a', { attrs: { "title": "Menu Title 3" } }, ["Menu Item 3"])])])]), " ", _h('pre', ["Filters: " + _vm._s(_vm.filters) + "\n    Sort: " + _vm._s(_vm.sortField.title) + " " + _vm._s(_vm.sortAscending ? 'ascending' : 'descending')]), " ", _h('div', { staticClass: "cards-pf" }, [_h('div', { staticClass: "row row-cards-pf" }, [_h('div', { staticClass: "col-md-6 col-lg-4" }, [_h('h2', ["C3 Chart"]), " ", _h('pf-card', { attrs: { "title": "System Resources", "foot-note": "Footer", "filter": {
          position: 'header',
          filters: [{ label: 'Filtro 1' }, { label: 'Filtro 2' }]
        } } }, [_h('pf-c3-chart', { attrs: { "type": "donut", "title": "Memory", "data": {
          columns: [['Used', 123], ['Available', 74]],
          groups: [['used', 'available']]
        } } })])]), " ", _h('div', { staticClass: "col-md-12 col-lg-8" }, [_h('h2', ["Utilization Bar Card"]), " ", _h('pf-card', { attrs: { "title": "System Resources" } }, [_h('pf-utilization-bar-chart', { attrs: { "title": "RAM Usage", "units": "MB", "value": 8, "total": 24 } }), " ", _h('label', { staticClass: "label-title" }, ["Inline Layouts with Error, Warning, and Ok Thresholds"]), " ", _h('pf-utilization-bar-chart', { attrs: { "title": "Disk I/O", "units": "I/Ops", "value": 450, "total": 500, "inline": "", "warning": 60, "error": 85 } }), " ", _h('pf-utilization-bar-chart', { attrs: { "title": "CPU Usage", "units": "MHz", "value": 420, "total": 500, "inline": "", "warning": 60, "error": 85 } }), " ", _h('pf-utilization-bar-chart', { attrs: { "title": "Memory", "units": "GBs", "value": 25, "total": 100, "inline": "", "warning": 60, "error": 85 } }), " ", _h('pf-utilization-bar-chart')])])])])])]);
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
    path: '/cards',
    component: CardsPage
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

var PropsTable = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('section', [_h('h3', { domProps: { "innerHTML": _vm._s(_vm.title) } }), " ", _h('table', { staticClass: "table table-striped table-hover" }, [_h('thead', [_h('tr', [_h('th', ["Name"]), " ", _h('th', ["Description"]), " ", _h('th', ["Type"]), " ", _h('th', ["Default"]), " ", _vm.interactive ? _h('th', ["Value"]) : _vm._e()])]), " ", _h('tbody', [_vm._t("default")])])]);
  },
  staticRenderFns: [],
  name: 'props-table',

  props: {
    title: {
      type: String,
      default: 'Props'
    },

    interactive: {
      type: Boolean,
      default: true
    },

    componentProps: Object
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var PropsRow = {
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;return _h('tr', [_h('td', [_vm._s(_vm.propName)]), " ", _h('td', { domProps: { "innerHTML": _vm._s(_vm.description) } }), " ", _h('td', [_vm._s(_vm.prop.type)]), " ", _h('td', [_vm._s(_vm.prop.default)]), " ", _vm.$parent.interactive ? _h('td', [_vm.prop.type == 'Boolean' ? _h('input', { attrs: { "type": "checkbox" }, domProps: { "checked": _vm.value }, on: { "change": _vm.update } }) : _vm.options.length ? _h('select', { staticClass: "form-control", on: { "change": _vm.update } }, [_vm._l(_vm.options, function (o) {
      return _h('option', { domProps: { "value": o } }, [_vm._s(o)]);
    })]) : _h('input', { staticClass: "form-control", attrs: { "type": "text" }, domProps: { "value": _vm.value }, on: { "keyup": _vm.update } }), " ", " "]) : _vm._e()]);
  },
  staticRenderFns: [],
  name: 'props-row',

  props: {
    name: String,
    description: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {}
  },

  computed: {
    propName: function propName() {
      return this.name.split(/([A-Z][^A-Z]+)/).map(function (v) {
        return v.toLowerCase();
      }).filter(function (v) {
        return v;
      }).join('-');
    },
    prop: function prop() {
      var def = this.$parent.componentProps[this.name];
      var prop = {};
      var typ = typeof def === 'undefined' ? 'undefined' : _typeof(def);
      if (typ == 'function') {
        prop.type = def.name;
      } else if (typ == 'object') {
        if (def.type instanceof Array) {
          prop.type = def.type.map(function (t) {
            return t.name;
          }).join(' | ');
        } else if (def.type) {
          prop.type = def.type.name;
        }
        if (def.default) {
          prop.default = def.default;
        }
      }
      if (!prop.type) {
        prop.type = 'Any';
      }
      return prop;
    }
  },

  methods: {
    update: function update(e) {
      if (this.prop.type == 'Boolean') {
        this.$emit('input', e.target.checked);
        return;
      }
      this.$emit('input', e.target.value);
    }
  }
};

/* global Vue */
Vue.debug = true;

Vue.component(PropsTable.name, PropsTable);
Vue.component(PropsRow.name, PropsRow);

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

}(VuePatternfly,VueStrap));
//# sourceMappingURL=docs.js.map

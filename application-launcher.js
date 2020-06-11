(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t){e.exports='<pf-layout id="app">\n    <template #utility-menu>\n        \x3c!-- maybe a <pf-notification-bell> --\x3e\n\n        \x3c!-- launcherOpen tracks the open/closed state of the launcher --\x3e\n        <pf-application-launcher :open.sync="launcherOpen">\n            <pf-launcher-item icon="pficon-home" href="/">Home</pf-launcher-item>\n            <pf-launcher-item icon="fa-github" href="https://github.com/mtorromeo/vue-patternfly" target="_blank">GitHub</pf-launcher-item>\n            <pf-launcher-item icon="pficon-build">Suavitate</pf-launcher-item>\n            <pf-launcher-item icon="pficon-domain">Lorem</pf-launcher-item>\n        </pf-application-launcher>\n    </template>\n\n    \x3c!-- snip --\x3e\n</pf-layout>\n'},36:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"page"},[e._m(0),e._v(" "),n("section",[e._m(1),e._v(" "),e._m(2),e._v(" "),n("h3",[e._v("Example placement into the layout")]),e._v(" "),n("pre",[n("code",{staticClass:"lang-html",domProps:{textContent:e._s(e.sample)}})]),e._v(" "),n("h4",[e._v("Related documentation")]),e._v(" "),e._m(3),e._v(" "),n("props-table",{attrs:{"component-props":e.launcherProps}},[n("props-row",{attrs:{name:"label",description:"Descriptive label for the launcher"},model:{value:e.$root.launcher.label,callback:function(t){e.$set(e.$root.launcher,"label",t)},expression:"$root.launcher.label"}}),e._v(" "),n("props-row",{attrs:{name:"disabled",description:"Toggles disabled state"},model:{value:e.$root.launcher.disabled,callback:function(t){e.$set(e.$root.launcher,"disabled",t)},expression:"$root.launcher.disabled"}}),e._v(" "),n("props-row",{attrs:{name:"list",description:"Display icons in a list layour rather that a grid"},model:{value:e.$root.launcher.list,callback:function(t){e.$set(e.$root.launcher,"list",t)},expression:"$root.launcher.list"}}),e._v(" "),n("props-row",{attrs:{name:"open",description:"Toggles open state of the launcher"},model:{value:e.$root.launcher.open,callback:function(t){e.$set(e.$root.launcher,"open",t)},expression:"$root.launcher.open"}})],1),e._v(" "),n("h3",[e._v("Slots")]),e._v(" "),e._m(4)],1),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("props-table",{attrs:{"component-props":e.itemProps}},[n("props-row",{attrs:{name:"icon",description:"Class for the icon to use for the link item"},model:{value:e.$root.launcher.icon,callback:function(t){e.$set(e.$root.launcher,"icon",t)},expression:"$root.launcher.icon"}})],1),e._v(" "),n("slots-table",[n("slots-row",{attrs:{name:"default",description:"Content of the link"},model:{value:e.$root.launcher.itemText,callback:function(t){e.$set(e.$root.launcher,"itemText",t)},expression:"$root.launcher.itemText"}})],1)],1)};a._withStripped=!0;var o=n(9),r=n(31),i=n.n(r),l={name:"application-launcher-page",data:()=>({launcherProps:o.a.ApplicationLauncher.props,itemProps:o.a.LauncherItem.props,sample:i.a})},c=n(1),s=Object(c.a)(l,a,[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v("Application Launcher "),t("code",[this._v("<pf-application-launcher>")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This component implements the application launcher icon and menu. The component is best included in the "),t("code",[this._v("utility-menu")]),this._v(" slot of the "),t("code",[this._v("<pf-layout>")]),this._v(" component.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Menu items can be populated by inserting "),t("code",[this._v("<pf-launcher-item>")]),this._v("s in the default slot.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("a",{attrs:{href:"http://www.patternfly.org/pattern-library/application-framework/launcher/",target:"_blank"}},[this._v("Pattern Library > Application Framework > Launcher")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"table table-striped table-hover"},[n("thead",[n("tr",[n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("default")]),e._v(" "),n("td",[e._v("Content of the launcher. A list of "),n("code",[e._v("<pf-launcher-item>")]),e._v("s can be used for convenience")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v("Launcher Item "),t("code",[this._v("<pf-launcher-item>")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("p",[this._v("This component should be used inside a "),t("code",[this._v("<pf-application-launcher>")]),this._v(".")]),this._v(" "),t("p",[this._v("All custom attributes and event listeners are propagated to the inner "),t("code",[this._v("<a>")]),this._v(" tag for easier customization of the link and event handling")])])}],!1,null,null,null);s.options.__file="src/pages/application-launcher.vue";t.default=s.exports}}]);
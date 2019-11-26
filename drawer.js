(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{38:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"page"},[t._m(0),t._v(" "),o("section",[t._m(1),t._v(" "),o("h4",[t._v("Related documentation")]),t._v(" "),t._m(2),t._v(" "),o("props-table",{attrs:{"component-props":t.drawerProps}},[o("props-row",{attrs:{name:"hidden",description:"Controls the visibility state of the drawer."},model:{value:t.$root.drawer.hidden,callback:function(e){t.$set(t.$root.drawer,"hidden",e)},expression:"$root.drawer.hidden"}}),t._v(" "),o("props-row",{attrs:{name:"allowExpand",description:"Whether the drawer can be expanded in size or not."},model:{value:t.$root.drawer.allowExpand,callback:function(e){t.$set(t.$root.drawer,"allowExpand",e)},expression:"$root.drawer.allowExpand"}}),t._v(" "),o("props-row",{attrs:{name:"title",description:"A title for the container."},model:{value:t.$root.drawer.title,callback:function(e){t.$set(t.$root.drawer,"title",e)},expression:"$root.drawer.title"}})],1)],1),t._v(" "),t._m(3),t._v(" "),o("section",[t._m(4),t._v(" "),o("props-table",{attrs:{"component-props":t.bellProps}},[o("props-row",{attrs:{name:"updates",description:'Controls the badge indicator on the notification icon. Use "true" to show an empty badge indicator. Any other string value will be displayed inside the badge (it\'s better to use a badge content with the vertival layout).'},model:{value:t.$root.drawer.updates,callback:function(e){t.$set(t.$root.drawer,"updates",e)},expression:"$root.drawer.updates"}})],1)],1),t._v(" "),t._m(5),t._v(" "),o("section",[t._m(6),t._v(" "),o("props-table",{attrs:{"component-props":t.drawerGroupProps}},[o("props-row",{attrs:{name:"title",description:"Group header title."},model:{value:t.$root.drawerGroup.title,callback:function(e){t.$set(t.$root.drawerGroup,"title",e)},expression:"$root.drawerGroup.title"}}),t._v(" "),o("props-row",{attrs:{name:"counter",description:"Display a counter in the group header."},model:{value:t.$root.drawerGroup.counter,callback:function(e){t.$set(t.$root.drawerGroup,"counter",e)},expression:"$root.drawerGroup.counter"}}),t._v(" "),o("props-row",{attrs:{name:"loading",description:"Show a loading indicator."},model:{value:t.$root.drawerGroup.loading,callback:function(e){t.$set(t.$root.drawerGroup,"loading",e)},expression:"$root.drawerGroup.loading"}})],1),t._v(" "),o("slots-table",{attrs:{readonly:""}},[o("slots-row",{attrs:{name:"default",description:"Used to contain <code>&lt;pf-drawer-notification&gt;</code>s"}}),t._v(" "),o("slots-row",{attrs:{name:"actions",description:"Used to contain <code>&lt;pf-drawer-group-action&gt;</code>s"}})],1)],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),o("section",[o("p",[t._v("A single notification/event/message.")]),t._v(" "),o("props-table",{attrs:{"component-props":t.drawerNotificationProps}},[o("props-row",{attrs:{name:"action",description:"Action button definition.",code:""},model:{value:t.$root.drawerNotification.action,callback:function(e){t.$set(t.$root.drawerNotification,"action",e)},expression:"$root.drawerNotification.action"}}),t._v(" "),o("props-row",{attrs:{name:"actions",description:"List of actions displayed in a dropdown.",code:""},model:{value:t.$root.drawerNotification.actions,callback:function(e){t.$set(t.$root.drawerNotification,"actions",e)},expression:"$root.drawerNotification.actions"}}),t._v(" "),o("props-row",{attrs:{name:"message",description:"The notification message."},model:{value:t.$root.drawerNotification.message,callback:function(e){t.$set(t.$root.drawerNotification,"message",e)},expression:"$root.drawerNotification.message"}}),t._v(" "),o("props-row",{attrs:{name:"date",description:"Event date."},model:{value:t.$root.drawerNotification.date,callback:function(e){t.$set(t.$root.drawerNotification,"date",e)},expression:"$root.drawerNotification.date"}}),t._v(" "),o("props-row",{attrs:{name:"time",description:"Event time."},model:{value:t.$root.drawerNotification.time,callback:function(e){t.$set(t.$root.drawerNotification,"time",e)},expression:"$root.drawerNotification.time"}}),t._v(" "),o("props-row",{attrs:{name:"unread",description:"Unread state."},model:{value:t.$root.drawerNotification.unread,callback:function(e){t.$set(t.$root.drawerNotification,"unread",e)},expression:"$root.drawerNotification.unread"}}),t._v(" "),o("props-row",{attrs:{name:"type",description:"The type of notification. Can be on of: info, success, warning, danger.",options:["info","success","warning","danger"]},model:{value:t.$root.drawerNotification.type,callback:function(e){t.$set(t.$root.drawerNotification,"type",e)},expression:"$root.drawerNotification.type"}})],1)],1)])};r._withStripped=!0;var a=o(9);const{Drawer:i,DrawerGroup:n,DrawerNotification:s,NotificationBell:c}=a.a;var d={name:"drawer-page",data:()=>({drawerProps:i.props,drawerGroupProps:n.props,drawerNotificationProps:s.props,bellProps:c.props})},p=o(1),l=Object(p.a)(d,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("Notifications Drawer "),e("code",[this._v("<pf-drawer>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This component implements a content delivery system such as events, tasks and alerts. It is designed to contain a number of "),e("code",[this._v("<pf-drawer-group>")]),this._v("s which can each have a number of "),e("code",[this._v("<pf-drawer-notification>")]),this._v("s.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("a",{attrs:{href:"http://www.patternfly.org/pattern-library/communication/notification-drawer/",target:"_blank"}},[this._v("Pattern Library > Notification Drawer")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("Notification Bell "),e("code",[this._v("<pf-notification-bell>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A menu item that can be used as a toggler for the "),e("code",[this._v("<pf-notification-drawer>")]),this._v(" component. Its meant to be included in the "),e("code",[this._v("utility-menu")]),this._v(" slot of "),e("code",[this._v("<pf-layout>")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("Drawer Group "),e("code",[this._v("<pf-drawer-group>")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A collapsible container for a number of "),e("code",[this._v("<pf-drawer-notification>")]),this._v("s.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("Drawer Group Action "),e("code",[this._v("<pf-drawer-group-action>")])]),this._v(" "),e("span",{staticClass:"label label-default"},[this._v("functional")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("p",[this._v("Styled button for the "),e("code",[this._v("#actions")]),this._v(" slot of "),e("code",[this._v("<pf-drawer-group>")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h1",[this._v("Drawer Notification "),e("code",[this._v("<pf-drawer-notification>")])])])}],!1,null,null,null);l.options.__file="src/pages/drawer.vue";e.default=l.exports}}]);
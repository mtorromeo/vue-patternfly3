(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{39:function(t,o,e){"use strict";e.r(o);var l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("article",{staticClass:"page"},[t._m(0),t._v(" "),e("section",[e("p",[t._v("This component implements a toolbar with controls for filters, sorting, searching and custom actions to interact with a data view.")]),t._v(" "),e("h4",[t._v("Related documentation")]),t._v(" "),t._m(1),t._v(" "),t.modal.show?e("pf-modal",{attrs:{title:t.modal.title,"outside-close":t.modal.outsideClose,"confirm-button":t.modal.confirmButton,"cancel-button":t.modal.cancelButton},on:{close:function(o){t.modal.show=!1}},scopedSlots:t._u([t.modal.slotFooter.enabled?{key:"footer",fn:function(){return[e("div",{domProps:{innerHTML:t._s(t.modal.slotFooter.content)}})]},proxy:!0}:null],null,!0)},[t.modal.slotDefault.enabled?e("div",{domProps:{innerHTML:t._s(t.modal.slotDefault.content)}}):t._e()]):t._e(),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:function(o){t.modal.show=!0}}},[t._v("Open Modal")]),t._v(" "),e("props-table",{attrs:{"component-props":t.modalProps}},[e("props-row",{attrs:{name:"title",description:"Modal title or empty/undefined to disable it"},model:{value:t.modal.title,callback:function(o){t.$set(t.modal,"title",o)},expression:"modal.title"}}),t._v(" "),e("props-row",{attrs:{name:"outsideClose",description:"Allow clicking outside of the modal to close it"},model:{value:t.modal.outsideClose,callback:function(o){t.$set(t.modal,"outsideClose",o)},expression:"modal.outsideClose"}}),t._v(" "),e("props-row",{attrs:{name:"confirmButton",description:"Text for the confirmation button or empty/undefined to disable it"},model:{value:t.modal.confirmButton,callback:function(o){t.$set(t.modal,"confirmButton",o)},expression:"modal.confirmButton"}}),t._v(" "),e("props-row",{attrs:{name:"cancelButton",description:"Text for the cancellation button or empty/undefined to disable it"},model:{value:t.modal.cancelButton,callback:function(o){t.$set(t.modal,"cancelButton",o)},expression:"modal.cancelButton"}})],1),t._v(" "),e("slots-table",{attrs:{toggle:""}},[e("slots-row",{attrs:{name:"default",description:"Modal content",enabled:t.modal.slotDefault.enabled},on:{"update:enabled":function(o){return t.$set(t.modal.slotDefault,"enabled",o)}},model:{value:t.modal.slotDefault.content,callback:function(o){t.$set(t.modal.slotDefault,"content",o)},expression:"modal.slotDefault.content"}}),t._v(" "),e("slots-row",{attrs:{name:"footer",description:"Custom footer content can be placed here (overrides default buttons)",enabled:t.modal.slotFooter.enabled},on:{"update:enabled":function(o){return t.$set(t.modal.slotFooter,"enabled",o)}},model:{value:t.modal.slotFooter.content,callback:function(o){t.$set(t.modal.slotFooter,"content",o)},expression:"modal.slotFooter.content"}})],1)],1)])};l._withStripped=!0;var n=e(8),a=e.n(n),s={name:"modals-page",data:()=>({modalProps:a.a.Modal.props,modal:{show:!1,title:"Modal Title",outsideClose:!0,confirmButton:"OK",cancelButton:"Cancel",slotDefault:{enabled:!0,content:'<form class="form-horizontal">\n  <div class="form-group">\n    <label class="col-sm-3 control-label" for="textInput">Field One</label>\n    <div class="col-sm-9">\n      <input type="text" id="textInput" class="form-control"></div>\n  </div>\n  <div class="form-group">\n    <label class="col-sm-3 control-label" for="textInput2">Field Two</label>\n    <div class="col-sm-9">\n      <input type="text" id="textInput2" class="form-control"></div>\n  </div>\n  <div class="form-group">\n    <label class="col-sm-3 control-label" for="textInput3">Field Three</label>\n    <div class="col-sm-9">\n      <input type="text" id="textInput3" class="form-control">\n    </div>\n  </div>\n</form>'},slotFooter:{enabled:!1,content:'<button class="btn btn-default" type="button" title="Title 1">\n  Action 1\n</button>\n<button class="btn btn-default" type="button" title="Title 2">\n  Action 2\n</button>\n<button class="btn btn-danger" type="button" title="Title 3">\n  Action 3\n</button>'}}}),methods:{addFilter(t,o){const e={};e[t.title]=o,this.toolbar.filters.push(e)}}},r=e(0),i=Object(r.a)(s,l,[function(){var t=this.$createElement,o=this._self._c||t;return o("header",[o("h1",[this._v("Modal "),o("code",[this._v("<pf-modal>")])])])},function(){var t=this.$createElement,o=this._self._c||t;return o("ol",[o("li",[o("a",{attrs:{href:"http://www.patternfly.org/pattern-library/forms-and-controls/modal-overlay/",target:"_blank"}},[this._v("Pattern Library > Form and Controls > Modal Overlay")])])])}],!1,null,null,null);i.options.__file="src/pages/modal.vue";o.default=i.exports}}]);
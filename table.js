(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{43:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"page"},[e._m(0),e._v(" "),a("section",[a("h4",[e._v("Related documentation")]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"demo-container"},[a("pf-table",{staticStyle:{height:"250px"},attrs:{columns:e.table.columns,rows:e.table.rows,"key-name":e.table.keyName,page:e.table.page,"total-items":e.table.totalItems,"items-per-page":e.table.itemsPerPage,"items-per-page-options":e.table.itemsPerPageOptions,striped:e.table.striped,bordered:e.table.bordered,hover:e.table.hover,selectable:e.table.selectable,sortable:e.table.sortable,scrollable:e.table.scrollable,"sort-by":e.table.sortBy,"sort-direction":e.table.sortDirection},on:{"update:page":function(t){return e.$set(e.table,"page",t)},"update:itemsPerPage":function(t){return e.$set(e.table,"itemsPerPage",t)},"update:items-per-page":function(t){return e.$set(e.table,"itemsPerPage",t)},"update:sortBy":function(t){return e.$set(e.table,"sortBy",t)},"update:sort-by":function(t){return e.$set(e.table,"sortBy",t)},"update:sortDirection":function(t){return e.$set(e.table,"sortDirection",t)},"update:sort-direction":function(t){return e.$set(e.table,"sortDirection",t)}},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[a("td",{staticStyle:{width:"50px"}},[e._v("#"+e._s(s.id))]),e._v(" "),a("td",[e._v(e._s(s.name))]),e._v(" "),a("td",[e._v(e._s(s.surname))]),e._v(" "),a("td",[e._v(e._s(s.city))]),e._v(" "),a("td",[e._v(e._s(s.state))])]}},{key:"action",fn:function(){return[a("a",{staticClass:"btn btn-default",attrs:{href:"#"}},[e._v("\n            Action\n          ")])]},proxy:!0},{key:"dropdown",fn:function(){return[a("li",[a("a",{attrs:{href:"#"}},[e._v("Action")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#"}},[e._v("Another action")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#"}},[e._v("Something else here")])]),e._v(" "),a("li",{staticClass:"divider",attrs:{role:"separator"}}),e._v(" "),a("li",[a("a",{attrs:{href:"#"}},[e._v("Separated link")])])]},proxy:!0},{key:"footer",fn:function(){return[e._v("\n          Footer slot\n        ")]},proxy:!0}])})],1),e._v(" "),a("props-table",{attrs:{"component-props":e.tableProps}},[a("props-row",{attrs:{name:"striped",description:"Striped table rows"},model:{value:e.table.striped,callback:function(t){e.$set(e.table,"striped",t)},expression:"table.striped"}}),e._v(" "),a("props-row",{attrs:{name:"bordered",description:"Borders on all sides of the table and cells"},model:{value:e.table.bordered,callback:function(t){e.$set(e.table,"bordered",t)},expression:"table.bordered"}}),e._v(" "),a("props-row",{attrs:{name:"hover",description:"Enable hover state on table rows"},model:{value:e.table.hover,callback:function(t){e.$set(e.table,"hover",t)},expression:"table.hover"}}),e._v(" "),a("props-row",{attrs:{name:"selectable",description:"Make every table row selectable"},model:{value:e.table.selectable,callback:function(t){e.$set(e.table,"selectable",t)},expression:"table.selectable"}}),e._v(" "),a("props-row",{attrs:{name:"sortable",description:"Enable sorting by table columns"},model:{value:e.table.sortable,callback:function(t){e.$set(e.table,"sortable",t)},expression:"table.sortable"}}),e._v(" "),a("props-row",{attrs:{name:"scrollable",description:"Enable scrolling with fixed headers"},model:{value:e.table.scrollable,callback:function(t){e.$set(e.table,"scrollable",t)},expression:"table.scrollable"}}),e._v(" "),a("props-row",{attrs:{name:"columns",description:"List of columns",code:""},model:{value:e.table.columns,callback:function(t){e.$set(e.table,"columns",t)},expression:"table.columns"}}),e._v(" "),a("props-row",{attrs:{name:"rows",description:"List of rows",code:""},model:{value:e.table.rows,callback:function(t){e.$set(e.table,"rows",t)},expression:"table.rows"}}),e._v(" "),a("props-row",{attrs:{name:"keyName",description:"Name of the property of each row to use as unique key (v-for)"},model:{value:e.table.keyName,callback:function(t){e.$set(e.table,"keyName",t)},expression:"table.keyName"}}),e._v(" "),a("props-row",{attrs:{name:"page",description:"Current page number"},model:{value:e.table.page,callback:function(t){e.$set(e.table,"page",t)},expression:"table.page"}}),e._v(" "),a("props-row",{attrs:{name:"totalItems",description:"Total number of items (used to calculate the number of pages)"},model:{value:e.table.totalItems,callback:function(t){e.$set(e.table,"totalItems",t)},expression:"table.totalItems"}}),e._v(" "),a("props-row",{attrs:{name:"itemsPerPage",description:"Number of items to display per page (0 = disable paging controls)"},model:{value:e.table.itemsPerPage,callback:function(t){e.$set(e.table,"itemsPerPage",t)},expression:"table.itemsPerPage"}}),e._v(" "),a("props-row",{attrs:{name:"itemsPerPageOptions",description:"Available options to change the number of items per page"},model:{value:e.table.itemsPerPageOptions,callback:function(t){e.$set(e.table,"itemsPerPageOptions",t)},expression:"table.itemsPerPageOptions"}})],1),e._v(" "),a("h3",[e._v("Slots")]),e._v(" "),e._m(2)],1)])};s._withStripped=!0;const r=a(9).a.Table;var o={name:"table-page",data:()=>({tableProps:r.props,table:{columns:["Id","Name","Surname","City","State"],rows:[{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"},{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"},{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"},{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"},{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"}],keyName:"id",striped:!0,bordered:!0,hover:!0,selectable:!0,sortable:!0,scrollable:!1,page:1,totalItems:95,itemsPerPage:25,itemsPerPageOptions:[10,25,50,100,500],sortBy:"",sortDirection:""}})},l=a(1),i=Object(l.a)(o,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v("Table "),t("code",[this._v("<pf-table>")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("a",{attrs:{href:"http://www.patternfly.org/pattern-library/content-views/table-view/#_",target:"_blank"}},[this._v("Pattern Library > Content Views > Table View")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://www.patternfly.org/pattern-library/widgets/#tables",target:"_blank"}},[this._v("Pattern Library > Widgets > Tables")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"table table-striped table-hover"},[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Scope properties")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("default")]),e._v(" "),a("td",[e._v("Template for a single row of the table")]),e._v(" "),a("td",[a("code",[e._v("row")]),e._v(": the row data")])]),e._v(" "),a("tr",[a("td",[e._v("action")]),e._v(" "),a("td",[e._v("The action column. Should typically include a button.")]),e._v(" "),a("td",[a("code",[e._v("row")]),e._v(": the row data")])]),e._v(" "),a("tr",[a("td",[e._v("dropdown")]),e._v(" "),a("td",[e._v("The dropdown items of the Actions column. You should specify a list of "),a("code",[e._v("li > a")]),e._v(" items.")]),e._v(" "),a("td",[a("code",[e._v("row")]),e._v(": the row data")])]),e._v(" "),a("tr",[a("td",[e._v("footer")]),e._v(" "),a("td",[e._v("Content placed beside the pagination controls.")]),e._v(" "),a("td")])])])}],!1,null,null,null);i.options.__file="src/pages/table.vue";t.default=i.exports}}]);
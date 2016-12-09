!function(t,e){"use strict";e="default"in e?e.default:e;var a="vue-patternfly",i="0.0.2",o="PatternFly components for Vue.js 2",n="dist/vue-patternfly.min.js",r={test:"test"},s={purge:"rm -rf dist/*",docs:"cd docs && rollup -cw","compile-docs":"cd docs && rollup -c && uglifyjs --screw-ie8 -mco docs.js docs.js",compile:"rollup -c && uglifyjs --screw-ie8 -mco dist/vue-patternfly.min.js dist/vue-patternfly.min.js",build:"npm run purge && npm run compile",lint:"eslint src/* test/*",prepublish:"npm run lint && npm run build"},l=["dist/","src/"],c=["vue","patternfly"],u="Massimiliano Torromeo <massimiliano.torromeo@gmail.com>",p="MIT",d={type:"git",url:"git+https://github.com/mtorromeo/vue-patternfly.git"},f={url:"https://github.com/mtorromeo/vue-patternfly/issues"},m="https://github.com/mtorromeo/vue-patternfly#readme",h={c3:"^0.4.11",patternfly:"^3.14.0",positioner:"^0.2.0",vue:"^2.1.0","vue-strap":"yuche/vue-strap#v2"},y={"babel-core":"^6.20.0","babel-eslint":"^7.1.1","babel-plugin-external-helpers":"^6.18.0","babel-preset-es2015":"^6.18.0",eslint:"^3.10.2","eslint-plugin-html":"^1.7.0","eslint-plugin-import":"^1.16.0",rollup:"^0.36.3","rollup-plugin-babel":"^2.6.1","rollup-plugin-commonjs":"^5.0.5","rollup-plugin-css-only":"^0.1.0","rollup-plugin-json":"^2.0.2","rollup-plugin-node-resolve":"^2.0.0","rollup-plugin-vue2":"^0.6.1","rollup-watch":"^2.5.0",uglifyjs:"^2.4.10","vue-router":"^2.1.1","vue-template-compiler":"^2.1.0"},v={name:a,version:i,description:o,main:n,directories:r,scripts:s,files:l,keywords:c,author:u,license:p,repository:d,bugs:f,homepage:m,dependencies:h,devDependencies:y},g={render:function(){var t=this,e=t.$createElement;return e("article",{staticClass:"home"},[e("header",{staticClass:"jumbotron"},[e("h1",["Vue PatternFly"])," ",e("p",{staticClass:"description"},["\n      PatternFly components for Vue.js 2\n    "])," ",e("p",[e("router-link",{attrs:{to:"/get-started",exact:!0}},[e("a",{staticClass:"btn btn-primary"},["Get Started"])])," ",e("a",{staticClass:"btn btn-default",attrs:{href:t.github}},[e("span",{staticClass:"fa fa-github"})," GITHUB"])])," ",e("p",{staticClass:"version"},["\n      Version "+t._s(t.version)+"\n    "])])," ",e("section",{staticClass:"container-fluid"},[e("h2",["About Vue PatternFly"])," ",e("p",["Vue PatternFly implements a set of reusable Vue.js components following the PatternFly design patterns and usage guidelines to facilitate building of enterprise IT applications."])," ",e("div",{staticClass:"row row-cards-pf"},[e("div",{staticClass:"col-xs-12 col-md-4"},[e("pf-card",{attrs:{title:"About Vue.js"}},[e("div",["«Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.»"])," ",e("div",[e("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},["WebSite ",e("span",{staticClass:"fa fa-external-link"})])])])])," ",e("div",{staticClass:"col-xs-12 col-md-4"},[e("pf-card",{attrs:{title:"About PatternFly"}},[e("div",["«PatternFly is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides and an active community that helps support it all.»"])," ",e("div",[e("a",{attrs:{href:"http://www.patternfly.org/",target:"_blank"}},["WebSite ",e("span",{staticClass:"fa fa-external-link"})])])])])," ",e("div",{staticClass:"col-xs-12 col-md-4"},[e("pf-card",{attrs:{title:"About VueStrap"}},[e("div",["«Bootstrap components built with Vue.js.»"])," ",e("div",["Since PatternFly is built on top of the Bootstrap framework, VueStrap is a natural complement library."])," ",e("div",[e("a",{attrs:{href:"http://yuche.github.io/vue-strap/",target:"_blank"}},["WebSite ",e("span",{staticClass:"fa fa-external-link"})])])])])])])])},staticRenderFns:[],name:"home-page",data:function(){return{version:v.version}},computed:{github:function(){return v.repository.url.replace(/^git\+|\.git$/g,"")}}},b={render:function(){{var t=this;t.$createElement}return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("article",{staticClass:"page"},[e("header",[e("h1",["Get Started"])])," ",e("section",[e("p",["Using the vue-patternfly module is really simple as it can be simply included in the HTML of the page as a script tag or required/imported following either CommonJS or AMD specs."])," ",e("p",["The guide that you are reading is using vue-patternfly itself and imports every dependency as script/style tags."])," ",e("h3",["HTML"])," ",e("pre",[e("code",{staticClass:"lang-html"},['<html>\n    <head>\n      <link rel="stylesheet" href="https://unpkg.com/patternfly/dist/css/patternfly.min.css">\n      <link rel="stylesheet" href="https://unpkg.com/patternfly/dist/css/patternfly-additions.min.css">\n      <link rel="stylesheet" href="https://unpkg.com/c3/c3.min.css">\n      <link rel="stylesheet" href="https://unpkg.com/vue-patternfly/dist/vue-patternfly.css">\n    </head>\n    <body>\n      <pf-layout id="app"></pf-layout>\n\n      <script src="https://unpkg.com/d3/d3.min.js"></script>\n      <script src="https://unpkg.com/c3/c3.min.js"></script>\n      <script src="https://unpkg.com/vue/dist/vue.min.js"></script>\n      <script src="https://unpkg.com/vue-router/dist/vue-router.min.js"></script>\n      <script src="https://rawgithub.com/yuche/vue-strap/071995989df214c149f5f74a27872d67daa81a10/dist/vue-strap.min.js"></script>\n      <script src="https://unpkg.com/vue-patternfly/dist/vue-patternfly.js"></script>\n    </body>\n</html>'])])," ",e("h3",["JavaScript"])," ",e("pre",[e("code",{staticClass:"lang-javascript"},["// If using a module system, import Vue and VuePatternfly and call Vue.use(VuePatternfly).\n\nconst app = new Vue({\n  el: '#app'\n})"])])])])}],name:"get-started-page"},w={render:function(){var t=this,e=t.$createElement;return e("article",{staticClass:"page"},[t._m(0)," ",e("section",[e("p",["This component handles the application's navigation controls and is a perfect fit for the root element of the Vue.js application."])," ",t._m(1)," ",e("h4",["Related documentation"])," ",t._m(2)," ",e("h3",["Props"])," ",e("table",{staticClass:"table table-striped table-hover"},[t._m(3)," ",e("tbody",[e("tr",[e("td",["horizontal"])," ",e("td",["Enable horizontal navigation layout"])," ",e("td",["Boolean"])," ",e("td",["false"])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.layoutHorizontal,expression:"$root.layoutHorizontal"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.$root.layoutHorizontal)?t._i(t.$root.layoutHorizontal,null)>-1:t._q(t.$root.layoutHorizontal,!0)},on:{change:function(e){var a=t.$root.layoutHorizontal,i=e.target,o=i.checked?!0:!1;if(Array.isArray(a)){var n=null,r=t._i(a,n);o?0>r&&(t.$root.layoutHorizontal=a.concat(n)):r>-1&&(t.$root.layoutHorizontal=a.slice(0,r).concat(a.slice(r+1)))}else t.$root.layoutHorizontal=o}}})])])," ",e("tr",[e("td",["icons"])," ",e("td",["Display icons in the vertical navigation enabling a compact menu when collapsed"])," ",e("td",["Boolean"])," ",e("td",["false"])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.layoutIcons,expression:"$root.layoutIcons"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.$root.layoutIcons)?t._i(t.$root.layoutIcons,null)>-1:t._q(t.$root.layoutIcons,!0)},on:{change:function(e){var a=t.$root.layoutIcons,i=e.target,o=i.checked?!0:!1;if(Array.isArray(a)){var n=null,r=t._i(a,n);o?0>r&&(t.$root.layoutIcons=a.concat(n)):r>-1&&(t.$root.layoutIcons=a.slice(0,r).concat(a.slice(r+1)))}else t.$root.layoutIcons=o}}})])])," ",e("tr",[e("td",["collapsable"])," ",e("td",["Collapse the vertical navigation menu"])," ",e("td",["Boolean"])," ",e("td",["true"])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.layoutCollapsable,expression:"$root.layoutCollapsable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.$root.layoutCollapsable)?t._i(t.$root.layoutCollapsable,null)>-1:t._q(t.$root.layoutCollapsable,!0)},on:{change:function(e){var a=t.$root.layoutCollapsable,i=e.target,o=i.checked?!0:!1;if(Array.isArray(a)){var n=null,r=t._i(a,n);o?0>r&&(t.$root.layoutCollapsable=a.concat(n)):r>-1&&(t.$root.layoutCollapsable=a.slice(0,r).concat(a.slice(r+1)))}else t.$root.layoutCollapsable=o}}})])])," ",e("tr",[e("td",["disabled"])," ",e("td",["Disable all layout elements"])," ",e("td",["Boolean"])," ",e("td",["false"])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.$root.layoutDisabled,expression:"$root.layoutDisabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.$root.layoutDisabled)?t._i(t.$root.layoutDisabled,null)>-1:t._q(t.$root.layoutDisabled,!0)},on:{change:function(e){var a=t.$root.layoutDisabled,i=e.target,o=i.checked?!0:!1;if(Array.isArray(a)){var n=null,r=t._i(a,n);o?0>r&&(t.$root.layoutDisabled=a.concat(n)):r>-1&&(t.$root.layoutDisabled=a.slice(0,r).concat(a.slice(r+1)))}else t.$root.layoutDisabled=o}}})])])])])," ",e("h3",["Slots"])," ",t._m(4)," ",e("h3",["Example with vue-router"])," ",t._m(5)])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("header",[e("h1",["Layout ",e("code",["<pf-layout>"])])])},function(){var t=this,e=t.$createElement;return e("p",["It works well with ",e("i",["vue-router"])," to handle the application routing using ",e("code",["<router-link>"])," in the menu slots and ",e("code",["<router-view>"])," as the default slot (See the vue-router example below)."])},function(){var t=this,e=t.$createElement;return e("ol",[e("li",[e("a",{attrs:{href:"http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/",target:"_blank"}},["Pattern Library > Horizontal Navigation"])])," ",e("li",[e("a",{attrs:{href:"http://www.patternfly.org/pattern-library/navigation/vertical-navigation/",target:"_blank"}},["Pattern Library > Vertical Navigation"])])," ",e("li",[e("a",{attrs:{href:"http://router.vuejs.org/en/",target:"_blank"}},["Vue Router"])])])},function(){var t=this,e=t.$createElement;return e("thead",[e("tr",[e("th",["Name"])," ",e("th",["Description"])," ",e("th",["Type"])," ",e("th",["Default"])," ",e("th",["Value"])])])},function(){var t=this,e=t.$createElement;return e("table",{staticClass:"table table-striped table-hover"},[e("thead",[e("tr",[e("th",["Name"])," ",e("th",["Description"])])])," ",e("tbody",[e("tr",[e("td",["default"])," ",e("td",["Page content"])])," ",e("tr",[e("td",["brand"])," ",e("td",["The top-left brand image / title"])])," ",e("tr",[e("td",["utility-menu"])," ",e("td",["The top-right utility menu"])])," ",e("tr",[e("td",["horizontal-menu"])," ",e("td",["The horizontal navigation menu"])])," ",e("tr",[e("td",["vertical-menu"])," ",e("td",["The vertical navigation menu"])])])])},function(){var t=this,e=t.$createElement;return e("pre",[e("code",{staticClass:"lang-html"},['<pf-layout id="app" :icons="true">\n  <router-link slot="brand" to="/" :exact="true">\n    <a class="navbar-brand">\n      <span class="navbar-brand-name">Vue PatternFly</span>\n    </a>\n  </router-link>\n\n  <template slot="vertical-menu">\n    <router-link tag="li" class="list-group-item" active-class="active" to="/get-started" :exact="true">\n      <a>\n        <span class="fa fa-play-circle" title="Get Started"></span>\n        <span class="list-group-item-value">Get Started</span>\n      </a>\n    </router-link>\n    <router-link tag="li" class="list-group-item" active-class="active" to="/layout" :exact="true">\n      <a>\n        <span class="fa fa-columns" title="Layout"></span>\n        <span class="list-group-item-value">Layout</span>\n      </a>\n    </router-link>\n  </template>\n\n  <router-view></router-view>\n</pf-layout>'])])}],name:"layout-page"},C={render:function(){var t=this,e=t.$createElement;return e("article",{staticClass:"page"},[t._m(0)," ",e("section",[e("h2",["Toolbar"])," ",e("pf-toolbar",{ref:"toolbar",attrs:{"filter-fields":[{title:"Name"},{title:"Age"},{title:"Address"},{title:"Birth Month",placeholder:"Filter by Birth Month...",values:["January","February","March","April","May","June","July","August","September","October","November","December"]}],"sort-fields":[{title:"Name"},{title:"Date"}],views:"table,card,list","result-count":0},on:{filters:function(e){t.filters=e},"sort-change":t.setSort}},[e("button",{staticClass:"btn btn-default",attrs:{type:"button",title:"Title 1"},on:{click:function(){t.$refs.toolbar.filters.push({title:"Test",value:1})}}},["\n        Action 1\n      "])," ",e("button",{staticClass:"btn btn-default",attrs:{type:"button",title:"Title 2"}},["\n        Action 2\n      "])," ",e("button",{staticClass:"btn btn-danger",attrs:{type:"button",title:"Title 3"}},["\n        Action 3\n      "])," ",e("dropdown",{staticClass:"dropdown-kebab-pf",attrs:{type:"link"}},[e("li",{attrs:{role:"menuitem"}},[e("a",{attrs:{title:"Menu Title 1"}},["Menu Item 1"])])," ",e("li",{attrs:{role:"menuitem"}},[e("a",{attrs:{title:"Menu Title 2"}},["Menu Item 2"])])," ",e("li",{staticClass:"divider",attrs:{role:"separator"}})," ",e("li",{attrs:{role:"menuitem"}},[e("a",{attrs:{title:"Menu Title 3"}},["Menu Item 3"])])])])," ",e("pre",["Filters: "+t._s(t.filters)+"\n    Sort: "+t._s(t.sortField.title)+" "+t._s(t.sortAscending?"ascending":"descending")])," ",e("h2",["Aggregate Status Card"])," ",e("div",{staticClass:"row row-cards-pf"},[e("div",{staticClass:"col-md-3 col-lg-2"},[e("pf-aggregate-status-card",{attrs:{"icon-class":"fa fa-shield",title:"Nodes",count:"793",href:"#"}},[e("pf-card-notification",{attrs:{"icon-class":"pficon pficon-error-circle-o",href:"#",count:"3"}})," ",e("pf-card-notification",{attrs:{"icon-class":"pficon pficon-warning-triangle-o",href:"#",count:"1"}})])])," ",e("div",{staticClass:"col-md-3 col-lg-2"},[e("pf-aggregate-status-card",{attrs:{title:"Ipsum",count:"0",layout:"tall"}},[e("pf-card-notification",{attrs:{"icon-class":"pficon pficon-error-circle-o",href:"#",count:"3"}})," ",e("pf-card-notification",{attrs:{"icon-class":"pficon pficon-warning-triangle-o",href:"#",count:"1"}})])])," ",e("div",{staticClass:"col-md-3 col-lg-2"},[e("pf-aggregate-status-card",{attrs:{"icon-class":"fa fa-paper-plane",title:"Amet",count:"9",layout:"mini",accented:!1}},[e("pf-card-notification",{attrs:{"icon-class":"pficon pficon-ok"}})])])])," ",e("div",{staticClass:"row row-cards-pf"},[e("div",{staticClass:"col-md-6 col-lg-4"},[e("h2",["C3 Chart"])," ",e("pf-card",{attrs:{title:"System Resources","foot-note":"Footer",filter:{position:"header",filters:[{label:"Filtro 1"},{label:"Filtro 2"}]}}},[e("pf-c3-chart",{attrs:{type:"donut",title:"Memory",data:{columns:[["Used",123],["Available",74]],groups:[["used","available"]]}}})])])," ",e("div",{staticClass:"col-md-12 col-lg-8"},[e("h2",["Utilization Bar Card"])," ",e("pf-card",{attrs:{title:"System Resources"}},[e("pf-utilization-bar-chart",{attrs:{title:"RAM Usage",units:"MB",value:8,total:24}})," ",e("label",{staticClass:"label-title"},["Inline Layouts with Error, Warning, and Ok Thresholds"])," ",e("pf-utilization-bar-chart",{attrs:{title:"Disk I/O",units:"I/Ops",value:450,total:500,inline:"",warning:60,error:85}})," ",e("pf-utilization-bar-chart",{attrs:{title:"CPU Usage",units:"MHz",value:420,total:500,inline:"",warning:60,error:85}})," ",e("pf-utilization-bar-chart",{attrs:{title:"Memory",units:"GBs",value:25,total:100,inline:"",warning:60,error:85}})," ",e("pf-utilization-bar-chart")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("header",[e("h1",["Components"])])}],name:"components-page",components:{dropdown:t.dropdown},data:function(){return{sortField:{},sortAscending:!0,filters:[]}},methods:{setSort:function(t,e){this.sortField=t,this.sortAscending=e},addFilter:function(t,e){var a={};a[t.title]=e,this.filters.push(a)}}},T=e.Notification,_=e.Notifications,k={render:function(){var t=this,e=t.$createElement;return e("article",{staticClass:"page"},[t._m(0)," ",e("section",[t._m(1)," ",t._m(2)," ",e("h4",["Related documentation"])," ",t._m(3)," ",e("pf-notifications",{ref:"notifications",attrs:{toast:t.notificationsToast}})," ",e("h3",["Props"])," ",e("table",{staticClass:"table table-striped table-hover"},[t._m(4)," ",e("tbody",[e("tr",[e("td",["toast"])," ",t._m(5)," ",e("td",["Boolean"])," ",e("td",[t._s(t.notificationsProps.toast.default)])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationsToast,expression:"notificationsToast"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.notificationsToast)?t._i(t.notificationsToast,null)>-1:t._q(t.notificationsToast,!0)},on:{change:function(e){var a=t.notificationsToast,i=e.target,o=i.checked?!0:!1;if(Array.isArray(a)){var n=null,r=t._i(a,n);o?0>r&&(t.notificationsToast=a.concat(n)):r>-1&&(t.notificationsToast=a.slice(0,r).concat(a.slice(r+1)))}else t.notificationsToast=o}}})])])])])," ",e("h3",["Methods"])," ",e("table",{staticClass:"table table-striped table-hover"},[t._m(6)," ",e("tbody",[e("tr",[e("td",{attrs:{rowspan:"2"}},["add()"])," ",e("td",["notification"])," ",t._m(7)," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationsMessage,expression:"notificationsMessage"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t._s(t.notificationsMessage)},on:{input:function(e){e.target.composing||(t.notificationsMessage=e.target.value)}}})])," ",e("td",{attrs:{rowspan:"2"}},[e("button",{staticClass:"btn btn-default",on:{click:t.notify}},[e("span",{staticClass:"fa fa-play-circle"}),"\n              Run\n            "])])])," ",e("tr",[e("td",["type"])," ",t._m(8)," ",e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.notificationsType,expression:"notificationsType"}],staticClass:"form-control",on:{change:function(e){t.notificationsType=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[e("option",{attrs:{value:"info"}},["info"])," ",e("option",{attrs:{value:"success"}},["success"])," ",e("option",{attrs:{value:"warning"}},["warning"])," ",e("option",{attrs:{value:"danger"}},["danger"])])])])])])])," ",t._m(9)," ",e("section",[e("pf-notification",{attrs:{delay:t.notificationDelay,type:t.notificationType,toast:t.notificationToast,persistent:t.notificationPersistent,action:t.notificationAction}},[e("div",{domProps:{innerHTML:t._s(t.notificationMessage)}})])," ",e("h3",["Props"])," ",e("table",{staticClass:"table table-striped table-hover"},[t._m(10)," ",e("tbody",[e("tr",[e("td",["delay"])," ",e("td",["The delay in milliseconds after which the notification is automatically dismissed."])," ",e("td",["Number"])," ",e("td",[t._s(t.notificationProps.delay.default)])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationDelay,expression:"notificationDelay"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t._s(t.notificationDelay)},on:{input:function(e){e.target.composing||(t.notificationDelay=e.target.value)}}})])])," ",e("tr",[e("td",["type"])," ",e("td",["The type of notification. Can be on of: info, success, warning, danger."])," ",e("td",["String"])," ",e("td",[t._s(t.notificationProps.type.default)])," ",e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.notificationType,expression:"notificationType"}],staticClass:"form-control",on:{change:function(e){t.notificationType=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[e("option",{attrs:{value:"info"}},["info"])," ",e("option",{attrs:{value:"success"}},["success"])," ",e("option",{attrs:{value:"warning"}},["warning"])," ",e("option",{attrs:{value:"danger"}},["danger"])])])])," ",e("tr",[e("td",["toast"])," ",t._m(11)," ",e("td",["Boolean"])," ",e("td",[t._s(t.notificationProps.toast.default)])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationToast,expression:"notificationToast"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.notificationToast)?t._i(t.notificationToast,null)>-1:t._q(t.notificationToast,!0)},on:{change:function(e){var a=t.notificationToast,i=e.target,o=i.checked?!0:!1;if(Array.isArray(a)){var n=null,r=t._i(a,n);o?0>r&&(t.notificationToast=a.concat(n)):r>-1&&(t.notificationToast=a.slice(0,r).concat(a.slice(r+1)))}else t.notificationToast=o}}})])])," ",e("tr",[e("td",["persistent"])," ",e("td",["Disables the controls to dismiss the notification."])," ",e("td",["Boolean"])," ",e("td",[t._s(t.notificationProps.persistent.default)])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationPersistent,expression:"notificationPersistent"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.notificationPersistent)?t._i(t.notificationPersistent,null)>-1:t._q(t.notificationPersistent,!0)},on:{change:function(e){var a=t.notificationPersistent,i=e.target,o=i.checked?!0:!1;if(Array.isArray(a)){var n=null,r=t._i(a,n);o?0>r&&(t.notificationPersistent=a.concat(n)):r>-1&&(t.notificationPersistent=a.slice(0,r).concat(a.slice(r+1)))}else t.notificationPersistent=o}}})])])," ",e("tr",[e("td",["action.name"])," ",e("td",["The text of an action button to add to the notification. This is mandatory to enable the action."])," ",e("td",["String"])," ",e("td")," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationAction.name,expression:"notificationAction.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t._s(t.notificationAction.name)},on:{input:function(e){e.target.composing||(t.notificationAction.name=e.target.value)}}})])])," ",e("tr",[e("td",["action.title"])," ",e("td",["The title for the action button."])," ",e("td",["String"])," ",e("td")," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationAction.title,expression:"notificationAction.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t._s(t.notificationAction.title)},on:{input:function(e){e.target.composing||(t.notificationAction.title=e.target.value)}}})])])," ",e("tr",[e("td",["action.button"])," ",e("td",["Controls the type of button to use for the action."])," ",e("td",["String"])," ",e("td",["link"])," ",e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.notificationAction.button,expression:"notificationAction.button"}],staticClass:"form-control",on:{change:function(e){t.notificationAction.button=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[e("option",{attrs:{value:"link"}},["link"])," ",e("option",{attrs:{value:"default"}},["default"])," ",e("option",{attrs:{value:"primary"}},["primary"])," ",e("option",{attrs:{value:"info"}},["info"])," ",e("option",{attrs:{value:"success"}},["success"])," ",e("option",{attrs:{value:"warning"}},["warning"])," ",e("option",{attrs:{value:"danger"}},["danger"])])])])," ",e("tr",[e("td",["action.emit"])," ",e("td",["The name of an event that should be emitted when the action is triggered."])," ",e("td",["String"])," ",e("td",["action"])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationAction.emit,expression:"notificationAction.emit"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t._s(t.notificationAction.emit)},on:{input:function(e){e.target.composing||(t.notificationAction.emit=e.target.value)}}})])])])])," ",e("h3",["Slots"])," ",e("table",{staticClass:"table table-striped table-hover"},[t._m(12)," ",e("tbody",[e("tr",[e("td",["default"])," ",e("td",["The notification message"])," ",e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.notificationMessage,expression:"notificationMessage"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t._s(t.notificationMessage)},on:{input:function(e){e.target.composing||(t.notificationMessage=e.target.value)}}})])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("header",[e("h1",["Notifications ",e("code",["<pf-notifications>"])])])},function(){var t=this,e=t.$createElement;return e("p",["This component is a container for other ",e("code",["<pf-notification>"])," components. Notifications can be placed inside its default slot or added programmatically by calling the ",e("code",["add()"])," method."])},function(){var t=this,e=t.$createElement;return e("p",["Notification dismissals will be handled automatically for the notifications added programmatically. For ",e("code",["<pf-notification>"])," components placed inside the default slot or without using the ",e("code",["<pf-notifications>"])," container you will have to listen to the ",e("code",["@dismiss"])," event."])},function(){var t=this,e=t.$createElement;return e("ol",[e("li",[e("a",{attrs:{href:"http://www.patternfly.org/pattern-library/communication/toast-notifications/#/api",target:"_blank"}},["Pattern Library > Toast Notifications"])])," ",e("li",[e("a",{attrs:{href:"http://www.patternfly.org/pattern-library/communication/inline-notifications/#/api",target:"_blank"}},["Pattern Library > Inline Notifications"])])])},function(){var t=this,e=t.$createElement;return e("thead",[e("tr",[e("th",["Name"])," ",e("th",["Description"])," ",e("th",["Type"])," ",e("th",["Default"])," ",e("th",["Value"])])])},function(){var t=this,e=t.$createElement;return e("td",["Defines this as a container for toast notifications. The property is propagated to every ",e("code",["<pf-notification>"])," added programmatically. You are responsible to keep the property in sync for ",e("code",["<pf-notification>"]),"s inserted manually."])},function(){var t=this,e=t.$createElement;return e("thead",[e("tr",[e("th",["Name"])," ",e("th",["Argument"])," ",e("th",["Description"])," ",e("th",{attrs:{colspan:"2"}},["Value"])])])},function(){var t=this,e=t.$createElement;return e("td",["The notification message string or an ",e("code",["Object"])," with every ",e("code",["<pf-notification>"])," property to use."])},function(){var t=this,e=t.$createElement;return e("td",[e("code",["<pf-notification>"]),"'s type"])},function(){var t=this,e=t.$createElement;return e("header",[e("h1",["Notification ",e("code",["<pf-notification>"])])])},function(){var t=this,e=t.$createElement;return e("thead",[e("tr",[e("th",["Name"])," ",e("th",["Description"])," ",e("th",["Type"])," ",e("th",["Default"])," ",e("th",["Value"])])])},function(){var t=this,e=t.$createElement;return e("td",["Make this a toast notification. These need to be placed inside a container with the ",e("code",["toast-notifications-list-pf"])," CSS class or inside a ",e("code",["<pf-notifications>"])," component."])},function(){var t=this,e=t.$createElement;return e("thead",[e("tr",[e("th",["Name"])," ",e("th",["Description"])," ",e("th",["HTML"])])])}],name:"notifications-page",components:{"pf-notification":T},data:function(){return{notificationProps:T.props,notificationDelay:T.props.delay.default,notificationType:T.props.type.default,notificationToast:T.props.toast.default,notificationPersistent:T.props.persistent.default,notificationMessage:"<strong>Test</strong> notification",notificationsProps:_.props,notificationsMessage:"<strong>Test</strong> notification",notificationsType:"info",notificationsToast:_.props.toast.default,notificationAction:{name:"",title:"",button:"link",emit:""}}},methods:{notify:function(){this.$refs.notifications.add(this.notificationsMessage,this.notificationsType)}}},A=new VueRouter({routes:[{path:"/",component:g},{path:"/get-started",component:b},{path:"/layout",component:w},{path:"/notifications",component:k},{path:"/components",component:C}]});Vue.debug=!0,new Vue({el:"#app",router:A,data:function(){return{layoutHorizontal:!1,layoutDisabled:!1,layoutIcons:!0,layoutCollapsable:!0}}})}(VueStrap,VuePatternfly);
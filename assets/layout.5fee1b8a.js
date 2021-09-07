import{b as e}from"./index.2d8ee88c.js";const t={name:"layout-page",data:()=>({vueroutersample:'<pf-layout id="app" icons>\n  <template #brand>\n    <router-link to="/" :exact="true" class="navbar-brand navbar-brand-name">\n      Vue PatternFly\n    </router-link>\n  </template>\n\n  <template #vertical-menu>\n    \x3c!-- when the "to" property is present a <router-link> will be used --\x3e\n    <pf-menu-item\n      to="/get-started"\n      exact\n      title="Get Started"\n      icon="fa-play-circle"\n    ></pf-menu-item>\n\n    <pf-menu-item\n      to="/notifications"\n      exact\n      title="Notifications"\n      icon="fa-bell"\n      badge="12"\n    ></pf-menu-item>\n  </template>\n\n  <router-view></router-view>\n</pf-layout>\n',tertiarymenusample:'<pf-layout id="app" icons>\n  <template #vertical-menu>\n    <pf-menu-item\n      href="/"\n      title="Menu Item 1"\n      icon="fa-play-circle"\n    ></pf-menu-item>\n\n    <pf-vertical-submenu title="Submenu 1" icon="fa-play-circle">\n      <pf-menu-item\n        href="/page1"\n        title="Submenu Item 1"\n        icon="fa-play-circle"\n      ></pf-menu-item>\n\n      <pf-menu-item\n        href="/page2"\n        title="Submenu Item 2"\n        icon="fa-play-circle"\n      ></pf-menu-item>\n\n      <pf-vertical-submenu title="Submenu 2" icon="fa-play-circle">\n        <pf-menu-item\n          href="/page3"\n          title="Tertiary Item 1"\n          icon="fa-play-circle"\n        ></pf-menu-item>\n\n        <pf-menu-item\n          href="/page4"\n          title="Tertiary Item 2"\n          icon="fa-play-circle"\n        ></pf-menu-item>\n      </pf-vertical-submenu>\n    </pf-vertical-submenu>\n  </template>\n\n  \x3c!-- page content here --\x3e\n</pf-layout>\n',layoutProps:e.props})},n=window.Vue.createElementVNode,a=window.Vue.createTextVNode,o=window.Vue.resolveComponent,l=window.Vue.createVNode,i=window.Vue.withCtx,r=window.Vue.toDisplayString,u=window.Vue.createStaticVNode,p=window.Vue.openBlock,d=window.Vue.createElementBlock,m={class:"page"},c=n("header",null,[n("h1",null,[a("Layout "),n("code",null,"<pf-layout>")])],-1),s=u('<p>This component handles the application&#39;s navigation controls and is a perfect fit for the root element of the Vue.js application.</p><p>It works well with <i>vue-router</i> to handle the application routing using <code>&lt;router-link&gt;</code> in the menu slots and <code>&lt;router-view&gt;</code> as the default slot (See the vue-router example below).</p><p><code>&lt;pf-menu-item&gt;</code>s can be used in both vertical-menu and horizontal-menu slots and are integrated with vue-router so that you can simply use the <code>to</code> property to insert a <code>&lt;router-link&gt;</code>.</p><p>To insert a secondary or tertiary submenu into a vertical-menu slot you have to nest a <code>&lt;pf-vertical-submenu&gt;</code> component.</p><p>A separator component for vertical navigation, which is not part of the original patternfly design, is available as <code>&lt;pf-vertical-nav-divider&gt;</code>.</p><p>Note that there is no corresponding pf-horizontal-submenu as you can simply nest <code>&lt;pf-menu-item&gt;</code>s there.</p><h4>Related documentation</h4><ol><li><a href="https://www.patternfly.org/v3/pattern-library/navigation/horizontal-navigation/" target="_blank">Pattern Library &gt; Horizontal Navigation</a></li><li><a href="https://www.patternfly.org/v3/pattern-library/navigation/vertical-navigation/" target="_blank">Pattern Library &gt; Vertical Navigation</a></li><li><a href="https://next.router.vuejs.org" target="_blank">Vue Router</a></li></ol>',8),h=u('<h3>Slots</h3><table class="table table-striped table-hover"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Page content</td></tr><tr><td>brand</td><td>The top-left brand image / title</td></tr><tr><td>utility-menu</td><td>The top-right utility menu</td></tr><tr><td>horizontal-menu</td><td>The horizontal navigation menu</td></tr><tr><td>vertical-menu</td><td>The vertical navigation menu</td></tr></tbody></table><h3>Example with vue-router</h3>',3),y=["textContent"],f=n("h3",null,"Example with tertiary menu",-1),g=["textContent"];t.render=function(e,t,a,u,b,v){const w=o("props-row"),V=o("props-table");return p(),d("article",m,[c,n("section",null,[s,l(V,{"component-props":b.layoutProps},{default:i((()=>[l(w,{modelValue:e.$root.layoutHorizontal,"onUpdate:modelValue":t[0]||(t[0]=t=>e.$root.layoutHorizontal=t),name:"horizontal",description:"Enable horizontal navigation layout"},null,8,["modelValue"]),l(w,{modelValue:e.$root.layoutHorizontalSecondary,"onUpdate:modelValue":t[1]||(t[1]=t=>e.$root.layoutHorizontalSecondary=t),name:"horizontalSecondary",description:"Show horizontal secondary menu"},null,8,["modelValue"]),l(w,{modelValue:e.$root.layoutDisplay,"onUpdate:modelValue":t[2]||(t[2]=t=>e.$root.layoutDisplay=t),name:"display",description:"Switch layout type",options:["block","flex","grid"]},null,8,["modelValue"]),l(w,{modelValue:e.$root.layoutIcons,"onUpdate:modelValue":t[3]||(t[3]=t=>e.$root.layoutIcons=t),name:"icons",description:"Display icons in the vertical navigation enabling a compact menu when collapsed"},null,8,["modelValue"]),l(w,{modelValue:e.$root.layoutCollapsable,"onUpdate:modelValue":t[4]||(t[4]=t=>e.$root.layoutCollapsable=t),name:"collapsable",description:"Collapse the vertical navigation menu"},null,8,["modelValue"]),l(w,{modelValue:e.$root.layoutNomargin,"onUpdate:modelValue":t[5]||(t[5]=t=>e.$root.layoutNomargin=t),name:"nomargin",description:"Disable margins in the main container"},null,8,["modelValue"]),l(w,{modelValue:e.$root.layoutDisabled,"onUpdate:modelValue":t[6]||(t[6]=t=>e.$root.layoutDisabled=t),name:"disabled",description:"Disable all layout elements"},null,8,["modelValue"])])),_:1},8,["component-props"]),h,n("pre",null,[n("code",{class:"lang-html",textContent:r(b.vueroutersample)},null,8,y)]),f,n("pre",null,[n("code",{class:"lang-html",textContent:r(b.tertiarymenusample)},null,8,g)])])])};export{t as default};

import{M as e,W as o,l as t,I as a}from"./index.2d8ee88c.js";const n={name:"drawer-page",data:()=>({drawerProps:e.props,drawerGroupProps:o.props,drawerNotificationProps:t.props,bellProps:a.props})},r=window.Vue.createElementVNode,l=window.Vue.createTextVNode,i=window.Vue.resolveComponent,d=window.Vue.createVNode,u=window.Vue.withCtx,c=window.Vue.createStaticVNode,p=window.Vue.openBlock,s=window.Vue.createElementBlock,m={class:"page"},w=r("header",null,[r("h1",null,[l("Notifications Drawer "),r("code",null,"<pf-drawer>")])],-1),f=r("p",null,[l("This component implements a content delivery system such as events, tasks and alerts. It is designed to contain a number of "),r("code",null,"<pf-drawer-group>"),l("s which can each have a number of "),r("code",null,"<pf-drawer-notification>"),l("s.")],-1),V=r("h4",null,"Related documentation",-1),h=r("ol",null,[r("li",null,[r("a",{href:"https://www.patternfly.org/v3/pattern-library/communication/notification-drawer/",target:"_blank"},"Pattern Library > Notification Drawer")])],-1),g=r("header",null,[r("h1",null,[l("Notification Bell "),r("code",null,"<pf-notification-bell>")])],-1),$=r("p",null,[l("A menu item that can be used as a toggler for the "),r("code",null,"<pf-notification-drawer>"),l(" component. Its meant to be included in the "),r("code",null,"utility-menu"),l(" slot of "),r("code",null,"<pf-layout>"),l(".")],-1),b=r("header",null,[r("h1",null,[l("Drawer Group "),r("code",null,"<pf-drawer-group>")])],-1),N=r("p",null,[l("A collapsible container for a number of "),r("code",null,"<pf-drawer-notification>"),l("s.")],-1),y=c('<header><h1>Drawer Group Action <code>&lt;pf-drawer-group-action&gt;</code></h1><span class="label label-default">functional</span></header><section><p>Styled button for the <code>#actions</code> slot of <code>&lt;pf-drawer-group&gt;</code>.</p></section><header><h1>Drawer Notification <code>&lt;pf-drawer-notification&gt;</code></h1></header>',3),U=r("p",null,"A single notification/event/message.",-1);n.render=function(e,o,t,a,n,l){const c=i("props-row"),v=i("props-table"),G=i("slots-row"),P=i("slots-table");return p(),s("article",m,[w,r("section",null,[f,V,h,d(v,{"component-props":n.drawerProps},{default:u((()=>[d(c,{modelValue:e.$root.drawer.hidden,"onUpdate:modelValue":o[0]||(o[0]=o=>e.$root.drawer.hidden=o),name:"hidden",description:"Controls the visibility state of the drawer."},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawer.allowExpand,"onUpdate:modelValue":o[1]||(o[1]=o=>e.$root.drawer.allowExpand=o),name:"allowExpand",description:"Whether the drawer can be expanded in size or not."},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawer.title,"onUpdate:modelValue":o[2]||(o[2]=o=>e.$root.drawer.title=o),name:"title",description:"A title for the container."},null,8,["modelValue"])])),_:1},8,["component-props"])]),g,r("section",null,[$,d(v,{"component-props":n.bellProps},{default:u((()=>[d(c,{modelValue:e.$root.drawer.updates,"onUpdate:modelValue":o[3]||(o[3]=o=>e.$root.drawer.updates=o),name:"updates",description:'Controls the badge indicator on the notification icon. Use "true" to show an empty badge indicator. Any other string value will be displayed inside the badge (it\'s better to use a badge content with the vertival layout).'},null,8,["modelValue"])])),_:1},8,["component-props"])]),b,r("section",null,[N,d(v,{"component-props":n.drawerGroupProps},{default:u((()=>[d(c,{modelValue:e.$root.drawerGroup.title,"onUpdate:modelValue":o[4]||(o[4]=o=>e.$root.drawerGroup.title=o),name:"title",description:"Group header title."},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawerGroup.counter,"onUpdate:modelValue":o[5]||(o[5]=o=>e.$root.drawerGroup.counter=o),name:"counter",description:"Display a counter in the group header."},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawerGroup.loading,"onUpdate:modelValue":o[6]||(o[6]=o=>e.$root.drawerGroup.loading=o),name:"loading",description:"Show a loading indicator."},null,8,["modelValue"])])),_:1},8,["component-props"]),d(P,{readonly:""},{default:u((()=>[d(G,{name:"default",description:"Used to contain <code>&lt;pf-drawer-notification&gt;</code>s"}),d(G,{name:"actions",description:"Used to contain <code>&lt;pf-drawer-group-action&gt;</code>s"})])),_:1})]),y,r("section",null,[U,d(v,{"component-props":n.drawerNotificationProps},{default:u((()=>[d(c,{modelValue:e.$root.drawerNotification.action,"onUpdate:modelValue":o[7]||(o[7]=o=>e.$root.drawerNotification.action=o),name:"action",description:"Action button definition.",code:""},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawerNotification.actions,"onUpdate:modelValue":o[8]||(o[8]=o=>e.$root.drawerNotification.actions=o),name:"actions",description:"List of actions displayed in a dropdown.",code:""},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawerNotification.message,"onUpdate:modelValue":o[9]||(o[9]=o=>e.$root.drawerNotification.message=o),name:"message",description:"The notification message."},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawerNotification.date,"onUpdate:modelValue":o[10]||(o[10]=o=>e.$root.drawerNotification.date=o),name:"date",description:"Event date."},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawerNotification.time,"onUpdate:modelValue":o[11]||(o[11]=o=>e.$root.drawerNotification.time=o),name:"time",description:"Event time."},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawerNotification.unread,"onUpdate:modelValue":o[12]||(o[12]=o=>e.$root.drawerNotification.unread=o),name:"unread",description:"Unread state."},null,8,["modelValue"]),d(c,{modelValue:e.$root.drawerNotification.type,"onUpdate:modelValue":o[13]||(o[13]=o=>e.$root.drawerNotification.type=o),name:"type",description:"The type of notification. Can be on of: info, success, warning, danger.",options:["info","success","warning","danger"]},null,8,["modelValue"])])),_:1},8,["component-props"])])])};export{n as default};

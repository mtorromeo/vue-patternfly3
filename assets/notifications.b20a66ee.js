import{P as t,A as n}from"./index.405f16c9.js";const o={name:"notifications-page",components:{"pf-notification":t},data:()=>({notificationProps:t.props,notification:{delay:t.props.delay.default,type:t.props.type.default,toast:t.props.toast.default,persistent:t.props.persistent.default,message:"<strong>Test</strong> notification",action:{name:"",title:"",button:"link",emit:""}},notificationsProps:n.props,notifications:{message:"<strong>Test</strong> notification",type:"info",toast:n.props.toast.default,persistent:n.props.toast.persistent}}),methods:{notify(){this.$refs.notifications.add(this.notifications.message,this.notifications.type)}}},i=window.Vue.createElementVNode,e=window.Vue.createTextVNode,a=window.Vue.resolveComponent,l=window.Vue.createVNode,s=window.Vue.withCtx,c=window.Vue.vModelText,d=window.Vue.withDirectives,r=window.Vue.vModelSelect,p=window.Vue.createStaticVNode,u=window.Vue.openBlock,f=window.Vue.createElementBlock,m={class:"page"},h=i("header",null,[i("h1",null,[e("Notifications "),i("code",null,"<pf-notifications>")])],-1),y=p('<p>This component is a container for other <code>&lt;pf-notification&gt;</code> components. Notifications can be placed inside its default slot or added programmatically by calling the <code>add()</code> method.</p><p>Notification dismissals will be handled automatically for the notifications added programmatically. For <code>&lt;pf-notification&gt;</code> components placed inside the default slot or without using the <code>&lt;pf-notifications&gt;</code> container you will have to listen to the <code>@dismiss</code> event.</p><h4>Related documentation</h4><ol><li><a href="https://www.patternfly.org/v3/pattern-library/communication/toast-notifications/#/api" target="_blank">Pattern Library &gt; Communication &gt; Toast Notifications</a></li><li><a href="https://www.patternfly.org/v3/pattern-library/communication/inline-notifications/#/api" target="_blank">Pattern Library &gt; Communication &gt; Inline Notifications</a></li></ol>',4),g=i("h3",null,"Methods",-1),w={class:"table table-striped table-hover"},V=i("thead",null,[i("tr",null,[i("th",null,"Name"),i("th",null,"Argument"),i("th",null,"Description"),i("th",{colspan:"2"}," Value ")])],-1),b=i("td",{rowspan:"2"}," add() ",-1),v=i("td",null,"notification",-1),T=i("td",null,[e("The notification message string or an "),i("code",null,"Object"),e(" with every "),i("code",null,"<pf-notification>"),e(" property to use.")],-1),U={rowspan:"2"},k=[i("span",{class:"fa fa-play-circle"},null,-1),e(" Run ")],N=i("td",null,"type",-1),x=i("td",null,[i("code",null,"<pf-notification>"),e("'s type")],-1),C=[i("option",{value:"info"}," info ",-1),i("option",{value:"success"}," success ",-1),i("option",{value:"warning"}," warning ",-1),i("option",{value:"danger"}," danger ",-1)],S=i("header",null,[i("h1",null,[e("Notification "),i("code",null,"<pf-notification>")])],-1),P=["innerHTML"],M=i("td",null,"action.name",-1),_=i("td",null,"The text of an action button to add to the notification. This is mandatory to enable the action.",-1),A=i("td",null,"String",-1),D=i("td",null,null,-1),L=i("td",null,"action.title",-1),j=i("td",null,"The title for the action button.",-1),B=i("td",null,"String",-1),E=i("td",null,null,-1),H=i("td",null,"action.button",-1),R=i("td",null,"Controls the type of button to use for the action.",-1),F=i("td",null,"String",-1),I=i("td",null,"link",-1),O=[i("option",{value:"link"}," link ",-1),i("option",{value:"default"}," default ",-1),i("option",{value:"primary"}," primary ",-1),i("option",{value:"info"}," info ",-1),i("option",{value:"success"}," success ",-1),i("option",{value:"warning"}," warning ",-1),i("option",{value:"danger"}," danger ",-1)],Y=i("td",null,"action.emit",-1),$=i("td",null,"The name of an event that should be emitted when the action is triggered.",-1),q=i("td",null,"String",-1),z=i("td",null,"action",-1);o.render=function(t,n,o,e,p,G){const J=a("pf-notifications"),K=a("props-row"),Q=a("props-table"),W=a("pf-notification"),X=a("slots-row"),Z=a("slots-table");return u(),f("article",m,[h,i("section",null,[y,l(J,{ref:"notifications",toast:p.notifications.toast,persistent:p.notifications.persistent},null,8,["toast","persistent"]),l(Q,{"component-props":p.notificationsProps},{default:s((()=>[l(K,{modelValue:p.notifications.toast,"onUpdate:modelValue":n[0]||(n[0]=t=>p.notifications.toast=t),name:"toast",description:"Defines this as a container for toast notifications. The property is propagated to every <code>&lt;pf-notification&gt;</code> added programmatically. You are responsible to keep the property in sync for <code>&lt;pf-notification&gt;</code>s inserted manually."},null,8,["modelValue"]),l(K,{modelValue:p.notifications.persistent,"onUpdate:modelValue":n[1]||(n[1]=t=>p.notifications.persistent=t),name:"persistent",description:"Default value for the persistent parameter in the add() method. A persistent notification will remain visible until manually dismissed."},null,8,["modelValue"])])),_:1},8,["component-props"]),g,i("table",w,[V,i("tbody",null,[i("tr",null,[b,v,T,i("td",null,[d(i("input",{"onUpdate:modelValue":n[2]||(n[2]=t=>p.notifications.message=t),type:"text",class:"form-control"},null,512),[[c,p.notifications.message]])]),i("td",U,[i("button",{class:"btn btn-default",onClick:n[3]||(n[3]=(...t)=>G.notify&&G.notify(...t))},k)])]),i("tr",null,[N,x,i("td",null,[d(i("select",{"onUpdate:modelValue":n[4]||(n[4]=t=>p.notifications.type=t),class:"form-control"},C,512),[[r,p.notifications.type]])])])])])]),S,i("section",null,[l(W,{delay:p.notification.delay,type:p.notification.type,toast:p.notification.toast,persistent:p.notification.persistent,action:p.notification.action},{default:s((()=>[i("span",{innerHTML:p.notification.message},null,8,P)])),_:1},8,["delay","type","toast","persistent","action"]),l(Q,{"component-props":p.notificationProps},{default:s((()=>[l(K,{modelValue:p.notification.delay,"onUpdate:modelValue":n[5]||(n[5]=t=>p.notification.delay=t),name:"delay",description:"The delay in milliseconds after which a toast notification is automatically dismissed if not persistent."},null,8,["modelValue"]),l(K,{modelValue:p.notification.type,"onUpdate:modelValue":n[6]||(n[6]=t=>p.notification.type=t),name:"type",description:"The type of notification. Can be on of: info, success, warning, danger.",options:["info","success","warning","danger"]},null,8,["modelValue"]),l(K,{modelValue:p.notification.toast,"onUpdate:modelValue":n[7]||(n[7]=t=>p.notification.toast=t),name:"toast",description:"Make this a toast notification. These need to be placed inside a container with the <code>toast-notifications-list-pf</code> CSS class or inside a <code>&lt;pf-notifications&gt;</code> component."},null,8,["modelValue"]),l(K,{modelValue:p.notification.persistent,"onUpdate:modelValue":n[8]||(n[8]=t=>p.notification.persistent=t),name:"persistent",description:"A persistent notification will remain visible until manually dismissed."},null,8,["modelValue"]),i("tr",null,[M,_,A,D,i("td",null,[d(i("input",{"onUpdate:modelValue":n[9]||(n[9]=t=>p.notification.action.name=t),class:"form-control",type:"text"},null,512),[[c,p.notification.action.name]])])]),i("tr",null,[L,j,B,E,i("td",null,[d(i("input",{"onUpdate:modelValue":n[10]||(n[10]=t=>p.notification.action.title=t),class:"form-control",type:"text"},null,512),[[c,p.notification.action.title]])])]),i("tr",null,[H,R,F,I,i("td",null,[d(i("select",{"onUpdate:modelValue":n[11]||(n[11]=t=>p.notification.action.button=t),class:"form-control"},O,512),[[r,p.notification.action.button]])])]),i("tr",null,[Y,$,q,z,i("td",null,[d(i("input",{"onUpdate:modelValue":n[12]||(n[12]=t=>p.notification.action.emit=t),class:"form-control",type:"text"},null,512),[[c,p.notification.action.emit]])])])])),_:1},8,["component-props"]),l(Z,null,{default:s((()=>[l(X,{modelValue:p.notification.message,"onUpdate:modelValue":n[13]||(n[13]=t=>p.notification.message=t),name:"default",description:"The notification message"},null,8,["modelValue"])])),_:1})])])};export{o as default};

import{M as o}from"./index.cc08d189.js";const t={name:"modals-page",data:()=>({modalProps:o.props,modal:{show:!1,title:"Modal Title",outsideClose:!0,confirmButton:"OK",cancelButton:"Cancel",slotDefault:{enabled:!0,content:'<form class="form-horizontal">\n  <div class="form-group">\n    <label class="col-sm-3 control-label" for="textInput">Field One</label>\n    <div class="col-sm-9">\n      <input type="text" id="textInput" class="form-control"></div>\n  </div>\n  <div class="form-group">\n    <label class="col-sm-3 control-label" for="textInput2">Field Two</label>\n    <div class="col-sm-9">\n      <input type="text" id="textInput2" class="form-control"></div>\n  </div>\n  <div class="form-group">\n    <label class="col-sm-3 control-label" for="textInput3">Field Three</label>\n    <div class="col-sm-9">\n      <input type="text" id="textInput3" class="form-control">\n    </div>\n  </div>\n</form>'},slotFooter:{enabled:!1,content:'<button class="btn btn-default" type="button" title="Title 1">\n  Action 1\n</button>\n<button class="btn btn-default" type="button" title="Title 2">\n  Action 2\n</button>\n<button class="btn btn-danger" type="button" title="Title 3">\n  Action 3\n</button>'}}}),methods:{addFilter(o,t){const e={};e[o.title]=t,this.toolbar.filters.push(e)}}},e=window.Vue.createElementVNode,l=window.Vue.createTextVNode,n=window.Vue.openBlock,a=window.Vue.createElementBlock,d=window.Vue.createCommentVNode,i=window.Vue.resolveComponent,s=window.Vue.withCtx,u=window.Vue.createSlots,r=window.Vue.createVNode,c={class:"page"},m=e("header",null,[e("h1",null,[l("Modal "),e("code",null,"<pf-modal>")])],-1),p=e("p",null,"This component implements a toolbar with controls for filters, sorting, searching and custom actions to interact with a data view.",-1),b=e("h4",null,"Related documentation",-1),f=e("ol",null,[e("li",null,[e("a",{href:"https://www.patternfly.org/v3/pattern-library/forms-and-controls/modal-overlay/",target:"_blank"},"Pattern Library > Form and Controls > Modal Overlay")])],-1),w=["innerHTML"],V=["innerHTML"],h=l(" Open Modal ");t.render=function(o,t,l,v,y,x){const T=i("pf-modal"),g=i("pf-button"),C=i("props-row"),B=i("props-table"),F=i("slots-row"),M=i("slots-table");return n(),a("article",c,[m,e("section",null,[p,b,f,r(T,{show:y.modal.show,title:y.modal.title,"outside-close":y.modal.outsideClose,"confirm-button":y.modal.confirmButton,"cancel-button":y.modal.cancelButton,onClose:t[0]||(t[0]=o=>y.modal.show=!1)},u({default:s((()=>[y.modal.slotDefault.enabled?(n(),a("div",{key:0,innerHTML:y.modal.slotDefault.content},null,8,w)):d("",!0)])),_:2},[y.modal.slotFooter.enabled?{name:"footer",fn:s((()=>[e("div",{innerHTML:y.modal.slotFooter.content},null,8,V)]))}:void 0]),1032,["show","title","outside-close","confirm-button","cancel-button"]),r(g,{variant:"primary",onClick:t[1]||(t[1]=o=>y.modal.show=!0)},{default:s((()=>[h])),_:1}),r(B,{"component-props":y.modalProps},{default:s((()=>[r(C,{modelValue:y.modal.title,"onUpdate:modelValue":t[2]||(t[2]=o=>y.modal.title=o),name:"title",description:"Modal title or empty/undefined to disable it"},null,8,["modelValue"]),r(C,{modelValue:y.modal.outsideClose,"onUpdate:modelValue":t[3]||(t[3]=o=>y.modal.outsideClose=o),name:"outsideClose",description:"Allow clicking outside of the modal to close it"},null,8,["modelValue"]),r(C,{modelValue:y.modal.confirmButton,"onUpdate:modelValue":t[4]||(t[4]=o=>y.modal.confirmButton=o),name:"confirmButton",description:"Text for the confirmation button or empty/undefined to disable it"},null,8,["modelValue"]),r(C,{modelValue:y.modal.cancelButton,"onUpdate:modelValue":t[5]||(t[5]=o=>y.modal.cancelButton=o),name:"cancelButton",description:"Text for the cancellation button or empty/undefined to disable it"},null,8,["modelValue"])])),_:1},8,["component-props"]),r(M,{toggle:""},{default:s((()=>[r(F,{enabled:y.modal.slotDefault.enabled,"onUpdate:enabled":t[6]||(t[6]=o=>y.modal.slotDefault.enabled=o),modelValue:y.modal.slotDefault.content,"onUpdate:modelValue":t[7]||(t[7]=o=>y.modal.slotDefault.content=o),name:"default",description:"Modal content"},null,8,["enabled","modelValue"]),r(F,{enabled:y.modal.slotFooter.enabled,"onUpdate:enabled":t[8]||(t[8]=o=>y.modal.slotFooter.enabled=o),modelValue:y.modal.slotFooter.content,"onUpdate:modelValue":t[9]||(t[9]=o=>y.modal.slotFooter.content=o),name:"footer",description:"Custom footer content can be placed here (overrides default buttons)"},null,8,["enabled","modelValue"])])),_:1})])])};export{t as default};

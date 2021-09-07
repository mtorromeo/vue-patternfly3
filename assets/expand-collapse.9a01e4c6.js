const e={name:"expand-collapse"},n=window.Vue.createElementVNode,l=window.Vue.createTextVNode,t=window.Vue.resolveComponent,o=window.Vue.withCtx,a=window.Vue.createVNode,d=window.Vue.openBlock,r=window.Vue.createElementBlock,p={class:"page"},c=n("header",null,[n("h1",null,[l("Expand Collapse "),n("code",null,"pf-expand-collapse")])],-1),i=n("p",null,"This is an implementation of the Expand/Collapse Section pattern.",-1),s=n("h4",null,"Related documentation",-1),u=n("ol",null,[n("li",null,[n("a",{href:"https://www.patternfly.org/v3/pattern-library/forms-and-controls/expand-collapse-section/",target:"_blank"},"Pattern Library > Form and Controls > Expand/Collapse Section")])],-1),w={class:"demo-container"},h=n("p",null,"Well done! The component takes 100% width by default and aligns the link to the left or center.",-1),m=n("p",null,"And other text comes here.",-1);e.render=function(e,l,f,x,V,C){const b=t("pf-expand-collapse");return d(),r("article",p,[c,n("section",null,[i,s,u,n("div",w,[a(b,{bordered:""},{default:o((()=>[h,m])),_:1})])])])};export{e as default};

import{h as e,K as o,S as a}from"./index.071199cf.js";const t={name:"cards-page",data:()=>({cardcontainersample:'<div class="cards-pf container-fluid container-cards-pf">\n  <div class="row row-cards-pf">\n    <div class="col-md-4">\n      <pf-card></pf-card>\n    </div>\n    <div class="col-md-4">\n      <pf-card></pf-card>\n    </div>\n    <div class="col-md-4">\n      <pf-card></pf-card>\n    </div>\n  </div>\n</div>\n',cardProps:e.props,card:{title:"Test title",subTitle:"",footNote:"",footHref:"",footIcon:"fa-bell",accented:!0,showTitlesSeparator:!0},aggcardProps:o.props,aggcard:{title:"Issues",count:4,href:"#",icon:"fa-warning",layout:"",accented:!0},notcardProps:a.props,notcard:{count:3,href:"#",icon:"pficon-error-circle-o"}})},n=window.Vue.createElementVNode,l=window.Vue.createTextVNode,r=window.Vue.toDisplayString,d=window.Vue.resolveComponent,c=window.Vue.withCtx,i=window.Vue.createVNode,s=window.Vue.openBlock,u=window.Vue.createElementBlock,p={class:"page"},f=n("header",null,[n("h1",null,[l("Card "),n("code",null,"<pf-card>")])],-1),m=n("p",null,"This card components are designed for dashboard views and are meant to be placed on a darker background which can be implemented like in the following snippet.",-1),g=["textContent"],h=n("h4",null,"Related documentation",-1),V=n("ol",null,[n("li",null,[n("a",{href:"https://www.patternfly.org/v3/pattern-library/dashboard/dashboard-card/#/api",target:"_blank"},"Pattern Library > Dashboard Cards")])],-1),w={class:"cards-pf container-fluid container-cards-pf"},b={class:"row row-cards-pf"},y={class:"col-md-5 col-lg-3"},v=l(" Test content "),T={class:"col-md-5 col-lg-3"},S=l(' <template slot="default"> '),U=l(' <template slot="header"> '),k=l(' <template slot="footer"> '),C=n("header",null,[n("h1",null,[l("Aggregate Status Card "),n("code",null,"<pf-aggregate-status-card>")]),n("span",{class:"label label-default"},"functional"),n("br"),n("h1",null,[l("Card Notification "),n("code",null,"<pf-card-notification>")]),n("span",{class:"label label-default"},"functional")],-1),N=n("p",null,[l("The aggregated status card shows a total number of objects and an aggregated status for those objects. The component works by using a container "),n("code",null,"<pf-aggregate-status-card>"),l(" with one or more "),n("code",null,"<pf-card-notification>"),l(" components inside.")],-1),I=n("h4",null,"Related documentation",-1),_=n("ol",null,[n("li",null,[n("a",{href:"https://www.patternfly.org/v3/pattern-library/cards/aggregate-status-card/#/api",target:"_blank"},"Pattern Library > Aggregate Status Card")])],-1),P={class:"cards-pf container-fluid container-cards-pf"},x={class:"row-cards-pf"};t.render=function(e,o,a,t,l,H){const D=d("pf-card"),j=d("props-row"),A=d("props-table"),L=d("slots-row"),B=d("slots-table"),E=d("pf-card-notification"),M=d("pf-aggregate-status-card");return s(),u("article",p,[f,n("section",null,[m,n("pre",null,[n("code",{class:"language-markup",textContent:r(l.cardcontainersample)},null,8,g)]),h,V,n("div",w,[n("div",b,[n("div",y,[i(D,{title:l.card.title,"sub-title":l.card.subTitle,"foot-note":l.card.footNote,"foot-href":l.card.footHref,"foot-icon":l.card.footIcon,accented:l.card.accented,"show-titles-separator":l.card.showTitlesSeparator},{default:c((()=>[v])),_:1},8,["title","sub-title","foot-note","foot-href","foot-icon","accented","show-titles-separator"])]),n("div",T,[i(D,{title:l.card.title,"sub-title":l.card.subTitle,"foot-note":l.card.footNote,"foot-href":l.card.footHref,"foot-icon":l.card.footIcon,accented:l.card.accented,"show-titles-separator":l.card.showTitlesSeparator},{default:c((()=>[S])),header:c((()=>[U])),footer:c((()=>[k])),_:1},8,["title","sub-title","foot-note","foot-href","foot-icon","accented","show-titles-separator"])])])]),i(A,{"component-props":l.cardProps},{default:c((()=>[i(j,{modelValue:l.card.title,"onUpdate:modelValue":o[0]||(o[0]=e=>l.card.title=e),name:"title",description:"Title for the card"},null,8,["modelValue"]),i(j,{modelValue:l.card.subTitle,"onUpdate:modelValue":o[1]||(o[1]=e=>l.card.subTitle=e),name:"subTitle",description:"Subtitle for the card"},null,8,["modelValue"]),i(j,{modelValue:l.card.footNote,"onUpdate:modelValue":o[2]||(o[2]=e=>l.card.footNote=e),name:"footNote",description:"Display this text in a footer of the card"},null,8,["modelValue"]),i(j,{modelValue:l.card.footHref,"onUpdate:modelValue":o[3]||(o[3]=e=>l.card.footHref=e),name:"footHref",description:"Make the footer a link to this href"},null,8,["modelValue"]),i(j,{modelValue:l.card.footIcon,"onUpdate:modelValue":o[4]||(o[4]=e=>l.card.footIcon=e),name:"footIcon",description:"Footer icon represented by icon font CSS classes"},null,8,["modelValue"]),i(j,{modelValue:l.card.accented,"onUpdate:modelValue":o[5]||(o[5]=e=>l.card.accented=e),name:"accented",description:"Display accent on top of card"},null,8,["modelValue"]),i(j,{modelValue:l.card.showTitlesSeparator,"onUpdate:modelValue":o[6]||(o[6]=e=>l.card.showTitlesSeparator=e),name:"showTitlesSeparator",description:"Show separation between title and content"},null,8,["modelValue"])])),_:1},8,["component-props"]),i(B,{readonly:""},{default:c((()=>[i(L,{name:"default",description:"The body of the card"}),i(L,{name:"header",description:"Can be used to override the header's content"}),i(L,{name:"footer",description:"Can be used to override the footer's content"})])),_:1})]),C,n("section",null,[N,I,_,n("div",P,[n("div",x,[i(M,{class:"col-md-5 col-lg-3",title:l.aggcard.title,count:l.aggcard.count,href:l.aggcard.href,icon:l.aggcard.icon,layout:l.aggcard.layout,accented:l.aggcard.accented},{default:c((()=>[i(E,{icon:l.notcard.icon,href:l.notcard.href,count:l.notcard.count},null,8,["icon","href","count"]),i(E,{icon:"pficon pficon-warning-triangle-o",href:"#",count:"1"})])),_:1},8,["title","count","href","icon","layout","accented"])])]),i(A,{title:"pf-aggregate-status-card props","component-props":l.aggcardProps},{default:c((()=>[i(j,{modelValue:l.aggcard.title,"onUpdate:modelValue":o[7]||(o[7]=e=>l.aggcard.title=e),name:"title",description:"Name of the represented items"},null,8,["modelValue"]),i(j,{modelValue:l.aggcard.count,"onUpdate:modelValue":o[8]||(o[8]=e=>l.aggcard.count=e),name:"count",description:"Number of items represented"},null,8,["modelValue"]),i(j,{modelValue:l.aggcard.href,"onUpdate:modelValue":o[9]||(o[9]=e=>l.aggcard.href=e),name:"href",description:"Make the title a link to this href"},null,8,["modelValue"]),i(j,{modelValue:l.aggcard.icon,"onUpdate:modelValue":o[10]||(o[10]=e=>l.aggcard.icon=e),name:"icon",description:"Icon represented by icon font CSS classes"},null,8,["modelValue"]),i(j,{modelValue:l.aggcard.layout,"onUpdate:modelValue":o[11]||(o[11]=e=>l.aggcard.layout=e),name:"layout",options:["","mini","tall"],description:"Alternative layout"},null,8,["modelValue"]),i(j,{modelValue:l.aggcard.accented,"onUpdate:modelValue":o[12]||(o[12]=e=>l.aggcard.accented=e),name:"accented",description:"Display accent on top of card"},null,8,["modelValue"])])),_:1},8,["component-props"]),i(A,{title:"pf-card-notification props","component-props":l.notcardProps},{default:c((()=>[i(j,{modelValue:l.notcard.count,"onUpdate:modelValue":o[13]||(o[13]=e=>l.notcard.count=e),name:"count",description:"Number of items represented"},null,8,["modelValue"]),i(j,{modelValue:l.notcard.href,"onUpdate:modelValue":o[14]||(o[14]=e=>l.notcard.href=e),name:"href",description:"Link to this href"},null,8,["modelValue"]),i(j,{modelValue:l.notcard.icon,"onUpdate:modelValue":o[15]||(o[15]=e=>l.notcard.icon=e),name:"icon",description:"Icon represented by icon font CSS classes"},null,8,["modelValue"])])),_:1},8,["component-props"])])])};export{t as default};

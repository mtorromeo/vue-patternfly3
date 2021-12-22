var e={name:"vue-patternfly",version:"0.2.10",description:"PatternFly 3 components for Vue 3",main:"dist/vue-patternfly.umd.js",module:"dist/vue-patternfly.es.js",exports:{".":{import:"./dist/vue-patternfly.es.js",require:"./dist/vue-patternfly.umd.js"},"./vue-patternfly.css":"./dist/vue-patternfly.css"},directories:{test:"test"},scripts:{dev:"vite",build:"vite build",prepublishOnly:"npm run build"},files:["dist/"],keywords:["vue","patternfly"],author:"Massimiliano Torromeo <massimiliano.torromeo@gmail.com>",license:"MIT",repository:{type:"git",url:"git+https://github.com/mtorromeo/vue-patternfly.git"},bugs:{url:"https://github.com/mtorromeo/vue-patternfly/issues"},homepage:"https://mtorromeo.github.io/vue-patternfly/",dependencies:{patternfly:"^3.59.1"},devDependencies:{"@vitejs/plugin-vue":"^1.3.0","@vue/compiler-sfc":"^3.0.5","@vue/eslint-config-prettier":"^6.0.0",eslint:"^7.32.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.24.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^5.1.0","eslint-plugin-vue":"^7.16.0","fs-extra":"^10.0.0","lodash-es":"^4.17.21",prettier:"^2.2.1","resize-observer-polyfill":"^1.5.1",sass:"^1.39.0",vite:"^2.4.4"},peerDependencies:{vue:"^3"}};const t={name:"home-page",data:()=>({version:e.version}),computed:{github:()=>e.repository.url.replace(/^git\+|\.git$/g,"")}},n=window.Vue.createElementVNode,i=window.Vue.createTextVNode,s=window.Vue.resolveComponent,r=window.Vue.withCtx,o=window.Vue.createVNode,l=window.Vue.toDisplayString,a=window.Vue.openBlock,u=window.Vue.createElementBlock,p={class:"home"},d={class:"jumbotron"},c=n("h1",null,"Vue PatternFly",-1),m=n("p",{class:"description"}," PatternFly 3 components for Vue 3 ",-1),f=n("p",null,[i(" The project is in a "),n("strong",null,"passively maintained"),i(" state and was formerly implemented for Vue 2 but has been ported to Vue 3 in order to facilitate the transition of applications to Vue 3 and subsequently to the new "),n("a",{href:"https://github.com/mtorromeo/vue-patternfly4"},"PatternFly 4 version of this library"),i(". Only bug fixes will be applied to this version as all development is now done on vue-patternfly4. ")],-1),v=n("a",{class:"btn btn-primary"},"Get Started",-1),g=["href"],y=[n("span",{class:"fa fa-github"},null,-1),i(" GITHUB")],h={class:"version"},b={class:"container-fluid"},w=n("h2",null,"About VuePatternFly",-1),V=n("p",null,"VuePatternFly implements a set of reusable Vue components following the PatternFly design patterns and usage guidelines to facilitate building of enterprise IT applications.",-1),x={class:"row row-cards-pf"},j={class:"col-xs-12 col-md-6"},k=n("div",null,"«Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.»",-1),F=n("div",null,[n("a",{href:"https://vuejs.org/",target:"_blank"},[i("WebSite "),n("span",{class:"fa fa-external-link"})])],-1),P={class:"col-xs-12 col-md-6"},T=n("div",null,"«PatternFly is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides and an active community that helps support it all.»",-1),_=n("div",null,[n("a",{href:"https://www.patternfly.org/v3/",target:"_blank"},[i("WebSite "),n("span",{class:"fa fa-external-link"})])],-1);t.render=function(e,t,i,I,S,A){const B=s("router-link"),D=s("pf-card");return a(),u("article",p,[n("header",d,[c,m,f,n("p",null,[o(B,{to:"/get-started",exact:!0},{default:r((()=>[v])),_:1}),n("a",{href:A.github,class:"btn btn-default"},y,8,g)]),n("p",h," Version "+l(S.version),1)]),n("section",b,[w,V,n("div",x,[n("div",j,[o(D,{title:"About Vue"},{default:r((()=>[k,F])),_:1})]),n("div",P,[o(D,{title:"About PatternFly"},{default:r((()=>[T,_])),_:1})])])])])};export{t as default};

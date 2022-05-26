var e={name:"vue-patternfly",version:"0.3.5",description:"PatternFly 3 components for Vue 3",main:"dist/vue-patternfly.umd.js",module:"dist/vue-patternfly.es.js",typings:"dist/types/index.d.ts",exports:{".":{import:"./dist/vue-patternfly.es.js",require:"./dist/vue-patternfly.umd.js"},"./vue-patternfly.css":"./dist/vue-patternfly.css"},directories:{test:"test"},scripts:{dev:"vite",build:"vite build && vue-tsc --declaration --emitDeclarationOnly",prepack:"npm run build"},files:["dist/","typings/global.d.ts"],keywords:["vue","patternfly"],author:"Massimiliano Torromeo <massimiliano.torromeo@gmail.com>",license:"MIT",repository:{type:"git",url:"git+https://github.com/mtorromeo/vue-patternfly.git"},bugs:{url:"https://github.com/mtorromeo/vue-patternfly/issues"},homepage:"https://mtorromeo.github.io/vue-patternfly/",dependencies:{patternfly:"^3.59.1"},devDependencies:{"@types/lodash-es":"^4.17.5","@vitejs/plugin-vue":"^2.0.1","@vue/compiler-sfc":"^3.2.26","@vue/eslint-config-prettier":"^7.0.0","@vue/eslint-config-typescript":"^10.0.0",eslint:"^8.6.0","eslint-config-standard":"^16.0.3","eslint-plugin-import":"^2.24.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^6.0.0","eslint-plugin-vue":"^8.2.0","fs-extra":"^10.0.0","lodash-es":"^4.17.21",prettier:"^2.2.1","resize-observer-polyfill":"^1.5.1",sass:"^1.39.0",vite:"^2.4.4",vue:"^3.2.26","vue-router":"^4","vue-tsc":"^0.31.1"},peerDependencies:{vue:"^3"}};const t={name:"home-page",data:()=>({version:e.version}),computed:{github:()=>e.repository.url.replace(/^git\+|\.git$/g,"")}},i=window.Vue.createElementVNode,n=window.Vue.createTextVNode,s=window.Vue.resolveComponent,o=window.Vue.withCtx,r=window.Vue.createVNode,l=window.Vue.toDisplayString,a=window.Vue.openBlock,u=window.Vue.createElementBlock,p={class:"home"},d={class:"jumbotron"},c=i("h1",null,"Vue PatternFly",-1),m=i("p",{class:"description"}," PatternFly 3 components for Vue 3 ",-1),f=i("p",null,[n(" The project is in a "),i("strong",null,"passively maintained"),n(" state and was formerly implemented for Vue 2 but has been ported to Vue 3 in order to facilitate the transition of applications to Vue 3 and subsequently to the new "),i("a",{href:"https://github.com/mtorromeo/vue-patternfly4"},"PatternFly 4 version of this library"),n(". Only bug fixes will be applied to this version as all development is now done on vue-patternfly4. ")],-1),v=i("a",{class:"btn btn-primary"},"Get Started",-1),g=["href"],y=[i("span",{class:"fa fa-github"},null,-1),n(" GITHUB")],h={class:"version"},b={class:"container-fluid"},w=i("h2",null,"About VuePatternFly",-1),V=i("p",null,"VuePatternFly implements a set of reusable Vue components following the PatternFly design patterns and usage guidelines to facilitate building of enterprise IT applications.",-1),x={class:"row row-cards-pf"},k={class:"col-xs-12 col-md-6"},j=i("div",null,"«Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.»",-1),F=i("div",null,[i("a",{href:"https://vuejs.org/",target:"_blank"},[n("WebSite "),i("span",{class:"fa fa-external-link"})])],-1),P={class:"col-xs-12 col-md-6"},T=i("div",null,"«PatternFly is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides and an active community that helps support it all.»",-1),_=i("div",null,[i("a",{href:"https://www.patternfly.org/v3/",target:"_blank"},[n("WebSite "),i("span",{class:"fa fa-external-link"})])],-1);t.render=function(e,t,n,D,I,S){const A=s("router-link"),B=s("pf-card");return a(),u("article",p,[i("header",d,[c,m,f,i("p",null,[r(A,{to:"/get-started",exact:!0},{default:o((()=>[v])),_:1}),i("a",{href:S.github,class:"btn btn-default"},y,8,g)]),i("p",h," Version "+l(I.version),1)]),i("section",b,[w,V,i("div",x,[i("div",k,[r(B,{title:"About Vue"},{default:o((()=>[j,F])),_:1})]),i("div",P,[r(B,{title:"About PatternFly"},{default:o((()=>[T,_])),_:1})])])])])};export{t as default};

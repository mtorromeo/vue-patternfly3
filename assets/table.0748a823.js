import{x as e}from"./index.405f16c9.js";const t={name:"table-page",data:()=>({tableProps:e.props,table:{columns:["Id","Name","Surname","City","State"],rows:[{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"},{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"},{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"},{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"},{id:1,name:"John",surname:"Smith",city:"New York",state:"New York"},{id:2,name:"Joe",surname:"Black",city:"Miami",state:"Florida"},{id:3,name:"David",surname:"White",city:"Boston",state:"Massachusetts"}],keyName:"id",striped:!0,bordered:!0,hover:!0,selectable:!0,sortable:!0,scrollable:!1,page:1,totalItems:95,itemsPerPage:25,itemsPerPageOptions:[10,25,50,100,500],sortBy:"",sortDirection:""}})},a=window.Vue.createElementVNode,l=window.Vue.createTextVNode,o=window.Vue.toDisplayString,r=window.Vue.resolveComponent,s=window.Vue.withCtx,n=window.Vue.createVNode,d=window.Vue.createStaticVNode,i=window.Vue.openBlock,m=window.Vue.createElementBlock,u={class:"page"},c=a("header",null,[a("h1",null,[l("Table "),a("code",null,"<pf-table>")])],-1),b=a("h4",null,"Related documentation",-1),p=a("ol",null,[a("li",null,[a("a",{href:"https://www.patternfly.org/v3/pattern-library/content-views/table-view/#_",target:"_blank"},"Pattern Library > Content Views > Table View")]),a("li",null,[a("a",{href:"https://www.patternfly.org/v3/pattern-library/widgets/#tables",target:"_blank"},"Pattern Library > Widgets > Tables")])],-1),h={class:"demo-container"},w={style:{width:"50px"}},V=a("a",{href:"#",class:"btn btn-default"}," Action ",-1),y=a("li",null,[a("a",{href:"#"},"Action")],-1),g=a("li",null,[a("a",{href:"#"},"Another action")],-1),f=a("li",null,[a("a",{href:"#"},"Something else here")],-1),k=a("li",{role:"separator",class:"divider"},null,-1),P=a("li",null,[a("a",{href:"#"},"Separated link")],-1),v=l(" Footer slot "),N=d('<h3>Slots</h3><table class="table table-striped table-hover"><thead><tr><th>Name</th><th>Description</th><th>Scope properties</th></tr></thead><tbody><tr><td>default</td><td>Template for a single row of the table</td><td><code>row</code>: the row data</td></tr><tr><td>action</td><td>The action column. Should typically include a button.</td><td><code>row</code>: the row data</td></tr><tr><td>dropdown</td><td>The dropdown items of the Actions column. You should specify a list of <code>li &gt; a</code> items.</td><td><code>row</code>: the row data</td></tr><tr><td>footer</td><td>Content placed beside the pagination controls.</td><td></td></tr></tbody></table>',2);t.render=function(e,t,l,d,U,B){const S=r("pf-table"),M=r("props-row"),Y=r("props-table");return i(),m("article",u,[c,a("section",null,[b,p,a("div",h,[n(S,{page:U.table.page,"onUpdate:page":t[0]||(t[0]=e=>U.table.page=e),"items-per-page":U.table.itemsPerPage,"onUpdate:items-per-page":t[1]||(t[1]=e=>U.table.itemsPerPage=e),columns:U.table.columns,rows:U.table.rows,"key-name":U.table.keyName,"sort-by":U.table.sortBy,"onUpdate:sort-by":t[2]||(t[2]=e=>U.table.sortBy=e),"total-items":U.table.totalItems,"sort-direction":U.table.sortDirection,"onUpdate:sort-direction":t[3]||(t[3]=e=>U.table.sortDirection=e),"items-per-page-options":U.table.itemsPerPageOptions,striped:U.table.striped,bordered:U.table.bordered,hover:U.table.hover,selectable:U.table.selectable,sortable:U.table.sortable,scrollable:U.table.scrollable,style:{height:"250px"}},{default:s((({row:e})=>[a("td",w," #"+o(e.id),1),a("td",null,o(e.name),1),a("td",null,o(e.surname),1),a("td",null,o(e.city),1),a("td",null,o(e.state),1)])),action:s((()=>[V])),dropdown:s((()=>[y,g,f,k,P])),footer:s((()=>[v])),_:1},8,["page","items-per-page","columns","rows","key-name","sort-by","total-items","sort-direction","items-per-page-options","striped","bordered","hover","selectable","sortable","scrollable"])]),n(Y,{"component-props":U.tableProps},{default:s((()=>[n(M,{modelValue:U.table.striped,"onUpdate:modelValue":t[4]||(t[4]=e=>U.table.striped=e),name:"striped",description:"Striped table rows"},null,8,["modelValue"]),n(M,{modelValue:U.table.bordered,"onUpdate:modelValue":t[5]||(t[5]=e=>U.table.bordered=e),name:"bordered",description:"Borders on all sides of the table and cells"},null,8,["modelValue"]),n(M,{modelValue:U.table.hover,"onUpdate:modelValue":t[6]||(t[6]=e=>U.table.hover=e),name:"hover",description:"Enable hover state on table rows"},null,8,["modelValue"]),n(M,{modelValue:U.table.selectable,"onUpdate:modelValue":t[7]||(t[7]=e=>U.table.selectable=e),name:"selectable",description:"Make every table row selectable"},null,8,["modelValue"]),n(M,{modelValue:U.table.sortable,"onUpdate:modelValue":t[8]||(t[8]=e=>U.table.sortable=e),name:"sortable",description:"Enable sorting by table columns"},null,8,["modelValue"]),n(M,{modelValue:U.table.scrollable,"onUpdate:modelValue":t[9]||(t[9]=e=>U.table.scrollable=e),name:"scrollable",description:"Enable scrolling with fixed headers"},null,8,["modelValue"]),n(M,{modelValue:U.table.columns,"onUpdate:modelValue":t[10]||(t[10]=e=>U.table.columns=e),name:"columns",description:"List of columns",code:""},null,8,["modelValue"]),n(M,{modelValue:U.table.rows,"onUpdate:modelValue":t[11]||(t[11]=e=>U.table.rows=e),name:"rows",description:"List of rows",code:""},null,8,["modelValue"]),n(M,{modelValue:U.table.keyName,"onUpdate:modelValue":t[12]||(t[12]=e=>U.table.keyName=e),name:"keyName",description:"Name of the property of each row to use as unique key (v-for)"},null,8,["modelValue"]),n(M,{modelValue:U.table.page,"onUpdate:modelValue":t[13]||(t[13]=e=>U.table.page=e),name:"page",description:"Current page number"},null,8,["modelValue"]),n(M,{modelValue:U.table.totalItems,"onUpdate:modelValue":t[14]||(t[14]=e=>U.table.totalItems=e),name:"totalItems",description:"Total number of items (used to calculate the number of pages)"},null,8,["modelValue"]),n(M,{modelValue:U.table.itemsPerPage,"onUpdate:modelValue":t[15]||(t[15]=e=>U.table.itemsPerPage=e),name:"itemsPerPage",description:"Number of items to display per page (0 = disable paging controls)"},null,8,["modelValue"]),n(M,{modelValue:U.table.itemsPerPageOptions,"onUpdate:modelValue":t[16]||(t[16]=e=>U.table.itemsPerPageOptions=e),name:"itemsPerPageOptions",description:"Available options to change the number of items per page"},null,8,["modelValue"])])),_:1},8,["component-props"]),N])])};export{t as default};

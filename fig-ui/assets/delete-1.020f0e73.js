import{d as x,_ as h,r as k,o as v,c as u,a as g,b as y,n as w,u as c,e as m,f as b,g as d,w as B}from"./index.e644b6a5.js";const C=t=>(t.install=r=>{r.component(t.name,t)},t);function n(t,r,s,o){return r&&(t+=`-${r}`),s&&(t+=`__${s}`),o&&(t+=`--${o}`),t}function F(t){return{b:e=>n(t,e,"",""),e:e=>e?n(t,"",e,""):"",m:e=>e?n(t,"","",e):"",be:(e,a)=>e&&a?n(t,e,a,""):"",bm:(e,a)=>e&&a?n(t,e,"",a):"",em:(e,a)=>e&&a?n(t,"",e,a):"",bem:(e,a,f)=>e&&a&&f?n(t,e,a,f):"",is:(e,a)=>a?`is-${e}`:""}}const $=t=>{const r=`f-${t}`;return F(r)};const E=m('<div class="trash" data-v-56e29c61><div class="top" data-v-56e29c61><div class="paper" data-v-56e29c61></div></div><div class="box" data-v-56e29c61></div><div class="check" data-v-56e29c61><svg viewBox="0 0 8 6" data-v-56e29c61><polyline points="1 3.4 2.71428571 5 7 1" data-v-56e29c61></polyline></svg></div></div>',1),Y=b("\u5220\u9664"),V=x({name:"DeleteButtonV1",inheritAttrs:!1}),z=Object.assign(V,{props:{type:{type:String,default:"primary"}},emits:["update:collapse"],setup(t,{emit:r}){const s=$("button"),o=k(!1);function i(){o.value=!0,setTimeout(()=>o.value=!1,3200),r("click")}return(l,_)=>(v(),u("button",{class:w([c(s).is("delete",o.value),c(s).e("delete"),c(s).em("delete",t.type)]),onClick:i},[E,g("span",null,[y(l.$slots,"default",{},()=>[Y],!0)])],2))}});var X=h(z,[["__scopeId","data-v-56e29c61"],["__file","/home/runner/work/fig-ui/fig-ui/packages/fig-ui/components/button/delete-1.vue"]]);const p=C(X);const j={class:"demo"},D=b("\u81EA\u5B9A\u4E49\u6587\u6848"),I={__name:"delete-1",setup(t){const r=()=>{console.log("click")};return(s,o)=>(v(),u("div",j,[d(c(p),{onClick:r}),d(c(p),null,{default:B(()=>[D]),_:1}),d(c(p),{type:"danger"})]))}};var Z=h(I,[["__scopeId","data-v-d6f301a4"],["__file","/home/runner/work/fig-ui/fig-ui/packages/fig-ui/demo/button/delete-1.vue"]]);export{Z as default};
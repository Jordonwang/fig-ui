import{_ as c,g as i,r as l,o as h,c as d,u as p}from"./index.2d0de6c4.js";import"./index.17e3bc28.js";const m={get S(){return 1},get s(){return this.S*1e3},get m(){return this.s*60},get h(){return this.m*60},get d(){return this.h*24},get w(){return this.d*7},get mo(){return this.d*30},get y(){return this.d*365}};function g(a,e="h"){const t=m[e],u=new Date;return[new Date(u.getTime()-a*t),u]}function r(a,e,t,u){return{type:u,text:t,value:g(a,e)}}function _(){return[r(.5,"h","\u6700\u8FD1\u534A\u5C0F\u65F6","last0.5Hour"),r(1,"h","\u6700\u8FD1\u4E00\u5C0F\u65F6","last1Hour"),r(3,"h","\u6700\u8FD1\u4E09\u5C0F\u65F6","last3Hour"),r(6,"h","\u6700\u8FD1\u516D\u5C0F\u65F6","last6Hour"),r(1,"d","\u6700\u8FD1\u4E00\u5929","last1Day"),r(3,"d","\u6700\u8FD1\u4E09\u5929","last3Day"),r(1,"w","\u6700\u8FD1\u4E00\u5468","last1Week")]}function D(){return _().map(function(e){const{value:t,...u}=e;return{...u,value(){return t}}})}const F={name:"DataPickerShortcuts"},f=Object.assign(F,{setup(a){const e=D(),t=i();return(u,s)=>{const o=l("el-date-picker");return h(),d(o,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=n=>t.value=n),type:"daterange",shortcuts:p(e),placeholder:"Pick a date"},null,8,["modelValue","shortcuts"])}}});var S=c(f,[["__file","/Users/wangxuqiao/Desktop/Code/Jordon/much-more-design-main/packages/element-plus/demo/data-picker/data-picker-shortcuts.vue"]]);export{S as default};
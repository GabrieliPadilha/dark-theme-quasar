import{r as d,c as p,w as v,a as g,b as o,Q as h,u as y,o as _,d as l,e as w,f as Q,g as b,h as x,i as V,j as k,k as q,l as u,m as L,n as N,p as A,q as c,t as D,s as O,v as S,x as T,y as B,z as C,A as P}from"./vendor.e5e2d059.js";const z=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}};z();const F=u("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),H=c(" Title "),I={class:"q-gutter-md",style:{"max-width":"300px"}},U=u("p",null,"Selecione a hora do dia",-1),$={class:"flex"},j={setup(f){const i=y(),n=d(!1),t=d(12),e=p(()=>t.value<6||t.value>=19);return v(e,a=>{i.dark.set(a)}),(a,s)=>(_(),g(h,{view:"hHh lpR fFf"},{default:o(()=>[l(V,{elevated:"",class:"bg-primary text-white"},{default:o(()=>[l(w,null,{default:o(()=>[l(Q,{dense:"",flat:"",round:"",icon:"mdi-menu",onClick:s[0]||(s[0]=r=>n.value=!n.value)}),l(b,null,{default:o(()=>[l(x,null,{default:o(()=>[F]),_:1}),H]),_:1})]),_:1})]),_:1}),l(k,{"show-if-above":"",modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=r=>n.value=r),side:"left",bordered:""},null,8,["modelValue"]),l(T,null,{default:o(()=>[l(q,{padding:""},{default:o(()=>[u("div",I,[U,u("div",$,[l(L,{modelValue:t.value,"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),min:0,max:23.5,markers:"",step:.5,"selection-color":"transparent","marker-labels":"","switch-marker-labels-side":""},{"marker-label-group":o(({markerMap:r})=>[u("div",{class:N([r[t.value].classes,"flex no-wrap items-center"]),style:A(r[t.value].style)},[c(D(t.value.toFixed(1))+"h ",1),l(O,{class:"q-ml-xs",name:S(e)?"mdi-weather-night":"mdi-white-balance-sunny"},null,8,["name"])],6)]),_:1},8,["modelValue","max","step"])])])]),_:1})]),_:1})]),_:1}))}},m=B(j);m.use(C,{plugins:{},lang:P});m.mount("#app");
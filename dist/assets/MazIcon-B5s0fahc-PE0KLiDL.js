import{d as b,r as f,b as v,e as T,w as k,o as p,c as g,f as s,m as H,F as $,L as C,g as F}from"./index-BJ62XOCM.js";const G=["innerHTML"],q=b({__name:"MazIcon",props:{src:{type:String,default:void 0},path:{type:String,default:void 0},name:{type:String,default:void 0},size:{type:String,default:void 0},title:{type:String,default:void 0},transformSource:{type:Function,default:i=>i}},emits:["loaded","unloaded","error"],setup(i,{emit:h}){const o=i,c=h,u={},l=f(),d=f();function y(){try{return C("mazIconPath")}catch{return}}const m=v(()=>o.path??y()),w=v(()=>o.src?o.src:m.value?`${m.value}/${o.name}.svg`:`/${o.name}.svg`);T(()=>{!o.name&&!o.src&&console.error('[maz-ui](MazIcon) you should provide "name" or "src" as prop')});function S(e,n){const t=e.querySelectorAll("title");if(t.length>0)t[0].textContent=n;else{const r=document.createElementNS("http://www.w3.org/2000/svg","title");r.textContent=n,e.append(r)}}function E(e){return Object.keys(e).reduce((n,t)=>(e[t]!==!1&&e[t]!==null&&e[t]!==void 0&&(n[t]=e[t]),n),{})}function L(e){const n={},t=e.attributes;if(!t)return n;for(let r=t.length-1;r>=0;r--)n[t[r].name]=t[r].value;return n}function M(e){let n=e.cloneNode(!0);return n=o.transformSource(e),o.title&&S(n,o.title),e.innerHTML}async function x(e){u[e]||(u[e]=z(e));try{l.value=await u[e],await F(),c("loaded",d.value)}catch(n){l.value&&(l.value=void 0,c("unloaded")),delete u[e],c("error",n)}}function z(e){return new Promise((n,t)=>{const r=new XMLHttpRequest;r.open("GET",e,!0),r.addEventListener("load",()=>{if(r.status>=200&&r.status<400)try{let a=new DOMParser().parseFromString(r.responseText,"text/xml").querySelectorAll("svg")[0];a?(a=o.transformSource(a),n(a)):t(new Error('Loaded file is not valid SVG"'))}catch(a){t(a)}else t(new Error("Error loading SVG"))}),r.addEventListener("error",a=>t(a)),r.send()})}return k(()=>x(w.value)),(e,n)=>(p(),g($,null,[s(" eslint-disable vue/no-v-html "),s(" eslint-disable vue/html-self-closing "),l.value?(p(),g("svg",H({key:0,ref_key:"svgElem",ref:d,width:"1em",height:"1em"},{...L(l.value),...E(e.$attrs)},{style:`font-size: ${i.size}`,innerHTML:M(l.value)}),null,16,G)):s("v-if",!0),s(" eslint-enable vue/no-v-html "),s(" eslint-enable vue/html-self-closing ")],2112))}});export{q as default};

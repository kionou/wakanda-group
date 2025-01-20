import{x as E,d as N,y as S,z as $,b as o,r as A,o as v,c as p,a as t,m as D,s as n,B as I,n as c,q as M,C as P,D as b,f as T,E as q}from"./index-BJ62XOCM.js";import F from"./check-C9Q_W85g-DwG0BdZw.js";const K=["for","aria-checked"],L=["id","checked","disabled","name"],R={class:"m-checkbox__text"},U=N({inheritAttrs:!1,__name:"MazCheckbox",props:{style:{default:void 0},class:{default:void 0},modelValue:{default:void 0},id:{default:void 0},color:{default:"primary"},value:{type:[String,Number,Boolean],default:void 0},name:{default:"m-checkbox"},size:{default:"md"},label:{default:void 0},disabled:{type:Boolean,default:!1},error:{type:Boolean},success:{type:Boolean},warning:{type:Boolean},hint:{}},emits:["update:model-value","change","blur","focus"],setup(x,{emit:h}){S(e=>({"1807a958":V.value,"7dffd3f6":y.value,"6b75359a":g.value,"2fd35bf6":k.value}));const a=x,r=h,u=$({componentName:"MazCheckbox",providedId:a.id}),d=o(()=>typeof a.value!="boolean"&&Array.isArray(a.modelValue)?a.modelValue.includes(a.value):typeof a.modelValue=="boolean"?a.modelValue:!1),y=o(()=>{switch(a.size){case"xl":return"2.25rem";case"lg":return"2rem";case"sm":return"1.425rem";case"xs":return"1.325rem";case"mini":return"1.2rem";default:return"1.625rem"}}),z=o(()=>{switch(a.size){case"xl":return"maz-text-2xl";case"lg":return"maz-text-xl";case"sm":return"maz-text-base";case"xs":return"maz-text-sm";case"mini":return"maz-text-xs";default:return"maz-text-lg"}}),V=o(()=>`var(--maz-color-${a.color}-contrast)`),g=o(()=>`var(--maz-color-${a.color})`),k=o(()=>a.error?"var(--maz-color-danger)":a.warning?"var(--maz-color-warning)":a.success?"var(--maz-color-success)":["black","transparent"].includes(a.color)?"var(--maz-color-muted)":`var(--maz-color-${a.color}-alpha)`);function w(e){["Space"].includes(e.code)&&(e.preventDefault(),i(a.value??!a.modelValue))}function B(e){return typeof e=="boolean"&&(typeof a.modelValue=="boolean"||a.modelValue===void 0||a.modelValue===null)?!a.modelValue:Array.isArray(a.modelValue)&&typeof e!="boolean"?a.modelValue.includes(e)?a.modelValue.filter(l=>l!==e):[...a.modelValue,e]:[e]}function i(e){const l=B(e);r("update:model-value",l),r("change",l)}const s=A();function C(e){var l;(l=s.value)==null||l.dispatchEvent(new Event("blur")),r("blur",e)}function _(e){var l;(l=s.value)==null||l.dispatchEvent(new Event("focus")),r("focus",e)}return(e,l)=>(v(),p("label",{for:n(u),class:c(["m-checkbox",[{"--disabled":e.disabled,"--error":e.error,"--warning":e.warning,"--success":e.success},a.class]]),tabindex:"0",style:q(e.style),role:"checkbox","aria-checked":d.value,onKeydown:w,onBlur:C,onFocus:_},[t("input",D({id:n(u),ref_key:"inputRef",ref:s,checked:d.value},e.$attrs,{tabindex:"-1",disabled:e.disabled,name:e.name,type:"checkbox",onChange:l[0]||(l[0]=m=>{var f;return i(e.value??((f=m==null?void 0:m.target)==null?void 0:f.checked))})}),null,16,L),t("span",null,[I(n(F),{class:c(["check-icon",z.value])},null,8,["class"])]),t("div",R,[M(e.$slots,"default",{value:e.value},()=>[P(b(e.label),1)],!0),e.hint?(v(),p("span",{key:0,class:c(["m-checkbox__hint",{"--error":e.error,"--success":e.success,"--warning":e.warning}])},b(e.hint),3)):T("v-if",!0)])],46,K))}}),H=E(U,[["__scopeId","data-v-779dd731"]]);export{H as default};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MazSpinner-3ooF5FSo-BjZQZBKs.js","assets/index-BJ62XOCM.js","assets/index-DUREr0fG.css","assets/MazSpinner-TKBjL_aI.css","assets/MazIcon-BDGxCy9M-DZ9AOrLc.js"])))=>i.map(i=>d[i]);
import{J as A,d as O,u as P,h as j,j as x,b as l,o as n,k as a,l as D,c as d,n as s,f as t,q as u,s as c,t as r,v as g,_ as h}from"./index-BJ62XOCM.js";const M=O({__name:"MazBtn",props:{variant:{default:"button"},size:{default:"md"},color:{default:"primary"},type:{default:"button"},rounded:{type:Boolean},roundedSize:{default:"lg"},noRounded:{type:Boolean},outline:{type:Boolean},pastel:{type:Boolean},block:{type:Boolean},noUnderline:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},fab:{type:Boolean},icon:{type:[String,Function,Object],default:void 0},leftIcon:{type:[String,Function,Object],default:void 0},rightIcon:{type:[String,Function,Object],default:void 0},noPadding:{type:Boolean},noElevation:{type:Boolean},contentClass:{default:void 0}},setup(_){const e=_,k=g(()=>h(()=>import("./MazSpinner-3ooF5FSo-BjZQZBKs.js"),__vite__mapDeps([0,1,2,3]))),f=g(()=>h(()=>import("./MazIcon-BDGxCy9M-DZ9AOrLc.js"),__vite__mapDeps([4,1,2]))),{href:B,to:z}=P(),v=j();x(()=>{e.icon&&!e.fab&&console.error('[maz-ui](MazBtn) the prop "icon" must be used only with "fab" props')});const p=l(()=>B?"a":z?"router-link":"button"),I=l(()=>e.pastel?`--${e.color}-pastel`:e.outline?`--${e.color}-outline`:`--${e.color}`),b=l(()=>(e.loading||e.disabled)&&p.value==="button"),$=l(()=>b.value?"--cursor-default":"--cursor-pointer"),C=l(()=>`--is-${e.variant}`),i=l(()=>e.loading&&e.variant==="button"),y=l(()=>!!v["left-icon"]||e.leftIcon),m=l(()=>!!v["right-icon"]||e.rightIcon),S=l(()=>y.value||m.value),E=l(()=>e.fab&&(e.icon||!!v.icon)),T=l(()=>p.value==="button"?e.type:void 0);return(o,R)=>(n(),a(r(p.value),{disabled:b.value||void 0,class:s(["m-btn",[`--${o.size}`,!o.fab&&!o.rounded&&o.roundedSize&&`--rounded-${o.roundedSize}`,I.value,$.value,C.value,{"--block":o.block,"--no-underline":o.noUnderline,"--fab":o.fab,"--loading":o.loading,"--disabled":b.value,"--icon":S.value,"--rounded":o.rounded,"--no-rounded":o.noRounded,"--no-padding":o.noPadding,"--no-elevation":o.noElevation}]]),type:T.value},{default:D(()=>[y.value?(n(),d("div",{key:0,class:s(["m-btn__icon-left maz-flex maz-flex-center",{"maz-invisible":i.value}])},[t(`
        @slot left-icon - The icon to display on the left of the button
      `),u(o.$slots,"left-icon",{},()=>[typeof o.leftIcon=="string"?(n(),a(c(f),{key:0,name:o.leftIcon},null,8,["name"])):o.leftIcon?(n(),a(r(o.leftIcon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),E.value?(n(),d("div",{key:1,class:s(["m-btn__icon",{"maz-invisible":i.value}])},[t(`
        @slot icon - The icon to display on the fab button
      `),u(o.$slots,"icon",{},()=>[typeof o.icon=="string"?(n(),a(c(f),{key:0,name:o.icon},null,8,["name"])):o.icon?(n(),a(r(o.icon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),o.$slots.default?(n(),d("span",{key:2,class:s([{"maz-invisible":i.value},o.contentClass])},[t(`
        @slot default - The content of the button
      `),u(o.$slots,"default",{},void 0,!0)],2)):t("v-if",!0),m.value?(n(),d("div",{key:3,class:s(["m-btn__icon-right",{"maz-invisible":i.value}])},[t(`
        @slot right-icon - The icon to display on the right of the button
      `),u(o.$slots,"right-icon",{},()=>[typeof o.rightIcon=="string"?(n(),a(c(f),{key:0,name:o.rightIcon},null,8,["name"])):o.rightIcon?(n(),a(r(o.rightIcon),{key:1})):t("v-if",!0)],!0)],2)):t("v-if",!0),i.value?(n(),a(c(k),{key:4,class:"m-btn-loader",size:"2em",color:o.color},null,8,["color"])):t("v-if",!0)]),_:3},8,["disabled","class","type"]))}}),U=A(M,[["__scopeId","data-v-792f66c0"]]);export{U as default};

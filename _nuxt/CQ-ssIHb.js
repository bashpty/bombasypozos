import{d as r,ap as p,ak as u,c as t,o as l,b as m,an as f,G as d}from"./CeYl1e72.js";const _=r({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(o){p(e=>({"4a062a55":i.value}));const n=u(),s=o,c=t(()=>((n.nuxtIcon?.aliases||{})[s.name]||s.name).replace(/^i-/,"")),i=t(()=>`url('https://api.iconify.design/${c.value.replace(":","/")}.svg')`),a=t(()=>{if(!s.size&&typeof n.nuxtIcon?.size=="boolean"&&!n.nuxtIcon?.size)return;const e=s.size||n.nuxtIcon?.size||"1em";return String(Number(e))===e?`${e}px`:e});return(e,x)=>(l(),m("span",{style:f({width:a.value,height:a.value})},null,4))}}),S=d(_,[["__scopeId","data-v-7bcb43ce"]]);export{S as default};

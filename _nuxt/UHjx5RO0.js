import{l as I,n as L,Y as F,a1 as m,a2 as U,d as P,a3 as _,c as M,a4 as q,a5 as H,p as V,a6 as W,a7 as Q,a8 as R,a9 as T,aa as k,ab as Y,ac as E,s as J,y as X,ad as b,q as x,ae as Z,af as $,ag as B,ah as z}from"./CeYl1e72.js";function A(t,r){if(t)return t;let l=r??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function G(t,r){let l=I(A(t.value.type,t.value.as));return L(()=>{l.value=A(t.value.type,t.value.as)}),F(()=>{var u;l.value||m(r)&&m(r)instanceof HTMLButtonElement&&!((u=m(r))!=null&&u.hasAttribute("type"))&&(l.value="button")}),l}function N(t){return[t.screenX,t.screenY]}function ee(){let t=I([-1,-1]);return{wasMoved(r){let l=N(r);return t.value[0]===l[0]&&t.value[1]===l[1]?!1:(t.value=l,!0)},update(r){t.value=N(r)}}}function te({container:t,accept:r,walk:l,enabled:u}){F(()=>{let s=t.value;if(!s||u!==void 0&&!u.value)return;let n=U(t);if(!n)return;let e=Object.assign(v=>r(v),{acceptNode:r}),c=n.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,e,!1);for(;c.nextNode();)l(c.currentNode)})}function ae(t){throw new Error("Unexpected object: "+t)}var h=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(h||{});function ne(t,r){let l=r.resolveItems();if(l.length<=0)return null;let u=r.resolveActiveIndex(),s=u??-1;switch(t.focus){case 0:{for(let n=0;n<l.length;++n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 1:{s===-1&&(s=l.length);for(let n=s-1;n>=0;--n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 2:{for(let n=s+1;n<l.length;++n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 3:{for(let n=l.length-1;n>=0;--n)if(!r.resolveDisabled(l[n],n,l))return n;return u}case 4:{for(let n=0;n<l.length;++n)if(r.resolveId(l[n],n,l)===t.id)return n;return u}case 5:return null;default:ae(t)}}let C=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function O(t){var r,l;let u=(r=t.innerText)!=null?r:"",s=t.cloneNode(!0);if(!(s instanceof HTMLElement))return u;let n=!1;for(let c of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))c.remove(),n=!0;let e=n?(l=s.innerText)!=null?l:"":u;return C.test(e)&&(e=e.replace(C,"")),e}function le(t){let r=t.getAttribute("aria-label");if(typeof r=="string")return r.trim();let l=t.getAttribute("aria-labelledby");if(l){let u=l.split(" ").map(s=>{let n=document.getElementById(s);if(n){let e=n.getAttribute("aria-label");return typeof e=="string"?e.trim():O(n).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return O(t).trim()}function re(t){let r=I(""),l=I("");return()=>{let u=m(t);if(!u)return"";let s=u.innerText;if(r.value===s)return l.value;let n=le(u).trim().toLowerCase();return r.value=s,l.value=n,n}}var ue=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ue||{}),oe=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(oe||{});function se(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let j=Symbol("MenuContext");function w(t){let r=X(j,null);if(r===null){let l=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,w),l}return r}let ce=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:r,attrs:l}){let u=I(1),s=I(null),n=I(null),e=I([]),c=I(""),v=I(null),S=I(1);function y(a=i=>i){let i=v.value!==null?e.value[v.value]:null,o=z(a(e.value.slice()),g=>m(g.dataRef.domRef)),f=i?o.indexOf(i):null;return f===-1&&(f=null),{items:o,activeItemIndex:f}}let d={menuState:u,buttonRef:s,itemsRef:n,items:e,searchQuery:c,activeItemIndex:v,activationTrigger:S,closeMenu:()=>{u.value=1,v.value=null},openMenu:()=>u.value=0,goToItem(a,i,o){let f=y(),g=ne(a===h.Specific?{focus:h.Specific,id:i}:{focus:a},{resolveItems:()=>f.items,resolveActiveIndex:()=>f.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.disabled});c.value="",v.value=g,S.value=o??1,e.value=f.items},search(a){let i=c.value!==""?0:1;c.value+=a.toLowerCase();let o=(v.value!==null?e.value.slice(v.value+i).concat(e.value.slice(0,v.value+i)):e.value).find(g=>g.dataRef.textValue.startsWith(c.value)&&!g.dataRef.disabled),f=o?e.value.indexOf(o):-1;f===-1||f===v.value||(v.value=f,S.value=1)},clearSearch(){c.value=""},registerItem(a,i){let o=y(f=>[...f,{id:a,dataRef:i}]);e.value=o.items,v.value=o.activeItemIndex,S.value=1},unregisterItem(a){let i=y(o=>{let f=o.findIndex(g=>g.id===a);return f!==-1&&o.splice(f,1),o});e.value=i.items,v.value=i.activeItemIndex,S.value=1}};return _([s,n],(a,i)=>{var o;d.closeMenu(),q(i,H.Loose)||(a.preventDefault(),(o=m(s))==null||o.focus())},M(()=>u.value===0)),V(j,d),W(M(()=>Q(u.value,{0:R.Open,1:R.Closed}))),()=>{let a={open:u.value===0,close:d.closeMenu};return T({ourProps:{},theirProps:t,slot:a,slots:r,attrs:l,name:"Menu"})}}}),ve=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(t,{attrs:r,slots:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-button-${k()}`,e=w("MenuButton");u({el:e.buttonRef,$el:e.buttonRef});function c(d){switch(d.key){case b.Space:case b.Enter:case b.ArrowDown:d.preventDefault(),d.stopPropagation(),e.openMenu(),x(()=>{var a;(a=m(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(h.First)});break;case b.ArrowUp:d.preventDefault(),d.stopPropagation(),e.openMenu(),x(()=>{var a;(a=m(e.itemsRef))==null||a.focus({preventScroll:!0}),e.goToItem(h.Last)});break}}function v(d){switch(d.key){case b.Space:d.preventDefault();break}}function S(d){t.disabled||(e.menuState.value===0?(e.closeMenu(),x(()=>{var a;return(a=m(e.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),e.openMenu(),se(()=>{var a;return(a=m(e.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let y=G(M(()=>({as:t.as,type:r.type})),e.buttonRef);return()=>{var d;let a={open:e.menuState.value===0},{...i}=t,o={ref:e.buttonRef,id:n,type:y.value,"aria-haspopup":"menu","aria-controls":(d=m(e.itemsRef))==null?void 0:d.id,"aria-expanded":e.menuState.value===0,onKeydown:c,onKeyup:v,onClick:S};return T({ourProps:o,theirProps:i,slot:a,attrs:r,slots:l,name:"MenuButton"})}}}),de=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(t,{attrs:r,slots:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-items-${k()}`,e=w("MenuItems"),c=I(null);u({el:e.itemsRef,$el:e.itemsRef}),te({container:M(()=>m(e.itemsRef)),enabled:M(()=>e.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function v(a){var i;switch(c.value&&clearTimeout(c.value),a.key){case b.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeItemIndex.value!==null){let o=e.items.value[e.activeItemIndex.value];(i=m(o.dataRef.domRef))==null||i.click()}e.closeMenu(),B(m(e.buttonRef));break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(h.Next);case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(h.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToItem(h.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToItem(h.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),e.closeMenu(),x(()=>{var o;return(o=m(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),e.closeMenu(),x(()=>Z(m(e.buttonRef),a.shiftKey?$.Previous:$.Next));break;default:a.key.length===1&&(e.search(a.key),c.value=setTimeout(()=>e.clearSearch(),350));break}}function S(a){switch(a.key){case b.Space:a.preventDefault();break}}let y=Y(),d=M(()=>y!==null?(y.value&R.Open)===R.Open:e.menuState.value===0);return()=>{var a,i;let o={open:e.menuState.value===0},{...f}=t,g={"aria-activedescendant":e.activeItemIndex.value===null||(a=e.items.value[e.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(i=m(e.buttonRef))==null?void 0:i.id,id:n,onKeydown:v,onKeyup:S,role:"menu",tabIndex:0,ref:e.itemsRef};return T({ourProps:g,theirProps:f,slot:o,attrs:r,slots:l,features:E.RenderStrategy|E.Static,visible:d.value,name:"MenuItems"})}}}),fe=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(t,{slots:r,attrs:l,expose:u}){var s;let n=(s=t.id)!=null?s:`headlessui-menu-item-${k()}`,e=w("MenuItem"),c=I(null);u({el:c,$el:c});let v=M(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===n:!1),S=re(c),y=M(()=>({disabled:t.disabled,get textValue(){return S()},domRef:c}));L(()=>e.registerItem(n,y)),J(()=>e.unregisterItem(n)),F(()=>{e.menuState.value===0&&v.value&&e.activationTrigger.value!==0&&x(()=>{var p,D;return(D=(p=m(c))==null?void 0:p.scrollIntoView)==null?void 0:D.call(p,{block:"nearest"})})});function d(p){if(t.disabled)return p.preventDefault();e.closeMenu(),B(m(e.buttonRef))}function a(){if(t.disabled)return e.goToItem(h.Nothing);e.goToItem(h.Specific,n)}let i=ee();function o(p){i.update(p)}function f(p){i.wasMoved(p)&&(t.disabled||v.value||e.goToItem(h.Specific,n,0))}function g(p){i.wasMoved(p)&&(t.disabled||v.value&&e.goToItem(h.Nothing))}return()=>{let{disabled:p,...D}=t,K={active:v.value,disabled:p,close:e.closeMenu};return T({ourProps:{id:n,ref:c,role:"menuitem",tabIndex:p===!0?void 0:-1,"aria-disabled":p===!0?!0:void 0,onClick:d,onFocus:a,onPointerenter:o,onMouseenter:o,onPointermove:f,onMousemove:f,onPointerleave:g,onMouseleave:g},theirProps:{...l,...D},slot:K,attrs:l,slots:r,name:"MenuItem"})}}});export{de as M,ve as S,fe as b,ce as g};

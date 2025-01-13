import{i as ue,g as j,j as bt,k as yt,m as x,l as Re,c as g,n as F,q as Ne,t as Se,v as _t,x as kt,y as Ct,p as b,z as O,A as k,I as q,B as Q,C as fe,D as ee,E as St,F as K,a as B,G as jt,T as xt,b as i,h as P,H as I,J as p,K as wt,L as Y,M as de,N as Ue,O as De,P as Pt,Q as he,R as It,S as Oe,U as pe,V as Me,s as W,W as ae,X as Bt,Y as $t,Z as We,_ as ve,$ as Fe,a0 as Vt,a1 as je,a2 as qe,a3 as Tt,a4 as xe,a5 as At,a6 as Lt,a7 as we,a8 as Pe,a9 as zt,aa as Et,ab as Ie,w as ce,ac as Be,ad as $e}from"./index-Cire4l8y.js";import{a as H,m as Ye,u as He}from"./tag-DSE0RmHQ.js";const Rt=["top","bottom"],Nt=["start","end","left","right"];function Ut(e,t){let[n,a]=e.split(" ");return a||(a=ue(Rt,n)?"start":ue(Nt,n)?"top":"center"),{side:Ve(n,t),align:Ve(a,t)}}function Ve(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return j()({name:n??bt(yt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...x()},setup(a,r){let{slots:s}=r;return()=>{var o;return Re(a.tag,{class:[e,a.class],style:a.style},(o=s.default)==null?void 0:o.call(s))}}})}function be(e){return Ne(()=>{const t=[],n={};if(e.value.background)if(Se(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&_t(e.value.background)){const a=kt(e.value.background);if(a.a==null||a.a===1){const r=Ct(a);n.color=r,n.caretColor=r}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(Se(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function ye(e,t){const n=g(()=>({text:F(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=be(n);return{textColorClasses:a,textColorStyles:r}}function ie(e,t){const n=g(()=>({background:F(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:r}=be(n);return{backgroundColorClasses:a,backgroundColorStyles:r}}const Ot=["x-small","small","default","large","x-large"],Xe=b({size:{type:[String,Number],default:"default"}},"size");function Ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return Ne(()=>{let n,a;return ue(Ot,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:k(e.size),height:k(e.size)}),{sizeClasses:n,sizeStyles:a}})}const Mt=b({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:q,...x(),...Xe(),...H({tag:"i"}),...Q()},"VIcon"),L=j()({name:"VIcon",props:Mt(),setup(e,t){let{attrs:n,slots:a}=t;const r=fe(),{themeClasses:s}=ee(e),{iconData:o}=St(g(()=>r.value||e.icon)),{sizeClasses:c}=Ge(e),{textColorClasses:l,textColorStyles:d}=ye(K(e,"color"));return B(()=>{var h,m;const u=(h=a.default)==null?void 0:h.call(a);u&&(r.value=(m=jt(u).filter(_=>_.type===xt&&_.children&&typeof _.children=="string")[0])==null?void 0:m.children);const f=!!(n.onClick||n.onClickOnce);return i(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,c.value,l.value,{"v-icon--clickable":f,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[c.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},d.value,e.style],role:f?"button":void 0,"aria-hidden":!f,tabindex:f?e.disabled?-1:0:void 0},{default:()=>[u]})}),{}}}),Wt=["href"],Ft={class:"next-project"},qt={key:0,class:"next-project-title"},Yt={key:1,class:"next-project-title"},Ke={__name:"NextProject",props:{nextProject:String,isIntroduction:{type:Boolean,required:!1},isLastProject:{type:Boolean,required:!1}},setup(e){const t=e;return(n,a)=>(P(),I("a",{href:"#"+t.nextProject,style:{"text-decoration":"none","scroll-behavior":"smooth"}},[p("div",Ft,[i(L,{color:"black",icon:"mdi-menu-down",size:"x-large",class:"mx-16"}),e.isIntroduction?(P(),I("span",qt,"My Projects")):(P(),I("span",Yt,"Next Project")),i(L,{color:"black",icon:"mdi-menu-down",size:"x-large",class:"mx-16"})])],8,Wt))}},Ht={class:"icon-wrapper"},Xt={key:0},Ze={__name:"Technologies",props:{technologies:{type:Array,required:!0,validator:e=>e.every(t=>typeof t=="string")},isIntroduction:{type:Boolean,required:!1}},setup(e){const t={react:"mdi-react",vue:"mdi-vuejs",javascript:"mdi-language-javascript",typescript:"mdi-language-typescript",sass:"mdi-sass",node:"mdi-nodejs",nest:"mdi-nodejs",firebase:"mdi-firebase",mongo:"mdi-database-outline",git:"mdi-git"};return(n,a)=>(P(!0),I(Y,null,wt(e.technologies,r=>(P(),I("div",Ht,[i(L,{class:"ma-2 opacity-1",color:"#212121",icon:t[r],size:"70"},null,8,["icon"]),e.isIntroduction?(P(),I("p",Xt,de(r),1)):Ue("",!0)]))),256))}},Gt=j()({name:"VCardActions",props:x(),setup(e,t){let{slots:n}=t;return De({VBtn:{slim:!0,variant:"text"}}),B(()=>{var a;return i("div",{class:["v-card-actions",e.class],style:e.style},[(a=n.default)==null?void 0:a.call(n)])}),{}}}),Kt=b({opacity:[Number,String],...x(),...H()},"VCardSubtitle"),Zt=j()({name:"VCardSubtitle",props:Kt(),setup(e,t){let{slots:n}=t;return B(()=>i(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},n)),{}}}),Je=Dt("v-card-title"),Jt=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),se=j(!1)({name:"VDefaultsProvider",props:Jt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:r,reset:s,root:o,scoped:c}=Pt(e);return De(a,{reset:s,root:o,scoped:c,disabled:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function Qt(e){return{aspectStyles:g(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Qe=b({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...x(),...Ye()},"VResponsive"),Te=j()({name:"VResponsive",props:Qe(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=Qt(e),{dimensionStyles:r}=He(e);return B(()=>{var s;return i("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[i("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&i("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),oe=b({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{roundedClasses:g(()=>{const a=F(e)?e.value:e.rounded,r=F(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const o of String(a).split(" "))s.push(`rounded-${o}`);else(r||a===!1)&&s.push("rounded-0");return s})}}const en=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ne=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:r,group:s,...o}=e,{component:c=s?It:Oe,...l}=typeof a=="object"?a:{};return Re(c,he(typeof a=="string"?{name:r?"":a}:l,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:s}).filter(d=>{let[u,f]=d;return f!==void 0})),o),n)};function tn(e,t){if(!pe)return;const n=t.modifiers||{},a=t.value,{handler:r,options:s}=typeof a=="object"?a:{handler:a,options:{}},o=new IntersectionObserver(function(){var f;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const d=(f=e._observe)==null?void 0:f[t.instance.$.uid];if(!d)return;const u=c.some(h=>h.isIntersecting);r&&(!n.quiet||d.init)&&(!n.once||u||d.init)&&r(u,c,l),u&&n.once?et(e,t):d.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)}function et(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const nn={mounted:tn,unmounted:et},an=b({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Qe(),...x(),...oe(),...en()},"VImg"),_e=j()({name:"VImg",directives:{intersect:nn},props:an(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:r,backgroundColorStyles:s}=ie(K(e,"color")),{roundedClasses:o}=le(e),c=Me("VImg"),l=W(""),d=fe(),u=W(e.eager?"loading":"idle"),f=W(),h=W(),m=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=g(()=>m.value.aspect||f.value/h.value||0);ae(()=>e.src,()=>{w(u.value!=="idle")}),ae(_,(v,y)=>{!v&&y&&d.value&&C(d.value)}),Bt(()=>w());function w(v){if(!(e.eager&&v)&&!(pe&&!v&&!e.eager)){if(u.value="loading",m.value.lazySrc){const y=new Image;y.src=m.value.lazySrc,C(y,null)}m.value.src&&$t(()=>{var y;n("loadstart",((y=d.value)==null?void 0:y.currentSrc)||m.value.src),setTimeout(()=>{var $;if(!c.isUnmounted)if(($=d.value)!=null&&$.complete){if(d.value.naturalWidth||z(),u.value==="error")return;_.value||C(d.value,null),u.value==="loading"&&V()}else _.value||C(d.value),T()})})}}function V(){var v;c.isUnmounted||(T(),C(d.value),u.value="loaded",n("load",((v=d.value)==null?void 0:v.currentSrc)||m.value.src))}function z(){var v;c.isUnmounted||(u.value="error",n("error",((v=d.value)==null?void 0:v.currentSrc)||m.value.src))}function T(){const v=d.value;v&&(l.value=v.currentSrc||v.src)}let A=-1;We(()=>{clearTimeout(A)});function C(v){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const $=()=>{if(clearTimeout(A),c.isUnmounted)return;const{naturalHeight:M,naturalWidth:te}=v;M||te?(f.value=te,h.value=M):!v.complete&&u.value==="loading"&&y!=null?A=window.setTimeout($,y):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(f.value=1,h.value=1)};$()}const E=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),U=()=>{var $;if(!m.value.src||u.value==="idle")return null;const v=i("img",{class:["v-img__img",E.value],style:{objectPosition:e.position},src:m.value.src,srcset:m.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:d,onLoad:V,onError:z},null),y=($=a.sources)==null?void 0:$.call(a);return i(ne,{transition:e.transition,appear:!0},{default:()=>[ve(y?i("picture",{class:"v-img__picture"},[y,v]):v,[[Vt,u.value==="loaded"]])]})},R=()=>i(ne,{transition:e.transition},{default:()=>[m.value.lazySrc&&u.value!=="loaded"&&i("img",{class:["v-img__img","v-img__img--preload",E.value],style:{objectPosition:e.position},src:m.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),X=()=>a.placeholder?i(ne,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!a.error)&&i("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,N=()=>a.error?i(ne,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&i("div",{class:"v-img__error"},[a.error()])]}):null,G=()=>e.gradient?i("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=W(!1);{const v=ae(_,y=>{y&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),v())})}return B(()=>{const v=Te.filterProps(e);return ve(i(Te,he({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!D.value},r.value,o.value,e.class],style:[{width:k(e.width==="auto"?f.value:e.width)},s.value,e.style]},v,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>i(Y,null,[i(U,null,null),i(R,null,null),i(G,null,null),i(X,null,null),i(N,null,null)]),default:a.default}),[[Fe("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:d,state:u,naturalWidth:f,naturalHeight:h}}}),tt=b({border:[Boolean,Number,String]},"border");function nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{borderClasses:g(()=>{const a=F(e)?e.value:e.border,r=[];if(a===!0||a==="")r.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))r.push(`border-${s}`);return r})}}const sn=[null,"default","comfortable","compact"],ke=b({density:{type:String,default:"default",validator:e=>sn.includes(e)}},"density");function at(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{densityClasses:g(()=>`${t}--density-${e.density}`)}}const rn=["elevated","flat","tonal","outlined","text","plain"];function it(e,t){return i(Y,null,[e&&i("span",{key:"overlay",class:`${t}__overlay`},null),i("span",{key:"underlay",class:`${t}__underlay`},null)])}const st=b({color:String,variant:{type:String,default:"elevated",validator:e=>rn.includes(e)}},"variant");function rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();const n=g(()=>{const{variant:s}=je(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:r}=be(g(()=>{const{variant:s,color:o}=je(e);return{[["elevated","flat"].includes(s)?"background":"text"]:o}}));return{colorClasses:a,colorStyles:r,variantClasses:n}}const on=b({start:Boolean,end:Boolean,icon:q,image:String,text:String,...tt(),...x(),...ke(),...oe(),...Xe(),...H(),...Q(),...st({variant:"flat"})},"VAvatar"),Ae=j()({name:"VAvatar",props:on(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=ee(e),{borderClasses:r}=nt(e),{colorClasses:s,colorStyles:o,variantClasses:c}=rt(e),{densityClasses:l}=at(e),{roundedClasses:d}=le(e),{sizeClasses:u,sizeStyles:f}=Ge(e);return B(()=>i(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,s.value,l.value,d.value,u.value,c.value,e.class],style:[o.value,f.value,e.style]},{default:()=>[n.default?i(se,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?i(_e,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?i(L,{key:"icon",icon:e.icon},null):e.text,it(!1,"v-avatar")]})),{}}}),ln=b({appendAvatar:String,appendIcon:q,prependAvatar:String,prependIcon:q,subtitle:[String,Number],title:[String,Number],...x(),...ke()},"VCardItem"),cn=j()({name:"VCardItem",props:ln(),setup(e,t){let{slots:n}=t;return B(()=>{var d;const a=!!(e.prependAvatar||e.prependIcon),r=!!(a||n.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||n.append),c=!!(e.title!=null||n.title),l=!!(e.subtitle!=null||n.subtitle);return i("div",{class:["v-card-item",e.class],style:e.style},[r&&i("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?i(se,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):i(Y,null,[e.prependAvatar&&i(Ae,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&i(L,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),i("div",{class:"v-card-item__content"},[c&&i(Je,{key:"title"},{default:()=>{var u;return[((u=n.title)==null?void 0:u.call(n))??e.title]}}),l&&i(Zt,{key:"subtitle"},{default:()=>{var u;return[((u=n.subtitle)==null?void 0:u.call(n))??e.subtitle]}}),(d=n.default)==null?void 0:d.call(n)]),o&&i("div",{key:"append",class:"v-card-item__append"},[n.append?i(se,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):i(Y,null,[e.appendIcon&&i(L,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&i(Ae,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),un=b({opacity:[Number,String],...x(),...H()},"VCardText"),ot=j()({name:"VCardText",props:un(),setup(e,t){let{slots:n}=t;return B(()=>i(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},n)),{}}}),dn=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function vn(e){return{elevationClasses:g(()=>{const n=F(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}function gn(e,t){const n=fe(),a=W(!1);if(pe){const r=new IntersectionObserver(s=>{a.value=!!s.find(o=>o.isIntersecting)},t);We(()=>{r.disconnect()}),ae(n,(s,o)=>{o&&(r.unobserve(o),a.value=!1),s&&r.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const Le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},lt=b({location:String},"location");function ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=qe();return{locationStyles:g(()=>{if(!e.location)return{};const{side:s,align:o}=Ut(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function c(d){return n?n(d):0}const l={};return s!=="center"&&(t?l[Le[s]]=`calc(100% - ${c(s)}px)`:l[s]=0),o!=="center"?t?l[Le[o]]=`calc(100% - ${c(o)}px)`:l[o]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const mn=b({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...x(),...lt({location:"top"}),...oe(),...H(),...Q()},"VProgressLinear"),fn=j()({name:"VProgressLinear",props:mn(),emits:{"update:modelValue":e=>!0},setup(e,t){var D;let{slots:n}=t;const a=Tt(e,"modelValue"),{isRtl:r,rtlClasses:s}=qe(),{themeClasses:o}=ee(e),{locationStyles:c}=ct(e),{textColorClasses:l,textColorStyles:d}=ye(e,"color"),{backgroundColorClasses:u,backgroundColorStyles:f}=ie(g(()=>e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:m}=ie(g(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:_,backgroundColorStyles:w}=ie(e,"color"),{roundedClasses:V}=le(e),{intersectionRef:z,isIntersecting:T}=gn(),A=g(()=>parseFloat(e.max)),C=g(()=>parseFloat(e.height)),E=g(()=>xe(parseFloat(e.bufferValue)/A.value*100,0,100)),U=g(()=>xe(parseFloat(a.value)/A.value*100,0,100)),R=g(()=>r.value!==e.reverse),X=g(()=>e.indeterminate?"fade-transition":"slide-x-transition"),N=At&&((D=window.matchMedia)==null?void 0:D.call(window,"(forced-colors: active)").matches);function G(v){if(!z.value)return;const{left:y,right:$,width:M}=z.value.getBoundingClientRect(),te=R.value?M-v.clientX+($-M):v.clientX-y;a.value=Math.round(te/M*A.value)}return B(()=>i(e.tag,{ref:z,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&T.value,"v-progress-linear--reverse":R.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},V.value,o.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(C.value):0,"--v-progress-linear-height":k(C.value),...e.absolute?c.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:U.value,onClick:e.clickable&&G},{default:()=>[e.stream&&i("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...d.value,[R.value?"left":"right"]:k(-C.value),borderTop:`${k(C.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${k(C.value/4)})`,width:k(100-E.value,"%"),"--v-progress-linear-stream-to":k(C.value*(R.value?1:-1))}},null),i("div",{class:["v-progress-linear__background",N?void 0:u.value],style:[f.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),i("div",{class:["v-progress-linear__buffer",N?void 0:h.value],style:[m.value,{opacity:parseFloat(e.bufferOpacity),width:k(E.value,"%")}]},null),i(Oe,{name:X.value},{default:()=>[e.indeterminate?i("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(v=>i("div",{key:v,class:["v-progress-linear__indeterminate",v,N?void 0:_.value],style:w.value},null))]):i("div",{class:["v-progress-linear__determinate",N?void 0:_.value],style:[w.value,{width:k(U.value,"%")}]},null)]}),n.default&&i("div",{class:"v-progress-linear__content"},[n.default({value:U.value,buffer:E.value})])]})),{}}}),hn=b({loading:[Boolean,String]},"loader");function pn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{loaderClasses:g(()=>({[`${t}--loading`]:e.loading}))}}function bn(e,t){var a;let{slots:n}=t;return i("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||i(fn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const yn=["static","relative","fixed","absolute","sticky"],_n=b({position:{type:String,validator:e=>yn.includes(e)}},"position");function kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O();return{positionClasses:g(()=>e.position?`${t}--${e.position}`:void 0)}}function Cn(){const e=Me("useRoute");return g(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Sn(e,t){var f,h;const n=Lt("RouterLink"),a=g(()=>!!(e.href||e.to)),r=g(()=>(a==null?void 0:a.value)||we(t,"click")||we(e,"click"));if(typeof n=="string"||!("useLink"in n)){const m=K(e,"href");return{isLink:a,isClickable:r,href:m,linkProps:Pe({href:m})}}const s=g(()=>({...e,to:K(()=>e.to||"")})),o=n.useLink(s.value),c=g(()=>e.to?o:void 0),l=Cn(),d=g(()=>{var m,_,w;return c.value?e.exact?l.value?((w=c.value.isExactActive)==null?void 0:w.value)&&zt(c.value.route.value.query,l.value.query):((_=c.value.isExactActive)==null?void 0:_.value)??!1:((m=c.value.isActive)==null?void 0:m.value)??!1:!1}),u=g(()=>{var m;return e.to?(m=c.value)==null?void 0:m.route.value.href:e.href});return{isLink:a,isClickable:r,isActive:d,route:(f=c.value)==null?void 0:f.route,navigate:(h=c.value)==null?void 0:h.navigate,href:u,linkProps:Pe({href:u,"aria-current":g(()=>d.value?"page":void 0)})}}const jn=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),ge=Symbol("rippleStop"),xn=80;function ze(e,t){e.style.transform=t,e.style.webkitTransform=t}function me(e){return e.constructor.name==="TouchEvent"}function ut(e){return e.constructor.name==="KeyboardEvent"}const wn=function(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,r=0;if(!ut(e)){const h=t.getBoundingClientRect(),m=me(e)?e.touches[e.touches.length-1]:e;a=m.clientX-h.left,r=m.clientY-h.top}let s=0,o=.3;(f=t._ripple)!=null&&f.circle?(o=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-s*2)/2}px`,l=`${(t.clientHeight-s*2)/2}px`,d=n.center?c:`${a-s}px`,u=n.center?l:`${r-s}px`;return{radius:s,scale:o,x:d,y:u,centerX:c,centerY:l}},re={show(e,t){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((m=t==null?void 0:t._ripple)!=null&&m.enabled))return;const a=document.createElement("span"),r=document.createElement("span");a.appendChild(r),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:o,x:c,y:l,centerX:d,centerY:u}=wn(e,t,n),f=`${s*2}px`;r.className="v-ripple__animation",r.style.width=f,r.style.height=f,t.appendChild(a);const h=window.getComputedStyle(t);h&&h.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),ze(r,`translate(${c}, ${l}) scale3d(${o},${o},${o})`),r.dataset.activated=String(performance.now()),setTimeout(()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),ze(r,`translate(${d}, ${u}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),r=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=n.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(n.parentNode)},300)},r)}};function dt(e){return typeof e>"u"||!!e}function Z(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ge])){if(e[ge]=!0,me(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||ut(e),n._ripple.class&&(t.class=n._ripple.class),me(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{re.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},xn)}else re.show(e,n,t)}}function Ee(e){e[ge]=!0}function S(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),re.hide(t)}}function vt(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let J=!1;function gt(e){!J&&(e.keyCode===Ie.enter||e.keyCode===Ie.space)&&(J=!0,Z(e))}function mt(e){J=!1,S(e)}function ft(e){J&&(J=!1,S(e))}function ht(e,t,n){const{value:a,modifiers:r}=t,s=dt(a);if(s||re.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=r.center,e._ripple.circle=r.circle,Et(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(r.stop){e.addEventListener("touchstart",Ee,{passive:!0}),e.addEventListener("mousedown",Ee);return}e.addEventListener("touchstart",Z,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",vt,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",Z),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",gt),e.addEventListener("keyup",mt),e.addEventListener("blur",ft),e.addEventListener("dragstart",S,{passive:!0})}else!s&&n&&pt(e)}function pt(e){e.removeEventListener("mousedown",Z),e.removeEventListener("touchstart",Z),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",vt),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",gt),e.removeEventListener("keyup",mt),e.removeEventListener("dragstart",S),e.removeEventListener("blur",ft)}function Pn(e,t){ht(e,t,!1)}function In(e){delete e._ripple,pt(e)}function Bn(e,t){if(t.value===t.oldValue)return;const n=dt(t.oldValue);ht(e,t,n)}const $n={mounted:Pn,unmounted:In,updated:Bn},Vn=b({appendAvatar:String,appendIcon:q,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:q,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...tt(),...x(),...ke(),...Ye(),...dn(),...hn(),...lt(),..._n(),...oe(),...jn(),...H(),...Q(),...st({variant:"elevated"})},"VCard"),Tn=j()({name:"VCard",directives:{Ripple:$n},props:Vn(),setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:r}=ee(e),{borderClasses:s}=nt(e),{colorClasses:o,colorStyles:c,variantClasses:l}=rt(e),{densityClasses:d}=at(e),{dimensionStyles:u}=He(e),{elevationClasses:f}=vn(e),{loaderClasses:h}=pn(e),{locationStyles:m}=ct(e),{positionClasses:_}=kn(e),{roundedClasses:w}=le(e),V=Sn(e,n),z=g(()=>e.link!==!1&&V.isLink.value),T=g(()=>!e.disabled&&e.link!==!1&&(e.link||V.isClickable.value));return B(()=>{const A=z.value?"a":e.tag,C=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),U=C||E,R=!!(a.append||e.appendAvatar||e.appendIcon),X=!!(a.prepend||e.prependAvatar||e.prependIcon),N=!!(a.image||e.image),G=U||X||R,D=!!(a.text||e.text!=null);return ve(i(A,he({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":T.value},r.value,s.value,o.value,d.value,f.value,h.value,_.value,w.value,l.value,e.class],style:[c.value,u.value,m.value,e.style],onClick:T.value&&V.navigate,tabindex:e.disabled?-1:void 0},V.linkProps),{default:()=>{var v;return[N&&i("div",{key:"image",class:"v-card__image"},[a.image?i(se,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):i(_e,{key:"image-img",cover:!0,src:e.image},null)]),i(bn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),G&&i(cn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),D&&i(ot,{key:"text"},{default:()=>{var y;return[((y=a.text)==null?void 0:y.call(a))??e.text]}}),(v=a.default)==null?void 0:v.call(a),a.actions&&i(Gt,null,{default:a.actions}),it(T.value,"v-card")]}}),[[Fe("ripple"),T.value&&e.ripple]])}),{}}}),An=b({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...x(),...Q()},"VDivider"),Ln=j()({name:"VDivider",props:An(),setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:r}=ee(e),{textColorClasses:s,textColorStyles:o}=ye(K(e,"color")),c=g(()=>{const l={};return e.length&&(l[e.vertical?"height":"width"]=k(e.length)),e.thickness&&(l[e.vertical?"borderRightWidth":"borderTopWidth"]=k(e.thickness)),l});return B(()=>{const l=i("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},r.value,s.value,e.class],style:[c.value,o.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null);return a.default?i("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[l,i("div",{class:"v-divider__content"},[a.default()]),l]):l}),{}}}),zn=["id"],En={class:"project-wrapper"},Rn={class:"project-image-wrapper"},Nn=["href"],Un={style:{display:"flex",cursor:"pointer","align-items":"center"}},Dn=["href"],On={class:"d-flex justify-space-around w-100"},Mn={key:0,style:{position:"absolute",bottom:"0","z-index":"500"}},Wn={__name:"ProjectContainer",props:{id:String,title:String,description:String,projectUrl:String,githubUrl:String,backgroundImage:String,projectImage:String,nextProject:String,highlightColor:String,technologies:Array,isLastProject:{type:Boolean,required:!1}},setup(e){const t=e;return(n,a)=>{const r=Ze,s=Ke;return P(),I("div",{id:e.id,style:{height:"100vh",position:"relative"}},[p("div",{class:"project-container",style:$e({"--background-image":`url(${e.backgroundImage})`})},[p("div",En,[i(Tn,{style:$e({"--highlight-color":e.highlightColor}),class:"d-block shadow card",border:"opacity-50 md"},{default:ce(()=>[p("div",Rn,[p("a",{href:e.projectUrl,target:"_blank"},[i(_e,{class:"project-image",height:"400px",src:e.projectImage,cover:""},null,8,["src"])],8,Nn)]),i(Je,null,{default:ce(()=>[Be(de(e.title),1)]),_:1}),i(Ln,{thickness:2}),p("div",Un,[i(ot,null,{default:ce(()=>[Be(de(e.description),1)]),_:1}),p("a",{href:e.githubUrl,target:"_blank"},[i(L,{class:"ma-3 opacity-1 gh-icon",color:"#fff",icon:"mdi-github",size:"80"})],8,Dn)])]),_:1},8,["style"]),p("div",On,[i(r,{technologies:e.technologies},null,8,["technologies"])])])],4),e.isLastProject?Ue("",!0):(P(),I("div",Mn,[i(s,{isIntroduction:!1,nextProject:t.nextProject},null,8,["nextProject"])]))],8,zn)}}},Ce=(e,t)=>{const n=e.__vccOpts||e;for(const[a,r]of t)n[a]=r;return n},Fn={},qn={class:"lines"};function Yn(e,t){return P(),I("div",qn,t[0]||(t[0]=[p("div",{class:"line"},null,-1),p("div",{class:"line"},null,-1),p("div",{class:"line"},null,-1)]))}const Hn=Ce(Fn,[["render",Yn]]),Xn="/Portfolio-vue.js/assets/photo-ZicbfFWw.jpg",Gn={},Kn={style:{height:"100vh",position:"relative"},id:"introduction"},Zn={style:{"padding-top":"5rem",display:"flex","justify-content":"center",gap:"5rem"}},Jn={style:{display:"flex","flex-direction":"column"}},Qn={href:"https://github.com/BartlomiejPop",target:"_blank"},ea={href:"https://www.linkedin.com/in/bart%C5%82omiej-poprawa-961397247/",target:"_blank"},ta={class:"d-flex justify-space-around w-100"},na={style:{position:"absolute",bottom:"0"}};function aa(e,t,n,a,r,s){const o=Hn,c=Ze,l=Ke;return P(),I("div",Kn,[i(o),p("div",Zn,[t[0]||(t[0]=p("div",null,[p("img",{width:"20%",src:Xn}),p("p",{style:{"font-size":"3rem"}},"Bartłomiej Poprawa"),p("p",{style:{width:"50rem","font-size":"1.1rem"}}," I’m organized and motivated person, interested in web development. With practical experience as fullstack developer, frontend developer and with strong university background I am ready to face professional expectations. During my work and studies, I was involved in developing several different applications, using React.js, Node.js, Nest.js and TypeScript. ")],-1)),p("div",Jn,[p("a",Qn,[i(L,{class:"ma-2 opacity-1",color:"white",icon:"mdi-github",size:"150"})]),p("a",ea,[i(L,{class:"ma-2 opacity-1",color:"white",icon:"mdi-linkedin",size:"150"})])])]),t[1]||(t[1]=p("p",{class:"tech-stack-title"},"Tech Stack:",-1)),p("div",ta,[i(c,{technologies:["react","node","vue","nest","typescript","mongo","git","firebase","sass","javascript"],isIntroduction:!0})]),p("div",na,[i(l,{isIntroduction:!0,nextProject:"movie-search"})])])}const ia=Ce(Gn,[["render",aa]]),sa={};function ra(e,t){const n=ia,a=Wn;return P(),I(Y,null,[i(n),i(a,{id:"movie-search",title:"Movie Search",description:"Application based on choosing a movie created by the group of programmers. App component with Public and Private routes, AuthPage page logic. Connected to Google's Firebase database",projectUrl:"https://michalmazurdev.github.io/team-project-filmoteka/index.html",githubUrl:"https://github.com/BartlomiejPop/team-project-filmoteka",backgroundImage:"../assets/moviesearchBg.jpg",projectImage:"../assets/moviesearch.jpg",highlightColor:"#dfac58",nextProject:"so-yummy",technologies:["firebase","git","javascript","sass"]}),i(a,{id:"so-yummy",title:"So Yummy",description:"Recipe cookbook application. Backend made in node.js. Routes described in Express. Multer implemented to work with files.Data saved in mongoDb database. Frontend made in React and Redux. Authentication logic. Private and public routes.Pages linked to particular routes.",projectUrl:"https://bartlomiejpop.github.io/So-Yummy-frontend/",githubUrl:"https://github.com/BartlomiejPop/So-Yummy-frontend",backgroundImage:"../assets/soYummyBg.jpg",projectImage:"../assets/soYummy.jpg",highlightColor:"#65bb65",nextProject:"circles",technologies:["mongo","git","node","javascript","sass"]}),i(a,{id:"circles",title:"Circles",description:"Game based on clicking circles in a short time that is constantly decreasing. Click on the special circles to extend time before they expire. Live database actualizing and displaying top 10 records.",projectUrl:"https://bartlomiejpop.github.io/circles-ranking/",githubUrl:"https://github.com/BartlomiejPop/circles-ranking",backgroundImage:"../assets/circlesBackground.png",projectImage:"../assets/circles.jpg",highlightColor:"rgb(191, 51, 206)",nextProject:"weather-app",technologies:["mongo","git","node","javascript","sass"]}),i(a,{id:"weather-app",title:"Weather App",description:"Weather application created with Vite and React. Project architecture made in redux-toolkit. Code written in typescript and styled with SCSS. Application provides weather live data in chosen locations. All changes are saved in local storage.",projectUrl:"https://bartlomiejpop.github.io/weather-app-ts-project/",githubUrl:"https://github.com/BartlomiejPop/weather-app-ts-project",backgroundImage:"../assets/weatherAppBg.jpg",projectImage:"../assets/weatherApp.jpg",highlightColor:"rgb(76, 92, 243)",nextProject:"phonebook",technologies:["react","sass","javascript"]}),i(a,{id:"phonebook",title:"Phonebook",description:"Single page application based on React-router. Project built with Redux toolkit architecture and lazy-loaded components. Authentication system. Props strongly described using prop-types. Styled with Material UI and css modules.",projectUrl:"https://bartlomiejpop.github.io/weather-app-ts-project/",githubUrl:"https://github.com/BartlomiejPop/weather-app-ts-project",backgroundImage:"../assets/phonebookBg.jpg",projectImage:"../assets/phonebook.jpg",highlightColor:"rgb(255, 255, 255)",nextProject:"mongodb-contactbook",technologies:["react","javascript"]}),i(a,{id:"mongodb-contactbook",title:"MongoDb Contactbook",description:"Rest API application developed with Express.js and MongoDB database. Authentication system. Endpoints described to allow managing actions on particular contacts",projectUrl:"https://github.com/BartlomiejPop/REST-API-application",githubUrl:"https://github.com/BartlomiejPop/REST-API-application",backgroundImage:"../assets/contactbookBg.jpg",projectImage:"../assets/contactbookBg.jpg",highlightColor:"rgb(255, 255, 255)",nextProject:"wallet-app",technologies:["node","mongo","javascript"]}),i(a,{id:"wallet-app",title:"Wallet App",description:"Cash managment app developed by group of programmers. Authentication system with private routes and MongoDB database. Made using React toolkit and Node.js Express framework.",projectUrl:"https://bartlomiejpop.github.io/Wallet-App/",githubUrl:"https://github.com/BartlomiejPop/Wallet-App",backgroundImage:"../assets/walletappBg.jpg",projectImage:"../assets/walletapp.jpg",highlightColor:"rgb(255, 255, 255)",nextProject:"ice-cream",technologies:["node","mongo","javascript","react","git"]}),i(a,{id:"ice-cream",title:"Ice Cream",description:"Simple project developed in a group of programmers. Workflow done in agile, everyday Scrum meetings and merging every member's git branches.",projectUrl:"https://kamild90.github.io/projekt-grupa-3/",githubUrl:"https://github.com/KamilD90/projekt-grupa-3",backgroundImage:"../assets/icecreamBg.png",projectImage:"../assets/icecream.jpg",highlightColor:"rgb(255, 255, 255)",technologies:["javascript","git","sass"],isLastProject:!0})],64)}const ca=Ce(sa,[["render",ra]]);export{ca as default};
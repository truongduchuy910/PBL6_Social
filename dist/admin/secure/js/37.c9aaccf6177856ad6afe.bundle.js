(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{560:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var r=n(1),o=n(96),s=n(97);const i=e=>{let{onChange:t,autoFocus:n,field:i,errors:c,value:a="",isDisabled:u}=e;const{isMultiline:l}=i.config,d="ks-input-"+i.path,f=c.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),b=c.find(e=>e instanceof Error&&"AccessDeniedError"===e.name);return Object(r.jsx)(o.a,null,Object(r.jsx)(o.d,{htmlFor:d,field:i,errors:c}),Object(r.jsx)(o.b,{text:i.adminDoc}),Object(r.jsx)(o.c,null,Object(r.jsx)(s.c,{autoComplete:"off",autoFocus:n,required:i.isRequired,type:"text",value:f?a:void 0,placeholder:f?void 0:b.message,onChange:e=>{t(e.target.value)},id:d,isMultiline:l,disabled:u})))}}}]);
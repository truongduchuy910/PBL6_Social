(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{575:function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return c}));var s=o(5),t=o(1),r=o(96),a=o(129);const c=e=>{let{onChange:n,autoFocus:o,field:c,value:l,renderContext:i,errors:d,isDisabled:u}=e;const b=c.options.find(e=>e.value===l),j="ks-input-"+c.path,p=d.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),f=d.find(e=>e instanceof Error&&"AccessDeniedError"===e.name),v="dialog"===i?{menuPortalTarget:document.body,menuShouldBlockScroll:!0}:null;return Object(t.jsx)(r.a,null,Object(t.jsx)(r.d,{htmlFor:j,field:c,errors:d}),Object(t.jsx)(r.b,{text:c.adminDoc}),Object(t.jsx)(r.c,null,Object(t.jsx)("div",{css:{flex:1}},Object(t.jsx)(a.a,Object(s.a)({autoFocus:o,value:p?b:void 0,placeholder:p?void 0:f.message,options:c.options,onChange:e=>{n(e?e.value:null)},isClearable:!0,id:"react-select-"+j,inputId:j,instanceId:j,isDisabled:u},v)))))}}}]);
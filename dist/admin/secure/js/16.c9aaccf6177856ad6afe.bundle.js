(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{371:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var a=i(7),n=i(40),s=i(16),r=i(370),l=i.n(r),c=["label","path","type","access","isOrderable","isPrimaryKey","isRequired","isReadOnly","adminDoc","defaultValue"],u=function e(t,i,r){var u=this,h=i.readViews,o=i.preloadViews,d=i.getListByKey,f=t.label,b=t.path,p=t.type,y=t.access,g=t.isOrderable,O=t.isPrimaryKey,w=t.isRequired,j=t.isReadOnly,v=t.adminDoc,V=t.defaultValue,m=Object(a.a)(t,c);Object(n.a)(this,e),Object(s.a)(this,"getQueryFragment",(function(){return u.path})),Object(s.a)(this,"serialize",(function(e){return e[u.path]||null})),Object(s.a)(this,"validateInput",(function(){})),Object(s.a)(this,"deserialize",(function(e){return e[u.path]})),Object(s.a)(this,"hasChanged",(function(e,t){return!l()(e[u.path],t[u.path])})),Object(s.a)(this,"getDefaultValue",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.originalInput,i=void 0===t?{}:t,a=e.prefill,n=void 0===a?{}:a;return u._getDefaultValue({originalInput:i,prefill:n})})),Object(s.a)(this,"initCellView",(function(){var e=u.views.Cell;e&&u.readViews([e])})),Object(s.a)(this,"initFieldView",(function(){var e=u.views.Field;e&&u.readViews([e])})),Object(s.a)(this,"initFilterView",(function(){var e=u.views.Filter;e&&u.readViews([e])})),Object(s.a)(this,"getFilterTypes",(function(){return[]})),Object(s.a)(this,"getFilterValue",(function(e){return e})),this.config=m,this.label=f,this.path=b,this.type=p,this.maybeAccess=y,this.isOrderable=g,this.isPrimaryKey=O,this.isRequired=w,this.isReadOnly=j,this.adminDoc=v,this.readViews=h,this.preloadViews=o,this.getListByKey=d,this.views=r,this._getDefaultValue="function"!=typeof V?function(e){return e.prefill[u.path]||V}:V}},582:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return r}));var a=i(6),n=i(16),s=i(371);i(179),i(253),i(370);class r extends s.a{constructor(e){var t;const{defaultValue:i=(e.many?[]:null)}=e;for(var s=arguments.length,r=new Array(s>1?s-1:0),l=1;l<s;l++)r[l-1]=arguments[l];super(Object(a.a)(Object(a.a)({},e),{},{defaultValue:i}),...r),t=this,Object(n.a)(this,"getQueryFragment",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.path;return`\n      ${e} {\n        id\n        _label_\n        ${t.config.file} {\n          publicUrl\n        }\n      }\n    `})),Object(n.a)(this,"getFilterGraphQL",e=>{let{type:t,value:i}=e;return"contains"===t?{[this.path+"_some"]:{id:i}}:"is"===t?{[""+this.path]:{id:i}}:void 0}),Object(n.a)(this,"getFilterLabel",e=>{let{label:t}=e;return`${this.label} ${t.toLowerCase()}`}),Object(n.a)(this,"formatFilter",e=>{let{label:t,value:i}=e;return`${this.getFilterLabel({label:t})}: "${i}"`}),Object(n.a)(this,"serialize",e=>{const{path:t}=this,{many:i}=this.config;let a=e[t];if(i){let e=[];return Array.isArray(a)&&(e=a.map(e=>e.id)),{disconnectAll:!0,connect:e.map(e=>({id:e}))}}return a?{connect:{id:a.id}}:{disconnectAll:!0}}),Object(n.a)(this,"getFilterTypes",()=>{const{many:e}=this.config;return e?[{type:"contains",label:"Contains",getInitialValue:()=>null}]:[{type:"is",label:"Is",getInitialValue:()=>null}]})}getRefList(){return this.getListByKey(this.config.ref)}}}}]);
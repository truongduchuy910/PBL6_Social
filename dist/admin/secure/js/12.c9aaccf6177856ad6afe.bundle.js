(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{371:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i(7),n=i(40),s=i(16),r=i(370),l=i.n(r),u=["label","path","type","access","isOrderable","isPrimaryKey","isRequired","isReadOnly","adminDoc","defaultValue"],c=function t(e,i,r){var c=this,h=i.readViews,o=i.preloadViews,p=i.getListByKey,d=e.label,b=e.path,f=e.type,y=e.access,w=e.isOrderable,O=e.isPrimaryKey,g=e.isRequired,V=e.isReadOnly,j=e.adminDoc,m=e.defaultValue,v=Object(a.a)(e,u);Object(n.a)(this,t),Object(s.a)(this,"getQueryFragment",(function(){return c.path})),Object(s.a)(this,"serialize",(function(t){return t[c.path]||null})),Object(s.a)(this,"validateInput",(function(){})),Object(s.a)(this,"deserialize",(function(t){return t[c.path]})),Object(s.a)(this,"hasChanged",(function(t,e){return!l()(t[c.path],e[c.path])})),Object(s.a)(this,"getDefaultValue",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.originalInput,i=void 0===e?{}:e,a=t.prefill,n=void 0===a?{}:a;return c._getDefaultValue({originalInput:i,prefill:n})})),Object(s.a)(this,"initCellView",(function(){var t=c.views.Cell;t&&c.readViews([t])})),Object(s.a)(this,"initFieldView",(function(){var t=c.views.Field;t&&c.readViews([t])})),Object(s.a)(this,"initFilterView",(function(){var t=c.views.Filter;t&&c.readViews([t])})),Object(s.a)(this,"getFilterTypes",(function(){return[]})),Object(s.a)(this,"getFilterValue",(function(t){return t})),this.config=v,this.label=d,this.path=b,this.type=f,this.maybeAccess=y,this.isOrderable=w,this.isPrimaryKey=O,this.isRequired=g,this.isReadOnly=V,this.adminDoc=j,this.readViews=h,this.preloadViews=o,this.getListByKey=p,this.views=r,this._getDefaultValue="function"!=typeof m?function(t){return t.prefill[c.path]||m}:m}},559:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return s}));var a=i(16),n=i(371);class s extends n.a{constructor(){super(...arguments),Object(a.a)(this,"getFilterGraphQL",t=>{let{type:e,value:i}=t;switch(e){case"is":return{[this.path]:i};case"not":return{[this.path+"_not"]:i};case"in":return{[this.path+"_in"]:i.split(",").map(t=>t.trim())};case"not_in":return{[this.path+"_not_in"]:i.split(",").map(t=>t.trim())}}}),Object(a.a)(this,"getFilterLabel",t=>{let{label:e,type:i}=t,a="";return["in","not_in"].includes(i)&&(a=" (comma separated)"),`${this.label} ${e.toLowerCase()}${a}`}),Object(a.a)(this,"formatFilter",t=>{let{label:e,type:i,value:a}=t,n=a;return["in","not_in"].includes(i)&&(n=a.split(",").map(t=>t.trim()).join(", ")),`${this.label} ${e.toLowerCase()}: ${n}`}),Object(a.a)(this,"getFilterTypes",()=>[{type:"is",label:"Is exactly",getInitialValue:()=>""},{type:"not",label:"Is not",getInitialValue:()=>""},{type:"in",label:"Is one of",getInitialValue:()=>""},{type:"not_in",label:"Is not one of",getInitialValue:()=>""}])}}}}]);
(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={index:0},o={index:0},r=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0e07366e":"163328fc","chunk-285c5083":"c982a9e7"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0e07366e":1,"chunk-285c5083":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-0e07366e":"6a2f6090","chunk-285c5083":"16b6953e"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){i[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/xueui-demo/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"0102":function(t,e,n){},"031d":function(t,e,n){},"0617":function(t,e,n){"use strict";var a=n("0102"),i=n.n(a);i.a},"2c4e":function(t,e,n){},"4d1c":function(t,e,n){"use strict";var a=n("2c4e"),i=n.n(a);i.a},5596:function(t,e,n){"use strict";var a=n("888c"),i=n.n(a);i.a},"888c":function(t,e,n){},"96ac":function(t,e,n){"use strict";var a=n("031d"),i=n.n(a);i.a},"9f26":function(t){t.exports=["facebook","linkedin","sina","google","youtube","github","twitter","wechat","alipay","taobao"]},b8d8:function(t,e,n){},c31f:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("mainHeader"),t.isIndex?n("router-view",{staticClass:"page"}):n("div",{staticClass:"container"},[n("sideNav",{staticClass:"nav"}),n("router-view",{staticClass:"view"})],1),t.isIndex?t._e():n("mainFooter")],1)},o=[],r=(n("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"page-header",style:"index"===t.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[a("div",{staticClass:"header-container"},[a("router-link",{attrs:{to:{name:"index"}}},[a("img",{attrs:{src:n("d6b2"),width:"100"}})]),a("router-link",{attrs:{to:{name:"giud"}}},[t._v("组件")])],1)])}),s=[],c={data:function(){return{}}},u=c,l=(n("0617"),n("2877")),d=Object(l["a"])(u,r,s,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-footer"},[n("div",{staticClass:"footer-container"},[n("a",{attrs:{href:"https://github.com/VV-UI/VV-UI"}},[n("svg",{attrs:{"aria-hidden":"true",height:"80",version:"1.1",viewBox:"0 0 16 16",width:"40"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])])},m=[],h=(n("e57f"),{}),v=Object(l["a"])(h,p,m,!1,null,"2a2081bd",null),g=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-nav"},t._l(Object.keys(t.data),function(e){return n("div",{staticClass:"group-container"},[n("p",{staticClass:"side-nav-title"},[t._v(t._s(e))]),t._l(t.data[e],function(e){return e.desc?n("div",{staticClass:"side-nav-items"},[e.name?n("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))]):n("p",{staticClass:"side-nav-group"},[t._v(t._s(e.desc))]),t._l(e.items,function(e){return n("div",[n("router-link",{staticClass:"slid-nav-component",class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))])],1)})],2):t._e()})],2)}),0)},_=[],x=n("ee95"),y={data:function(){return{data:x}}},w=y,C=(n("5596"),Object(l["a"])(w,b,_,!1,null,null,null)),k=C.exports,E={name:"app",data:function(){return{init:!1,isIndex:!0}},watch:{$route:function(){this.isIndex="index"===this.$route.name}},mounted:function(){var t=this;setTimeout(function(){t.init=!0},250)},components:{mainHeader:f,sideNav:k,mainFooter:g}},j=E,O=(n("4d1c"),Object(l["a"])(j,i,o,!1,null,null,null)),$=O.exports,S=(n("456d"),n("ac6a"),n("8c4f"));a["a"].use(S["a"]);var T=[];Object.keys(x).forEach(function(t){T=T.concat(x[t])});var B=function t(e){e.forEach(function(e){if(e.items)t(e.items),T=T.concat(e.items);else{if("pages"===e.type)return void(e.component=function(t){return n.e("chunk-0e07366e").then(function(){return t(n("39a9")("./".concat(e.name,".vue")))}.bind(null,n)).catch(n.oe)});e.component=function(t){return n.e("chunk-285c5083").then(function(){return t(n("62cd")("./".concat(e.name,".md")))}.bind(null,n)).catch(n.oe)}}})};B(T);var P=new S["a"]({routes:T}),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-demo-wrapper"},[n("div",{staticClass:"demo-container",style:{height:t.isExpand?"auto":"0"}},[n("div",{attrs:{span:"14"}},[n("div",{staticClass:"docs-demo docs-demo--expand"},[n("div",{staticClass:"highlight-wrapper"},[t._t("highlight")],2)])])]),n("span",{staticClass:"docs-trans docs-demo__triangle",on:{click:t.toggle}},[t._v(t._s(t.isExpand?"隐藏代码":"显示代码"))])])},A=[],N={data:function(){return{isExpand:!1}},methods:{toggle:function(){this.isExpand=!this.isExpand}}},V=N,M=(n("96ac"),Object(l["a"])(V,I,A,!1,null,null,null)),L=M.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"xu-button",class:["xu-button--"+t.type,{"is-plain":t.plain,"is-disabled":t.disabled,"is-round":t.round,"is-loading":t.loading},"xu-button--"+t.size],attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t.loading?n("i",{staticClass:"xu-icon-loading"}):t._e(),t.icon&&!t.loading?n("i",{class:t.icon}):t._e(),n("span",[t._t("default")],2)])},F=[],H={name:"XuButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},plain:Boolean,disabled:Boolean,round:Boolean,loading:Boolean},data:function(){return{msg:"button"}}},U=H,X=Object(l["a"])(U,z,F,!1,null,null,null),q=X.exports;q.install=function(t){t.component(q.name,q)};var D=q,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:"xu-icon-"+t.name})},K=[],G={name:"XuIcon",props:{name:String}},Q=G,R=Object(l["a"])(Q,J,K,!1,null,null,null),W=R.exports;W.install=function(t){t.component(W.name,W)};var Y=W,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xu-test",on:{click:t.handleClick}},[t._v(t._s(t.num))])},tt=[],et={name:"XuTest",data:function(){return{num:0}},methods:{handleClick:function(){this.num++}}},nt=et,at=Object(l["a"])(nt,Z,tt,!1,null,null,null),it=at.exports;it.install=function(t){t.component(it.name,it)};var ot=it,rt="0.4.1",st=[D,Y,ot],ct=function(t){st.forEach(function(e){t.use(e)})};"undefined"!==typeof window&&window.Vue&&ct(window.Vue);var ut={install:ct,version:rt},lt=(n("b8d8"),n("9f26"));a["a"].prototype.$icon=lt,a["a"].config.productionTip=!1,a["a"].use(ut),a["a"].component("demo-block",L),new a["a"]({router:P,render:function(t){return t($)}}).$mount("#app")},d6b2:function(t,e,n){t.exports=n.p+"img/banner.26ba0a21.png"},e57f:function(t,e,n){"use strict";var a=n("fe68"),i=n.n(a);i.a},ee95:function(t){t.exports={"开发指南":[{name:"giud",path:"/giud",desc:"介绍"},{name:"install",path:"/install",desc:"安装"},{name:"start",path:"/start",desc:"快速开始"},{name:"index",path:"/",type:"pages"},{name:"logs",path:"/logs",desc:"更新日志"}],"组件":[{desc:"基础组件",path:"/component",items:[{desc:"test",name:"test",path:"/test"},{desc:"icon",name:"icon",path:"/icon"},{desc:"button",name:"button",path:"/button"},{desc:"info",name:"info",path:"/info"}]},{desc:"视图组件",path:"/component",items:[]}]}},fe68:function(t,e,n){}});
//# sourceMappingURL=index.b35d6639.js.map
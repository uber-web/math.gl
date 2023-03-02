"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4744],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9877:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Floating Point",l={unversionedId:"modules/core/developer-guide/floating-point",id:"modules/core/developer-guide/floating-point",title:"Floating Point",description:"This article is a work in progress.",source:"@site/../docs/modules/core/developer-guide/floating-point.md",sourceDirName:"modules/core/developer-guide",slug:"/modules/core/developer-guide/floating-point",permalink:"/docs/modules/core/developer-guide/floating-point",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/core/developer-guide/floating-point.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debugging",permalink:"/docs/modules/core/developer-guide/debugging"},next:{title:"Performance",permalink:"/docs/modules/core/developer-guide/performance"}},p={},c=[{value:"Precision",id:"precision",level:2},{value:"About Comparisons",id:"about-comparisons",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"floating-point"},"Floating Point"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article is a work in progress.")),(0,o.kt)("h2",{id:"precision"},"Precision"),(0,o.kt)("h3",{id:"about-comparisons"},"About Comparisons"),(0,o.kt)("p",null,"Due to small rounding errors, exact equality is often not a reliable way to compare floating point numbers. Therefore the default ",(0,o.kt)("inlineCode",{parentName:"p"},"equals")," operation checks that two numbers are within a small delta."),(0,o.kt)("p",null,"There is also an ",(0,o.kt)("inlineCode",{parentName:"p"},"exactEquals")," method that compares the floating point values directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"return Math.abs(a - b) <= config.EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Floating point comparison implementation in gl-matrix and alternatives (links)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://floating-point-gui.de/errors/comparison/"},"Comparisons"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4997],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={},l="Roadmap",i={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"Some of the high-level goals for future and past versions",source:"@site/../docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/math.gl/docs/roadmap",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/roadmap.md",tags:[],version:"current",frontMatter:{}},p={},c=[{value:"v.Next",id:"vnext",level:2},{value:"v4.0",id:"v40",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"Some of the high-level goals for future and past versions"),(0,o.kt)("h2",{id:"vnext"},"v.Next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Geometry primitives (spheres, cubes etc)"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("h2",{id:"v40"},"v4.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support ES modules"),(0,o.kt)("li",{parentName:"ul"},"Fork gl-matrix (because they are moving to 32 bit precision which is too low for geospatial use cases, and also gl-matrix is not merging the ES module exports we need for wide compatibility).")),(0,o.kt)("h1",{id:"v36"},"v3.6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Full typescript support")))}m.isMDXComponent=!0}}]);
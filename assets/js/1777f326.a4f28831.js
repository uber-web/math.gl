"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1254:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},i="Roadmap",l={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"3D Primitives",source:"@site/../docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/roadmap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guide",permalink:"/docs/upgrade-guide"},next:{title:"Get Started",permalink:"/docs/developer-guide/get-started"}},p={},s=[{value:"3D Primitives",id:"3d-primitives",level:2},{value:"Geometry Processing",id:"geometry-processing",level:3},{value:"Improved Columnar Table Support",id:"improved-columnar-table-support",level:3},{value:"GPU Powered Math?",id:"gpu-powered-math",level:3},{value:"Interoperability and Framework Independence",id:"interoperability-and-framework-independence",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"roadmap"},"Roadmap"),(0,n.kt)("h2",{id:"3d-primitives"},"3D Primitives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a submodule with the geometry primitives from luma.gl.")),(0,n.kt)("h3",{id:"geometry-processing"},"Geometry Processing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide a library for CPU side geometry processing, for calculating normals, ray casting etc."),(0,n.kt)("li",{parentName:"ul"},"There is initial code in ",(0,n.kt)("inlineCode",{parentName:"li"},"@loaders.gl/math")," that should be cleaned up and moved to math.gl.")),(0,n.kt)("h3",{id:"improved-columnar-table-support"},"Improved Columnar Table Support"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Geometries are essentially columnar tables, emphasize this further to simplify integration with columnar table systems, primarily ArrowJS.")),(0,n.kt)("h3",{id:"gpu-powered-math"},"GPU Powered Math?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TBA")),(0,n.kt)("h2",{id:"interoperability-and-framework-independence"},"Interoperability and Framework Independence"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An ambition is that math.gl should be able to serve a general purpose 3D math library, enabling the creation of framework-independent 3D and Geospatial code that interoperates with a variety of frameworks."),(0,n.kt)("li",{parentName:"ul"},"math.gl modules (such as geospatial math) should be usable by applications using other frameworks, without having to use the core math.gl classes.")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},l="Helpers",i={unversionedId:"modules/geospatial/api-reference/helpers",id:"modules/geospatial/api-reference/helpers",title:"Helpers",description:"Helper functions for geospatial.",source:"@site/../docs/modules/geospatial/api-reference/helpers.md",sourceDirName:"modules/geospatial/api-reference",slug:"/modules/geospatial/api-reference/helpers",permalink:"/math.gl/docs/modules/geospatial/api-reference/helpers",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/geospatial/api-reference/helpers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ellipsoid",permalink:"/math.gl/docs/modules/geospatial/api-reference/ellipsoid"},next:{title:"clipPolygon",permalink:"/math.gl/docs/modules/polygon/api-reference/clip-polygon"}},s={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"helpers"},"Helpers"),(0,o.kt)("p",{class:"badges"},(0,o.kt)("img",{src:"https://img.shields.io/badge/From-v3.0-blue.svg?style=flat-square",alt:"From-v3.0"})),(0,o.kt)("p",null,"Helper functions for geospatial."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Check if a given coordinate is close to the surface of the earth on the earth ellipsoid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {isWGS84} from '@math.gl/geospatial';\nisWGS84([17832.12, 83234.52, 952313.73]);\n")))}f.isMDXComponent=!0}}]);
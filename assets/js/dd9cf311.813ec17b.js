"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[7674],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2260:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},l="Helpers",i={unversionedId:"modules/geospatial/api-reference/helpers",id:"modules/geospatial/api-reference/helpers",title:"Helpers",description:"Helper functions for geospatial.",source:"@site/../docs/modules/geospatial/api-reference/helpers.md",sourceDirName:"modules/geospatial/api-reference",slug:"/modules/geospatial/api-reference/helpers",permalink:"/docs/modules/geospatial/api-reference/helpers",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/geospatial/api-reference/helpers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ellipsoid",permalink:"/docs/modules/geospatial/api-reference/ellipsoid"},next:{title:"clipPolygon",permalink:"/docs/modules/polygon/api-reference/clip-polygon"}},s={},p=[{value:"Usage",id:"usage",level:2}],c={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"helpers"},"Helpers"),(0,o.kt)("p",{class:"badges"},(0,o.kt)("img",{src:"https://img.shields.io/badge/From-v3.0-blue.svg?style=flat-square",alt:"From-v3.0"})),(0,o.kt)("p",null,"Helper functions for geospatial."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Check if a given coordinate is close to the surface of the earth on the earth ellipsoid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {isWGS84} from '@math.gl/geospatial';\nisWGS84([17832.12, 83234.52, 952313.73]);\n")))}f.isMDXComponent=!0}}]);
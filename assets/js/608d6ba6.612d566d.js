"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2930],{4137:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),g=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=g(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=g(a),c=r,u=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6234:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(7462),r=(a(7294),a(4137));const l={},i="Introduction",o={unversionedId:"README",id:"README",title:"Introduction",description:"Welcome to math.gl! math.gl is JavaScript (TypeScript) math library focused on geospatial and 3D use cases. Designed as a composable, modular toolbox. math.gl provides a core module with classic vector and matrix classes, and a suite of optional modules implementing various aspects of geospatial and 3D math.",source:"@site/../docs/README.md",sourceDirName:".",slug:"/",permalink:"/math.gl/docs/",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"What's New",permalink:"/math.gl/docs/whats-new"}},s={},g=[{value:"Features",id:"features",level:2},{value:"Modules",id:"modules",level:2},{value:"Supported Browsers and Node Versions",id:"supported-browsers-and-node-versions",level:2},{value:"History",id:"history",level:2},{value:"Attributions",id:"attributions",level:2},{value:"License",id:"license",level:2}],m={toc:g},d="wrapper";function p(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Welcome to math.gl! math.gl is JavaScript (TypeScript) math library focused on ",(0,r.kt)("strong",{parentName:"p"},"geospatial")," and ",(0,r.kt)("strong",{parentName:"p"},"3D")," use cases. Designed as a composable, ",(0,r.kt)("strong",{parentName:"p"},"modular toolbox"),". math.gl provides a core module with classic vector and matrix classes, and a suite of optional modules implementing various aspects of geospatial and 3D math."),(0,r.kt)("p",null,"While math.gl is highly ",(0,r.kt)("strong",{parentName:"p"},"optimized for use with the WebGL and WebGPU APIs"),", it has no WebGL dependencies and is designed to be usable in any application."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3D math")," - Basic vectors and matrices, as well as 3D primitives and culling: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/types")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/core")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/culling"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geospatial projections")," - Support for a variety of geospatial projections ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/geospatial")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/geoid")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/proj4")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/web-mercator"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Geospatial utilities")," - Cutting polygons and calculating sun position and direction ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/polygon")),",  ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/sun"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Discrete Global Grids")," - Standardized interfaces to a number of the major discrete global grids. ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/geohash")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/quadkey")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/s2")))),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"math.gl is a toolbox that offers a suite of composable modules."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Core math libraries")),(0,r.kt)("th",{parentName:"tr",align:null},"Module ",(0,r.kt)("span",{style:{width:300}})),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/types"))),(0,r.kt)("td",{parentName:"tr",align:null},"Basic math type helpers (",(0,r.kt)("inlineCode",{parentName:"td"},"NumericArray")," etc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"core",src:a(7904).Z,title:"core",width:"722",height:"434"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/core"))),(0,r.kt)("td",{parentName:"tr",align:null},"3D math classes (vectors, matrices, etc)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"culling",src:a(6956).Z,title:"culling",width:"676",height:"572"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/culling"))),(0,r.kt)("td",{parentName:"tr",align:null},"Bounding volumes and intersection testing.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Geospatial math libraries")),(0,r.kt)("th",{parentName:"tr",align:null},"Module ",(0,r.kt)("span",{style:{width:300}})),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"geospatial",src:a(4600).Z,title:"geospatial",width:"820",height:"820"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/geospatial"))),(0,r.kt)("td",{parentName:"tr",align:null},"Ellipsoidal math for WGS84 coordinates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"geoid",src:a(2529).Z,title:"geoid",width:"742",height:"468"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/geoid"))),(0,r.kt)("td",{parentName:"tr",align:null},"Earth Gravity Model support .")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/polygon"))),(0,r.kt)("td",{parentName:"tr",align:null},"Polygon math, including geospatial cutting etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/proj4"))),(0,r.kt)("td",{parentName:"tr",align:null},"Conversion between coordinate reference systems.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/sun"))),(0,r.kt)("td",{parentName:"tr",align:null},"Solar position / direction from position and time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/web-mercator"))),(0,r.kt)("td",{parentName:"tr",align:null},"Supports 3D Web Mercator (spherical) projections.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"DGGS (Discrete global grid support) libraries")),(0,r.kt)("th",{parentName:"tr",align:null},"Module ",(0,r.kt)("span",{style:{width:300}})),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"geohash",src:a(81).Z,title:"geohash",width:"1268",height:"628"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/geohash"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get geometry of GeoHash tokens.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"quadkey",src:a(4749).Z,title:"quadkey",width:"1252",height:"636"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/quadkey"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get geometry of QuadKey tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"s2",src:a(8477).Z,title:"s2",width:"1124",height:"588"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/s2"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get geometry of S2 tokens.")))),(0,r.kt)("br",null),"In addition, math.gl provides a few deprecated legacy modules, to avoid breaking older applications.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Legacy Module"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"math.gl"))),(0,r.kt)("td",{parentName:"tr",align:null},"Re-exports the API from ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/core")),'. An "alias" for ',(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/core"))," to avoid breaking old applications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"viewport-mercator-project"))),(0,r.kt)("td",{parentName:"tr",align:null},"Re-exports the Web Mercator projection utilities in ",(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"@math.gl/web-mercator")),". The ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/uber-common/viewport-mercator-project"},"viewport-mercator-project")," repository was moved to math.gl in Oct 2019.")))),(0,r.kt)("h2",{id:"supported-browsers-and-node-versions"},"Supported Browsers and Node Versions"),(0,r.kt)("p",null,"math.gl is fully supported on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Evergreen browsers: Recent versions of Chrome, Safari, Firefox, Edge etc."),(0,r.kt)("li",{parentName:"ul"},"Node.js: Active and Maintenance ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/about/releases/"},"LTS releases")),(0,r.kt)("li",{parentName:"ul"},"IE11: Supported (with certain performance caveats) using math.gl's fully transpiled ",(0,r.kt)("inlineCode",{parentName:"li"},"es5")," distribution and ",(0,r.kt)("inlineCode",{parentName:"li"},"@babel/polyfills"),".")),(0,r.kt)("p",null,"Note that Internet Explorer < 10 will not work. If your application needs to support older browsers, an option could be to use ",(0,r.kt)("a",{parentName:"p",href:"http://glmatrix.net/"},(0,r.kt)("inlineCode",{parentName:"a"},"gl-matrix"))," directly."),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The core classes were originally developed as part of luma.gl v4 to provide a basic 3D math library for the luma.gl and deck.gl frameworks."),(0,r.kt)("li",{parentName:"ul"},"math.gl was then broken out into its own repository to ensure it remained an independently usable set of 3D and Geospatial math modules."),(0,r.kt)("li",{parentName:"ul"},"parts of the Cesium math library were ported and published as independently usable math.gl modules (the geospatial and culling modules). This was a collaboration with the Cesium team around 3D Tiles support in loaders.gl,"),(0,r.kt)("li",{parentName:"ul"},"Additional geospatial modules have gradually been added to support more advanced use cases for deck.gl.")),(0,r.kt)("h2",{id:"attributions"},"Attributions"),(0,r.kt)("p",null,"math.gl was inspired by and built upon some of the most proven open source JavaScript math libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://glmatrix.net/"},(0,r.kt)("inlineCode",{parentName:"a"},"gl-matrix"))," - math.gl classes use gl-matrix under the hood"),(0,r.kt)("li",{parentName:"ul"},"THREE.js math library - math.gl classes are API-compatible with a subset of the THREE.js classes and pass THREE.js test suites."),(0,r.kt)("li",{parentName:"ul"},"The CesiumJS math library (Apache2) - The geospatial and culling modules were ported from Cesium code base.")),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"MIT license. The libraries that the core ",(0,r.kt)("inlineCode",{parentName:"p"},"@math.gl/core")," module are built on (e.g. gl-matrix) are also all open source and MIT licensed."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@math.gl/geospatial")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@math.gl/culling")," modules include Cesium-derived code which is Apache2 licensed."),(0,r.kt)("p",null,"math.gl will never include any code that is not under permissive license."))}p.isMDXComponent=!0},7904:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/core-b38178fe628f9615fb32171dab17c500.png"},6956:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/culling-d76339cdfadd4583a216f4767abc91f3.png"},81:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/geohash-c0e3daa00779237f6b20605b7db6da44.png"},4749:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/quadkey-d0a4bf1a3af21e75bf2379d445f0b851.png"},8477:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/s2-7622e8f72c519d9a2bccfc8db662f445.png"},2529:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/geoid-2795dc73ac35ee0fa2d28b30d408631b.png"},4600:(t,e,a)=>{a.d(e,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSItNDEwIC00MTAgODIwIDgyMCI+DQogPHRpdGxlPldHUzg0IG1lYW4gRWFydGggcmFkaXVzPC90aXRsZT4NCiA8ZGVzYz5FcXVhdG9yaWFsICgnJ2EnJyksIHBvbGFyICgnJ2InJykgYW5kIG1lYW4gRWFydGggcmFkaWkgYXMgZGVmaW5lZCBpbiB0aGUgMTk4NCBXb3JsZCBHZW9kZXRpYyBTeXN0ZW0gcmV2aXNpb24sIGlsbHVzdHJhdGVkIGJ5IENNRyBMZWUuPC9kZXNjPg0KIDxkZWZzPg0KICA8cmFkaWFsR3JhZGllbnQgaWQ9ImdyYWRpZW50X3NoYWRlIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiIGZ4PSIzMCUiIGZ5PSIyMCUiPg0KICAgPHN0b3Agb2Zmc2V0PSIxMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz4NCiAgIDxzdG9wIG9mZnNldD0iOTklIiBzdG9wLWNvbG9yPSIjY2NlZWZmIi8+DQogIDwvcmFkaWFsR3JhZGllbnQ+DQogIDxwYXRoIGlkPSJhcnJvd2hlYWQiIGQ9Ik0gLTUsMjAgTCAwLDAgTCA1LDIwIiBzdHJva2UtZGFzaGFycmF5PSIxLDAiLz4NCiA8L2RlZnM+DQogPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9Ijk5OTk5IiBmaWxsPSIjZmZmZmZmIi8+DQogPGcgZm9udC1mYW1pbHk9IkhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmIiBmb250LXNpemU9IjQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIg0KICAgIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiPg0KICA8Zz4NCiAgIDxnIHN0cm9rZT0iIzAwMDBmZiI+DQogICAgPGVsbGlwc2UgY3g9IjAiIGN5PSIwIiByeD0iNDAwIiByeT0iMzAwIiBmaWxsPSJ1cmwoI2dyYWRpZW50X3NoYWRlKSIvPg0KICAgIDxwYXRoIHRyYW5zZm9ybT0ic2NhbGUoOSw3KSIgc3Ryb2tlPSJub25lIiBmaWxsPSIjNjY5OTAwIiBvcGFjaXR5PSIwLjI1Ig0KICAgICAgICAgIGQ9Ik0gMTAsLTUgQSAyMCwyMCAwIDAgMSAyMCwtMzUgQSAzMCwyMCAwIDAgMCAtMjAsLTM1IEEgMzAsMzAgMCAwIDAgMTAsLTUNCiAgICAgICAgICAgICBBIDMwLDMwIDAgMCAxIDAsNDAgQSAyNSwyMSAwIDAgMCAxMiwtNiIvPg0KICAgIDx1c2UgeGxpbms6aHJlZj0iI2Fycm93aGVhZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoICAgMCwtMzAwKSIvPg0KICAgIDx1c2UgeGxpbms6aHJlZj0iI2Fycm93aGVhZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwMCwgICAwKSByb3RhdGUoLTkwKSIvPg0KICAgIDx1c2UgeGxpbms6aHJlZj0iI2Fycm93aGVhZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoICAgMCwgICAwKSByb3RhdGUoIDkwKSIvPg0KICAgIDx1c2UgeGxpbms6aHJlZj0iI2Fycm93aGVhZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoICAgMCwgICAwKSByb3RhdGUoMTgwKSIvPg0KICAgIDxwYXRoIGQ9Ik0gLTQwMCwwIEggMCBWIC0zMDAiLz4NCiAgIDwvZz4NCiAgIDxnIGZpbGw9IiMwMDAwZmYiPg0KICAgIDx0ZXh0IHg9Ii0xODAiIHk9IjQwIiBkeT0iMC42ZXgiDQogICAgID48dHNwYW4gZm9udC1zdHlsZT0iaXRhbGljIj5hPC90c3Bhbj48dHNwYW4+JiMxNjA7PSA2Mzc4LjEzNzAga208L3RzcGFuPjwvdGV4dD4NCiAgICA8dGV4dCB4PSIxMCIgeT0iLTEyMCIgZHk9IjAuNmV4IiB0ZXh0LWFuY2hvcj0ic3RhcnQiDQogICAgID48dHNwYW4gZm9udC1zdHlsZT0iaXRhbGljIj5iPC90c3Bhbj48dHNwYW4+JiMxNjA7JiM4Nzc2OyA2MzU2Ljc1MjMga208L3RzcGFuPjwvdGV4dD4NCiAgIDwvZz4NCiAgPC9nPg0KICA8Zz4NCiAgIDxnIHN0cm9rZT0iI2NjMDAwMCIgc3Ryb2tlLWRhc2hhcnJheT0iMjYsOCI+DQogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjM2NyIvPg0KICAgIDxwYXRoIGQ9Ik0gMjEwLDMwMCBMIDAsMCIvPg0KICAgIDx1c2UgeGxpbms6aHJlZj0iI2Fycm93aGVhZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEwLDMwMCkgcm90YXRlKDE0NSkiLz4NCiAgIDwvZz4NCiAgIDxnIGZpbGw9IiNjYzAwMDAiPg0KICAgIDx0ZXh0IHg9IjAiIHk9IjEyMCIgZHk9IjAuNmV4Ig0KICAgICA+PHRzcGFuPjI8L3RzcGFuPjx0c3BhbiBmb250LXN0eWxlPSJpdGFsaWMiPmE8L3RzcGFuDQogICAgID48dHNwYW4+JiMxNjA7KyYjMTYwOzwvdHNwYW4+PHRzcGFuIGZvbnQtc3R5bGU9Iml0YWxpYyI+YjwvdHNwYW4NCiAgICAgPjx0c3BhbiB4PSIwIj5fX19fXzwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSIxZW0iPiYjMTYwOyAzPC90c3Bhbg0KICAgICA+PHRzcGFuIHg9IjAiIGR5PSIxLjVlbSI+JiM4Nzc2OyA2MzcxLjAwODgga208L3RzcGFuPjwvdGV4dD4NCiAgIDwvZz4NCiAgPC9nPg0KIDwvZz4NCjwvc3ZnPg0K"}}]);
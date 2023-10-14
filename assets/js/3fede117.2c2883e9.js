"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[1801],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(4137));const l={},i="Geospatial Models",o={unversionedId:"developer-guide/geospatial/geospatial-models",id:"developer-guide/geospatial/geospatial-models",title:"Geospatial Models",description:"This section introduces some basic concepts used when modeling the Earth. The terminology and descriptions align with the WGS (World Geodetic System).",source:"@site/../docs/developer-guide/geospatial/geospatial-models.md",sourceDirName:"developer-guide/geospatial",slug:"/developer-guide/geospatial/geospatial-models",permalink:"/math.gl/docs/developer-guide/geospatial/geospatial-models",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/developer-guide/geospatial/geospatial-models.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using with Other Frameworks",permalink:"/math.gl/docs/developer-guide/external-frameworks"},next:{title:"Web Mercator Coordinates",permalink:"/math.gl/docs/developer-guide/geospatial/web-mercator-coordinates"}},d={},s=[{value:"Earth Models",id:"earth-models",level:2},{value:"Earth Gravity Models",id:"earth-gravity-models",level:2}],p={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"geospatial-models"},"Geospatial Models"),(0,n.kt)("p",null,"This section introduces some basic concepts used when modeling the Earth. The terminology and descriptions align with the WGS (World Geodetic System)."),(0,n.kt)("h2",{id:"earth-models"},"Earth Models"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Earth Model"),(0,n.kt)("th",{parentName:"tr",align:null},"Modeled By"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Sphere")),(0,n.kt)("td",{parentName:"tr",align:null},"Web Mercator"),(0,n.kt)("td",{parentName:"tr",align:null},"Earth is a sphere. Permits fast visualization. Mainly used in the web mercator projection to quickly project ellipsoidal coordinates on a flat surface, with less than 0.5% error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Ellipsoid")),(0,n.kt)("td",{parentName:"tr",align:null},"WGS84"),(0,n.kt)("td",{parentName:"tr",align:null},"Earth is a (rotationally) flattened ellipsoid centered at Earth's center of gravity. This model is normally used to express WGS coordinates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Geoid")),(0,n.kt)("td",{parentName:"tr",align:null},"Earth Gravity Model"),(0,n.kt)("td",{parentName:"tr",align:null},"The shape that the ocean surface (extended through the continents) would take because of gravity and rotation of the Earth (ignoring winds, tides etc). It is a lumpy, roughly spherical object.")))),(0,n.kt)("h2",{id:"earth-gravity-models"},"Earth Gravity Models"),(0,n.kt)("p",null,"The Earth geoid can be calculated as an additive refinement of the elevation at each point on the ellipsoid."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Model"),(0,n.kt)("th",{parentName:"tr",align:null},"Resolution"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EGM84-30")),(0,n.kt)("td",{parentName:"tr",align:null},"0.5 degrees"),(0,n.kt)("td",{parentName:"tr",align:null},"Part of WGS84. Combined old GRS 80 with Doppler, satellite laser ranging and Very Long Baseline Interferometry (VLBI)."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EGM84")),(0,n.kt)("td",{parentName:"tr",align:null},"0.5 degrees"),(0,n.kt)("td",{parentName:"tr",align:null},"."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EGM96")),(0,n.kt)("td",{parentName:"tr",align:null},"15'x15'"),(0,n.kt)("td",{parentName:"tr",align:null},"Airborne gravity surveys"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EGM2008")),(0,n.kt)("td",{parentName:"tr",align:null},"2.5'x2.5'"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/GRACE_and_GRACE-FO"},"GRACE")," Satellite missions"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"The additive refinement is calculated using spherical harmonics using big coefficent files."),(0,n.kt)("p",null,"Newer models do provide additional precision, at the expense of considerable memory size for the coefficient files (and additional computational cost)."))}c.isMDXComponent=!0}}]);
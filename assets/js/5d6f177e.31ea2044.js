"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=l,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const r={},i="Math Utility Functions",o={unversionedId:"modules/core/api-reference/utilities",id:"modules/core/api-reference/utilities",title:"Math Utility Functions",description:"GLSL math function equivalents. Work on both single values and vectors.",source:"@site/../docs/modules/core/api-reference/utilities.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/utilities",permalink:"/math.gl/docs/modules/core/api-reference/utilities",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/core/api-reference/utilities.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SphericalCoordinates",permalink:"/math.gl/docs/modules/core/api-reference/spherical-coordinates"},next:{title:"Vector",permalink:"/math.gl/docs/modules/core/api-reference/vector"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Functions",id:"functions",level:2},{value:"configure",id:"configure",level:3},{value:"checkNumber",id:"checknumber",level:3},{value:"formatValue",id:"formatvalue",level:3},{value:"isArray",id:"isarray",level:3},{value:"clone",id:"clone",level:3},{value:"toRadians",id:"toradians",level:3},{value:"toDegrees",id:"todegrees",level:3},{value:"equals",id:"equals",level:3},{value:"exactEquals",id:"exactequals",level:3},{value:"GLSL equivalents",id:"glsl-equivalents",level:2},{value:"radians",id:"radians",level:3},{value:"degrees",id:"degrees",level:3},{value:"sin",id:"sin",level:3},{value:"cos",id:"cos",level:3},{value:"tan",id:"tan",level:3},{value:"asin",id:"asin",level:3},{value:"acos",id:"acos",level:3},{value:"atan",id:"atan",level:3},{value:"clamp",id:"clamp",level:3},{value:"Remarks",id:"remarks",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"math-utility-functions"},"Math Utility Functions"),(0,l.kt)("p",null,"GLSL math function equivalents. Work on both single values and vectors."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {config, equals} from '@math.gl/core';\n")),(0,l.kt)("p",null,"Setting configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import {config} from '@math.gl/core';\nconfig.EPSILON = 1e-12;\nconfig.debug = true;\nconfig.printRowMajor = true;\nconfig.precision = 4;\n")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"configure"},"configure"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"configure(options)")),(0,l.kt)("h3",{id:"checknumber"},"checkNumber"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"checkNumber(value)")),(0,l.kt)("h3",{id:"formatvalue"},"formatValue"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"formatValue(value, precision = config.precision || 4)")),(0,l.kt)("h3",{id:"isarray"},"isArray"),(0,l.kt)("p",null,"Returns true if value is either an array or a typed array"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"isArray(value)")),(0,l.kt)("p",null,"Note: does not return true for ArrayBuffers and DataViews"),(0,l.kt)("h3",{id:"clone"},"clone"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clone(array)If the array has a clone function, calls it, otherwise returns a copy")),(0,l.kt)("h3",{id:"toradians"},"toRadians"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"toRadians(degrees)")),(0,l.kt)("p",null,"Works on single values and vectors"),(0,l.kt)("h3",{id:"todegrees"},"toDegrees"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"toDegrees(radians)")),(0,l.kt)("p",null,"Works on single values and vectors"),(0,l.kt)("h3",{id:"equals"},"equals"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"equals(a, b, epsilon)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Works on single values and vectors"),(0,l.kt)("li",{parentName:"ul"},"Numeric values need to be closer than ",(0,l.kt)("inlineCode",{parentName:"li"},"config.EPSILON")),(0,l.kt)("li",{parentName:"ul"},"Objects will be compared with their ",(0,l.kt)("inlineCode",{parentName:"li"},".equals()")," method if present.")),(0,l.kt)("h3",{id:"exactequals"},"exactEquals"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"exactEquals(a, b)")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Works on single values and vectors."),(0,l.kt)("li",{parentName:"ul"},"Numeric values need to be exactly identical"),(0,l.kt)("li",{parentName:"ul"},"Objects will be compared with their ",(0,l.kt)("inlineCode",{parentName:"li"},".exactEquals()")," method if present.")),(0,l.kt)("h2",{id:"glsl-equivalents"},"GLSL equivalents"),(0,l.kt)("h3",{id:"radians"},"radians"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"radians(degrees)")),(0,l.kt)("p",null,"GLSL equivalent: Works on single values and vectors"),(0,l.kt)("h3",{id:"degrees"},"degrees"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"degrees(radians)")),(0,l.kt)("p",null,"GLSL equivalent: Works on single values and vectors"),(0,l.kt)("h3",{id:"sin"},"sin"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sin(radians)")),(0,l.kt)("p",null,"GLSL equivalent: Works on single values and vectors"),(0,l.kt)("h3",{id:"cos"},"cos"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cos(radians)")),(0,l.kt)("p",null,"GLSL equivalent: Works on single values and vectors"),(0,l.kt)("h3",{id:"tan"},"tan"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tan(radians)")),(0,l.kt)("p",null,"GLSL equivalent: Works on single values and vectors"),(0,l.kt)("h3",{id:"asin"},"asin"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"asin(radians)")),(0,l.kt)("p",null,"GLSL equivalent: Works on single values and vectors"),(0,l.kt)("h3",{id:"acos"},"acos"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"acos(radians)")),(0,l.kt)("p",null,"GLSL equivalent: Works on single values and vectors"),(0,l.kt)("h3",{id:"atan"},"atan"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"atan(radians)")),(0,l.kt)("h3",{id:"clamp"},"clamp"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clamp(value, min, max)")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When setting global configs, you may need to consider the order of code loadint when using ",(0,l.kt)("inlineCode",{parentName:"li"},"imports")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"requires"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[477],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(y,i(i({ref:t},s),{},{components:a})):r.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={},i="MathArray",o={unversionedId:"modules/core/api-reference/math-array",id:"modules/core/api-reference/math-array",title:"MathArray",description:"Usage",source:"@site/../docs/modules/core/api-reference/math-array.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/math-array",permalink:"/docs/modules/core/api-reference/math-array",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/core/api-reference/math-array.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Euler",permalink:"/docs/modules/core/api-reference/euler"},next:{title:"Matrix",permalink:"/docs/modules/core/api-reference/matrix"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"clone",id:"clone",level:3},{value:"copy",id:"copy",level:3},{value:"set",id:"set",level:3},{value:"fromArray",id:"fromarray",level:3},{value:"toString",id:"tostring",level:3},{value:"formatString",id:"formatstring",level:3},{value:"toArray",id:"toarray",level:3},{value:"toFloat32Array",id:"tofloat32array",level:3},{value:"equals",id:"equals",level:3},{value:"exactEquals",id:"exactequals",level:3},{value:"length",id:"length",level:3},{value:"lengthSquared",id:"lengthsquared",level:3},{value:"distance",id:"distance",level:3},{value:"distanceSquared",id:"distancesquared",level:3},{value:"normalize",id:"normalize",level:3},{value:"validate",id:"validate",level:3},{value:"check",id:"check",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"matharray"},"MathArray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"class MathArray extends Array\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"MathArray")," is a base class, and should not be instantiated directly."),(0,n.kt)("p",null,"Cloning an object"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const clone = vector.clone();\n")),(0,n.kt)("p",null,"Scaling with constants"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const u = v.scale(-1); // Reverse direction vector\n")),(0,n.kt)("p",null,"Scaling with vectors is very flexible, you can e.g. set a component to zero, or flip a component's sign."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const u = v.scale([1, 1, 0]); // Set z component to zero\nconst w = v.scale([1, -1, 1]); // Flip y component\n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"clone"},"clone"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.clone()")),(0,n.kt)("h3",{id:"copy"},"copy"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.copy(array)")),(0,n.kt)("h3",{id:"set"},"set"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.set(...args)")),(0,n.kt)("h3",{id:"fromarray"},"fromArray"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.fromArray(array, offset = 0)")),(0,n.kt)("h3",{id:"tostring"},"toString"),(0,n.kt)("p",null,"Calls ",(0,n.kt)("inlineCode",{parentName:"p"},"formatString")," with the global math.gl config."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.toString()")),(0,n.kt)("h3",{id:"formatstring"},"formatString"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.formatString(config)")),(0,n.kt)("h3",{id:"toarray"},"toArray"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.toArray(array = [], offset = 0)")),(0,n.kt)("h3",{id:"tofloat32array"},"toFloat32Array"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.toFloat32Array()")),(0,n.kt)("h3",{id:"equals"},"equals"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.equals(array)")),(0,n.kt)("h3",{id:"exactequals"},"exactEquals"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.exactEquals(array)")),(0,n.kt)("h3",{id:"length"},"length"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.length()")),(0,n.kt)("h3",{id:"lengthsquared"},"lengthSquared"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.lengthSquared()")),(0,n.kt)("h3",{id:"distance"},"distance"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.distance(mathArray)")),(0,n.kt)("h3",{id:"distancesquared"},"distanceSquared"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.distanceSquared(mathArray)")),(0,n.kt)("h3",{id:"normalize"},"normalize"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.normalize()")),(0,n.kt)("h3",{id:"validate"},"validate"),(0,n.kt)("p",null,"Checks if a ",(0,n.kt)("inlineCode",{parentName:"p"},"MathArray")," contains valid values."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.validate(array = this)")),(0,n.kt)("p",null,"Returns ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," if any value fails ",(0,n.kt)("inlineCode",{parentName:"p"},"Number.isFinite")," test."),(0,n.kt)("h3",{id:"check"},"check"),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"config.debug")," is true, validates the ",(0,n.kt)("inlineCode",{parentName:"p"},"MathArray")," and throws an error if it does not contains valid values."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"array.check(array = this)")),(0,n.kt)("p",null,"Mote: This method is called by all mutating methods."))}u.isMDXComponent=!0}}]);
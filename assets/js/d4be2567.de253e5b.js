"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[2150],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var o=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),s=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},d=function(e){var r=s(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),v=a,f=p["".concat(l,".").concat(v)]||p[v]||u[v]||c;return t?o.createElement(f,n(n({ref:r},d),{},{components:t})):o.createElement(f,n({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,n=new Array(c);n[0]=v;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,n[1]=i;for(var s=2;s<c;s++)n[s]=t[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5147:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const c={},n="Vector",i={unversionedId:"modules/core/api-reference/vector",id:"modules/core/api-reference/vector",title:"Vector",description:"Vector is a base class for Vector2, Vector3 and Vector4, providing common methods to those classes.",source:"@site/../docs/modules/core/api-reference/vector.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/vector",permalink:"/math.gl/docs/modules/core/api-reference/vector",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/core/api-reference/vector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math Utility Functions",permalink:"/math.gl/docs/modules/core/api-reference/utilities"},next:{title:"Vector2",permalink:"/math.gl/docs/modules/core/api-reference/vector2"}},l={},s=[{value:"Inheritance",id:"inheritance",level:2},{value:"Methods",id:"methods",level:2},{value:"Vector.clone()",id:"vectorclone",level:3},{value:"Vector.copy(array)",id:"vectorcopyarray",level:3},{value:"Vector.set(...args)",id:"vectorsetargs",level:3},{value:"Vector.fromArray(array, offset = 0)",id:"vectorfromarrayarray-offset--0",level:3},{value:"Vector.toString()",id:"vectortostring",level:3},{value:"Vector.toArray(array = [], offset = 0)",id:"vectortoarrayarray---offset--0",level:3},{value:"Vector.equals(array)",id:"vectorequalsarray",level:3},{value:"Vector.exactEquals(array)",id:"vectorexactequalsarray",level:3},{value:"Vector.validate(array = this)",id:"vectorvalidatearray--this",level:3},{value:"Vector.check(array = this)",id:"vectorcheckarray--this",level:3},{value:"Vector.normalize()",id:"vectornormalize",level:3}],d={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vector"},"Vector"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector")," is a base class for ",(0,a.kt)("a",{parentName:"p",href:"/docs/modules/core/api-reference/vector2"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector2")),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/modules/core/api-reference/vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/modules/core/api-reference/vector4"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector4")),", providing common methods to those classes."),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"class Vector extends [MathArray](./docs/api-reference/math-array) extends [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"vectorclone"},"Vector.clone()"),(0,a.kt)("h3",{id:"vectorcopyarray"},"Vector.copy(array)"),(0,a.kt)("h3",{id:"vectorsetargs"},"Vector.set(...args)"),(0,a.kt)("h3",{id:"vectorfromarrayarray-offset--0"},"Vector.fromArray(array, offset = 0)"),(0,a.kt)("h3",{id:"vectortostring"},"Vector.toString()"),(0,a.kt)("h3",{id:"vectortoarrayarray---offset--0"},"Vector.toArray(array = [], offset = 0)"),(0,a.kt)("h3",{id:"vectorequalsarray"},"Vector.equals(array)"),(0,a.kt)("h3",{id:"vectorexactequalsarray"},"Vector.exactEquals(array)"),(0,a.kt)("h3",{id:"vectorvalidatearray--this"},"Vector.validate(array = this)"),(0,a.kt)("h3",{id:"vectorcheckarray--this"},"Vector.check(array = this)"),(0,a.kt)("h3",{id:"vectornormalize"},"Vector.normalize()"))}u.isMDXComponent=!0}}]);
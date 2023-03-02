"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,g=c["".concat(p,".").concat(s)]||c[s]||m[s]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},o="Debugging",l={unversionedId:"modules/core/developer-guide/debugging",id:"modules/core/developer-guide/debugging",title:"Debugging",description:"This article is a work in progress.",source:"@site/../docs/modules/core/developer-guide/debugging.md",sourceDirName:"modules/core/developer-guide",slug:"/modules/core/developer-guide/debugging",permalink:"/docs/modules/core/developer-guide/debugging",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/core/developer-guide/debugging.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get Started",permalink:"/docs/developer-guide/get-started"},next:{title:"Floating Point",permalink:"/docs/modules/core/developer-guide/floating-point"}},p={},d=[{value:"About Validation and Debug Support",id:"about-validation-and-debug-support",level:2},{value:"About &quot;Printing&quot;",id:"about-printing",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debugging"},"Debugging"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article is a work in progress.")),(0,a.kt)("h2",{id:"about-validation-and-debug-support"},"About Validation and Debug Support"),(0,a.kt)("p",null,"TBA:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Turning on an off"),(0,a.kt)("li",{parentName:"ul"},"performance implications")),(0,a.kt)("h2",{id:"about-printing"},'About "Printing"'),(0,a.kt)("p",null,"Generating a string representation of a math.gl object with desired precision and formatting."),(0,a.kt)("p",null,"Every math.gl object has a ",(0,a.kt)("inlineCode",{parentName:"p"},"formatString({...opts})")," method that allows you to stringify an object with special options set. Each object also defines the built-in JavaScript function ",(0,a.kt)("inlineCode",{parentName:"p"},"toString()")," to call ",(0,a.kt)("inlineCode",{parentName:"p"},"formatString()")," with the global printing options in the math.gl ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," object."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toString")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"formatString")," methods print with controllable precision")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Print Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"printPrecision")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"4")),(0,a.kt)("td",{parentName:"tr",align:null},"Number of significant digits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"printTypes")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"Prints the name of the math.gl type (e.g. ",(0,a.kt)("inlineCode",{parentName:"td"},"Vector3[...]")," instead of ",(0,a.kt)("inlineCode",{parentName:"td"},"[...]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"printDegrees")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"Prints degrees instead of radians (e.g. for ",(0,a.kt)("inlineCode",{parentName:"td"},"Euler")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"SphericalCoordinates"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"printRowMajor")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"Prints matrices as row major which makes them look more familiar instead of as column major (which is how they are stored internally for WebGL compatibility).")))))}m.isMDXComponent=!0}}]);
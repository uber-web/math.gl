"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[5570],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(r),m=l,g=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(7462),l=(r(7294),r(4137));const a={},i="Get Started",o={unversionedId:"developer-guide/get-started",id:"developer-guide/get-started",title:"Get Started",description:"Installation",source:"@site/../docs/developer-guide/get-started.md",sourceDirName:"developer-guide",slug:"/developer-guide/get-started",permalink:"/math.gl/docs/developer-guide/get-started",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/developer-guide/get-started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guide",permalink:"/math.gl/docs/upgrade-guide"},next:{title:"Debugging",permalink:"/math.gl/docs/developer-guide/debugging"}},p={},d=[{value:"Installation",id:"installation",level:2},{value:"TypeScript",id:"typescript",level:2}],u={toc:d},s="wrapper";function c(e){let{components:t,...r}=e;return(0,l.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"get-started"},"Get Started"),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"If using a bundler like webpack to build your app with npm modules, use ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," to install ",(0,l.kt)("inlineCode",{parentName:"p"},"@math.gl/core")," and any other math.gl modules you need."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install @math.gl/core\n")),(0,l.kt)("p",null,"Each math.gl module should come with 3 distributions. Normally the ",(0,l.kt)("inlineCode",{parentName:"p"},"esm")," distribution will be selected by your bundler."),(0,l.kt)("p",null,"For bundlers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dist/es5")," - source tree fully transpiled to ES5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dist/esm")," - source tree, fully transpiled to ES5 except ",(0,l.kt)("inlineCode",{parentName:"li"},"import/export")," keywords are left for the bundler to enable tree shaking."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dist/es6")," - very lightly transpiled, mostly ES2020 to simplify debugging.")),(0,l.kt)("h2",{id:"typescript"},"TypeScript"),(0,l.kt)("p",null,"Type defintions are provided with each module. No need to install any separate types."))}c.isMDXComponent=!0}}]);
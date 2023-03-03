"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||u[c]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},o="Upgrade Guide",l={unversionedId:"upgrade-guide",id:"upgrade-guide",title:"Upgrade Guide",description:"Upgrading to v3.6",source:"@site/../docs/upgrade-guide.md",sourceDirName:".",slug:"/upgrade-guide",permalink:"/math.gl/docs/upgrade-guide",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/upgrade-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What's New",permalink:"/math.gl/docs/whats-new"},next:{title:"Roadmap",permalink:"/math.gl/docs/roadmap"}},p={},d=[{value:"Upgrading to v3.6",id:"upgrading-to-v36",level:2},{value:"Upgrading to v3.0",id:"upgrading-to-v30",level:2},{value:"Matrix API changes",id:"matrix-api-changes",level:3},{value:"Matrix transforms now return Arrays by default",id:"matrix-transforms-now-return-arrays-by-default",level:3},{value:"Matrix setter functions no longer support ommitted parameters",id:"matrix-setter-functions-no-longer-support-ommitted-parameters",level:3},{value:"Upgrading to v2.0",id:"upgrading-to-v20",level:2},{value:"Upgrading to v1.1",id:"upgrading-to-v11",level:2},{value:"Removed Functionality",id:"removed-functionality",level:3}],m={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade-guide"},"Upgrade Guide"),(0,a.kt)("h2",{id:"upgrading-to-v36"},"Upgrading to v3.6"),(0,a.kt)("p",null,"In version 3.6 the entire math.gl code base was converted to typescript (",(0,a.kt)("inlineCode",{parentName:"p"},".ts"),").\nWhile the API itself has not changed, in some cases, the introduction of types\nmade it harder to keep supporting some type signatures and overloads."),(0,a.kt)("p",null,"Known changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Matrix4.lookAt()")," - Now only accepts named parameters."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SphericalCoordinates()")," - Constructor is now more restrictive in terms of what parameters it accepts.")),(0,a.kt)("p",null,"Note that some omissions may be unintentional, feel free to report upgrade issues\nin the math.gl github repo."),(0,a.kt)("h2",{id:"upgrading-to-v30"},"Upgrading to v3.0"),(0,a.kt)("h3",{id:"matrix-api-changes"},"Matrix API changes"),(0,a.kt)("p",null,"Matrix setter functions no longer support ommitted parameters. (Motivation: Increased API rigor, improved debugging and library compactness)."),(0,a.kt)("h3",{id:"matrix-transforms-now-return-arrays-by-default"},"Matrix transforms now return Arrays by default"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Matrix4")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Matrix3")," classes no longer by default create new ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector4")," instances. Instead they create standard JavaScript arrays."),(0,a.kt)("p",null,"Previously a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector4")," would be allocated if no ",(0,a.kt)("inlineCode",{parentName:"p"},"result")," parameter was provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Matrix4, Vector4} from '@math.gl/core';\nconst vector = new Matrix4().transform([0, 0, 0, 1]);\nassert(vector instanceof Vector4);\n")),(0,a.kt)("p",null,"Now a plain JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," is allocated"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Matrix4} from '@math.gl/core';\nconst vector = new Matrix4().transform([0, 0, 0, 1]);\nassert(vector instanceof Array);\n")),(0,a.kt)("p",null,"The old behavior can be restored by providing the result parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Matrix4, Vector4} from '@math.gl/core';\nconst vector = new Matrix4().transform([0, 0, 0, 1], new Vector4());\nassert(vector instanceof Vector4);\n")),(0,a.kt)("p",null,"Motivation: This change reduces dependencies between math.gl core classes which improves tree-shaking and bundle sizes."),(0,a.kt)("h3",{id:"matrix-setter-functions-no-longer-support-ommitted-parameters"},"Matrix setter functions no longer support ommitted parameters"),(0,a.kt)("p",null,"Motivation: This change increases rigor, facilitates debugging, and improves library compactness, and the use case for default parameters was questionable."),(0,a.kt)("p",null,"The following functions have been deprecated:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"),(0,a.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix*.setColumnMajor")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix*.set")),(0,a.kt)("td",{parentName:"tr",align:null},"API simplification")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix4.transformPoint")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix4.transform")),(0,a.kt)("td",{parentName:"tr",align:null},"Name alignment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix4.transformVector")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix4.transform")),(0,a.kt)("td",{parentName:"tr",align:null},"Name alignment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix4.transformDirection")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix4.transformAsVector")),(0,a.kt)("td",{parentName:"tr",align:null},"Name alignment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix3.transformVector")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix3.transform")),(0,a.kt)("td",{parentName:"tr",align:null},"Name alignment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix3.transformVector2")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix3.transform")),(0,a.kt)("td",{parentName:"tr",align:null},"Generalize")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix3.transformVector3")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Matrix3.transform")),(0,a.kt)("td",{parentName:"tr",align:null},"Generalize")))),(0,a.kt)("p",null,"The following functions have been removed:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Replacement"),(0,a.kt)("th",{parentName:"tr",align:null},"Reason"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Vector2.cross")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3.cross")),(0,a.kt)("td",{parentName:"tr",align:null},"Cross products by definition work on 3 dimensional vectors.")))),(0,a.kt)("h2",{id:"upgrading-to-v20"},"Upgrading to v2.0"),(0,a.kt)("p",null,"Experimental exports are now exported with a leading underscore (","_","), instead of as members of the ",(0,a.kt)("inlineCode",{parentName:"p"},"experimental")," namespace:"),(0,a.kt)("p",null,"NOW: math.gl v2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {_Euler as Euler} from '@math.gl/core';\n")),(0,a.kt)("p",null,"BEFORE: math.gl v1.x"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {experimental} from '@math.gl/core';\nconst {Euler} = experimental;\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"experimental")," name space export has been removed."),(0,a.kt)("h2",{id:"upgrading-to-v11"},"Upgrading to v1.1"),(0,a.kt)("h3",{id:"removed-functionality"},"Removed Functionality"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Euler")," class is no longer included as an experimental export. It would need to be imported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder."))}u.isMDXComponent=!0}}]);
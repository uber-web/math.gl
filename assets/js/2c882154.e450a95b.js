"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[4857],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(r),d=a,v=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={},i="Vector4",l={unversionedId:"modules/core/api-reference/vector4",id:"modules/core/api-reference/vector4",title:"Vector4",description:"Vector4 is designed to hold three dimensional coordinates in projective space. Using the projective representation allows JavaScript applications to perform the same calculations that the GPU does.",source:"@site/../docs/modules/core/api-reference/vector4.md",sourceDirName:"modules/core/api-reference",slug:"/modules/core/api-reference/vector4",permalink:"/math.gl/docs/modules/core/api-reference/vector4",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/core/api-reference/vector4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector3",permalink:"/math.gl/docs/modules/core/api-reference/vector3"},next:{title:"Overview",permalink:"/math.gl/docs/modules/culling/"}},c={},m=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Members",id:"members",level:2},{value:"x, y, z, w",id:"x-y-z-w",level:3},{value:"Methods",id:"methods",level:2},{value:"constructor(x?: number, y?: number, z?: number, w?: number)",id:"constructorx-number-y-number-z-number-w-number",level:3},{value:"set(x?: number, y?: number, z?: number, w?: number): thos",id:"setx-number-y-number-z-number-w-number-thos",level:3},{value:"distance(vector: number4): number",id:"distancevector-number4-number",level:3},{value:"distanceSquared(vector: number4): number",id:"distancesquaredvector-number4-number",level:3},{value:"dot(vector: number4): number",id:"dotvector-number4-number",level:3},{value:"add(vector: number4): Vector4",id:"addvector-number4-vector4",level:3},{value:"subtract(vector: number4): Vector4",id:"subtractvector-number4-vector4",level:3},{value:"multiply(vector: number4): Vector4",id:"multiplyvector-number4-vector4",level:3},{value:"divide(vector: number4): Vector4",id:"dividevector-number4-vector4",level:3},{value:"scale(vector: number4): Vector4",id:"scalevector-number4-vector4",level:3},{value:"negate(): this",id:"negate-this",level:3},{value:"inverse(): this",id:"inverse-this",level:3},{value:"normalize(): this",id:"normalize-this",level:3},{value:"lerp(vector: number4, coefficient: number): this",id:"lerpvector-number4-coefficient-number-this",level:3},{value:"transform(matrix4: number16): Vector4",id:"transformmatrix4-number16-vector4",level:3},{value:"transformByMatrix4(matrix4: number16): Vector4",id:"transformbymatrix4matrix4-number16-vector4",level:3},{value:"transformByMatrix3(matrix3: number9): Vector4",id:"transformbymatrix3matrix3-number9-vector4",level:3},{value:"transformByMatrix2(matrix2: number4): Vector4",id:"transformbymatrix2matrix2-number4-vector4",level:3},{value:"transformByQuaternion(quaternion: number4): Vector4",id:"transformbyquaternionquaternion-number4-vector4",level:3}],u={toc:m},s="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vector4"},"Vector4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector4")," is designed to hold three dimensional coordinates in projective space. Using the projective representation allows JavaScript applications to perform the same calculations that the GPU does."),(0,a.kt)("p",null,"A main feature of vectors is that they can be transformed by matrices and quaternions. And ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector4"),"s are particular general when transformed with 4x4 matrices (",(0,a.kt)("inlineCode",{parentName:"p"},"Matrix4")," or just arrays of 16 numbers), as those can include translations, projections and other transformations that cannot be expressed by e.g. 3x3 matrices or quaternions alone."),(0,a.kt)("p",null,"Note that the fourth element ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," is not a coordinate but a scaling factor. The fourth component (",(0,a.kt)("inlineCode",{parentName:"p"},"w"),") is usually set to either"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," to represent a vector"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," to represent a point")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector4")," methods will keep the vector scaled so that ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," (if non-zero) is ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("p",null,"The math behind ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector4")," comes from projective geometry, which significantly generalizes calculations and removes a number of special cases compared to affine geometry. It is not necessary to understand the details to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector4"),", but see the developer guide for some additional xbackground."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {Vector4} from '@math.gl/core';\nconst vector = new Vector4(1, 1, 1, 0);\nconst point = new Vector4(0, 0, 0, 1);\n")),(0,a.kt)("h2",{id:"inheritance"},"Inheritance"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector4")," extends ",(0,a.kt)("a",{parentName:"p",href:"./vector"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector"))," extends ",(0,a.kt)("a",{parentName:"p",href:"./math-array"},(0,a.kt)("inlineCode",{parentName:"a"},"MathArray"))," extends ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},(0,a.kt)("inlineCode",{parentName:"a"},"Array"))),(0,a.kt)("h2",{id:"members"},"Members"),(0,a.kt)("h3",{id:"x-y-z-w"},"x, y, z, w"),(0,a.kt)("p",null,"Gets or sets element 0, 1, 2 or 3 respectively"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("p",null,"Many of the most commonly used ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector2")," methods are inherited from ",(0,a.kt)("a",{parentName:"p",href:"./math-array"},(0,a.kt)("inlineCode",{parentName:"a"},"MathArray")),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.clone()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.copy(array)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.set(...args)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.fromArray(array, offset = 0)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.toString()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.toArray(array = [], offset = 0)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.equals(array)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.exactEquals(array)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.validate(array = this)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.check(array = this)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Vector4.normalize()"))),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector2")," is a subclass of the built in JavaScript ",(0,a.kt)("inlineCode",{parentName:"p"},"Array")," and can thus e.g. be supplied as a parameter to any function expecting an ",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),"."),(0,a.kt)("h3",{id:"constructorx-number-y-number-z-number-w-number"},"constructor(x?: number, y?: number, z?: number, w?: number)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"new Vector4(x = 0, y = 0, z = 0, w = 0)")),(0,a.kt)("p",null,"Creates a new, empty ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector4")),(0,a.kt)("h3",{id:"setx-number-y-number-z-number-w-number-thos"},"set(x?: number, y?: number, z?: number, w?: number): thos"),(0,a.kt)("p",null,"Updates a ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector4")),(0,a.kt)("h3",{id:"distancevector-number4-number"},"distance(vector: number","[4]","): number"),(0,a.kt)("p",null,"Returns the distance to the specifed Vector."),(0,a.kt)("h3",{id:"distancesquaredvector-number4-number"},"distanceSquared(vector: number","[4]","): number"),(0,a.kt)("p",null,"Returns the squared distance to the specifed Vector. Fast to calculate than distance and often sufficient for e.g. sorting etc."),(0,a.kt)("h3",{id:"dotvector-number4-number"},"dot(vector: number","[4]","): number"),(0,a.kt)("p",null,"Calculates the dot product with the supplied ",(0,a.kt)("inlineCode",{parentName:"p"},"vector"),"."),(0,a.kt)("h3",{id:"addvector-number4-vector4"},"add(vector: number","[4]","): Vector4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"add(...vectors)")),(0,a.kt)("h3",{id:"subtractvector-number4-vector4"},"subtract(vector: number","[4]","): Vector4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"subtract(...vectors)")),(0,a.kt)("h3",{id:"multiplyvector-number4-vector4"},"multiply(vector: number","[4]","): Vector4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"multiply(...vectors)")),(0,a.kt)("h3",{id:"dividevector-number4-vector4"},"divide(vector: number","[4]","): Vector4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"divide(...vectors)")),(0,a.kt)("h3",{id:"scalevector-number4-vector4"},"scale(vector: number","[4]","): Vector4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scale(scale)")),(0,a.kt)("h3",{id:"negate-this"},"negate(): this"),(0,a.kt)("p",null,"Negates each element in the vector."),(0,a.kt)("h3",{id:"inverse-this"},"inverse(): this"),(0,a.kt)("p",null,"Inverses (",(0,a.kt)("inlineCode",{parentName:"p"},"x = 1/x"),") each element in the vector."),(0,a.kt)("h3",{id:"normalize-this"},"normalize(): this"),(0,a.kt)("p",null,"Normalizes the vector. Same direction but ",(0,a.kt)("inlineCode",{parentName:"p"},"len()")," will now return ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("h3",{id:"lerpvector-number4-coefficient-number-this"},"lerp(vector: number","[4]",", coefficient: number): this"),(0,a.kt)("p",null,"Linearly interpolates between the vectors current value and the supplied ",(0,a.kt)("inlineCode",{parentName:"p"},"vector"),"."),(0,a.kt)("h3",{id:"transformmatrix4-number16-vector4"},"transform(matrix4: number","[16]","): Vector4"),(0,a.kt)("p",null,"Equivalent to ",(0,a.kt)("inlineCode",{parentName:"p"},"transformByMatrix4"),"."),(0,a.kt)("h3",{id:"transformbymatrix4matrix4-number16-vector4"},"transformByMatrix4(matrix4: number","[16]","): Vector4"),(0,a.kt)("p",null,"Transforms a vector by the provided 4x4 matrix."),(0,a.kt)("p",null,"Note: Scales the resulting vector to ensure that ",(0,a.kt)("inlineCode",{parentName:"p"},"w"),", if non-zero, is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("h3",{id:"transformbymatrix3matrix3-number9-vector4"},"transformByMatrix3(matrix3: number","[9]","): Vector4"),(0,a.kt)("p",null,"Transforms the vector's ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"z")," values by the provided 3x3 matrix."),(0,a.kt)("h3",{id:"transformbymatrix2matrix2-number4-vector4"},"transformByMatrix2(matrix2: number","[4]","): Vector4"),(0,a.kt)("p",null,"Transform the vector's ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," values by the provided 2x2 matrix."),(0,a.kt)("h3",{id:"transformbyquaternionquaternion-number4-vector4"},"transformByQuaternion(quaternion: number","[4]","): Vector4"),(0,a.kt)("p",null,"Transform the vector by the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"quaternion"),"."))}p.isMDXComponent=!0}}]);
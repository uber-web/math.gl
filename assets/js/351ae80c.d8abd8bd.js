"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[3306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s="Transformations",i={unversionedId:"modules/core/developer-guide/transformations",id:"modules/core/developer-guide/transformations",title:"Transformations",description:"math.gl allows you to create mathematical objects and then apply transformations on those objects. Objects are typically vectors but can also be more complex object such as spheres, planes, boxes etc, and transformations are typically represented by matrices and quaternions.",source:"@site/../docs/modules/core/developer-guide/transformations.md",sourceDirName:"modules/core/developer-guide",slug:"/modules/core/developer-guide/transformations",permalink:"/math.gl/docs/modules/core/developer-guide/transformations",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/core/developer-guide/transformations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using with Other Frameworks",permalink:"/math.gl/docs/modules/core/developer-guide/external-frameworks"},next:{title:"view-and-projection",permalink:"/math.gl/docs/modules/core/developer-guide/view-and-projection"}},l={},c=[{value:"Representing Transformations",id:"representing-transformations",level:2},{value:"Applying transformations",id:"applying-transformations",level:2},{value:"Types of Transformations",id:"types-of-transformations",level:2},{value:"Composing Transformations",id:"composing-transformations",level:2},{value:"Order Matters",id:"order-matters",level:2},{value:"About Rotations",id:"about-rotations",level:2},{value:"Decomposing Transformations",id:"decomposing-transformations",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transformations"},"Transformations"),(0,o.kt)("p",null,"math.gl allows you to create mathematical objects and then apply transformations on those objects. Objects are typically vectors but can also be more complex object such as spheres, planes, boxes etc, and transformations are typically represented by matrices and quaternions."),(0,o.kt)("h2",{id:"representing-transformations"},"Representing Transformations"),(0,o.kt)("p",null,"Transformations can be represented in many different notations but for computational purposes it is efficient to express them as matrices, or in some cases as quaternions."),(0,o.kt)("p",null,"The most general transform is a 4x4 matrix. See the article on ",(0,o.kt)("a",{parentName:"p",href:"/math.gl/docs/modules/core/concepts/homogeneous-coordinates"},"homogeneous coordinates")," for some advantages in using 4x4 matrices to represent transformations."),(0,o.kt)("h2",{id:"applying-transformations"},"Applying transformations"),(0,o.kt)("p",null,"Most math.gl classes offer a ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," method that accepts matrices and quaternions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// prettier-ignore\nconst transformedVector1 = new Vector4(1, 0, 0, 1).transform([\n  1, 0, 0, 0,\n  0, 1, 0, 0,\n  0, 0, 1, 0,\n  0, 0, 0, 1\n]);\n// or\nconst transformedVector2 = new Vector4(1, 0, 0, 1).transform(\n  new Matrix4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])\n);\n")),(0,o.kt)("p",null,"The various vector classes also offer methods to transform with smaller matrices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const transformedVector1 = new Vector4(1, 0, 0, 1).transformByMatrix3([1, 0, 0, 0, 1, 0, 0, 0, 1]);\n// or\nconst transformedVector2 = new Vector3(1, 0, 0).transformByMatrix2(new Matrix2([1, 0, 0, 1]));\n")),(0,o.kt)("p",null,"Quaternion transformations are also supported on some objects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const transformedVector1 = new Vector4(1, 0, 0).transformByQuaternion([0, 0, 0, 1]);\n// or\nconst transformedVector2 = new Vector3(1, 0, 0).transformByQuaternion(new Quaternion([1, 0, 0, 1]));\n")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"<object>.transform()"),' operations modify the object being transformed (and also return the modified object to enable "chaining" of calls).'),(0,o.kt)("p",null,"Alternatively, transformations can also be performed via the matrix and quaternion classes. In this case, the transformation is stored in the result parameters (a new array is allocated if it ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," is not supplied.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const transformedVector1 = new Vector4(1, 0, 0).transformByQuaternion([0, 0, 0, 1]);\n// or\nconst result = new Vector3();\nconst transformedVector2 = new Quaternion([1, 0, 0, 1]).transformByQuaternion([1, 0, 0], result);\n")),(0,o.kt)("h2",{id:"types-of-transformations"},"Types of Transformations"),(0,o.kt)("p",null,"The basic transformations are rotations, scalings, and translations."),(0,o.kt)("h2",{id:"composing-transformations"},"Composing Transformations"),(0,o.kt)("p",null,"One of the most powerful aspects of using matrices to manage transformations is that matrices can be multiplied together using linear algebra."),(0,o.kt)("p",null,"This allows us to build up a complex transformation by multiplying together component parts."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Matrix4")," provides a number of transformation methods ('scale', 'rotate', 'translate', ...) that allow us to build transformation matrices. These can be applied to an identity matrix (e.g. a newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"Matrix4"),") or to a matrix that already contains other transformations."),(0,o.kt)("h2",{id:"order-matters"},"Order Matters"),(0,o.kt)("p",null,"When composing (i.e. multiplying) matrices it is critical to consider the order in which they are being applied, as changing the order of component will in most cases change the resulting composite transformation. It is not hard to verify that this is consistent with geometric intuition by composing a few operations on paper."),(0,o.kt)("p",null,"Because of this the ",(0,o.kt)("inlineCode",{parentName:"p"},"Matrix4")," class provides two matrix multiplication methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"multiplyLeft")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"multiplyRight")," that force you to make explicit what you intend when multiplying two matrices."),(0,o.kt)("p",null,"All ",(0,o.kt)("inlineCode",{parentName:"p"},"Matrix4")," transformation methods ('scale', 'rotate', 'translate', ...) conceptually correspond to multiplying in a new transformation matrix from the right (although these methods internally are more efficient in that they don't create any temporary objects and they only do the minimal amount of changes to the matrix required for that specific transformation)."),(0,o.kt)("p",null,"In the end, the point or vector to be transformed will be multiplied in from the right, which means that a typical composed transformation needs to be read in reverse order. I.e. in the example below, the vector will first be rotated, then transformed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"partialTransform"),", then scaled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Illustrates that transformations are applied in reverse order\nconst partialTransform = new Matrix4(...);\nconst fullTransform = new Matrix4()\n  .scale([1, -1, 1])\n  .multiplyRight(partialTransform)\n  .rotateX({radians: Math.PI});\nconst v = fullTransform.transformVector(new Vector4(...));\n")),(0,o.kt)("h2",{id:"about-rotations"},"About Rotations"),(0,o.kt)("p",null,"For more in-depth background about rotations, see the separate article on ",(0,o.kt)("a",{parentName:"p",href:"/math.gl/docs/modules/core/concepts/rotations"},"rotations"),"."),(0,o.kt)("p",null,"If you have a vector with 3 elements you can rotate it around an axis and a point like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const v = new Vector3([1, 2, 3]).rotateZ({radians: ..., origin: [1, 1, 0]});\n")),(0,o.kt)("h2",{id:"decomposing-transformations"},"Decomposing Transformations"),(0,o.kt)("p",null,"The ability to compose transformations naturally leads to the possibility of ",(0,o.kt)("em",{parentName:"p"},"decomposing")," a composite transformations into its constituent parts. This is possible, with certain caveats (not all matrices are directly decomposable into rotation, translation and scale. Shear is currently not handled)."),(0,o.kt)("p",null,"Sepcifically, the math.gl ",(0,o.kt)("inlineCode",{parentName:"p"},"Matrix4")," object exposes the ",(0,o.kt)("inlineCode",{parentName:"p"},"getScale"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getTranslation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getRotation")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"getRotationMatrix3"),") methods are provided for this purpose:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const transform = new Matrix4()\n  .translate([10, 10, 0])\n  .rotateX(Math.PI / 4)\n  .scale(5);\ntransform.getScale(); // [5, 5, 5]\ntransform.getTranslation(); // [ 10, 10, 0]\n")))}d.isMDXComponent=!0}}]);
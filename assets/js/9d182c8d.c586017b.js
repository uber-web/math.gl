"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[9323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),m=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(7462),r=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"modules/core/developer-guide/view-and-projection",id:"modules/core/developer-guide/view-and-projection",title:"view-and-projection",description:"View and Projection Matrices",source:"@site/../docs/modules/core/developer-guide/view-and-projection.md",sourceDirName:"modules/core/developer-guide",slug:"/modules/core/developer-guide/view-and-projection",permalink:"/docs/modules/core/developer-guide/view-and-projection",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/core/developer-guide/view-and-projection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transformations",permalink:"/docs/modules/core/developer-guide/transformations"},next:{title:"Geospatial Models",permalink:"/docs/developer-guide/geospatial-models"}},c={},m=[{value:"View and Projection Matrices",id:"view-and-projection-matrices",level:2},{value:"View and Projection Matrices",id:"view-and-projection-matrices-1",level:2},{value:"Creating a View Matrix",id:"creating-a-view-matrix",level:3},{value:"Projection Matrices",id:"projection-matrices",level:2},{value:"Perspective Projection Matrix",id:"perspective-projection-matrix",level:3},{value:"Creating an Orthographic Projection Matrix",id:"creating-an-orthographic-projection-matrix",level:3},{value:"Switching between Perspective and Orthographic Views",id:"switching-between-perspective-and-orthographic-views",level:3},{value:"About Projection Matrices",id:"about-projection-matrices",level:2},{value:"Decomposing a ViewProjection Matrix",id:"decomposing-a-viewprojection-matrix",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:m},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"view-and-projection-matrices"},"View and Projection Matrices"),(0,r.kt)("p",null,'One of the major functions of any 3D math library is to let applications create view and projection matrices to enable positioning of the viewer in a 3D world and projection of a field-of-view onto a flat "screen".'),(0,r.kt)("h2",{id:"view-and-projection-matrices-1"},"View and Projection Matrices"),(0,r.kt)("p",null,"To set up a 4x4 view projection matrix you need a view matrix (specifying the position, direction and orientation of the camera) and a projection matrix (specifying the characteristics of the camera such as its field of view etc)."),(0,r.kt)("p",null,"The purpose of the view matrix is to translate and rotate your world coordinates so that the eye is located in the origin ",(0,r.kt)("inlineCode",{parentName:"p"},"[0, 0, 0]"),", looking down the positive ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," axis, rotated so that the right direction is ",(0,r.kt)("inlineCode",{parentName:"p"},"up"),'. This is called the "view coordinate system".'),(0,r.kt)("p",null,'The purpose of the projection matrix is to transform from view coordinates to "clipspace" coordinates (which is the only coordinate system that the GPU can work directly with). If a point is between ',(0,r.kt)("inlineCode",{parentName:"p"},"-1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (after ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," scaling) in clipspace, it will be rendered. The ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," coordinate in clipspace is also scaled (using 'near' and 'far' planes) and if between ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," it is used for depth test."),(0,r.kt)("p",null,"Note: while a projection matrix may generate coordinates with ",(0,r.kt)("inlineCode",{parentName:"p"},"w !== 1"),", the GPU will automatically divide the ",(0,r.kt)("inlineCode",{parentName:"p"},"xyzw")," coordinates with the ",(0,r.kt)("inlineCode",{parentName:"p"},"w"),' coordinateof any positions it receives thus and "normalize" the ',(0,r.kt)("inlineCode",{parentName:"p"},"w")," coordinate. Thus, there is no need to do this scaling manually in shaders unless doing additional arithmetic in clipspace."),(0,r.kt)("h3",{id:"creating-a-view-matrix"},"Creating a View Matrix"),(0,r.kt)("p",null,"To create a view matrix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Matrix4.lookAt({...})"))),(0,r.kt)("p",null,"Normally positions are transformed by the view matrix. If doing work (e.g. lighting) in view space you will also want to transform other geometry such as normals."),(0,r.kt)("h2",{id:"projection-matrices"},"Projection Matrices"),(0,r.kt)("p",null,'Projection matrices typically show everything inside a frustum (truncated pyramid) or a cube in the view space. Their job is to "scale" or "skew" the geometry inside this virtual shape into the clipspace cube, which is the coordinate system the GPU takes as input.'),(0,r.kt)("h3",{id:"perspective-projection-matrix"},"Perspective Projection Matrix"),(0,r.kt)("p",null,"To create a projection matrix use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Matrix4.perspective({fov, aspect, near, far})"))),(0,r.kt)("h3",{id:"creating-an-orthographic-projection-matrix"},"Creating an Orthographic Projection Matrix"),(0,r.kt)("p",null,'math.gl provides the traditional function create an orhtographic projection matrix by providing the "box" extents:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Matrix4.ortho({right, left, top, bottom, near, far})"))),(0,r.kt)("p",null,'The extents are specified in "view space" (which is typically translated and rotated, but not scaled, world space).'),(0,r.kt)("h3",{id:"switching-between-perspective-and-orthographic-views"},"Switching between Perspective and Orthographic Views"),(0,r.kt)("p",null,"In applications it is not unusual to want to offer both perspective and orthographic views. To support this case, math.gl offers an additional method for creating orthographic projection matrix, that takes the same parameters as ",(0,r.kt)("inlineCode",{parentName:"p"},"Matrix4.perspective()"),", with the addition of one additional parameter, ",(0,r.kt)("inlineCode",{parentName:"p"},"focalDistance")," that selects which plane in the perspective view frustum should be used to calculate the size of the orthographic view box."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Matrix4.orthographic({fovy, aspect, focalDistance, near, far})"))),(0,r.kt)("h2",{id:"about-projection-matrices"},"About Projection Matrices"),(0,r.kt)("p",null,"An ortograhic projection matrix essentially just scales your view to show everything within a box. As can be seen in the matrix below, it just centers your view between the bounds of the box, and scales your positions so that the box limits fall on -1 and +1 in each direction. It also does an inversion of the X and Y coordinates."),(0,r.kt)("math",{display:"block"},(0,r.kt)("mrow",null,(0,r.kt)("mfenced",{open:"[",close:"]"},(0,r.kt)("mtable",null,(0,r.kt)("mtr",null,(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("msub",null,(0,r.kt)("mi",null,"scale"),(0,r.kt)("mn",null,"x"))),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("msub",null,(0,r.kt)("mi",null,"translate"),(0,r.kt)("mi",null,"x")))),(0,r.kt)("mtr",null,(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("msub",null,(0,r.kt)("mi",null,"scale"),(0,r.kt)("mn",null,"y"))),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("msub",null,(0,r.kt)("mi",null,"translate"),(0,r.kt)("mi",null,"y")))),(0,r.kt)("mtr",null,(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("msub",null,(0,r.kt)("mi",null,"scale"),(0,r.kt)("mn",null,"z"))),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("msub",null,(0,r.kt)("mi",null,"translate"),(0,r.kt)("mi",null,"z")))),(0,r.kt)("mtr",null,(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("mi",null,"...")),(0,r.kt)("mtd",{columnalign:"center"},(0,r.kt)("msub",null,(0,r.kt)("mi",null,"scale"),(0,r.kt)("mi",null,"global")))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<mo>=</mo>\n\n<mfenced open="[" close="]">\n<mtable>\n  <mtr>\n    <mtd columnalign="center"><mfrac><mn>-2</mn><mi>left - right</mi></mfrac></mtd>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mfrac><mi>left + right</mi><mi>left - right</mi></mfrac></mtd>\n  </mtr>\n  <mtr>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mfrac><mn>-2</mn><mi>bottom - top</mi></mfrac></mtd>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mfrac><mi>bottom + top</mi><mi>bottom - top</mi></mfrac></mtd>\n  </mtr>\n  <mtr>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mfrac><mn>2</mn><mi>near - far</mi></mfrac></mtd>\n    <mtd columnalign="center"><mfrac><mi>near + far</mi><mi>near - far</mi></mfrac></mtd>\n  </mtr>\n  <mtr>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mn>0</mn></mtd>\n    <mtd columnalign="center"><mn>1</mn></mtd>\n  </mtr>\n</mtable>\n</mfenced>\n')))),(0,r.kt)("h2",{id:"decomposing-a-viewprojection-matrix"},"Decomposing a ViewProjection Matrix"),(0,r.kt)("p",null,"TBA"),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As always, matrices are presented here in row major notation, however math.gl stores them internally in column major format to match WebGL requirements.")))}p.isMDXComponent=!0}}]);
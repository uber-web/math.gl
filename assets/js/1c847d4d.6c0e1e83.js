"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[695],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,c=d["".concat(u,".").concat(m)]||d[m]||h[m]||o;return t?r.createElement(c,a(a({ref:n},s),{},{components:t})):r.createElement(c,a({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={},a="BoundingSphere",l={unversionedId:"modules/culling/api-reference/bounding-sphere",id:"modules/culling/api-reference/bounding-sphere",title:"BoundingSphere",description:"A bounding sphere with a center and a radius.",source:"@site/../docs/modules/culling/api-reference/bounding-sphere.md",sourceDirName:"modules/culling/api-reference",slug:"/modules/culling/api-reference/bounding-sphere",permalink:"/math.gl/docs/modules/culling/api-reference/bounding-sphere",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/modules/culling/api-reference/bounding-sphere.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AxisAlignedBoundingBox",permalink:"/math.gl/docs/modules/culling/api-reference/axis-aligned-bounding-box"},next:{title:"BoundingVolume (Interface)",permalink:"/math.gl/docs/modules/culling/api-reference/bounding-volume"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Global Functions",id:"global-functions",level:2},{value:"makeBoundingSphereFromPoints(positions : iterator, result? : BoundingSphere) : BoundingSphere",id:"makeboundingspherefrompointspositions--iterator-result--boundingsphere--boundingsphere",level:3},{value:"Fields",id:"fields",level:2},{value:"center : Vector3",id:"center--vector3",level:3},{value:"radius : Number",id:"radius--number",level:3},{value:"Members",id:"members",level:2},{value:"constructor(center : Number3, radius : Number)",id:"constructorcenter--number3-radius--number",level:3},{value:"fromCenterRadius(center : Number3, radius : Number) : BoundingSphere",id:"fromcenterradiuscenter--number3-radius--number--boundingsphere",level:3},{value:"fromCornerPoints(corner : Number3, oppositeCorner : Number3, result? : BoundingSphere) : BoundingSphere",id:"fromcornerpointscorner--number3-oppositecorner--number3-result--boundingsphere--boundingsphere",level:3},{value:"fromBoundingSpheres(boundingSpheres : BoundingSphere[]) : BoundingSphere",id:"fromboundingspheresboundingspheres--boundingsphere--boundingsphere",level:3},{value:"clone()",id:"clone",level:3},{value:"equals(right : BoundingSphere) Boolean",id:"equalsright--boundingsphere-boolean",level:3},{value:"union(right : BoundingSphere) : BoundingSphere",id:"unionright--boundingsphere--boundingsphere",level:3},{value:"expand(point : Number3) : BoundingSphere",id:"expandpoint--number3--boundingsphere",level:3},{value:"intersectPlane(plane : Plane) : INTERSECTION",id:"intersectplaneplane--plane--intersection",level:3},{value:"transform(transform : Number16) : BoundingSphere",id:"transformtransform--number16--boundingsphere",level:3},{value:"distanceSquaredTo(point) : Number",id:"distancesquaredtopoint--number",level:3},{value:"transformWithoutScale(sphere, transform, result)",id:"transformwithoutscalesphere-transform-result",level:3},{value:"computePlaneDistances (sphere, position, direction, result)",id:"computeplanedistances-sphere-position-direction-result",level:3},{value:"projectTo2D(sphere, projection, result)",id:"projectto2dsphere-projection-result",level:3},{value:"Attribution",id:"attribution",level:2}],s={toc:p},d="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"boundingsphere"},"BoundingSphere"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bounding_sphere"},"bounding sphere")," with a center and a radius."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Create a bounding sphere around the unit cube"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {BoundingSphere} from '@math.gl/culling';\ncont sphere = new BoundingSphere().fromCornerPoints(\n  [-0.5, -0.5, -0.5],\n  [0.5, 0.5, 0.5]\n);\n")),(0,i.kt)("p",null,"Sort bounding spheres from back to front"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {BoundingSphere} from '@math.gl/culling';\nconst spheres = [new BoundingSphere(...), new BoundingSphere(...), ...];\nconst cameraPosWC = ...;\nspheres.sort(\n  (a, b) => b.distanceSquaredTo(b, cameraPosWC) - a.distanceSquaredTo(a.cameraPosWC)\n);\n")),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"class BoundingSphere implements")," ",(0,i.kt)("a",{parentName:"p",href:"./bounding-volume"},(0,i.kt)("inlineCode",{parentName:"a"},"BoundingVolume")),"."),(0,i.kt)("h2",{id:"global-functions"},"Global Functions"),(0,i.kt)("h3",{id:"makeboundingspherefrompointspositions--iterator-result--boundingsphere--boundingsphere"},"makeBoundingSphereFromPoints(positions : iterator, result? : BoundingSphere) : BoundingSphere"),(0,i.kt)("p",null,"Computes a tight-fitting bounding sphere enclosing a list of 3D Cartesian points. The bounding sphere is computed by running two algorithms, a naive algorithm and Ritter's algorithm. The smaller of the two spheres is used to ensure a tight fit."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"positions")," An iterable (e.g. array) of points that the bounding sphere will enclose. Each point must have ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"y"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"z")," properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result")," Optional object onto which to store the result.")),(0,i.kt)("p",null,"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The modified ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," parameter or a new ",(0,i.kt)("inlineCode",{parentName:"li"},"BoundingSphere")," instance if one was not provided.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"http://blogs.agi.com/insight3d/index.php/2008/02/04/a-bounding/"},"Bounding Sphere computation article")),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("h3",{id:"center--vector3"},"center : Vector3"),(0,i.kt)("p",null,"The center point of the sphere."),(0,i.kt)("h3",{id:"radius--number"},"radius : Number"),(0,i.kt)("p",null,"The radius of the sphere."),(0,i.kt)("h2",{id:"members"},"Members"),(0,i.kt)("h3",{id:"constructorcenter--number3-radius--number"},"constructor(center : Number","[3]",", radius : Number)"),(0,i.kt)("p",null,"Creates a new ",(0,i.kt)("inlineCode",{parentName:"p"},"BoundingSphere")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"center"),"=",(0,i.kt)("inlineCode",{parentName:"li"},"[0, 0, 0]")," The center of the bounding sphere."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radius"),"=",(0,i.kt)("inlineCode",{parentName:"li"},"0.0")," The radius of the bounding sphere.")),(0,i.kt)("h3",{id:"fromcenterradiuscenter--number3-radius--number--boundingsphere"},"fromCenterRadius(center : Number","[3]",", radius : Number) : BoundingSphere"),(0,i.kt)("p",null,"Sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"BoundingSphere")," from center and radius"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"center"),"=",(0,i.kt)("inlineCode",{parentName:"li"},"[0, 0, 0]")," The center of the bounding sphere."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"radius"),"=",(0,i.kt)("inlineCode",{parentName:"li"},"0.0")," The radius of the bounding sphere.")),(0,i.kt)("h3",{id:"fromcornerpointscorner--number3-oppositecorner--number3-result--boundingsphere--boundingsphere"},"fromCornerPoints(corner : Number","[3]",", oppositeCorner : Number","[3]",", result? : BoundingSphere) : BoundingSphere"),(0,i.kt)("p",null,"Computes a bounding sphere from the two corner points of an axis-aligned bounding box. The sphere tighly and fully encompases the box."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"corner")," The minimum height over the rectangle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oppositeCorner")," The maximum height over the rectangle.")),(0,i.kt)("h3",{id:"fromboundingspheresboundingspheres--boundingsphere--boundingsphere"},"fromBoundingSpheres(boundingSpheres : BoundingSphere[]) : BoundingSphere"),(0,i.kt)("p",null,"Computes a tight-fitting bounding sphere enclosing the provided array of bounding spheres."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boundingSpheres")," The array of bounding spheres.")),(0,i.kt)("p",null,"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The modified ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," parameter or a new ",(0,i.kt)("inlineCode",{parentName:"li"},"BoundingSphere")," instance if none was provided.")),(0,i.kt)("h3",{id:"clone"},"clone()"),(0,i.kt)("p",null,"Duplicates a ",(0,i.kt)("inlineCode",{parentName:"p"},"BoundingSphere")," instance."),(0,i.kt)("p",null,"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A new ",(0,i.kt)("inlineCode",{parentName:"li"},"BoundingSphere")," instance")),(0,i.kt)("h3",{id:"equalsright--boundingsphere-boolean"},"equals(right : BoundingSphere) Boolean"),(0,i.kt)("p",null,"Compares the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"BoundingSphere")," componentwise and returns ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if they are equal, ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"right")," The second ",(0,i.kt)("inlineCode",{parentName:"li"},"BoundingSphere"),".")),(0,i.kt)("p",null,"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true")," if left and right are equal, ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," otherwise.")),(0,i.kt)("h3",{id:"unionright--boundingsphere--boundingsphere"},"union(right : BoundingSphere) : BoundingSphere"),(0,i.kt)("p",null,"Computes a bounding sphere that contains both the this and the ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," bounding spheres."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"right")," The second ",(0,i.kt)("inlineCode",{parentName:"li"},"BoundingSphere"),".")),(0,i.kt)("h3",{id:"expandpoint--number3--boundingsphere"},"expand(point : Number","[3]",") : BoundingSphere"),(0,i.kt)("p",null,"Computes a bounding sphere by enlarging the provided sphere to contain the provided point."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"point")," A point to enclose in a bounding sphere.")),(0,i.kt)("h3",{id:"intersectplaneplane--plane--intersection"},"intersectPlane(plane : Plane) : INTERSECTION"),(0,i.kt)("p",null,"Determines which side of a plane a sphere is located."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"plane")," The plane to test against.\nReturns"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INTERSECTION.INSIDE")," if the entire sphere is on the side of the plane the normal is pointing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INTERSECTION.OUTSIDE")," if the entire sphere is on the opposite side"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INTERSECTION.INTERSECTING")," if the sphere intersects the plane.")),(0,i.kt)("h3",{id:"transformtransform--number16--boundingsphere"},"transform(transform : Number","[16]",") : BoundingSphere"),(0,i.kt)("p",null,"Applies a 4x4 affine transformation matrix to a bounding sphere."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transform")," The transformation matrix to apply to the bounding sphere.")),(0,i.kt)("h3",{id:"distancesquaredtopoint--number"},"distanceSquaredTo(point) : Number"),(0,i.kt)("p",null,"Computes the estimated distance squared from the closest point on a bounding sphere to a point."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"point")," The point")),(0,i.kt)("p",null,"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The estimated distance squared from the bounding sphere to the point.")),(0,i.kt)("h3",{id:"transformwithoutscalesphere-transform-result"},"transformWithoutScale(sphere, transform, result)"),(0,i.kt)("p",null,"Applies a 4x4 affine transformation matrix to a bounding sphere where there is no scale\nThe transformation matrix is not verified to have a uniform scale of 1.\nThis method is faster than computing the general bounding sphere transform using {@link BoundingSphere.transform}."),(0,i.kt)("p",null,"@param {BoundingSphere} sphere The bounding sphere to apply the transformation to.\n@param {Matrix4} transform The transformation matrix to apply to the bounding sphere."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result")," Optional object onto which to store the result.")),(0,i.kt)("p",null,"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The modified ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," parameter or a new ",(0,i.kt)("inlineCode",{parentName:"li"},"BoundingSphere")," instance if none was provided.")),(0,i.kt)("p",null,"@example\nvar modelMatrix = Transforms.eastNorthUpToFixedFrame(positionOnEllipsoid);\nvar boundingSphere = new BoundingSphere();\nvar newBoundingSphere = BoundingSphere.transformWithoutScale(boundingSphere, modelMatrix);"),(0,i.kt)("h3",{id:"computeplanedistances-sphere-position-direction-result"},"computePlaneDistances (sphere, position, direction, result)"),(0,i.kt)("p",null,"The distances calculated by the vector from the center of the bounding sphere to position projected onto direction plus/minus the radius of the bounding sphere."),(0,i.kt)("p",null,"If you imagine the infinite number of planes with normal direction, this computes the smallest distance to the closest and farthest planes from position that intersect the bounding sphere."),(0,i.kt)("p",null,"@param {BoundingSphere} sphere The bounding sphere to calculate the distance to.\n@param {Cartesian3} position The position to calculate the distance from.\n@param {Cartesian3} direction The direction from position.\n@param {Interval} ","[result]"," A Interval to store the nearest and farthest distances.\n@returns {Interval} The nearest and farthest distances on the bounding sphere from position in direction."),(0,i.kt)("h3",{id:"projectto2dsphere-projection-result"},"projectTo2D(sphere, projection, result)"),(0,i.kt)("p",null,"Creates a bounding sphere in 2D from a bounding sphere in 3D world coordinates."),(0,i.kt)("p",null,"@param {BoundingSphere} sphere The bounding sphere to transform to 2D.\n@param {Object} ","[projection=GeographicProjection]"," The projection to 2D."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"result")," Optional object onto which to store the result.")),(0,i.kt)("p",null,"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The modified ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," parameter or a new ",(0,i.kt)("inlineCode",{parentName:"li"},"BoundingSphere")," instance if none was provided.")),(0,i.kt)("h2",{id:"attribution"},"Attribution"),(0,i.kt)("p",null,"This class was ported from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AnalyticalGraphicsInc/cesium"},"Cesium")," under the Apache 2 License."))}h.isMDXComponent=!0}}]);
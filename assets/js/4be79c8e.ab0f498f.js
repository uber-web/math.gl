"use strict";(self.webpackChunkproject_website=self.webpackChunkproject_website||[]).push([[6928],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(4137));const o={},i="Web Mercator Coordinates",l={unversionedId:"developer-guide/geospatial/web-mercator-coordinates",id:"developer-guide/geospatial/web-mercator-coordinates",title:"Web Mercator Coordinates",description:"| Coordinates | Description                           |",source:"@site/../docs/developer-guide/geospatial/web-mercator-coordinates.md",sourceDirName:"developer-guide/geospatial",slug:"/developer-guide/geospatial/web-mercator-coordinates",permalink:"/math.gl/docs/developer-guide/geospatial/web-mercator-coordinates",draft:!1,editUrl:"https://github.com/uber-web/math.gl/tree/master/website/../docs/developer-guide/geospatial/web-mercator-coordinates.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Geospatial Models",permalink:"/math.gl/docs/developer-guide/geospatial/geospatial-models"},next:{title:"Accuracy of Offset Projection",permalink:"/math.gl/docs/developer-guide/geospatial/web-mercator-offset-accuracy"}},p={},d=[{value:"LngLat Coordinates",id:"lnglat-coordinates",level:3},{value:"World Coordinates",id:"world-coordinates",level:3},{value:"Pixel Coordinates",id:"pixel-coordinates",level:3},{value:"Additional Notes",id:"additional-notes",level:3}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-mercator-coordinates"},"Web Mercator Coordinates"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Coordinates"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LngLat"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[lng, lat, alt]")," on earth")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"World"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[x, y, z]")," on the Web Mercator plane")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pixels"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[x, y, depth]")," on screen")))),(0,a.kt)("h3",{id:"lnglat-coordinates"},"LngLat Coordinates"),(0,a.kt)("p",null,"LngLat coordinates are specified in\n",(0,a.kt)("inlineCode",{parentName:"p"},"[longitude, latitude, elevation]")," where longitude and latitude are in degrees from Greenwich meridian and the equator respectively, and altitude is in meters above sea level."),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Order is ",(0,a.kt)("inlineCode",{parentName:"li"},"[lng, lat]")," (it can help to think of them as ",(0,a.kt)("inlineCode",{parentName:"li"},"[x, y]")," to remember the order)."),(0,a.kt)("li",{parentName:"ul"},"lng goes from -180 to 180."),(0,a.kt)("li",{parentName:"ul"},"lat goes from -85.051129 to 85.051129.")),(0,a.kt)("p",null,'The reason for the latitude cutoff is that the cylindrical mercator projection projects the earth sphere onto an infinitely tall strip, with the poles being projected at infinity. The reason that the cutoff is at ~85 degrees is that cutting off at this value makes the remaining projected area into a square (which at zoom 0 is projected onto 512x512 "pixels"). For details see e.g. ',(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_Mercator"},"https://en.wikipedia.org/wiki/Web_Mercator"),"."),(0,a.kt)("h3",{id:"world-coordinates"},"World Coordinates"),(0,a.kt)("p",null,'World coordinates specifies a location on the linear Web Mercator plane. Each unit is a "pixel" on the Web Mercator tile. It is unique for each lngLat location at a specific zoom level. ',(0,a.kt)("inlineCode",{parentName:"p"},"[x, y, z]")," corresponds to ",(0,a.kt)("inlineCode",{parentName:"p"},"[longitude, latitude, elevation]")," in the LngLat system."),(0,a.kt)("h3",{id:"pixel-coordinates"},"Pixel Coordinates"),(0,a.kt)("p",null,"Pixel coordinates specifies a point on screen in the format of ",(0,a.kt)("inlineCode",{parentName:"p"},"[x, y, z]")," where x and y are in pixels on screen and ",(0,a.kt)("inlineCode",{parentName:"p"},"z")," is pixel depth, normally between ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,a.kt)("p",null,"By default, the pixel coordinate system of the viewport is defined with the origin in the top left, where the positive x-axis goes right, and the positive y-axis goes down. That is, the top left corner is ",(0,a.kt)("inlineCode",{parentName:"p"},"[0, 0]")," and the bottom right corner is ",(0,a.kt)("inlineCode",{parentName:"p"},"[width - 1, height - 1]"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"project"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"unproject")," functions have a flag that can reverse this convention."),(0,a.kt)("h3",{id:"additional-notes"},"Additional Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Per cartographic tradition, all angles including ",(0,a.kt)("inlineCode",{parentName:"p"},"latitude"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"longitude"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"pitch")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bearing")," are specified in degrees, not radians.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is possible to query the PerspectiveMercatorViewport for a meters per pixel scale.\nNote that that distance scales are latitude dependent under\nweb mercator projection ",(0,a.kt)("a",{parentName:"p",href:"http://wiki.openstreetmap.org/wiki/Zoom_levels"},"see"),",\nso scaling will depend on the viewport center and any linear scale factor\nshould only be expected to be locally correct."))))}u.isMDXComponent=!0}}]);
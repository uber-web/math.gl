(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.log10.js
var es6_math_log10 = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/react-table/es/index.js + 6 modules
var es = __webpack_require__(325);

// EXTERNAL MODULE: ../examples/benchmarks/react-table.css
var react_table = __webpack_require__(275);

// CONCATENATED MODULE: ../examples/benchmarks/bench-results.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function getPercent(score){// Log scale between 100K - 100M, 0-3
var logScore=Math.min(Math.max(Math.log10(score)-5,0),5);var percent=Math.min(Math.max(logScore*33.3333333,5),100);return percent;}var GREEN='#85cc00';var ORANGE='#ffbf00';var RED='#ff2e00';function Star(){return react_default.a.createElement("span",{style:{fontSize:'100%',color:'yellow'}},"\u2605");}// eslint-disable-next-line react/prop-types
function BarCell(_ref){var color=_ref.color,percent=_ref.percent,_ref$stars=_ref.stars,stars=_ref$stars===void 0?0:_ref$stars,children=_ref.children;return react_default.a.createElement("div",{style:{width:'100%',height:'100%',backgroundColor:'#dadada',borderRadius:'2px'}},react_default.a.createElement("div",{style:{width:percent+"%",// ` workaround chrome devtools formatting issue
height:'100%',backgroundColor:color,borderRadius:'2px',transition:'all .2s ease-out'}},new Array(stars).fill(null).map(function(_,i){return react_default.a.createElement(Star,{key:""+i});}),children));}// eslint-disable-next-line react/prop-types
function PerformanceBarCell(_ref2){var row=_ref2.row;var score=row.score;var percent=getPercent(score);// 1 star per 100M
var stars=Math.floor((score||0)/5e7);var color=GREEN;if(percent<getPercent(1e7)){color=ORANGE;}if(percent<getPercent(1e6)){color=RED;}return percent?react_default.a.createElement(BarCell,{color:color,percent:percent,stars:stars}):null;}var bench_results_BenchResults=/*#__PURE__*/function(_Component){_inheritsLoose(BenchResults,_Component);function BenchResults(){return _Component.apply(this,arguments)||this;}var _proto=BenchResults.prototype;_proto._renderTable=function _renderTable(){// eslint-disable-next-line react/prop-types
var log=this.props.log;return react_default.a.createElement("div",null,react_default.a.createElement("div",{style:{display:'flex',height:22}},react_default.a.createElement(BarCell,{color:RED,percent:100},' ',"< 1M iterations/s"),react_default.a.createElement("div",{style:{width:20}}),react_default.a.createElement(BarCell,{color:ORANGE,percent:100},"1M - 10M iterations/s"),react_default.a.createElement("div",{style:{width:20}}),react_default.a.createElement(BarCell,{color:GREEN,percent:100},"> 10M iterations/s"),react_default.a.createElement("div",{style:{width:20}}),react_default.a.createElement(BarCell,{color:GREEN,percent:100},react_default.a.createElement(Star,null),"50M iterations/s")),react_default.a.createElement(es["a" /* default */],{data:log,columns:[{Header:'Id',accessor:'id',Cell:function Cell(_ref3){var row=_ref3.row;return row.formattedValue?row.id:react_default.a.createElement("h3",null,row.id.replace(/@math\.gl\/[a-zA-Z]*: /,''));}},{Header:'iter/s',accessor:'formattedValue',maxWidth:85},{Header:'Score',accessor:'value',id:'score',Cell:PerformanceBarCell,maxWidth:300}],showPagination:false,manual:true,className:"-striped -highlight"}));};_proto.render=function render(){return react_default.a.createElement("div",null,this._renderTable());};return BenchResults;}(react["Component"]);
// EXTERNAL MODULE: ../node_modules/@probe.gl/bench/dist/esm/index.js + 13 modules
var esm = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(95);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.reflect.construct.js
var es6_reflect_construct = __webpack_require__(289);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__(45);

// CONCATENATED MODULE: ../modules/core/test/lib/javascript.bench.js
function javascript_bench_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return _construct(Class,arguments,_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);};return _wrapNativeSuper(Class);}function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){_construct=Reflect.construct;}else{_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)_setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}function _isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}// CLASS INHERITANCE
//
// This class identifies
var IDENTITY=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];var ClassNoConstructor=function ClassNoConstructor(){};var ClassWithConstructor=function ClassWithConstructor(){this.data=null;};var ClassWithConstructorXYZ=function ClassWithConstructorXYZ(){this.x=-0;this.y=-0;this.z=-0;this.w=-0;};var ClassWithConstructor04=function ClassWithConstructor04(){this[0]=-0;this[1]=-0;this[2]=-0;this[3]=-0;};var ArrayExtenderNoConstructor=/*#__PURE__*/function(_Array){javascript_bench_inheritsLoose(ArrayExtenderNoConstructor,_Array);function ArrayExtenderNoConstructor(){return _Array.apply(this,arguments)||this;}return ArrayExtenderNoConstructor;}(_wrapNativeSuper(Array));var ArrayExtenderEmptyConstructor=/*#__PURE__*/function(_Array2){javascript_bench_inheritsLoose(ArrayExtenderEmptyConstructor,_Array2);// eslint-disable-next-line no-useless-constructor
function ArrayExtenderEmptyConstructor(){return _Array2.call(this)||this;}return ArrayExtenderEmptyConstructor;}(_wrapNativeSuper(Array));var ArrayExtender=/*#__PURE__*/function(_Array3){javascript_bench_inheritsLoose(ArrayExtender,_Array3);function ArrayExtender(){var _this;_this=_Array3.call(this,16)||this;for(var i=0;i<16;i++){_this[i]=IDENTITY[i];}return _this;}return ArrayExtender;}(_wrapNativeSuper(Array));// DEFAULT PARAMETERS
var XYZVector=function XYZVector(x,y,z){if(x===void 0){x=0;}if(y===void 0){y=0;}if(z===void 0){z=0;}this.x=x;this.y=y;this.z=z;};var XYZVectorLogicalOr=function XYZVectorLogicalOr(x,y,z){this.x=x||0;this.y=y||0;this.z=z||0;};var XYZVectorBitwiseOr=function XYZVectorBitwiseOr(x,y,z){this.x=x||0;this.y=y||0;this.z=z||0;};// COMBINED BENCH
function javascriptBench(suite,addReferenceBenchmarks){if(addReferenceBenchmarks){suite.group('Class/Array inheritance construction cost').add('new Array',function(){return new Array();})// eslint-disable-line
.add('new ArrayExtender',function(){return new ArrayExtender();}).add('new ArrayExtenderNoConstructor',function(){return new ArrayExtenderNoConstructor();}).add('new ArrayExtenderEmptyConstructor',function(){return new ArrayExtenderEmptyConstructor();}).add('new ClassNoConstructor',function(){return new ClassNoConstructor();}).add('new ClassWithConstructor',function(){return new ClassWithConstructor();}).add('new ClassWithConstructorXYZ',function(){return new ClassWithConstructorXYZ();}).add('new ClassWithConstructor0-4',function(){return new ClassWithConstructor04();});suite.group('Default parameter cost').add('new XYZVector#default params',function(){return new XYZVector();}).add('new XYZVector#logical or',function(){return new XYZVectorLogicalOr();}).add('new XYZVector#bitwise or',function(){return new XYZVectorBitwiseOr();});}return suite;}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float64-array.js
var es6_typed_float64_array = __webpack_require__(298);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.float32-array.js
var es6_typed_float32_array = __webpack_require__(280);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-finite.js
var es6_number_is_finite = __webpack_require__(281);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.sub.js
var es6_string_sub = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(177);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(7);

// CONCATENATED MODULE: ../modules/core/src/lib/assert.js
function assert(condition,message){if(!condition){throw new Error("math.gl assertion "+message);}}
// CONCATENATED MODULE: ../modules/core/src/lib/common.js
function common_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function common_construct(Parent,args,Class){if(common_isNativeReflectConstruct()){common_construct=Reflect.construct;}else{common_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)common_setPrototypeOf(instance,Class.prototype);return instance;};}return common_construct.apply(null,arguments);}function common_setPrototypeOf(o,p){common_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return common_setPrototypeOf(o,p);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var RADIANS_TO_DEGREES=1/Math.PI*180;var DEGREES_TO_RADIANS=1/180*Math.PI;// TODO - remove
/* eslint-disable no-shadow */var config={};config.EPSILON=1e-12;config.debug=false;config.precision=4;config.printTypes=false;config.printDegrees=false;config.printRowMajor=true;function configure(options){if(options===void 0){options={};}// Only copy existing keys
for(var key in options){assert(key in config);config[key]=options[key];}return config;}function round(value){return Math.round(value/config.EPSILON)*config.EPSILON;}function formatValue(value,_temp){var _ref=_temp===void 0?{}:_temp,_ref$precision=_ref.precision,precision=_ref$precision===void 0?config.precision||4:_ref$precision;value=round(value);// get rid of trailing zeros
return""+parseFloat(value.toPrecision(precision));}// Returns true if value is either an array or a typed array
// Note: does not return true for ArrayBuffers and DataViews
function isArray(value){return Array.isArray(value)||ArrayBuffer.isView(value)&&value.length!==undefined;}// If the array has a clone function, calls it, otherwise returns a copy
function duplicateArray(array){return array.clone?array.clone():new Array(array.length);}function clone(array){return array.clone?array.clone():common_construct(Array,_toConsumableArray(array));}// If the argument value is an array, applies the func element wise,
// otherwise applies func to the argument value
function common_map(value,func,result){if(isArray(value)){result=result||duplicateArray(value);for(var i=0;i<result.length&&i<value.length;++i){result[i]=func(value[i],i,result);}return result;}return func(value);}function toRadians(degrees){return common_radians(degrees);}function toDegrees(radians){return degrees(radians);}//
// GLSL math function equivalents
// Works on both single values and vectors
//
function common_radians(degrees,result){return common_map(degrees,function(degrees){return degrees*DEGREES_TO_RADIANS;},result);}function degrees(radians,result){return common_map(radians,function(radians){return radians*RADIANS_TO_DEGREES;},result);}// GLSL equivalent: Works on single values and vectors
function sin(radians){return common_map(radians,function(angle){return Math.sin(angle);});}// GLSL equivalent: Works on single values and vectors
function cos(radians){return common_map(radians,function(angle){return Math.cos(angle);});}// GLSL equivalent: Works on single values and vectors
function tan(radians){return common_map(radians,function(angle){return Math.tan(angle);});}// GLSL equivalent: Works on single values and vectors
function asin(radians){return common_map(radians,function(angle){return Math.asin(angle);});}// GLSL equivalent: Works on single values and vectors
function acos(radians){return common_map(radians,function(angle){return Math.acos(angle);});}// GLSL equivalent: Works on single values and vectors
function atan(radians){return common_map(radians,function(angle){return Math.atan(angle);});}function clamp(value,min,max){return common_map(value,function(value){return Math.max(min,Math.min(max,value));});}// Interpolate between two numbers or two arrays
function lerp(a,b,t){if(isArray(a)){return a.map(function(ai,i){return lerp(ai,b[i],t);});}return t*b+(1-t)*a;}// eslint-disable-next-line complexity
function common_equals(a,b,epsilon){var oldEpsilon=config.EPSILON;if(epsilon){config.EPSILON=epsilon;}try{if(a===b){return true;}if(isArray(a)&&isArray(b)){if(a.length!==b.length){return false;}for(var i=0;i<a.length;++i){// eslint-disable-next-line max-depth
if(!common_equals(a[i],b[i])){return false;}}return true;}if(a&&typeof a==='object'&&a.equals){return a.equals(b);}if(b&&typeof b==='object'&&b.equals){return b.equals(a);}return Math.abs(a-b)<=config.EPSILON*Math.max(1.0,Math.abs(a),Math.abs(b));}finally{config.EPSILON=oldEpsilon;}}// eslint-disable-next-line complexity
function exactEquals(a,b){if(a===b){return true;}if(a&&typeof a==='object'&&b&&typeof b==='object'){if(a.constructor!==b.constructor){return false;}if(a.exactEquals){return a.exactEquals(b);}}if(isArray(a)&&isArray(b)){if(a.length!==b.length){return false;}for(var i=0;i<a.length;++i){if(!exactEquals(a[i],b[i])){return false;}}return true;}return false;}function withEpsilon(EPSILON,func){var oldPrecision=config.EPSILON;config.EPSILON=EPSILON;var value;try{value=func();}finally{config.EPSILON=oldPrecision;}return value;}
// CONCATENATED MODULE: ../modules/core/src/classes/base/math-array.js
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function math_array_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function math_array_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;math_array_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!math_array_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return math_array_construct(Class,arguments,math_array_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return math_array_setPrototypeOf(Wrapper,Class);};return math_array_wrapNativeSuper(Class);}function math_array_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function math_array_construct(Parent,args,Class){if(math_array_isNativeReflectConstruct()){math_array_construct=Reflect.construct;}else{math_array_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)math_array_setPrototypeOf(instance,Class.prototype);return instance;};}return math_array_construct.apply(null,arguments);}function math_array_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function math_array_setPrototypeOf(o,p){math_array_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return math_array_setPrototypeOf(o,p);}function math_array_getPrototypeOf(o){math_array_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return math_array_getPrototypeOf(o);}// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var math_array_MathArray=/*#__PURE__*/function(_Array){math_array_inheritsLoose(MathArray,_Array);function MathArray(){return _Array.apply(this,arguments)||this;}var _proto=MathArray.prototype;_proto.clone=function clone(){return new this.constructor().copy(this);};_proto.from=function from(arrayOrObject){return Array.isArray(arrayOrObject)?this.copy(arrayOrObject):this.fromObject(arrayOrObject);};_proto.fromArray=function fromArray(array,offset){if(offset===void 0){offset=0;}for(var i=0;i<this.ELEMENTS;++i){this[i]=array[i+offset];}return this.check();};_proto.to=function to(arrayOrObject){if(arrayOrObject===this){return this;}return isArray(arrayOrObject)?this.toArray(arrayOrObject):this.toObject(arrayOrObject);};_proto.toTarget=function toTarget(target){return target?this.to(target):this;};_proto.toArray=function toArray(array,offset){if(array===void 0){array=[];}if(offset===void 0){offset=0;}for(var i=0;i<this.ELEMENTS;++i){array[offset+i]=this[i];}return array;};_proto.toFloat32Array=function toFloat32Array(){return new Float32Array(this);};_proto.toString=function toString(){return this.formatString(config);};_proto.formatString=function formatString(opts){var string='';for(var i=0;i<this.ELEMENTS;++i){string+=(i>0?', ':'')+formatValue(this[i],opts);}return(opts.printTypes?this.constructor.name:'')+"["+string+"]";};_proto.equals=function equals(array){if(!array||this.length!==array.length){return false;}for(var i=0;i<this.ELEMENTS;++i){if(!common_equals(this[i],array[i])){return false;}}return true;};_proto.exactEquals=function exactEquals(array){if(!array||this.length!==array.length){return false;}for(var i=0;i<this.ELEMENTS;++i){if(this[i]!==array[i]){return false;}}return true;}// Modifiers
;_proto.negate=function negate(){for(var i=0;i<this.ELEMENTS;++i){this[i]=-this[i];}return this.check();};_proto.lerp=function lerp(a,b,t){if(t===undefined){t=b;b=a;a=this;// eslint-disable-line
}for(var i=0;i<this.ELEMENTS;++i){var ai=a[i];this[i]=ai+t*(b[i]-ai);}return this.check();};_proto.min=function min(vector){for(var i=0;i<this.ELEMENTS;++i){this[i]=Math.min(vector[i],this[i]);}return this.check();};_proto.max=function max(vector){for(var i=0;i<this.ELEMENTS;++i){this[i]=Math.max(vector[i],this[i]);}return this.check();};_proto.clamp=function clamp(minVector,maxVector){for(var i=0;i<this.ELEMENTS;++i){this[i]=Math.min(Math.max(this[i],minVector[i]),maxVector[i]);}return this.check();};_proto.add=function add(){for(var _len=arguments.length,vectors=new Array(_len),_key=0;_key<_len;_key++){vectors[_key]=arguments[_key];}for(var _i=0,_vectors=vectors;_i<_vectors.length;_i++){var vector=_vectors[_i];for(var i=0;i<this.ELEMENTS;++i){this[i]+=vector[i];}}return this.check();};_proto.subtract=function subtract(){for(var _len2=arguments.length,vectors=new Array(_len2),_key2=0;_key2<_len2;_key2++){vectors[_key2]=arguments[_key2];}for(var _i2=0,_vectors2=vectors;_i2<_vectors2.length;_i2++){var vector=_vectors2[_i2];for(var i=0;i<this.ELEMENTS;++i){this[i]-=vector[i];}}return this.check();};_proto.scale=function scale(_scale){if(Array.isArray(_scale)){return this.multiply(_scale);}for(var i=0;i<this.ELEMENTS;++i){this[i]*=_scale;}return this.check();}// three.js compatibility
;_proto.sub=function sub(a){return this.subtract(a);};_proto.setScalar=function setScalar(a){for(var i=0;i<this.ELEMENTS;++i){this[i]=a;}return this.check();};_proto.addScalar=function addScalar(a){for(var i=0;i<this.ELEMENTS;++i){this[i]+=a;}return this.check();};_proto.subScalar=function subScalar(a){return this.addScalar(-a);};_proto.multiplyScalar=function multiplyScalar(scalar){// Multiplies all elements
// `Matrix4.scale` only scales its 3x3 "minor"
for(var i=0;i<this.ELEMENTS;++i){this[i]*=scalar;}return this.check();};_proto.divideScalar=function divideScalar(a){return this.scale(1/a);};_proto.clampScalar=function clampScalar(min,max){for(var i=0;i<this.ELEMENTS;++i){this[i]=Math.min(Math.max(this[i],min),max);}return this.check();}// Cesium compatibility
;_proto.multiplyByScalar=function multiplyByScalar(scalar){return this.scale(scalar);}// THREE.js compatibility
;// Debug checks
_proto.check=function check(){if(config.debug&&!this.validate(this)){throw new Error("math.gl: "+this.constructor.name+" some fields set to invalid numbers'");}return this;};_proto.validate=function validate(){var valid=this.length===this.ELEMENTS;for(var i=0;i<this.ELEMENTS;++i){valid=valid&&Number.isFinite(this[i]);}return valid;};_createClass(MathArray,[{key:"elements",get:function get(){return this;}}]);return MathArray;}(math_array_wrapNativeSuper(Array));
// CONCATENATED MODULE: ../modules/core/src/lib/validators.js
// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
function validateVector(v,length){if(v.length!==length){return false;}// Could be arguments "array" (v.every not availasble)
for(var i=0;i<v.length;++i){if(!Number.isFinite(v[i])){return false;}}return true;}function checkNumber(value){if(!Number.isFinite(value)){throw new Error("Invalid number "+value);}return value;}function checkVector(v,length,callerName){if(config.debug&&!validateVector(v,length)){throw new Error("math.gl: "+(callerName|'')+" some fields set to invalid numbers'");}return v;}var validators_map={};function deprecated(method,version){if(!validators_map[method]){validators_map[method]=true;// eslint-disable-next-line
console.warn(method+" has been removed in version "+version+", see upgrade guide for more information");}}
// CONCATENATED MODULE: ../modules/core/src/classes/base/vector.js
function vector_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function vector_createClass(Constructor,protoProps,staticProps){if(protoProps)vector_defineProperties(Constructor.prototype,protoProps);if(staticProps)vector_defineProperties(Constructor,staticProps);return Constructor;}function vector_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var vector_Vector=/*#__PURE__*/function(_MathArray){vector_inheritsLoose(Vector,_MathArray);function Vector(){return _MathArray.apply(this,arguments)||this;}var _proto=Vector.prototype;// NOTE: `length` is a reserved word for Arrays, so we can't use `v.length()`
// Offer `len` and `magnitude`
_proto.len=function len(){return Math.sqrt(this.lengthSquared());};_proto.magnitude=function magnitude(){return this.len();};_proto.lengthSquared=function lengthSquared(){var length=0;for(var i=0;i<this.ELEMENTS;++i){length+=this[i]*this[i];}return length;};_proto.magnitudeSquared=function magnitudeSquared(){return this.lengthSquared();};_proto.distance=function distance(mathArray){return Math.sqrt(this.distanceSquared(mathArray));};_proto.distanceSquared=function distanceSquared(mathArray){var length=0;for(var i=0;i<this.ELEMENTS;++i){var dist=this[i]-mathArray[i];length+=dist*dist;}return checkNumber(length);};_proto.dot=function dot(mathArray){var product=0;for(var i=0;i<this.ELEMENTS;++i){product+=this[i]*mathArray[i];}return checkNumber(product);}// MODIFIERS
;_proto.normalize=function normalize(){var length=this.magnitude();if(length!==0){for(var i=0;i<this.ELEMENTS;++i){this[i]/=length;}}return this.check();}// negate() {
//   for (let i = 0; i < this.ELEMENTS; ++i) {
//     this[i] = -this[i];
//   }
//   return this.check();
// }
// inverse() {
//   for (let i = 0; i < this.ELEMENTS; ++i) {
//     this[i] = 1 / this[i];
//   }
//   return this.check();
// }
;_proto.multiply=function multiply(){for(var _len=arguments.length,vectors=new Array(_len),_key=0;_key<_len;_key++){vectors[_key]=arguments[_key];}for(var _i=0,_vectors=vectors;_i<_vectors.length;_i++){var vector=_vectors[_i];for(var i=0;i<this.ELEMENTS;++i){this[i]*=vector[i];}}return this.check();};_proto.divide=function divide(){for(var _len2=arguments.length,vectors=new Array(_len2),_key2=0;_key2<_len2;_key2++){vectors[_key2]=arguments[_key2];}for(var _i2=0,_vectors2=vectors;_i2<_vectors2.length;_i2++){var vector=_vectors2[_i2];for(var i=0;i<this.ELEMENTS;++i){this[i]/=vector[i];}}return this.check();}// THREE.js compatibility
;_proto.lengthSq=function lengthSq(){return this.lengthSquared();};_proto.distanceTo=function distanceTo(vector){return this.distance(vector);};_proto.distanceToSquared=function distanceToSquared(vector){return this.distanceSquared(vector);};_proto.getComponent=function getComponent(i){assert(i>=0&&i<this.ELEMENTS,'index is out of range');return checkNumber(this[i]);};_proto.setComponent=function setComponent(i,value){assert(i>=0&&i<this.ELEMENTS,'index is out of range');this[i]=value;return this.check();};_proto.addVectors=function addVectors(a,b){return this.copy(a).add(b);};_proto.subVectors=function subVectors(a,b){return this.copy(a).subtract(b);};_proto.multiplyVectors=function multiplyVectors(a,b){return this.copy(a).multiply(b);};_proto.addScaledVector=function addScaledVector(a,b){return this.add(new this.constructor(a).multiplyScalar(b));};vector_createClass(Vector,[{key:"x",// ACCESSORS
get:function get(){return this[0];},set:function set(value){return this[0]=checkNumber(value);}},{key:"y",get:function get(){return this[1];},set:function set(value){return this[1]=checkNumber(value);}}]);return Vector;}(math_array_MathArray);
// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec3.js
var vec3 = __webpack_require__(284);

// CONCATENATED MODULE: ../modules/core/src/lib/gl-matrix-extras.js
// vec2 additions
function vec2_transformMat4AsVector(out,a,m){var x=a[0];var y=a[1];var w=m[3]*x+m[7]*y||1.0;out[0]=(m[0]*x+m[4]*y)/w;out[1]=(m[1]*x+m[5]*y)/w;return out;}// vec3 additions
// Transform as vector, only uses 3x3 minor matrix
function vec3_transformMat4AsVector(out,a,m){var x=a[0];var y=a[1];var z=a[2];var w=m[3]*x+m[7]*y+m[11]*z||1.0;out[0]=(m[0]*x+m[4]*y+m[8]*z)/w;out[1]=(m[1]*x+m[5]*y+m[9]*z)/w;out[2]=(m[2]*x+m[6]*y+m[10]*z)/w;return out;}function vec3_transformMat2(out,a,m){var x=a[0];var y=a[1];out[0]=m[0]*x+m[2]*y;out[1]=m[1]*x+m[3]*y;out[2]=a[2];return out;}// vec4 additions
function vec4_transformMat2(out,a,m){var x=a[0];var y=a[1];out[0]=m[0]*x+m[2]*y;out[1]=m[1]*x+m[3]*y;out[2]=a[2];out[3]=a[3];return out;}function vec4_transformMat3(out,a,m){var x=a[0];var y=a[1];var z=a[2];out[0]=m[0]*x+m[3]*y+m[6]*z;out[1]=m[1]*x+m[4]*y+m[7]*z;out[2]=m[2]*x+m[5]*y+m[8]*z;out[3]=a[3];return out;}
// CONCATENATED MODULE: ../modules/core/src/classes/vector3.js
function vector3_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function vector3_createClass(Constructor,protoProps,staticProps){if(protoProps)vector3_defineProperties(Constructor.prototype,protoProps);if(staticProps)vector3_defineProperties(Constructor,staticProps);return Constructor;}function vector3_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var ORIGIN=[0,0,0];var vector3_Vector3=/*#__PURE__*/function(_Vector){vector3_inheritsLoose(Vector3,_Vector);function Vector3(x,y,z){var _this;if(x===void 0){x=0;}if(y===void 0){y=0;}if(z===void 0){z=0;}// PERF NOTE: initialize elements as double precision numbers
_this=_Vector.call(this,-0,-0,-0)||this;if(arguments.length===1&&isArray(x)){_this.copy(x);}else{// this.set(x, y, z);
if(config.debug){checkNumber(x);checkNumber(y);checkNumber(z);}_this[0]=x;_this[1]=y;_this[2]=z;}return _this;}var _proto=Vector3.prototype;_proto.set=function set(x,y,z){this[0]=x;this[1]=y;this[2]=z;return this.check();};_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];this[2]=array[2];return this.check();};_proto.fromObject=function fromObject(object){if(config.debug){checkNumber(object.x);checkNumber(object.y);checkNumber(object.z);}this[0]=object.x;this[1]=object.y;this[2]=object.z;return this.check();};_proto.toObject=function toObject(object){object.x=this[0];object.y=this[1];object.z=this[2];return object;}// Getters/setters
/* eslint-disable no-multi-spaces, brace-style, no-return-assign */;/* eslint-enable no-multi-spaces, brace-style, no-return-assign */_proto.angle=function angle(vector){return vec3["a" /* angle */](this,vector);}// MODIFIERS
;_proto.cross=function cross(vector){vec3["b" /* cross */](this,this,vector);return this.check();};_proto.rotateX=function rotateX(_ref){var radians=_ref.radians,_ref$origin=_ref.origin,origin=_ref$origin===void 0?ORIGIN:_ref$origin;vec3["e" /* rotateX */](this,this,origin,radians);return this.check();};_proto.rotateY=function rotateY(_ref2){var radians=_ref2.radians,_ref2$origin=_ref2.origin,origin=_ref2$origin===void 0?ORIGIN:_ref2$origin;vec3["f" /* rotateY */](this,this,origin,radians);return this.check();};_proto.rotateZ=function rotateZ(_ref3){var radians=_ref3.radians,_ref3$origin=_ref3.origin,origin=_ref3$origin===void 0?ORIGIN:_ref3$origin;vec3["g" /* rotateZ */](this,this,origin,radians);return this.check();}// Transforms
// transforms as point (4th component is implicitly 1)
;_proto.transform=function transform(matrix4){return this.transformAsPoint(matrix4);}// transforms as point (4th component is implicitly 1)
;_proto.transformAsPoint=function transformAsPoint(matrix4){vec3["i" /* transformMat4 */](this,this,matrix4);return this.check();}// transforms as vector  (4th component is implicitly 0, ignores translation. slightly faster)
;_proto.transformAsVector=function transformAsVector(matrix4){vec3_transformMat4AsVector(this,this,matrix4);return this.check();};_proto.transformByMatrix3=function transformByMatrix3(matrix3){vec3["h" /* transformMat3 */](this,this,matrix3);return this.check();};_proto.transformByMatrix2=function transformByMatrix2(matrix2){vec3_transformMat2(this,this,matrix2);return this.check();};_proto.transformByQuaternion=function transformByQuaternion(quaternion){vec3["j" /* transformQuat */](this,this,quaternion);return this.check();};vector3_createClass(Vector3,[{key:"ELEMENTS",get:function get(){return 3;}// x,y inherited from Vector
},{key:"z",get:function get(){return this[2];},set:function set(value){return this[2]=checkNumber(value);}}]);return Vector3;}(vector_Vector);
// CONCATENATED MODULE: ../modules/core/test/lib/common.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var classicArray=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];var float32Array=new Float32Array([1,0,0]);var float64Array=new Float64Array([1,0,0]);var vector3=new vector3_Vector3();function commonBench(suite,addReferenceBenchmarks){suite.group('@math.gl/core: Global Functions').add('isArray(Vector3)',function(){return isArray(vector3);}).add('isArray(Float32Array)',function(){return isArray(float32Array);});if(addReferenceBenchmarks){suite.add('isArray(array)',function(){return isArray(classicArray);}).add('isArray(Float64Array)',function(){return isArray(float64Array);});}suite.add('toRadians(Number)',function(){return toRadians(100);}).add('radians(Vector3)',function(){return common_radians(vector3,vector3);});if(addReferenceBenchmarks){suite.add('toRadians(array)',function(){return toRadians(classicArray);}).add('toRadians(Float32Array)',function(){return toRadians(float32Array);}).add('toRadians(Float64Array)',function(){return toRadians(float64Array);});}}
// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec2.js
var vec2 = __webpack_require__(291);

// CONCATENATED MODULE: ../modules/core/src/classes/vector2.js
function vector2_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function vector2_createClass(Constructor,protoProps,staticProps){if(protoProps)vector2_defineProperties(Constructor.prototype,protoProps);if(staticProps)vector2_defineProperties(Constructor,staticProps);return Constructor;}function vector2_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var vector2_Vector2=/*#__PURE__*/function(_Vector){vector2_inheritsLoose(Vector2,_Vector);// Creates a new, empty vec2
function Vector2(x,y){var _this;if(x===void 0){x=0;}if(y===void 0){y=0;}// PERF NOTE: initialize elements as double precision numbers
_this=_Vector.call(this,2)||this;// -0, -0);
if(isArray(x)&&arguments.length===1){_this.copy(x);}else{if(config.debug){checkNumber(x);checkNumber(y);}_this[0]=x;_this[1]=y;}return _this;}var _proto=Vector2.prototype;_proto.set=function set(x,y,z){this[0]=x;this[1]=y;return this.check();};_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];return this.check();};_proto.fromObject=function fromObject(object){if(config.debug){checkNumber(object.x);checkNumber(object.y);}this[0]=object.x;this[1]=object.y;return this.check();};_proto.toObject=function toObject(object){object.x=this[0];object.y=this[1];return object;}// Getters/setters
;// x,y inherited from Vector
_proto.horizontalAngle=function horizontalAngle(){return Math.atan2(this.y,this.x);};_proto.verticalAngle=function verticalAngle(){return Math.atan2(this.x,this.y);}// Transforms
;_proto.transform=function transform(matrix4){return this.transformAsPoint(matrix4);}// transforms as point (4th component is implicitly 1)
;_proto.transformAsPoint=function transformAsPoint(matrix4){vec2["d" /* transformMat4 */](this,this,matrix4);return this.check();}// transforms as vector  (4th component is implicitly 0, ignores translation. slightly faster)
;_proto.transformAsVector=function transformAsVector(matrix4){vec2_transformMat4AsVector(this,this,matrix4);return this.check();};_proto.transformByMatrix3=function transformByMatrix3(matrix3){vec2["c" /* transformMat3 */](this,this,matrix3);return this.check();};_proto.transformByMatrix2x3=function transformByMatrix2x3(matrix2x3){vec2["b" /* transformMat2d */](this,this,matrix2x3);return this.check();};_proto.transformByMatrix2=function transformByMatrix2(matrix2){vec2["a" /* transformMat2 */](this,this,matrix2);return this.check();};vector2_createClass(Vector2,[{key:"ELEMENTS",get:function get(){return 2;}}]);return Vector2;}(vector_Vector);
// CONCATENATED MODULE: ../modules/core/test/classes/vector2.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var vector2_bench_array=[0,0];var vector2_bench_float32Array=new Float32Array([0,0]);var vector2=new vector2_Vector2();function vector2Bench(suite,addReferenceBenchmarks){suite.group('@math.gl/core: Vector2').add('Vector2#new()',function(){return new vector2_Vector2(1,2);}).add('Vector2#set()',function(){return vector2.set(1,2);}).add('Vector2#copy()',function(){return vector2.copy([1,2]);});// .add('Vector2#from(Vector2)', () => vector2.from(arrayVector))
// .add('Vector2#to(Vector2)', () => vector2.to(arrayVector))
if(addReferenceBenchmarks){suite.group('Vector2 Type Conversion Cost').add('Vector2.from#Array',function(){return vector2.from(vector2_bench_array);}).add('Vector2.from#Float32Array',function(){return vector2.from(vector2_bench_float32Array);}).add('Vector2.to#Array',function(){return vector2.to(vector2_bench_array);}).add('Vector2.to#Float32Array',function(){return vector2.to(vector2_bench_float32Array);});}return suite;}
// CONCATENATED MODULE: ../modules/core/test/classes/vector3.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var ObjectVector=function ObjectVector(x,y,z){if(x===void 0){x=-0;}if(y===void 0){y=-0;}if(z===void 0){z=-0;}this.x=x;this.y=y;this.z=z;};var vector3_bench_array=[0,0,0];var vector3_bench_float32Array=new Float32Array([0,0,0]);var objectVector=new ObjectVector();var arrayVector=new vector3_Vector3();var vector3_bench_vector3=new vector3_Vector3();function vector3Bench(suite,addReferenceBenchmarks){suite.group('@math.gl/core: Vector3').add('Vector3#new()',function(){return new vector3_Vector3(1,2,3);}).add('Vector3#set()',function(){return vector3_bench_vector3.set(1,2,3);}).add('Vector3#copy()',function(){return vector3_bench_vector3.copy([1,2,3]);}).add('Vector3#from(Vector3)',function(){return vector3_bench_vector3.from(arrayVector);}).add('Vector3#to(Vector3)',function(){return vector3_bench_vector3.to(arrayVector);});if(addReferenceBenchmarks){suite.group('Vector3 Type Conversion Cost').add('Vector3#from(Object)',function(){return vector3_bench_vector3.from(objectVector);}).add('Vector3#to(Object)',function(){return vector3_bench_vector3.to(objectVector);}).add('Vector3.from#Array',function(){return vector3_bench_vector3.from(vector3_bench_array);}).add('Vector3.from#Float32Array',function(){return vector3_bench_vector3.from(vector3_bench_float32Array);}).add('Vector3.to#Array',function(){return vector3_bench_vector3.to(vector3_bench_array);}).add('Vector3.to#Float32Array',function(){return vector3_bench_vector3.to(vector3_bench_float32Array);});}return suite;}
// CONCATENATED MODULE: ../modules/core/src/classes/vector4.js
function vector4_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function vector4_createClass(Constructor,protoProps,staticProps){if(protoProps)vector4_defineProperties(Constructor.prototype,protoProps);if(staticProps)vector4_defineProperties(Constructor,staticProps);return Constructor;}function vector4_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var vector4_Vector4=/*#__PURE__*/function(_Vector){vector4_inheritsLoose(Vector4,_Vector);function Vector4(x,y,z,w){var _this;if(x===void 0){x=0;}if(y===void 0){y=0;}if(z===void 0){z=0;}if(w===void 0){w=0;}// PERF NOTE: initialize elements as double precision numbers
_this=_Vector.call(this,-0,-0,-0,-0)||this;if(isArray(x)&&arguments.length===1){_this.copy(x);}else{// this.set(x, y, z, w);
if(config.debug){checkNumber(x);checkNumber(y);checkNumber(z);checkNumber(w);}_this[0]=x;_this[1]=y;_this[2]=z;_this[3]=w;}return _this;}var _proto=Vector4.prototype;_proto.set=function set(x,y,z,w){this[0]=x;this[1]=y;this[2]=z;this[3]=w;return this.check();};_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];this[2]=array[2];this[3]=array[3];return this.check();};_proto.fromObject=function fromObject(object){if(config.debug){checkNumber(object.x);checkNumber(object.y);checkNumber(object.z);checkNumber(object.w);}this[0]=object.x;this[1]=object.y;this[2]=object.z;this[3]=object.w;return this;};_proto.toObject=function toObject(object){object.x=this[0];object.y=this[1];object.z=this[2];object.w=this[3];return object;}// Getters/setters
/* eslint-disable no-multi-spaces, brace-style, no-return-assign */;/* eslint-enable no-multi-spaces, brace-style, no-return-assign */_proto.transform=function transform(matrix4){vec3["i" /* transformMat4 */](this,this,matrix4);return this.check();};_proto.transformByMatrix3=function transformByMatrix3(matrix3){vec4_transformMat3(this,this,matrix3);return this.check();};_proto.transformByMatrix2=function transformByMatrix2(matrix2){vec4_transformMat2(this,this,matrix2);return this.check();};_proto.transformByQuaternion=function transformByQuaternion(quaternion){vec3["j" /* transformQuat */](this,this,quaternion);return this.check();}// three.js compatibility
;_proto.applyMatrix4=function applyMatrix4(m){m.transform(this,this);return this;};vector4_createClass(Vector4,[{key:"ELEMENTS",get:function get(){return 4;}// x,y inherited from Vector
},{key:"z",get:function get(){return this[2];},set:function set(value){return this[2]=checkNumber(value);}},{key:"w",get:function get(){return this[3];},set:function set(value){return this[3]=checkNumber(value);}}]);return Vector4;}(vector_Vector);
// CONCATENATED MODULE: ../modules/core/test/classes/vector4.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var vector4_bench_array=[0,0,0,0];var vector4_bench_float32Array=new Float32Array([0,0,0,0]);var vector4=new vector4_Vector4();function vector4Bench(suite,addReferenceBenchmarks){suite.group('@math.gl/core: Vector4').add('Vector4#new()',function(){return new vector4_Vector4(1,2,3,4);}).add('Vector4#set()',function(){return vector4.set(1,2,3,4);}).add('Vector4#copy()',function(){return vector4.copy([1,2,3,4]);});// .add('Vector4#from(Vector4)', () => vector4.from(arrayVector))
// .add('Vector4#to(Vector4)', () => vector4.to(arrayVector))
if(addReferenceBenchmarks){suite.group('Vector4 Type Conversion Cost').add('Vector4.from#Array',function(){return vector4.from(vector4_bench_array);}).add('Vector4.from#Float32Array',function(){return vector4.from(vector4_bench_float32Array);}).add('Vector4.to#Array',function(){return vector4.to(vector4_bench_array);}).add('Vector4.to#Float32Array',function(){return vector4.to(vector4_bench_float32Array);});}return suite;}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.freeze.js
var es6_object_freeze = __webpack_require__(283);

// CONCATENATED MODULE: ../modules/core/src/classes/base/matrix.js
function matrix_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var matrix_Matrix=/*#__PURE__*/function(_MathArray){matrix_inheritsLoose(Matrix,_MathArray);function Matrix(){return _MathArray.apply(this,arguments)||this;}var _proto=Matrix.prototype;// fromObject(object) {
//   const array = object.elements;
//   return this.fromRowMajor(array);
// }
// toObject(object) {
//   const array = object.elements;
//   this.toRowMajor(array);
//   return object;
// }
_proto.toString=function toString(){var string='[';if(config.printRowMajor){string+='row-major:';for(var row=0;row<this.RANK;++row){for(var col=0;col<this.RANK;++col){string+=" "+this[col*this.RANK+row];}}}else{string+='column-major:';for(var i=0;i<this.ELEMENTS;++i){string+=" "+this[i];}}string+=']';return string;};_proto.getElementIndex=function getElementIndex(row,col){return col*this.RANK+row;}// By default assumes row major indices
;_proto.getElement=function getElement(row,col){return this[col*this.RANK+row];}// By default assumes row major indices
;_proto.setElement=function setElement(row,col,value){this[col*this.RANK+row]=checkNumber(value);return this;};_proto.getColumn=function getColumn(columnIndex,result){if(result===void 0){result=new Array(this.RANK).fill(-0);}var firstIndex=columnIndex*this.RANK;for(var i=0;i<this.RANK;++i){result[i]=this[firstIndex+i];}return result;};_proto.setColumn=function setColumn(columnIndex,columnVector){var firstIndex=columnIndex*this.RANK;for(var i=0;i<this.RANK;++i){this[firstIndex+i]=columnVector[i];}return this;};return Matrix;}(math_array_MathArray);
// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/mat4.js
var mat4 = __webpack_require__(290);

// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/vec4.js
var vec4 = __webpack_require__(320);

// CONCATENATED MODULE: ../modules/core/src/classes/matrix4.js
function matrix4_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function matrix4_createClass(Constructor,protoProps,staticProps){if(protoProps)matrix4_defineProperties(Constructor.prototype,protoProps);if(staticProps)matrix4_defineProperties(Constructor,staticProps);return Constructor;}function matrix4_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var matrix4_IDENTITY=Object.freeze([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);var ZERO=Object.freeze([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var INDICES=Object.freeze({COL0ROW0:0,COL0ROW1:1,COL0ROW2:2,COL0ROW3:3,COL1ROW0:4,COL1ROW1:5,COL1ROW2:6,COL1ROW3:7,COL2ROW0:8,COL2ROW1:9,COL2ROW2:10,COL2ROW3:11,COL3ROW0:12,COL3ROW1:13,COL3ROW2:14,COL3ROW3:15});var constants={};var matrix4_Matrix4=/*#__PURE__*/function(_Matrix){matrix4_inheritsLoose(Matrix4,_Matrix);matrix4_createClass(Matrix4,[{key:"INDICES",get:function get(){return INDICES;}},{key:"ELEMENTS",get:function get(){return 16;}},{key:"RANK",get:function get(){return 4;}}],[{key:"IDENTITY",get:function get(){constants.IDENTITY=constants.IDENTITY||Object.freeze(new Matrix4(matrix4_IDENTITY));return constants.IDENTITY;}},{key:"ZERO",get:function get(){constants.ZERO=constants.ZERO||Object.freeze(new Matrix4(ZERO));return constants.ZERO;}}]);function Matrix4(array){var _this;// PERF NOTE: initialize elements as double precision numbers
_this=_Matrix.call(this,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0)||this;if(arguments.length===1&&Array.isArray(array)){_this.copy(array);}else{_this.identity();}return _this;}var _proto=Matrix4.prototype;_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];this[2]=array[2];this[3]=array[3];this[4]=array[4];this[5]=array[5];this[6]=array[6];this[7]=array[7];this[8]=array[8];this[9]=array[9];this[10]=array[10];this[11]=array[11];this[12]=array[12];this[13]=array[13];this[14]=array[14];this[15]=array[15];return this.check();}// eslint-disable-next-line max-params
;_proto.set=function set(m00,m10,m20,m30,m01,m11,m21,m31,m02,m12,m22,m32,m03,m13,m23,m33){this[0]=m00;this[1]=m10;this[2]=m20;this[3]=m30;this[4]=m01;this[5]=m11;this[6]=m21;this[7]=m31;this[8]=m02;this[9]=m12;this[10]=m22;this[11]=m32;this[12]=m03;this[13]=m13;this[14]=m23;this[15]=m33;return this.check();}// accepts row major order, stores as column major
// eslint-disable-next-line max-params
;_proto.setRowMajor=function setRowMajor(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){this[0]=m00;this[1]=m10;this[2]=m20;this[3]=m30;this[4]=m01;this[5]=m11;this[6]=m21;this[7]=m31;this[8]=m02;this[9]=m12;this[10]=m22;this[11]=m32;this[12]=m03;this[13]=m13;this[14]=m23;this[15]=m33;return this.check();};_proto.toRowMajor=function toRowMajor(result){result[0]=this[0];result[1]=this[4];result[2]=this[8];result[3]=this[12];result[4]=this[1];result[5]=this[5];result[6]=this[9];result[7]=this[13];result[8]=this[2];result[9]=this[6];result[10]=this[10];result[11]=this[14];result[12]=this[3];result[13]=this[7];result[14]=this[11];result[15]=this[15];return result;}// Constructors
;_proto.identity=function identity(){return this.copy(matrix4_IDENTITY);}// Calculates a 4x4 matrix from the given quaternion
// q quat  Quaternion to create matrix from
;_proto.fromQuaternion=function fromQuaternion(q){mat4["b" /* fromQuat */](this,q);return this.check();}// Generates a frustum matrix with the given bounds
// left  Number  Left bound of the frustum
// right Number  Right bound of the frustum
// bottom  Number  Bottom bound of the frustum
// top Number  Top bound of the frustum
// near  Number  Near bound of the frustum
// far Number  Far bound of the frustum
;_proto.frustum=function frustum(_ref){var left=_ref.left,right=_ref.right,bottom=_ref.bottom,top=_ref.top,near=_ref.near,far=_ref.far;if(far===Infinity){Matrix4._computeInfinitePerspectiveOffCenter(this,left,right,bottom,top,near);}else{mat4["c" /* frustum */](this,left,right,bottom,top,near,far);}return this.check();}// eslint-disable-next-line max-params
;Matrix4._computeInfinitePerspectiveOffCenter=function _computeInfinitePerspectiveOffCenter(result,left,right,bottom,top,near){var column0Row0=2.0*near/(right-left);var column1Row1=2.0*near/(top-bottom);var column2Row0=(right+left)/(right-left);var column2Row1=(top+bottom)/(top-bottom);var column2Row2=-1.0;var column2Row3=-1.0;var column3Row2=-2.0*near;result[0]=column0Row0;result[1]=0.0;result[2]=0.0;result[3]=0.0;result[4]=0.0;result[5]=column1Row1;result[6]=0.0;result[7]=0.0;result[8]=column2Row0;result[9]=column2Row1;result[10]=column2Row2;result[11]=column2Row3;result[12]=0.0;result[13]=0.0;result[14]=column3Row2;result[15]=0.0;return result;}// Generates a look-at matrix with the given eye position, focal point,
// and up axis
// eye vec3  Position of the viewer
// center  vec3  Point the viewer is looking at
// up  vec3  vec3 pointing up
;_proto.lookAt=function lookAt(eye,center,up){// Signature: lookAt({eye, center = [0, 0, 0], up = [0, 1, 0]}))
if(arguments.length===1){var _eye=eye;eye=_eye.eye;center=_eye.center;up=_eye.up;}center=center||[0,0,0];up=up||[0,1,0];mat4["f" /* lookAt */](this,eye,center,up);return this.check();}// Generates a orthogonal projection matrix with the given bounds
// from "traditional" view space parameters
// left  number  Left bound of the frustum
// right number  Right bound of the frustum
// bottom  number  Bottom bound of the frustum
// top number  Top bound of the frustum
// near  number  Near bound of the frustum
// far number  Far bound of the frustum
;_proto.ortho=function ortho(_ref2){var left=_ref2.left,right=_ref2.right,bottom=_ref2.bottom,top=_ref2.top,_ref2$near=_ref2.near,near=_ref2$near===void 0?0.1:_ref2$near,_ref2$far=_ref2.far,far=_ref2$far===void 0?500:_ref2$far;mat4["h" /* ortho */](this,left,right,bottom,top,near,far);return this.check();}// Generates an orthogonal projection matrix with the same parameters
// as a perspective matrix (plus focalDistance)
// fovy  number  Vertical field of view in radians
// aspect  number  Aspect ratio. typically viewport width/height
// focalDistance distance in the view frustum used for extent calculations
// near  number  Near bound of the frustum
// far number  Far bound of the frustum
;_proto.orthographic=function orthographic(_ref3){var _ref3$fovy=_ref3.fovy,fovy=_ref3$fovy===void 0?45*Math.PI/180:_ref3$fovy,_ref3$aspect=_ref3.aspect,aspect=_ref3$aspect===void 0?1:_ref3$aspect,_ref3$focalDistance=_ref3.focalDistance,focalDistance=_ref3$focalDistance===void 0?1:_ref3$focalDistance,_ref3$near=_ref3.near,near=_ref3$near===void 0?0.1:_ref3$near,_ref3$far=_ref3.far,far=_ref3$far===void 0?500:_ref3$far;if(fovy>Math.PI*2){throw Error('radians');}var halfY=fovy/2;var top=focalDistance*Math.tan(halfY);// focus_plane is the distance from the camera
var right=top*aspect;return new Matrix4().ortho({left:-right,right:right,bottom:-top,top:top,near:near,far:far});}// Generates a perspective projection matrix with the given bounds
// fovy  number  Vertical field of view in radians
// aspect  number  Aspect ratio. typically viewport width/height
// near  number  Near bound of the frustum
// far number  Far bound of the frustum
;_proto.perspective=function perspective(_temp){var _ref4=_temp===void 0?{}:_temp,fovy=_ref4.fovy,_ref4$fov=_ref4.fov,fov=_ref4$fov===void 0?45*Math.PI/180:_ref4$fov,_ref4$aspect=_ref4.aspect,aspect=_ref4$aspect===void 0?1:_ref4$aspect,_ref4$near=_ref4.near,near=_ref4$near===void 0?0.1:_ref4$near,_ref4$far=_ref4.far,far=_ref4$far===void 0?500:_ref4$far;fovy=fovy||fov;if(fovy>Math.PI*2){throw Error('radians');}mat4["i" /* perspective */](this,fovy,aspect,near,far);return this.check();}// Accessors
;_proto.determinant=function determinant(){return mat4["a" /* determinant */](this);}// Extracts the non-uniform scale assuming the matrix is an affine transformation.
// The scales are the "lengths" of the column vectors in the upper-left 3x3 matrix.
;_proto.getScale=function getScale(result){if(result===void 0){result=[-0,-0,-0];}// explicit is faster than hypot...
result[0]=Math.sqrt(this[0]*this[0]+this[1]*this[1]+this[2]*this[2]);result[1]=Math.sqrt(this[4]*this[4]+this[5]*this[5]+this[6]*this[6]);result[2]=Math.sqrt(this[8]*this[8]+this[9]*this[9]+this[10]*this[10]);// result[0] = Math.hypot(this[0], this[1], this[2]);
// result[1] = Math.hypot(this[4], this[5], this[6]);
// result[2] = Math.hypot(this[8], this[9], this[10]);
return result;}// Gets the translation portion, assuming the matrix is a affine transformation matrix.
;_proto.getTranslation=function getTranslation(result){if(result===void 0){result=[-0,-0,-0];}result[0]=this[12];result[1]=this[13];result[2]=this[14];return result;}// Gets upper left 3x3 pure rotation matrix (non-scaling), assume affine transformation matrix
;_proto.getRotation=function getRotation(result,scaleResult){if(result===void 0){result=[-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0,-0];}if(scaleResult===void 0){scaleResult=null;}var scale=this.getScale(scaleResult||[-0,-0,-0]);var inverseScale0=1/scale[0];var inverseScale1=1/scale[1];var inverseScale2=1/scale[2];result[0]=this[0]*inverseScale0;result[1]=this[1]*inverseScale1;result[2]=this[2]*inverseScale2;result[3]=0;result[4]=this[4]*inverseScale0;result[5]=this[5]*inverseScale1;result[6]=this[6]*inverseScale2;result[7]=0;result[8]=this[8]*inverseScale0;result[9]=this[9]*inverseScale1;result[10]=this[10]*inverseScale2;result[11]=0;result[12]=0;result[13]=0;result[14]=0;result[15]=1;return result;}// Modifiers
;_proto.transpose=function transpose(){mat4["p" /* transpose */](this,this);return this.check();};_proto.invert=function invert(){mat4["e" /* invert */](this,this);return this.check();}// Operations
;_proto.multiplyLeft=function multiplyLeft(a){mat4["g" /* multiply */](this,a,this);return this.check();};_proto.multiplyRight=function multiplyRight(a){mat4["g" /* multiply */](this,this,a);return this.check();}// Rotates a matrix by the given angle around the X axis
;_proto.rotateX=function rotateX(radians){mat4["k" /* rotateX */](this,this,radians);// mat4.rotate(this, this, radians, [1, 0, 0]);
return this.check();}// Rotates a matrix by the given angle around the Y axis.
;_proto.rotateY=function rotateY(radians){mat4["l" /* rotateY */](this,this,radians);// mat4.rotate(this, this, radians, [0, 1, 0]);
return this.check();}// Rotates a matrix by the given angle around the Z axis.
;_proto.rotateZ=function rotateZ(radians){mat4["m" /* rotateZ */](this,this,radians);// mat4.rotate(this, this, radians, [0, 0, 1]);
return this.check();};_proto.rotateXYZ=function rotateXYZ(_ref5){var rx=_ref5[0],ry=_ref5[1],rz=_ref5[2];return this.rotateX(rx).rotateY(ry).rotateZ(rz);};_proto.rotateAxis=function rotateAxis(radians,axis){mat4["j" /* rotate */](this,this,radians,axis);return this.check();};_proto.scale=function scale(factor){if(Array.isArray(factor)){mat4["n" /* scale */](this,this,factor);}else{mat4["n" /* scale */](this,this,[factor,factor,factor]);}return this.check();};_proto.translate=function translate(vec){mat4["o" /* translate */](this,this,vec);return this.check();}// Transforms
// Transforms any 2, 3 or 4 element vector. 2 and 3 elements are treated as points
;_proto.transform=function transform(vector,result){if(vector.length===4){result=vec4["a" /* transformMat4 */](result||[-0,-0,-0,-0],vector,this);checkVector(result,4);return result;}return this.transformAsPoint(vector,result);}// Transforms any 2 or 3 element array as point (w implicitly 1)
;_proto.transformAsPoint=function transformAsPoint(vector,result){var length=vector.length;switch(length){case 2:result=vec2["d" /* transformMat4 */](result||[-0,-0],vector,this);break;case 3:result=vec3["i" /* transformMat4 */](result||[-0,-0,-0],vector,this);break;default:throw new Error('Illegal vector');}checkVector(result,vector.length);return result;}// Transforms any 2 or 3 element array as vector (w implicitly 0)
;_proto.transformAsVector=function transformAsVector(vector,result){switch(vector.length){case 2:result=vec2_transformMat4AsVector(result||[-0,-0],vector,this);break;case 3:result=vec3_transformMat4AsVector(result||[-0,-0,-0],vector,this);break;default:throw new Error('Illegal vector');}checkVector(result,vector.length);return result;}// three.js math API compatibility
;_proto.makeRotationX=function makeRotationX(radians){return this.identity().rotateX(radians);};_proto.makeTranslation=function makeTranslation(x,y,z){return this.identity().translate([x,y,z]);}// DEPRECATED in 3.0
;_proto.transformPoint=function transformPoint(vector,result){deprecated('Matrix4.transformPoint','3.0');return this.transformAsPoint(vector,result);};_proto.transformVector=function transformVector(vector,result){deprecated('Matrix4.transformVector','3.0');return this.transformAsPoint(vector,result);};_proto.transformDirection=function transformDirection(vector,result){deprecated('Matrix4.transformDirection','3.0');return this.transformAsVector(vector,result);};return Matrix4;}(matrix_Matrix);
// CONCATENATED MODULE: ../modules/core/test/classes/matrix4.bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
/*
class CesiumMatrix4 {
  constructor(x = -0, y = -0, z = -0) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = z;
    this[4] = z;
    this[5] = z;
    this[6] = z;
    this[7] = z;
    this[8] = z;
    this[9] = z;
    this[10] = z;
    this[11] = z;
    this[12] = z;
    this[13] = z;
    this[14] = z;
    this[15] = z;
  }
}

function THREEMatrix4() {
  this.elements = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ];
}
*/var matrix4_bench_array=[0,0,0];// const arrayVector = new CesiumMatrix4();
// const objectVector = new THREEMatrix4();
var matrix4_bench_matrix4=new matrix4_Matrix4();var matrix4_bench_IDENTITY=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];var matrix4_bench_classicArray=[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];var matrix4_bench_float32Array=new Float32Array([1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1]);var matrix4_bench_float64Array=new Float64Array([1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1]);var mathglVector4=new vector4_Vector4();var dirVector4=new vector4_Vector4(0,0,0,0);var pointVector4=new vector4_Vector4(0,0,0,1);var matrix4_bench_vector3=[0,0,0];function matrix4Bench(suite,addReferenceBenchmarks){suite// add tests
.group('@math.gl/core: Matrix4 constructors').add('Matrix4#new Matrix4()',function(){return configure({debug:false});},function(){return new matrix4_Matrix4();}).add('Matrix4#new Matrix4(debug)',function(){return configure({debug:true});},function(){return new matrix4_Matrix4();}).add('Matrix4#copy()',function(){return configure({debug:false});},function(){return matrix4_bench_matrix4.copy(matrix4_bench_IDENTITY);}).add('Matrix4#copy(debug)',function(){return configure({debug:true});},function(){return matrix4_bench_matrix4.copy(matrix4_bench_IDENTITY);}).add('Matrix4#set()',function(){return configure({debug:false});},function(){return matrix4_bench_matrix4.set(1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1);}).add('Matrix4#setRowMajor()',function(){return matrix4_bench_matrix4.setRowMajor(1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1);}).add('Matrix4#identity',function(){return matrix4_bench_matrix4.identity();}).add('Matrix4#fromQuaternion',function(){return matrix4_bench_matrix4.fromQuaternion([1,1,1,1]);});// .add('Matrix4#from(Matrix4)', () => matrix4.from(arrayVector))
// .add('Matrix4#from(Object)', () => matrix4.from(objectVector))
// .add('Matrix4#to(Matrix4)', () => matrix4.to(arrayVector))
// .add('Matrix4#to(Object)', () => matrix4.to(objectVector));
if(addReferenceBenchmarks){suite.add('Array(16)',function(){return new Array(16);}).add('[1, 0, 0, 0, ...]',function(){return[1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1];}).add('new Float32Array(16)',function(){return new Float32Array(16);}).add('new Float32Array(IDENTITY)',function(){return new Float32Array(matrix4_bench_IDENTITY);}).add('new Float64Array(16)',function(){return new Float64Array(16);}).add('new Float64Array(IDENTITY)',function(){return new Float64Array(matrix4_bench_IDENTITY);});}if(addReferenceBenchmarks){suite.add('Matrix4#from(Array)',function(){return matrix4_bench_matrix4.from(matrix4_bench_array);}).add('Matrix4#from(Float32Array)',function(){return matrix4_bench_matrix4.from(matrix4_bench_float32Array);}).add('Matrix4#to(Array)',function(){return matrix4_bench_matrix4.to(matrix4_bench_array);}).add('Matrix4#to(Float32Array)',function(){return matrix4_bench_matrix4.to(matrix4_bench_float32Array);});// .group('debug validation cost')
// .add('Matrix4#validate (debug)', () => configure({debug: true}), () => matrix4.check())
// .add('Matrix4#validate ', () => configure({debug: false}), () => matrix4.check())
}suite.group('@math.gl/core: Matrix4 Multiplication').add('Matrix4#multiplyRight(Matrix4)',function(){return matrix4_bench_matrix4.multiplyRight(matrix4_bench_matrix4);}).add('gl-matrix#multiply(Matrix4)',function(){return mat4["g" /* multiply */](matrix4_bench_matrix4,matrix4_bench_matrix4,matrix4_bench_matrix4);}).add('Matrix4#transform(dir4)',function(){return matrix4_bench_matrix4.transform(dirVector4,mathglVector4);}).add('Matrix4#transform(point4)',function(){return matrix4_bench_matrix4.transform(pointVector4,mathglVector4);}).add('Matrix4#transformAsVector(v3)',function(){return matrix4_bench_matrix4.transformAsVector(matrix4_bench_vector3,matrix4_bench_vector3);}).add('Matrix4#transformAsPoint(v3)',function(){return matrix4_bench_matrix4.transformAsVector(matrix4_bench_vector3,matrix4_bench_vector3);});suite.group('@math.gl/core: Matrix4 accessors').add('Matrix4#determinant()',function(){return matrix4_bench_matrix4.determinant();}).add('Matrix4#getScale()',function(){return matrix4_bench_matrix4.getScale();}).add('Matrix4#getTranslation()',function(){return matrix4_bench_matrix4.getTranslation();}).add('Matrix4#getRotation()',function(){return matrix4_bench_matrix4.getRotation();});suite.group('@math.gl/core: Matrix4 operations').add('Matrix4#transpose()',function(){return matrix4_bench_matrix4.transpose();}).add('Matrix4#invert()',function(){return matrix4_bench_matrix4.invert();}).add('Matrix4#scale()',function(){return matrix4_bench_matrix4.scale(2);}).add('Matrix4#translate()',function(){return matrix4_bench_matrix4.translate([1,1,1]);});if(addReferenceBenchmarks){suite.add('gl-matrix#multiply(array)',function(){return mat4["g" /* multiply */](matrix4_bench_classicArray,matrix4_bench_classicArray,matrix4_bench_classicArray);}).add('gl-matrix#multiply(float32Array)',function(){return mat4["g" /* multiply */](matrix4_bench_float32Array,matrix4_bench_float32Array,matrix4_bench_float32Array);}).add('gl-matrix#multiply(float64Array)',function(){return mat4["g" /* multiply */](matrix4_bench_float64Array,matrix4_bench_float64Array,matrix4_bench_float64Array);});}return suite;}
// CONCATENATED MODULE: ../modules/core/test/bench.js
// Copyright (c) 2015 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// import classesBench from './classes/classes.bench';
function coreBench(suite,addReferenceBenchmarks){// classesBench(suite, addReferenceBenchmarks);
commonBench(suite,addReferenceBenchmarks);javascriptBench(suite,addReferenceBenchmarks);matrix4Bench(suite,addReferenceBenchmarks);vector2Bench(suite,addReferenceBenchmarks);vector3Bench(suite,addReferenceBenchmarks);vector4Bench(suite,addReferenceBenchmarks);return suite;}
// CONCATENATED MODULE: ../modules/geospatial/src/constants.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var WGS84_RADIUS_X=6378137.0;var WGS84_RADIUS_Y=6378137.0;var WGS84_RADIUS_Z=6356752.3142451793;// Pre-calculated ellipsoid defaults to avoid utils depending on `ellipsoid.js`
var WGS84_CONSTANTS={radii:[WGS84_RADIUS_X,WGS84_RADIUS_Y,WGS84_RADIUS_Z],radiiSquared:[WGS84_RADIUS_X*WGS84_RADIUS_X,WGS84_RADIUS_Y*WGS84_RADIUS_Y,WGS84_RADIUS_Z*WGS84_RADIUS_Z],oneOverRadii:[1.0/WGS84_RADIUS_X,1.0/WGS84_RADIUS_Y,1.0/WGS84_RADIUS_Z],oneOverRadiiSquared:[1.0/(WGS84_RADIUS_X*WGS84_RADIUS_X),1.0/(WGS84_RADIUS_Y*WGS84_RADIUS_Y),1.0/(WGS84_RADIUS_Z*WGS84_RADIUS_Z)],maximumRadius:Math.max(WGS84_RADIUS_X,WGS84_RADIUS_Y,WGS84_RADIUS_Z),centerToleranceSquared:1e-1// EPSILON1;
};
// CONCATENATED MODULE: ../modules/geospatial/src/type-utils.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var noop=function noop(x){return x;};var scratchVector=new vector3_Vector3();function fromCartographic(cartographic,vector,map){if(map===void 0){map=noop;}if(isArray(cartographic)){vector[0]=map(cartographic[0]);vector[1]=map(cartographic[1]);vector[2]=cartographic[2];}else if('longitude'in cartographic){vector[0]=map(cartographic.longitude);vector[1]=map(cartographic.latitude);vector[2]=cartographic.height;}else{vector[0]=map(cartographic.x);vector[1]=map(cartographic.y);vector[2]=cartographic.z;}return vector;}function fromCartographicToRadians(cartographic,vector){if(vector===void 0){vector=scratchVector;}return fromCartographic(cartographic,vector,config.cartographicRadians?noop:toRadians);}function fromCartographicToDegrees(cartographic,vector){if(vector===void 0){vector=scratchVector;}return fromCartographic(cartographic,vector,config.cartographicRadians?toDegrees:noop);}function toCartographic(vector,cartographic,map){if(map===void 0){map=noop;}if(isArray(cartographic)){cartographic[0]=map(vector[0]);cartographic[1]=map(vector[1]);cartographic[2]=vector[2];}else if('longitude'in cartographic){cartographic.longitude=map(vector[0]);cartographic.latitude=map(vector[1]);cartographic.height=vector[2];}else{cartographic.x=map(vector[0]);cartographic.y=map(vector[1]);cartographic.z=vector[2];}return cartographic;}function toCartographicFromRadians(vector,cartographic){return toCartographic(vector,cartographic,config.cartographicRadians?noop:toDegrees);}function toCartographicFromDegrees(vector,cartographic){return toCartographic(vector,cartographic,config.cartographicRadians?toRadians:noop);}function isWGS84(vector){if(!vector){return false;}scratchVector.from(vector);var oneOverRadiiSquared=WGS84_CONSTANTS.oneOverRadiiSquared,centerToleranceSquared=WGS84_CONSTANTS.centerToleranceSquared;var x2=vector[0]*vector[0]*oneOverRadiiSquared[0];var y2=vector[1]*vector[1]*oneOverRadiiSquared[1];var z2=vector[2]*vector[2]*oneOverRadiiSquared[2];return Math.abs(x2+y2+z2-1)<centerToleranceSquared;}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.math.sign.js
var es6_math_sign = __webpack_require__(297);

// CONCATENATED MODULE: ../modules/core/src/lib/math-utils.js
// NOTE: Added to make Cesium-derived test cases work
// TODO: Determine if/how to keep
/* harmony default export */ var math_utils = ({EPSILON1:1e-1,EPSILON2:1e-2,EPSILON3:1e-3,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,PI_OVER_TWO:Math.PI/2,PI_OVER_FOUR:Math.PI/4,PI_OVER_SIX:Math.PI/6,TWO_PI:Math.PI*2});
// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/helpers/scale-to-geodetic-surface.js
/* eslint-disable */var scale_to_geodetic_surface_scratchVector=new vector3_Vector3();var scaleToGeodeticSurfaceIntersection=new vector3_Vector3();var scaleToGeodeticSurfaceGradient=new vector3_Vector3();// Scales the provided Cartesian position along the geodetic surface normal
// so that it is on the surface of this ellipsoid.  If the position is
// at the center of the ellipsoid, this function returns undefined.
function scale_to_geodetic_surface_scaleToGeodeticSurface(cartesian,ellipsoid,result){if(result===void 0){result=new vector3_Vector3();}var oneOverRadii=ellipsoid.oneOverRadii,oneOverRadiiSquared=ellipsoid.oneOverRadiiSquared,centerToleranceSquared=ellipsoid.centerToleranceSquared;scale_to_geodetic_surface_scratchVector.from(cartesian);var positionX=cartesian.x;var positionY=cartesian.y;var positionZ=cartesian.z;var oneOverRadiiX=oneOverRadii.x;var oneOverRadiiY=oneOverRadii.y;var oneOverRadiiZ=oneOverRadii.z;var x2=positionX*positionX*oneOverRadiiX*oneOverRadiiX;var y2=positionY*positionY*oneOverRadiiY*oneOverRadiiY;var z2=positionZ*positionZ*oneOverRadiiZ*oneOverRadiiZ;// Compute the squared ellipsoid norm.
var squaredNorm=x2+y2+z2;var ratio=Math.sqrt(1.0/squaredNorm);// When very close to center or at center
if(!Number.isFinite(ratio)){return undefined;}// As an initial approximation, assume that the radial intersection is the projection point.
var intersection=scaleToGeodeticSurfaceIntersection;intersection.copy(cartesian).scale(ratio);// If the position is near the center, the iteration will not converge.
if(squaredNorm<centerToleranceSquared){return intersection.to(result);}var oneOverRadiiSquaredX=oneOverRadiiSquared.x;var oneOverRadiiSquaredY=oneOverRadiiSquared.y;var oneOverRadiiSquaredZ=oneOverRadiiSquared.z;// Use the gradient at the intersection point in place of the true unit normal.
// The difference in magnitude will be absorbed in the multiplier.
var gradient=scaleToGeodeticSurfaceGradient;gradient.set(intersection.x*oneOverRadiiSquaredX*2.0,intersection.y*oneOverRadiiSquaredY*2.0,intersection.z*oneOverRadiiSquaredZ*2.0);// Compute the initial guess at the normal vector multiplier, lambda.
var lambda=(1.0-ratio)*cartesian.len()/(0.5*gradient.len());var correction=0.0;var xMultiplier;var yMultiplier;var zMultiplier;var func;do{lambda-=correction;xMultiplier=1.0/(1.0+lambda*oneOverRadiiSquaredX);yMultiplier=1.0/(1.0+lambda*oneOverRadiiSquaredY);zMultiplier=1.0/(1.0+lambda*oneOverRadiiSquaredZ);var xMultiplier2=xMultiplier*xMultiplier;var yMultiplier2=yMultiplier*yMultiplier;var zMultiplier2=zMultiplier*zMultiplier;var xMultiplier3=xMultiplier2*xMultiplier;var yMultiplier3=yMultiplier2*yMultiplier;var zMultiplier3=zMultiplier2*zMultiplier;func=x2*xMultiplier2+y2*yMultiplier2+z2*zMultiplier2-1.0;// "denominator" here refers to the use of this expression in the velocity and acceleration
// computations in the sections to follow.
var denominator=x2*xMultiplier3*oneOverRadiiSquaredX+y2*yMultiplier3*oneOverRadiiSquaredY+z2*zMultiplier3*oneOverRadiiSquaredZ;var derivative=-2.0*denominator;correction=func/derivative;}while(Math.abs(func)>math_utils.EPSILON12);return scale_to_geodetic_surface_scratchVector.scale([xMultiplier,yMultiplier,zMultiplier]).to(result);}
// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/helpers/ellipsoid-transform.js
var EPSILON14=1e-14;var scratchOrigin=new vector3_Vector3();// Caclulate third axis from given two axii
var VECTOR_PRODUCT_LOCAL_FRAME={up:{south:'east',north:'west',west:'south',east:'north'},down:{south:'west',north:'east',west:'north',east:'south'},south:{up:'west',down:'east',west:'down',east:'up'},north:{up:'east',down:'west',west:'up',east:'down'},west:{up:'north',down:'south',north:'down',south:'up'},east:{up:'south',down:'north',north:'up',south:'down'}};var degeneratePositionLocalFrame={north:[-1,0,0],east:[0,1,0],up:[0,0,1],south:[1,0,0],west:[0,-1,0],down:[0,0,-1]};var scratchAxisVectors={east:new vector3_Vector3(),north:new vector3_Vector3(),up:new vector3_Vector3(),west:new vector3_Vector3(),south:new vector3_Vector3(),down:new vector3_Vector3()};var scratchVector1=new vector3_Vector3();var scratchVector2=new vector3_Vector3();var scratchVector3=new vector3_Vector3();// Computes a 4x4 transformation matrix from a reference frame
// centered at the provided origin to the provided ellipsoid's fixed reference frame.
// eslint-disable-next-line max-statements, max-params, complexity
function ellipsoid_transform_localFrameToFixedFrame(ellipsoid,firstAxis,secondAxis,thirdAxis,cartesianOrigin,result){var thirdAxisInferred=VECTOR_PRODUCT_LOCAL_FRAME[firstAxis]&&VECTOR_PRODUCT_LOCAL_FRAME[firstAxis][secondAxis];// firstAxis and secondAxis must be east, north, up, west, south or down.');
assert(thirdAxisInferred&&(!thirdAxis||thirdAxis===thirdAxisInferred));var firstAxisVector;var secondAxisVector;var thirdAxisVector;var origin=scratchOrigin.copy(cartesianOrigin);// If x and y are zero, assume origin is at a pole, which is a special case.
var atPole=common_equals(origin.x,0.0,EPSILON14)&&common_equals(origin.y,0.0,EPSILON14);if(atPole){// Look up axis value and adjust
var sign=Math.sign(origin.z);firstAxisVector=scratchVector1.fromArray(degeneratePositionLocalFrame[firstAxis]);if(firstAxis!=='east'&&firstAxis!=='west'){firstAxisVector.scale(sign);}secondAxisVector=scratchVector2.fromArray(degeneratePositionLocalFrame[secondAxis]);if(secondAxis!=='east'&&secondAxis!=='west'){secondAxisVector.scale(sign);}thirdAxisVector=scratchVector3.fromArray(degeneratePositionLocalFrame[thirdAxis]);if(thirdAxis!=='east'&&thirdAxis!=='west'){thirdAxisVector.scale(sign);}}else{// Calculate all axis
var up=scratchAxisVectors.up,east=scratchAxisVectors.east,north=scratchAxisVectors.north;east.set(-origin.y,origin.x,0.0).normalize();ellipsoid.geodeticSurfaceNormal(origin,up);north.copy(up).cross(east);var down=scratchAxisVectors.down,west=scratchAxisVectors.west,south=scratchAxisVectors.south;down.copy(up).scale(-1);west.copy(east).scale(-1);south.copy(north).scale(-1);// Pick three axis based on desired orientation
firstAxisVector=scratchAxisVectors[firstAxis];secondAxisVector=scratchAxisVectors[secondAxis];thirdAxisVector=scratchAxisVectors[thirdAxis];}// TODO - assuming the result is column-major
result[0]=firstAxisVector.x;result[1]=firstAxisVector.y;result[2]=firstAxisVector.z;result[3]=0.0;result[4]=secondAxisVector.x;result[5]=secondAxisVector.y;result[6]=secondAxisVector.z;result[7]=0.0;result[8]=thirdAxisVector.x;result[9]=thirdAxisVector.y;result[10]=thirdAxisVector.z;result[11]=0.0;result[12]=origin.x;result[13]=origin.y;result[14]=origin.z;result[15]=1.0;return result;}
// CONCATENATED MODULE: ../modules/geospatial/src/ellipsoid/ellipsoid.js
function ellipsoid_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function ellipsoid_createClass(Constructor,protoProps,staticProps){if(protoProps)ellipsoid_defineProperties(Constructor.prototype,protoProps);if(staticProps)ellipsoid_defineProperties(Constructor,staticProps);return Constructor;}// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */var ellipsoid_scratchVector=new vector3_Vector3();var scratchNormal=new vector3_Vector3();var scratchK=new vector3_Vector3();var scratchPosition=new vector3_Vector3();var scratchHeight=new vector3_Vector3();var scratchCartesian=new vector3_Vector3();var wgs84;// A quadratic surface defined in Cartesian coordinates by the equation
// <code>(x / a)^2 + (y / b)^2 + (z / c)^2 = 1</code>.  Primarily used
// to represent the shape of planetary bodies.
var ellipsoid_Ellipsoid=/*#__PURE__*/function(){ellipsoid_createClass(Ellipsoid,null,[{key:"WGS84",// An Ellipsoid instance initialized to the WGS84 standard.
get:function get(){wgs84=wgs84||new Ellipsoid(WGS84_RADIUS_X,WGS84_RADIUS_Y,WGS84_RADIUS_Z);return wgs84;}// Creates an Ellipsoid from a Cartesian specifying the radii in x, y, and z directions.
}]);function Ellipsoid(x,y,z){if(x===void 0){x=0.0;}if(y===void 0){y=0.0;}if(z===void 0){z=0.0;}assert(x>=0.0);assert(y>=0.0);assert(z>=0.0);this.radii=new vector3_Vector3(x,y,z);this.radiiSquared=new vector3_Vector3(x*x,y*y,z*z);this.radiiToTheFourth=new vector3_Vector3(x*x*x*x,y*y*y*y,z*z*z*z);this.oneOverRadii=new vector3_Vector3(x===0.0?0.0:1.0/x,y===0.0?0.0:1.0/y,z===0.0?0.0:1.0/z);this.oneOverRadiiSquared=new vector3_Vector3(x===0.0?0.0:1.0/(x*x),y===0.0?0.0:1.0/(y*y),z===0.0?0.0:1.0/(z*z));this.minimumRadius=Math.min(x,y,z);this.maximumRadius=Math.max(x,y,z);this.centerToleranceSquared=math_utils.EPSILON1;if(this.radiiSquared.z!==0){this.squaredXOverSquaredZ=this.radiiSquared.x/this.radiiSquared.z;}Object.freeze(this);}// Compares this Ellipsoid against the provided Ellipsoid componentwise and returns
var _proto=Ellipsoid.prototype;_proto.equals=function equals(right){return this===right||Boolean(right&&this.radii.equals(right.radii));}// Creates a string representing this Ellipsoid in the format '(radii.x, radii.y, radii.z)'.
;_proto.toString=function toString(){return this.radii.toString();}// Converts the provided cartographic to Cartesian representation.
;_proto.cartographicToCartesian=function cartographicToCartesian(cartographic,result){if(result===void 0){result=[0,0,0];}var normal=scratchNormal;var k=scratchK;var height=cartographic[2];this.geodeticSurfaceNormalCartographic(cartographic,normal);k.copy(this.radiiSquared).scale(normal);var gamma=Math.sqrt(normal.dot(k));k.scale(1/gamma);normal.scale(height);k.add(normal);return k.to(result);}// Converts the provided cartesian to cartographic (lng/lat/z) representation.
// The cartesian is undefined at the center of the ellipsoid.
;_proto.cartesianToCartographic=function cartesianToCartographic(cartesian,result){if(result===void 0){result=[0,0,0];}scratchCartesian.from(cartesian);var point=this.scaleToGeodeticSurface(scratchCartesian,scratchPosition);if(!point){return undefined;}var normal=this.geodeticSurfaceNormal(point,scratchNormal);var h=scratchHeight;h.copy(scratchCartesian).subtract(point);var longitude=Math.atan2(normal.y,normal.x);var latitude=Math.asin(normal.z);var height=Math.sign(vec3["c" /* dot */](h,scratchCartesian))*vec3["d" /* length */](h);return toCartographicFromRadians([longitude,latitude,height],result);}// Computes a 4x4 transformation matrix from a reference frame with an east-north-up axes
// centered at the provided origin to the provided ellipsoid's fixed reference frame.
;_proto.eastNorthUpToFixedFrame=function eastNorthUpToFixedFrame(origin,result){if(result===void 0){result=new matrix4_Matrix4();}return ellipsoid_transform_localFrameToFixedFrame(this,'east','north','up',origin,result);}// Computes a 4x4 transformation matrix from a reference frame centered at
// the provided origin to the ellipsoid's fixed reference frame.
;_proto.localFrameToFixedFrame=function localFrameToFixedFrame(firstAxis,secondAxis,thirdAxis,origin,result){if(result===void 0){result=new matrix4_Matrix4();}return ellipsoid_transform_localFrameToFixedFrame(this,firstAxis,secondAxis,thirdAxis,origin,result);}// Computes the unit vector directed from the center of this ellipsoid toward
// the provided Cartesian position.
;_proto.geocentricSurfaceNormal=function geocentricSurfaceNormal(cartesian,result){if(result===void 0){result=[0,0,0];}return ellipsoid_scratchVector.from(cartesian).normalize().to(result);}// Computes the normal of the plane tangent to the surface of the ellipsoid at provided position.
;_proto.geodeticSurfaceNormalCartographic=function geodeticSurfaceNormalCartographic(cartographic,result){if(result===void 0){result=[0,0,0];}var cartographicVectorRadians=fromCartographicToRadians(cartographic);var longitude=cartographicVectorRadians[0];var latitude=cartographicVectorRadians[1];var cosLatitude=Math.cos(latitude);ellipsoid_scratchVector.set(cosLatitude*Math.cos(longitude),cosLatitude*Math.sin(longitude),Math.sin(latitude)).normalize();return ellipsoid_scratchVector.to(result);}// Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.
;_proto.geodeticSurfaceNormal=function geodeticSurfaceNormal(cartesian,result){if(result===void 0){result=[0,0,0];}return ellipsoid_scratchVector.from(cartesian).scale(this.oneOverRadiiSquared).normalize().to(result);}// Scales the provided Cartesian position along the geodetic surface normal
// so that it is on the surface of this ellipsoid.  If the position is
// at the center of the ellipsoid, this function returns undefined.
;_proto.scaleToGeodeticSurface=function scaleToGeodeticSurface(cartesian,result){return scale_to_geodetic_surface_scaleToGeodeticSurface(cartesian,this,result);}// Scales the provided Cartesian position along the geocentric surface normal
// so that it is on the surface of this ellipsoid.
;_proto.scaleToGeocentricSurface=function scaleToGeocentricSurface(cartesian,result){if(result===void 0){result=[0,0,0];}scratchPosition.from(cartesian);var positionX=scratchPosition.x;var positionY=scratchPosition.y;var positionZ=scratchPosition.z;var oneOverRadiiSquared=this.oneOverRadiiSquared;var beta=1.0/Math.sqrt(positionX*positionX*oneOverRadiiSquared.x+positionY*positionY*oneOverRadiiSquared.y+positionZ*positionZ*oneOverRadiiSquared.z);return scratchPosition.multiplyScalar(beta).to(result);}// Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying
// its components by the result of `Ellipsoid#oneOverRadii`
;_proto.transformPositionToScaledSpace=function transformPositionToScaledSpace(position,result){if(result===void 0){result=[0,0,0];}return scratchPosition.from(position).scale(this.oneOverRadii).to(result);}// Transforms a Cartesian X, Y, Z position from the ellipsoid-scaled space by multiplying
// its components by the result of `Ellipsoid#radii`.
;_proto.transformPositionFromScaledSpace=function transformPositionFromScaledSpace(position,result){if(result===void 0){result=[0,0,0];}return scratchPosition.from(position).scale(this.radii).to(result);}// Computes a point which is the intersection of the surface normal with the z-axis.
;_proto.getSurfaceNormalIntersectionWithZAxis=function getSurfaceNormalIntersectionWithZAxis(position,buffer,result){if(buffer===void 0){buffer=0.0;}if(result===void 0){result=[0,0,0];}// Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)
assert(common_equals(this.radii.x,this.radii.y,math_utils.EPSILON15));assert(this.radii.z>0);scratchPosition.from(position);var z=scratchPosition.z*(1-this.squaredXOverSquaredZ);if(Math.abs(z)>=this.radii.z-buffer){return undefined;}return scratchPosition.set(0.0,0.0,z).to(result);};return Ellipsoid;}();
// CONCATENATED MODULE: ../modules/geospatial/src/index.js

// CONCATENATED MODULE: ../modules/geospatial/test/ellipsoid/ellipsoid.bench.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
// import {externalVector3ToArray, setExternalVector3} from '@math.gl/geospatial/type-utils';
// import * as vec3 from 'gl-matrix/vec3';
var ellipsoid_bench_ellipsoid=ellipsoid_Ellipsoid.WGS84;var spaceCartesian=new vector3_Vector3(4582719.8827300891,-4582719.8827300882,1725510.4250797231);var spaceCartographic=new vector3_Vector3(-45.0,15.0,330000.0);// const spaceCartographicObject = {x: -45.0, y: 15.0, z: 330000.0};
var resultVector=new vector3_Vector3();// const resultArray = [0, 0, 0];
// const resultObject = {x: 0, y: 0, z: 0};
var ellipsoid_bench_origin=new vector3_Vector3(1.0,0.0,0.0);// const northPole = new Vector3(0.0, 0.0, 1.0);
var resultMatrix=new matrix4_Matrix4();function ellipsoidBench(suite){// const spaceCartesian = new Vector3(4582719.8827300891, -4582719.8827300882, 1725510.4250797231);
suite.group('@math.gl/geospatial Ellipsoid').add('#cartographicToCartesian(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.cartographicToCartesian(spaceCartographic,resultVector);}).add('#cartesianToCartographic(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.cartesianToCartographic(spaceCartesian,resultVector);}).add('#eastNorthUpToFixedFrame()',function(){return ellipsoid_Ellipsoid.WGS84.eastNorthUpToFixedFrame(ellipsoid_bench_origin,resultMatrix);})// .add('#eastNorthUpToFixedFrame(Pole)', () =>
//   Ellipsoid.WGS84.eastNorthUpToFixedFrame(northPole, resultMatrix)
// )
// .add('#cartographicToCartesian(=>Object)', () =>
//   ellipsoid.cartographicToCartesian(spaceCartographic, resultObject)
// )
// .add('#geodSurfNormalCarto(=>Object)', () =>
//   ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographicObject, resultObject)
// )
.add('#geodSurfNormal(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.geodeticSurfaceNormalCartographic(spaceCartographic,resultVector);})// .add('#geodSurfNormalCarto() Opt', () =>
//   geodeticSurfaceNormalCartographicOptimized(spaceCartographic, resultArray)
// )
.add('#geodeticSurfaceNormal(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.geodeticSurfaceNormal(spaceCartesian,resultVector);}).add('#scaleToGeocentricSurface(=>Vector3)',function(){return ellipsoid_bench_ellipsoid.scaleToGeocentricSurface(spaceCartesian,resultVector);});// .add('#scaleToGeocentricSurface(=>Object)', () =>
//   ellipsoid.scaleToGeocentricSurface(spaceCartesian, resultObject)
// )
return suite;}/*
// Hand optimized version of Ellipsoid.geodeticSurfaceNormalCartographic
// Computes the normal of the plane tangent to the surface of the ellipsoid at provided position.
function geodeticSurfaceNormalCartographicOptimized(cartographic, result = new Vector3()) {
  // const longitude = cartographic.longitude;
  // const latitude = cartographic.latitude;

  // const longitude = toRadians(cartographic[0]);
  // const latitude = toRadians(cartographic[1]);
  const longitude = cartographic[0];
  const latitude = cartographic[1];

  const cosLatitude = Math.cos(latitude);

  const x = cosLatitude * Math.cos(longitude);
  const y = cosLatitude * Math.sin(longitude);
  const z = Math.sin(latitude);

  result.x = x;
  result.y = y;
  result.z = z;

  return vec3.normalize(result, result);
}
*/
// CONCATENATED MODULE: ../modules/geospatial/test/bench.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var bench_ObjectVector=function ObjectVector(x,y,z){if(x===void 0){x=0;}if(y===void 0){y=0;}if(z===void 0){z=0;}this.x=x;this.y=y;this.z=z;};var bench_array=[0,0,0];var bench_float32Array=new Float32Array([0,0,0]);var bench_objectVector=new bench_ObjectVector();var bench_vector=new vector3_Vector3();var bench_vector3=new vector3_Vector3();function geospatialBench(suite,addReferenceBenchmarks){suite.group('Cartographic Type Conversion Cost').add('fromCartographic#Vector3',function(){return fromCartographic(bench_vector3,bench_vector);}).add('fromCartographicToRadians#Vector3',function(){return fromCartographicToRadians(bench_vector3,bench_vector);}).add('toCartographicFromRadians#Vector3',function(){return toCartographicFromRadians(bench_vector3,bench_vector);});if(addReferenceBenchmarks){suite.add('fromCartographicToRadians#Object',function(){return fromCartographicToRadians(bench_vector3,bench_objectVector);}).add('toCartographicFromRadians#Object',function(){return toCartographicFromRadians(bench_vector3,bench_objectVector);}).add('fromCartographicToRadians#Array',function(){return fromCartographicToRadians(bench_vector3,bench_array);}).add('fromCartographicToRadians#Float32Array',function(){return fromCartographicToRadians(bench_vector3,bench_float32Array);}).add('toCartographicFromRadians#Array',function(){return toCartographicFromRadians(bench_vector3,bench_array);}).add('toCartographicFromRadians#Float32Array',function(){return toCartographicFromRadians(bench_vector3,bench_float32Array);});}ellipsoidBench(suite);return suite;}
// CONCATENATED MODULE: ../modules/culling/src/constants.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var INTERSECT=Object.freeze({OUTSIDE:-1,// Represents that an object is not contained within the frustum.
INTERSECTING:0,// Represents that an object intersects one of the frustum's planes.
INSIDE:1// Represents that an object is fully within the frustum.
});var Intersect=INTERSECT;
// CONCATENATED MODULE: ../modules/culling/src/lib/axis-aligned-bounding-box.js
var axis_aligned_bounding_box_scratchVector=new vector3_Vector3();var axis_aligned_bounding_box_scratchNormal=new vector3_Vector3();/**
 * Creates an instance of an AxisAlignedBoundingBox from the minimum and maximum points along the x, y, and z axes.
 * @alias AxisAlignedBoundingBox
 * @constructor
 *
 * @param {Vector3} [minimum=0, 0, 0] The minimum point along the x, y, and z axes.
 * @param {Vector3} [maximum=0, 0, 0] The maximum point along the x, y, and z axes.
 * @param {Vector3} [center] The center of the box; automatically computed if not supplied.
 *
 * @see BoundingSphere
 * @see BoundingRectangle
 */var axis_aligned_bounding_box_AxisAlignedBoundingBox=/*#__PURE__*/function(){function AxisAlignedBoundingBox(minimum,maximum,center){if(minimum===void 0){minimum=[0,0,0];}if(maximum===void 0){maximum=[0,0,0];}if(center===void 0){center=null;}// If center was not defined, compute it.
center=center||axis_aligned_bounding_box_scratchVector.copy(minimum).add(maximum).scale(0.5);/**
     * The minimum point defining the bounding box.
     * @type {Vector3}
     * @default {@link 0, 0, 0}
     */this.minimum=new vector3_Vector3(minimum);/**
     * The maximum point defining the bounding box.
     * @type {Vector3}
     * @default {@link 0, 0, 0}
     */this.maximum=new vector3_Vector3(maximum);/**
     * The center point of the bounding box.
     * @type {Vector3}
     */this.center=new vector3_Vector3(center);}/**
   * Computes an instance of an AxisAlignedBoundingBox. The box is determined by
   * finding the points spaced the farthest apart on the x, y, and z axes.
   *
   * @param {Vector3[]} positions List of points that the bounding box will enclose.  Each point must have a <code>x</code>, <code>y</code>, and <code>z</code> properties.
   * @param {AxisAlignedBoundingBox} [result] The object onto which to store the result.
   * @returns {AxisAlignedBoundingBox} The modified result parameter or a new AxisAlignedBoundingBox instance if one was not provided.
   *
   * @example
   * // Compute an axis aligned bounding box enclosing two points.
   * const box = Cesium.AxisAlignedBoundingBox.fromPoints([new Cesium.Vector3(2, 0, 0), new Cesium.Vector3(-2, 0, 0)]);
   */ // eslint-disable-next-line
var _proto=AxisAlignedBoundingBox.prototype;_proto.fromPoints=function fromPoints(positions){if(!positions||positions.length===0){this.minimum.set(0,0,0);this.maximum.set(0,0,0);this.center.set(0,0,0);return this;}var minimumX=positions[0][0];var minimumY=positions[0][1];var minimumZ=positions[0][2];var maximumX=positions[0][0];var maximumY=positions[0][1];var maximumZ=positions[0][2];for(var _iterator=positions,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var p=_ref;var x=p[0];var y=p[1];var z=p[2];minimumX=Math.min(x,minimumX);maximumX=Math.max(x,maximumX);minimumY=Math.min(y,minimumY);maximumY=Math.max(y,maximumY);minimumZ=Math.min(z,minimumZ);maximumZ=Math.max(z,maximumZ);}this.minimum.set(minimumX,minimumY,minimumZ);this.maximum.set(maximumX,maximumY,maximumZ);this.center.copy(this.minimum).add(this.maximum).scale(0.5);return this;}/**
   * Duplicates a AxisAlignedBoundingBox instance.
   *
   * @returns {AxisAlignedBoundingBox} A new AxisAlignedBoundingBox instance.
   */;_proto.clone=function clone(){return new AxisAlignedBoundingBox(this.minimum,this.maximum,this.center);}/**
   * Compares the provided AxisAlignedBoundingBox componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {AxisAlignedBoundingBox} [right] The second AxisAlignedBoundingBox to compare with.
   * @returns {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
   */;_proto.equals=function equals(right){return this===right||Boolean(right)&&this.center.equals(right.center)&&this.minimum.equals(right.minimum)&&this.maximum.equals(right.maximum);}/**
   * Determines which side of a plane a box is located.
   *
   * @param {Plane} plane The plane to test against.
   * @returns {Intersect} {@link Intersect.INSIDE} if the entire box is on the side of the plane
   *                      the normal is pointing, {@link Intersect.OUTSIDE} if the entire box is
   *                      on the opposite side, and {@link Intersect.INTERSECTING} if the box
   *                      intersects the plane.
   */;_proto.intersectPlane=function intersectPlane(plane){var h=axis_aligned_bounding_box_scratchVector.copy(this.maximum).subtract(this.minimum).scale(0.5);// The positive half diagonal
var normal=axis_aligned_bounding_box_scratchNormal.from(plane.normal);var e=h.x*Math.abs(normal.x)+h.y*Math.abs(normal.y)+h.z*Math.abs(normal.z);var s=this.center.dot(normal)+plane.distance;// signed distance from center
if(s-e>0){return Intersect.INSIDE;}if(s+e<0){// Not in front because normals point inward
return Intersect.OUTSIDE;}return Intersect.INTERSECTING;};return AxisAlignedBoundingBox;}();
// CONCATENATED MODULE: ../modules/culling/src/lib/bounding-sphere.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */// import Rectangle from './rectangle';
// const defaultProjection = new GeographicProjection();
// const fromRectangle2DLowerLeft = new Vector3();
// const fromRectangle2DUpperRight = new Vector3();
// const fromRectangle2DSouthwest = new Cartographic();
// const fromRectangle2DNortheast = new Cartographic();
// const fromRectangle3DScratch = [];
var bounding_sphere_scratchVector=new vector3_Vector3();var bounding_sphere_scratchVector2=new vector3_Vector3();var bounding_sphere_BoundingSphere=/*#__PURE__*/function(){function BoundingSphere(center,radius){if(center===void 0){center=[0,0,0];}if(radius===void 0){radius=0.0;}this.radius=-0;this.center=new vector3_Vector3();this.fromCenterRadius(center,radius);}var _proto=BoundingSphere.prototype;_proto.fromCenterRadius=function fromCenterRadius(center,radius){this.center.from(center);this.radius=radius;return this;}// Computes a bounding sphere from the corner points of an axis-aligned bounding box.  The sphere
// tighly and fully encompases the box.
;_proto.fromCornerPoints=function fromCornerPoints(corner,oppositeCorner){oppositeCorner=bounding_sphere_scratchVector.from(oppositeCorner);this.center=new vector3_Vector3().from(corner).add(oppositeCorner).scale(0.5);this.radius=this.center.distance(oppositeCorner);return this;}// Compares the provided BoundingSphere componentwise
;_proto.equals=function equals(right){return this===right||Boolean(right)&&this.center.equals(right.center)&&this.radius===right.radius;}// Duplicates a BoundingSphere instance.
;_proto.clone=function clone(){return new BoundingSphere(this.center,this.radius);}// Computes a bounding sphere that contains both the left and right bounding spheres.
;_proto.union=function union(boundingSphere){var leftCenter=this.center;var leftRadius=this.radius;var rightCenter=boundingSphere.center;var rightRadius=boundingSphere.radius;var toRightCenter=bounding_sphere_scratchVector.copy(rightCenter).subtract(leftCenter);var centerSeparation=toRightCenter.magnitude();if(leftRadius>=centerSeparation+rightRadius){// Left sphere wins.
return this.clone();}if(rightRadius>=centerSeparation+leftRadius){// Right sphere wins.
return boundingSphere.clone();}// There are two tangent points, one on far side of each sphere.
var halfDistanceBetweenTangentPoints=(leftRadius+centerSeparation+rightRadius)*0.5;// Compute the center point halfway between the two tangent points.
bounding_sphere_scratchVector2.copy(toRightCenter).scale((-leftRadius+halfDistanceBetweenTangentPoints)/centerSeparation).add(leftCenter);this.center.copy(bounding_sphere_scratchVector2);this.radius=halfDistanceBetweenTangentPoints;return this;}// Computes a bounding sphere by enlarging the provided sphere to contain the provided point.
;_proto.expand=function expand(point){point=bounding_sphere_scratchVector.from(point);var radius=point.subtract(this.center).magnitude();if(radius>this.radius){this.radius=radius;}return this;}// Determines which side of a plane a sphere is located.
;_proto.intersectPlane=function intersectPlane(plane){var center=this.center;var radius=this.radius;var normal=plane.normal;var distanceToPlane=normal.dot(center)+plane.distance;// The center point is negative side of the plane normal
if(distanceToPlane<-radius){return Intersect.OUTSIDE;}// The center point is positive side of the plane, but radius extends beyond it; partial overlap
if(distanceToPlane<radius){return Intersect.INTERSECTING;}// The center point and radius is positive side of the plane
return Intersect.INSIDE;}// Applies a 4x4 affine transformation matrix to a bounding sphere.
//    *
// @param {BoundingSphere} sphere The bounding sphere to apply the transformation to.
// @param {Matrix4} transform The transformation matrix to apply to the bounding sphere.
// @returns {BoundingSphere} The modified this parameter or a new BoundingSphere instance if none was provided.
;_proto.transform=function transform(_transform){this.center.transform(_transform);var scale=mat4["d" /* getScaling */](bounding_sphere_scratchVector,_transform);this.radius=Math.max(scale[0],Math.max(scale[1],scale[2]))*this.radius;return this;}// Computes the estimated distance squared from the closest point on a bounding sphere to a point.
;_proto.distanceSquaredTo=function distanceSquaredTo(point){point=bounding_sphere_scratchVector.from(point);var delta=point.subtract(this.center);return delta.lengthSquared()-this.radius*this.radius;};_proto.distanceTo=function distanceTo(point){return Math.sqrt(this.distanceSquaredTo(point));};return BoundingSphere;}();
// EXTERNAL MODULE: ../node_modules/gl-matrix/esm/mat3.js
var mat3 = __webpack_require__(321);

// CONCATENATED MODULE: ../modules/core/src/classes/matrix3.js
function matrix3_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function matrix3_createClass(Constructor,protoProps,staticProps){if(protoProps)matrix3_defineProperties(Constructor.prototype,protoProps);if(staticProps)matrix3_defineProperties(Constructor,staticProps);return Constructor;}function matrix3_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var matrix3_IDENTITY=Object.freeze([1,0,0,0,1,0,0,0,1]);var matrix3_ZERO=Object.freeze([0,0,0,0,0,0,0,0,0]);var matrix3_INDICES=Object.freeze({COL0ROW0:0,COL0ROW1:1,COL0ROW2:2,COL1ROW0:3,COL1ROW1:4,COL1ROW2:5,COL2ROW0:6,COL2ROW1:7,COL2ROW2:8});var matrix3_constants={};var matrix3_Matrix3=/*#__PURE__*/function(_Matrix){matrix3_inheritsLoose(Matrix3,_Matrix);matrix3_createClass(Matrix3,[{key:"ELEMENTS",get:function get(){return 9;}},{key:"RANK",get:function get(){return 3;}},{key:"INDICES",get:function get(){return matrix3_INDICES;}}],[{key:"IDENTITY",get:function get(){matrix3_constants.IDENTITY=matrix3_constants.IDENTITY||Object.freeze(new Matrix3(matrix3_IDENTITY));return matrix3_constants.IDENTITY;}},{key:"ZERO",get:function get(){matrix3_constants.ZERO=matrix3_constants.ZERO||Object.freeze(new Matrix3(matrix3_ZERO));return matrix3_constants.ZERO;}}]);function Matrix3(array){var _this;// PERF NOTE: initialize elements as double precision numbers
_this=_Matrix.call(this,-0,-0,-0,-0,-0,-0,-0,-0,-0)||this;if(arguments.length===1&&Array.isArray(array)){_this.copy(array);}else{_this.identity();}return _this;}var _proto=Matrix3.prototype;_proto.copy=function copy(array){this[0]=array[0];this[1]=array[1];this[2]=array[2];this[3]=array[3];this[4]=array[4];this[5]=array[5];this[6]=array[6];this[7]=array[7];this[8]=array[8];return this.check();}// accepts column major order, stores in column major order
// eslint-disable-next-line max-params
;_proto.set=function set(m00,m10,m20,m01,m11,m21,m02,m12,m22){this[0]=m00;this[1]=m10;this[2]=m20;this[3]=m01;this[4]=m11;this[5]=m21;this[6]=m02;this[7]=m12;this[8]=m22;return this.check();}// accepts row major order, stores as column major
// eslint-disable-next-line max-params
;_proto.setRowMajor=function setRowMajor(m00,m01,m02,m10,m11,m12,m20,m21,m22){this[0]=m00;this[1]=m10;this[2]=m20;this[3]=m01;this[4]=m11;this[5]=m21;this[6]=m02;this[7]=m12;this[8]=m22;return this.check();}// Accessors
;_proto.determinant=function determinant(){return mat3["a" /* determinant */](this);}// Constructors
;_proto.identity=function identity(){return this.copy(matrix3_IDENTITY);}// Calculates a 3x3 matrix from the given quaternion
// q quat  Quaternion to create matrix from
;_proto.fromQuaternion=function fromQuaternion(q){mat3["b" /* fromQuat */](this,q);return this.check();}// Modifiers
;_proto.transpose=function transpose(){mat3["h" /* transpose */](this,this);return this.check();};_proto.invert=function invert(){mat3["c" /* invert */](this,this);return this.check();}// Operations
;_proto.multiplyLeft=function multiplyLeft(a){mat3["d" /* multiply */](this,a,this);return this.check();};_proto.multiplyRight=function multiplyRight(a){mat3["d" /* multiply */](this,this,a);return this.check();};_proto.rotate=function rotate(radians){mat3["e" /* rotate */](this,this,radians);return this.check();};_proto.scale=function scale(factor){if(Array.isArray(factor)){mat3["f" /* scale */](this,this,factor);}else{mat3["f" /* scale */](this,this,[factor,factor,factor]);}return this.check();};_proto.translate=function translate(vec){mat3["g" /* translate */](this,this,vec);return this.check();}// Transforms
;_proto.transform=function transform(vector,result){switch(vector.length){case 2:result=vec2["c" /* transformMat3 */](result||[-0,-0],vector,this);break;case 3:result=vec3["h" /* transformMat3 */](result||[-0,-0,-0],vector,this);break;case 4:result=vec4_transformMat3(result||[-0,-0,-0,-0],vector,this);break;default:throw new Error('Illegal vector');}checkVector(result,vector.length);return result;}// DEPRECATED IN 3.0
;_proto.transformVector=function transformVector(vector,result){deprecated('Matrix3.transformVector');return this.transform(vector,result);};_proto.transformVector2=function transformVector2(vector,result){deprecated('Matrix3.transformVector');return this.transform(vector,result);};_proto.transformVector3=function transformVector3(vector,result){deprecated('Matrix3.transformVector');return this.transform(vector,result);}// Deprecations in v3.0
;return Matrix3;}(matrix_Matrix);
// CONCATENATED MODULE: ../modules/culling/src/algorithms/compute-eigen-decomposition.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var scratchMatrix=new matrix3_Matrix3();var scratchUnitary=new matrix3_Matrix3();var scratchDiagonal=new matrix3_Matrix3();var jMatrix=new matrix3_Matrix3();var jMatrixTranspose=new matrix3_Matrix3();/**
 * Computes the eigenvectors and eigenvalues of a symmetric matrix.
 * <p>
 * Returns a diagonal matrix and unitary matrix such that:
 * <code>matrix = unitary matrix * diagonal matrix * transpose(unitary matrix)</code>
 * </p>
 * <p>
 * The values along the diagonal of the diagonal matrix are the eigenvalues. The columns
 * of the unitary matrix are the corresponding eigenvectors.
 * </p>
 *
 * @param {Matrix3} matrix The matrix to decompose into diagonal and unitary matrix. Expected to be symmetric.
 * @param {Object} [result] An object with unitary and diagonal properties which are matrices onto which to store the result.
 * @returns {Object} An object with unitary and diagonal properties which are the unitary and diagonal matrices, respectively.
 *
 * @example
 * const a = //... symmetric matrix
 * const result = {
 *   unitary : new Matrix3(),
 *   diagonal : new Matrix3()
 * };
 * computeEigenDecomposition(a, result);
 *
 * const unitaryTranspose = Matrix3.transpose(result.unitary, new Matrix3());
 * const b = Matrix3.multiply(result.unitary, result.diagonal, new Matrix3());
 * Matrix3.multiply(b, unitaryTranspose, b); // b is now equal to a
 *
 * const lambda = result.diagonal.getColumn(0, new Vector3()).x;  // first eigenvalue
 * const v = result.unitary.getColumn(0, new Vector3());          // first eigenvector
 * const c = v.multiplyByScalar(lambda);                          // equal to v.transformByMatrix3(a)
 */ // This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
// section 8.4.3 The Classical Jacobi Algorithm
function computeEigenDecomposition(matrix,result){if(result===void 0){result={};}var EIGEN_TOLERANCE=math_utils.EPSILON20;var EIGEN_MAX_SWEEPS=10;var count=0;var sweep=0;var unitaryMatrix=scratchUnitary;var diagonalMatrix=scratchDiagonal;unitaryMatrix.identity();diagonalMatrix.copy(matrix);var epsilon=EIGEN_TOLERANCE*computeFrobeniusNorm(diagonalMatrix);while(sweep<EIGEN_MAX_SWEEPS&&offDiagonalFrobeniusNorm(diagonalMatrix)>epsilon){shurDecomposition(diagonalMatrix,jMatrix);jMatrixTranspose.copy(jMatrix).transpose();diagonalMatrix.multiplyRight(jMatrix);diagonalMatrix.multiplyLeft(jMatrixTranspose);unitaryMatrix.multiplyRight(jMatrix);if(++count>2){++sweep;count=0;}}result.unitary=unitaryMatrix.toTarget(result.unitary);result.diagonal=diagonalMatrix.toTarget(result.diagonal);return result;}function computeFrobeniusNorm(matrix){var norm=0.0;for(var i=0;i<9;++i){var temp=matrix[i];norm+=temp*temp;}return Math.sqrt(norm);}var rowVal=[1,0,0];var colVal=[2,2,1];// Computes the "off-diagonal" Frobenius norm.
// Assumes matrix is symmetric.
function offDiagonalFrobeniusNorm(matrix){var norm=0.0;for(var i=0;i<3;++i){var temp=matrix[scratchMatrix.getElementIndex(colVal[i],rowVal[i])];norm+=2.0*temp*temp;}return Math.sqrt(norm);}// The routine takes a matrix, which is assumed to be symmetric, and
// finds the largest off-diagonal term, and then creates
// a matrix (result) which can be used to help reduce it
//
// This routine was created based upon Matrix Computations, 3rd ed., by Golub and Van Loan,
// section 8.4.2 The 2by2 Symmetric Schur Decomposition.
//
// eslint-disable-next-line max-statements
function shurDecomposition(matrix,result){var tolerance=math_utils.EPSILON15;var maxDiagonal=0.0;var rotAxis=1;// find pivot (rotAxis) based on max diagonal of matrix
for(var i=0;i<3;++i){var temp=Math.abs(matrix[scratchMatrix.getElementIndex(colVal[i],rowVal[i])]);if(temp>maxDiagonal){rotAxis=i;maxDiagonal=temp;}}var p=rowVal[rotAxis];var q=colVal[rotAxis];var c=1.0;var s=0.0;if(Math.abs(matrix[scratchMatrix.getElementIndex(q,p)])>tolerance){var qq=matrix[scratchMatrix.getElementIndex(q,q)];var pp=matrix[scratchMatrix.getElementIndex(p,p)];var qp=matrix[scratchMatrix.getElementIndex(q,p)];var tau=(qq-pp)/2.0/qp;var t;if(tau<0.0){t=-1.0/(-tau+Math.sqrt(1.0+tau*tau));}else{t=1.0/(tau+Math.sqrt(1.0+tau*tau));}c=1.0/Math.sqrt(1.0+t*t);s=t*c;}// Copy into result
matrix3_Matrix3.IDENTITY.to(result);result[scratchMatrix.getElementIndex(p,p)]=result[scratchMatrix.getElementIndex(q,q)]=c;result[scratchMatrix.getElementIndex(q,p)]=s;result[scratchMatrix.getElementIndex(p,q)]=-s;return result;}
// CONCATENATED MODULE: ../modules/culling/src/algorithms/bounding-box-from-points.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var bounding_box_from_points_scratchVector2=new vector3_Vector3();var bounding_box_from_points_scratchVector3=new vector3_Vector3();var scratchVector4=new vector3_Vector3();var scratchVector5=new vector3_Vector3();var scratchVector6=new vector3_Vector3();var scratchCovarianceResult=new matrix3_Matrix3();var scratchEigenResult={diagonal:new matrix3_Matrix3(),unitary:new matrix3_Matrix3()};// Computes an instance of an OrientedBoundingBox of the given positions.
// This is an implementation of Stefan Gottschalk's Collision Queries using Oriented Bounding Boxes solution (PHD thesis).
// Reference: http://gamma.cs.unc.edu/users/gottschalk/main.pdf
// eslint-disable-next-line max-statements
function makeOrientedBoundingBoxfromPoints(positions,result){if(!positions||positions.length===0){result.halfAxes=new matrix3_Matrix3([0,0,0,0,0,0,0,0,0]);result.center=new vector3_Vector3();return result;}var length=positions.length;var meanPoint=new vector3_Vector3(0,0,0);for(var _iterator=positions,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var position=_ref;meanPoint.add(position);}var invLength=1.0/length;meanPoint.multiplyByScalar(invLength);var exx=0.0;var exy=0.0;var exz=0.0;var eyy=0.0;var eyz=0.0;var ezz=0.0;for(var _iterator2=positions,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var _position=_ref2;var p=bounding_box_from_points_scratchVector2.copy(_position).subtract(meanPoint);exx+=p.x*p.x;exy+=p.x*p.y;exz+=p.x*p.z;eyy+=p.y*p.y;eyz+=p.y*p.z;ezz+=p.z*p.z;}exx*=invLength;exy*=invLength;exz*=invLength;eyy*=invLength;eyz*=invLength;ezz*=invLength;var covarianceMatrix=scratchCovarianceResult;covarianceMatrix[0]=exx;covarianceMatrix[1]=exy;covarianceMatrix[2]=exz;covarianceMatrix[3]=exy;covarianceMatrix[4]=eyy;covarianceMatrix[5]=eyz;covarianceMatrix[6]=exz;covarianceMatrix[7]=eyz;covarianceMatrix[8]=ezz;var _computeEigenDecompos=computeEigenDecomposition(covarianceMatrix,scratchEigenResult),unitary=_computeEigenDecompos.unitary;var rotation=result.halfAxes.copy(unitary);var v1=rotation.getColumn(0,scratchVector4);var v2=rotation.getColumn(1,scratchVector5);var v3=rotation.getColumn(2,scratchVector6);var u1=-Number.MAX_VALUE;var u2=-Number.MAX_VALUE;var u3=-Number.MAX_VALUE;var l1=Number.MAX_VALUE;var l2=Number.MAX_VALUE;var l3=Number.MAX_VALUE;for(var _iterator3=positions,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[Symbol.iterator]();;){var _ref3;if(_isArray3){if(_i3>=_iterator3.length)break;_ref3=_iterator3[_i3++];}else{_i3=_iterator3.next();if(_i3.done)break;_ref3=_i3.value;}var _position2=_ref3;u1=Math.max(_position2.dot(v1),u1);u2=Math.max(_position2.dot(v2),u2);u3=Math.max(_position2.dot(v3),u3);l1=Math.min(_position2.dot(v1),l1);l2=Math.min(_position2.dot(v2),l2);l3=Math.min(_position2.dot(v3),l3);}v1=v1.multiplyByScalar(0.5*(l1+u1));v2=v2.multiplyByScalar(0.5*(l2+u2));v3=v3.multiplyByScalar(0.5*(l3+u3));result.center.copy(v1).add(v2).add(v3);var scale=bounding_box_from_points_scratchVector3.set(u1-l1,u2-l2,u3-l3).multiplyByScalar(0.5);result.halfAxes.multiplyByScalar(scale);return result;}
// CONCATENATED MODULE: ../modules/culling/src/lib/oriented-bounding-box.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var oriented_bounding_box_scratchVector=new vector3_Vector3();var scratchOffset=new vector3_Vector3();var scratchVectorU=new vector3_Vector3();var scratchVectorV=new vector3_Vector3();var scratchVectorW=new vector3_Vector3();var scratchPPrime=new vector3_Vector3();var scratchCorner=new vector3_Vector3();var scratchToCenter=new vector3_Vector3();var fromOrientedBoundingBoxScratchU=new vector3_Vector3();var fromOrientedBoundingBoxScratchV=new vector3_Vector3();var fromOrientedBoundingBoxScratchW=new vector3_Vector3();var MATRIX3={COLUMN0ROW0:0,COLUMN0ROW1:1,COLUMN0ROW2:2,COLUMN1ROW0:3,COLUMN1ROW1:4,COLUMN1ROW2:5,COLUMN2ROW0:6,COLUMN2ROW1:7,COLUMN2ROW2:8};var oriented_bounding_box_OrientedBoundingBox=/*#__PURE__*/function(){// An OrientedBoundingBox of some object is a closed and convex cuboid. It can provide a tighter bounding volume than {@link BoundingSphere} or {@link AxisAlignedBoundingBox} in many cases.
function OrientedBoundingBox(center,halfAxes){if(center===void 0){center=[0,0,0];}if(halfAxes===void 0){halfAxes=[0,0,0,0,0,0,0,0,0];}this.center=new vector3_Vector3().from(center);this.halfAxes=new matrix3_Matrix3(halfAxes);}// Duplicates a OrientedBoundingBox instance.
var _proto=OrientedBoundingBox.prototype;_proto.clone=function clone(result){return new OrientedBoundingBox(this.center,this.halfAxes);};_proto.fromPoints=function fromPoints(points,result){if(result===void 0){result=new OrientedBoundingBox();}return makeOrientedBoundingBoxfromPoints(points,result);}// Compares the provided OrientedBoundingBox componentwise and returns
;_proto.equals=function equals(right){return this===right||Boolean(right)&&this.center.equals(right.center)&&this.halfAxes.equals(right.halfAxes);}// Computes a tight-fitting bounding sphere enclosing the provided oriented bounding box.
;_proto.getBoundingSphere=function getBoundingSphere(result){if(result===void 0){result=new bounding_sphere_BoundingSphere();}var halfAxes=this.halfAxes;var u=halfAxes.getColumn(0,fromOrientedBoundingBoxScratchU);var v=halfAxes.getColumn(1,fromOrientedBoundingBoxScratchV);var w=halfAxes.getColumn(2,fromOrientedBoundingBoxScratchW);// Calculate "corner" vector
var cornerVector=oriented_bounding_box_scratchVector.copy(u).add(v).add(w);result.center.copy(this.center);result.radius=cornerVector.magnitude();return result;}/**
   * Determines which side of a plane the oriented bounding box is located.
   *
   * @param {OrientedBoundingBox} box The oriented bounding box to test.
   * @param {Plane} plane The plane to test against.
   * @returns {Intersect} {@link Intersect.INSIDE} if the entire box is on the side of the plane the normal is pointing, {@link Intersect.OUTSIDE} if the entire box is on the opposite side, and {@link Intersect.INTERSECTING} if the box intersects the plane.
   */;_proto.intersectPlane=function intersectPlane(plane){var center=this.center;var normal=plane.normal;var halfAxes=this.halfAxes;var normalX=normal.x;var normalY=normal.y;var normalZ=normal.z;// Plane is used as if it is its normal; the first three components are assumed to be normalized
var radEffective=Math.abs(normalX*halfAxes[MATRIX3.COLUMN0ROW0]+normalY*halfAxes[MATRIX3.COLUMN0ROW1]+normalZ*halfAxes[MATRIX3.COLUMN0ROW2])+Math.abs(normalX*halfAxes[MATRIX3.COLUMN1ROW0]+normalY*halfAxes[MATRIX3.COLUMN1ROW1]+normalZ*halfAxes[MATRIX3.COLUMN1ROW2])+Math.abs(normalX*halfAxes[MATRIX3.COLUMN2ROW0]+normalY*halfAxes[MATRIX3.COLUMN2ROW1]+normalZ*halfAxes[MATRIX3.COLUMN2ROW2]);var distanceToPlane=normal.dot(center)+plane.distance;if(distanceToPlane<=-radEffective){// The entire box is on the negative side of the plane normal
return Intersect.OUTSIDE;}else if(distanceToPlane>=radEffective){// The entire box is on the positive side of the plane normal
return Intersect.INSIDE;}return Intersect.INTERSECTING;}// Computes the estimated distance from the closest point on a bounding box to a point.
;_proto.distanceTo=function distanceTo(point){return Math.sqrt(this.distanceSquaredTo(point));}// Computes the estimated distance squared from the closest point on a bounding box to a point.
// See Geometric Tools for Computer Graphics 10.4.2
// eslint-disable-next-line max-statements
;_proto.distanceSquaredTo=function distanceSquaredTo(point){var offset=scratchOffset.copy(point).subtract(this.center);var halfAxes=this.halfAxes;var u=halfAxes.getColumn(0,scratchVectorU);var v=halfAxes.getColumn(1,scratchVectorV);var w=halfAxes.getColumn(2,scratchVectorW);var uHalf=u.magnitude();var vHalf=v.magnitude();var wHalf=w.magnitude();u.normalize();v.normalize();w.normalize();var pPrime=scratchPPrime;pPrime.x=offset.dot(u);pPrime.y=offset.dot(v);pPrime.z=offset.dot(w);var distanceSquared=0.0;var d;if(pPrime.x<-uHalf){d=pPrime.x+uHalf;distanceSquared+=d*d;}else if(pPrime.x>uHalf){d=pPrime.x-uHalf;distanceSquared+=d*d;}if(pPrime.y<-vHalf){d=pPrime.y+vHalf;distanceSquared+=d*d;}else if(pPrime.y>vHalf){d=pPrime.y-vHalf;distanceSquared+=d*d;}if(pPrime.z<-wHalf){d=pPrime.z+wHalf;distanceSquared+=d*d;}else if(pPrime.z>wHalf){d=pPrime.z-wHalf;distanceSquared+=d*d;}return distanceSquared;}// The distances calculated by the vector from the center of the bounding box
// to position projected onto direction.
// eslint-disable-next-line max-statements
;_proto.computePlaneDistances=function computePlaneDistances(position,direction,result){if(result===void 0){result=[[],[]];}var minDist=Number.POSITIVE_INFINITY;var maxDist=Number.NEGATIVE_INFINITY;var center=this.center;var halfAxes=this.halfAxes;var u=halfAxes.getColumn(0,scratchVectorU);var v=halfAxes.getColumn(1,scratchVectorV);var w=halfAxes.getColumn(2,scratchVectorW);// project first corner
var corner=scratchCorner.copy(u).add(v).add(w).add(center);var toCenter=scratchToCenter.copy(corner).subtract(position);var mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project second corner
corner.copy(center).add(u).add(v).subtract(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project third corner
corner.copy(center).add(u).subtract(v).add(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project fourth corner
corner.copy(center).add(u).subtract(v).subtract(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project fifth corner
center.copy(corner).subtract(u).add(v).add(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project sixth corner
center.copy(corner).subtract(u).add(v).subtract(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project seventh corner
center.copy(corner).subtract(u).subtract(v).add(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);// project eighth corner
center.copy(corner).subtract(u).subtract(v).subtract(w);toCenter.copy(corner).subtract(position);mag=direction.dot(toCenter);minDist=Math.min(mag,minDist);maxDist=Math.max(mag,maxDist);result.start=minDist;result.stop=maxDist;return result;};_proto.getTransform=function getTransform(){// const modelMatrix = Matrix4.fromRotationTranslation(this.boundingVolume.halfAxes, this.boundingVolume.center);
// return modelMatrix;
};return OrientedBoundingBox;}();
// CONCATENATED MODULE: ../modules/culling/src/lib/plane.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */var plane_scratchPosition=new vector3_Vector3();var plane_scratchNormal=new vector3_Vector3();// A plane in Hessian Normal Form
var plane_Plane=/*#__PURE__*/function(){function Plane(normal,distance){if(normal===void 0){normal=[0,0,1];}if(distance===void 0){distance=0;}this.normal=new vector3_Vector3();this.distance=-0;this.fromNormalDistance(normal,distance);}var _proto=Plane.prototype;_proto.fromNormalDistance=function fromNormalDistance(normal,distance){assert(Number.isFinite(distance));this.normal.from(normal).normalize();this.distance=distance;return this;}// Creates a plane from a normal and a point on the plane.
;_proto.fromPointNormal=function fromPointNormal(point,normal){point=plane_scratchPosition.from(point);this.normal.from(normal).normalize();var distance=-this.normal.dot(point);this.distance=distance;return this;}// Creates a plane from the general equation
;_proto.fromCoefficients=function fromCoefficients(a,b,c,d){this.normal.set(a,b,c);assert(this.normal.len()===1);this.distance=d;return this;}// Duplicates a Plane instance.
;_proto.clone=function clone(plane){return new Plane(this.normal,this.distance);}// Compares the provided Planes by normal and distance
;_proto.equals=function equals(right){return common_equals(this.distance,right.distance)&&common_equals(this.normal,right.normal);}// Computes the signed shortest distance of a point to a plane.
// The sign of the distance determines which side of the plane the point is on.
;_proto.getPointDistance=function getPointDistance(point){return this.normal.dot(point)+this.distance;}// Transforms the plane by the given transformation matrix.
;_proto.transform=function transform(matrix4){var normal=plane_scratchNormal.copy(this.normal).transformAsVector(matrix4).normalize();var point=this.normal.scale(-this.distance).transform(matrix4);return this.fromPointNormal(point,normal);}// Projects a point onto the plane.
;_proto.projectPointOntoPlane=function projectPointOntoPlane(point,result){if(result===void 0){result=[0,0,0];}point=plane_scratchPosition.from(point);// projectedPoint = point - (normal.point + scale) * normal
var pointDistance=this.getPointDistance(point);var scaledNormal=plane_scratchNormal.copy(this.normal).scale(pointDistance);return point.subtract(scaledNormal).to(result);};return Plane;}();
// CONCATENATED MODULE: ../modules/culling/src/lib/culling-volume.js
function culling_volume_toConsumableArray(arr){return culling_volume_arrayWithoutHoles(arr)||culling_volume_iterableToArray(arr)||culling_volume_nonIterableSpread();}function culling_volume_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function culling_volume_iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function culling_volume_arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function culling_volume_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function culling_volume_createClass(Constructor,protoProps,staticProps){if(protoProps)culling_volume_defineProperties(Constructor.prototype,protoProps);if(staticProps)culling_volume_defineProperties(Constructor,staticProps);return Constructor;}// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */// X, Y, Z Unit vectors
var faces=[new vector3_Vector3([1,0,0]),new vector3_Vector3([0,1,0]),new vector3_Vector3([0,0,1])];var scratchPlaneCenter=new vector3_Vector3();var scratchPlaneNormal=new vector3_Vector3();var scratchPlane=new plane_Plane(new vector3_Vector3(1.0,0.0,0.0),0.0);// A culling volume defined by planes.
var culling_volume_CullingVolume=/*#__PURE__*/function(){culling_volume_createClass(CullingVolume,null,[{key:"MASK_OUTSIDE",// For plane masks (as used in {@link CullingVolume#computeVisibilityWithPlaneMask}), this special value
// represents the case where the object bounding volume is entirely outside the culling volume.
get:function get(){return 0xffffffff;}// For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
// represents the case where the object bounding volume is entirely inside the culling volume.
},{key:"MASK_INSIDE",get:function get(){return 0x00000000;}// For plane masks (as used in {@link CullingVolume.prototype.computeVisibilityWithPlaneMask}), this value
// represents the case where the object bounding volume (may) intersect all planes of the culling volume.
},{key:"MASK_INDETERMINATE",get:function get(){return 0x7fffffff;}}]);function CullingVolume(planes){if(planes===void 0){planes=[];}// {Cartesian4[]} [planes] An array of clipping planes.
this.planes=planes;assert(this.planes.every(function(plane){return plane instanceof plane_Plane;}));}// Constructs a culling volume from a bounding sphere. Creates six planes that create a box containing the sphere.
// The planes are aligned to the x, y, and z axes in world coordinates.
var _proto=CullingVolume.prototype;_proto.fromBoundingSphere=function fromBoundingSphere(boundingSphere){this.planes.length=2*faces.length;var center=boundingSphere.center;var radius=boundingSphere.radius;var planeIndex=0;for(var _i=0,_faces=faces;_i<_faces.length;_i++){var faceNormal=_faces[_i];var plane0=this.planes[planeIndex];var plane1=this.planes[planeIndex+1];if(!plane0){plane0=this.planes[planeIndex]=new vector4_Vector4();}if(!plane1){plane1=this.planes[planeIndex+1]=new vector4_Vector4();}var plane0Center=scratchPlaneCenter.copy(faceNormal).scale(-radius).add(center);var plane0Distance=-faceNormal.dot(plane0Center);// plane0.fromNormalDistance(faceNormal, plane0Distance);
plane0.x=faceNormal.x;plane0.y=faceNormal.y;plane0.z=faceNormal.z;plane0.w=plane0Distance;var plane1Center=scratchPlaneCenter.copy(faceNormal).scale(radius).add(center);var negatedFaceNormal=scratchPlaneNormal.copy(faceNormal).negate();var plane1Distance=-negatedFaceNormal.dot(plane1Center);// plane1.fromNormalDistance(negatedFaceNormal, plane1Distance);
plane1.x=negatedFaceNormal.x;plane1.y=negatedFaceNormal.y;plane1.z=negatedFaceNormal.z;plane1.w=plane1Distance;planeIndex+=2;}return this;}// Determines whether a bounding volume intersects the culling volume.
;_proto.computeVisibility=function computeVisibility(boundingVolume){assert(boundingVolume);// const planes = this.planes;
var intersect=Intersect.INSIDE;for(var _iterator=this.planes,_isArray=Array.isArray(_iterator),_i2=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i2>=_iterator.length)break;_ref=_iterator[_i2++];}else{_i2=_iterator.next();if(_i2.done)break;_ref=_i2.value;}var planeCoefficients=_ref;var plane=scratchPlane.fromCoefficients.apply(scratchPlane,culling_volume_toConsumableArray(planeCoefficients));var result=boundingVolume.intersectPlane(plane);switch(result){case Intersect.OUTSIDE:// We are done
return Intersect.OUTSIDE;case Intersect.INTERSECTING:// If no other intersection is outside, return INTERSECTING
intersect=Intersect.INTERSECTING;break;default:}}return intersect;}// Determines whether a bounding volume intersects the culling volume.
/*
   * @param {Number} parentPlaneMask A bit mask from the boundingVolume's parent's check against the same culling
   *                                 volume, such that if (planeMask & (1 << planeIndex) === 0), for k < 31, then
   *                                 the parent (and therefore this) volume is completely inside plane[planeIndex]
   *                                 and that plane check can be skipped.
   */;_proto.computeVisibilityWithPlaneMask=function computeVisibilityWithPlaneMask(boundingVolume,parentPlaneMask){assert(boundingVolume,'boundingVolume is required.');assert(Number.isFinite(parentPlaneMask),'parentPlaneMask is required.');if(parentPlaneMask===CullingVolume.MASK_OUTSIDE||parentPlaneMask===CullingVolume.MASK_INSIDE){// parent is completely outside or completely inside, so this child is as well.
return parentPlaneMask;}// Start with MASK_INSIDE (all zeros) so that after the loop, the return value can be compared with MASK_INSIDE.
// (Because if there are fewer than 31 planes, the upper bits wont be changed.)
var mask=CullingVolume.MASK_INSIDE;var planes=this.planes;for(var k=0;k<this.planes.length;++k){// For k greater than 31 (since 31 is the maximum number of INSIDE/INTERSECTING bits we can store), skip the optimization.
var flag=k<31?1<<k:0;if(k<31&&(parentPlaneMask&flag)===0){// boundingVolume is known to be INSIDE this plane.
continue;}var plane=scratchPlane.fromCoefficients.apply(scratchPlane,culling_volume_toConsumableArray(planes[k]));var result=boundingVolume.intersectPlane(plane);if(result===Intersect.OUTSIDE){return CullingVolume.MASK_OUTSIDE;}else if(result===Intersect.INTERSECTING){mask|=flag;}}return mask;};return CullingVolume;}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(5);

// CONCATENATED MODULE: ../modules/culling/src/lib/perspective-off-center-frustum.js
function perspective_off_center_frustum_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function perspective_off_center_frustum_createClass(Constructor,protoProps,staticProps){if(protoProps)perspective_off_center_frustum_defineProperties(Constructor.prototype,protoProps);if(staticProps)perspective_off_center_frustum_defineProperties(Constructor,staticProps);return Constructor;}// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
// Note: This class is still an experimental export, mainly used by other test cases
// - It has not been fully adapted to math.gl conventions
// - Documentation has not been ported
var scratchPlaneRightVector=new vector3_Vector3();var scratchPlaneNearCenter=new vector3_Vector3();var scratchPlaneFarCenter=new vector3_Vector3();var perspective_off_center_frustum_scratchPlaneNormal=new vector3_Vector3();var perspective_off_center_frustum_PerspectiveOffCenterFrustum=/*#__PURE__*/function(){/**
   * The viewing frustum is defined by 6 planes.
   * Each plane is represented by a {@link Vector4} object, where the x, y, and z components
   * define the unit vector normal to the plane, and the w component is the distance of the
   * plane from the origin/camera position.
   *
   * @alias PerspectiveOffCenterFrustum
   * @constructor
   *
   * @param {Object} [options] An object with the following properties:
   * @param {Number} [options.left] The left clipping plane distance.
   * @param {Number} [options.right] The right clipping plane distance.
   * @param {Number} [options.top] The top clipping plane distance.
   * @param {Number} [options.bottom] The bottom clipping plane distance.
   * @param {Number} [options.near=1.0] The near clipping plane distance.
   * @param {Number} [options.far=500000000.0] The far clipping plane distance.
   *
   * @example
   * const frustum = new PerspectiveOffCenterFrustum({
   *     left : -1.0,
   *     right : 1.0,
   *     top : 1.0,
   *     bottom : -1.0,
   *     near : 1.0,
   *     far : 100.0
   * });
   *
   * @see PerspectiveFrustum
   */function PerspectiveOffCenterFrustum(options){if(options===void 0){options={};}options=Object.assign({near:1.0,far:500000000.0},options);/**
     * Defines the left clipping plane.
     * @type {Number}
     * @default undefined
     */this.left=options.left;this._left=undefined;/**
     * Defines the right clipping plane.
     * @type {Number}
     * @default undefined
     */this.right=options.right;this._right=undefined;/**
     * Defines the top clipping plane.
     * @type {Number}
     * @default undefined
     */this.top=options.top;this._top=undefined;/**
     * Defines the bottom clipping plane.
     * @type {Number}
     * @default undefined
     */this.bottom=options.bottom;this._bottom=undefined;/**
     * The distance of the near plane.
     * @type {Number}
     * @default 1.0
     */this.near=options.near;this._near=this.near;/**
     * The distance of the far plane.
     * @type {Number}
     * @default 500000000.0
     */this.far=options.far;this._far=this.far;this._cullingVolume=new culling_volume_CullingVolume();this._perspectiveMatrix=new matrix4_Matrix4();this._infinitePerspective=new matrix4_Matrix4();}/**
   * Returns a duplicate of a PerspectiveOffCenterFrustum instance.
   * @returns {PerspectiveOffCenterFrustum} A new PerspectiveFrustum instance.
   * */var _proto=PerspectiveOffCenterFrustum.prototype;_proto.clone=function clone(){return new PerspectiveOffCenterFrustum({right:this.right,left:this.left,top:this.top,bottom:this.bottom,near:this.near,far:this.far});}/**
   * Compares the provided PerspectiveOffCenterFrustum componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {PerspectiveOffCenterFrustum} [other] The right hand side PerspectiveOffCenterFrustum.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */;_proto.equals=function equals(other){return other&&other instanceof PerspectiveOffCenterFrustum&&this.right===other.right&&this.left===other.left&&this.top===other.top&&this.bottom===other.bottom&&this.near===other.near&&this.far===other.far;}/**
   * Gets the perspective projection matrix computed from the view frustum.
   * @memberof PerspectiveOffCenterFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveOffCenterFrustum#infiniteProjectionMatrix
   */;/**
   * Creates a culling volume for this frustum.
   *
   * @param {Vector3} position The eye position.
   * @param {Vector3} direction The view direction.
   * @param {Vector3} up The up direction.
   * @returns {CullingVolume} A culling volume at the given position and orientation.
   *
   * @example
   * // Check if a bounding volume intersects the frustum.
   * const cullingVolume = frustum.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
   * const intersect = cullingVolume.computeVisibility(boundingVolume);
   */ // eslint-disable-next-line complexity, max-statements
_proto.computeCullingVolume=function computeCullingVolume(position,direction,up){assert(position,'position is required.');assert(direction,'direction is required.');assert(up,'up is required.');var planes=this._cullingVolume.planes;var right=scratchPlaneRightVector.copy(direction).cross(up);var nearCenter=scratchPlaneNearCenter.copy(direction).multiplyByScalar(this.near).add(position);var farCenter=scratchPlaneFarCenter.copy(direction).multiplyByScalar(this.far).add(position);var normal=perspective_off_center_frustum_scratchPlaneNormal;// Left plane computation
normal.copy(right).multiplyByScalar(this.left).add(nearCenter).subtract(position).normalize().cross(up).normalize();planes[0]=planes[0]||new vector4_Vector4();var plane=planes[0];plane.x=normal.x;plane.y=normal.y;plane.z=normal.z;plane.w=-normal.dot(position);// Right plane computation
normal.copy(right).multiplyByScalar(this.right).add(nearCenter).subtract(position).normalize().cross(up).normalize();planes[1]=planes[1]||new vector4_Vector4();plane=planes[1];plane.x=normal.x;plane.y=normal.y;plane.z=normal.z;plane.w=-normal.dot(position);// Bottom plane computation
normal.copy(up).multiplyByScalar(this.bottom).add(nearCenter).subtract(position).normalize().cross(right).normalize();planes[2]=planes[2]||new vector4_Vector4();plane=planes[2];plane.x=normal.x;plane.y=normal.y;plane.z=normal.z;plane.w=-normal.dot(position);// Top plane computation
normal.copy(up).multiplyByScalar(this.top).add(nearCenter).subtract(position).normalize().cross(right).normalize();planes[3]=planes[3]||new vector4_Vector4();plane=planes[3];plane.x=normal.x;plane.y=normal.y;plane.z=normal.z;plane.w=-normal.dot(position);normal=new vector3_Vector3().copy(direction).normalize();// Near plane computation
planes[4]=planes[4]||new vector4_Vector4();plane=planes[4];plane.x=direction.x;plane.y=direction.y;plane.z=direction.z;plane.w=-direction.dot(nearCenter);// Far plane computation
normal.copy(direction).negate().normalize();planes[5]=planes[5]||new vector4_Vector4();plane=planes[5];plane.x=normal.x;plane.y=normal.y;plane.z=normal.z;plane.w=-normal.dot(farCenter);return this._cullingVolume;}/**
   * Returns the pixel's width and height in meters.
   *
   * @param {Number} drawingBufferWidth The width of the drawing buffer.
   * @param {Number} drawingBufferHeight The height of the drawing buffer.
   * @param {Number} distance The distance to the near plane in meters.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter or a new instance of {@link Vector2} with the pixel's width and height in the x and y properties, respectively.
   *
   * @exception {DeveloperError} drawingBufferWidth must be greater than zero.
   * @exception {DeveloperError} drawingBufferHeight must be greater than zero.
   *
   * @example
   * // Example 1
   * // Get the width and height of a pixel.
   * const pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, 1.0, new Vector2());
   *
   * @example
   * // Example 2
   * // Get the width and height of a pixel if the near plane was set to 'distance'.
   * // For example, get the size of a pixel of an image on a billboard.
   * const position = camera.position;
   * const direction = camera.direction;
   * const toCenter = Vector3.subtract(primitive.boundingVolume.center, position, new Vector3());      // vector from camera to a primitive
   * const toCenterProj = Vector3.multiplyByScalar(direction, Vector3.dot(direction, toCenter), new Vector3()); // project vector onto camera direction vector
   * const distance = Vector3.magnitude(toCenterProj);
   * const pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, distance, new Vector2());
   */;_proto.getPixelDimensions=function getPixelDimensions(drawingBufferWidth,drawingBufferHeight,distance,result){update(this);assert(Number.isFinite(drawingBufferWidth)&&Number.isFinite(drawingBufferHeight));// 'Both drawingBufferWidth and drawingBufferHeight are required.'
assert(drawingBufferWidth>0);// 'drawingBufferWidth must be greater than zero.'
assert(drawingBufferHeight>0);// 'drawingBufferHeight must be greater than zero.'
assert(distance>0);// 'distance is required.');
assert(result);// 'A result object is required.');
var inverseNear=1.0/this.near;var tanTheta=this.top*inverseNear;var pixelHeight=2.0*distance*tanTheta/drawingBufferHeight;tanTheta=this.right*inverseNear;var pixelWidth=2.0*distance*tanTheta/drawingBufferWidth;result.x=pixelWidth;result.y=pixelHeight;return result;};perspective_off_center_frustum_createClass(PerspectiveOffCenterFrustum,[{key:"projectionMatrix",get:function get(){update(this);return this._perspectiveMatrix;}/**
   * Gets the perspective projection matrix computed from the view frustum with an infinite far plane.
   * @memberof PerspectiveOffCenterFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveOffCenterFrustum#projectionMatrix
   */},{key:"infiniteProjectionMatrix",get:function get(){update(this);return this._infinitePerspective;}}]);return PerspectiveOffCenterFrustum;}();// eslint-disable-next-line complexity, max-statements
function update(frustum){assert(Number.isFinite(frustum.right)&&Number.isFinite(frustum.left)&&Number.isFinite(frustum.top)&&Number.isFinite(frustum.bottom)&&Number.isFinite(frustum.near)&&Number.isFinite(frustum.far));// throw new DeveloperError('right, left, top, bottom, near, or far parameters are not set.');
var top=frustum.top,bottom=frustum.bottom,right=frustum.right,left=frustum.left,near=frustum.near,far=frustum.far;if(top!==frustum._top||bottom!==frustum._bottom||left!==frustum._left||right!==frustum._right||near!==frustum._near||far!==frustum._far){assert(frustum.near>0&&frustum.near<frustum.far,'near must be greater than zero and less than far.');frustum._left=left;frustum._right=right;frustum._top=top;frustum._bottom=bottom;frustum._near=near;frustum._far=far;frustum._perspectiveMatrix=new matrix4_Matrix4().frustum({left:left,right:right,bottom:bottom,top:top,near:near,far:far});frustum._infinitePerspective=new matrix4_Matrix4().frustum({left:left,right:right,bottom:bottom,top:top,near:near,far:Infinity});}}
// CONCATENATED MODULE: ../modules/culling/src/lib/perspective-frustum.js
function perspective_frustum_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function perspective_frustum_createClass(Constructor,protoProps,staticProps){if(protoProps)perspective_frustum_defineProperties(Constructor.prototype,protoProps);if(staticProps)perspective_frustum_defineProperties(Constructor,staticProps);return Constructor;}// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
// Note: This class is still an experimental export, mainly used by other test cases
// - It has not been fully adapted to math.gl conventions
// - Documentation has not been ported
var defined=function defined(val){return val!==null&&typeof val!=='undefined';};/**
 * The viewing frustum is defined by 6 planes.
 * Each plane is represented by a {@link Vector4} object, where the x, y, and z components
 * define the unit vector normal to the plane, and the w component is the distance of the
 * plane from the origin/camera position.
 *
 * @alias PerspectiveFrustum
 * @constructor
 *
 * @param {Object} [options] An object with the following properties:
 * @param {Number} [options.fov] The angle of the field of view (FOV), in radians.
 * @param {Number} [options.aspectRatio] The aspect ratio of the frustum's width to it's height.
 * @param {Number} [options.near=1.0] The distance of the near plane.
 * @param {Number} [options.far=500000000.0] The distance of the far plane.
 * @param {Number} [options.xOffset=0.0] The offset in the x direction.
 * @param {Number} [options.yOffset=0.0] The offset in the y direction.
 *
 * @example
 * var frustum = new PerspectiveFrustum({
 *     fov : Math.PI_OVER_THREE,
 *     aspectRatio : canvas.clientWidth / canvas.clientHeight
 *     near : 1.0,
 *     far : 1000.0
 * });
 *
 * @see PerspectiveOffCenterFrustum
 */var perspective_frustum_PerspectiveFrustum=/*#__PURE__*/function(){function PerspectiveFrustum(options){if(options===void 0){options={};}options=Object.assign({near:1.0,far:500000000.0,xOffset:0.0,yOffset:0.0},options);this._offCenterFrustum=new perspective_off_center_frustum_PerspectiveOffCenterFrustum();/**
     * The angle of the field of view (FOV), in radians.  This angle will be used
     * as the horizontal FOV if the width is greater than the height, otherwise
     * it will be the vertical FOV.
     * @type {Number}
     * @default undefined
     */this.fov=options.fov;this._fov=undefined;this._fovy=undefined;this._sseDenominator=undefined;/**
     * The aspect ratio of the frustum's width to it's height.
     * @type {Number}
     * @default undefined
     */this.aspectRatio=options.aspectRatio;this._aspectRatio=undefined;/**
     * The distance of the near plane.
     * @type {Number}
     * @default 1.0
     */this.near=options.near;this._near=this.near;/**
     * The distance of the far plane.
     * @type {Number}
     * @default 500000000.0
     */this.far=options.far;this._far=this.far;/**
     * Offsets the frustum in the x direction.
     * @type {Number}
     * @default 0.0
     */this.xOffset=options.xOffset;this._xOffset=this.xOffset;/**
     * Offsets the frustum in the y direction.
     * @type {Number}
     * @default 0.0
     */this.yOffset=options.yOffset;this._yOffset=this.yOffset;}/**
   * Returns a duplicate of a PerspectiveFrustum instance.
   *
   * @param {PerspectiveFrustum} [result] The object onto which to store the result.
   * @returns {PerspectiveFrustum} The modified result parameter or a new PerspectiveFrustum instance if one was not provided.
   */var _proto=PerspectiveFrustum.prototype;_proto.clone=function clone(){return new PerspectiveFrustum({aspectRatio:this.aspectRatio,fov:this.fov,near:this.near,far:this.far});}/**
   * Compares the provided PerspectiveFrustum componentwise and returns
   * <code>true</code> if they are equal, <code>false</code> otherwise.
   *
   * @param {PerspectiveFrustum} [other] The right hand side PerspectiveFrustum.
   * @returns {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
   */;_proto.equals=function equals(other){if(!defined(other)||!(other instanceof PerspectiveFrustum)){return false;}perspective_frustum_update(this);perspective_frustum_update(other);return this.fov===other.fov&&this.aspectRatio===other.aspectRatio&&this.near===other.near&&this.far===other.far&&this._offCenterFrustum.equals(other._offCenterFrustum);}/**
   * Gets the perspective projection matrix computed from the view frustum.
   * @memberof PerspectiveFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveFrustum#infiniteProjectionMatrix
   */;/**
   * Creates a culling volume for this frustum.
   *
   * @param {Vector3} position The eye position.
   * @param {Vector3} direction The view direction.
   * @param {Vector3} up The up direction.
   * @returns {CullingVolume} A culling volume at the given position and orientation.
   *
   * @example
   * // Check if a bounding volume intersects the frustum.
   * var cullingVolume = frustum.computeCullingVolume(cameraPosition, cameraDirection, cameraUp);
   * var intersect = cullingVolume.computeVisibility(boundingVolume);
   */_proto.computeCullingVolume=function computeCullingVolume(position,direction,up){perspective_frustum_update(this);return this._offCenterFrustum.computeCullingVolume(position,direction,up);}/**
   * Returns the pixel's width and height in meters.
   *
   * @param {Number} drawingBufferWidth The width of the drawing buffer.
   * @param {Number} drawingBufferHeight The height of the drawing buffer.
   * @param {Number} distance The distance to the near plane in meters.
   * @param {Vector2} result The object onto which to store the result.
   * @returns {Vector2} The modified result parameter or a new instance of {@link Vector2} with the pixel's width and height in the x and y properties, respectively.
   *
   * @exception {DeveloperError} drawingBufferWidth must be greater than zero.
   * @exception {DeveloperError} drawingBufferHeight must be greater than zero.
   *
   * @example
   * // Example 1
   * // Get the width and height of a pixel.
   * var pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, 1.0, new Vector2());
   *
   * @example
   * // Example 2
   * // Get the width and height of a pixel if the near plane was set to 'distance'.
   * // For example, get the size of a pixel of an image on a billboard.
   * var position = camera.position;
   * var direction = camera.direction;
   * var toCenter = Vector3.subtract(primitive.boundingVolume.center, position, new Vector3());      // vector from camera to a primitive
   * var toCenterProj = Vector3.multiplyByScalar(direction, Vector3.dot(direction, toCenter), new Vector3()); // project vector onto camera direction vector
   * var distance = Vector3.magnitude(toCenterProj);
   * var pixelSize = camera.frustum.getPixelDimensions(scene.drawingBufferWidth, scene.drawingBufferHeight, distance, new Vector2());
   */;_proto.getPixelDimensions=function getPixelDimensions(drawingBufferWidth,drawingBufferHeight,distance,result){perspective_frustum_update(this);return this._offCenterFrustum.getPixelDimensions(drawingBufferWidth,drawingBufferHeight,distance,result);};perspective_frustum_createClass(PerspectiveFrustum,[{key:"projectionMatrix",get:function get(){perspective_frustum_update(this);return this._offCenterFrustum.projectionMatrix;}/**
   * The perspective projection matrix computed from the view frustum with an infinite far plane.
   * @memberof PerspectiveFrustum.prototype
   * @type {Matrix4}
   * @readonly
   *
   * @see PerspectiveFrustum#projectionMatrix
   */},{key:"infiniteProjectionMatrix",get:function get(){perspective_frustum_update(this);return this._offCenterFrustum.infiniteProjectionMatrix;}/**
   * Gets the angle of the vertical field of view, in radians.
   * @memberof PerspectiveFrustum.prototype
   * @type {Number}
   * @readonly
   * @default undefined
   */},{key:"fovy",get:function get(){perspective_frustum_update(this);return this._fovy;}/**
   * @readonly
   * @private
   */},{key:"sseDenominator",get:function get(){perspective_frustum_update(this);return this._sseDenominator;}}]);return PerspectiveFrustum;}();// eslint-disable-next-line complexity, max-statements
function perspective_frustum_update(frustum){assert(Number.isFinite(frustum.fov)&&Number.isFinite(frustum.aspectRatio)&&Number.isFinite(frustum.near)&&Number.isFinite(frustum.far));// 'fov, aspectRatio, near, or far parameters are not set.'
var f=frustum._offCenterFrustum;if(frustum.fov!==frustum._fov||frustum.aspectRatio!==frustum._aspectRatio||frustum.near!==frustum._near||frustum.far!==frustum._far||frustum.xOffset!==frustum._xOffset||frustum.yOffset!==frustum._yOffset){assert(frustum.fov>=0&&frustum.fov<Math.PI);// throw new DeveloperError('fov must be in the range [0, PI).');
assert(frustum.aspectRatio>0);// throw new DeveloperError('aspectRatio must be positive.');
assert(frustum.near>=0&&frustum.near<frustum.far);// throw new DeveloperError('near must be greater than zero and less than far.');
frustum._aspectRatio=frustum.aspectRatio;frustum._fov=frustum.fov;frustum._fovy=frustum.aspectRatio<=1?frustum.fov:Math.atan(Math.tan(frustum.fov*0.5)/frustum.aspectRatio)*2.0;frustum._near=frustum.near;frustum._far=frustum.far;frustum._sseDenominator=2.0*Math.tan(0.5*frustum._fovy);frustum._xOffset=frustum.xOffset;frustum._yOffset=frustum.yOffset;f.top=frustum.near*Math.tan(0.5*frustum._fovy);f.bottom=-f.top;f.right=frustum.aspectRatio*f.top;f.left=-f.right;f.near=frustum.near;f.far=frustum.far;f.right+=frustum.xOffset;f.left+=frustum.xOffset;f.top+=frustum.yOffset;f.bottom+=frustum.yOffset;}}
// CONCATENATED MODULE: ../modules/culling/src/algorithms/bounding-sphere-from-points.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
/* eslint-disable */var fromPointsXMin=new vector3_Vector3();var fromPointsYMin=new vector3_Vector3();var fromPointsZMin=new vector3_Vector3();var fromPointsXMax=new vector3_Vector3();var fromPointsYMax=new vector3_Vector3();var fromPointsZMax=new vector3_Vector3();var fromPointsCurrentPos=new vector3_Vector3();var fromPointsScratch=new vector3_Vector3();var fromPointsRitterCenter=new vector3_Vector3();var fromPointsMinBoxPt=new vector3_Vector3();var fromPointsMaxBoxPt=new vector3_Vector3();var fromPointsNaiveCenterScratch=new vector3_Vector3();var volumeConstant=4.0/3.0*Math.PI;/*
Computes a tight-fitting bounding sphere enclosing a list of 3D Cartesian points.
The bounding sphere is computed by running two algorithms, a naive algorithm and
Ritter's algorithm. The smaller of the two spheres is used to ensure a tight fit.
   *
@param {Vector3[]} [positions] An array of points that the bounding sphere will enclose.  Each point must have <code>x</code>, <code>y</code>, and <code>z</code> properties.
@param {BoundingSphere} [result] The object onto which to store the result.
@returns {BoundingSphere} The modified result parameter or a new BoundingSphere instance if one was not provided.
   *
@see {@link http://blogs.agi.com/insight3d/index.php/2008/02/04/a-bounding/|Bounding Sphere computation article}
*/function makeBoundingSphereFromPoints(positions,result){if(result===void 0){result=new bounding_sphere_BoundingSphere();}if(!positions||positions.length===0){return result.fromCenterRadius([0,0,0],0);}var currentPos=fromPointsCurrentPos.copy(positions[0]);var xMin=fromPointsXMin.copy(currentPos);var yMin=fromPointsYMin.copy(currentPos);var zMin=fromPointsZMin.copy(currentPos);var xMax=fromPointsXMax.copy(currentPos);var yMax=fromPointsYMax.copy(currentPos);var zMax=fromPointsZMax.copy(currentPos);for(var _iterator=positions,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var position=_ref;currentPos.copy(position);var x=currentPos.x;var y=currentPos.y;var z=currentPos.z;// Store points containing the the smallest and largest components
if(x<xMin.x){currentPos.copy(xMin);}if(x>xMax.x){currentPos.copy(xMax);}if(y<yMin.y){currentPos.copy(yMin);}if(y>yMax.y){currentPos.copy(yMax);}if(z<zMin.z){currentPos.copy(zMin);}if(z>zMax.z){currentPos.copy(zMax);}}// Compute x-, y-, and z-spans (Squared distances b/n each component's min. and max.).
var xSpan=fromPointsScratch.copy(xMax).subtract(xMin).magnitudeSquared();var ySpan=fromPointsScratch.copy(yMax).subtract(yMin).magnitudeSquared();var zSpan=fromPointsScratch.copy(zMax).subtract(zMin).magnitudeSquared();// Set the diameter endpoints to the largest span.
var diameter1=xMin;var diameter2=xMax;var maxSpan=xSpan;if(ySpan>maxSpan){maxSpan=ySpan;diameter1=yMin;diameter2=yMax;}if(zSpan>maxSpan){maxSpan=zSpan;diameter1=zMin;diameter2=zMax;}// Calculate the center of the initial sphere found by Ritter's algorithm
var ritterCenter=fromPointsRitterCenter;ritterCenter.x=(diameter1.x+diameter2.x)*0.5;ritterCenter.y=(diameter1.y+diameter2.y)*0.5;ritterCenter.z=(diameter1.z+diameter2.z)*0.5;// Calculate the radius of the initial sphere found by Ritter's algorithm
var radiusSquared=fromPointsScratch.copy(diameter2).subtract(ritterCenter).magnitudeSquared();var ritterRadius=Math.sqrt(radiusSquared);// Find the center of the sphere found using the Naive method.
var minBoxPt=fromPointsMinBoxPt;minBoxPt.x=xMin.x;minBoxPt.y=yMin.y;minBoxPt.z=zMin.z;var maxBoxPt=fromPointsMaxBoxPt;maxBoxPt.x=xMax.x;maxBoxPt.y=yMax.y;maxBoxPt.z=zMax.z;var naiveCenter=fromPointsNaiveCenterScratch.copy(minBoxPt).add(maxBoxPt).multiplyByScalar(0.5);// Begin 2nd pass to find naive radius and modify the ritter sphere.
var naiveRadius=0;for(var _iterator2=positions,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[Symbol.iterator]();;){var _ref2;if(_isArray2){if(_i2>=_iterator2.length)break;_ref2=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref2=_i2.value;}var _position=_ref2;currentPos.copy(_position);// Find the furthest point from the naive center to calculate the naive radius.
var r=fromPointsScratch.copy(currentPos).subtract(naiveCenter).magnitude();if(r>naiveRadius){naiveRadius=r;}// Make adjustments to the Ritter Sphere to include all points.
var oldCenterToPointSquared=fromPointsScratch.copy(currentPos).subtract(ritterCenter).magnitudeSquared();if(oldCenterToPointSquared>radiusSquared){var oldCenterToPoint=Math.sqrt(oldCenterToPointSquared);// Calculate new radius to include the point that lies outside
ritterRadius=(ritterRadius+oldCenterToPoint)*0.5;radiusSquared=ritterRadius*ritterRadius;// Calculate center of new Ritter sphere
var oldToNew=oldCenterToPoint-ritterRadius;ritterCenter.x=(ritterRadius*ritterCenter.x+oldToNew*currentPos.x)/oldCenterToPoint;ritterCenter.y=(ritterRadius*ritterCenter.y+oldToNew*currentPos.y)/oldCenterToPoint;ritterCenter.z=(ritterRadius*ritterCenter.z+oldToNew*currentPos.z)/oldCenterToPoint;}}if(ritterRadius<naiveRadius){ritterCenter.to(result.center);result.radius=ritterRadius;}else{naiveCenter.to(result.center);result.radius=naiveRadius;}return result;}
// CONCATENATED MODULE: ../modules/culling/src/index.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md

// CONCATENATED MODULE: ../modules/culling/test/bench.js
// This file is derived from the Cesium math library under Apache 2 license
// See LICENSE.md and https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md
var bench_plane=new plane_Plane();var bench_boundingSphere=new bounding_sphere_BoundingSphere();var bench_transform=new matrix4_Matrix4();function cullingBench(suite,addReferenceBenchmarks){suite.group('BoundingSphere').add('BoundingSphere#new()',function(){return new bounding_sphere_BoundingSphere();}).add('BoundingSphere#transform',function(){return bench_boundingSphere.transform(bench_transform);}).group('Plane').add('Plane#new()',function(){return new plane_Plane();}).add('Plane#transform',function(){return bench_plane.transform(bench_transform);});return suite;}
// CONCATENATED MODULE: ../test/modules.bench.js
function addBenchmarks(suite,addReferenceBenchmarks){coreBench(suite,addReferenceBenchmarks);geospatialBench(suite,addReferenceBenchmarks);cullingBench(suite,addReferenceBenchmarks);return suite;}
// CONCATENATED MODULE: ../examples/benchmarks/app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return app_App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToDOM", function() { return renderToDOM; });
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function app_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var app_addReferenceBenchmarks=false;var LOG_ENTRY={GROUP:'group',TEST:'test',COMPLETE:'complete'};function parseSIPrefix(itersPerSecond){var value=parseFloat(itersPerSecond);var prefix=itersPerSecond[itersPerSecond.length-1];switch(prefix){case'M':return value*1000000;case'K':return value*1000;default:return value;}}var app_App=/*#__PURE__*/function(_PureComponent){app_inheritsLoose(App,_PureComponent);function App(props){var _this;_this=_PureComponent.call(this,props)||this;_this.suite=new esm["a" /* Bench */]({log:_this._logResult.bind(_assertThisInitialized(_this))});addBenchmarks(_this.suite,app_addReferenceBenchmarks);_this.state={log:[]};return _this;}var _proto=App.prototype;_proto.componentDidMount=function componentDidMount(){this.suite// Calibrate performance
.calibrate().run()// when running in browser, notify test the driver that it's done
.then(function(){});};_proto._logResult=function _logResult(result){var entry=result.entry,id=result.id,itersPerSecond=result.itersPerSecond,error=result.error;var log=this.state.log;switch(entry){case LOG_ENTRY.GROUP:log.push({id:id});break;case LOG_ENTRY.TEST:var value=parseSIPrefix(itersPerSecond);// log.push(`├─ ${id}: ${itersPerSecond} iterations/s ±${(error * 100).toFixed(2)}%`);
log.push({id:id,value:value,formattedValue:itersPerSecond,formattedError:(error*100).toFixed(2)+"%"});break;case LOG_ENTRY.COMPLETE:break;default:}this.forceUpdate();};_proto.render=function render(){var log=this.state.log;return react_default.a.createElement("div",null,react_default.a.createElement(bench_results_BenchResults,{log:log}));};return App;}(react["PureComponent"]);function renderToDOM(container){Object(react_dom["render"])(react_default.a.createElement(app_App,null),container);}

/***/ })

}]);
//# sourceMappingURL=component---examples-benchmarks-app-js-ba9477482d2bbb0361db.js.map
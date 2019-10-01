(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(20), 'Object', { defineProperty: __webpack_require__(24).f });


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "styled", {
  enumerable: true,
  get: function get() {
    return _index.styled;
  }
});
Object.defineProperty(exports, "withStyle", {
  enumerable: true,
  get: function get() {
    return _index.withStyle;
  }
});
Object.defineProperty(exports, "useStyletron", {
  enumerable: true,
  get: function get() {
    return _index.useStyletron;
  }
});
Object.defineProperty(exports, "createThemedStyled", {
  enumerable: true,
  get: function get() {
    return _index.createThemedStyled;
  }
});
Object.defineProperty(exports, "createThemedWithStyle", {
  enumerable: true,
  get: function get() {
    return _index.createThemedWithStyle;
  }
});
Object.defineProperty(exports, "createThemedUseStyletron", {
  enumerable: true,
  get: function get() {
    return _index.createThemedUseStyletron;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function get() {
    return _index.ThemeProvider;
  }
});
Object.defineProperty(exports, "LocaleProvider", {
  enumerable: true,
  get: function get() {
    return _index2["default"];
  }
});
Object.defineProperty(exports, "createTheme", {
  enumerable: true,
  get: function get() {
    return _index3.createTheme;
  }
});
Object.defineProperty(exports, "lightThemePrimitives", {
  enumerable: true,
  get: function get() {
    return _index3.lightThemePrimitives;
  }
});
Object.defineProperty(exports, "darkThemePrimitives", {
  enumerable: true,
  get: function get() {
    return _index3.darkThemePrimitives;
  }
});
Object.defineProperty(exports, "DarkTheme", {
  enumerable: true,
  get: function get() {
    return _index3.DarkTheme;
  }
});
Object.defineProperty(exports, "DarkThemeMove", {
  enumerable: true,
  get: function get() {
    return _index3.DarkThemeMove;
  }
});
Object.defineProperty(exports, "LightTheme", {
  enumerable: true,
  get: function get() {
    return _index3.LightTheme;
  }
});
Object.defineProperty(exports, "LightThemeMove", {
  enumerable: true,
  get: function get() {
    return _index3.LightThemeMove;
  }
});
Object.defineProperty(exports, "BaseProvider", {
  enumerable: true,
  get: function get() {
    return _baseProvider["default"];
  }
});
Object.defineProperty(exports, "withProps", {
  enumerable: true,
  get: function get() {
    return _index4.withProps;
  }
});
Object.defineProperty(exports, "mergeOverrides", {
  enumerable: true,
  get: function get() {
    return _overrides.mergeOverrides;
  }
});

var _index = __webpack_require__(78);

var _index2 = _interopRequireDefault(__webpack_require__(234));

var _index3 = __webpack_require__(164);

var _baseProvider = _interopRequireDefault(__webpack_require__(248));

var _index4 = __webpack_require__(261);

var _overrides = __webpack_require__(127);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(75);
var test = {};
test[__webpack_require__(15)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(28)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(141) });


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(6);
var getKeys = __webpack_require__(54);
var redefine = __webpack_require__(28);
var global = __webpack_require__(14);
var hide = __webpack_require__(34);
var Iterators = __webpack_require__(65);
var wks = __webpack_require__(15);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(83);
var step = __webpack_require__(148);
var Iterators = __webpack_require__(65);
var toIObject = __webpack_require__(47);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(114)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var core = __webpack_require__(51);
var hide = __webpack_require__(34);
var redefine = __webpack_require__(28);
var ctx = __webpack_require__(40);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(14);
var has = __webpack_require__(36);
var DESCRIPTORS = __webpack_require__(20);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(28);
var META = __webpack_require__(73).KEY;
var $fails = __webpack_require__(22);
var shared = __webpack_require__(87);
var setToStringTag = __webpack_require__(67);
var uid = __webpack_require__(53);
var wks = __webpack_require__(15);
var wksExt = __webpack_require__(151);
var wksDefine = __webpack_require__(150);
var enumKeys = __webpack_require__(202);
var isArray = __webpack_require__(115);
var anObject = __webpack_require__(23);
var isObject = __webpack_require__(21);
var toObject = __webpack_require__(30);
var toIObject = __webpack_require__(47);
var toPrimitive = __webpack_require__(76);
var createDesc = __webpack_require__(63);
var _create = __webpack_require__(62);
var gOPNExt = __webpack_require__(203);
var $GOPD = __webpack_require__(96);
var $GOPS = __webpack_require__(110);
var $DP = __webpack_require__(24);
var $keys = __webpack_require__(54);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(68).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(77).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(52)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(34)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(30);
var $keys = __webpack_require__(54);

__webpack_require__(180)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/baseui/icon/chevron-down.js
var chevron_down = __webpack_require__(104);
var chevron_down_default = /*#__PURE__*/__webpack_require__.n(chevron_down);

// EXTERNAL MODULE: ./node_modules/baseui/index.js
var baseui = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/baseui/typography/index.js
var typography = __webpack_require__(101);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/styled/typography.js
var A=Object(baseui["styled"])('a',function(_ref){var $theme=_ref.$theme;return{textDecoration:'none',color:$theme.colors.primary400,':visited':{color:$theme.colors.primary400},':active':{color:$theme.colors.primary400},':hover':{color:$theme.colors.primary700}};});var H1=Object(baseui["styled"])('h1',function(_ref2){var $theme=_ref2.$theme;return Object.assign({},$theme.typography.font700,{fontFamily:'Uber Move',fontWeight:500,letterSpacing:'0.02em',margin:'4px 0 24px'});});var H2=Object(baseui["styled"])('h2',function(_ref3){var $theme=_ref3.$theme;return Object.assign({},$theme.typography.font500,{fontFamily:'Uber Move',fontWeight:500,margin:'24px 0 16px'});});var H3=Object(baseui["styled"])('h3',function(_ref4){var $theme=_ref4.$theme;return Object.assign({fontFamily:'Uber Move'},$theme.typography.font350);});var P=Object(baseui["styled"])('p',function(_ref5){var $theme=_ref5.$theme;return Object.assign({fontFamily:'Uber Move'},$theme.typography.font300,{lineHeight:1.5,margin:'0 0 16px'});});var List=Object(baseui["styled"])('ul',function(_ref6){var $theme=_ref6.$theme;return Object.assign({fontFamily:'Uber Move'},$theme.typography.font300,{lineHeight:1.5,margin:'0 0 16px'});});var ListItem=Object(baseui["styled"])('li',function(_ref7){var $theme=_ref7.$theme;return{marginBottom:'4px'};});var MarkdownBody=Object(baseui["styled"])('div',function(_ref8){var $theme=_ref8.$theme;return Object.assign({},$theme.typography.font300,{boxSizing:'border-box',padding:'36px',maxWidth:'692px'});});var InlineCode=Object(baseui["styled"])('code',function(_ref9){var $theme=_ref9.$theme;return{backgroundColor:$theme.colors.mono200,borderRadius:$theme.sizing.scale100,padding:'0 5px',fontFamily:"Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier, monospace",fontSize:'0.9em',margin:'1px 0',lineHeight:'calc(1.5em / 0.9 - 2px)',display:'inline-block',verticalAlign:'top'};});var CodeBlock=Object(baseui["styled"])('code',function(_ref10){var $theme=_ref10.$theme;return{fontFamily:"Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier, monospace",fontSize:'0.9em',direction:'ltr',textAlign:'left',whiteSpace:'pre',wordSpacing:'normal',wordBreak:'normal',tabSize:4,hyphens:'none',backgroundColor:$theme.colors.mono200};});var Pre=Object(baseui["styled"])('pre',function(_ref11){var $theme=_ref11.$theme;return{backgroundColor:$theme.colors.mono200};});var BlockQuote=Object(baseui["styled"])('blockquote',function(_ref12){var $theme=_ref12.$theme;return{backgroundColor:$theme.colors.warning100,marginInlineStart:0,marginInlineEnd:0,padding:$theme.sizing.scale600,paddingBottom:'1px'};});var Table=Object(baseui["styled"])('table',function(_ref13){var $theme=_ref13.$theme;return{borderCollapse:'collapse',borderSpacing:'1px',width:'100%'};});var TableHeaderCell=Object(baseui["styled"])('th',function(_ref14){var $theme=_ref14.$theme;return{padding:'4px',textAlign:'left',background:$theme.colors.mono200,fontWeight:'bold',border:"1px solid "+$theme.colors.mono400};});var TableBodyCell=Object(baseui["styled"])('td',function(_ref15){var $theme=_ref15.$theme;return{padding:'4px',textAlign:'left',border:"1px solid "+$theme.colors.mono400};});
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(69);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/styled/header.js
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var Header=Object(baseui["styled"])('header',function(_ref){var _ref2;var $theme=_ref.$theme;return _ref2={alignItems:'center',backgroundColor:$theme.colors.mono1000,color:$theme.colors.mono100,display:'flex',height:$theme.sizing.scale1600,justifyContent:'space-between',padding:"0 36px",top:0,left:0,width:'100%',userSelect:'none'},_ref2["@media screen and (min-width: "+$theme.breakpoints.medium+"px)"]={position:'fixed'},_ref2["@media screen and (max-width: "+$theme.breakpoints.medium+"px)"]={position:'static'},_ref2;});var HeaderContainer=Object(baseui["styled"])('div',function(_ref3){var _ref4;var $theme=_ref3.$theme,props=_objectWithoutPropertiesLoose(_ref3,["$theme"]);return _ref4={gridColumn:'1 / 3',gridRow:'1 / 2',zIndex:2},_ref4["@media screen and (max-width: "+$theme.breakpoints.medium+"px)"]={order:1},_ref4;});var HeaderMenuBlock=Object(baseui["styled"])('div',function(_ref5){var $theme=_ref5.$theme,props=_objectWithoutPropertiesLoose(_ref5,["$theme"]);return{alignItems:'center',display:'flex',flexDirection:'row'};});var HeaderLogo=Object(baseui["styled"])('a',function(_ref6){var $theme=_ref6.$theme;return Object.assign({},$theme.typography.font600,{textDecoration:'none',fontFamily:'Uber Move',fontWeight:500,fontSize:'28px',':visited':{color:$theme.colors.mono100},':active':{color:$theme.colors.mono100},':hover':{color:$theme.colors.mono100}});});var HeaderMenu=Object(baseui["styled"])('div',function(_ref7){var _ref8;var $theme=_ref7.$theme,$collapsed=_ref7.$collapsed,$nbItems=_ref7.$nbItems;return _ref8={background:$theme.colors.mono1000,display:'flex',flexDirection:'column'},_ref8["@media screen and (max-width: "+$theme.breakpoints.medium+"px)"]={height:"calc(100% - "+$theme.sizing.scale1600+")",left:'-36px',marginLeft:'36px',padding:$theme.sizing.scale2400+" "+$theme.sizing.scale800+" "+$theme.sizing.scale1600+" "+$theme.sizing.scale500,position:'fixed',top:$theme.sizing.scale1600,transform:$collapsed?'translate(-100%)':'translate(0)',overflow:'hidden',transition:'transform 0.3s',width:'100%',zIndex:100},_ref8["@media screen and (min-width: "+$theme.breakpoints.medium+"px)"]={position:'fixed',minWidth:'180px',maxHeight:$collapsed?0:$nbItems*48+"px",top:$theme.sizing.scale1600,left:$theme.sizing.scale600,overflow:'hidden',transition:'max-height 0.3s'},_ref8;});var HeaderMenuLink=Object(baseui["styled"])('a',function(_ref9){var _ref10;var $theme=_ref9.$theme,props=_objectWithoutPropertiesLoose(_ref9,["$theme"]);return _ref10={display:'block',padding:"0 "+$theme.sizing.scale1600,textDecoration:'none'},_ref10["@media screen and (min-width: "+$theme.breakpoints.medium+"px)"]=Object.assign({},$theme.typography.font300,{lineHeight:$theme.sizing.scale1200}),_ref10["@media screen and (max-width: "+$theme.breakpoints.medium+"px)"]={fontSize:'36px',lineHeight:$theme.sizing.scale1600},_ref10[':visited']={color:$theme.colors.mono100},_ref10[':active']={color:$theme.colors.mono100},_ref10[':hover']={color:$theme.colors.mono100},_ref10;});var HeaderLinksBlock=Object(baseui["styled"])('div',function(_ref11){var $theme=_ref11.$theme,props=_objectWithoutPropertiesLoose(_ref11,["$theme"]);return{display:'flex',alignItems:'center'};});var StyledHamburgerMenu=Object(baseui["styled"])('div',function(_ref12){var $theme=_ref12.$theme;return{cursor:'pointer',justifyContent:'space-between',display:'flex',flexDirection:'column',padding:'3px 1px 4px',marginRight:$theme.sizing.scale600,height:$theme.sizing.scale800,width:$theme.sizing.scale800};});var HamburgerBar=Object(baseui["styled"])('div',function(_ref13){var $theme=_ref13.$theme;return{backgroundColor:$theme.colors.mono100,height:'3px',width:'100%'};});var header_HamburgerMenu=function HamburgerMenu(_ref14){var onClick=_ref14.onClick;return react_default.a.createElement(StyledHamburgerMenu,{onClick:onClick},react_default.a.createElement(HamburgerBar,null),react_default.a.createElement(HamburgerBar,null),react_default.a.createElement(HamburgerBar,null));};var HeaderA=Object(baseui["styled"])('a',function(_ref15){var $theme=_ref15.$theme;return{color:$theme.colors.mono100,textDecoration:'none',':visited':{color:$theme.colors.mono100},':active':{color:$theme.colors.mono600},':hover':{color:$theme.colors.mono600}};});var HeaderLink=Object(baseui["styled"])(gatsby_browser_entry["a" /* Link */],function(_ref16){var $theme=_ref16.$theme;return{color:$theme.colors.mono100,textDecoration:'none',':visited':{color:$theme.colors.mono100},':active':{color:$theme.colors.mono600},':hover':{color:$theme.colors.mono600}};});var HeaderLinkContainer=Object(baseui["styled"])('div',function(_ref17){var $theme=_ref17.$theme;return Object.assign({},$theme.typography.font300,{flex:'1 1 0',marginLeft:$theme.sizing.scale700});});
// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/styled/toc.js
function toc_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}var TocChevron=Object(baseui["styled"])(chevron_down_default.a,function(_ref){var $depth=_ref.$depth,$isTocOpen=_ref.$isTocOpen;return{height:'16px',width:'16px',position:'absolute',left:$depth*24+36+"px",top:'20px',transform:$isTocOpen?'none':'rotate(-90deg)',transition:'transform 0.3s'};});var TocEntry=Object(baseui["styled"])('div',function(_ref2){var $theme=_ref2.$theme,$depth=_ref2.$depth,props=toc_objectWithoutPropertiesLoose(_ref2,["$theme","$depth"]);return Object.assign({},$theme.typography.font350,{borderTop:"1px solid "+($depth?'tranparent':$theme.colors.mono500),borderBottom:"1px solid "+($depth?'tranparent':$theme.colors.mono500),color:$depth?$theme.colors.mono800:$theme.colors.mono1000,cursor:'pointer',margin:"-0.5px 0",position:'relative',whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'});});var TocHeader=Object(baseui["styled"])('span',function(_ref3){var $depth=_ref3.$depth,$theme=_ref3.$theme;return{display:'block',padding:"16px 16px 16px "+($depth*24+60)+"px",':hover':{background:$theme.colors.mono200}};});var TocLink=Object(baseui["styled"])(gatsby_browser_entry["a" /* Link */],function(_ref4){var $active=_ref4.$active,$depth=_ref4.$depth,$theme=_ref4.$theme;var color;if($active){color=$theme.colors.primary400;}else{color=$depth?$theme.colors.mono800:$theme.colors.mono1000;}return{display:'block',color:color,padding:"16px 16px 16px "+($depth*24+60)+"px",textDecoration:'none',':visited':color,':active':color,':hover':{color:color,background:$theme.colors.mono200}};});var TocSubpages=Object(baseui["styled"])('ul',function(_ref5){var $height=_ref5.$height,props=toc_objectWithoutPropertiesLoose(_ref5,["$height"]);return{listStyle:'none',margin:0,maxHeight:$height*56+"px",overflow:'hidden',padding:0,transition:'max-height 0.3s'};});var TocContainer=Object(baseui["styled"])('div',function(_ref6){var _ref7;var $theme=_ref6.$theme,$isTocOpen=_ref6.$isTocOpen,props=toc_objectWithoutPropertiesLoose(_ref6,["$theme","$isTocOpen"]);return _ref7={},_ref7["@media screen and (min-width: "+$theme.breakpoints.medium+"px)"]={position:'fixed',maxWidth:'300px',height:'100%',zIndex:2,borderRight:"1px solid "+$theme.colors.mono500,overflowY:'scroll',overflowX:'hidden'},_ref7["@media screen and (max-width: "+$theme.breakpoints.medium+"px)"]=Object.assign({// order: 3,
borderRight:'none',position:'sticky',top:'56px',// height of toc toggle, ie 20 + 18 * 2
transition:'opacity 0.3s, transform 0.3s'},$isTocOpen?{opacity:1,maxHeight:'unset',transform:'translateY(0)'}:{opacity:0,maxHeight:0,overflow:'hidden',transform:'translateY(30px)'}),_ref7;});var StyledTocToggle=Object(baseui["styled"])('div',function(_ref8){var _Object$assign;var $theme=_ref8.$theme;return Object.assign({},$theme.typography.font300,(_Object$assign={fontFamily:'Uber Move',background:$theme.colors.mono1000,color:$theme.colors.mono100,alignItems:'center',padding:'18px 24px',position:'sticky',top:0,userSelect:'none',zIndex:10},_Object$assign["@media screen and (max-width: "+$theme.breakpoints.medium+"px)"]={display:'flex'},_Object$assign["@media screen and (min-width: "+$theme.breakpoints.medium+"px)"]={display:'none'},_Object$assign));});var TocToggleChevron=Object(baseui["styled"])('div',function(_ref9){var $theme=_ref9.$theme,$isTocOpen=_ref9.$isTocOpen;return{display:'inline',height:$theme.sizing.scale600,marginRight:$theme.sizing.scale600,transform:$isTocOpen?'none':'rotate(-90deg)',transition:'transform 0.3s',width:$theme.sizing.scale600};});var toc_TocToggle=function TocToggle(_ref10){var toggleToc=_ref10.toggleToc,isTocOpen=_ref10.isTocOpen,isMenuOpen=_ref10.isMenuOpen;return isMenuOpen?null:react_default.a.createElement(StyledTocToggle,{onClick:toggleToc},react_default.a.createElement(TocToggleChevron,{$isTocOpen:isTocOpen},react_default.a.createElement(chevron_down_default.a,null)),"Table of Contents");};
// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/styled/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BodyContainerFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BodyContainerToC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Body; });
/* unused harmony export MainExample */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return MainExamples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ExampleCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ExampleTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return SearchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return IconContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return InputSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return MainSearch; });
/* concated harmony reexport A */__webpack_require__.d(__webpack_exports__, "a", function() { return A; });
/* concated harmony reexport CodeBlock */__webpack_require__.d(__webpack_exports__, "f", function() { return CodeBlock; });
/* concated harmony reexport H1 */__webpack_require__.d(__webpack_exports__, "i", function() { return H1; });
/* concated harmony reexport H2 */__webpack_require__.d(__webpack_exports__, "j", function() { return H2; });
/* concated harmony reexport H3 */__webpack_require__.d(__webpack_exports__, "k", function() { return H3; });
/* concated harmony reexport H4 */__webpack_require__.d(__webpack_exports__, "l", function() { return typography["H4"]; });
/* concated harmony reexport H5 */__webpack_require__.d(__webpack_exports__, "m", function() { return typography["H5"]; });
/* concated harmony reexport H6 */__webpack_require__.d(__webpack_exports__, "n", function() { return typography["H6"]; });
/* concated harmony reexport List */__webpack_require__.d(__webpack_exports__, "C", function() { return List; });
/* concated harmony reexport ListItem */__webpack_require__.d(__webpack_exports__, "D", function() { return ListItem; });
/* concated harmony reexport BlockQuote */__webpack_require__.d(__webpack_exports__, "b", function() { return BlockQuote; });
/* concated harmony reexport Table */__webpack_require__.d(__webpack_exports__, "K", function() { return Table; });
/* concated harmony reexport TableHeaderCell */__webpack_require__.d(__webpack_exports__, "M", function() { return TableHeaderCell; });
/* concated harmony reexport TableBodyCell */__webpack_require__.d(__webpack_exports__, "L", function() { return TableBodyCell; });
/* concated harmony reexport InlineCode */__webpack_require__.d(__webpack_exports__, "A", function() { return InlineCode; });
/* concated harmony reexport MarkdownBody */__webpack_require__.d(__webpack_exports__, "G", function() { return MarkdownBody; });
/* concated harmony reexport P */__webpack_require__.d(__webpack_exports__, "H", function() { return P; });
/* concated harmony reexport Pre */__webpack_require__.d(__webpack_exports__, "I", function() { return Pre; });
/* concated harmony reexport HamburgerMenu */__webpack_require__.d(__webpack_exports__, "o", function() { return header_HamburgerMenu; });
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "p", function() { return Header; });
/* concated harmony reexport HeaderA */__webpack_require__.d(__webpack_exports__, "q", function() { return HeaderA; });
/* concated harmony reexport HeaderContainer */__webpack_require__.d(__webpack_exports__, "r", function() { return HeaderContainer; });
/* concated harmony reexport HeaderLink */__webpack_require__.d(__webpack_exports__, "s", function() { return HeaderLink; });
/* concated harmony reexport HeaderLinkContainer */__webpack_require__.d(__webpack_exports__, "t", function() { return HeaderLinkContainer; });
/* concated harmony reexport HeaderLinksBlock */__webpack_require__.d(__webpack_exports__, "u", function() { return HeaderLinksBlock; });
/* concated harmony reexport HeaderLogo */__webpack_require__.d(__webpack_exports__, "v", function() { return HeaderLogo; });
/* concated harmony reexport HeaderMenu */__webpack_require__.d(__webpack_exports__, "w", function() { return HeaderMenu; });
/* concated harmony reexport HeaderMenuBlock */__webpack_require__.d(__webpack_exports__, "x", function() { return HeaderMenuBlock; });
/* concated harmony reexport HeaderMenuLink */__webpack_require__.d(__webpack_exports__, "y", function() { return HeaderMenuLink; });
/* concated harmony reexport TocChevron */__webpack_require__.d(__webpack_exports__, "N", function() { return TocChevron; });
/* concated harmony reexport TocContainer */__webpack_require__.d(__webpack_exports__, "O", function() { return TocContainer; });
/* concated harmony reexport TocEntry */__webpack_require__.d(__webpack_exports__, "P", function() { return TocEntry; });
/* concated harmony reexport TocHeader */__webpack_require__.d(__webpack_exports__, "Q", function() { return TocHeader; });
/* concated harmony reexport TocLink */__webpack_require__.d(__webpack_exports__, "R", function() { return TocLink; });
/* concated harmony reexport TocSubpages */__webpack_require__.d(__webpack_exports__, "S", function() { return TocSubpages; });
/* concated harmony reexport TocToggle */__webpack_require__.d(__webpack_exports__, "T", function() { return toc_TocToggle; });
function styled_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}/* eslint-disable arrow-body-style */ /* eslint-disable react/jsx-filename-extension */ /* eslint-disable no-unused-vars */// Typography
// Header
// toc
// top-level layoout
var BodyContainerFull=Object(baseui["styled"])('div',function(_ref){var $theme=_ref.$theme,props=styled_objectWithoutPropertiesLoose(_ref,["$theme"]);return{margin:'0 auto'};});var BodyContainerToC=Object(baseui["styled"])('div',function(_ref2){var _ref3;var $theme=_ref2.$theme,$isMenuOpen=_ref2.$isMenuOpen,$isTocOpen=_ref2.$isTocOpen,props=styled_objectWithoutPropertiesLoose(_ref2,["$theme","$isMenuOpen","$isTocOpen"]);return _ref3={width:'100%'},_ref3["@media screen and (min-width: "+$theme.breakpoints.medium+"px)"]={padding:$theme.sizing.scale500+" "+$theme.sizing.scale500+" "+$theme.sizing.scale500+" 300px",marginTop:'64px',// height of header
transform:'scaleY(1)',opacity:1},_ref3["@media screen and (max-width: "+$theme.breakpoints.medium+"px)"]=Object.assign({padding:$theme.sizing.scale500,marginTop:0,order:2,transition:'opacity 0.3s'},$isTocOpen||$isMenuOpen?{transform:'scaleY(0)',opacity:0}:{transform:'scaleY(1)',opacity:1}),_ref3;});var Body=Object(baseui["styled"])('div',function(_ref4){var $theme=_ref4.$theme,props=styled_objectWithoutPropertiesLoose(_ref4,["$theme"]);return{height:'100vh'};});// example
var MainExample=Object(baseui["styled"])('main',function(_ref5){var _ref6;var $theme=_ref5.$theme,props=styled_objectWithoutPropertiesLoose(_ref5,["$theme"]);return _ref6={height:'calc(100vh - 96px)'},_ref6["@media screen and (max-width: "+$theme.breakpoints.medium+")"]={marginTop:'64px'},_ref6;});// examples
var MainExamples=Object(baseui["styled"])('main',function(_ref7){var _ref8;var $theme=_ref7.$theme,props=styled_objectWithoutPropertiesLoose(_ref7,["$theme"]);return _ref8={background:$theme.colors.mono100,display:'flex',flexWrap:'wrap'},_ref8["@media screen and (max-width: "+$theme.breakpoints.medium+")"]={marginTop:'64px'},_ref8;});var ExampleCard=Object(baseui["styled"])('div',function(_ref9){var $theme=_ref9.$theme,props=styled_objectWithoutPropertiesLoose(_ref9,["$theme"]);return{border:$theme.borders.border300,cursor:'pointer',margin:$theme.sizing.scale400,padding:$theme.sizing.scale700+" "+$theme.sizing.scale600+" "+$theme.sizing.scale700+" "+$theme.sizing.scale600,transition:"background "+$theme.animation.timing400+" border-color "+$theme.animation.timing400,transitionTimingFunction:$theme.animation.easeInOutCurve,'&:hover':{background:$theme.colors.mono200,borderColor:'transparent'}};});var ExampleTitle=Object(baseui["styled"])('div',function(_ref10){var $theme=_ref10.$theme,props=styled_objectWithoutPropertiesLoose(_ref10,["$theme"]);return Object.assign({color:$theme.colors.mono1000},$theme.typography.font200,{marginBottom:0,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',width:'150px'});});// search
var SearchContainer=Object(baseui["styled"])('div',function(_ref11){var $theme=_ref11.$theme,props=styled_objectWithoutPropertiesLoose(_ref11,["$theme"]);return{position:'relative',height:$theme.sizing.scale1000,marginBottom:'20px',background:$theme.colors.mono200};});var IconContainer=Object(baseui["styled"])('div',function(_ref12){var $theme=_ref12.$theme,props=styled_objectWithoutPropertiesLoose(_ref12,["$theme"]);return{position:'absolute',display:'flex',alignItems:'center',justifyContent:'center',width:$theme.sizing.scale1000,height:$theme.sizing.scale1000};});var InputSearch=Object(baseui["styled"])('input',function(_ref13){var $theme=_ref13.$theme,props=styled_objectWithoutPropertiesLoose(_ref13,["$theme"]);return{boxShadow:"rgba(0, 0, 0, 0) 0px 2px 6px",border:"1px solid transparent",transition:"0.3s",fontSize:"14px",fontWeight:500,lineHeight:"20px",padding:"10px 10px 10px 40px",':focus':{boxShadow:"rgba(39, 110, 241, 0.32) 0px 2px 6px",borderColor:"rgb(39, 110, 241)",outline:'none'}};});var MainSearch=Object(baseui["styled"])('main',function(_ref14){var $theme=_ref14.$theme,props=styled_objectWithoutPropertiesLoose(_ref14,["$theme"]);return{maxWidth:'600px',margin:'104px auto 0px'};});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(7);
var $indexOf = __webpack_require__(91)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(48)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(23);
var toObject = __webpack_require__(30);
var toLength = __webpack_require__(26);
var toInteger = __webpack_require__(46);
var advanceStringIndex = __webpack_require__(107);
var regExpExec = __webpack_require__(86);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(88)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(150)('asyncIterator');


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(87)('wks');
var uid = __webpack_require__(53);
var Symbol = __webpack_require__(14).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);__webpack_require__(3);var plugins=__webpack_require__(196);var _require$publicLoader=__webpack_require__(25).publicLoader,getResourcesForPathname=_require$publicLoader.getResourcesForPathname,getResourcesForPathnameSync=_require$publicLoader.getResourcesForPathnameSync,getResourceURLsForPathname=_require$publicLoader.getResourceURLsForPathname,loadPage=_require$publicLoader.loadPage,loadPageSync=_require$publicLoader.loadPageSync;exports.apiRunner=function(api,args,defaultReturn,argTransform){if(args===void 0){args={};}// Hooks for gatsby-cypress's API handler
if(undefined){if(window.___apiHandler){window.___apiHandler(api);}else if(window.___resolvedAPIs){window.___resolvedAPIs.push(api);}else{window.___resolvedAPIs=[api];}}var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}// Deprecated April 2019. Use `loadPageSync` instead
args.getResourcesForPathnameSync=getResourcesForPathnameSync;// Deprecated April 2019. Use `loadPage` instead
args.getResourcesForPathname=getResourcesForPathname;args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result,plugin:plugin});}return result;});// Filter out undefined results.
results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.apiRunnerAsync=function(api,args,defaultReturn){return plugins.reduce(function(previous,next){return next.plugin[api]?previous.then(function(){return next.plugin[api](args,next.options);}):previous;},Promise.resolve());};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(7);

$export($export.S, 'Array', { isArray: __webpack_require__(115) });


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(7);
var $forEach = __webpack_require__(41)(0);
var STRICT = __webpack_require__(48)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(7);
var $map = __webpack_require__(41)(1);

$export($export.P + $export.F * !__webpack_require__(48)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var IE8_DOM_DEFINE = __webpack_require__(139);
var toPrimitive = __webpack_require__(76);
var dP = Object.defineProperty;

exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.set.js
var es6_set = __webpack_require__(162);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.map.js
var es6_map = __webpack_require__(82);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(181);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(182);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.ends-with.js
var es6_string_ends_with = __webpack_require__(223);

// CONCATENATED MODULE: ./.cache/prefetch.js
var support=function support(feature){if(typeof document==="undefined"){return false;}var fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};var linkPrefetchStrategy=function linkPrefetchStrategy(url){return new Promise(function(resolve,reject){if(typeof document==="undefined"){reject();return;}var link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);link.onload=resolve;link.onerror=reject;var parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};var xhrPrefetchStrategy=function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open("GET",url,true);req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});};var supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;var preFetched={};var prefetch_prefetch=function prefetch(url){return new Promise(function(resolve){if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url).then(function(){resolve();preFetched[url]=true;}).catch(function(){});// 404s are logged to the console anyway
});};/* harmony default export */ var _cache_prefetch = (prefetch_prefetch);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/utils.js
var utils = __webpack_require__(32);

// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(80);

// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ var normalize_page_path = (function(path){if(path===undefined){return path;}if(path==="/"){return"/";}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1);}return path;});
// CONCATENATED MODULE: ./.cache/find-path.js
var pathCache=new Map();var find_path_matchPaths=[];var find_path_trimPathname=function trimPathname(rawPathname){var pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
var trimmedPathname=Object(strip_prefix["a" /* default */])(pathname,"")// Remove any hashfragment
.split("#")[0]// Remove search query
.split("?")[0];return trimmedPathname;};/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */var setMatchPaths=function setMatchPaths(value){find_path_matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */var find_path_findMatchPath=function findMatchPath(rawPathname){var trimmedPathname=find_path_cleanPath(rawPathname);for(var _iterator=find_path_matchPaths,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var _ref2=_ref,matchPath=_ref2.matchPath,path=_ref2.path;if(Object(utils["b" /* match */])(matchPath,trimmedPathname)){return normalize_page_path(path);}}return null;};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
var findPath=function findPath(rawPathname){var trimmedPathname=find_path_trimPathname(rawPathname);if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}var foundPath=find_path_findMatchPath(trimmedPathname);if(!foundPath){foundPath=find_path_cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */var find_path_cleanPath=function cleanPath(rawPathname){var trimmedPathname=find_path_trimPathname(rawPathname);var foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=normalize_page_path(foundPath);return foundPath;};
// CONCATENATED MODULE: ./.cache/loader.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return loader_BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return loader_ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var preferDefault=function preferDefault(m){return m&&m.default||m;};var stripSurroundingSlashes=function stripSurroundingSlashes(s){s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};var createPageDataUrl=function createPageDataUrl(path){var fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return ""+"/page-data/"+fixedPath+"/page-data.json";};var doFetch=function doFetch(url,method){if(method===void 0){method="GET";}return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=function(){if(req.readyState==4){resolve(req);}};req.send(null);});};var _loadPageDataJson=function loadPageDataJson(loadObj){var pagePath=loadObj.pagePath,_loadObj$retries=loadObj.retries,retries=_loadObj$retries===void 0?0:_loadObj$retries;var url=createPageDataUrl(pagePath);return doFetch(url).then(function(req){var status=req.status,responseText=req.responseText;// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid pageData response");}return Object.assign(loadObj,{status:"success",payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath==="/404.html"){return Object.assign(loadObj,{status:"failure"});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return _loadPageDataJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:"error"});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return _loadPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is a failure.
return Object.assign(loadObj,{status:"error"});});};var doesConnectionSupportPrefetch=function doesConnectionSupportPrefetch(){if("connection"in navigator&&typeof navigator.connection!=="undefined"){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};var toPageResources=function toPageResources(pageData,component){if(component===void 0){component=null;}var page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath};return{component:component,json:pageData.result,page:page};};var loader_BaseLoader=/*#__PURE__*/function(){function BaseLoader(loadComponent,matchPaths){// Map of pagePath -> Page. Where Page is an object with: {
//   status: `success` || `error`,
//   payload: PageResources, // undefined if `error`
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//   }
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;setMatchPaths(matchPaths);}var _proto=BaseLoader.prototype;_proto.setApiRunner=function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(function(a){return a;});};_proto.loadPageDataJson=function loadPageDataJson(rawPath){var _this=this;var pagePath=findPath(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return _loadPageDataJson({pagePath:pagePath}).then(function(pageData){_this.pageDataDb.set(pagePath,pageData);return pageData;});};_proto.findMatchPath=function findMatchPath(rawPath){return find_path_findMatchPath(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
;_proto.loadPage=function loadPage(rawPath){var _this2=this;var pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){var page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}var inFlight=this.loadPageDataJson(pagePath).then(function(result){if(result.status==="error"){return{status:"error"};}if(result.status==="failure"){// throw an error so error trackers can pick this up
throw new Error("404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/");}var pageData=result.payload;var componentChunkName=pageData.componentChunkName;return _this2.loadComponent(componentChunkName).then(function(component){var finalResult={createdAt:new Date()};var pageResources;if(!component){finalResult.status="error";}else{finalResult.status="success";if(result.notFound===true){finalResult.notFound=true;}pageResources=toPageResources(pageData,component);finalResult.payload=pageResources;emitter["a" /* default */].emit("onPostLoadPageResources",{page:pageResources,pageResources:pageResources});}_this2.pageDb.set(pagePath,finalResult);// undefined if final result is an error
return pageResources;});})// prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
.then(function(response){_this2.inFlightDb.delete(pagePath);return response;}).catch(function(err){_this2.inFlightDb.delete(pagePath);throw err;});this.inFlightDb.set(pagePath,inFlight);return inFlight;}// returns undefined if loading page ran into errors
;_proto.loadPageSync=function loadPageSync(rawPath){var pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){return this.pageDb.get(pagePath).payload;}return undefined;};_proto.shouldPrefetch=function shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;};_proto.prefetch=function prefetch(pagePath){var _this3=this;if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner("onPrefetchPathname",{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}var realPath=findPath(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(function(){if(!_this3.prefetchCompleted.has(pagePath)){_this3.apiRunner("onPostPrefetchPathname",{pathname:pagePath});_this3.prefetchCompleted.add(pagePath);}});return true;};_proto.doPrefetch=function doPrefetch(pagePath){throw new Error("doPrefetch not implemented");};_proto.hovering=function hovering(rawPath){this.loadPage(rawPath);};_proto.getResourceURLsForPathname=function getResourceURLsForPathname(rawPath){var pagePath=findPath(rawPath);var page=this.pageDataDb.get(pagePath);if(page){var pageResources=toPageResources(page.payload);return[].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}};_proto.isPageNotFound=function isPageNotFound(rawPath){var pagePath=findPath(rawPath);var page=this.pageDb.get(pagePath);return page&&page.notFound===true;};return BaseLoader;}();var createComponentUrls=function createComponentUrls(componentChunkName){return window.___chunkMapping[componentChunkName].map(function(chunk){return ""+chunk;});};var loader_ProdLoader=/*#__PURE__*/function(_BaseLoader){_inheritsLoose(ProdLoader,_BaseLoader);function ProdLoader(asyncRequires,matchPaths){var loadComponent=function loadComponent(chunkName){return asyncRequires.components[chunkName]().then(preferDefault);};return _BaseLoader.call(this,loadComponent,matchPaths)||this;}var _proto2=ProdLoader.prototype;_proto2.doPrefetch=function doPrefetch(pagePath){var _this4=this;var pageDataUrl=createPageDataUrl(pagePath);return _cache_prefetch(pageDataUrl).then(function(){return(// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
_this4.loadPageDataJson(pagePath));}).then(function(result){if(result.status!=="success"){return Promise.resolve();}var pageData=result.payload;var chunkName=pageData.componentChunkName;var componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_cache_prefetch)).then(function(){return pageData;});});};return ProdLoader;}(loader_BaseLoader);var instance;var setLoader=function setLoader(_loader){instance=_loader;};var publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:function getResourcesForPathname(rawPath){console.warn("Warning: getResourcesForPathname is deprecated. Use loadPage instead");return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:function getResourcesForPathnameSync(rawPath){console.warn("Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead");return instance.i.loadPageSync(rawPath);},enqueue:function enqueue(rawPath){return instance.prefetch(rawPath);},// Real methods
getResourceURLsForPathname:function getResourceURLsForPathname(rawPath){return instance.getResourceURLsForPathname(rawPath);},loadPage:function loadPage(rawPath){return instance.loadPage(rawPath);},loadPageSync:function loadPageSync(rawPath){return instance.loadPageSync(rawPath);},prefetch:function prefetch(rawPath){return instance.prefetch(rawPath);},isPageNotFound:function isPageNotFound(rawPath){return instance.isPageNotFound(rawPath);},hovering:function hovering(rawPath){return instance.hovering(rawPath);}};/* harmony default export */ var loader = __webpack_exports__["default"] = (publicLoader);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(46);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(117);
var anObject = __webpack_require__(23);
var speciesConstructor = __webpack_require__(113);
var advanceStringIndex = __webpack_require__(107);
var toLength = __webpack_require__(26);
var callRegExpExec = __webpack_require__(86);
var regexpExec = __webpack_require__(105);
var fails = __webpack_require__(22);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(88)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var hide = __webpack_require__(34);
var has = __webpack_require__(36);
var SRC = __webpack_require__(53)('src');
var $toString = __webpack_require__(191);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(51).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(7);
var $filter = __webpack_require__(41)(2);

$export($export.P + $export.F * !__webpack_require__(48)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(60);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(59);

__webpack_require__(29);

__webpack_require__(18);

__webpack_require__(12);

var _interopRequireDefault = __webpack_require__(37);

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(217));

var _extends2 = _interopRequireDefault(__webpack_require__(152));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(120));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(121));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(122));

var _propTypes = _interopRequireDefault(__webpack_require__(42));

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(43);

var _parsePath = __webpack_require__(220);

exports.parsePath = _parsePath.parsePath;

function withPrefix(path) {
  return normalizePath([ true ? "" : undefined, path].join("/"));
}

function withAssetPrefix(path) {
  return [""].concat([path.replace(/^\//, "")]).join("/");
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes["default"].string,
  activeStyle: _propTypes["default"].object,
  partiallyActive: _propTypes["default"].bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2["default"])({}, _this.props.style, {}, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react["default"].createElement(_router.Link, (0, _extends2["default"])({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react["default"].Component);

GatsbyLink.propTypes = (0, _extends2["default"])({}, NavLinkPropTypes, {
  onClick: _propTypes["default"].func,
  to: _propTypes["default"].string.isRequired,
  replace: _propTypes["default"].bool
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = _react["default"].forwardRef(function (props, ref) {
  return _react["default"].createElement(GatsbyLink, (0, _extends2["default"])({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return insertParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return validateRedirect; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_7__);







 ////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`

var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
}; ////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.


var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route["default"]) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      var _isSplat = routeSegment === "*";

      if (_isSplat) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        params["*"] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : invariant__WEBPACK_IMPORTED_MODULE_7___default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
}; ////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol


var match = function match(path, uri) {
  return pick([{
    path: path
  }], uri);
}; ////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.


var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname); // ?a=b, /users?b=c => /users?a=b

  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  } // profile, /users/789 => /users/789/profile


  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  } // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one


  var allSegments = baseSegments.concat(toSegments);
  var segments = [];

  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
}; ////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)


var insertParams = function insertParams(path, params) {
  var segments = segmentize(path);
  return "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };

  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var paramRe = /^:(.+)/;
var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};

var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};

var isSplat = function isSplat(segment) {
  return segment === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route["default"] ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return {
    route: route,
    score: score,
    index: index
  };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname, query) {
  return pathname + (query ? "?" + query : "");
};

var reservedNames = ["uri", "path"]; ////////////////////////////////////////////////////////////////////////////////



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(20) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var createDesc = __webpack_require__(63);
module.exports = __webpack_require__(20) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(62) });


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}

module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(199);
var anObject = __webpack_require__(23);
var $flags = __webpack_require__(89);
var DESCRIPTORS = __webpack_require__(20);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(28)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(22)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(49);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(40);
var IObject = __webpack_require__(90);
var toObject = __webpack_require__(30);
var toLength = __webpack_require__(26);
var asc = __webpack_require__(204);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(218)();
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.set-prototype-of.js
var es6_object_set_prototype_of = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/warning/browser.js
var browser = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(57);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// CONCATENATED MODULE: ./.cache/create-react-context.js
/* harmony default export */ var create_react_context = (react_default.a.createContext);
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/utils.js
var utils = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/history.js
var lib_history = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/@reach/router/es/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return es_Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationProvider", function() { return es_LocationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return es_Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return es_Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return es_Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerLocation", function() { return es_ServerLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRedirect", function() { return isRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseContext", function() { return BaseContext; });
/* concated harmony reexport createHistory */__webpack_require__.d(__webpack_exports__, "createHistory", function() { return lib_history["createHistory"]; });
/* concated harmony reexport createMemorySource */__webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return lib_history["createMemorySource"]; });
/* concated harmony reexport navigate */__webpack_require__.d(__webpack_exports__, "navigate", function() { return lib_history["navigate"]; });
/* concated harmony reexport globalHistory */__webpack_require__.d(__webpack_exports__, "globalHistory", function() { return lib_history["globalHistory"]; });









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/* eslint-disable jsx-a11y/anchor-has-content */









 ////////////////////////////////////////////////////////////////////////////////

var es_createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = create_react_context(defaultValue);
  Ctx.Consumer.displayName = name + ".Consumer";
  Ctx.Provider.displayName = name + ".Provider";
  return Ctx;
}; ////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider


var LocationContext = es_createNamedContext("Location"); // sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider

var es_Location = function Location(_ref) {
  var children = _ref.children;
  return react_default.a.createElement(LocationContext.Consumer, null, function (context) {
    return context ? children(context) : react_default.a.createElement(es_LocationProvider, null, children);
  });
};

var es_LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: {
        unlisten: null
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;
    return {
      navigate: navigate,
      location: location
    };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, {
        replace: true
      });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return {
                context: _this2.getContext()
              };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;
    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;
    return react_default.a.createElement(LocationContext.Provider, {
      value: context
    }, typeof children === "function" ? children(context) : children || null);
  };

  return LocationProvider;
}(react_default.a.Component); ////////////////////////////////////////////////////////////////////////////////


es_LocationProvider.defaultProps = {
  history: lib_history["globalHistory"]
};
 false ? undefined : void 0;

var es_ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;
  return react_default.a.createElement(LocationContext.Provider, {
    value: {
      location: {
        pathname: url,
        search: "",
        hash: ""
      },
      navigate: function navigate() {
        throw new Error("You can't call navigate on the server.");
      }
    }
  }, children);
}; ////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links


var BaseContext = es_createNamedContext("Base", {
  baseuri: "/",
  basepath: "/"
}); ////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.

var es_Router = function Router(props) {
  return react_default.a.createElement(BaseContext.Consumer, null, function (baseContext) {
    return react_default.a.createElement(es_Location, null, function (locationContext) {
      return react_default.a.createElement(es_RouterImpl, _extends({}, baseContext, locationContext, props));
    });
  });
};

var es_RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react_default.a.Children.map(children, es_createRoute(basepath));
    var pathname = location.pathname;
    var match = Object(utils["c" /* pick */])(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value; // remove the /* from the end for child routes relative paths

      basepath = route["default"] ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(Object(utils["d" /* resolve */])(to, uri), options);
        }
      });

      var clone = react_default.a.cloneElement(element, props, element.props.children ? react_default.a.createElement(es_Router, {
        primary: primary
      }, element.props.children) : undefined); // using 'div' for < 16.3 support

      var FocusWrapper = primary ? es_FocusHandler : component; // don't pass any props to 'div'

      var wrapperProps = primary ? _extends({
        uri: uri,
        location: location,
        component: component
      }, domProps) : domProps;
      return react_default.a.createElement(BaseContext.Provider, {
        value: {
          baseuri: uri,
          basepath: basepath
        }
      }, react_default.a.createElement(FocusWrapper, wrapperProps, clone));
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(react_default.a.PureComponent);

es_RouterImpl.defaultProps = {
  primary: true
};
var FocusContext = es_createNamedContext("Focus");

var es_FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react_default.a.createElement(FocusContext.Consumer, null, function (requestFocus) {
    return react_default.a.createElement(es_FocusHandlerImpl, _extends({}, domProps, {
      component: component,
      requestFocus: requestFocus,
      uri: uri,
      location: location
    }));
  });
}; // don't focus on initial render


var initialRender = true;
var focusHandlerCount = 0;

var es_FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;

    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;

    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;

    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$role = _props2.role,
        role = _props2$role === undefined ? "group" : _props2$role,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "role", "component", "uri", "location"]);

    return react_default.a.createElement(Comp, _extends({
      style: _extends({
        outline: "none"
      }, style),
      tabIndex: "-1",
      role: role,
      ref: function ref(n) {
        return _this5.node = n;
      }
    }, domProps), react_default.a.createElement(FocusContext.Provider, {
      value: this.requestFocus
    }, this.props.children));
  };

  return FocusHandlerImpl;
}(react_default.a.Component);

Object(react_lifecycles_compat["polyfill"])(es_FocusHandlerImpl);

var k = function k() {}; ////////////////////////////////////////////////////////////////////////////////


var forwardRef = react_default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react_default.a.createElement(BaseContext.Consumer, null, function (_ref5) {
    var basepath = _ref5.basepath,
        baseuri = _ref5.baseuri;
    return react_default.a.createElement(es_Location, null, function (_ref6) {
      var location = _ref6.location,
          navigate = _ref6.navigate;

      var to = props.to,
          state = props.state,
          replace = props.replace,
          _props$getProps = props.getProps,
          getProps = _props$getProps === undefined ? k : _props$getProps,
          anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

      var href = Object(utils["d" /* resolve */])(to, baseuri);
      var isCurrent = location.pathname === href;
      var isPartiallyCurrent = Object(utils["e" /* startsWith */])(location.pathname, href);
      return react_default.a.createElement("a", _extends({
        ref: ref || innerRef,
        "aria-current": isCurrent ? "page" : undefined
      }, anchorProps, getProps({
        isCurrent: isCurrent,
        isPartiallyCurrent: isPartiallyCurrent,
        href: href,
        location: location
      }), {
        href: href,
        onClick: function onClick(event) {
          if (anchorProps.onClick) anchorProps.onClick(event);

          if (shouldNavigate(event)) {
            event.preventDefault();
            navigate(href, {
              state: state,
              replace: replace
            });
          }
        }
      }));
    });
  });
}); ////////////////////////////////////////////////////////////////////////////////

function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var es_RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  } // Support React < 16 with this hook


  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    Promise.resolve().then(function () {
      navigate(Object(utils["a" /* insertParams */])(to, props), {
        replace: replace,
        state: state
      });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow"]);

    if (!noThrow) redirectTo(Object(utils["a" /* insertParams */])(to, props));
    return null;
  };

  return RedirectImpl;
}(react_default.a.Component);

var es_Redirect = function Redirect(props) {
  return react_default.a.createElement(es_Location, null, function (locationContext) {
    return react_default.a.createElement(es_RedirectImpl, _extends({}, locationContext, props));
  });
};

 false ? undefined : void 0; ////////////////////////////////////////////////////////////////////////////////

var es_Match = function Match(_ref7) {
  var path = _ref7.path,
      children = _ref7.children;
  return react_default.a.createElement(BaseContext.Consumer, null, function (_ref8) {
    var baseuri = _ref8.baseuri;
    return react_default.a.createElement(es_Location, null, function (_ref9) {
      var navigate = _ref9.navigate,
          location = _ref9.location;
      var resolvedPath = Object(utils["d" /* resolve */])(path, baseuri);
      var result = Object(utils["b" /* match */])(resolvedPath, location.pathname);
      return children({
        navigate: navigate,
        location: location,
        match: result ? _extends({}, result.params, {
          uri: result.uri,
          path: path
        }) : null
      });
    });
  });
}; ////////////////////////////////////////////////////////////////////////////////
// Junk


var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var es_createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    !(element.props.path || element.props["default"] || element.type === es_Redirect) ?  false ? undefined : invariant_browser_default()(false) : void 0;
    !!(element.type === es_Redirect && (!element.props.from || !element.props.to)) ?  false ? undefined : invariant_browser_default()(false) : void 0;
    !!(element.type === es_Redirect && !Object(utils["f" /* validateRedirect */])(element.props.from, element.props.to)) ?  false ? undefined : invariant_browser_default()(false) : void 0;

    if (element.props["default"]) {
      return {
        value: element,
        "default": true
      };
    }

    var elementPath = element.type === es_Redirect ? element.props.from : element.props.path;
    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);
    return {
      value: element,
      "default": element.props["default"],
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}; ////////////////////////////////////////////////////////////////////////




/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(28)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(7);
var $reduce = __webpack_require__(208);

$export($export.P + $export.F * !__webpack_require__(48)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(90);
var defined = __webpack_require__(60);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(22);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(142);
var enumBugKeys = __webpack_require__(109);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalHistory", function() { return globalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return createHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return createMemorySource; });
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__);









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var getLocation = function getLocation(source) {
  return _extends({}, source.location, {
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  });
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;

  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({
          location: location,
          action: "POP"
        });
      };

      source.addEventListener("popstate", popstateListener);
      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      state = _extends({}, state, {
        key: Date.now() + ""
      }); // try...catch iOS Safari limits to 100 pushState calls

      try {
        if (transitioning || replace) {
          source.history.replaceState(state, null, to);
        } else {
          source.history.pushState(state, null, to);
        }
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({
          location: location,
          action: "PUSH"
        });
      });
      return transition;
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native


var createMemorySource = function createMemorySource() {
  var initialPathname = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var index = 0;
  var stack = [{
    pathname: initialPathname,
    search: ""
  }];
  var states = [];
  return {
    get location() {
      return stack[index];
    },

    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},
    history: {
      get entries() {
        return stack;
      },

      get index() {
        return index;
      },

      get state() {
        return states[index];
      },

      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({
          pathname: pathname,
          search: search
        });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = {
          pathname: pathname,
          search: search
        };
        states[index] = state;
      }
    }
  };
}; ////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history


var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate; ////////////////////////////////////////////////////////////////////////////////



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

__webpack_require__(33);

__webpack_require__(12);

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(154).set });


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(7);

$export($export.P, 'Function', { bind: __webpack_require__(186) });


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(52);
var global = __webpack_require__(14);
var ctx = __webpack_require__(40);
var classof = __webpack_require__(75);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(21);
var aFunction = __webpack_require__(49);
var anInstance = __webpack_require__(64);
var forOf = __webpack_require__(93);
var speciesConstructor = __webpack_require__(113);
var task = __webpack_require__(144).set;
var microtask = __webpack_require__(192)();
var newPromiseCapabilityModule = __webpack_require__(147);
var perform = __webpack_require__(193);
var userAgent = __webpack_require__(194);
var promiseResolve = __webpack_require__(195);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(15)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(66)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(67)($Promise, PROMISE);
__webpack_require__(94)(PROMISE);
Wrapper = __webpack_require__(51)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(95)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(23);
var dPs = __webpack_require__(201);
var enumBugKeys = __webpack_require__(109);
var IE_PROTO = __webpack_require__(108)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(106)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(146).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(28);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(24).f;
var has = __webpack_require__(36);
var TAG = __webpack_require__(15)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(142);
var hiddenKeys = __webpack_require__(109).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export graphql */
/* unused harmony export StaticQueryContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StaticQuery; });
/* unused harmony export useStaticQuery */
/* unused harmony export prefetchPathname */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(161);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
var prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_3__["default"].enqueue;var StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}var StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var useStaticQuery=function useStaticQuery(query){if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!=="function"&&"production"==="development"){throw new Error("You're likely using a version of React that doesn't support Hooks\n"+"Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");}var context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);if(context[query]&&context[query].data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js




//      
// An event handler can take an optional event argument
// and should not return a value
// An array of all currently registered event handlers for a type
// A map of event types and their corresponding event handlers.

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all) {
  all = all || Object.create(null);
  return {
    /**
     * Register an event handler for the given type.
     *
     * @param  {String} type	Type of event to listen for, or `"*"` for all events
     * @param  {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },

    /**
     * Remove an event handler for the given type.
     *
     * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
     * @param  {Function} handler Handler function to remove
     * @memberOf mitt
     */
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    /**
     * Invoke all handlers for the given type.
     * If present, `"*"` handlers are invoked after type-matched handlers.
     *
     * @param {String} type  The event type to invoke
     * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit: function emit(type, evt) {
      (all[type] || []).slice().map(function (handler) {
        handler(evt);
      });
      (all['*'] || []).slice().map(function (handler) {
        handler(type, evt);
      });
    }
  };
}

/* harmony default export */ var mitt_es = (mitt);
// CONCATENATED MODULE: ./.cache/emitter.js
var emitter=mitt_es();/* harmony default export */ var _cache_emitter = __webpack_exports__["a"] = (emitter);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(153)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(140)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(114)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(53)('meta');
var isObject = __webpack_require__(21);
var has = __webpack_require__(36);
var setDesc = __webpack_require__(24).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(22)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(7);
var $some = __webpack_require__(41)(3);

$export($export.P + $export.F * !__webpack_require__(48)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(50);
var TAG = __webpack_require__(15)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(21);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createThemedStyled", {
  enumerable: true,
  get: function get() {
    return _styled.createThemedStyled;
  }
});
Object.defineProperty(exports, "createThemedWithStyle", {
  enumerable: true,
  get: function get() {
    return _styled.createThemedWithStyle;
  }
});
Object.defineProperty(exports, "createThemedUseStyletron", {
  enumerable: true,
  get: function get() {
    return _styled.createThemedUseStyletron;
  }
});
Object.defineProperty(exports, "styled", {
  enumerable: true,
  get: function get() {
    return _styled.styled;
  }
});
Object.defineProperty(exports, "withStyle", {
  enumerable: true,
  get: function get() {
    return _styled.withStyle;
  }
});
Object.defineProperty(exports, "useStyletron", {
  enumerable: true,
  get: function get() {
    return _styled.useStyletron;
  }
});
Object.defineProperty(exports, "hexToRgb", {
  enumerable: true,
  get: function get() {
    return _util.hexToRgb;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function get() {
    return _themeProvider["default"];
  }
});

var _styled = __webpack_require__(228);

var _util = __webpack_require__(233);

var _themeProvider = _interopRequireDefault(__webpack_require__(125));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "driver", function() { return driver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialStyle", function() { return getInitialStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDeclarativeRules", function() { return renderDeclarativeRules; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_3__);





function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
} // Note: $Shape is needed to make polymorphic withStyle refinements work correctly
// It seems functions satisfy this type without $Shape
// See: https://github.com/facebook/flow/issues/6784
//
//
//
//
//
//


function driver(style, styletron) {
  var tx = renderDeclarativeRules(style, styletron);
  return styletron.renderStyle(tx);
}

function getInitialStyle() {
  return {};
}

function renderDeclarativeRules(style, styletron) {
  for (var key in style) {
    var val = style[key];

    if (key === "animationName" && typeof val !== "string") {
      style.animationName = styletron.renderKeyframes(val);
      continue;
    }

    if (key === "fontFamily" && typeof val !== "string") {
      if (Array.isArray(val)) {
        var result = "";

        for (var _iterator = val, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var _font = _ref;

          if (_typeof(_font) === "object") {
            result += styletron.renderFontFace(_font) + ",";
          } else if (typeof _font === "string") {
            result += _font + ",";
          }
        }

        style.fontFamily = result.slice(0, -1);
        continue;
      } else {
        style.fontFamily = styletron.renderFontFace(val);
        continue;
      }
    }

    if (_typeof(val) === "object" && val !== null) {
      renderDeclarativeRules(val, styletron);
    }
  }

  return style;
}



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 *//* harmony default export */ __webpack_exports__["a"] = (function(str,prefix){if(prefix===void 0){prefix="";}if(str.substr(0,prefix.length)===prefix)return str.slice(prefix.length);return str;});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(23);
var toLength = __webpack_require__(26);
var advanceStringIndex = __webpack_require__(107);
var regExpExec = __webpack_require__(86);

// @@match logic
__webpack_require__(88)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(156);
var validate = __webpack_require__(55);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(97)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(15)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(34)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(7);
var aFunction = __webpack_require__(49);
var toObject = __webpack_require__(30);
var fails = __webpack_require__(22);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(48)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(7);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(75);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(51);
var global = __webpack_require__(14);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(52) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(190);
var redefine = __webpack_require__(28);
var hide = __webpack_require__(34);
var fails = __webpack_require__(22);
var defined = __webpack_require__(60);
var wks = __webpack_require__(15);
var regexpExec = __webpack_require__(105);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(23);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(50);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(47);
var toLength = __webpack_require__(26);
var toAbsoluteIndex = __webpack_require__(92);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(40);
var call = __webpack_require__(143);
var isArrayIter = __webpack_require__(111);
var anObject = __webpack_require__(23);
var toLength = __webpack_require__(26);
var getIterFn = __webpack_require__(112);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(14);
var dP = __webpack_require__(24);
var DESCRIPTORS = __webpack_require__(20);
var SPECIES = __webpack_require__(15)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(15)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(77);
var createDesc = __webpack_require__(63);
var toIObject = __webpack_require__(47);
var toPrimitive = __webpack_require__(76);
var has = __webpack_require__(36);
var IE8_DOM_DEFINE = __webpack_require__(139);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(14);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(28);
var redefineAll = __webpack_require__(66);
var meta = __webpack_require__(73);
var forOf = __webpack_require__(93);
var anInstance = __webpack_require__(64);
var isObject = __webpack_require__(21);
var fails = __webpack_require__(22);
var $iterDetect = __webpack_require__(95);
var setToStringTag = __webpack_require__(67);
var inheritIfRequired = __webpack_require__(118);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createTheme;

var _deepMerge = _interopRequireDefault(__webpack_require__(165));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var WHITE = '#FFFFFF';

function createTheme(primitives, overrides) {
  var theme = {
    breakpoints: {
      small: 320,
      medium: 600,
      large: 1280
    },
    colors: {
      // Primary Palette
      primary50: primitives.primary50,
      primary100: primitives.primary100,
      primary200: primitives.primary200,
      primary300: primitives.primary300,
      primary400: primitives.primary400,
      primary: primitives.primary400,
      primary500: primitives.primary500,
      primary600: primitives.primary600,
      primary700: primitives.primary700,
      // Negative Palette
      negative50: primitives.negative50,
      negative100: primitives.negative100,
      negative200: primitives.negative200,
      negative300: primitives.negative300,
      negative400: primitives.negative400,
      negative: primitives.negative400,
      negative500: primitives.negative500,
      negative600: primitives.negative600,
      negative700: primitives.negative700,
      // Warning Palette
      warning50: primitives.warning50,
      warning100: primitives.warning100,
      warning200: primitives.warning200,
      warning300: primitives.warning300,
      warning400: primitives.warning400,
      warning: primitives.warning400,
      warning500: primitives.warning500,
      warning600: primitives.warning600,
      warning700: primitives.warning700,
      // Positive Palette
      positive50: primitives.positive50,
      positive100: primitives.positive100,
      positive200: primitives.positive200,
      positive300: primitives.positive300,
      positive400: primitives.positive400,
      positive: primitives.positive400,
      positive500: primitives.positive500,
      positive600: primitives.positive600,
      positive700: primitives.positive700,
      // Monochrome Palette
      white: primitives.mono100,
      mono100: primitives.mono100,
      mono200: primitives.mono200,
      mono300: primitives.mono300,
      mono400: primitives.mono400,
      mono500: primitives.mono500,
      mono600: primitives.mono600,
      mono700: primitives.mono700,
      mono800: primitives.mono800,
      mono900: primitives.mono900,
      mono1000: primitives.mono1000,
      black: primitives.mono1000,
      // Rating Palette,
      rating200: primitives.rating200,
      rating400: primitives.rating400,
      // Semantic Colors
      // Font Color
      colorPrimary: primitives.mono1000,
      colorSecondary: primitives.mono800,
      // Background
      background: primitives.mono100,
      backgroundAlt: primitives.mono100,
      backgroundInv: primitives.mono1000,
      // Foreground
      foreground: primitives.mono1000,
      foregroundAlt: primitives.mono800,
      foregroundInv: primitives.mono100,
      // Borders
      border: primitives.mono500,
      borderAlt: primitives.mono600,
      borderFocus: primitives.primary400,
      borderError: primitives.negative400,
      // Buttons
      buttonPrimaryFill: primitives.primary400,
      buttonPrimaryText: primitives.mono100,
      // white
      buttonPrimaryHover: primitives.primary500,
      buttonPrimaryActive: primitives.primary600,
      buttonSecondaryFill: primitives.primary50,
      buttonSecondaryText: primitives.primary400,
      buttonSecondaryHover: primitives.primary100,
      buttonSecondaryActive: primitives.primary200,
      buttonTertiaryFill: primitives.mono200,
      buttonTertiaryText: primitives.primary400,
      buttonTertiaryHover: primitives.mono400,
      buttonTertiaryActive: primitives.mono500,
      // button $selected only applies to tertiary variant.
      buttonTertiarySelectedFill: primitives.primary400,
      buttonTertiarySelectedText: primitives.mono100,
      buttonMinimalFill: 'transparent',
      buttonMinimalText: primitives.primary400,
      buttonMinimalHover: primitives.mono200,
      buttonMinimalActive: primitives.mono400,
      buttonDisabledFill: primitives.mono300,
      buttonDisabledText: primitives.mono600,
      // Breadcrumbs
      breadcrumbsText: primitives.mono900,
      breadcrumbsSeparatorFill: primitives.mono700,
      // Datepicker
      datepickerBackground: primitives.mono100,
      datepickerDayFont: primitives.mono1000,
      datepickerDayFontDisabled: primitives.mono500,
      datepickerDayPseudoSelected: primitives.primary100,
      datepickerDayPseudoHighlighted: primitives.primary200,
      // FileUploader
      fileUploaderBackgroundColor: primitives.mono200,
      fileUploaderBackgroundColorActive: primitives.primary50,
      fileUploaderBorderColorActive: primitives.primary400,
      fileUploaderBorderColorDefault: primitives.mono500,
      fileUploaderMessageColor: primitives.mono600,
      // Links
      linkText: primitives.primary400,
      linkVisited: primitives.primary500,
      linkHover: primitives.primary600,
      linkActive: primitives.primary600,
      // Shadow
      shadowFocus: 'rgba(39, 110, 241, 0.32)',
      shadowError: 'rgba(229, 73, 55, 0.32)',
      // List
      listHeaderFill: WHITE,
      listBodyFill: primitives.mono200,
      listIconFill: primitives.mono500,
      listBorder: primitives.mono500,
      // ProgressSteps
      progressStepsIconActiveFill: primitives.primary100,
      // Tick
      tickFill: WHITE,
      tickFillHover: primitives.mono400,
      tickFillActive: primitives.mono500,
      tickFillSelected: primitives.primary400,
      tickFillSelectedHover: primitives.primary500,
      tickFillSelectedHoverActive: primitives.primary600,
      tickFillError: primitives.negative50,
      tickFillErrorHover: primitives.negative100,
      tickFillErrorHoverActive: primitives.negative200,
      tickFillErrorSelected: primitives.negative400,
      tickFillErrorSelectedHover: primitives.negative500,
      tickFillErrorSelectedHoverActive: primitives.negative600,
      tickFillDisabled: primitives.mono300,
      tickBorder: primitives.mono700,
      tickBorderError: primitives.negative400,
      tickMarkFill: WHITE,
      tickMarkFillDisabled: primitives.mono600,
      // Slider/Toggle
      sliderTrackFill: primitives.mono400,
      sliderTrackFillHover: primitives.mono500,
      sliderTrackFillActive: primitives.mono600,
      sliderTrackFillSelected: primitives.primary400,
      sliderTrackFillSelectedHover: primitives.primary400,
      sliderTrackFillSelectedActive: primitives.primary500,
      sliderTrackFillDisabled: primitives.mono300,
      sliderHandleFill: WHITE,
      sliderHandleFillHover: WHITE,
      sliderHandleFillActive: WHITE,
      sliderHandleFillSelected: WHITE,
      sliderHandleFillSelectedHover: WHITE,
      sliderHandleFillSelectedActive: WHITE,
      sliderHandleFillDisabled: primitives.mono500,
      sliderHandleInnerFill: primitives.mono400,
      sliderHandleInnerFillDisabled: primitives.mono400,
      sliderHandleInnerFillSelectedHover: primitives.primary400,
      sliderHandleInnerFillSelectedActive: primitives.primary500,
      sliderBorder: primitives.mono500,
      sliderBorderHover: primitives.primary400,
      sliderBorderDisabled: primitives.mono600,
      // Inputs
      inputFill: primitives.mono200,
      inputFillError: primitives.negative50,
      inputFillDisabled: primitives.mono200,
      inputFillActive: primitives.mono200,
      inputFillPositive: primitives.positive50,
      inputTextDisabled: primitives.mono600,
      inputBorderError: primitives.negative200,
      inputBorderPositive: primitives.positive200,
      inputEnhancerFill: primitives.mono300,
      inputEnhancerFillDisabled: primitives.mono300,
      inputEnhancerTextDisabled: primitives.mono600,
      // Menu
      menuFill: primitives.mono100,
      menuFillHover: primitives.mono200,
      menuFontDefault: primitives.mono800,
      menuFontDisabled: primitives.mono500,
      menuFontHighlighted: primitives.mono1000,
      menuFontSelected: primitives.mono1000,
      // Modal
      modalCloseColor: primitives.mono700,
      modalCloseColorHover: primitives.mono800,
      modalCloseColorFocus: primitives.mono800,
      // Pagination
      paginationTriangleDown: primitives.mono800,
      // Header navigation
      headerNavigationFill: 'transparent',
      // Tab
      tabBarFill: primitives.mono200,
      tabColor: primitives.mono800,
      // Notification
      notificationPrimaryBackground: primitives.primary50,
      notificationPrimaryText: primitives.primary500,
      notificationPositiveBackground: primitives.positive50,
      notificationPositiveText: primitives.positive500,
      notificationWarningBackground: primitives.warning50,
      notificationWarningText: primitives.warning500,
      notificationNegativeBackground: primitives.negative50,
      notificationNegativeText: primitives.negative500,
      // Tag
      tagSolidRampUnit: '400',
      tagSolidHoverRampUnit: '50',
      tagSolidActiveRampUnit: '100',
      tagSolidDisabledRampUnit: '50',
      tagSolidFontRampUnit: '50',
      tagSolidFontHoverRampUnit: '500',
      tagLightRampUnit: '50',
      tagLightHoverRampUnit: '100',
      tagLightActiveRampUnit: '100',
      tagLightDisabledRampUnit: '50',
      tagLightFontRampUnit: '500',
      tagLightFontHoverRampUnit: '500',
      tagOutlinedRampUnit: '400',
      tagOutlinedHoverRampUnit: '500',
      tagOutlinedActiveRampUnit: '600',
      tagOutlinedDisabledRampUnit: '50',
      tagOutlinedFontRampUnit: '500',
      tagOutlinedFontHoverRampUnit: '50',
      tagFontDisabledRampUnit: '200',
      tagNeutralSolidBackground: primitives.mono900,
      tagNeutralSolidHover: primitives.mono300,
      tagNeutralSolidActive: primitives.mono400,
      tagNeutralSolidDisabled: primitives.mono200,
      tagNeutralSolidFont: primitives.mono100,
      tagNeutralSolidFontHover: primitives.mono900,
      tagNeutralLightBackground: primitives.mono300,
      tagNeutralLightHover: primitives.mono300,
      tagNeutralLightActive: primitives.mono400,
      tagNeutralLightDisabled: primitives.mono200,
      tagNeutralLightFont: primitives.mono900,
      tagNeutralLightFontHover: primitives.mono900,
      tagNeutralOutlinedBackground: primitives.mono900,
      tagNeutralOutlinedHover: primitives.mono800,
      tagNeutralOutlinedActive: primitives.mono900,
      tagNeutralOutlinedDisabled: primitives.mono200,
      tagNeutralOutlinedFont: primitives.mono900,
      tagNeutralOutlinedFontHover: primitives.mono200,
      tagNeutralFontDisabled: primitives.mono500,
      tagPrimarySolidBackground: primitives.primary400,
      tagPrimarySolidHover: primitives.primary50,
      tagPrimarySolidActive: primitives.primary100,
      tagPrimarySolidDisabled: primitives.primary50,
      tagPrimarySolidFont: primitives.primary50,
      tagPrimarySolidFontHover: primitives.primary500,
      tagPrimaryLightBackground: primitives.primary50,
      tagPrimaryLightHover: primitives.primary100,
      tagPrimaryLightActive: primitives.primary100,
      tagPrimaryLightDisabled: primitives.primary50,
      tagPrimaryLightFont: primitives.primary500,
      tagPrimaryLightFontHover: primitives.primary500,
      tagPrimaryOutlinedBackground: primitives.primary400,
      tagPrimaryOutlinedHover: primitives.primary500,
      tagPrimaryOutlinedActive: primitives.primary600,
      tagPrimaryOutlinedDisabled: primitives.primary50,
      tagPrimaryOutlinedFont: primitives.primary500,
      tagPrimaryOutlinedFontHover: primitives.primary50,
      tagPrimaryFontDisabled: primitives.primary200,
      tagPositiveSolidBackground: primitives.positive400,
      tagPositiveSolidHover: primitives.positive50,
      tagPositiveSolidActive: primitives.positive100,
      tagPositiveSolidDisabled: primitives.positive50,
      tagPositiveSolidFont: primitives.positive50,
      tagPositiveSolidFontHover: primitives.positive500,
      tagPositiveLightBackground: primitives.positive50,
      tagPositiveLightHover: primitives.positive100,
      tagPositiveLightActive: primitives.positive100,
      tagPositiveLightDisabled: primitives.positive50,
      tagPositiveLightFont: primitives.positive500,
      tagPositiveLightFontHover: primitives.positive500,
      tagPositiveOutlinedBackground: primitives.positive400,
      tagPositiveOutlinedHover: primitives.positive500,
      tagPositiveOutlinedActive: primitives.positive600,
      tagPositiveOutlinedDisabled: primitives.positive50,
      tagPositiveOutlinedFont: primitives.positive500,
      tagPositiveOutlinedFontHover: primitives.positive50,
      tagPositiveFontDisabled: primitives.positive200,
      tagWarningSolidBackground: primitives.warning400,
      tagWarningSolidHover: primitives.warning50,
      tagWarningSolidActive: primitives.warning100,
      tagWarningSolidDisabled: primitives.warning50,
      tagWarningSolidFont: primitives.warning50,
      tagWarningSolidFontHover: primitives.warning500,
      tagWarningLightBackground: primitives.warning50,
      tagWarningLightHover: primitives.warning100,
      tagWarningLightActive: primitives.warning100,
      tagWarningLightDisabled: primitives.warning50,
      tagWarningLightFont: primitives.warning500,
      tagWarningLightFontHover: primitives.warning500,
      tagWarningOutlinedBackground: primitives.warning400,
      tagWarningOutlinedHover: primitives.warning500,
      tagWarningOutlinedActive: primitives.warning600,
      tagWarningOutlinedDisabled: primitives.warning50,
      tagWarningOutlinedFont: primitives.warning500,
      tagWarningOutlinedFontHover: primitives.warning50,
      tagWarningFontDisabled: primitives.warning200,
      tagNegativeSolidBackground: primitives.negative400,
      tagNegativeSolidHover: primitives.negative50,
      tagNegativeSolidActive: primitives.negative100,
      tagNegativeSolidDisabled: primitives.negative50,
      tagNegativeSolidFont: primitives.negative50,
      tagNegativeSolidFontHover: primitives.negative500,
      tagNegativeLightBackground: primitives.negative50,
      tagNegativeLightHover: primitives.negative100,
      tagNegativeLightActive: primitives.negative100,
      tagNegativeLightDisabled: primitives.negative50,
      tagNegativeLightFont: primitives.negative500,
      tagNegativeLightFontHover: primitives.negative500,
      tagNegativeOutlinedBackground: primitives.negative400,
      tagNegativeOutlinedHover: primitives.negative500,
      tagNegativeOutlinedActive: primitives.negative600,
      tagNegativeOutlinedDisabled: primitives.negative50,
      tagNegativeOutlinedFont: primitives.negative500,
      tagNegativeOutlinedFontHover: primitives.negative50,
      tagNegativeFontDisabled: primitives.negative200,
      // Table
      tableHeadBackgroundColor: primitives.mono100,
      tableBackground: primitives.mono100,
      tableStripedBackground: primitives.mono200,
      tableFilter: primitives.mono600,
      tableFilterHeading: primitives.mono700,
      tableFilterBackground: primitives.mono100,
      tableFilterFooterBackground: primitives.mono200,
      // Toast
      toastText: WHITE,
      toastPrimaryBackground: primitives.primary500,
      toastPositiveBackground: primitives.positive500,
      toastWarningBackground: primitives.warning500,
      toastNegativeBackground: primitives.negative500,
      // Spinner
      spinnerTrackFill: primitives.mono900,
      // Progress bar
      progressbarTrackFill: primitives.mono900,
      // Tooltip
      tooltipBackground: primitives.mono900,
      tooltipText: primitives.mono100
    },
    typography: {
      font100: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '11px',
        fontWeight: 'normal',
        lineHeight: '16px'
      },
      font200: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '12px',
        fontWeight: 'normal',
        lineHeight: '20px'
      },
      font250: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '20px'
      },
      font300: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '20px'
      },
      font350: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px'
      },
      font400: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '16px',
        fontWeight: 'normal',
        lineHeight: '24px'
      },
      font450: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px'
      },
      font460: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '18px',
        fontWeight: 'normal',
        lineHeight: '24px'
      },
      font470: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '24px'
      },
      font500: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '28px'
      },
      font600: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: '36px'
      },
      font700: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '32px',
        fontWeight: 500,
        lineHeight: '48px'
      },
      font800: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '40px',
        fontWeight: 500,
        lineHeight: '56px'
      },
      font900: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '52px',
        fontWeight: 500,
        lineHeight: '68px'
      },
      font1000: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '72px',
        fontWeight: 'normal',
        lineHeight: '96px'
      },
      font1100: {
        fontFamily: primitives.primaryFontFamily,
        fontSize: '96px',
        fontWeight: 'normal',
        lineHeight: '116px'
      }
    },
    sizing: {
      scale0: '2px',
      scale100: '4px',
      scale200: '6px',
      scale300: '8px',
      scale400: '10px',
      scale500: '12px',
      scale550: '14px',
      scale600: '16px',
      scale650: '18px',
      scale700: '20px',
      scale750: '22px',
      scale800: '24px',
      scale900: '32px',
      scale1000: '40px',
      scale1200: '48px',
      scale1400: '56px',
      scale1600: '64px',
      scale2400: '96px',
      scale3200: '128px',
      scale4800: '192px'
    },
    lighting: {
      shadow400: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
      shadow500: '0 2px 8px hsla(0, 0%, 0%, 0.16)',
      shadow600: '0 4px 16px hsla(0, 0%, 0%, 0.16)',
      shadow700: '0 8px 24px hsla(0, 0%, 0%, 0.16)',
      overlay0: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0)',
      overlay100: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)',
      overlay200: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)',
      overlay300: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)',
      overlay400: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)',
      overlay500: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)',
      overlay600: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)'
    },
    borders: {
      border100: {
        borderColor: 'hsla(0, 0%, 0%, 0.04)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border200: {
        borderColor: 'hsla(0, 0%, 0%, 0.08)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border300: {
        borderColor: 'hsla(0, 0%, 0%, 0.12)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border400: {
        borderColor: 'hsla(0, 0%, 0%, 0.16)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border500: {
        borderColor: 'hsla(0, 0%, 0%, 0.2)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      border600: {
        borderColor: 'hsla(0, 0%, 0%, 0.24)',
        borderStyle: 'solid',
        borderWidth: '1px'
      },
      radius100: '2px',
      radius200: '4px',
      radius300: '8px',
      radius400: '12px',

      /** Checkbox, Datepicker (Range), Progress Bar, Slider, Tag */
      useRoundedCorners: true,

      /** Button, ButtonGroup */
      buttonBorderRadius: '0px',

      /** Input, Select, Textarea */
      inputBorderRadius: '0px',

      /** Popover, Menu, Tooltip */
      popoverBorderRadius: '0px',

      /** Card, Datepicker, Modal, Toast, Notification */
      surfaceBorderRadius: '0px'
    },
    animation: {
      timing100: '0.25s',
      timing400: '0.4s',
      timing700: '0.6s',
      easeOutCurve: 'cubic-bezier(.2, .8, .4, 1)',
      easeInCurve: 'cubic-bezier(.8, .2, .6, 1)',
      easeInOutCurve: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    direction: 'auto',
    zIndex: {
      modal: 2000
    }
  }; // to remove the FlowFixMe, we have to make deepMerge accept a ThemeT
  // $FlowFixMe

  return (0, _deepMerge["default"])(theme, overrides);
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primitives = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// color constants

var primitives = {
  primary50: '#EDF3FE',
  primary100: '#D2E0FC',
  primary200: '#9CBCF8',
  primary300: '#548BF4',
  primary400: '#276EF1',
  primary500: '#174EB6',
  primary600: '#123D90',
  primary700: '#0C2960',
  negative50: '#FDF0EF',
  negative100: '#FADBD7',
  negative200: '#F4AFA7',
  negative300: '#EB7567',
  negative400: '#E54937',
  negative500: '#AE372A',
  negative600: '#892C21',
  negative700: '#5C1D16',
  warning50: '#FEF3EC',
  warning100: '#FBE2CF',
  warning200: '#F6BA8B',
  warning300: '#F19248',
  warning400: '#ED6F0E',
  warning500: '#B4540B',
  warning600: '#8E4308',
  warning700: '#5F2C06',
  positive50: '#EBF8F2',
  positive100: '#CDEDDE',
  positive200: '#88D3B0',
  positive300: '#43B982',
  positive400: '#07A35A',
  positive500: '#057C44',
  positive600: '#046236',
  positive700: '#034124',
  mono100: '#CCCCCC',
  mono200: '#999999',
  mono300: '#7A7A7A',
  mono400: '#5C5C5C',
  mono500: '#3D3D3D',
  mono600: '#292929',
  mono700: '#1F1F1F',
  mono800: '#141414',
  mono900: '#111111',
  mono1000: '#000000',
  rating200: '#FFE1A5',
  rating400: '#FFC043',
  primaryFontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
};
exports.primitives = primitives;

/***/ }),
/* 100 */,
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph2 = exports.Paragraph1 = exports.Label2 = exports.Label1 = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Display = exports.Caption2 = exports.Caption1 = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _block = _interopRequireDefault(__webpack_require__(267));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // Captions - aka Caption, CaptionLabel


var Caption1 = function Caption1(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-caption1"
  }, props, {
    font: props.font || 'font200',
    color: props.color || 'colorSecondary'
  }));
};

exports.Caption1 = Caption1;

var Caption2 = function Caption2(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-caption2"
  }, props, {
    font: props.font || 'font250',
    color: props.color || 'colorSecondary'
  }));
}; // Display


exports.Caption2 = Caption2;

var Display = function Display(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-display"
  }, props, {
    font: props.font || 'font1100',
    color: props.color || 'colorPrimary'
  }));
}; // Headings


exports.Display = Display;

var H1 = function H1(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-h1",
    as: props.as || 'h1'
  }, props, {
    font: props.font || 'font1000',
    color: props.color || 'colorPrimary'
  }));
};

exports.H1 = H1;

var H2 = function H2(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-h2",
    as: props.as || 'h2'
  }, props, {
    font: props.font || 'font900',
    color: props.color || 'colorPrimary'
  }));
};

exports.H2 = H2;

var H3 = function H3(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-h3",
    as: props.as || 'h3'
  }, props, {
    font: props.font || 'font800',
    color: props.color || 'colorPrimary'
  }));
};

exports.H3 = H3;

var H4 = function H4(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-h4",
    as: props.as || 'h4'
  }, props, {
    font: props.font || 'font700',
    color: props.color || 'colorPrimary'
  }));
};

exports.H4 = H4;

var H5 = function H5(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-h5",
    as: props.as || 'h5'
  }, props, {
    font: props.font || 'font600',
    color: props.color || 'colorPrimary'
  }));
};

exports.H5 = H5;

var H6 = function H6(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-h6",
    as: props.as || 'h6'
  }, props, {
    font: props.font || 'font500',
    color: props.color || 'colorPrimary'
  }));
}; // Labels - aka Label1, Label2


exports.H6 = H6;

var Label1 = function Label1(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-label1"
  }, props, {
    font: props.font || 'font350',
    color: props.color || 'colorPrimary'
  }));
};

exports.Label1 = Label1;

var Label2 = function Label2(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-label2"
  }, props, {
    font: props.font || 'font450',
    color: props.color || 'colorPrimary'
  }));
}; // Paragraphs - Paragraph1, Paragraph2


exports.Label2 = Label2;

var Paragraph1 = function Paragraph1(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-p1",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'font300',
    color: props.color || 'colorPrimary'
  }));
};

exports.Paragraph1 = Paragraph1;

var Paragraph2 = function Paragraph2(props) {
  return React.createElement(_block["default"], _extends({
    "data-baseweb": "typo-p2",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'font400',
    color: props.color || 'colorPrimary'
  }));
};

exports.Paragraph2 = Paragraph2;

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Renders page
var PageRenderer=/*#__PURE__*/function(_React$Component){_inheritsLoose(PageRenderer,_React$Component);function PageRenderer(){return _React$Component.apply(this,arguments)||this;}var _proto=PageRenderer.prototype;_proto.render=function render(){var props=Object.assign({},this.props,{pathContext:this.props.pageContext});var _apiRunner=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__["apiRunner"])("replaceComponentRenderer",{props:this.props,loader:_loader__WEBPACK_IMPORTED_MODULE_2__["publicLoader"]}),replacementElement=_apiRunner[0];var pageElement=replacementElement||Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.props.pageResources.component,Object.assign({},props,{key:this.props.path||this.props.pageResources.page.path}));var wrappedPage=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_3__["apiRunner"])("wrapPageElement",{element:pageElement,props:props},pageElement,function(_ref){var result=_ref.result;return{element:result,props:props};}).pop();return wrappedPage;};return PageRenderer;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["a"] = (PageRenderer);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17);

__webpack_require__(74);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(18);

__webpack_require__(58);

__webpack_require__(35);

__webpack_require__(11);

__webpack_require__(1);

__webpack_require__(4);

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(42);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(224);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _reactFastCompare = __webpack_require__(226);

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _HelmetUtils = __webpack_require__(227);

var _HelmetConstants = __webpack_require__(163);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Helmet = function Helmet(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    _inherits(HelmetWrapper, _React$Component);

    function HelmetWrapper() {
      _classCallCheck(this, HelmetWrapper);

      return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !(0, _reactFastCompare2["default"])(this.props, nextProps);
    };

    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }

      switch (child.type) {
        case _HelmetConstants.TAG_NAMES.SCRIPT:
        case _HelmetConstants.TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };

        case _HelmetConstants.TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }

      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };

    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
      var _extends2;

      var child = _ref.child,
          arrayTypeChildren = _ref.arrayTypeChildren,
          newChildProps = _ref.newChildProps,
          nestedChildren = _ref.nestedChildren;
      return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
    };

    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _extends3, _extends4;

      var child = _ref2.child,
          newProps = _ref2.newProps,
          newChildProps = _ref2.newChildProps,
          nestedChildren = _ref2.nestedChildren;

      switch (child.type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
          return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

        case _HelmetConstants.TAG_NAMES.BODY:
          return _extends({}, newProps, {
            bodyAttributes: _extends({}, newChildProps)
          });

        case _HelmetConstants.TAG_NAMES.HTML:
          return _extends({}, newProps, {
            htmlAttributes: _extends({}, newChildProps)
          });
      }

      return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
    };

    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends({}, newProps);

      Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
        var _extends5;

        newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
      });
      return newFlattenedProps;
    };

    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      if (false) {}

      return true;
    };

    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;

      var arrayTypeChildren = {};

      _react2["default"].Children.forEach(children, function (child) {
        if (!child || !child.props) {
          return;
        }

        var _child$props = child.props,
            nestedChildren = _child$props.children,
            childProps = _objectWithoutProperties(_child$props, ["children"]);

        var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

        _this2.warnOnInvalidChildren(child, nestedChildren);

        switch (child.type) {
          case _HelmetConstants.TAG_NAMES.LINK:
          case _HelmetConstants.TAG_NAMES.META:
          case _HelmetConstants.TAG_NAMES.NOSCRIPT:
          case _HelmetConstants.TAG_NAMES.SCRIPT:
          case _HelmetConstants.TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child: child,
              arrayTypeChildren: arrayTypeChildren,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;

          default:
            newProps = _this2.mapObjectTypeChildren({
              child: child,
              newProps: newProps,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;
        }
      });

      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };

    HelmetWrapper.prototype.render = function render() {
      var _props = this.props,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["children"]);

      var newProps = _extends({}, props);

      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }

      return _react2["default"].createElement(Component, newProps);
    };

    _createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.

      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function set(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);

    return HelmetWrapper;
  }(_react2["default"].Component), _class.propTypes = {
    base: _propTypes2["default"].object,
    bodyAttributes: _propTypes2["default"].object,
    children: _propTypes2["default"].oneOfType([_propTypes2["default"].arrayOf(_propTypes2["default"].node), _propTypes2["default"].node]),
    defaultTitle: _propTypes2["default"].string,
    defer: _propTypes2["default"].bool,
    encodeSpecialCharacters: _propTypes2["default"].bool,
    htmlAttributes: _propTypes2["default"].object,
    link: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    meta: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    noscript: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    onChangeClientState: _propTypes2["default"].func,
    script: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    style: _propTypes2["default"].arrayOf(_propTypes2["default"].object),
    title: _propTypes2["default"].string,
    titleAttributes: _propTypes2["default"].object,
    titleTemplate: _propTypes2["default"].string
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function () {
    var mappedState = Component.rewind();

    if (!mappedState) {
      // provide fallback if mappedState is undefined
      mappedState = (0, _HelmetUtils.mapStateOnServer)({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }

    return mappedState;
  }, _temp;
};

var NullComponent = function NullComponent() {
  return null;
};

var HelmetSideEffects = (0, _reactSideEffect2["default"])(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
exports.Helmet = HelmetExport;
exports["default"] = HelmetExport;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChevronDown;

var React = _interopRequireWildcard(__webpack_require__(0));

var _icon = _interopRequireDefault(__webpack_require__(264));

var _omitDollarPrefixedKeys = _interopRequireDefault(__webpack_require__(266));

var _themeProvider = __webpack_require__(125);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ChevronDown(props) {
  return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
    return theme.icons && theme.icons.ChevronDown ? React.createElement(theme.icons.ChevronDown, _extends({
      title: "Chevron Down",
      viewBox: "0 0 24 24"
    }, (0, _omitDollarPrefixedKeys["default"])(props))) : React.createElement(_icon["default"], _extends({
      title: "Chevron Down",
      viewBox: "0 0 24 24"
    }, props), React.createElement("path", {
      transform: "rotate(270, 12, 12)",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071C15.0976 16.3166 15.0976 15.6834 14.7071 15.2929L11.4142 12L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
    }));
  });
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(89);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
var document = __webpack_require__(14).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(140)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(87)('keys');
var uid = __webpack_require__(53);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 110 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(65);
var ITERATOR = __webpack_require__(15)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(75);
var ITERATOR = __webpack_require__(15)('iterator');
var Iterators = __webpack_require__(65);
module.exports = __webpack_require__(51).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(23);
var aFunction = __webpack_require__(49);
var SPECIES = __webpack_require__(15)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(52);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(28);
var hide = __webpack_require__(34);
var Iterators = __webpack_require__(65);
var $iterCreate = __webpack_require__(200);
var setToStringTag = __webpack_require__(67);
var getPrototypeOf = __webpack_require__(149);
var ITERATOR = __webpack_require__(15)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(50);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(27);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(4);

__webpack_require__(8);

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(21);
var cof = __webpack_require__(50);
var MATCH = __webpack_require__(15)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
var setPrototypeOf = __webpack_require__(154).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var hide = __webpack_require__(34);
var uid = __webpack_require__(53);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 120 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 121 */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(117);
var defined = __webpack_require__(60);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(15)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThemeContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _index = __webpack_require__(164);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var ThemeContext = React.createContext(_index.LightTheme);
exports.ThemeContext = ThemeContext;

var ThemeProvider = function ThemeProvider(props) {
  var theme = props.theme,
      children = props.children;
  return React.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
};

var _default = ThemeProvider;
exports["default"] = _default;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TETHER_PLACEMENT = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var TETHER_PLACEMENT = {
  auto: 'auto',
  topLeft: 'topLeft',
  top: 'top',
  topRight: 'topRight',
  rightTop: 'rightTop',
  right: 'right',
  rightBottom: 'rightBottom',
  bottomRight: 'bottomRight',
  bottom: 'bottom',
  bottomLeft: 'bottomLeft',
  leftBottom: 'leftBottom',
  left: 'left',
  leftTop: 'leftTop'
};
exports.TETHER_PLACEMENT = TETHER_PLACEMENT;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(45);

__webpack_require__(13);

__webpack_require__(18);

__webpack_require__(29);

__webpack_require__(8);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverride = getOverride;
exports.getOverrideProps = getOverrideProps;
exports.toObjectOverride = toObjectOverride;
exports.getOverrides = getOverrides;
exports.mergeOverrides = mergeOverrides;
exports.mergeOverride = mergeOverride;
exports.mergeConfigurationOverrides = mergeConfigurationOverrides;

var React = _interopRequireWildcard(__webpack_require__(0));

var _reactIs = __webpack_require__(188);

var _deepMerge = _interopRequireDefault(__webpack_require__(165));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Given an override argument, returns the component implementation override if it exists
 */
// eslint-disable-next-line flowtype/no-weak-types


function getOverride(override) {
  if ((0, _reactIs.isValidElementType)(override)) {
    return override;
  } // Check if override is OverrideObjectT


  if (override && _typeof(override) === 'object') {
    // Remove this 'any' once this flow issue is fixed:
    // https://github.com/facebook/flow/issues/6666
    // eslint-disable-next-line flowtype/no-weak-types
    return override.component;
  } // null/undefined


  return override;
}
/**
 * Given an override argument, returns the override props that should be passed
 * to the component when rendering it.
 */


function getOverrideProps(override) {
  if (override && _typeof(override) === 'object') {
    var props = typeof override.props === 'function' ? override.props(override) : override.props;
    return _objectSpread({}, props, {
      $style: override.style
    });
  }

  return {};
}
/**
 * Coerces an override argument into an override object
 * (sometimes it is just an override component)
 */


function toObjectOverride(override) {
  if ((0, _reactIs.isValidElementType)(override)) {
    return {
      // eslint-disable-next-line flowtype/no-weak-types
      component: override
    };
  } // Flow can't figure out that typeof 'function' above will
  // catch React.StatelessFunctionalComponent
  // (probably related to https://github.com/facebook/flow/issues/6666)
  // eslint-disable-next-line flowtype/no-weak-types


  return override || {};
}
/**
 * Get a convenient override array that will always have [component, props]
 */

/* eslint-disable flowtype/no-weak-types */


function getOverrides(override, defaultComponent) {
  var component = getOverride(override) || defaultComponent;
  var props = getOverrideProps(override);
  return [component, props];
}
/* eslint-enable flowtype/no-weak-types */

/**
 * Merges two overrides objects – this is useful if you want to inject your own
 * overrides into a child component, but also accept further overrides from
 * from upstream. See `mergeOverride` below.
 */


function mergeOverrides() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allIdentifiers = Object.keys(_objectSpread({}, target, source));
  return allIdentifiers.reduce(function (acc, name) {
    acc[name] = mergeOverride(toObjectOverride(target[name]), toObjectOverride(source[name]));
    return acc;
  }, {});
}
/**
 * Merges two override objects using the following behavior:
 * - Component implementation from the source (parent) replaces target
 * - Props and styles are both deep merged
 */


function mergeOverride(target, source) {
  // Shallow merge should handle `component`
  var merged = _objectSpread({}, target, source);

  if (target.props && source.props) {
    merged.props = mergeConfigurationOverrides(target.props, source.props);
  }

  if (target.style && source.style) {
    merged.style = mergeConfigurationOverrides(target.style, source.style);
  }

  return merged;
}
/**
 * Since style or props overrides can be an object *or* a function, we need to handle
 * the case that one of them is a function. We do this by returning a new
 * function that deep merges the result of each style override
 */


function mergeConfigurationOverrides(target, source) {
  // Simple case of both objects
  if (_typeof(target) === 'object' && _typeof(source) === 'object') {
    return (0, _deepMerge["default"])({}, target, source);
  } // At least one is a function, return a new composite function


  return function () {
    return (0, _deepMerge["default"])({}, typeof target === 'function' ? target.apply(void 0, arguments) : target, typeof source === 'function' ? source.apply(void 0, arguments) : source);
  };
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);

__webpack_require__(71);

__webpack_require__(74);

__webpack_require__(81);

__webpack_require__(27);

__webpack_require__(19);

__webpack_require__(4);

__webpack_require__(136);

__webpack_require__(17);

__webpack_require__(33);

__webpack_require__(59);

__webpack_require__(45);

__webpack_require__(35);

__webpack_require__(58);

__webpack_require__(13);

__webpack_require__(18);

__webpack_require__(29);

__webpack_require__(8);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(12);

__webpack_require__(1);

!function (root, factory) {
   true ? module.exports = factory(__webpack_require__(0)) : undefined;
}("undefined" != typeof self ? self : this, function (__WEBPACK_EXTERNAL_MODULE_6__) {
  return function (modules) {
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId]) return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        i: moduleId,
        l: !1,
        exports: {}
      };
      return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.l = !0, module.exports;
    }

    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function (exports, name, getter) {
      __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
        configurable: !1,
        enumerable: !0,
        get: getter
      });
    }, __webpack_require__.n = function (module) {
      var getter = module && module.__esModule ? function () {
        return module["default"];
      } : function () {
        return module;
      };
      return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 5);
  }([function (module, exports, __webpack_require__) {
    var ReactIs = __webpack_require__(1);

    module.exports = __webpack_require__(8)(ReactIs.isElement, !0);
  }, function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = __webpack_require__(7);
  }, function (module, exports, __webpack_require__) {
    "use strict";

    module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function toHyphenLower(match) {
      return "-" + match.toLowerCase();
    }

    function hyphenateStyleName(name) {
      if (cache.hasOwnProperty(name)) return cache[name];
      var hName = name.replace(uppercasePattern, toHyphenLower);
      return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
    }

    var uppercasePattern = /[A-Z]/g,
        msPattern = /^ms-/,
        cache = {};
    __webpack_exports__.a = hyphenateStyleName;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
        "function" == typeof Object.getOwnPropertySymbols && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }))), ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : obj[key] = value, obj;
    }

    var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__),
        stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number]),
        matchers = {
      orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["portrait", "landscape"]),
      scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf(["progressive", "interlace"]),
      aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      height: stringOrNumber,
      deviceHeight: stringOrNumber,
      width: stringOrNumber,
      deviceWidth: stringOrNumber,
      color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      resolution: stringOrNumber
    },
        features = _objectSpread({
      minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
      minHeight: stringOrNumber,
      maxHeight: stringOrNumber,
      minDeviceHeight: stringOrNumber,
      maxDeviceHeight: stringOrNumber,
      minWidth: stringOrNumber,
      maxWidth: stringOrNumber,
      minDeviceWidth: stringOrNumber,
      maxDeviceWidth: stringOrNumber,
      minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
      minResolution: stringOrNumber,
      maxResolution: stringOrNumber
    }, matchers),
        types = {
      all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
      embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
    },
        all = _objectSpread({}, types, features);

    matchers.type = Object.keys(types), __webpack_exports__.a = {
      all: all,
      types: types,
      matchers: matchers,
      features: features
    };
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function _typeof(obj) {
      return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor;
    }

    function _possibleConstructorReturn(self, call) {
      return !call || "object" !== _typeof(call) && "function" != typeof call ? _assertThisInitialized(self) : call;
    }

    function _getPrototypeOf(o) {
      return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      })(o);
    }

    function _assertThisInitialized(self) {
      if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return self;
    }

    function _inherits(subClass, superClass) {
      if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: !0,
          configurable: !0
        }
      }), superClass && _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
      return (_setPrototypeOf = Object.setPrototypeOf || function (o, p) {
        return o.__proto__ = p, o;
      })(o, p);
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
        "function" == typeof Object.getOwnPropertySymbols && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }))), ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _defineProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : obj[key] = value, obj;
    }

    Object.defineProperty(__webpack_exports__, "__esModule", {
      value: !0
    }), __webpack_require__.d(__webpack_exports__, "default", function () {
      return MediaQuery;
    });

    var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__),
        __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__),
        __WEBPACK_IMPORTED_MODULE_2_matchmediaquery__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_2_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_matchmediaquery__),
        __WEBPACK_IMPORTED_MODULE_3_hyphenate_style_name__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_4__mediaQuery__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_5__toQuery__ = __webpack_require__(13);

    __webpack_require__.d(__webpack_exports__, "toQuery", function () {
      return __WEBPACK_IMPORTED_MODULE_5__toQuery__.a;
    });

    var defaultTypes = {
      component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
      query: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
      values: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_4__mediaQuery__.a.matchers),
      children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
      onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
    },
        excludedQueryKeys = Object.keys(defaultTypes),
        omit = function omit(object, keys) {
      var newObject = _objectSpread({}, object);

      return keys.forEach(function (key) {
        return delete newObject[key];
      }), newObject;
    },
        getValues = function getValues(_ref) {
      var values = _ref.values;
      if (!values) return null;
      var keys = Object.keys(values);
      return 0 === keys.length ? null : keys.reduce(function (result, key) {
        return result[Object(__WEBPACK_IMPORTED_MODULE_3_hyphenate_style_name__.a)(key)] = values[key], result;
      }, {});
    },
        getQuery = function getQuery(props) {
      return props.query || Object(__WEBPACK_IMPORTED_MODULE_5__toQuery__.a)(omit(props, excludedQueryKeys));
    },
        MediaQuery = function (_React$Component) {
      function MediaQuery() {
        var _getPrototypeOf2, _this;

        _classCallCheck(this, MediaQuery);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MediaQuery)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_this), "state", {
          matches: !1,
          mq: null,
          query: "",
          values: null
        }), _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
          _this.state.mq.addListener(_this.updateMatches), _this.updateMatches();
        }), _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
          _this.state.mq !== prevState.mq && (_this.cleanupMediaQuery(prevState.mq), _this.state.mq.addListener(_this.updateMatches)), _this.props.onChange && prevState.matches !== _this.state.matches && _this.props.onChange(_this.state.matches);
        }), _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
          _this._unmounted = !0, _this.cleanupMediaQuery(_this.state.mq);
        }), _defineProperty(_assertThisInitialized(_this), "cleanupMediaQuery", function (mq) {
          mq && (mq.removeListener(_this.updateMatches), mq.dispose());
        }), _defineProperty(_assertThisInitialized(_this), "updateMatches", function () {
          _this._unmounted || _this.state.mq.matches !== _this.state.matches && _this.setState({
            matches: _this.state.mq.matches
          });
        }), _defineProperty(_assertThisInitialized(_this), "render", function () {
          return "function" == typeof _this.props.children ? _this.props.children(_this.state.matches) : _this.state.matches ? _this.props.children : null;
        }), _this;
      }

      return _inherits(MediaQuery, _React$Component), _createClass(MediaQuery, null, [{
        key: "getDerivedStateFromProps",
        value: function value(props, state) {
          var query = getQuery(props);
          if (!query) throw new Error("Invalid or missing MediaQuery!");
          var values = getValues(props);
          if (query === state.query && values === state.values) return null;

          var mq = __WEBPACK_IMPORTED_MODULE_2_matchmediaquery___default()(query, values || {}, !!values);

          return {
            matches: mq.matches,
            mq: mq,
            query: query,
            values: values
          };
        }
      }]), MediaQuery;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

    _defineProperty(MediaQuery, "displayName", "MediaQuery"), _defineProperty(MediaQuery, "defaultProps", {
      values: null
    });
  }, function (module, exports) {
    module.exports = __WEBPACK_EXTERNAL_MODULE_6__;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    !function () {
      function isValidElementType(type) {
        return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
      }

      function typeOf(object) {
        if ("object" == typeof object && null !== object) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
      }

      function isAsyncMode(object) {
        return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, lowPriorityWarning$1(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      Object.defineProperty(exports, "__esModule", {
        value: !0
      });

      var hasSymbol = "function" == typeof Symbol && Symbol["for"],
          REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]("react.element") : 60103,
          REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]("react.portal") : 60106,
          REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]("react.fragment") : 60107,
          REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]("react.strict_mode") : 60108,
          REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]("react.profiler") : 60114,
          REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]("react.provider") : 60109,
          REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]("react.context") : 60110,
          REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]("react.async_mode") : 60111,
          REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]("react.concurrent_mode") : 60111,
          REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]("react.forward_ref") : 60112,
          REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]("react.suspense") : 60113,
          REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]("react.memo") : 60115,
          REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]("react.lazy") : 60116,
          lowPriorityWarning = function lowPriorityWarning() {},
          printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0,
            message = "Warning: " + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        "undefined" != typeof console && console.warn(message);

        try {
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (void 0 === format) throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(void 0, [format].concat(args));
        }
      };

      var lowPriorityWarning$1 = lowPriorityWarning,
          AsyncMode = REACT_ASYNC_MODE_TYPE,
          ConcurrentMode = REACT_CONCURRENT_MODE_TYPE,
          ContextConsumer = REACT_CONTEXT_TYPE,
          ContextProvider = REACT_PROVIDER_TYPE,
          Element = REACT_ELEMENT_TYPE,
          ForwardRef = REACT_FORWARD_REF_TYPE,
          Fragment = REACT_FRAGMENT_TYPE,
          Lazy = REACT_LAZY_TYPE,
          Memo = REACT_MEMO_TYPE,
          Portal = REACT_PORTAL_TYPE,
          Profiler = REACT_PROFILER_TYPE,
          StrictMode = REACT_STRICT_MODE_TYPE,
          Suspense = REACT_SUSPENSE_TYPE,
          hasWarnedAboutDeprecatedIsAsyncMode = !1;
      exports.typeOf = typeOf, exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isValidElementType = isValidElementType, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense;
    }();
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var ReactIs = __webpack_require__(1),
        assign = __webpack_require__(9),
        ReactPropTypesSecret = __webpack_require__(2),
        checkPropTypes = __webpack_require__(10),
        has = Function.call.bind(Object.prototype.hasOwnProperty),
        printWarning = function printWarning() {};

    printWarning = function printWarning(text) {
      var message = "Warning: " + text;
      "undefined" != typeof console && console.error(message);

      try {
        throw new Error(message);
      } catch (x) {}
    }, module.exports = function (isValidElement, throwOnDirectAccess) {
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if ("function" == typeof iteratorFn) return iteratorFn;
      }

      function is(x, y) {
        return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
      }

      function PropTypeError(message) {
        this.message = message, this.stack = "";
      }

      function createChainableTypeChecker(validate) {
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
              throw err.name = "Invariant Violation", err;
            }

            if ("undefined" != typeof console) {
              var cacheKey = componentName + ":" + propName;
              !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
            }
          }

          return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
        }

        var manualPropTypeCallCache = {},
            manualPropTypeWarningCount = 0,
            chainedCheckType = checkType.bind(null, !1);
        return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          var propValue = props[propName];

          if (!Array.isArray(propValue)) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
          }

          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) return error;
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        function validate(props, propName, componentName, location, propFullName) {
          for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) return null;
          }

          var valuesString = JSON.stringify(expectedValues, function (key, value) {
            return "symbol" === getPreciseType(value) ? String(value) : value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
        }

        return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), emptyFunctionThatReturnsNull);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");

          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) return error;
            }
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
          }

          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
        }

        if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), emptyFunctionThatReturnsNull;

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), emptyFunctionThatReturnsNull;
        }

        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");

          for (var key in shapeTypes) {
            var checker = shapeTypes[key];

            if (checker) {
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) return error;
            }
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName],
              propType = getPropType(propValue);
          if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
          var allKeys = assign({}, props[propName], shapeTypes);

          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) return error;
          }

          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return !0;

          case "boolean":
            return !propValue;

          case "object":
            if (Array.isArray(propValue)) return propValue.every(isNode);
            if (null === propValue || isValidElement(propValue)) return !0;
            var iteratorFn = getIteratorFn(propValue);
            if (!iteratorFn) return !1;
            var step,
                iterator = iteratorFn.call(propValue);

            if (iteratorFn !== propValue.entries) {
              for (; !(step = iterator.next()).done;) {
                if (!isNode(step.value)) return !1;
              }
            } else for (; !(step = iterator.next()).done;) {
              var entry = step.value;
              if (entry && !isNode(entry[1])) return !1;
            }

            return !0;

          default:
            return !1;
        }
      }

      function isSymbol(propType, propValue) {
        return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
      }

      function getPropType(propValue) {
        var propType = typeof propValue;
        return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
      }

      function getPreciseType(propValue) {
        if (void 0 === propValue || null === propValue) return "" + propValue;
        var propType = getPropType(propValue);

        if ("object" === propType) {
          if (propValue instanceof Date) return "date";
          if (propValue instanceof RegExp) return "regexp";
        }

        return propType;
      }

      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);

        switch (type) {
          case "array":
          case "object":
            return "an " + type;

          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;

          default:
            return type;
        }
      }

      function getClassName(propValue) {
        return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
      }

      var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator,
          FAUX_ITERATOR_SYMBOL = "@@iterator",
          ANONYMOUS = "<<anonymous>>",
          ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: function () {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }(),
        arrayOf: createArrayOfTypeChecker,
        element: function () {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!isValidElement(propValue)) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }(),
        elementType: function () {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];

            if (!ReactIs.isValidElementType(propValue)) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
            }

            return null;
          }

          return createChainableTypeChecker(validate);
        }(),
        instanceOf: createInstanceTypeChecker,
        node: function () {
          function validate(props, propName, componentName, location, propFullName) {
            return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
          }

          return createChainableTypeChecker(validate);
        }(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    };
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function toObject(val) {
      if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(val);
    }
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */


    var getOwnPropertySymbols = Object.getOwnPropertySymbols,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        propIsEnumerable = Object.prototype.propertyIsEnumerable;
    module.exports = function () {
      try {
        if (!Object.assign) return !1;
        var test1 = new String("abc");
        if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;

        for (var test2 = {}, i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }

        if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        }).join("")) return !1;
        var test3 = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (letter) {
          test3[letter] = letter;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
      } catch (err) {
        return !1;
      }
    }() ? Object.assign : function (target, source) {
      for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          hasOwnProperty.call(from, key) && (to[key] = from[key]);
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);

          for (var i = 0; i < symbols.length; i++) {
            propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
          }
        }
      }

      return to;
    };
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;

          try {
            if ("function" != typeof typeSpecs[typeSpecName]) {
              var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
              throw err.name = "Invariant Violation", err;
            }

            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }

          if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = !0;
            var stack = getStack ? getStack() : "";
            printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
          }
        }
      }
    }

    var printWarning = function printWarning() {},
        ReactPropTypesSecret = __webpack_require__(2),
        loggedTypeFailures = {},
        has = Function.call.bind(Object.prototype.hasOwnProperty);

    printWarning = function printWarning(text) {
      var message = "Warning: " + text;
      "undefined" != typeof console && console.error(message);

      try {
        throw new Error(message);
      } catch (x) {}
    }, checkPropTypes.resetWarningCache = function () {
      loggedTypeFailures = {};
    }, module.exports = checkPropTypes;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function Mql(query, values, forceStatic) {
      function addListener(listener) {
        mql && mql.addListener(listener);
      }

      function removeListener(listener) {
        mql && mql.removeListener(listener);
      }

      function update(evt) {
        self.matches = evt.matches, self.media = evt.media;
      }

      function dispose() {
        mql && mql.removeListener(update);
      }

      var self = this;

      if (dynamicMatch && !forceStatic) {
        var mql = dynamicMatch.call(window, query);
        this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
      } else this.matches = staticMatch(query, values), this.media = query;

      this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
    }

    function matchMedia(query, values, forceStatic) {
      return new Mql(query, values, forceStatic);
    }

    var staticMatch = __webpack_require__(12).match,
        dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;

    module.exports = matchMedia;
  }, function (module, exports, __webpack_require__) {
    "use strict";

    function matchQuery(mediaQuery, values) {
      return parseQuery(mediaQuery).some(function (query) {
        var inverse = query.inverse,
            typeMatch = "all" === query.type || values.type === query.type;
        if (typeMatch && inverse || !typeMatch && !inverse) return !1;
        var expressionsMatch = query.expressions.every(function (expression) {
          var feature = expression.feature,
              modifier = expression.modifier,
              expValue = expression.value,
              value = values[feature];
          if (!value) return !1;

          switch (feature) {
            case "orientation":
            case "scan":
              return value.toLowerCase() === expValue.toLowerCase();

            case "width":
            case "height":
            case "device-width":
            case "device-height":
              expValue = toPx(expValue), value = toPx(value);
              break;

            case "resolution":
              expValue = toDpi(expValue), value = toDpi(value);
              break;

            case "aspect-ratio":
            case "device-aspect-ratio":
            case "device-pixel-ratio":
              expValue = toDecimal(expValue), value = toDecimal(value);
              break;

            case "grid":
            case "color":
            case "color-index":
            case "monochrome":
              expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
          }

          switch (modifier) {
            case "min":
              return value >= expValue;

            case "max":
              return value <= expValue;

            default:
              return value === expValue;
          }
        });
        return expressionsMatch && !inverse || !expressionsMatch && inverse;
      });
    }

    function parseQuery(mediaQuery) {
      return mediaQuery.split(",").map(function (query) {
        query = query.trim();
        var captures = query.match(RE_MEDIA_QUERY),
            modifier = captures[1],
            type = captures[2],
            expressions = captures[3] || "",
            parsed = {};
        return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function (expression) {
          var captures = expression.match(RE_MQ_EXPRESSION),
              feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
          return {
            modifier: feature[1],
            feature: feature[2],
            value: captures[2]
          };
        }), parsed;
      });
    }

    function toDecimal(ratio) {
      var numbers,
          decimal = Number(ratio);
      return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), decimal;
    }

    function toDpi(resolution) {
      var value = parseFloat(resolution);

      switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
        case "dpcm":
          return value / 2.54;

        case "dppx":
          return 96 * value;

        default:
          return value;
      }
    }

    function toPx(length) {
      var value = parseFloat(length);

      switch (String(length).match(RE_LENGTH_UNIT)[1]) {
        case "em":
        case "rem":
          return 16 * value;

        case "cm":
          return 96 * value / 2.54;

        case "mm":
          return 96 * value / 2.54 / 10;

        case "in":
          return 96 * value;

        case "pt":
          return 72 * value;

        case "pc":
          return 72 * value / 12;

        default:
          return value;
      }
    }

    exports.match = matchQuery, exports.parse = parseQuery;
    var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
        RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
        RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/,
        RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/,
        RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function keyVal(k, v) {
      var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
      return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? k : !1 === v ? negate(k) : "(".concat(realKey, ": ").concat(v, ")");
    }

    function join(conds) {
      return conds.join(" and ");
    }

    var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(4),
        negate = function negate(cond) {
      return "not ".concat(cond);
    };

    __webpack_exports__.a = function (obj) {
      var rules = [];
      return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function (k) {
        var v = obj[k];
        null != v && rules.push(keyVal(k, v));
      }), join(rules);
    };
  }]);
});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault=function preferDefault(m){return m&&m.default||m;};exports.components={"component---node-modules-ocular-gatsby-src-templates-index-jsx":function componentNodeModulesOcularGatsbySrcTemplatesIndexJsx(){return __webpack_require__.e(/* import() | component---node-modules-ocular-gatsby-src-templates-index-jsx */ 6).then(__webpack_require__.bind(null, 292));},"component---node-modules-ocular-gatsby-src-templates-doc-page-markdown-jsx":function componentNodeModulesOcularGatsbySrcTemplatesDocPageMarkdownJsx(){return __webpack_require__.e(/* import() | component---node-modules-ocular-gatsby-src-templates-doc-page-markdown-jsx */ 4).then(__webpack_require__.bind(null, 287));},"component---node-modules-ocular-gatsby-src-templates-examples-jsx":function componentNodeModulesOcularGatsbySrcTemplatesExamplesJsx(){return __webpack_require__.e(/* import() | component---node-modules-ocular-gatsby-src-templates-examples-jsx */ 5).then(__webpack_require__.bind(null, 288));},"component---examples-benchmarks-app-js":function componentExamplesBenchmarksAppJs(){return Promise.all(/* import() | component---examples-benchmarks-app-js */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 291));},"component---node-modules-ocular-gatsby-src-templates-search-jsx":function componentNodeModulesOcularGatsbySrcTemplatesSearchJsx(){return __webpack_require__.e(/* import() | component---node-modules-ocular-gatsby-src-templates-search-jsx */ 7).then(__webpack_require__.bind(null, 290));}};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(14);
var has = __webpack_require__(36);
var cof = __webpack_require__(50);
var inheritIfRequired = __webpack_require__(118);
var toPrimitive = __webpack_require__(76);
var fails = __webpack_require__(22);
var gOPN = __webpack_require__(68).f;
var gOPD = __webpack_require__(96).f;
var dP = __webpack_require__(24).f;
var $trim = __webpack_require__(153).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(62)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(20) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(28)(global, NUMBER, $Number);
}


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(40);
var $export = __webpack_require__(7);
var toObject = __webpack_require__(30);
var call = __webpack_require__(143);
var isArrayIter = __webpack_require__(111);
var toLength = __webpack_require__(26);
var createProperty = __webpack_require__(222);
var getIterFn = __webpack_require__(112);

$export($export.S + $export.F * !__webpack_require__(95)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 133 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteConfigProvider; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Using React context to share common query data with all pages.
// Per recommendations in
// https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
// Context.js
var defaultContextValue={initialized:false,config:{},tableOfContents:null,theme:{},// For passing data upwards
data:{},set:function set(){}};var _React$createContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(defaultContextValue),Provider=_React$createContext.Provider,Consumer=_React$createContext.Consumer;var WebsiteConfigProvider=/*#__PURE__*/function(_React$Component){_inheritsLoose(WebsiteConfigProvider,_React$Component);function WebsiteConfigProvider(props){var _this;_this=_React$Component.call(this,props)||this;_this.setData=_this.setData.bind(_assertThisInitialized(_this));_this.state=Object.assign({},defaultContextValue,{},props.value,{set:_this.setData});return _this;}var _proto=WebsiteConfigProvider.prototype;_proto.setData=function setData(newData){this.setState(function(state){return{data:Object.assign({},state.data,{},newData)};});};_proto.render=function render(){var children=this.props.children;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Provider,{value:this.state},children);};return WebsiteConfigProvider;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["b"] = (Consumer);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(92);
var toLength = __webpack_require__(26);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var inheritIfRequired = __webpack_require__(118);
var dP = __webpack_require__(24).f;
var gOPN = __webpack_require__(68).f;
var isRegExp = __webpack_require__(117);
var $flags = __webpack_require__(89);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(20) && (!CORRECT_NEW || __webpack_require__(22)(function () {
  re2[__webpack_require__(15)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(28)(global, 'RegExp', $RegExp);
}

__webpack_require__(94)('RegExp');


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(23);
var sameValue = __webpack_require__(138);
var regExpExec = __webpack_require__(86);

// @@search logic
__webpack_require__(88)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 138 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(20) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(106)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46);
var defined = __webpack_require__(60);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(20);
var getKeys = __webpack_require__(54);
var gOPS = __webpack_require__(110);
var pIE = __webpack_require__(77);
var toObject = __webpack_require__(30);
var IObject = __webpack_require__(90);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(22)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(36);
var toIObject = __webpack_require__(47);
var arrayIndexOf = __webpack_require__(91)(false);
var IE_PROTO = __webpack_require__(108)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(23);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(40);
var invoke = __webpack_require__(145);
var html = __webpack_require__(146);
var cel = __webpack_require__(106);
var global = __webpack_require__(14);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(50)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 145 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(14).document;
module.exports = document && document.documentElement;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(49);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(36);
var toObject = __webpack_require__(30);
var IE_PROTO = __webpack_require__(108)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var core = __webpack_require__(51);
var LIBRARY = __webpack_require__(52);
var wksExt = __webpack_require__(151);
var defineProperty = __webpack_require__(24).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(15);


/***/ }),
/* 152 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
var defined = __webpack_require__(60);
var fails = __webpack_require__(22);
var spaces = __webpack_require__(207);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(21);
var anObject = __webpack_require__(23);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(40)(Function.call, __webpack_require__(96).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugEngine", function() { return DebugEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevConsumer", function() { return DevConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyletron", function() { return useStyletron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyled", function() { return createStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTransform", function() { return withTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyle", function() { return withStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyleDeep", function() { return withStyleDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withWrapper", function() { return withWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoComposeShallow", function() { return autoComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoComposeDeep", function() { return autoComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticComposeShallow", function() { return staticComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticComposeDeep", function() { return staticComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicComposeShallow", function() { return dynamicComposeShallow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicComposeDeep", function() { return dynamicComposeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShallowMergeReducer", function() { return createShallowMergeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeepMergeReducer", function() { return createDeepMergeReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeStatic", function() { return composeStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeDynamic", function() { return composeDynamic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyledElementComponent", function() { return createStyledElementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveStyle", function() { return resolveStyle; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styletron_standard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79);














/* eslint-env browser */

/* global module */

function addDebugMetadata(instance, stackIndex) {
  var _ref = new Error("stacktrace source"),
      stack = _ref.stack,
      stacktrace = _ref.stacktrace,
      message = _ref.message;

  instance.debug = {
    stackInfo: {
      stack: stack,
      stacktrace: stacktrace,
      message: message
    },
    stackIndex: stackIndex
  };
} // DEVTOOLS SETUP


var setupDevtoolsExtension = function setupDevtoolsExtension() {
  var atomicMap = {};
  var extensionsMap = new Map();
  var stylesMap = new Map();

  var getStyles = function getStyles(className) {
    var styles = {};

    if (typeof className !== "string") {
      return styles;
    }

    if (stylesMap.has(className)) {
      styles.styles = stylesMap.get(className);
      var classList = className.split(" ");

      if (classList.length) {
        var classes = {};
        classList.forEach(function (singleClassName) {
          classes[singleClassName] = atomicMap[singleClassName];
        });
        styles.classes = classes;
      }

      if (extensionsMap.has(className)) {
        var extension = extensionsMap.get(className);
        styles["extends"] = extension;
      }

      return styles;
    }
  };

  window.__STYLETRON_DEVTOOLS__ = {
    atomicMap: atomicMap,
    extensionsMap: extensionsMap,
    stylesMap: stylesMap,
    getStyles: getStyles
  };
};

var BrowserDebugEngine =
/*#__PURE__*/
function () {
  function BrowserDebugEngine(worker) {
    if (!worker) {
      var workerBlob = new Blob(["importScripts(\"https://unpkg.com/css-to-js-sourcemap-worker@2.0.5/worker.js\")"], {
        type: "application/javascript"
      });
      worker = new Worker(URL.createObjectURL(workerBlob));
      worker.postMessage({
        id: "init_wasm",
        url: "https://unpkg.com/css-to-js-sourcemap-worker@2.0.5/mappings.wasm"
      });
      worker.postMessage({
        id: "set_render_interval",
        interval: 120
      });

      if (false) {}
    }

    this.worker = worker;
    this.counter = 0;

    this.worker.onmessage = function (msg) {
      var _msg$data = msg.data,
          id = _msg$data.id,
          css = _msg$data.css;

      if (id === "render_css" && css) {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      }
    };
  }

  var _proto = BrowserDebugEngine.prototype;

  _proto.debug = function debug(_ref2) {
    var stackIndex = _ref2.stackIndex,
        stackInfo = _ref2.stackInfo;
    var className = "__debug-" + this.counter++;
    this.worker.postMessage({
      id: "add_mapped_class",
      className: className,
      stackInfo: stackInfo,
      stackIndex: stackIndex
    });
    return className;
  };

  return BrowserDebugEngine;
}();

var DebugEngine = BrowserDebugEngine;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/* eslint-env browser */

/* eslint-disable no-unused-vars, no-redeclare, no-shadow */


var noopEngine = {
  renderStyle: function renderStyle() {
    return "";
  },
  renderKeyframes: function renderKeyframes() {
    return "";
  },
  renderFontFace: function renderFontFace() {
    return "";
  }
};
var StyletronContext = Object(react__WEBPACK_IMPORTED_MODULE_12__["createContext"])(noopEngine);
var HydrationContext = Object(react__WEBPACK_IMPORTED_MODULE_12__["createContext"])(false);
var DebugEngineContext = Object(react__WEBPACK_IMPORTED_MODULE_12__["createContext"])();
var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_12__["createContext"])();

var DevProvider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DevProvider, _React$Component);

  function DevProvider(props) {
    var _this;

    _this = _React$Component.call(this) || this;
    _this.state = {
      hydrating: Boolean(props.debugAfterHydration)
    };
    return _this;
  }

  var _proto = DevProvider.prototype;

  _proto.componentDidMount = function componentDidMount() {
    {
      if (this.state.hydrating === true) {
        this.setState({
          hydrating: false
        });
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_12__["createElement"])(StyletronContext.Provider, {
      value: this.props.value
    }, Object(react__WEBPACK_IMPORTED_MODULE_12__["createElement"])(DebugEngineContext.Provider, {
      value: this.props.debug
    }, Object(react__WEBPACK_IMPORTED_MODULE_12__["createElement"])(HydrationContext.Provider, {
      value: this.state.hydrating
    }, this.props.children)));
  };

  return DevProvider;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

var Provider =  false ? undefined : StyletronContext.Provider;

if (false) {} // TODO: more precise types


function DevConsumer(props) {
  return Object(react__WEBPACK_IMPORTED_MODULE_12__["createElement"])(StyletronContext.Consumer, null, function (styletronEngine) {
    return Object(react__WEBPACK_IMPORTED_MODULE_12__["createElement"])(DebugEngineContext.Consumer, null, function (debugEngine) {
      return Object(react__WEBPACK_IMPORTED_MODULE_12__["createElement"])(HydrationContext.Consumer, null, function (hydrating) {
        return props.children(styletronEngine, debugEngine, hydrating);
      });
    });
  });
}

var Consumer =  false ? undefined : StyletronContext.Consumer;

function checkNoopEngine(engine) {
  // if no engine provided, we default to no-op, handy for tests
  // however, print a warning in other envs
  if (true) {
    engine === noopEngine && // eslint-disable-next-line no-console
    console.warn( false ? undefined : "Styletron Provider is not set up. Defaulting to no-op.");
  }
}

function useStyletron() {
  var styletronEngine = Object(react__WEBPACK_IMPORTED_MODULE_12__["useContext"])(StyletronContext);
  var debugEngine = Object(react__WEBPACK_IMPORTED_MODULE_12__["useContext"])(DebugEngineContext);
  var hydrating = Object(react__WEBPACK_IMPORTED_MODULE_12__["useContext"])(HydrationContext);
  checkNoopEngine(styletronEngine);
  return [function css(style) {
    var className = Object(styletron_standard__WEBPACK_IMPORTED_MODULE_13__["driver"])(style, styletronEngine);

    if (true) {
      return className;
    }

    var _ref = new Error("stacktrace source"),
        stack = _ref.stack,
        message = _ref.message;

    var debugClassName = Object(react__WEBPACK_IMPORTED_MODULE_12__["useMemo"])(function () {
      if (debugEngine && !hydrating) {
        return debugEngine.debug({
          stackInfo: {
            stack: stack,
            message: message
          },
          stackIndex: 1
        });
      }

      return "";
    }, [debugEngine, hydrating]);
    return debugClassName ? debugClassName + " " + className : className;
  }];
}

function createStyled(_ref2) {
  var getInitialStyle$$1 = _ref2.getInitialStyle,
      driver$$1 = _ref2.driver,
      wrapper = _ref2.wrapper;

  function styled(base, styleArg) {
    if (false) {}

    var baseStyletron = {
      reducers: [],
      base: base,
      driver: driver$$1,
      getInitialStyle: getInitialStyle$$1,
      wrapper: wrapper
    };

    if (false) {}

    return createStyledElementComponent(autoComposeShallow(baseStyletron, styleArg));
  }

  return styled;
}

var styled = createStyled({
  getInitialStyle: styletron_standard__WEBPACK_IMPORTED_MODULE_13__["getInitialStyle"],
  driver: styletron_standard__WEBPACK_IMPORTED_MODULE_13__["driver"],
  wrapper: function wrapper(Component$$1) {
    return Component$$1;
  }
});

function withTransform(component, transformer) {
  var styletron = component.__STYLETRON__;

  if (false) {}

  return createStyledElementComponent(composeDynamic(styletron, transformer));
}

var withStyle = withStyleDeep;

function withStyleDeep(component, styleArg) {
  var styletron = component.__STYLETRON__;

  if (false) {}

  if (false) {} else {
    return createStyledElementComponent(autoComposeDeep(styletron, styleArg));
  }
}

function withWrapper(component, wrapper) {
  var styletron = component.__STYLETRON__;

  if (false) {}

  var composed = {
    getInitialStyle: styletron.getInitialStyle,
    base: styletron.base,
    driver: styletron.driver,
    wrapper: wrapper,
    reducers: styletron.reducers
  };

  if (false) {}

  return createStyledElementComponent(composed);
}

function autoComposeShallow(styletron, styleArg) {
  if (typeof styleArg === "function") {
    return dynamicComposeShallow(styletron, styleArg);
  }

  return staticComposeShallow(styletron, styleArg);
}

function addExtension(composed, component, styleArg) {
  return Object.assign({}, composed, {
    ext: {
      "with": styleArg,
      name: component.displayName,
      base: component.__STYLETRON__.base,
      getInitialStyle: component.__STYLETRON__.reducers.length ? component.__STYLETRON__.reducers[0].reducer : component.__STYLETRON__.getInitialStyle
    }
  });
}

function autoComposeDeep(styletron, styleArg) {
  if (typeof styleArg === "function") {
    return dynamicComposeDeep(styletron, styleArg);
  }

  return staticComposeDeep(styletron, styleArg);
}

function staticComposeShallow(styletron, style) {
  return composeStatic(styletron, createShallowMergeReducer(style));
}

function staticComposeDeep(styletron, style) {
  return composeStatic(styletron, createDeepMergeReducer(style));
}

function dynamicComposeShallow(styletron, styleFn) {
  return composeDynamic(styletron, function (style, props) {
    return shallowMerge(style, styleFn(props));
  });
}

function dynamicComposeDeep(styletron, styleFn) {
  return composeDynamic(styletron, function (style, props) {
    return deepMerge(style, styleFn(props));
  });
}

function createShallowMergeReducer(style) {
  return {
    reducer: function reducer(inputStyle) {
      return shallowMerge(inputStyle, style);
    },
    assignmentCommutative: true,
    factory: createShallowMergeReducer,
    style: style
  };
}

function createDeepMergeReducer(style) {
  return {
    reducer: function reducer(inputStyle) {
      return deepMerge(inputStyle, style);
    },
    assignmentCommutative: true,
    factory: createDeepMergeReducer,
    style: style
  };
}

function composeStatic(styletron, reducerContainer) {
  if (styletron.reducers.length === 0) {
    var style = reducerContainer.reducer(styletron.getInitialStyle());
    var result = {
      reducers: styletron.reducers,
      base: styletron.base,
      driver: styletron.driver,
      wrapper: styletron.wrapper,
      getInitialStyle: function getInitialStyle$$1() {
        return style;
      }
    };

    if (false) {}

    return result;
  } else {
    var last = styletron.reducers[0];

    if (last.assignmentCommutative === true && reducerContainer.assignmentCommutative === true) {
      var composed = reducerContainer.reducer(last.style);
      var _result = {
        getInitialStyle: styletron.getInitialStyle,
        base: styletron.base,
        driver: styletron.driver,
        wrapper: styletron.wrapper,
        reducers: [last.factory(composed)].concat(styletron.reducers.slice(1))
      };

      if (false) {}

      return _result;
    }

    return composeDynamic(styletron, reducerContainer.reducer);
  }
}

function composeDynamic(styletron, reducer) {
  var composed = {
    getInitialStyle: styletron.getInitialStyle,
    base: styletron.base,
    driver: styletron.driver,
    wrapper: styletron.wrapper,
    reducers: [{
      assignmentCommutative: false,
      reducer: reducer
    }].concat(styletron.reducers)
  };

  if (false) {}

  return composed;
}

function createStyledElementComponent(styletron) {
  var reducers = styletron.reducers,
      base = styletron.base,
      driver$$1 = styletron.driver,
      wrapper = styletron.wrapper,
      getInitialStyle$$1 = styletron.getInitialStyle,
      ext = styletron.ext;

  if (false) { var debugStackInfo, debugStackIndex; }

  if (false) { var debugClassName; }

  var StyledElement = Object(react__WEBPACK_IMPORTED_MODULE_12__["forwardRef"])(function (props, ref) {
    return Object(react__WEBPACK_IMPORTED_MODULE_12__["createElement"])(Consumer, null, function (styletron, debugEngine, hydrating) {
      checkNoopEngine(styletron);
      var elementProps = omitPrefixedKeys(props);
      var style = resolveStyle(getInitialStyle$$1, reducers, props);

      if (props.$style) {
        if (typeof props.$style === "function") {
          style = deepMerge(style, props.$style(props));
        } else {
          style = deepMerge(style, props.$style);
        }
      }

      var styleClassString = driver$$1(style, styletron);
      var Element = props.$as ? props.$as : base;
      elementProps.className = props.className ? props.className + " " + styleClassString : styleClassString;

      if (false) { var joined; }

      if (false) {}

      if (props.$ref) {
        // eslint-disable-next-line no-console
        console.warn("The prop `$ref` has been deprecated. Use `ref` instead. Refs are now forwarded with React.forwardRef.");
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_12__["createElement"])(Element, _extends({}, elementProps, {
        ref: ref || props.$ref
      }));
    });
  });
  var Wrapped = wrapper(StyledElement);
  Wrapped.__STYLETRON__ = {
    base: base,
    reducers: reducers,
    driver: driver$$1,
    wrapper: wrapper,
    getInitialStyle: getInitialStyle$$1
  };

  if (false) { var displayName; }

  return Wrapped;
} // Utility functions


function resolveStyle(getInitialStyle$$1, reducers, props) {
  var result = getInitialStyle$$1();
  var i = reducers.length;

  while (i--) {
    // Cast to allow passing unused props param in case of static reducer
    var reducer = reducers[i].reducer;
    result = reducer(result, props);
  }

  return result;
}

function isObject(x) {
  return _typeof(x) === "object" && x !== null;
}

function omitPrefixedKeys(source) {
  var result = {};

  for (var key in source) {
    if (key[0] !== "$") {
      result[key] = source[key];
    }
  }

  return result;
}

function deepMerge(a, b) {
  var result = assign({}, a);

  for (var key in b) {
    var val = b[key];

    if (isObject(val) && isObject(a[key])) {
      result[key] = deepMerge(a[key], val);
    } else {
      result[key] = val;
    }
  }

  return result;
}

function shallowMerge(a, b) {
  return assign(assign({}, a), b);
}

function assign(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }

  return target;
}



/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(24).f;
var create = __webpack_require__(62);
var redefineAll = __webpack_require__(66);
var ctx = __webpack_require__(40);
var anInstance = __webpack_require__(64);
var forOf = __webpack_require__(93);
var $iterDefine = __webpack_require__(114);
var step = __webpack_require__(148);
var setSpecies = __webpack_require__(94);
var DESCRIPTORS = __webpack_require__(20);
var fastKey = __webpack_require__(73).fastKey;
var validate = __webpack_require__(55);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(20);
var LIBRARY = __webpack_require__(52);
var $typed = __webpack_require__(119);
var hide = __webpack_require__(34);
var redefineAll = __webpack_require__(66);
var fails = __webpack_require__(22);
var anInstance = __webpack_require__(64);
var toInteger = __webpack_require__(46);
var toLength = __webpack_require__(26);
var toIndex = __webpack_require__(158);
var gOPN = __webpack_require__(68).f;
var dP = __webpack_require__(24).f;
var arrayFill = __webpack_require__(135);
var setToStringTag = __webpack_require__(67);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(46);
var toLength = __webpack_require__(26);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: fix lint errors in this file
/* eslint-disable */ // Effectively does the same job as `gatsby-layout-plugin`
// See https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-layout
//
// By wrapping pages this way the top-level layout component does not get unmounted
// between page changes
var React=__webpack_require__(0);var Layout=__webpack_require__(284).default;// eslint-disable-next-line react/prop-types, react/display-name
module.exports=function(_ref){var element=_ref.element,props=_ref.props;return React.createElement(Layout,props,element);};/* eslint-enable */

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

__webpack_require__(12);

var warning = function warning() {};

if (false) {}

module.exports = warning;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(true){module.exports=preferDefault(__webpack_require__(221));}else{}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(156);
var validate = __webpack_require__(55);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(97)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(19);

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = exports.TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src"
};
var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  "class": "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = exports.HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(18);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LightTheme: true,
  createTheme: true,
  lightThemePrimitives: true,
  darkThemePrimitives: true,
  LightThemeMove: true,
  DarkThemeMove: true,
  DarkTheme: true
};
Object.defineProperty(exports, "createTheme", {
  enumerable: true,
  get: function get() {
    return _creator["default"];
  }
});
Object.defineProperty(exports, "lightThemePrimitives", {
  enumerable: true,
  get: function get() {
    return _lightThemePrimitives.primitives;
  }
});
Object.defineProperty(exports, "darkThemePrimitives", {
  enumerable: true,
  get: function get() {
    return _darkThemePrimitives.primitives;
  }
});
Object.defineProperty(exports, "LightThemeMove", {
  enumerable: true,
  get: function get() {
    return _lightThemeWithMove.LightThemeMove;
  }
});
Object.defineProperty(exports, "DarkThemeMove", {
  enumerable: true,
  get: function get() {
    return _darkThemeWithMove.DarkThemeMove;
  }
});
Object.defineProperty(exports, "DarkTheme", {
  enumerable: true,
  get: function get() {
    return _darkTheme.DarkTheme;
  }
});
exports.LightTheme = void 0;

var _creator = _interopRequireDefault(__webpack_require__(98));

var _lightThemePrimitives = __webpack_require__(166);

var _darkThemePrimitives = __webpack_require__(99);

var _lightThemeWithMove = __webpack_require__(229);

var _darkThemeWithMove = __webpack_require__(230);

var _darkTheme = __webpack_require__(231);

var _types = __webpack_require__(232);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var LightTheme = (0, _creator["default"])(_lightThemePrimitives.primitives, {
  name: 'light-theme'
});
exports.LightTheme = LightTheme;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(39);

__webpack_require__(44);

__webpack_require__(3);

__webpack_require__(17);

__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = deepMerge;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


function deepMerge(target) {
  target = target || {};
  var len = arguments.length <= 1 ? 0 : arguments.length - 1;
  var obj;
  var value;

  for (var i = 0; i < len; i++) {
    obj = (i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1]) || {};

    for (var key in obj) {
      if (_typeof(obj[key]) !== undefined) {
        value = obj[key];

        if (isCloneable(value)) {
          target[key] = deepMerge(target[key] || Array.isArray(value) && [] || {}, value);
        } else {
          target[key] = value;
        }
      }
    }
  }

  return target;
}
/* eslint-disable-next-line flowtype/no-weak-types */


function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primitives = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// color constants

var primitives = {
  primary50: '#EDF3FE',
  primary100: '#D2E0FC',
  primary200: '#9CBCF8',
  primary300: '#548BF4',
  primary400: '#276EF1',
  primary500: '#174EB6',
  primary600: '#123D90',
  primary700: '#0C2960',
  negative50: '#FDF0EF',
  negative100: '#FADBD7',
  negative200: '#F4AFA7',
  negative300: '#EB7567',
  negative400: '#E54937',
  negative500: '#AE372A',
  negative600: '#892C21',
  negative700: '#5C1D16',
  warning50: '#FEF3EC',
  warning100: '#FBE2CF',
  warning200: '#F6BA8B',
  warning300: '#F19248',
  warning400: '#ED6F0E',
  warning500: '#B4540B',
  warning600: '#8E4308',
  warning700: '#5F2C06',
  positive50: '#EBF8F2',
  positive100: '#CDEDDE',
  positive200: '#88D3B0',
  positive300: '#43B982',
  positive400: '#07A35A',
  positive500: '#057C44',
  positive600: '#046236',
  positive700: '#034124',
  mono100: '#FFFFFF',
  mono200: '#F7F7F7',
  mono300: '#F0F0F0',
  mono400: '#E5E5E5',
  mono500: '#CCCCCC',
  mono600: '#B3B3B3',
  mono700: '#999999',
  mono800: '#666666',
  mono900: '#333333',
  mono1000: '#000000',
  rating200: '#FFE1A5',
  rating400: '#FFC043',
  primaryFontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
};
exports.primitives = primitives;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _darkThemePrimitives = __webpack_require__(99);
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var WHITE = '#FFFFFF';
var _default = {
  colors: {
    // Semantic Colors
    white: WHITE,
    // Font Color
    colorPrimary: _darkThemePrimitives.primitives.mono100,
    colorSecondary: _darkThemePrimitives.primitives.mono200,
    // Background
    background: _darkThemePrimitives.primitives.mono1000,
    backgroundAlt: _darkThemePrimitives.primitives.mono700,
    backgroundInv: _darkThemePrimitives.primitives.mono100,
    // Foreground
    foreground: _darkThemePrimitives.primitives.mono100,
    foregroundAlt: _darkThemePrimitives.primitives.mono300,
    foregroundInv: _darkThemePrimitives.primitives.mono1000,
    // Borders
    border: _darkThemePrimitives.primitives.mono600,
    borderAlt: _darkThemePrimitives.primitives.mono700,
    borderFocus: _darkThemePrimitives.primitives.primary400,
    borderError: _darkThemePrimitives.primitives.negative400,
    // Buttons
    buttonPrimaryFill: _darkThemePrimitives.primitives.primary500,
    buttonPrimaryText: _darkThemePrimitives.primitives.mono100,
    buttonPrimaryHover: _darkThemePrimitives.primitives.primary600,
    buttonPrimaryActive: _darkThemePrimitives.primitives.primary700,
    buttonSecondaryFill: _darkThemePrimitives.primitives.mono600,
    buttonSecondaryText: _darkThemePrimitives.primitives.mono100,
    buttonSecondaryHover: _darkThemePrimitives.primitives.mono500,
    buttonSecondaryActive: _darkThemePrimitives.primitives.mono400,
    buttonTertiaryFill: _darkThemePrimitives.primitives.mono800,
    buttonTertiaryText: _darkThemePrimitives.primitives.mono100,
    buttonTertiaryHover: _darkThemePrimitives.primitives.mono700,
    buttonTertiaryActive: _darkThemePrimitives.primitives.mono600,
    buttonTertiarySelectedText: _darkThemePrimitives.primitives.mono100,
    buttonTertiarySelectedFill: _darkThemePrimitives.primitives.primary500,
    buttonMinimalFill: 'transparent',
    buttonMinimalText: _darkThemePrimitives.primitives.primary400,
    buttonMinimalHover: _darkThemePrimitives.primitives.mono800,
    buttonMinimalActive: _darkThemePrimitives.primitives.mono700,
    buttonDisabledFill: _darkThemePrimitives.primitives.mono700,
    buttonDisabledText: _darkThemePrimitives.primitives.mono500,
    // Breadcrumbs
    breadcrumbsText: _darkThemePrimitives.primitives.mono100,
    breadcrumbsSeparatorFill: _darkThemePrimitives.primitives.mono200,
    // Datepicker
    datepickerBackground: _darkThemePrimitives.primitives.mono600,
    datepickerDayFont: WHITE,
    datepickerDayFontDisabled: _darkThemePrimitives.primitives.mono100,
    datepickerDayPseudoSelected: _darkThemePrimitives.primitives.mono500,
    datepickerDayPseudoHighlighted: _darkThemePrimitives.primitives.mono600,
    // FileUploader
    fileUploaderBackgroundColor: _darkThemePrimitives.primitives.mono700,
    fileUploaderBackgroundColorActive: _darkThemePrimitives.primitives.mono600,
    fileUploaderBorderColorActive: _darkThemePrimitives.primitives.primary400,
    fileUploaderBorderColorDefault: _darkThemePrimitives.primitives.mono500,
    fileUploaderMessageColor: _darkThemePrimitives.primitives.mono100,
    // Links
    linkText: _darkThemePrimitives.primitives.primary300,
    linkVisited: _darkThemePrimitives.primitives.primary300,
    linkHover: _darkThemePrimitives.primitives.primary400,
    linkActive: _darkThemePrimitives.primitives.primary400,
    // List
    listHeaderFill: _darkThemePrimitives.primitives.mono600,
    listBodyFill: _darkThemePrimitives.primitives.mono700,
    listIconFill: _darkThemePrimitives.primitives.mono100,
    listBorder: _darkThemePrimitives.primitives.mono500,
    // ProgressSteps
    progressStepsIconActiveFill: _darkThemePrimitives.primitives.mono100,
    // Modal
    modalCloseColor: _darkThemePrimitives.primitives.mono300,
    modalCloseColorHover: _darkThemePrimitives.primitives.mono400,
    modalCloseColorFocus: _darkThemePrimitives.primitives.mono400,
    // Notification
    notificationPrimaryBackground: _darkThemePrimitives.primitives.primary700,
    notificationPrimaryText: _darkThemePrimitives.primitives.primary200,
    notificationPositiveBackground: _darkThemePrimitives.primitives.positive700,
    notificationPositiveText: _darkThemePrimitives.primitives.positive200,
    notificationWarningBackground: _darkThemePrimitives.primitives.warning700,
    notificationWarningText: _darkThemePrimitives.primitives.warning200,
    notificationNegativeBackground: _darkThemePrimitives.primitives.negative700,
    notificationNegativeText: _darkThemePrimitives.primitives.negative200,
    // Tag
    tagSolidRampUnit: '500',
    tagSolidHoverRampUnit: '500',
    tagSolidActiveRampUnit: '400',
    tagSolidDisabledRampUnit: '700',
    tagSolidFontRampUnit: '100',
    tagSolidFontHoverRampUnit: '100',
    tagLightRampUnit: '700',
    tagLightHoverRampUnit: '700',
    tagLightActiveRampUnit: '600',
    tagLightDisabledRampUnit: '700',
    tagLightFontRampUnit: '100',
    tagLightFontHoverRampUnit: '100',
    tagOutlinedRampUnit: '500',
    tagOutlinedHoverRampUnit: '400',
    tagOutlinedActiveRampUnit: '300',
    tagOutlinedDisabledRampUnit: '700',
    tagOutlinedFontRampUnit: '200',
    tagOutlinedFontHoverRampUnit: '700',
    tagFontDisabledRampUnit: '500',
    tagNeutralSolidBackground: _darkThemePrimitives.primitives.mono600,
    tagNeutralSolidHover: _darkThemePrimitives.primitives.mono600,
    tagNeutralSolidActive: _darkThemePrimitives.primitives.mono500,
    tagNeutralSolidDisabled: _darkThemePrimitives.primitives.mono700,
    tagNeutralSolidFont: _darkThemePrimitives.primitives.mono200,
    tagNeutralSolidFontHover: _darkThemePrimitives.primitives.mono200,
    tagNeutralLightBackground: _darkThemePrimitives.primitives.mono800,
    tagNeutralLightHover: _darkThemePrimitives.primitives.mono800,
    tagNeutralLightActive: _darkThemePrimitives.primitives.mono700,
    tagNeutralLightDisabled: _darkThemePrimitives.primitives.mono700,
    tagNeutralLightFont: _darkThemePrimitives.primitives.mono200,
    tagNeutralLightFontHover: _darkThemePrimitives.primitives.mono200,
    tagNeutralOutlinedBackground: _darkThemePrimitives.primitives.mono600,
    tagNeutralOutlinedHover: _darkThemePrimitives.primitives.mono500,
    tagNeutralOutlinedActive: _darkThemePrimitives.primitives.mono400,
    tagNeutralOutlinedDisabled: _darkThemePrimitives.primitives.mono700,
    tagNeutralOutlinedFont: _darkThemePrimitives.primitives.mono200,
    tagNeutralOutlinedFontHover: _darkThemePrimitives.primitives.mono900,
    tagNeutralFontDisabled: _darkThemePrimitives.primitives.mono500,
    tagPrimarySolidBackground: _darkThemePrimitives.primitives.primary500,
    tagPrimarySolidHover: _darkThemePrimitives.primitives.primary500,
    tagPrimarySolidActive: _darkThemePrimitives.primitives.primary400,
    tagPrimarySolidDisabled: _darkThemePrimitives.primitives.primary700,
    tagPrimarySolidFont: _darkThemePrimitives.primitives.primary100,
    tagPrimarySolidFontHover: _darkThemePrimitives.primitives.primary100,
    tagPrimaryLightBackground: _darkThemePrimitives.primitives.primary700,
    tagPrimaryLightHover: _darkThemePrimitives.primitives.primary700,
    tagPrimaryLightActive: _darkThemePrimitives.primitives.primary600,
    tagPrimaryLightDisabled: _darkThemePrimitives.primitives.primary700,
    tagPrimaryLightFont: _darkThemePrimitives.primitives.primary100,
    tagPrimaryLightFontHover: _darkThemePrimitives.primitives.primary100,
    tagPrimaryOutlinedBackground: _darkThemePrimitives.primitives.primary500,
    tagPrimaryOutlinedHover: _darkThemePrimitives.primitives.primary400,
    tagPrimaryOutlinedActive: _darkThemePrimitives.primitives.primary300,
    tagPrimaryOutlinedDisabled: _darkThemePrimitives.primitives.primary700,
    tagPrimaryOutlinedFont: _darkThemePrimitives.primitives.primary200,
    tagPrimaryOutlinedFontHover: _darkThemePrimitives.primitives.primary700,
    tagPrimaryFontDisabled: _darkThemePrimitives.primitives.primary500,
    tagPositiveSolidBackground: _darkThemePrimitives.primitives.positive500,
    tagPositiveSolidHover: _darkThemePrimitives.primitives.positive500,
    tagPositiveSolidActive: _darkThemePrimitives.primitives.positive400,
    tagPositiveSolidDisabled: _darkThemePrimitives.primitives.positive700,
    tagPositiveSolidFont: _darkThemePrimitives.primitives.positive100,
    tagPositiveSolidFontHover: _darkThemePrimitives.primitives.positive100,
    tagPositiveLightBackground: _darkThemePrimitives.primitives.positive700,
    tagPositiveLightHover: _darkThemePrimitives.primitives.positive700,
    tagPositiveLightActive: _darkThemePrimitives.primitives.positive600,
    tagPositiveLightDisabled: _darkThemePrimitives.primitives.positive700,
    tagPositiveLightFont: _darkThemePrimitives.primitives.positive100,
    tagPositiveLightFontHover: _darkThemePrimitives.primitives.positive100,
    tagPositiveOutlinedBackground: _darkThemePrimitives.primitives.positive500,
    tagPositiveOutlinedHover: _darkThemePrimitives.primitives.positive400,
    tagPositiveOutlinedActive: _darkThemePrimitives.primitives.positive300,
    tagPositiveOutlinedDisabled: _darkThemePrimitives.primitives.positive700,
    tagPositiveOutlinedFont: _darkThemePrimitives.primitives.positive200,
    tagPositiveOutlinedFontHover: _darkThemePrimitives.primitives.positive700,
    tagPositiveFontDisabled: _darkThemePrimitives.primitives.positive500,
    tagWarningSolidBackground: _darkThemePrimitives.primitives.warning500,
    tagWarningSolidHover: _darkThemePrimitives.primitives.warning500,
    tagWarningSolidActive: _darkThemePrimitives.primitives.warning400,
    tagWarningSolidDisabled: _darkThemePrimitives.primitives.warning700,
    tagWarningSolidFont: _darkThemePrimitives.primitives.warning100,
    tagWarningSolidFontHover: _darkThemePrimitives.primitives.warning100,
    tagWarningLightBackground: _darkThemePrimitives.primitives.warning700,
    tagWarningLightHover: _darkThemePrimitives.primitives.warning700,
    tagWarningLightActive: _darkThemePrimitives.primitives.warning600,
    tagWarningLightDisabled: _darkThemePrimitives.primitives.warning700,
    tagWarningLightFont: _darkThemePrimitives.primitives.warning100,
    tagWarningLightFontHover: _darkThemePrimitives.primitives.warning100,
    tagWarningOutlinedBackground: _darkThemePrimitives.primitives.warning500,
    tagWarningOutlinedHover: _darkThemePrimitives.primitives.warning400,
    tagWarningOutlinedActive: _darkThemePrimitives.primitives.warning300,
    tagWarningOutlinedDisabled: _darkThemePrimitives.primitives.warning700,
    tagWarningOutlinedFont: _darkThemePrimitives.primitives.warning200,
    tagWarningOutlinedFontHover: _darkThemePrimitives.primitives.warning700,
    tagWarningFontDisabled: _darkThemePrimitives.primitives.warning500,
    tagNegativeSolidBackground: _darkThemePrimitives.primitives.negative500,
    tagNegativeSolidHover: _darkThemePrimitives.primitives.negative500,
    tagNegativeSolidActive: _darkThemePrimitives.primitives.negative400,
    tagNegativeSolidDisabled: _darkThemePrimitives.primitives.negative700,
    tagNegativeSolidFont: _darkThemePrimitives.primitives.negative100,
    tagNegativeSolidFontHover: _darkThemePrimitives.primitives.negative100,
    tagNegativeLightBackground: _darkThemePrimitives.primitives.negative700,
    tagNegativeLightHover: _darkThemePrimitives.primitives.negative700,
    tagNegativeLightActive: _darkThemePrimitives.primitives.negative600,
    tagNegativeLightDisabled: _darkThemePrimitives.primitives.negative700,
    tagNegativeLightFont: _darkThemePrimitives.primitives.negative100,
    tagNegativeLightFontHover: _darkThemePrimitives.primitives.negative100,
    tagNegativeOutlinedBackground: _darkThemePrimitives.primitives.negative500,
    tagNegativeOutlinedHover: _darkThemePrimitives.primitives.negative400,
    tagNegativeOutlinedActive: _darkThemePrimitives.primitives.negative300,
    tagNegativeOutlinedDisabled: _darkThemePrimitives.primitives.negative700,
    tagNegativeOutlinedFont: _darkThemePrimitives.primitives.negative200,
    tagNegativeOutlinedFontHover: _darkThemePrimitives.primitives.negative700,
    tagNegativeFontDisabled: _darkThemePrimitives.primitives.negative500,
    // Table
    tableHeadBackgroundColor: _darkThemePrimitives.primitives.mono700,
    tableBackground: _darkThemePrimitives.primitives.mono800,
    tableStripedBackground: _darkThemePrimitives.primitives.mono700,
    tableFilter: _darkThemePrimitives.primitives.mono400,
    tableFilterHeading: _darkThemePrimitives.primitives.mono300,
    tableFilterBackground: _darkThemePrimitives.primitives.mono700,
    tableFilterFooterBackground: _darkThemePrimitives.primitives.mono800,
    // Tick
    tickFill: _darkThemePrimitives.primitives.mono1000,
    tickFillHover: _darkThemePrimitives.primitives.mono800,
    tickFillActive: _darkThemePrimitives.primitives.mono600,
    tickFillSelected: _darkThemePrimitives.primitives.primary500,
    tickFillSelectedHover: _darkThemePrimitives.primitives.primary600,
    tickFillSelectedHoverActive: _darkThemePrimitives.primitives.primary700,
    tickFillError: _darkThemePrimitives.primitives.negative700,
    tickFillErrorHover: _darkThemePrimitives.primitives.negative600,
    tickFillErrorHoverActive: _darkThemePrimitives.primitives.negative500,
    tickFillErrorSelected: _darkThemePrimitives.primitives.negative500,
    tickFillErrorSelectedHover: _darkThemePrimitives.primitives.negative600,
    tickFillErrorSelectedHoverActive: _darkThemePrimitives.primitives.negative700,
    tickFillDisabled: _darkThemePrimitives.primitives.mono700,
    tickBorder: _darkThemePrimitives.primitives.mono300,
    tickBorderError: _darkThemePrimitives.primitives.negative400,
    tickMarkFill: _darkThemePrimitives.primitives.mono100,
    tickMarkFillDisabled: _darkThemePrimitives.primitives.mono400,
    // Slider/Toggle
    sliderTrackFill: _darkThemePrimitives.primitives.mono600,
    sliderTrackFillHover: _darkThemePrimitives.primitives.mono500,
    sliderTrackFillActive: _darkThemePrimitives.primitives.mono400,
    sliderTrackFillSelected: _darkThemePrimitives.primitives.primary500,
    sliderTrackFillSelectedActive: _darkThemePrimitives.primitives.primary600,
    sliderTrackFillSelectedHover: _darkThemePrimitives.primitives.primary700,
    sliderTrackFillDisabled: _darkThemePrimitives.primitives.mono700,
    sliderHandleFill: _darkThemePrimitives.primitives.mono300,
    sliderHandleFillHover: _darkThemePrimitives.primitives.mono300,
    sliderHandleFillActive: _darkThemePrimitives.primitives.mono300,
    sliderHandleFillSelected: _darkThemePrimitives.primitives.primary500,
    sliderHandleFillSelectedHover: _darkThemePrimitives.primitives.primary600,
    sliderHandleFillSelectedActive: _darkThemePrimitives.primitives.primary700,
    sliderHandleFillDisabled: _darkThemePrimitives.primitives.mono600,
    sliderHandleInnerFill: _darkThemePrimitives.primitives.mono300,
    sliderHandleInnerFillDisabled: _darkThemePrimitives.primitives.mono500,
    sliderHandleInnerFillSelectedHover: _darkThemePrimitives.primitives.primary600,
    sliderHandleInnerFillSelectedActive: _darkThemePrimitives.primitives.primary700,
    sliderBorder: WHITE,
    sliderBorderHover: WHITE,
    sliderBorderDisabled: _darkThemePrimitives.primitives.mono400,
    // Input
    inputFill: _darkThemePrimitives.primitives.mono600,
    inputFillActive: _darkThemePrimitives.primitives.mono500,
    inputFillError: _darkThemePrimitives.primitives.negative700,
    inputFillDisabled: _darkThemePrimitives.primitives.mono800,
    inputFillPositive: _darkThemePrimitives.primitives.positive700,
    inputTextDisabled: _darkThemePrimitives.primitives.mono500,
    inputBorderError: _darkThemePrimitives.primitives.negative400,
    inputBorderPositive: _darkThemePrimitives.primitives.positive400,
    inputEnhancerFill: _darkThemePrimitives.primitives.mono500,
    inputEnhancerFillDisabled: _darkThemePrimitives.primitives.mono700,
    inputEnhancerTextDisabled: _darkThemePrimitives.primitives.mono500,
    // Menu
    menuFill: _darkThemePrimitives.primitives.mono600,
    menuFillHover: _darkThemePrimitives.primitives.mono700,
    menuFontDefault: _darkThemePrimitives.primitives.mono300,
    menuFontDisabled: _darkThemePrimitives.primitives.mono400,
    menuFontHighlighted: _darkThemePrimitives.primitives.mono200,
    menuFontSelected: WHITE,
    // Pagination
    paginationTriangleDown: _darkThemePrimitives.primitives.mono100,
    // Header navigation
    headerNavigationFill: _darkThemePrimitives.primitives.mono700,
    // Tab
    tabBarFill: _darkThemePrimitives.primitives.mono1000,
    tabColor: _darkThemePrimitives.primitives.mono300,
    // Spinner
    spinnerTrackFill: _darkThemePrimitives.primitives.mono100,
    // Progress bar
    progressbarTrackFill: _darkThemePrimitives.primitives.mono100,
    // Tooltip
    tooltipBackground: _darkThemePrimitives.primitives.mono200,
    tooltipText: _darkThemePrimitives.primitives.mono1000
  }
};
exports["default"] = _default;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(35);

__webpack_require__(58);

__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Consumer = exports.Provider = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var _React$createContext = React.createContext({}),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.Consumer = Consumer;
exports.Provider = Provider;

var LayersManager =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayersManager, _React$Component);

  function LayersManager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LayersManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LayersManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "host", React.createRef());

    return _this;
  }

  _createClass(LayersManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(Consumer, null, function (_ref) {
        var host = _ref.host;

        if (false) {}

        return React.createElement(Provider, {
          value: {
            host: host || _this2.host.current,
            zIndex: _this2.props.zIndex
          }
        }, React.createElement("div", null, _this2.props.children), React.createElement("div", {
          ref: _this2.host
        }));
      });
    }
  }]);

  return LayersManager;
}(React.Component);

exports["default"] = LayersManager;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(66);
var getWeak = __webpack_require__(73).getWeak;
var anObject = __webpack_require__(23);
var isObject = __webpack_require__(21);
var anInstance = __webpack_require__(64);
var forOf = __webpack_require__(93);
var createArrayMethod = __webpack_require__(41);
var $has = __webpack_require__(36);
var validate = __webpack_require__(55);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(42);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;
  var computedSize = size || reactIconBase.size || '1em';
  return _react2["default"].createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2["default"].string,
  size: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
  width: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
  height: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
  style: _propTypes2["default"].object
};
IconBase.contextTypes = {
  reactIconBase: _propTypes2["default"].shape(IconBase.propTypes)
};
exports["default"] = IconBase;
module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(209);

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2["default"])(property);
}

module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"config\":{\"PROJECT_NAME\":\"math.gl\",\"PROJECT_TYPE\":\"github\",\"PROJECT_DESC\":\"A 3D/WebGL math library\",\"PROJECT_URL\":\"https://github.com/uber-web/math.gl\",\"PROJECT_ORG\":\"uber-web\",\"HOME_HEADING\":\"A 3D/WebGL math library\",\"LINK_TO_GET_STARTED\":\"/docs/developer-guide/get-started\",\"HOME_BULLETS\":[{\"text\":\"Array-based Classes\",\"desc\":\"All math.gl classes (like Vector3, Matrix4) are subclasses of the built-in JavaScript Array class.\",\"img\":\"images/icon-high-precision.svg\"},{\"text\":\"Debug Friendly\",\"desc\":\"math.gl offers optional error checking after every math operation which makes quick work of locating coding errors and bad data.\",\"img\":\"images/icon-high-precision.svg\"},{\"text\":\"WebGL Support\",\"desc\":\"Matrices are stored internally in the format required by WebGL (column-major), while exposing a row-major API to the JavaScript programmer.\",\"img\":\"images/icon-high-precision.svg\"},{\"text\":\"Documentation\",\"desc\":\"math.gl comes with articles that get you quickly up-to-speed on the mathematical concepts used in 3D programming.\",\"img\":\"images/icon-high-precision.svg\"},{\"text\":\"Size Conscious\",\"desc\":\"To keep unused code from being bundled, math.gl avoids cross dependencies to maximize tree-shaking.\",\"img\":\"images/icon-high-precision.svg\"}],\"EXAMPLES\":[{\"title\":\"Benchmark\",\"path\":\"examples/benchmarks\"}],\"THEME_OVERRIDES\":[{\"key\":\"none\",\"value\":\"none\"}],\"PROJECTS\":[],\"ADDITIONAL_LINKS\":[]}}},\"allMarkdown\":{\"edges\":[{\"node\":{\"id\":\"e7a0a794-64e5-57d0-8598-9003aaf9cffe\",\"fields\":{\"slug\":\"docs\"},\"frontmatter\":{\"title\":\"Introduction\"}}},{\"node\":{\"id\":\"eea878ea-1906-5c32-87a5-04e69ab41ffc\",\"fields\":{\"slug\":\"docs/whats-new\"},\"frontmatter\":{\"title\":\"What's New\"}}},{\"node\":{\"id\":\"d5c149d0-2e30-5dcf-b528-d2b0cd82f112\",\"fields\":{\"slug\":\"docs/upgrade-guide\"},\"frontmatter\":{\"title\":\"Upgrade Guide\"}}},{\"node\":{\"id\":\"bd4b4f8c-b29b-5d56-83f4-aeb5a26c9cb3\",\"fields\":{\"slug\":\"modules/main\"},\"frontmatter\":{\"title\":\"math.gl\"}}},{\"node\":{\"id\":\"145b868e-b354-5812-8069-d6e4e7647a09\",\"fields\":{\"slug\":\"modules/geospatial\"},\"frontmatter\":{\"title\":\"@math.gl/geospatial\"}}},{\"node\":{\"id\":\"1f3291ab-e7d6-54a9-b1de-2a9b3b2de486\",\"fields\":{\"slug\":\"modules/culling\"},\"frontmatter\":{\"title\":\"@math.gl/culling\"}}},{\"node\":{\"id\":\"6313a566-8bf1-5728-a73e-0bb79a0ca149\",\"fields\":{\"slug\":\"modules/viewport-mercator-project\"},\"frontmatter\":{\"title\":\"viewport-mercator-project\"}}},{\"node\":{\"id\":\"594dcb8d-8bb4-5c1e-acb2-2ab51f4162ec\",\"fields\":{\"slug\":\"modules/core\"},\"frontmatter\":{\"title\":\"math.gl\"}}},{\"node\":{\"id\":\"474cf6a6-f51c-55e5-9028-eddc37e1f1f8\",\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/developer-guide/about-coordinates\"},\"frontmatter\":{\"title\":\"Web Mercator Coordinates\"}}},{\"node\":{\"id\":\"55f11c65-79f6-5fe1-8145-7a976d8c8d40\",\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/developer-guide/offset-projection-accuracy\"},\"frontmatter\":{\"title\":\"Accuracy of Offset Projection\"}}},{\"node\":{\"id\":\"015e7d36-a1f1-54a8-9ee2-491234e16b2c\",\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/api-reference/web-mercator-utils\"},\"frontmatter\":{\"title\":\"Web Mercator Utility Functions\"}}},{\"node\":{\"id\":\"57843109-b233-5733-b684-6c9b9011abfe\",\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/developer-guide/viewport-mercator-project-guide\"},\"frontmatter\":{\"title\":\"Overview\"}}},{\"node\":{\"id\":\"9b178b3e-8934-5137-9e84-a3f34d0ad569\",\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/api-reference/web-mercator-viewport\"},\"frontmatter\":{\"title\":\"WebMercatorViewport\"}}},{\"node\":{\"id\":\"f2bc3e04-12bf-5d31-98e8-0311e7b8e9be\",\"fields\":{\"slug\":\"modules/culling/wip/bounding-sphere\"},\"frontmatter\":{\"title\":\" WIP\"}}},{\"node\":{\"id\":\"42006b97-4f48-51ec-8aa8-c3e4a6f44334\",\"fields\":{\"slug\":\"modules/culling/docs/developer-guide/culling-guide\"},\"frontmatter\":{\"title\":\"Overview\"}}},{\"node\":{\"id\":\"cd36870a-225b-53ca-82b5-8f580f1423ba\",\"fields\":{\"slug\":\"modules/culling/docs/api-reference/bounding-sphere\"},\"frontmatter\":{\"title\":\"BoundingSphere\"}}},{\"node\":{\"id\":\"b6d63214-547a-58dc-87d8-b51981148866\",\"fields\":{\"slug\":\"modules/culling/docs/api-reference/culling-volume\"},\"frontmatter\":{\"title\":\"CullingVolume\"}}},{\"node\":{\"id\":\"9b9b2437-5cfd-5cb5-9d3d-7cef64ff0e69\",\"fields\":{\"slug\":\"modules/culling/docs/api-reference/oriented-bounding-box\"},\"frontmatter\":{\"title\":\"OrientedBoundingBox\"}}},{\"node\":{\"id\":\"3b51b94f-2057-5558-8644-39765112d4cb\",\"fields\":{\"slug\":\"modules/culling/docs/api-reference/plane\"},\"frontmatter\":{\"title\":\"Plane\"}}},{\"node\":{\"id\":\"ebcc6d5d-0d6b-5e4f-a94a-e4f705cce82d\",\"fields\":{\"slug\":\"modules/core/docs/wip/features\"},\"frontmatter\":{\"title\":\"Features (WIP)\"}}},{\"node\":{\"id\":\"9d1b3345-0e71-5577-aee1-08c80fdc9620\",\"fields\":{\"slug\":\"modules/core/docs/wip/using-vectors\"},\"frontmatter\":{\"title\":\"About the Vector Classes (WIP)\"}}},{\"node\":{\"id\":\"a9831f7c-bf8e-5d9c-b2bf-7ec6c7681bba\",\"fields\":{\"slug\":\"modules/core/docs/developer-guide/core-overview\"},\"frontmatter\":{\"title\":\"Overview\"}}},{\"node\":{\"id\":\"a3c3beac-572c-5601-ab7f-b1732ead2164\",\"fields\":{\"slug\":\"modules/core/docs/developer-guide/debugging\"},\"frontmatter\":{\"title\":\"Debugging\"}}},{\"node\":{\"id\":\"d9395345-90ac-5646-94f9-dffd53b2651d\",\"fields\":{\"slug\":\"modules/core/docs/developer-guide/external-frameworks\"},\"frontmatter\":{\"title\":\"Using with Other Frameworks\"}}},{\"node\":{\"id\":\"132010ae-afbf-538b-a2a5-0bb427f369ed\",\"fields\":{\"slug\":\"modules/core/docs/developer-guide/floating-point\"},\"frontmatter\":{\"title\":\"Floating Point\"}}},{\"node\":{\"id\":\"84b181f3-3571-595e-91a1-8df8f11e726f\",\"fields\":{\"slug\":\"modules/core/docs/developer-guide/performance\"},\"frontmatter\":{\"title\":\"Performance\"}}},{\"node\":{\"id\":\"b84ee108-8cf1-550a-9985-90b491831a6e\",\"fields\":{\"slug\":\"modules/core/docs/developer-guide/transformations\"},\"frontmatter\":{\"title\":\"Transformations\"}}},{\"node\":{\"id\":\"f36ff998-1091-5ed2-94b1-b6933a5503e8\",\"fields\":{\"slug\":\"modules/core/docs/developer-guide/view-and-projection\"},\"frontmatter\":{\"title\":\" View and Projection Matrices\"}}},{\"node\":{\"id\":\"ac15e602-5e18-5beb-97ef-e15932bff316\",\"fields\":{\"slug\":\"modules/geospatial/docs/developer-guide/geospatial-guide\"},\"frontmatter\":{\"title\":\"Overview\"}}},{\"node\":{\"id\":\"3189f0e5-ff19-59f9-9fa3-c0e695d29db1\",\"fields\":{\"slug\":\"modules/geospatial/docs/api-reference/ellipsoid\"},\"frontmatter\":{\"title\":\"Ellipsoid\"}}},{\"node\":{\"id\":\"29812829-4862-5c22-97ae-ebba64dd0eb5\",\"fields\":{\"slug\":\"modules/core/docs/concepts/coordinate-systems\"},\"frontmatter\":{\"title\":\"3D Coordinate Systems\"}}},{\"node\":{\"id\":\"0bd75c97-845b-5b57-85c0-bce335111dfc\",\"fields\":{\"slug\":\"modules/core/docs/concepts/rotations\"},\"frontmatter\":{\"title\":\"3D Rotations\"}}},{\"node\":{\"id\":\"26fafdea-ae34-5a01-b040-4f3a952e0f19\",\"fields\":{\"slug\":\"modules/core/docs/concepts/homogeneous-coordinates\"},\"frontmatter\":{\"title\":\"Homogeneous Coordinates\"}}},{\"node\":{\"id\":\"8cd13f4f-7515-5094-b2d4-71d11d05bca5\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/euler\"},\"frontmatter\":{\"title\":\"Euler (Experimental)\"}}},{\"node\":{\"id\":\"6508e86d-cee6-5441-b01b-ebd4e32f7839\",\"fields\":{\"slug\":\"modules/geospatial/docs/api-reference/helpers\"},\"frontmatter\":{\"title\":\"Helpers\"}}},{\"node\":{\"id\":\"0d0c9698-cee2-5f5e-878e-e9fef711efc7\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/math-array\"},\"frontmatter\":{\"title\":\"MathArray\"}}},{\"node\":{\"id\":\"d40f5aca-ee2f-5114-891c-4575006c7190\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/matrix\"},\"frontmatter\":{\"title\":\"Matrix\"}}},{\"node\":{\"id\":\"1ec0edc3-b30b-586e-8560-a56487b26a8d\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/matrix4\"},\"frontmatter\":{\"title\":\"Matrix4\"}}},{\"node\":{\"id\":\"7bad2bdb-d583-583d-8b6e-5d8fe9800a06\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/pose\"},\"frontmatter\":{\"title\":\"Pose (Experimental)\"}}},{\"node\":{\"id\":\"ce6ec437-5644-5260-9233-3ff0f22b6baa\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/spherical-coordinates\"},\"frontmatter\":{\"title\":\"SphericalCoordinates (Experimental)\"}}},{\"node\":{\"id\":\"ef9245ad-1b99-5d0a-8294-39478ff5a990\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/quaternion\"},\"frontmatter\":{\"title\":\"Quaternion\"}}},{\"node\":{\"id\":\"d6ef0557-feba-59fb-8863-1d51bfc04683\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/utilities\"},\"frontmatter\":{\"title\":\"Math Utility Functions\"}}},{\"node\":{\"id\":\"b383bc9e-ac67-5c84-953d-99d73295a7fe\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/vector\"},\"frontmatter\":{\"title\":\"Vector\"}}},{\"node\":{\"id\":\"d734baf4-08df-506a-8d87-6c9087431f61\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/matrix3\"},\"frontmatter\":{\"title\":\"Matrix3\"}}},{\"node\":{\"id\":\"d5c4e5a0-ec0c-5040-9b2a-ac90e875dcd7\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/vector3\"},\"frontmatter\":{\"title\":\"Vector3\"}}},{\"node\":{\"id\":\"f527defa-b034-5637-b948-380bfa68d565\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/vector2\"},\"frontmatter\":{\"title\":\"Vector2\"}}},{\"node\":{\"id\":\"7712c7b6-71b8-59e6-8c48-a9c70f13c81d\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/vector4\"},\"frontmatter\":{\"title\":\"Vector4\"}}},{\"node\":{\"id\":\"df7db6b7-d408-5a09-a4c1-33327af45520\",\"fields\":{\"slug\":\"modules/core/docs/api-reference/addons/polygon\"},\"frontmatter\":{\"title\":\"Polygon (Experimental)\"}}}]},\"tableOfContents\":{\"chapters\":[{\"title\":\"Overview\",\"level\":1,\"chapters\":null,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Introduction\"},\"fields\":{\"slug\":\"docs\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"What's New\"},\"fields\":{\"slug\":\"docs/whats-new\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Upgrade Guide\"},\"fields\":{\"slug\":\"docs/upgrade-guide\"}}}]},{\"title\":\"Developer Guide\",\"level\":1,\"chapters\":[{\"title\":\"math.gl\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Overview\"},\"fields\":{\"slug\":\"modules/core/docs/developer-guide/core-overview\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Transformations\"},\"fields\":{\"slug\":\"modules/core/docs/developer-guide/transformations\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\" View and Projection Matrices\"},\"fields\":{\"slug\":\"modules/core/docs/developer-guide/view-and-projection\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Debugging\"},\"fields\":{\"slug\":\"modules/core/docs/developer-guide/debugging\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Floating Point\"},\"fields\":{\"slug\":\"modules/core/docs/developer-guide/floating-point\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Performance\"},\"fields\":{\"slug\":\"modules/core/docs/developer-guide/performance\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Using with Other Frameworks\"},\"fields\":{\"slug\":\"modules/core/docs/developer-guide/external-frameworks\"}}}]},{\"title\":\"@math.gl/culling\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Overview\"},\"fields\":{\"slug\":\"modules/culling/docs/developer-guide/culling-guide\"}}}]},{\"title\":\"@math.gl/geospatial\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Overview\"},\"fields\":{\"slug\":\"modules/geospatial/docs/developer-guide/geospatial-guide\"}}}]},{\"title\":\"viewport-mercator-project\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Overview\"},\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/developer-guide/viewport-mercator-project-guide\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Web Mercator Coordinates\"},\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/developer-guide/about-coordinates\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Accuracy of Offset Projection\"},\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/developer-guide/offset-projection-accuracy\"}}}]}],\"entries\":null},{\"title\":\"API Reference\",\"level\":1,\"chapters\":[{\"title\":\"math.gl\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Euler (Experimental)\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/euler\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"MathArray\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/math-array\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Matrix\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/matrix\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Matrix3\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/matrix3\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Matrix4\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/matrix4\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Pose (Experimental)\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/pose\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Quaternion\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/quaternion\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"SphericalCoordinates (Experimental)\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/spherical-coordinates\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Math Utility Functions\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/utilities\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Vector\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/vector\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Vector2\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/vector2\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Vector3\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/vector3\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Vector4\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/vector4\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Polygon (Experimental)\"},\"fields\":{\"slug\":\"modules/core/docs/api-reference/addons/polygon\"}}}]},{\"title\":\"@math.gl/culling\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"BoundingSphere\"},\"fields\":{\"slug\":\"modules/culling/docs/api-reference/bounding-sphere\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"CullingVolume\"},\"fields\":{\"slug\":\"modules/culling/docs/api-reference/culling-volume\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"OrientedBoundingBox\"},\"fields\":{\"slug\":\"modules/culling/docs/api-reference/oriented-bounding-box\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Plane\"},\"fields\":{\"slug\":\"modules/culling/docs/api-reference/plane\"}}}]},{\"title\":\"@math.gl/geospatial\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Ellipsoid\"},\"fields\":{\"slug\":\"modules/geospatial/docs/api-reference/ellipsoid\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Helpers\"},\"fields\":{\"slug\":\"modules/geospatial/docs/api-reference/helpers\"}}}]},{\"title\":\"viewport-mercator-project\",\"level\":2,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Web Mercator Utility Functions\"},\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/api-reference/web-mercator-utils\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"WebMercatorViewport\"},\"fields\":{\"slug\":\"modules/viewport-mercator-project/docs/api-reference/web-mercator-viewport\"}}}]}],\"entries\":null},{\"title\":\"Concepts\",\"level\":1,\"chapters\":null,\"entries\":[{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"Homogeneous Coordinates\"},\"fields\":{\"slug\":\"modules/core/docs/concepts/homogeneous-coordinates\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"3D Coordinate Systems\"},\"fields\":{\"slug\":\"modules/core/docs/concepts/coordinate-systems\"}}},{\"childMarkdownRemark\":{\"frontmatter\":{\"title\":\"3D Rotations\"},\"fields\":{\"slug\":\"modules/core/docs/concepts/rotations\"}}}]}]}}}");

/***/ }),
/* 174 */
/***/ (function(module, exports) {

exports.polyfill=function(Component){return Component;};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(170);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var GoStar = function GoStar(props) {
  return _react2["default"].createElement(_reactIconBase2["default"], _extends({
    viewBox: '0 0 40 40'
  }, props), _react2["default"].createElement('g', null, _react2["default"].createElement('path', {
    d: 'm37.5 15l-12.2-1.6-5.3-10.9-5.3 10.9-12.2 1.6 9 8.2-2.3 11.8 10.8-5.8 10.8 5.8-2.3-11.8 9-8.2z'
  })));
};

exports["default"] = GoStar;
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(37);

var _ScrollBehaviorContext = _interopRequireDefault(__webpack_require__(272));

var _ScrollContainer = _interopRequireDefault(__webpack_require__(281));

exports.ScrollContainer = _ScrollContainer["default"];
exports.ScrollContext = _ScrollBehaviorContext["default"];

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);

/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  * ie10 fix - Mikael Kristiansson 2019
  */
!function (name, definition) {
  if (true) module.exports = definition();else {}
}('domready', function () {
  var ie10 = false;

  if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
    ie10 = true;
  }

  var fns = [],
      _listener,
      doc = typeof document === 'object' && document,
      hack = ie10 ? doc.documentElement.doScroll() : doc.documentElement.doScroll,
      domContentLoaded = 'DOMContentLoaded',
      loaded = doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

  if (!loaded && doc) doc.addEventListener(domContentLoaded, _listener = function listener() {
    doc.removeEventListener(domContentLoaded, _listener);
    loaded = 1;

    while (_listener = fns.shift()) {
      _listener();
    }
  });
  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  };
});

/***/ }),
/* 178 */
/***/ (function(module) {

module.exports = JSON.parse("[]");

/***/ }),
/* 179 */
/***/ (function(module) {

module.exports = JSON.parse("[]");

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(51);
var fails = __webpack_require__(22);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(7);
var $includes = __webpack_require__(91)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(83)('includes');


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(7);
var context = __webpack_require__(123);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(124)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(7);
var $find = __webpack_require__(41)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(83)(KEY);


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(20)) {
  var LIBRARY = __webpack_require__(52);
  var global = __webpack_require__(14);
  var fails = __webpack_require__(22);
  var $export = __webpack_require__(7);
  var $typed = __webpack_require__(119);
  var $buffer = __webpack_require__(157);
  var ctx = __webpack_require__(40);
  var anInstance = __webpack_require__(64);
  var propertyDesc = __webpack_require__(63);
  var hide = __webpack_require__(34);
  var redefineAll = __webpack_require__(66);
  var toInteger = __webpack_require__(46);
  var toLength = __webpack_require__(26);
  var toIndex = __webpack_require__(158);
  var toAbsoluteIndex = __webpack_require__(92);
  var toPrimitive = __webpack_require__(76);
  var has = __webpack_require__(36);
  var classof = __webpack_require__(75);
  var isObject = __webpack_require__(21);
  var toObject = __webpack_require__(30);
  var isArrayIter = __webpack_require__(111);
  var create = __webpack_require__(62);
  var getPrototypeOf = __webpack_require__(149);
  var gOPN = __webpack_require__(68).f;
  var getIterFn = __webpack_require__(112);
  var uid = __webpack_require__(53);
  var wks = __webpack_require__(15);
  var createArrayMethod = __webpack_require__(41);
  var createArrayIncludes = __webpack_require__(91);
  var speciesConstructor = __webpack_require__(113);
  var ArrayIterators = __webpack_require__(6);
  var Iterators = __webpack_require__(65);
  var $iterDetect = __webpack_require__(95);
  var setSpecies = __webpack_require__(94);
  var arrayFill = __webpack_require__(135);
  var arrayCopyWithin = __webpack_require__(215);
  var $DP = __webpack_require__(24);
  var $GOPD = __webpack_require__(96);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(7);
var toLength = __webpack_require__(26);
var context = __webpack_require__(123);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(124)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(49);
var isObject = __webpack_require__(21);
var invoke = __webpack_require__(145);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(7);
var $find = __webpack_require__(41)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(83)(KEY);


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(262);
} else {}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var getKeys = __webpack_require__(54);
var toIObject = __webpack_require__(47);
var isEnum = __webpack_require__(77).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(105);
__webpack_require__(7)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87)('native-function-to-string', Function.toString);


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var macrotask = __webpack_require__(144).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(50)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(14);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var isObject = __webpack_require__(21);
var newPromiseCapability = __webpack_require__(147);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__(197),options:{"plugins":[]}},{plugin:__webpack_require__(210),options:{"plugins":[],"maxWidth":690}},{plugin:__webpack_require__(212),options:{"plugins":[]}},{plugin:__webpack_require__(213),options:{"plugins":[]}}];

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var React=__webpack_require__(0);var styletron=__webpack_require__(206);var _require=__webpack_require__(155),Provider=_require.Provider,DebugEngine=_require.DebugEngine;var debug= true?void 0:undefined;// eslint-disable-next-line react/prop-types
exports.wrapRootElement=function(_ref,options){var element=_ref.element;var enableDebug=options.debug===true||typeof options.debug==="undefined";return React.createElement(Provider,{value:styletron(options).instance,debug:enableDebug?debug:undefined,debugAfterHydration:enableDebug},element);};

/***/ }),
/* 198 */,
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(20) && /./g.flags != 'g') __webpack_require__(24).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(89)
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(62);
var descriptor = __webpack_require__(63);
var setToStringTag = __webpack_require__(67);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(34)(IteratorPrototype, __webpack_require__(15)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(24);
var anObject = __webpack_require__(23);
var getKeys = __webpack_require__(54);

module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(54);
var gOPS = __webpack_require__(110);
var pIE = __webpack_require__(77);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(47);
var gOPN = __webpack_require__(68).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(205);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(21);
var isArray = __webpack_require__(115);
var SPECIES = __webpack_require__(15)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(37);var _extends2=_interopRequireDefault(__webpack_require__(152));var _require=__webpack_require__(283),Client=_require.Client,Server=_require.Server;var memoizedValue;module.exports=function(){return function(options){if(!memoizedValue){var instance;if(typeof window!=="undefined"&&window.document.createElement){var styleElements=document.getElementsByClassName("_styletron_hydrate_");instance=new Client((0,_extends2["default"])({hydrate:styleElements},options));}else{instance=new Server(options);}memoizedValue={instance:instance};}return memoizedValue;};}();

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(49);
var toObject = __webpack_require__(30);
var IObject = __webpack_require__(90);
var toLength = __webpack_require__(26);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(4);var _require=__webpack_require__(211),DEFAULT_OPTIONS=_require.DEFAULT_OPTIONS,imageClass=_require.imageClass,imageBackgroundClass=_require.imageBackgroundClass,imageWrapperClass=_require.imageWrapperClass;exports.onRouteUpdate=function(apiCallbackContext,pluginOptions){var options=Object.assign({},DEFAULT_OPTIONS,pluginOptions);var imageWrappers=document.querySelectorAll("."+imageWrapperClass);// https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/
// for cross-browser looping through NodeList without polyfills
var _loop=function _loop(i){var imageWrapper=imageWrappers[i];var backgroundElement=imageWrapper.querySelector("."+imageBackgroundClass);var imageElement=imageWrapper.querySelector("."+imageClass);var onImageLoad=function onImageLoad(){backgroundElement.style.transition="opacity 0.5s 0.5s";imageElement.style.transition="opacity 0.5s";onImageComplete();};var onImageComplete=function onImageComplete(){backgroundElement.style.opacity=0;imageElement.style.opacity=1;imageElement.style.color="inherit";imageElement.style.boxShadow="inset 0px 0px 0px 400px "+options.backgroundColor;imageElement.removeEventListener("load",onImageLoad);imageElement.removeEventListener("error",onImageComplete);};imageElement.style.opacity=0;imageElement.addEventListener("load",onImageLoad);imageElement.addEventListener("error",onImageComplete);if(imageElement.complete){onImageComplete();}};for(var i=0;i<imageWrappers.length;i++){_loop(i);}};

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.DEFAULT_OPTIONS={maxWidth:650,wrapperStyle:"",backgroundColor:"white",linkImagesToOriginal:true,showCaptions:false,markdownCaptions:false,withWebp:false,tracedSVG:false,loading:"lazy",disableBgImageOnAlpha:false};exports.imageClass="gatsby-resp-image-image";exports.imageWrapperClass="gatsby-resp-image-wrapper";exports.imageBackgroundClass="gatsby-resp-image-background-image";

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(12);var offsetY=0;var getTargetOffset=function getTargetOffset(hash){var id=window.decodeURI(hash.replace("#",""));if(id!==""){var element=document.getElementById(id);if(element){return element.offsetTop-offsetY;}}return null;};exports.onInitialClientRender=function(_,pluginOptions){if(pluginOptions.offsetY){offsetY=pluginOptions.offsetY;}requestAnimationFrame(function(){var offset=getTargetOffset(window.location.hash);if(offset!==null){window.scrollTo(0,offset);}});};exports.shouldUpdateScroll=function(_ref){var location=_ref.routerProps.location;var offset=getTargetOffset(location.hash);return offset!==null?[0,offset]:true;};

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);Object.assign(module.exports,__webpack_require__(286));

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(184)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(92);
var toLength = __webpack_require__(26);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
$export($export.G + $export.W + $export.F * !__webpack_require__(119).ABV, {
  DataView: __webpack_require__(157).DataView
});


/***/ }),
/* 217 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(33);

var ReactPropTypesSecret = __webpack_require__(219);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);
var ProdPageRenderer=function ProdPageRenderer(_ref){var location=_ref.location,pageResources=_ref.pageResources;if(!pageResources){return null;}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],Object.assign({location:location,pageResources:pageResources},pageResources.json));};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(24);
var createDesc = __webpack_require__(63);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(7);
var toLength = __webpack_require__(26);
var context = __webpack_require__(123);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(124)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

__webpack_require__(19);

__webpack_require__(33);

__webpack_require__(35);

__webpack_require__(1);

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = __webpack_require__(0);

var React__default = _interopDefault(React);

var shallowEqual = _interopDefault(__webpack_require__(225));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(SideEffect, _Component);

      function SideEffect() {
        return _Component.apply(this, arguments) || this;
      } // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      _proto.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB); // Test for A's keys different from B.

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
};

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(33);

__webpack_require__(81);

__webpack_require__(39);

__webpack_require__(44);

__webpack_require__(136);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(17);

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;
    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // start react-fast-compare
    // custom handling for DOM elements


    if (hasElementType && a instanceof Element && b instanceof Element) return a === b; // custom handling for React

    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // end react-fast-compare
    // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i) || error.number === -2146828260) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
};

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(74);

__webpack_require__(27);

__webpack_require__(85);

__webpack_require__(18);

__webpack_require__(17);

__webpack_require__(11);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(29);

__webpack_require__(19);

__webpack_require__(45);

__webpack_require__(12);

__webpack_require__(4);

__webpack_require__(13);

__webpack_require__(8);

exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(116);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(163);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
  var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (encode === false) {
    return String(str);
  }

  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
  var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

  if (innermostTemplate && innermostTitle) {
    // use function arg to avoid need to escape $ characters
    return innermostTemplate.replace(/%s/g, function () {
      return innermostTitle;
    });
  }

  var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
  return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
  return propsList.filter(function (props) {
    return typeof props[tagType] !== "undefined";
  }).map(function (props) {
    return props[tagType];
  }).reduce(function (tagAttrs, current) {
    return _extends({}, tagAttrs, current);
  }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
  return propsList.filter(function (props) {
    return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
  }).map(function (props) {
    return props[_HelmetConstants.TAG_NAMES.BASE];
  }).reverse().reduce(function (innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }

    return innermostBaseTag;
  }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
  // Calculate list of tags, giving priority innermost component (end of the propslist)
  var approvedSeenTags = {};
  return propsList.filter(function (props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }

    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
    }

    return false;
  }).map(function (props) {
    return props[tagName];
  }).reverse().reduce(function (approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function (tag) {
      var primaryAttributeKey = void 0;
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase(); // Special rule with link tags, since rel and href are both primary tags, rel takes priority

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        } // Special case for innerHTML which doesn't work lowercased


        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey;
        }
      }

      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }

      var value = tag[primaryAttributeKey].toLowerCase();

      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }

      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }

      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }

      return false;
    }).reverse().forEach(function (tag) {
      return approvedTags.push(tag);
    }); // Update seen tags with tags from this instance

    var keys = Object.keys(instanceSeenTags);

    for (var i = 0; i < keys.length; i++) {
      var attributeKey = keys[i];
      var tagUnion = (0, _objectAssign2["default"])({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }

    return approvedTags;
  }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
  for (var i = propsList.length - 1; i >= 0; i--) {
    var props = propsList[i];

    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }

  return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
    bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
    metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
  };
};

var rafPolyfill = function () {
  var clock = Date.now();
  return function (callback) {
    var currentTime = Date.now();

    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function () {
        rafPolyfill(callback);
      }, 0);
    }
  };
}();

var cafPolyfill = function cafPolyfill(id) {
  return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }

  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(function () {
      commitTagChanges(newState, function () {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
  var baseTag = newState.baseTag,
      bodyAttributes = newState.bodyAttributes,
      htmlAttributes = newState.htmlAttributes,
      linkTags = newState.linkTags,
      metaTags = newState.metaTags,
      noscriptTags = newState.noscriptTags,
      onChangeClientState = newState.onChangeClientState,
      scriptTags = newState.scriptTags,
      styleTags = newState.styleTags,
      title = newState.title,
      titleAttributes = newState.titleAttributes;
  updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function (tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType],
        newTags = _tagUpdates$tagType.newTags,
        oldTags = _tagUpdates$tagType.oldTags;

    if (newTags.length) {
      addedTags[tagType] = newTags;
    }

    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }

  updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];

  if (!elementTag) {
    return;
  }

  var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);

  for (var i = 0; i < attributeKeys.length; i++) {
    var attribute = attributeKeys[i];
    var value = attributes[attribute] || "";

    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }

    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }

    var indexToSave = attributesToRemove.indexOf(attribute);

    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }

  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }

  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};

var updateTags = function updateTags(type, tags) {
  var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;

  if (tags && tags.length) {
    tags.forEach(function (tag) {
      var newElement = document.createElement(type);

      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }

      newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true"); // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

      if (oldTags.some(function (existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }

  oldTags.forEach(function (tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function (tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags: oldTags,
    newTags: newTags
  };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
  return Object.keys(attributes).reduce(function (str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
  return tags.reduce(function (str, tag) {
    var attributeHtml = Object.keys(tag).filter(function (attribute) {
      return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function (string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(attributes).reduce(function (obj, key) {
    obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(props).reduce(function (obj, key) {
    obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
  var _initProps; // assigning into an array to define toString function on it


  var initProps = (_initProps = {
    key: title
  }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [_react2["default"].createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
  return tags.map(function (tag, i) {
    var _mappedTag;

    var mappedTag = (_mappedTag = {
      key: i
    }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function (attribute) {
      var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

      if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = {
          __html: content
        };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return _react2["default"].createElement(type, mappedTag);
  });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
  switch (type) {
    case _HelmetConstants.TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };

    case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
    case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };

    default:
      return {
        toComponent: function toComponent() {
          return generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
  var baseTag = _ref.baseTag,
      bodyAttributes = _ref.bodyAttributes,
      encode = _ref.encode,
      htmlAttributes = _ref.htmlAttributes,
      linkTags = _ref.linkTags,
      metaTags = _ref.metaTags,
      noscriptTags = _ref.noscriptTags,
      scriptTags = _ref.scriptTags,
      styleTags = _ref.styleTags,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "" : _ref$title,
      titleAttributes = _ref.titleAttributes;
  return {
    base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, {
      title: title,
      titleAttributes: titleAttributes
    }, encode)
  };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(133)))

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(17);

__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(5);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createThemedStyled = createThemedStyled;
exports.createThemedWithStyle = createThemedWithStyle;
exports.createThemedUseStyletron = createThemedUseStyletron;
exports.useStyletron = exports.withStyle = exports.styled = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _styletronReact = __webpack_require__(155);

var _styletronStandard = __webpack_require__(79);

var _themeProvider = __webpack_require__(125);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var wrapper = function wrapper(StyledComponent) {
  return React.forwardRef(function (props, ref) {
    return React.createElement(_themeProvider.ThemeContext.Consumer, null, function (theme) {
      return React.createElement(StyledComponent, _extends({
        ref: ref
      }, props, {
        $theme: theme
      }));
    });
  });
};
/* eslint-disable flowtype/generic-spacing */

/* eslint-disable flowtype/no-weak-types */

/* eslint-enable flowtype/generic-spacing */

/* eslint-enable flowtype/no-weak-types */


function createThemedStyled() {
  return (0, _styletronReact.createStyled)({
    wrapper: wrapper,
    getInitialStyle: _styletronStandard.getInitialStyle,
    driver: _styletronStandard.driver // eslint-disable-next-line flowtype/no-weak-types

  });
}

var styled = createThemedStyled();
exports.styled = styled;

function createThemedWithStyle() {
  // eslint-disable-next-line flowtype/no-weak-types
  return _styletronReact.withStyle;
}

var withStyle = createThemedWithStyle();
exports.withStyle = withStyle;

function createThemedUseStyletron() {
  return function () {
    // eslint-disable-next-line flowtype/no-weak-types
    var theme = React.useContext(_themeProvider.ThemeContext);

    var _styletronUseStyletro = (0, _styletronReact.useStyletron)(),
        _styletronUseStyletro2 = _slicedToArray(_styletronUseStyletro, 1),
        css = _styletronUseStyletro2[0];

    return [css, theme];
  };
}

var useStyletron = createThemedUseStyletron();
exports.useStyletron = useStyletron;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(29);

__webpack_require__(8);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LightThemeMove = void 0;

var _creator = _interopRequireDefault(__webpack_require__(98));

var _lightThemePrimitives = __webpack_require__(166);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var primaryFontFamily = 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
var secondaryFontFamily = 'UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
var LightThemeMove = (0, _creator["default"])(_objectSpread({}, _lightThemePrimitives.primitives, {
  primaryFontFamily: primaryFontFamily
}), {
  name: 'light-theme-with-move',
  typography: {
    font1100: {
      fontFamily: secondaryFontFamily
    }
  }
});
exports.LightThemeMove = LightThemeMove;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(29);

__webpack_require__(8);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkThemeMove = void 0;

var _creator = _interopRequireDefault(__webpack_require__(98));

var _darkThemePrimitives = __webpack_require__(99);

var _darkThemeColors = _interopRequireDefault(__webpack_require__(167));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var primaryFontFamily = 'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
var secondaryFontFamily = 'UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';
var DarkThemeMove = (0, _creator["default"])(_objectSpread({}, _darkThemePrimitives.primitives, {
  primaryFontFamily: primaryFontFamily
}), _objectSpread({
  name: 'dark-theme-with-move'
}, _darkThemeColors["default"], {
  typography: {
    font1100: {
      fontFamily: secondaryFontFamily
    }
  }
}));
exports.DarkThemeMove = DarkThemeMove;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(29);

__webpack_require__(8);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DarkTheme = void 0;

var _creator = _interopRequireDefault(__webpack_require__(98));

var _darkThemePrimitives = __webpack_require__(99);

var _darkThemeColors = _interopRequireDefault(__webpack_require__(167));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DarkTheme = (0, _creator["default"])(_objectSpread({}, _darkThemePrimitives.primitives), _objectSpread({
  name: 'dark-theme'
}, _darkThemeColors["default"]));
exports.DarkTheme = DarkTheme;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgb = hexToRgb;
exports.ellipsisText = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

function hexToRgb() {
  var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "rgba(".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16), ", ").concat(alpha, ")") : null;
}

var ellipsisText = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal'
};
exports.ellipsisText = ellipsisText;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LocaleContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _justExtend = _interopRequireDefault(__webpack_require__(235));

var _en_US = _interopRequireDefault(__webpack_require__(236));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var LocaleContext = React.createContext(_en_US["default"]);
exports.LocaleContext = LocaleContext;

var LocaleProvider = function LocaleProvider(props) {
  var locale = props.locale,
      children = props.children;
  return React.createElement(LocaleContext.Provider, {
    value: (0, _justExtend["default"])({}, _en_US["default"], locale)
  }, children);
};

var _default = LocaleProvider;
exports["default"] = _default;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);

__webpack_require__(44);

__webpack_require__(3);

__webpack_require__(17);

module.exports = extend;
/*
  var obj = {a: 3, b: 5};
  extend(obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 4, b: 5, c: 8}

  var obj = {a: 3, b: 5};
  extend({}, obj, {a: 4, c: 8}); // {a: 4, b: 5, c: 8}
  obj; // {a: 3, b: 5}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3, 4]}

  var arr = [1, 2, 3];
  var obj = {a: 3, b: 5};
  extend(true, obj, {c: arr}); // {a: 3, b: 5, c: [1, 2, 3]}
  arr.push(4);
  obj; // {a: 3, b: 5, c: [1, 2, 3]}

  extend({a: 4, b: 5}); // {a: 4, b: 5}
  extend({a: 4, b: 5}, 3); {a: 4, b: 5}
  extend({a: 4, b: 5}, true); {a: 4, b: 5}
  extend('hello', {a: 4, b: 5}); // throws
  extend(3, {a: 4, b: 5}); // throws
*/

function extend()
/* [deep], obj1, obj2, [objn] */
{
  var args = [].slice.call(arguments);
  var deep = false;

  if (typeof args[0] == 'boolean') {
    deep = args.shift();
  }

  var result = args[0];

  if (!result || typeof result != 'object' && typeof result != 'function') {
    throw new Error('extendee must be an object');
  }

  var extenders = args.slice(1);
  var len = extenders.length;

  for (var i = 0; i < len; i++) {
    var extender = extenders[i];

    for (var key in extender) {
      if (extender.hasOwnProperty(key)) {
        var value = extender[key];

        if (deep && isCloneable(value)) {
          var base = Array.isArray(value) ? [] : {};
          result[key] = extend(true, result.hasOwnProperty(key) ? result[key] : base, value);
        } else {
          result[key] = value;
        }
      }
    }
  }

  return result;
}

function isCloneable(obj) {
  return Array.isArray(obj) || {}.toString.call(obj) == '[object Object]';
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _locale = _interopRequireDefault(__webpack_require__(237));

var _locale2 = _interopRequireDefault(__webpack_require__(238));

var _locale3 = _interopRequireDefault(__webpack_require__(239));

var _locale4 = _interopRequireDefault(__webpack_require__(240));

var _locale5 = _interopRequireDefault(__webpack_require__(241));

var _locale6 = _interopRequireDefault(__webpack_require__(242));

var _locale7 = _interopRequireDefault(__webpack_require__(243));

var _locale8 = _interopRequireDefault(__webpack_require__(244));

var _locale9 = _interopRequireDefault(__webpack_require__(245));

var _locale10 = _interopRequireDefault(__webpack_require__(246));

var _locale11 = _interopRequireDefault(__webpack_require__(247));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var en_US = {
  accordion: _locale["default"],
  breadcrumbs: _locale2["default"],
  datepicker: _locale3["default"],
  buttongroup: _locale4["default"],
  fileuploader: _locale5["default"],
  menu: _locale6["default"],
  modal: _locale7["default"],
  drawer: _locale8["default"],
  pagination: _locale9["default"],
  select: _locale10["default"],
  toast: _locale11["default"]
};
var _default = en_US;
exports["default"] = _default;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  collapse: 'Collapse',
  expand: 'Expand'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  ariaLabel: 'Breadcrumbs navigation'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  ariaLabel: 'Select a date',
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
  screenReaderMessageInput: 'Press the down arrow key to interact with the calendar and select a date. Press the escape button to close the calendar.',
  quickSelectLabel: 'Choose a date range',
  quickSelectAriaLabel: 'Choose a date range',
  timeSelectLabel: 'Start time',
  timePickerAriaLabel: 'Select a time',
  timezonePickerAriaLabel: 'Select a timezone'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  ariaLabel: 'button group'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  dropFilesToUpload: 'Drop files here to upload',
  or: 'or',
  browseFiles: 'Browse files',
  retry: 'Retry Upload',
  cancel: 'Cancel'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  noResultsMsg: 'No results'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  close: 'Close'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  close: 'Close'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  prev: 'Prev',
  next: 'Next',
  preposition: 'of'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  // Remove noResultsMsg prop in the next major version
  noResultsMsg: 'No results found',
  placeholder: 'Select...',
  create: 'Create'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

var locale = {
  close: 'Close'
};
var _default = locale;
exports["default"] = _default;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _index = __webpack_require__(249);

var _index2 = __webpack_require__(78);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


var BaseProvider = function BaseProvider(props) {
  var children = props.children,
      theme = props.theme,
      zIndex = props.zIndex;
  return React.createElement(_index.LayersManager, {
    zIndex: zIndex
  }, React.createElement(_index2.ThemeProvider, {
    theme: theme
  }, children));
};

var _default = BaseProvider;
exports["default"] = _default;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(18);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  LayersManager: true,
  Layer: true,
  TetherBehavior: true,
  TETHER_PLACEMENT: true
};
Object.defineProperty(exports, "LayersManager", {
  enumerable: true,
  get: function get() {
    return _layersManager["default"];
  }
});
Object.defineProperty(exports, "Layer", {
  enumerable: true,
  get: function get() {
    return _layer["default"];
  }
});
Object.defineProperty(exports, "TetherBehavior", {
  enumerable: true,
  get: function get() {
    return _tether["default"];
  }
});
Object.defineProperty(exports, "TETHER_PLACEMENT", {
  enumerable: true,
  get: function get() {
    return _constants.TETHER_PLACEMENT;
  }
});

var _layersManager = _interopRequireDefault(__webpack_require__(168));

var _layer = _interopRequireDefault(__webpack_require__(250));

var _tether = _interopRequireDefault(__webpack_require__(257));

var _constants = __webpack_require__(126);

var _types = __webpack_require__(260);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _types[key];
    }
  });
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(35);

__webpack_require__(58);

__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Layer;

var React = _interopRequireWildcard(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(100));

var _index = __webpack_require__(78);

var _layersManager = __webpack_require__(168);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Container = (0, _index.styled)('div', function (_ref) {
  var $zIndex = _ref.$zIndex;
  return {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: $zIndex || null
  };
});
Container.displayName = "Container";

var LayerComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LayerComponent, _React$Component);

  function LayerComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LayerComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LayerComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      container: null
    });

    return _this;
  }

  _createClass(LayerComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          onMount = _this$props.onMount,
          mountNode = _this$props.mountNode;

      if (mountNode) {
        onMount && onMount();
        return;
      } // There was no LayersManager added if this.props.host === undefined.
      // Use document.body is the case no LayersManager is used.


      var host = this.props.host !== undefined ? this.props.host : document.body;

      if (host) {
        this.addContainer(host);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          host = _this$props2.host,
          mountNode = _this$props2.mountNode;

      if (mountNode) {
        return;
      }

      if (host && host !== prevProps.host && prevProps.host === null) {
        this.addContainer(host);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var container = this.state.container;
      var _this$props3 = this.props,
          host = _this$props3.host,
          onUnmount = _this$props3.onUnmount;
      onUnmount && onUnmount();
      host && container && host.contains(container) && host.removeChild(container);
    }
  }, {
    key: "addContainer",
    value: function addContainer(host) {
      var _this$props4 = this.props,
          index = _this$props4.index,
          mountNode = _this$props4.mountNode,
          onMount = _this$props4.onMount; // Do nothing if mountNode is provided

      if (mountNode) {
        return;
      }

      if (host) {
        var container = host.ownerDocument.createElement('div');
        var sibling = typeof index === 'number' ? React.Children.toArray(host.children)[index] : null;
        sibling ? host.insertBefore(container, sibling) : host.appendChild(container);
        this.setState({
          container: container
        }, function () {
          onMount && onMount();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var container = this.state.container;
      var _this$props5 = this.props,
          children = _this$props5.children,
          mountNode = _this$props5.mountNode,
          zIndex = _this$props5.zIndex; // Only adding an additional wrapper when a layer has z-index to be set

      var childrenToRender = zIndex ? React.createElement(Container, {
        $zIndex: zIndex
      }, children) : children;

      if (typeof document !== 'undefined') {
        if (mountNode || container) {
          // $FlowFixMe
          return _reactDom["default"].createPortal(childrenToRender, mountNode || container);
        }

        return null;
      }

      return null;
    }
  }]);

  return LayerComponent;
}(React.Component);

function Layer(props) {
  return React.createElement(_layersManager.Consumer, null, function (_ref2) {
    var host = _ref2.host,
        zIndex = _ref2.zIndex;
    return React.createElement(LayerComponent, _extends({}, props, {
      host: host,
      zIndex: zIndex
    }));
  });
}

/***/ }),
/* 251 */,
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(169);
var validate = __webpack_require__(55);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(97)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { is: __webpack_require__(138) });


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(14);
var each = __webpack_require__(41)(0);
var redefine = __webpack_require__(28);
var meta = __webpack_require__(73);
var assign = __webpack_require__(141);
var weak = __webpack_require__(169);
var isObject = __webpack_require__(21);
var validate = __webpack_require__(55);
var NATIVE_WEAK_MAP = __webpack_require__(55);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(97)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 255 */,
/* 256 */,
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(35);

__webpack_require__(58);

__webpack_require__(11);

__webpack_require__(18);

__webpack_require__(29);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _popper = _interopRequireDefault(__webpack_require__(258));

var _utils = __webpack_require__(259);

var _constants = __webpack_require__(126);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Tether =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tether, _React$Component);

  function Tether() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tether);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tether)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popper", void 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "popperHeight", 0);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isMounted: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPopperUpdate", function (data) {
      var normalizedOffsets = {
        popper: (0, _utils.parsePopperOffset)(data.offsets.popper),
        arrow: data.offsets.arrow ? (0, _utils.parsePopperOffset)(data.offsets.arrow) : {
          top: 0,
          left: 0
        }
      };

      _this.props.onPopperUpdate(normalizedOffsets, data);
    });

    return _this;
  }

  _createClass(Tether, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isMounted: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Handles the case where popover content changes size and creates a gap between the anchor and
      // the popover. Popper.js only schedules updates on resize and scroll events. In the case of
      // the Select component, when options were filtered in the dropdown menu it creates a gap
      // between it and the input element.
      if (this.props.popperRef) {
        var _this$props$popperRef = this.props.popperRef.getBoundingClientRect(),
            height = _this$props$popperRef.height;

        if (this.popperHeight !== height) {
          this.popperHeight = height;
          this.popper && this.popper.scheduleUpdate();
        }

        if (this.state.isMounted !== prevState.isMounted) {
          if (!this.props.anchorRef) {
            if (false) {}
          } else {
            this.initializePopper();
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyPopover();
    }
  }, {
    key: "initializePopper",
    value: function initializePopper() {
      var _this$props = this.props,
          placement = _this$props.placement,
          popperOptions = _this$props.popperOptions;

      var modifiers = popperOptions.modifiers,
          restOptions = _objectWithoutProperties(popperOptions, ["modifiers"]);

      this.popper = new _popper["default"](this.props.anchorRef, this.props.popperRef, _objectSpread({
        // Recommended placement (popper may ignore if it causes a viewport overflow, etc)
        placement: (0, _utils.toPopperPlacement)(placement),
        modifiers: _objectSpread({
          // Passing the arrow ref will measure the arrow when calculating styles
          arrow: {
            element: this.props.arrowRef,
            enabled: !!this.props.arrowRef
          },
          computeStyle: {
            // Make popper use top/left instead of transform translate, this is because
            // we use transform for animations and we dont want them to conflict
            gpuAcceleration: false
          },
          applyStyle: {
            // Disable default styling modifier, we'll apply styles on our own
            enabled: false
          },
          applyReactStyle: {
            enabled: true,
            fn: this.onPopperUpdate,
            order: 900
          },
          preventOverflow: {
            enabled: true
          }
        }, modifiers)
      }, restOptions));
    }
  }, {
    key: "destroyPopover",
    value: function destroyPopover() {
      if (this.popper) {
        this.popper.destroy();
        delete this.popper;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return Tether;
}(React.Component);

_defineProperty(Tether, "defaultProps", {
  anchorRef: null,
  onPopperUpdate: function onPopperUpdate() {
    return null;
  },
  placement: _constants.TETHER_PLACEMENT.auto,
  popperRef: null,
  popperOptions: {}
});

var _default = Tether;
exports["default"] = _default;

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(137);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71);
/* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);
/* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(187);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(183);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(27);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_21__);























/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;

for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(133)))

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toPopperPlacement = toPopperPlacement;
exports.parsePopperOffset = parsePopperOffset;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

function toPopperPlacement(placement) {
  return placement.replace(/(Top|Left)$/, '-start').replace(/(Right|Bottom)$/, '-end');
}
/**
 * Takes the offset passed from popper.js and normalizes it
 */


function parsePopperOffset(offset) {
  return {
    top: Math.floor(offset.top || 0),
    left: Math.floor(offset.left || 0)
  };
}

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var React = _interopRequireWildcard(__webpack_require__(0));

var _constants = __webpack_require__(126);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withProps = withProps;

var React = _interopRequireWildcard(__webpack_require__(0));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function withProps(Component, customProps) {
  return function withPropsHOC(props) {
    return React.createElement(Component, _extends({}, customProps, props));
  };
}

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.10.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var b = "function" === typeof Symbol && Symbol["for"],
    c = b ? Symbol["for"]("react.element") : 60103,
    d = b ? Symbol["for"]("react.portal") : 60106,
    e = b ? Symbol["for"]("react.fragment") : 60107,
    f = b ? Symbol["for"]("react.strict_mode") : 60108,
    g = b ? Symbol["for"]("react.profiler") : 60114,
    h = b ? Symbol["for"]("react.provider") : 60109,
    k = b ? Symbol["for"]("react.context") : 60110,
    l = b ? Symbol["for"]("react.async_mode") : 60111,
    m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
    n = b ? Symbol["for"]("react.forward_ref") : 60112,
    p = b ? Symbol["for"]("react.suspense") : 60113,
    q = b ? Symbol["for"]("react.suspense_list") : 60120,
    r = b ? Symbol["for"]("react.memo") : 60115,
    t = b ? Symbol["for"]("react.lazy") : 60116,
    v = b ? Symbol["for"]("react.fundamental") : 60117,
    w = b ? Symbol["for"]("react.responder") : 60118,
    x = b ? Symbol["for"]("react.scope") : 60119;

function y(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case h:
                return a;

              default:
                return u;
            }

        }

      case t:
      case r:
      case d:
        return u;
    }
  }
}

function z(a) {
  return y(a) === m;
}

exports.typeOf = y;
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
};

exports.isAsyncMode = function (a) {
  return z(a) || y(a) === l;
};

exports.isConcurrentMode = z;

exports.isContextConsumer = function (a) {
  return y(a) === k;
};

exports.isContextProvider = function (a) {
  return y(a) === h;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return y(a) === n;
};

exports.isFragment = function (a) {
  return y(a) === e;
};

exports.isLazy = function (a) {
  return y(a) === t;
};

exports.isMemo = function (a) {
  return y(a) === r;
};

exports.isPortal = function (a) {
  return y(a) === d;
};

exports.isProfiler = function (a) {
  return y(a) === g;
};

exports.isStrictMode = function (a) {
  return y(a) === f;
};

exports.isSuspense = function (a) {
  return y(a) === p;
};

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(7);
var $values = __webpack_require__(189)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(11);

__webpack_require__(17);

__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(5);

__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var React = _interopRequireWildcard(__webpack_require__(0));

var _overrides = __webpack_require__(127);

var _styledComponents = __webpack_require__(265);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function Icon(props) {
  var children = props.children,
      title = props.title,
      _props$overrides = props.overrides,
      overrides = _props$overrides === void 0 ? {} : _props$overrides,
      size = props.size,
      color = props.color,
      restProps = _objectWithoutProperties(props, ["children", "title", "overrides", "size", "color"]);

  var sharedProps = {
    $size: size,
    $color: color
  };

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Svg, _styledComponents.Svg),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      Svg = _getOverrides2[0],
      overrideProps = _getOverrides2[1];

  return React.createElement(Svg, _extends({
    "data-baseweb": "icon"
  }, restProps, sharedProps, overrideProps), title ? React.createElement("title", null, title) : null, children);
}

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSvgStyles = getSvgStyles;
exports.Svg = void 0;

var _index = __webpack_require__(78);
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/


function getSvgStyles(_ref) {
  var $theme = _ref.$theme,
      $size = _ref.$size,
      $color = _ref.$color;

  if ($size) {
    if ($theme.sizing[$size]) {
      $size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      $size = "".concat($size, "px");
    }
  } else {
    $size = $theme.sizing.scale600;
  }

  return {
    display: 'inline-block',
    fill: $color || 'currentColor',
    color: $color || 'currentColor',
    height: $size,
    width: $size
  };
}

var Svg = (0, _index.styled)('svg', getSvgStyles);
exports.Svg = Svg;
Svg.displayName = "Svg";

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = omitDollarPrefixedKeys;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// eslint-disable-next-line flowtype/no-weak-types

function omitDollarPrefixedKeys(source) {
  var result = {};

  for (var key in source) {
    if (key[0] !== '$') {
      result[key] = source[key];
    }
  }

  return result;
}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(11);

__webpack_require__(17);

__webpack_require__(13);

__webpack_require__(8);

__webpack_require__(5);

__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _styledComponents = __webpack_require__(268);

var _overrides = __webpack_require__(127);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function Block(_ref) {
  var forwardedRef = _ref.forwardedRef,
      children = _ref.children,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      color = _ref.color,
      backgroundAttachment = _ref.backgroundAttachment,
      backgroundClip = _ref.backgroundClip,
      backgroundColor = _ref.backgroundColor,
      backgroundImage = _ref.backgroundImage,
      backgroundOrigin = _ref.backgroundOrigin,
      backgroundPosition = _ref.backgroundPosition,
      backgroundRepeat = _ref.backgroundRepeat,
      backgroundSize = _ref.backgroundSize,
      font = _ref.font,
      alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      alignSelf = _ref.alignSelf,
      flexDirection = _ref.flexDirection,
      display = _ref.display,
      flex = _ref.flex,
      grid = _ref.grid,
      gridArea = _ref.gridArea,
      gridAutoColumns = _ref.gridAutoColumns,
      gridAutoFlow = _ref.gridAutoFlow,
      gridAutoRows = _ref.gridAutoRows,
      gridColumn = _ref.gridColumn,
      gridColumnEnd = _ref.gridColumnEnd,
      gridColumnGap = _ref.gridColumnGap,
      gridColumnStart = _ref.gridColumnStart,
      gridGap = _ref.gridGap,
      gridRow = _ref.gridRow,
      gridRowEnd = _ref.gridRowEnd,
      gridRowGap = _ref.gridRowGap,
      gridRowStart = _ref.gridRowStart,
      gridTemplate = _ref.gridTemplate,
      gridTemplateAreas = _ref.gridTemplateAreas,
      gridTemplateColumns = _ref.gridTemplateColumns,
      gridTemplateRows = _ref.gridTemplateRows,
      justifyContent = _ref.justifyContent,
      justifyItems = _ref.justifyItems,
      justifySelf = _ref.justifySelf,
      position = _ref.position,
      width = _ref.width,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      height = _ref.height,
      minHeight = _ref.minHeight,
      maxHeight = _ref.maxHeight,
      overflow = _ref.overflow,
      margin = _ref.margin,
      marginTop = _ref.marginTop,
      marginRight = _ref.marginRight,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
      padding = _ref.padding,
      paddingTop = _ref.paddingTop,
      paddingRight = _ref.paddingRight,
      paddingBottom = _ref.paddingBottom,
      paddingLeft = _ref.paddingLeft,
      placeContent = _ref.placeContent,
      placeItems = _ref.placeItems,
      placeSelf = _ref.placeSelf,
      flexWrap = _ref.flexWrap,
      left = _ref.left,
      top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      textOverflow = _ref.textOverflow,
      whiteSpace = _ref.whiteSpace,
      restProps = _objectWithoutProperties(_ref, ["forwardedRef", "children", "as", "overrides", "color", "backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundRepeat", "backgroundSize", "font", "alignContent", "alignItems", "alignSelf", "flexDirection", "display", "flex", "grid", "gridArea", "gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnGap", "gridColumnStart", "gridGap", "gridRow", "gridRowEnd", "gridRowGap", "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "justifyContent", "justifyItems", "justifySelf", "position", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "overflow", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "placeContent", "placeItems", "placeSelf", "flexWrap", "left", "top", "right", "bottom", "textOverflow", "whiteSpace"]);

  var _getOverrides = (0, _overrides.getOverrides)(overrides.Block, _styledComponents.StyledBlock),
      _getOverrides2 = _slicedToArray(_getOverrides, 2),
      BaseBlock = _getOverrides2[0],
      baseBlockProps = _getOverrides2[1];

  return React.createElement(BaseBlock, _extends({
    ref: forwardedRef,
    $as: as,
    $color: color,
    $backgroundAttachment: backgroundAttachment,
    $backgroundClip: backgroundClip,
    $backgroundColor: backgroundColor,
    $backgroundImage: backgroundImage,
    $backgroundOrigin: backgroundOrigin,
    $backgroundPosition: backgroundPosition,
    $backgroundRepeat: backgroundRepeat,
    $backgroundSize: backgroundSize,
    $font: font,
    $alignContent: alignContent,
    $alignItems: alignItems,
    $alignSelf: alignSelf,
    $flexDirection: flexDirection,
    $display: display,
    $flex: flex,
    $grid: grid,
    $gridArea: gridArea,
    $gridAutoColumns: gridAutoColumns,
    $gridAutoFlow: gridAutoFlow,
    $gridAutoRows: gridAutoRows,
    $gridColumn: gridColumn,
    $gridColumnEnd: gridColumnEnd,
    $gridColumnGap: gridColumnGap,
    $gridColumnStart: gridColumnStart,
    $gridGap: gridGap,
    $gridRow: gridRow,
    $gridRowEnd: gridRowEnd,
    $gridRowGap: gridRowGap,
    $gridRowStart: gridRowStart,
    $gridTemplate: gridTemplate,
    $gridTemplateAreas: gridTemplateAreas,
    $gridTemplateColumns: gridTemplateColumns,
    $gridTemplateRows: gridTemplateRows,
    $justifyContent: justifyContent,
    $justifyItems: justifyItems,
    $justifySelf: justifySelf,
    $position: position,
    $width: width,
    $minWidth: minWidth,
    $maxWidth: maxWidth,
    $height: height,
    $minHeight: minHeight,
    $maxHeight: maxHeight,
    $overflow: overflow,
    $margin: margin,
    $marginTop: marginTop,
    $marginRight: marginRight,
    $marginBottom: marginBottom,
    $marginLeft: marginLeft,
    $padding: padding,
    $paddingTop: paddingTop,
    $paddingRight: paddingRight,
    $paddingBottom: paddingBottom,
    $paddingLeft: paddingLeft,
    $placeContent: placeContent,
    $placeItems: placeItems,
    $placeSelf: placeSelf,
    $flexWrap: flexWrap,
    $left: left,
    $top: top,
    $right: right,
    $bottom: bottom,
    $textOverflow: textOverflow,
    $whiteSpace: whiteSpace,
    "data-baseweb": "block"
  }, restProps, baseBlockProps), children);
}

var BlockComponent = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({}, props, {
    forwardedRef: ref
  }));
});
BlockComponent.displayName = 'Block';
var _default = BlockComponent;
exports["default"] = _default;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(17);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledBlock = void 0;

var _responsiveHelpers = __webpack_require__(269);

var _index = __webpack_require__(78);
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// styletron will throw when value is undefined. if so, replace with null


function constrainToNull(value) {
  if (value === undefined) {
    return null;
  }

  return value;
}

function build(breakpoints) {
  var styles = {};
  var mediaQueries = (0, _responsiveHelpers.getMediaQueries)(breakpoints);
  return {
    apply: function apply(_ref) {
      var property = _ref.property,
          _ref$transform = _ref.transform,
          transform = _ref$transform === void 0 ? function (x) {
        return x;
      } : _ref$transform,
          value = _ref.value;

      if (value === null || value === undefined) {
        return;
      }

      if (Array.isArray(value)) {
        value.forEach(function (v, index) {
          // Do not create a media query for the smallest breakpoint.
          if (index === 0) {
            styles[property] = constrainToNull(transform(v));
            return;
          }

          var mediaQuery = mediaQueries[index - 1];

          if (!styles[mediaQuery]) {
            styles[mediaQuery] = {};
          }

          styles[mediaQuery][property] = constrainToNull(transform(v));
        });
      } else {
        styles[property] = constrainToNull(transform(value));
      }
    },
    value: function value() {
      return styles;
    }
  };
}

function getFontValue(obj, key) {
  if (!obj) return;
  return obj[key];
}

var StyledBlock = (0, _index.styled)('div', function (props) {
  var _props$$theme = props.$theme,
      breakpoints = _props$$theme.breakpoints,
      colors = _props$$theme.colors,
      typography = _props$$theme.typography,
      sizing = _props$$theme.sizing;

  var get = function get(obj, key) {
    return obj[key];
  };

  var getScale = function getScale(size) {
    return sizing[size] || size;
  };

  var styles = build(breakpoints);
  styles.apply({
    property: 'color',
    value: get(props, '$color'),
    transform: function transform(color) {
      return colors[color] || color;
    }
  });
  styles.apply({
    property: 'backgroundAttachment',
    value: get(props, '$backgroundAttachment')
  });
  styles.apply({
    property: 'backgroundClip',
    value: get(props, '$backgroundClip')
  });
  styles.apply({
    property: 'backgroundColor',
    value: get(props, '$backgroundColor'),
    transform: function transform(backgroundColor) {
      return colors[backgroundColor] || backgroundColor;
    }
  });
  styles.apply({
    property: 'backgroundImage',
    value: get(props, '$backgroundImage')
  });
  styles.apply({
    property: 'backgroundOrigin',
    value: get(props, '$backgroundOrigin')
  });
  styles.apply({
    property: 'backgroundPosition',
    value: get(props, '$backgroundPosition')
  });
  styles.apply({
    property: 'backgroundRepeat',
    value: get(props, '$backgroundRepeat')
  });
  styles.apply({
    property: 'backgroundSize',
    value: get(props, '$backgroundSize')
  });
  styles.apply({
    property: 'fontFamily',
    value: get(props, '$font'),
    transform: function transform(font) {
      return getFontValue(typography[font], 'fontFamily');
    }
  });
  styles.apply({
    property: 'fontWeight',
    value: get(props, '$font'),
    transform: function transform(font) {
      return getFontValue(typography[font], 'fontWeight');
    }
  });
  styles.apply({
    property: 'fontSize',
    value: get(props, '$font'),
    transform: function transform(font) {
      return getFontValue(typography[font], 'fontSize');
    }
  });
  styles.apply({
    property: 'lineHeight',
    value: get(props, '$font'),
    transform: function transform(font) {
      return getFontValue(typography[font], 'lineHeight');
    }
  });
  styles.apply({
    property: 'alignContent',
    value: get(props, '$alignContent')
  });
  styles.apply({
    property: 'alignItems',
    value: get(props, '$alignItems')
  });
  styles.apply({
    property: 'alignSelf',
    value: get(props, '$alignSelf')
  });
  styles.apply({
    property: 'display',
    value: get(props, '$display')
  });
  styles.apply({
    property: 'flex',
    value: get(props, '$flex')
  });
  styles.apply({
    property: 'flexDirection',
    value: get(props, '$flexDirection')
  });
  styles.apply({
    property: 'grid',
    value: get(props, '$grid')
  });
  styles.apply({
    property: 'gridArea',
    value: get(props, '$gridArea')
  });
  styles.apply({
    property: 'gridAutoColumns',
    value: get(props, '$gridAutoColumns')
  });
  styles.apply({
    property: 'gridAutoFlow',
    value: get(props, '$gridAutoFlow')
  });
  styles.apply({
    property: 'gridAutoRows',
    value: get(props, '$gridAutoRows')
  });
  styles.apply({
    property: 'gridColumn',
    value: get(props, '$gridColumn')
  });
  styles.apply({
    property: 'gridColumnEnd',
    value: get(props, '$gridColumnEnd')
  });
  styles.apply({
    property: 'gridColumnGap',
    value: get(props, '$gridColumnGap'),
    transform: getScale
  });
  styles.apply({
    property: 'gridColumnStart',
    value: get(props, '$gridColumnStart')
  });
  styles.apply({
    property: 'gridGap',
    value: get(props, '$gridGap'),
    transform: getScale
  });
  styles.apply({
    property: 'gridRow',
    value: get(props, '$gridRow')
  });
  styles.apply({
    property: 'gridRowEnd',
    value: get(props, '$gridRowEnd')
  });
  styles.apply({
    property: 'gridRowGap',
    value: get(props, '$gridRowGap'),
    transform: getScale
  });
  styles.apply({
    property: 'gridRowStart',
    value: get(props, '$gridRowStart')
  });
  styles.apply({
    property: 'gridTemplate',
    value: get(props, '$gridTemplate')
  });
  styles.apply({
    property: 'gridTemplateAreas',
    value: get(props, '$gridTemplateAreas')
  });
  styles.apply({
    property: 'gridTemplateColumns',
    value: get(props, '$gridTemplateColumns')
  });
  styles.apply({
    property: 'gridTemplateRows',
    value: get(props, '$gridTemplateRows')
  });
  styles.apply({
    property: 'justifyContent',
    value: get(props, '$justifyContent')
  });
  styles.apply({
    property: 'justifyItems',
    value: get(props, '$justifyItems')
  });
  styles.apply({
    property: 'justifySelf',
    value: get(props, '$justifySelf')
  });
  styles.apply({
    property: 'position',
    value: get(props, '$position')
  });
  styles.apply({
    property: 'width',
    value: get(props, '$width'),
    transform: getScale
  });
  styles.apply({
    property: 'minWidth',
    value: get(props, '$minWidth'),
    transform: getScale
  });
  styles.apply({
    property: 'maxWidth',
    value: get(props, '$maxWidth'),
    transform: getScale
  });
  styles.apply({
    property: 'height',
    value: get(props, '$height'),
    transform: getScale
  });
  styles.apply({
    property: 'minHeight',
    value: get(props, '$minHeight'),
    transform: getScale
  });
  styles.apply({
    property: 'maxHeight',
    value: get(props, '$maxHeight'),
    transform: getScale
  });
  styles.apply({
    property: 'overflowX',
    value: get(props, '$overflow'),
    transform: function transform(overflow) {
      if (overflow === 'scrollX') {
        return 'scroll';
      }

      return null;
    }
  });
  styles.apply({
    property: 'overflowY',
    value: get(props, '$overflow'),
    transform: function transform(overflow) {
      if (overflow === 'scrollY') {
        return 'scroll';
      }

      return null;
    }
  });
  styles.apply({
    property: 'overflow',
    value: get(props, '$overflow'),
    transform: function transform(overflow) {
      if (overflow !== 'scrollX' && overflow !== 'scrollY') {
        return overflow;
      }

      return null;
    }
  });
  styles.apply({
    property: 'margin',
    value: get(props, '$margin'),
    transform: getScale
  });
  styles.apply({
    property: 'marginTop',
    value: get(props, '$marginTop'),
    transform: getScale
  });
  styles.apply({
    property: 'marginRight',
    value: get(props, '$marginRight'),
    transform: getScale
  });
  styles.apply({
    property: 'marginBottom',
    value: get(props, '$marginBottom'),
    transform: getScale
  });
  styles.apply({
    property: 'marginLeft',
    value: get(props, '$marginLeft'),
    transform: getScale
  });
  styles.apply({
    property: 'padding',
    value: get(props, '$padding'),
    transform: getScale
  });
  styles.apply({
    property: 'paddingTop',
    value: get(props, '$paddingTop'),
    transform: getScale
  });
  styles.apply({
    property: 'paddingRight',
    value: get(props, '$paddingRight'),
    transform: getScale
  });
  styles.apply({
    property: 'paddingBottom',
    value: get(props, '$paddingBottom'),
    transform: getScale
  });
  styles.apply({
    property: 'paddingLeft',
    value: get(props, '$paddingLeft'),
    transform: getScale
  });
  styles.apply({
    property: 'placeContent',
    value: get(props, '$placeContent')
  });
  styles.apply({
    property: 'placeItems',
    value: get(props, '$placeItems')
  });
  styles.apply({
    property: 'placeSelf',
    value: get(props, '$placeSelf')
  });
  styles.apply({
    property: 'flexWrap',
    value: get(props, '$flexWrap'),
    transform: function transform() {
      return 'wrap';
    }
  });
  styles.apply({
    property: 'top',
    value: get(props, '$top')
  });
  styles.apply({
    property: 'right',
    value: get(props, '$right')
  });
  styles.apply({
    property: 'left',
    value: get(props, '$left')
  });
  styles.apply({
    property: 'bottom',
    value: get(props, '$bottom')
  });
  styles.apply({
    property: 'textOverflow',
    value: get(props, '$textOverflow')
  });
  styles.apply({
    property: 'whiteSpace',
    value: get(props, '$whiteSpace')
  });
  return styles.value();
});
exports.StyledBlock = StyledBlock;
StyledBlock.displayName = "StyledBlock";

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(84);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(19);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMediaQueries = exports.getMediaQuery = void 0;
/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/**
 * Helper function that generates media queries based on given parameters
 *
 * E.g.
 * getMediaQuery({'max-width': '1280px', 'min-height': '720px'}, 'and') =>
 *   '@media screen and (max-width: 1280px) and (min-height: 720px)'
 */

var getMediaQuery = function getMediaQuery(options) {
  var booleanOperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'OR';
  var mediaFeatureSeparator = booleanOperator === 'OR' ? ', ' : ' and ';
  var mediaFeatures = Object.keys(options).map(function (key) {
    return "(".concat(key, ": ").concat(options[key], ")");
  });
  return "@media screen and ".concat(mediaFeatures.join(mediaFeatureSeparator));
};

exports.getMediaQuery = getMediaQuery;

var getMediaQueries = function getMediaQueries(breakpoints) {
  return Object.keys(breakpoints).map(function (key) {
    return breakpoints[key];
  }).sort(function (a, b) {
    return a - b;
  }).map(function (size) {
    return getMediaQuery({
      'min-width': "".concat(size, "px")
    });
  });
};

exports.getMediaQueries = getMediaQueries;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(170);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var GoMarkGithub = function GoMarkGithub(props) {
  return _react2["default"].createElement(_reactIconBase2["default"], _extends({
    viewBox: '0 0 40 40'
  }, props), _react2["default"].createElement('g', null, _react2["default"].createElement('path', {
    d: 'm20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z'
  })));
};

exports["default"] = GoMarkGithub;
module.exports = exports['default'];

/***/ }),
/* 271 */,
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(37);

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(120));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(121));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(122));

var _react = _interopRequireDefault(__webpack_require__(0));

var _scrollBehavior = _interopRequireDefault(__webpack_require__(273));

var _propTypes = _interopRequireDefault(__webpack_require__(42));

var _history = __webpack_require__(56);

var _StateStorage = _interopRequireDefault(__webpack_require__(280));

var propTypes = {
  shouldUpdateScroll: _propTypes["default"].func,
  children: _propTypes["default"].element.isRequired,
  location: _propTypes["default"].object.isRequired
};
var childContextTypes = {
  scrollBehavior: _propTypes["default"].object.isRequired
};

var ScrollContext =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(ScrollContext, _React$Component);

  function ScrollContext(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.scrollBehavior, prevRouterProps, routerProps);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "registerElement", function (key, element, shouldUpdateScroll) {
      _this.scrollBehavior.registerElement(key, element, shouldUpdateScroll, _this.getRouterProps());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unregisterElement", function (key) {
      _this.scrollBehavior.unregisterElement(key);
    });
    _this.scrollBehavior = new _scrollBehavior["default"]({
      addTransitionHook: _history.globalHistory.listen,
      stateStorage: new _StateStorage["default"](),
      getCurrentLocation: function getCurrentLocation() {
        return _this.props.location;
      },
      shouldUpdateScroll: _this.shouldUpdateScroll
    });
    return _this;
  }

  var _proto = ScrollContext.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      scrollBehavior: this
    };
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var location = this.props.location;
    var prevLocation = prevProps.location;

    if (location === prevLocation) {
      return;
    }

    var prevRouterProps = {
      location: prevProps.location
    }; // The "scroll-behavior" package expects the "action" to be on the location
    // object so let's copy it over.
    // Temp hack while awaiting https://github.com/reach/router/issues/119

    if (window.__navigatingToLink) {
      location.action = "PUSH";
    } else {
      location.action = "POP";
    }

    this.scrollBehavior.updateScroll(prevRouterProps, {
      history: _history.globalHistory,
      location: location
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.scrollBehavior.stop();
  };

  _proto.getRouterProps = function getRouterProps() {
    var location = this.props.location;
    return {
      location: location,
      history: _history.globalHistory
    };
  };

  _proto.render = function render() {
    return _react["default"].Children.only(this.props.children);
  };

  return ScrollContext;
}(_react["default"].Component);

ScrollContext.propTypes = propTypes;
ScrollContext.childContextTypes = childContextTypes;
var _default = ScrollContext;
exports["default"] = _default;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(3);

__webpack_require__(9);

__webpack_require__(18);

exports.__esModule = true;

var _off = __webpack_require__(274);

var _off2 = _interopRequireDefault(_off);

var _on = __webpack_require__(275);

var _on2 = _interopRequireDefault(_on);

var _scrollLeft = __webpack_require__(276);

var _scrollLeft2 = _interopRequireDefault(_scrollLeft);

var _scrollTop = __webpack_require__(277);

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _requestAnimationFrame = __webpack_require__(278);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _invariant = __webpack_require__(57);

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = __webpack_require__(279);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable no-underscore-dangle */
// Try at most this many times to scroll, to avoid getting stuck.


var MAX_SCROLL_ATTEMPTS = 2;

var ScrollBehavior = function () {
  function ScrollBehavior(_ref) {
    var _this = this;

    var addTransitionHook = _ref.addTransitionHook,
        stateStorage = _ref.stateStorage,
        getCurrentLocation = _ref.getCurrentLocation,
        shouldUpdateScroll = _ref.shouldUpdateScroll;

    _classCallCheck(this, ScrollBehavior);

    this._restoreScrollRestoration = function () {
      /* istanbul ignore if: not supported by any browsers on Travis */
      if (_this._oldScrollRestoration) {
        try {
          window.history.scrollRestoration = _this._oldScrollRestoration;
        } catch (e) {
          /* silence */
        }
      }
    };

    this._onWindowScroll = function () {
      // It's possible that this scroll operation was triggered by what will be a
      // `POP` transition. Instead of updating the saved location immediately, we
      // have to enqueue the update, then potentially cancel it if we observe a
      // location update.
      if (!_this._saveWindowPositionHandle) {
        _this._saveWindowPositionHandle = (0, _requestAnimationFrame2["default"])(_this._saveWindowPosition);
      }

      if (_this._windowScrollTarget) {
        var _windowScrollTarget = _this._windowScrollTarget,
            xTarget = _windowScrollTarget[0],
            yTarget = _windowScrollTarget[1];
        var x = (0, _scrollLeft2["default"])(window);
        var y = (0, _scrollTop2["default"])(window);

        if (x === xTarget && y === yTarget) {
          _this._windowScrollTarget = null;

          _this._cancelCheckWindowScroll();
        }
      }
    };

    this._saveWindowPosition = function () {
      _this._saveWindowPositionHandle = null;

      _this._savePosition(null, window);
    };

    this._checkWindowScrollPosition = function () {
      _this._checkWindowScrollHandle = null; // We can only get here if scrollTarget is set. Every code path that unsets
      // scroll target also cancels the handle to avoid calling this handler.
      // Still, check anyway just in case.

      /* istanbul ignore if: paranoid guard */

      if (!_this._windowScrollTarget) {
        return;
      }

      _this.scrollToTarget(window, _this._windowScrollTarget);

      ++_this._numWindowScrollAttempts;
      /* istanbul ignore if: paranoid guard */

      if (_this._numWindowScrollAttempts >= MAX_SCROLL_ATTEMPTS) {
        _this._windowScrollTarget = null;
        return;
      }

      _this._checkWindowScrollHandle = (0, _requestAnimationFrame2["default"])(_this._checkWindowScrollPosition);
    };

    this._stateStorage = stateStorage;
    this._getCurrentLocation = getCurrentLocation;
    this._shouldUpdateScroll = shouldUpdateScroll; // This helps avoid some jankiness in fighting against the browser's
    // default scroll behavior on `POP` transitions.

    /* istanbul ignore else: Travis browsers all support this */

    if ('scrollRestoration' in window.history && // Unfortunately, Safari on iOS freezes for 2-6s after the user swipes to
    // navigate through history with scrollRestoration being 'manual', so we
    // need to detect this browser and exclude it from the following code
    // until this bug is fixed by Apple.
    !(0, _utils.isMobileSafari)()) {
      this._oldScrollRestoration = window.history.scrollRestoration;

      try {
        window.history.scrollRestoration = 'manual'; // Scroll restoration persists across page reloads. We want to reset
        // this to the original value, so that we can let the browser handle
        // restoring the initial scroll position on server-rendered pages.

        (0, _on2["default"])(window, 'beforeunload', this._restoreScrollRestoration);
      } catch (e) {
        this._oldScrollRestoration = null;
      }
    } else {
      this._oldScrollRestoration = null;
    }

    this._saveWindowPositionHandle = null;
    this._checkWindowScrollHandle = null;
    this._windowScrollTarget = null;
    this._numWindowScrollAttempts = 0;
    this._scrollElements = {}; // We have to listen to each window scroll update rather than to just
    // location updates, because some browsers will update scroll position
    // before emitting the location change.

    (0, _on2["default"])(window, 'scroll', this._onWindowScroll);
    this._removeTransitionHook = addTransitionHook(function () {
      _requestAnimationFrame2["default"].cancel(_this._saveWindowPositionHandle);

      _this._saveWindowPositionHandle = null;
      Object.keys(_this._scrollElements).forEach(function (key) {
        var scrollElement = _this._scrollElements[key];

        _requestAnimationFrame2["default"].cancel(scrollElement.savePositionHandle);

        scrollElement.savePositionHandle = null; // It's fine to save element scroll positions here, though; the browser
        // won't modify them.

        _this._saveElementPosition(key);
      });
    });
  }

  ScrollBehavior.prototype.registerElement = function registerElement(key, element, shouldUpdateScroll, context) {
    var _this2 = this;

    !!this._scrollElements[key] ?  false ? undefined : (0, _invariant2["default"])(false) : void 0;

    var saveElementPosition = function saveElementPosition() {
      _this2._saveElementPosition(key);
    };

    var scrollElement = {
      element: element,
      shouldUpdateScroll: shouldUpdateScroll,
      savePositionHandle: null,
      onScroll: function onScroll() {
        if (!scrollElement.savePositionHandle) {
          scrollElement.savePositionHandle = (0, _requestAnimationFrame2["default"])(saveElementPosition);
        }
      }
    };
    this._scrollElements[key] = scrollElement;
    (0, _on2["default"])(element, 'scroll', scrollElement.onScroll);

    this._updateElementScroll(key, null, context);
  };

  ScrollBehavior.prototype.unregisterElement = function unregisterElement(key) {
    !this._scrollElements[key] ?  false ? undefined : (0, _invariant2["default"])(false) : void 0;
    var _scrollElements$key = this._scrollElements[key],
        element = _scrollElements$key.element,
        onScroll = _scrollElements$key.onScroll,
        savePositionHandle = _scrollElements$key.savePositionHandle;
    (0, _off2["default"])(element, 'scroll', onScroll);

    _requestAnimationFrame2["default"].cancel(savePositionHandle);

    delete this._scrollElements[key];
  };

  ScrollBehavior.prototype.updateScroll = function updateScroll(prevContext, context) {
    var _this3 = this;

    this._updateWindowScroll(prevContext, context);

    Object.keys(this._scrollElements).forEach(function (key) {
      _this3._updateElementScroll(key, prevContext, context);
    });
  };

  ScrollBehavior.prototype.stop = function stop() {
    this._restoreScrollRestoration();

    (0, _off2["default"])(window, 'scroll', this._onWindowScroll);

    this._cancelCheckWindowScroll();

    this._removeTransitionHook();
  };

  ScrollBehavior.prototype._cancelCheckWindowScroll = function _cancelCheckWindowScroll() {
    _requestAnimationFrame2["default"].cancel(this._checkWindowScrollHandle);

    this._checkWindowScrollHandle = null;
  };

  ScrollBehavior.prototype._saveElementPosition = function _saveElementPosition(key) {
    var scrollElement = this._scrollElements[key];
    scrollElement.savePositionHandle = null;

    this._savePosition(key, scrollElement.element);
  };

  ScrollBehavior.prototype._savePosition = function _savePosition(key, element) {
    this._stateStorage.save(this._getCurrentLocation(), key, [(0, _scrollLeft2["default"])(element), (0, _scrollTop2["default"])(element)]);
  };

  ScrollBehavior.prototype._updateWindowScroll = function _updateWindowScroll(prevContext, context) {
    // Whatever we were doing before isn't relevant any more.
    this._cancelCheckWindowScroll();

    this._windowScrollTarget = this._getScrollTarget(null, this._shouldUpdateScroll, prevContext, context); // Updating the window scroll position is really flaky. Just trying to
    // scroll it isn't enough. Instead, try to scroll a few times until it
    // works.

    this._numWindowScrollAttempts = 0;

    this._checkWindowScrollPosition();
  };

  ScrollBehavior.prototype._updateElementScroll = function _updateElementScroll(key, prevContext, context) {
    var _scrollElements$key2 = this._scrollElements[key],
        element = _scrollElements$key2.element,
        shouldUpdateScroll = _scrollElements$key2.shouldUpdateScroll;

    var scrollTarget = this._getScrollTarget(key, shouldUpdateScroll, prevContext, context);

    if (!scrollTarget) {
      return;
    } // Unlike with the window, there shouldn't be any flakiness to deal with
    // here.


    this.scrollToTarget(element, scrollTarget);
  };

  ScrollBehavior.prototype._getDefaultScrollTarget = function _getDefaultScrollTarget(location) {
    var hash = location.hash;

    if (hash && hash !== '#') {
      return hash.charAt(0) === '#' ? hash.slice(1) : hash;
    }

    return [0, 0];
  };

  ScrollBehavior.prototype._getScrollTarget = function _getScrollTarget(key, shouldUpdateScroll, prevContext, context) {
    var scrollTarget = shouldUpdateScroll ? shouldUpdateScroll.call(this, prevContext, context) : true;

    if (!scrollTarget || Array.isArray(scrollTarget) || typeof scrollTarget === 'string') {
      return scrollTarget;
    }

    var location = this._getCurrentLocation();

    return this._getSavedScrollTarget(key, location) || this._getDefaultScrollTarget(location);
  };

  ScrollBehavior.prototype._getSavedScrollTarget = function _getSavedScrollTarget(key, location) {
    if (location.action === 'PUSH') {
      return null;
    }

    return this._stateStorage.read(location, key);
  };

  ScrollBehavior.prototype.scrollToTarget = function scrollToTarget(element, target) {
    if (typeof target === 'string') {
      var targetElement = document.getElementById(target) || document.getElementsByName(target)[0];

      if (targetElement) {
        targetElement.scrollIntoView();
        return;
      } // Fallback to scrolling to top when target fragment doesn't exist.


      target = [0, 0]; // eslint-disable-line no-param-reassign
    }

    var _target = target,
        left = _target[0],
        top = _target[1];
    (0, _scrollLeft2["default"])(element, left);
    (0, _scrollTop2["default"])(element, top);
  };

  return ScrollBehavior;
}();

exports["default"] = ScrollBehavior;
module.exports = exports['default'];

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(37);

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(128));

var off = function off() {};

if (_inDOM["default"]) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(37);

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(128));

var on = function on() {};

if (_inDOM["default"]) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(37);

exports.__esModule = true;
exports["default"] = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(171));

function scrollTop(node, val) {
  var win = (0, _isWindow["default"])(node);
  if (val === undefined) return win ? 'pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft : node.scrollLeft;
  if (win) win.scrollTo(val, 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop);else node.scrollLeft = val;
}

module.exports = exports["default"];

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(37);

exports.__esModule = true;
exports["default"] = scrollTop;

var _isWindow = _interopRequireDefault(__webpack_require__(171));

function scrollTop(node, val) {
  var win = (0, _isWindow["default"])(node);
  if (val === undefined) return win ? 'pageYOffset' in win ? win.pageYOffset : win.document.documentElement.scrollTop : node.scrollTop;
  if (win) win.scrollTo('pageXOffset' in win ? win.pageXOffset : win.document.documentElement.scrollLeft, val);else node.scrollTop = val;
}

module.exports = exports["default"];

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(74);

var _interopRequireDefault = __webpack_require__(37);

exports.__esModule = true;
exports["default"] = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(128));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM["default"]) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isMobileSafari = isMobileSafari;

function isMobileSafari() {
  return /iPad|iPhone|iPod/.test(window.navigator.platform) && /^((?!CriOS).)*Safari/.test(window.navigator.userAgent);
}

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage =
/*#__PURE__*/
function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return JSON.parse(value);
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return {};
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var locationKey = location.key || location.pathname;
    var stateKeyBase = "" + STATE_KEY_PREFIX + locationKey;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports["default"] = SessionStorage;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(37);

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(120));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(121));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(122));

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(100));

var _warning = _interopRequireDefault(__webpack_require__(160));

var _propTypes = _interopRequireDefault(__webpack_require__(42));

var propTypes = {
  scrollKey: _propTypes["default"].string.isRequired,
  shouldUpdateScroll: _propTypes["default"].func,
  children: _propTypes["default"].element.isRequired
};
var contextTypes = {
  // This is necessary when rendering on the client. However, when rendering on
  // the server, this container will do nothing, and thus does not require the
  // scroll behavior context.
  scrollBehavior: _propTypes["default"].object
};

var ScrollContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2["default"])(ScrollContainer, _React$Component);

  function ScrollContainer(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this; // We don't re-register if the scroll key changes, so make sure we
    // unregister with the initial scroll key just in case the user changes it.

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "shouldUpdateScroll", function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing scrollBehavior._stateStorage.


      return shouldUpdateScroll.call(_this.context.scrollBehavior.scrollBehavior, prevRouterProps, routerProps);
    });
    _this.scrollKey = props.scrollKey;
    return _this;
  }

  var _proto = ScrollContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.context.scrollBehavior.registerElement(this.props.scrollKey, _reactDom["default"].findDOMNode(this), // eslint-disable-line react/no-find-dom-node
    this.shouldUpdateScroll); // Only keep around the current DOM node in development, as this is only
    // for emitting the appropriate warning.

    if (false) {}
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    (0, _warning["default"])(prevProps.scrollKey === this.props.scrollKey, "<ScrollContainer> does not support changing scrollKey.");

    if (false) { var prevDomNode; }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.context.scrollBehavior.unregisterElement(this.scrollKey);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainer;
}(_react["default"].Component);

ScrollContainer.propTypes = propTypes;
ScrollContainer.contextTypes = contextTypes;
var _default = ScrollContainer;
exports["default"] = _default;

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__);
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register(""+"/sw.js").then(function(reg){reg.addEventListener("updatefound",function(){Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateFound",{serviceWorker:reg});// The updatefound event implies that reg.installing is set; see
// https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
var installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",function(){switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and the fresh content will
// have been added to the cache.
// We set a flag so Gatsby Link knows to refresh the page on next navigation attempt
window.___swUpdated=true;// We call the onServiceWorkerUpdateReady API so users can show update prompts.
Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateReady",{serviceWorker:reg});// If resources failed for the current page, reload.
if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{// At this point, everything has been precached.
// It's the perfect time to display a "Content is cached for offline use." message.
console.log("Content is now available offline!");// Post to service worker that install is complete.
// Delay to allow time for the event listener to be added --
// otherwise fetch is called too soon and resources aren't cached.
Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.trim.js
var es6_string_trim = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.reduce.js
var es6_array_reduce = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__(131);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/utils/capitalizeString.js
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/utils/prefixProperty.js





function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = capitalizeString(property);
    var keys = Object.keys(style);

    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];

      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }

      newStyle[styleProperty] = style[styleProperty];
    }

    return newStyle;
  }

  return style;
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/utils/prefixValue.js
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData); // we can stop processing if a value is returned
    // as all plugin criteria are unique

    if (processedValue) {
      return processedValue;
    }
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/utils/addNewValuesOnly.js



function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/utils/isObject.js

function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/createPrefixer.js





function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
  return function prefix(style) {
    for (var property in style) {
      var value = style[property]; // handle nested objects

      if (isObject(value)) {
        style[property] = prefix(value); // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = prefixValue(plugins, property, value[i], style, prefixMap);
          addNewValuesOnly(combinedValue, processedValue || value[i]);
        } // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations


        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = prefixValue(plugins, property, value, style, prefixMap); // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations


        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = prefixProperty(prefixMap, property, style);
      }
    }

    return style;
  };
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/data.js
var w = ["Webkit"];
var m = ["Moz"];
var ms = ["ms"];
var wm = ["Webkit", "Moz"];
var wms = ["Webkit", "ms"];
var wmms = ["Webkit", "Moz", "ms"];
/* harmony default export */ var data = ({
  plugins: [],
  prefixMap: {
    "appearance": wm,
    "textEmphasisPosition": w,
    "textEmphasis": w,
    "textEmphasisStyle": w,
    "textEmphasisColor": w,
    "boxDecorationBreak": w,
    "maskImage": w,
    "maskMode": w,
    "maskRepeat": w,
    "maskPosition": w,
    "maskClip": w,
    "maskOrigin": w,
    "maskSize": w,
    "maskComposite": w,
    "mask": w,
    "maskBorderSource": w,
    "maskBorderMode": w,
    "maskBorderSlice": w,
    "maskBorderWidth": w,
    "maskBorderOutset": w,
    "maskBorderRepeat": w,
    "maskBorder": w,
    "maskType": w,
    "textDecorationStyle": w,
    "textDecorationSkip": w,
    "textDecorationLine": w,
    "textDecorationColor": w,
    "userSelect": wmms,
    "backdropFilter": w,
    "fontKerning": w,
    "scrollSnapType": wms,
    "scrollSnapPointsX": wms,
    "scrollSnapPointsY": wms,
    "scrollSnapDestination": wms,
    "scrollSnapCoordinate": wms,
    "clipPath": w,
    "shapeImageThreshold": w,
    "shapeImageMargin": w,
    "shapeImageOutside": w,
    "filter": w,
    "hyphens": wms,
    "flowInto": wms,
    "flowFrom": wms,
    "breakBefore": wms,
    "breakAfter": wms,
    "breakInside": wms,
    "regionFragment": wms,
    "writingMode": wms,
    "textOrientation": w,
    "tabSize": m,
    "fontFeatureSettings": w,
    "columnCount": w,
    "columnFill": w,
    "columnGap": w,
    "columnRule": w,
    "columnRuleColor": w,
    "columnRuleStyle": w,
    "columnRuleWidth": w,
    "columns": w,
    "columnSpan": w,
    "columnWidth": w,
    "wrapFlow": ms,
    "wrapThrough": ms,
    "wrapMargin": ms,
    "textSizeAdjust": wms
  }
});
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/backgroundClip.js
// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/cursor.js

var cursor_prefixes = ['-webkit-', '-moz-', ''];
var cursor_values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};
function cursor(property, value) {
  if (property === 'cursor' && cursor_values.hasOwnProperty(value)) {
    return cursor_prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
// EXTERNAL MODULE: ./node_modules/css-in-js-utils/lib/isPrefixedValue.js
var isPrefixedValue = __webpack_require__(38);
var isPrefixedValue_default = /*#__PURE__*/__webpack_require__.n(isPrefixedValue);

// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/crossFade.js



 // http://caniuse.com/#search=cross-fade

var crossFade_prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !isPrefixedValue_default()(value) && value.indexOf('cross-fade(') > -1) {
    return crossFade_prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/filter.js



 // http://caniuse.com/#feat=css-filter-function

var filter_prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !isPrefixedValue_default()(value) && value.indexOf('filter(') > -1) {
    return filter_prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/flex.js
var flex_values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};
function flex(property, value) {
  if (property === 'display' && flex_values.hasOwnProperty(value)) {
    return flex_values[value];
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/flexboxOld.js

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};
var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};
function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }

    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }

  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/gradient.js



var gradient_prefixes = ['-webkit-', '-moz-', ''];
var gradient_values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function gradient(property, value) {
  if (typeof value === 'string' && !isPrefixedValue_default()(value) && gradient_values.test(value)) {
    return gradient_prefixes.map(function (prefix) {
      return value.replace(gradient_values, function (grad) {
        return prefix + grad;
      });
    });
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/grid.js








var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];
var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};
var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },
  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else {
      var _value$split$map = value.split('/').map(function (position) {
        return +position;
      }),
          _value$split$map2 = _slicedToArray(_value$split$map, 2),
          start = _value$split$map2[0],
          end = _value$split$map2[1];

      propertyConverters.gridColumnStart(start, style);
      propertyConverters.gridColumnEnd(end, style);
    }
  },
  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },
  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },
  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else {
      var _value$split$map3 = value.split('/').map(function (position) {
        return +position;
      }),
          _value$split$map4 = _slicedToArray(_value$split$map3, 2),
          start = _value$split$map4[0],
          end = _value$split$map4[1];

      propertyConverters.gridRowStart(start, style);
      propertyConverters.gridRowEnd(end, style);
    }
  },
  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },
  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },
  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },
  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },
  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};
function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/imageSet.js



 // http://caniuse.com/#feat=css-image-set

var imageSet_prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !isPrefixedValue_default()(value) && value.indexOf('image-set(') > -1) {
    return imageSet_prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/logical.js
var logical_alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};
function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(logical_alternativeProps, property)) {
    var alternativePropList = logical_alternativeProps[property];

    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/position.js
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/sizing.js

var sizing_prefixes = ['-webkit-', '-moz-', ''];
var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var sizing_values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};
function sizing(property, value) {
  if (properties.hasOwnProperty(property) && sizing_values.hasOwnProperty(value)) {
    return sizing_prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/css-in-js-utils/lib/hyphenateProperty.js
var hyphenateProperty = __webpack_require__(172);
var hyphenateProperty_default = /*#__PURE__*/__webpack_require__.n(hyphenateProperty);

// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/plugins/transition.js







var transition_properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};
var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function transition_prefixValue(value, propertyPrefixMap) {
  if (isPrefixedValue_default()(value)) {
    return value;
  } // only split multi values, not cubic beziers


  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];

    for (var property in propertyPrefixMap) {
      var dashCaseProperty = hyphenateProperty_default()(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];

        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && transition_properties.hasOwnProperty(property)) {
    var outputValue = transition_prefixValue(value, propertyPrefixMap); // if the property is already prefixed

    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + capitalizeString(property)] = webkitOutput;
    style['Moz' + capitalizeString(property)] = mozOutput;
    return outputValue;
  }
}
// CONCATENATED MODULE: ./node_modules/inline-style-prefixer/es/index.js















var es_plugins = [backgroundClip, crossFade, cursor, filter, flexboxOld, gradient, grid, imageSet, logical, position, sizing, transition, flex];
var es_prefix = createPrefixer({
  prefixMap: data.prefixMap,
  plugins: es_plugins
});

// CONCATENATED MODULE: ./node_modules/styletron-engine-atomic/dist/browser.es5.es.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return StyletronClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return StyletronServer; });




















var SequentialIDGenerator =
/*#__PURE__*/
function () {
  function SequentialIDGenerator(prefix$$1) {
    if (prefix$$1 === void 0) {
      prefix$$1 = "";
    } // ensure start with "ae" so "ad" is never produced


    this.prefix = prefix$$1;
    this.count = 0;
    this.offset = 374;
    this.msb = 1295;
    this.power = 2;
  }

  var _proto = SequentialIDGenerator.prototype;

  _proto.next = function next() {
    var id = this.increment().toString(36);
    return this.prefix ? "" + this.prefix + id : id;
  };

  _proto.increment = function increment() {
    var id = this.count + this.offset;

    if (id === this.msb) {
      this.offset += (this.msb + 1) * 9;
      this.msb = Math.pow(36, ++this.power) - 1;
    }

    this.count++;
    return id;
  };

  return SequentialIDGenerator;
}(); // adapted from https://github.com/dutchenkoOleg/sort-css-media-queries


var minMaxWidth = /(!?\(\s*min(-device-)?-width).+\(\s*max(-device)?-width/i;
var minWidth = /\(\s*min(-device)?-width/i;
var maxMinWidth = /(!?\(\s*max(-device)?-width).+\(\s*min(-device)?-width/i;
var maxWidth = /\(\s*max(-device)?-width/i;

var isMinWidth = _testQuery(minMaxWidth, maxMinWidth, minWidth);

var isMaxWidth = _testQuery(maxMinWidth, minMaxWidth, maxWidth);

var minMaxHeight = /(!?\(\s*min(-device)?-height).+\(\s*max(-device)?-height/i;
var minHeight = /\(\s*min(-device)?-height/i;
var maxMinHeight = /(!?\(\s*max(-device)?-height).+\(\s*min(-device)?-height/i;
var maxHeight = /\(\s*max(-device)?-height/i;

var isMinHeight = _testQuery(minMaxHeight, maxMinHeight, minHeight);

var isMaxHeight = _testQuery(maxMinHeight, minMaxHeight, maxHeight);

var isPrint = /print/i;
var isPrintOnly = /^print$/i;
var maxValue = Number.MAX_VALUE;

function _getQueryLength(length) {
  var matches = /(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(length);

  if (matches === null) {
    return maxValue;
  }

  var number = matches[1];
  var unit = matches[2];

  switch (unit) {
    case "ch":
      number = parseFloat(number) * 8.8984375;
      break;

    case "em":
    case "rem":
      number = parseFloat(number) * 16;
      break;

    case "ex":
      number = parseFloat(number) * 8.296875;
      break;

    case "px":
      number = parseFloat(number);
      break;
  }

  return +number;
}

function _testQuery(doubleTestTrue, doubleTestFalse, singleTest) {
  return function (query) {
    if (doubleTestTrue.test(query)) {
      return true;
    } else if (doubleTestFalse.test(query)) {
      return false;
    }

    return singleTest.test(query);
  };
}

function _testIsPrint(a, b) {
  var isPrintA = isPrint.test(a);
  var isPrintOnlyA = isPrintOnly.test(a);
  var isPrintB = isPrint.test(b);
  var isPrintOnlyB = isPrintOnly.test(b);

  if (isPrintA && isPrintB) {
    if (!isPrintOnlyA && isPrintOnlyB) {
      return 1;
    }

    if (isPrintOnlyA && !isPrintOnlyB) {
      return -1;
    }

    return a.localeCompare(b);
  }

  if (isPrintA) {
    return 1;
  }

  if (isPrintB) {
    return -1;
  }

  return null;
}

function sortCSSmq(a, b) {
  if (a === "") {
    return -1;
  }

  if (b === "") {
    return 1;
  }

  var testIsPrint = _testIsPrint(a, b);

  if (testIsPrint !== null) {
    return testIsPrint;
  }

  var minA = isMinWidth(a) || isMinHeight(a);
  var maxA = isMaxWidth(a) || isMaxHeight(a);
  var minB = isMinWidth(b) || isMinHeight(b);
  var maxB = isMaxWidth(b) || isMaxHeight(b);

  if (minA && maxB) {
    return -1;
  }

  if (maxA && minB) {
    return 1;
  }

  var lengthA = _getQueryLength(a);

  var lengthB = _getQueryLength(b);

  if (lengthA === maxValue && lengthB === maxValue) {
    return a.localeCompare(b);
  } else if (lengthA === maxValue) {
    return 1;
  } else if (lengthB === maxValue) {
    return -1;
  }

  if (lengthA > lengthB) {
    if (maxA) {
      return -1;
    }

    return 1;
  }

  if (lengthA < lengthB) {
    if (maxA) {
      return 1;
    }

    return -1;
  }

  return a.localeCompare(b);
}

var MultiCache =
/*#__PURE__*/
function () {
  function MultiCache(idGenerator, onNewCache, onNewValue) {
    this.idGenerator = idGenerator;
    this.onNewCache = onNewCache;
    this.onNewValue = onNewValue;
    this.sortedCacheKeys = [];
    this.caches = {};
  }

  var _proto = MultiCache.prototype;

  _proto.getCache = function getCache(key) {
    if (!this.caches[key]) {
      var _cache = new Cache(this.idGenerator, this.onNewValue);

      _cache.key = key;
      this.sortedCacheKeys.push(key);
      this.sortedCacheKeys.sort(sortCSSmq);
      var keyIndex = this.sortedCacheKeys.indexOf(key);
      var insertBeforeMedia = keyIndex < this.sortedCacheKeys.length - 1 ? this.sortedCacheKeys[keyIndex + 1] : void 0;
      this.caches[key] = _cache;
      this.onNewCache(key, _cache, insertBeforeMedia);
    }

    return this.caches[key];
  };

  _proto.getSortedCacheKeys = function getSortedCacheKeys() {
    return this.sortedCacheKeys;
  };

  return MultiCache;
}();

var Cache =
/*#__PURE__*/
function () {
  function Cache(idGenerator, onNewValue) {
    this.cache = {};
    this.idGenerator = idGenerator;
    this.onNewValue = onNewValue;
  }

  var _proto2 = Cache.prototype;

  _proto2.addValue = function addValue(key, value) {
    var cached = this.cache[key];

    if (cached) {
      return cached;
    }

    var id = this.idGenerator.next();
    this.cache[key] = id;
    this.onNewValue(this, id, value);
    return id;
  };

  return Cache;
}();

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var browser_es5_es_cache = {};

function hyphenateStyleName(prop) {
  return prop in browser_es5_es_cache ? browser_es5_es_cache[prop] : browser_es5_es_cache[prop] = prop.replace(uppercasePattern, "-$&").toLowerCase().replace(msPattern, "-ms-");
}
/**
 * Adapted from https://github.com/gilmoreorless/css-shorthand-properties
 */


var shorthandMap = {
  // CSS 2.1: https://www.w3.org/TR/CSS2/propidx.html
  "list-style": ["list-style-type", "list-style-position", "list-style-image"],
  margin: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
  outline: ["outline-width", "outline-style", "outline-color"],
  padding: ["padding-top", "padding-right", "padding-bottom", "padding-left"],
  // CSS Backgrounds and Borders Module Level 3: https://www.w3.org/TR/css3-background/
  background: ["background-image", "background-position", "background-size", "background-repeat", "background-origin", "background-clip", "background-attachment", "background-color"],
  border: ["border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-width", "border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-style", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "border-color"],
  "border-color": ["border-top-color", "border-right-color", "border-bottom-color", "border-left-color"],
  "border-style": ["border-top-style", "border-right-style", "border-bottom-style", "border-left-style"],
  "border-width": ["border-top-width", "border-right-width", "border-bottom-width", "border-left-width"],
  "border-top": ["border-top-width", "border-top-style", "border-top-color"],
  "border-right": ["border-right-width", "border-right-style", "border-right-color"],
  "border-bottom": ["border-bottom-width", "border-bottom-style", "border-bottom-color"],
  "border-left": ["border-left-width", "border-left-style", "border-left-color"],
  "border-radius": ["border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius"],
  "border-image": ["border-image-source", "border-image-slice", "border-image-width", "border-image-outset", "border-image-repeat"],
  // CSS Fonts Module Level 3: https://www.w3.org/TR/css3-fonts/
  font: ["font-style", "font-variant-ligatures", "font-variant-alternates", "font-variant-caps", "font-variant-numeric", "font-variant-east-asian", "font-variant", "font-weight", "font-stretch", "font-size", "line-height", "font-family"],
  "font-variant": ["font-variant-ligatures", "font-variant-alternates", "font-variant-caps", "font-variant-numeric", "font-variant-east-asian"],
  // CSS Flexible Box Layout Module Level 1: https://www.w3.org/TR/css3-flexbox-1/
  flex: ["flex-grow", "flex-shrink", "flex-basis"],
  "flex-flow": ["flex-direction", "flex-wrap"],
  // CSS Grid Layout Module Level 1: https://www.w3.org/TR/css-grid-1/
  grid: ["grid-template-rows", "grid-template-columns", "grid-template-areas", "grid-auto-rows", "grid-auto-columns", "grid-auto-flow"],
  "grid-template": ["grid-template-rows", "grid-template-columns", "grid-template-areas"],
  "grid-row": ["grid-row-start", "grid-row-end"],
  "grid-column": ["grid-column-start", "grid-column-end"],
  "grid-area": ["grid-row-start", "grid-column-start", "grid-row-end", "grid-column-end"],
  "grid-gap": ["grid-row-gap", "grid-column-gap"],
  // CSS Masking Module Level 1: https://www.w3.org/TR/css-masking/
  mask: ["mask-image", "mask-mode", "mask-position", "mask-size", "mask-repeat", "mask-origin", "mask-clip"],
  "mask-border": ["mask-border-source", "mask-border-slice", "mask-border-width", "mask-border-outset", "mask-border-repeat", "mask-border-mode"],
  // CSS Multi-column Layout Module: https://www.w3.org/TR/css3-multicol/
  columns: ["column-width", "column-count"],
  "column-rule": ["column-rule-width", "column-rule-style", "column-rule-color"],
  // CSS Scroll Snap Module Level 1: https://www.w3.org/TR/css-scroll-snap-1/
  "scroll-padding": ["scroll-padding-top", "scroll-padding-right", "scroll-padding-bottom", "scroll-padding-left"],
  "scroll-padding-block": ["scroll-padding-block-start", "scroll-padding-block-end"],
  "scroll-padding-inline": ["scroll-padding-inline-start", "scroll-padding-inline-end"],
  "scroll-snap-margin": ["scroll-snap-margin-top", "scroll-snap-margin-right", "scroll-snap-margin-bottom", "scroll-snap-margin-left"],
  "scroll-snap-margin-block": ["scroll-snap-margin-block-start", "scroll-snap-margin-block-end"],
  "scroll-snap-margin-inline": ["scroll-snap-margin-inline-start", "scroll-snap-margin-inline-end"],
  // CSS Speech Module: https://www.w3.org/TR/css3-speech/
  cue: ["cue-before", "cue-after"],
  pause: ["pause-before", "pause-after"],
  rest: ["rest-before", "rest-after"],
  // CSS Text Decoration Module Level 3: https://www.w3.org/TR/css-text-decor-3/
  "text-decoration": ["text-decoration-line", "text-decoration-style", "text-decoration-color"],
  "text-emphasis": ["text-emphasis-style", "text-emphasis-color"],
  // CSS Animations (WD): https://www.w3.org/TR/css3-animations
  animation: ["animation-name", "animation-duration", "animation-timing-function", "animation-delay", "animation-iteration-count", "animation-direction", "animation-fill-mode", "animation-play-state"],
  // CSS Transitions (WD): https://www.w3.org/TR/css3-transitions/
  transition: ["transition-property", "transition-duration", "transition-timing-function", "transition-delay"]
};

function validateNoMixedHand(style) {
  var hyphenatedProperties = Object.keys(style).reduce(function (acc, property) {
    acc[hyphenateStyleName(property)] = property;
    return acc;
  }, {});
  var mixed = [];

  for (var property in hyphenatedProperties) {
    if (property in shorthandMap) {
      for (var _iterator = shorthandMap[property], _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _longhand = _ref;

        if (_longhand in hyphenatedProperties) {
          var _long = hyphenatedProperties[_longhand];
          var _short = hyphenatedProperties[property];
          mixed.push({
            shorthand: {
              property: _short,
              value: style[_short]
            },
            longhand: {
              property: _long,
              value: style[_long]
            }
          });
        }
      }
    }
  }

  return mixed;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function injectStylePrefixed(styleCache, styles, media, pseudo) {
  var cache = styleCache.getCache(media);
  var classString = "";

  for (var originalKey in styles) {
    var originalVal = styles[originalKey];

    if (_typeof(originalVal) !== "object") {
      // Primitive value
      if (false) {}

      var propValPair = hyphenateStyleName(originalKey) + ":" + originalVal;
      var key = "" + pseudo + propValPair;
      var cachedId = cache.cache[key];

      if (cachedId !== void 0) {
        // cache hit
        classString += " " + cachedId;
        continue;
      } else {
        var _prefix; // cache miss


        var block = "";
        var prefixed = es_prefix((_prefix = {}, _prefix[originalKey] = originalVal, _prefix));

        for (var prefixedKey in prefixed) {
          var prefixedVal = prefixed[prefixedKey];

          var prefixedValType = _typeof(prefixedVal);

          if (prefixedValType === "string" || prefixedValType === "number") {
            var prefixedPair = hyphenateStyleName(prefixedKey) + ":" + prefixedVal;

            if (prefixedPair !== propValPair) {
              block += prefixedPair + ";";
            }
          } else if (Array.isArray(prefixedVal)) {
            var hyphenated = hyphenateStyleName(prefixedKey);

            for (var i = 0; i < prefixedVal.length; i++) {
              var _prefixedPair = hyphenated + ":" + prefixedVal[i];

              if (_prefixedPair !== propValPair) {
                block += _prefixedPair + ";";
              }
            }
          }
        }

        block += propValPair; // ensure original prop/val is last (for hydration)

        var id = cache.addValue(key, {
          pseudo: pseudo,
          block: block
        });
        classString += " " + id;
      }
    } else {
      // Object value
      if (originalKey[0] === ":") {
        classString += " " + injectStylePrefixed(styleCache, originalVal, media, pseudo + originalKey);
      } else if (originalKey.substring(0, 6) === "@media") {
        classString += " " + injectStylePrefixed(styleCache, originalVal, originalKey.substr(7), pseudo);
      }
    }
  }

  if (false) { var conflicts; } // remove leading space


  return classString.slice(1);
}

function validateValueType(value) {
  if (value === null || Array.isArray(value) || typeof value !== "number" && typeof value !== "string") {
    throw new Error("Unsupported style value: " + JSON.stringify(value));
  }
}

function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}
/* eslint-disable no-console */


var validAnimationState = /^(from|to|\+?(\d*\.)?\d+%)(\s*,\s*(from|to|\+?(\d*\.)?\d+%))*$/;

function validateKeyframesObject(keyframes) {
  var valid = true;

  for (var animationState in keyframes) {
    var value = keyframes[animationState];

    if (!validAnimationState.test(animationState)) {
      valid = false;
      console.warn("Warning: property \"" + animationState + "\" in keyframes object " + JSON.stringify(keyframes) + " is not a valid. Must be \"from\", \"to\", or a percentage.");
    }

    if (_typeof$1(value) !== "object") {
      valid = false;
      console.warn("Warning: value for \"" + animationState + "\" property in keyframes object " + JSON.stringify(keyframes) + " must be an object. Instead it was a " + _typeof$1(value) + ".");
    }

    if (!valid) {
      console.warn("Warning: object used as value for \"animationName\" style is invalid:", keyframes);
    }
  }
}

function atomicSelector(id, pseudo) {
  var selector = "." + id;

  if (pseudo) {
    selector += pseudo;
  }

  return selector;
}

function keyframesToBlock(keyframes) {
  if (false) {}

  if (false) {}

  var result = "";

  for (var animationState in keyframes) {
    result += animationState + "{" + declarationsToBlock(keyframes[animationState]) + "}";
  }

  return result;
}

function declarationsToBlock(style) {
  var css = "";

  for (var prop in style) {
    var val = style[prop];

    if (typeof val === "string" || typeof val === "number") {
      css += hyphenateStyleName(prop) + ":" + val + ";";
    }
  } // trim trailing semicolon


  return css.slice(0, -1);
}

function keyframesBlockToRule(id, block) {
  return "@keyframes " + id + "{" + block + "}";
}

function fontFaceBlockToRule(id, block) {
  return "@font-face{font-family:" + id + ";" + block + "}";
}

function styleBlockToRule(selector, block) {
  return selector + "{" + block + "}";
}
/* eslint-env browser */


var insertRuleIntoDevtools = function insertRuleIntoDevtools(selector, block) {
  // start after the . combinator and cut at the first : if there is one to cut out the pseudo classes
  var key = selector.substring(1, selector.indexOf(":") !== -1 ? selector.indexOf(":") : selector.length);
  var styles = {}; // split the declaration to catch vendor prefixing

  for (var _iterator = block.split(";"), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var _decl = _ref;
    if (_decl.trim() !== "" && !window.__STYLETRON_DEVTOOLS__.atomicMap[key]) styles[_decl.substring(0, _decl.indexOf(":"))] = _decl.substring(_decl.indexOf(":") + 1, _decl.length);
  }

  window.__STYLETRON_DEVTOOLS__.atomicMap[key] = styles;
};

var hydrateDevtoolsRule = function hydrateDevtoolsRule(cssString) {
  var id = cssString.substring(0, 3);
  var block = cssString.substring(4, cssString.length - 1);
  insertRuleIntoDevtools(id, block);
};
/* eslint-env browser */


var STYLES_HYDRATOR = /\.([^{:]+)(:[^{]+)?{(?:[^}]*;)?([^}]*?)}/g;
var KEYFRAMES_HYRDATOR = /@keyframes ([^{]+)\{((?:[^{]+\{[^}]*\})*)\}/g;
var FONT_FACE_HYDRATOR = /@font-face\{font-family:([^;]+);([^}]*)\}/g;

function hydrateStyles(cache, hydrator, css) {
  var match;

  while (match = hydrator.exec(css)) {
    var _match = match,
        id = _match[1],
        pseudo = _match[2],
        key = _match[3];

    if (false) {}

    var fullKey = pseudo ? "" + pseudo + key : key;
    cache.cache[fullKey] = id; // set cache without triggering side effects

    cache.idGenerator.increment(); // increment id
  }
}

function hydrate(cache, hydrator, css) {
  var match;

  while (match = hydrator.exec(css)) {
    var _match2 = match,
        id = _match2[1],
        key = _match2[2];

    if (false) {}

    cache.cache[key] = id; // set cache without triggering side effects

    cache.idGenerator.increment(); // increment id
  }
}

var StyletronClient =
/*#__PURE__*/
function () {
  function StyletronClient(opts) {
    var _this = this;

    if (opts === void 0) {
      opts = {};
    }

    this.styleElements = {};
    var styleIdGenerator = new SequentialIDGenerator(opts.prefix);

    var onNewStyle = function onNewStyle(cache, id, value) {
      var pseudo = value.pseudo,
          block = value.block;
      var sheet = _this.styleElements[cache.key].sheet;
      var selector = atomicSelector(id, pseudo);
      var rule = styleBlockToRule(selector, block);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);

        if (false) {}
      } catch (e) {
        if (false) {}
      }
    }; // Setup style cache


    this.styleCache = new MultiCache(styleIdGenerator, function (media, _cache, insertBeforeMedia) {
      var styleElement = document.createElement("style");
      styleElement.media = media;

      if (insertBeforeMedia === void 0) {
        _this.container.appendChild(styleElement);
      } else {
        var insertBeforeIndex = findSheetIndexWithMedia(_this.container.children, insertBeforeMedia);

        _this.container.insertBefore(styleElement, _this.container.children[insertBeforeIndex]);
      }

      _this.styleElements[media] = styleElement;
    }, onNewStyle);
    this.keyframesCache = new Cache(new SequentialIDGenerator(opts.prefix), function (cache, id, value) {
      _this.styleCache.getCache("");

      var sheet = _this.styleElements[""].sheet;
      var rule = keyframesBlockToRule(id, keyframesToBlock(value));

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    });
    this.fontFaceCache = new Cache(new SequentialIDGenerator(opts.prefix), function (cache, id, value) {
      _this.styleCache.getCache("");

      var sheet = _this.styleElements[""].sheet;
      var rule = fontFaceBlockToRule(id, declarationsToBlock(value));

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    });

    if (opts.container) {
      this.container = opts.container;
    } // Hydrate


    if (opts.hydrate && opts.hydrate.length > 0) {
      // infer container from parent element
      if (!this.container) {
        var parentElement = opts.hydrate[0].parentElement;

        if (parentElement !== null && parentElement !== void 0) {
          this.container = parentElement;
        }
      }

      for (var i = 0; i < opts.hydrate.length; i++) {
        var element = opts.hydrate[i];
        var hydrateType = element.dataset.hydrate;

        if (hydrateType === "font-face") {
          hydrate(this.fontFaceCache, FONT_FACE_HYDRATOR, element.textContent);
          continue;
        }

        if (hydrateType === "keyframes") {
          hydrate(this.keyframesCache, KEYFRAMES_HYRDATOR, element.textContent);
          continue;
        }

        var key = element.media ? element.media : "";
        this.styleElements[key] = element;
        var cache = new Cache(styleIdGenerator, onNewStyle);
        cache.key = key;
        hydrateStyles(cache, STYLES_HYDRATOR, element.textContent);
        this.styleCache.sortedCacheKeys.push(key);
        this.styleCache.caches[key] = cache;
      }
    }

    if (!this.container) {
      if (document.head === null) {
        throw new Error("No container provided and `document.head` was null");
      }

      this.container = document.head;
    }
  }

  var _proto = StyletronClient.prototype;

  _proto.renderStyle = function renderStyle(style) {
    return injectStylePrefixed(this.styleCache, style, "", "");
  };

  _proto.renderFontFace = function renderFontFace(fontFace) {
    var key = declarationsToBlock(fontFace);
    return this.fontFaceCache.addValue(key, fontFace);
  };

  _proto.renderKeyframes = function renderKeyframes(keyframes) {
    var key = keyframesToBlock(keyframes);
    return this.keyframesCache.addValue(key, keyframes);
  };

  return StyletronClient;
}();

function findSheetIndexWithMedia(children, media) {
  var index = 0;

  for (; index < children.length; index++) {
    var child = children[index];

    if (child.tagName === "STYLE" && child.media === media) {
      return index;
    }
  }

  return -1;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var StyletronServer =
/*#__PURE__*/
function () {
  function StyletronServer(opts) {
    var _this = this;

    if (opts === void 0) {
      opts = {};
    }

    this.styleRules = {
      "": ""
    };
    this.styleCache = new MultiCache(new SequentialIDGenerator(opts.prefix), function (media) {
      _this.styleRules[media] = "";
    }, function (cache, id, value) {
      var pseudo = value.pseudo,
          block = value.block;
      _this.styleRules[cache.key] += styleBlockToRule(atomicSelector(id, pseudo), block);
    });
    this.fontFaceRules = "";
    this.fontFaceCache = new Cache(new SequentialIDGenerator(opts.prefix), function (cache, id, value) {
      _this.fontFaceRules += fontFaceBlockToRule(id, declarationsToBlock(value));
    });
    this.keyframesRules = "";
    this.keyframesCache = new Cache(new SequentialIDGenerator(opts.prefix), function (cache, id, value) {
      _this.keyframesRules += keyframesBlockToRule(id, keyframesToBlock(value));
    });
  }

  var _proto = StyletronServer.prototype;

  _proto.renderStyle = function renderStyle(style) {
    return injectStylePrefixed(this.styleCache, style, "", "");
  };

  _proto.renderFontFace = function renderFontFace(fontFace) {
    var key = JSON.stringify(fontFace);
    return this.fontFaceCache.addValue(key, fontFace);
  };

  _proto.renderKeyframes = function renderKeyframes(keyframes) {
    var key = JSON.stringify(keyframes);
    return this.keyframesCache.addValue(key, keyframes);
  };

  _proto.getStylesheets = function getStylesheets() {
    return [].concat(this.keyframesRules.length ? [{
      css: this.keyframesRules,
      attrs: {
        "data-hydrate": "keyframes"
      }
    }] : [], this.fontFaceRules.length ? [{
      css: this.fontFaceRules,
      attrs: {
        "data-hydrate": "font-face"
      }
    }] : [], sheetify(this.styleRules, this.styleCache.getSortedCacheKeys()));
  };

  _proto.getStylesheetsHtml = function getStylesheetsHtml(className) {
    if (className === void 0) {
      className = "_styletron_hydrate_";
    }

    return generateHtmlString(this.getStylesheets(), className);
  };

  _proto.getCss = function getCss() {
    return this.keyframesRules + this.fontFaceRules + stringify(this.styleRules, this.styleCache.getSortedCacheKeys());
  };

  return StyletronServer;
}();

function generateHtmlString(sheets, className) {
  var html = "";

  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];

    var _sheet$attrs = sheet.attrs,
        originalClassName = _sheet$attrs["class"],
        rest = _objectWithoutProperties(_sheet$attrs, ["class"]);

    var attrs = Object.assign({
      "class": originalClassName ? className + " " + originalClassName : className
    }, rest);
    html += "<style" + attrsToString(attrs) + ">" + sheet.css + "</style>";
  }

  return html;
}

function attrsToString(attrs) {
  var result = "";

  for (var attr in attrs) {
    var value = attrs[attr];

    if (value === true) {
      result += " " + attr;
    } else if (value !== false) {
      result += " " + attr + "=\"" + value + "\"";
    }
  }

  return result;
}

function stringify(styleRules, sortedCacheKeys) {
  var result = "";
  sortedCacheKeys.forEach(function (cacheKey) {
    var rules = styleRules[cacheKey];

    if (cacheKey !== "") {
      result += "@media " + cacheKey + "{" + rules + "}";
    } else {
      result += rules;
    }
  });
  return result;
}

function sheetify(styleRules, sortedCacheKeys) {
  if (sortedCacheKeys.length === 0) {
    return [{
      css: "",
      attrs: {}
    }];
  }

  var sheets = [];
  sortedCacheKeys.forEach(function (cacheKey) {
    // omit media (cacheKey) attribute if empty
    var attrs = cacheKey === "" ? {} : {
      media: cacheKey
    };
    sheets.push({
      css: styleRules[cacheKey],
      attrs: attrs
    });
  });
  return sheets;
}



/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/styled/theme.js
var lightThemePrimitives={primary50:'#EDF3FE',primary100:'#D2E0FC',primary200:'#9CBCF8',primary300:'#548BF4',primary400:'#276EF1',primary500:'#174EB6',primary600:'#123D90',primary700:'#0C2960',negative50:'#FDF0EF',negative100:'#FADBD7',negative200:'#F4AFA7',negative300:'#EB7567',negative400:'#E54937',negative500:'#AE372A',negative600:'#892C21',negative700:'#5C1D16',warning50:'#FEF3EC',warning100:'#FBE2CF',warning200:'#F6BA8B',warning300:'#F19248',warning400:'#ED6F0E',warning500:'#B4540B',warning600:'#8E4308',warning700:'#5F2C06',positive50:'#EBF8F2',positive100:'#CDEDDE',positive200:'#88D3B0',positive300:'#43B982',positive400:'#07A35A',positive500:'#057C44',positive600:'#046236',positive700:'#034124',mono100:'#FFFFFF',mono200:'#F7F7F7',mono300:'#F0F0F0',mono400:'#E5E5E5',mono500:'#CCCCCC',mono600:'#B3B3B3',mono700:'#999999',mono800:'#666666',mono900:'#333333',mono1000:'#000000',rating200:'#FFE1A5',rating400:'#FFC043',primaryFontFamily:'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'};var WHITE='#FFFFFF';function createTheme(primitives){return{breakpoints:{small:320,medium:600,large:1280},colors:{// Primary Palette
primary50:primitives.primary50,primary100:primitives.primary100,primary200:primitives.primary200,primary300:primitives.primary300,primary400:primitives.primary400,primary:primitives.primary400,primary500:primitives.primary500,primary600:primitives.primary600,primary700:primitives.primary700,// Negative Palette
negative50:primitives.negative50,negative100:primitives.negative100,negative200:primitives.negative200,negative300:primitives.negative300,negative400:primitives.negative400,negative:primitives.negative400,negative500:primitives.negative500,negative600:primitives.negative600,negative700:primitives.negative700,// Warning Palette
warning50:primitives.warning50,warning100:primitives.warning100,warning200:primitives.warning200,warning300:primitives.warning300,warning400:primitives.warning400,warning:primitives.warning400,warning500:primitives.warning500,warning600:primitives.warning600,warning700:primitives.warning700,// Positive Palette
positive50:primitives.positive50,positive100:primitives.positive100,positive200:primitives.positive200,positive300:primitives.positive300,positive400:primitives.positive400,positive:primitives.positive400,positive500:primitives.positive500,positive600:primitives.positive600,positive700:primitives.positive700,// Monochrome Palette
white:primitives.mono100,mono100:primitives.mono100,mono200:primitives.mono200,mono300:primitives.mono300,mono400:primitives.mono400,mono500:primitives.mono500,mono600:primitives.mono600,mono700:primitives.mono700,mono800:primitives.mono800,mono900:primitives.mono900,mono1000:primitives.mono1000,black:primitives.mono1000,// Rating Palette,
rating200:primitives.rating200,rating400:primitives.rating400,// Semantic Colors
// Font Color
colorPrimary:primitives.mono1000,colorSecondary:primitives.mono800,// Background
background:primitives.mono100,backgroundAlt:primitives.mono100,backgroundInv:primitives.mono1000,// Foreground
foreground:primitives.mono1000,foregroundAlt:primitives.mono800,foregroundInv:primitives.mono100,// Borders
border:primitives.mono500,borderAlt:primitives.mono600,borderFocus:primitives.primary400,borderError:primitives.negative400,// Buttons
buttonPrimaryFill:primitives.primary400,buttonPrimaryText:primitives.mono100,// white
buttonPrimaryHover:primitives.primary500,buttonPrimaryActive:primitives.primary600,buttonSecondaryFill:primitives.primary50,buttonSecondaryText:primitives.primary400,buttonSecondaryHover:primitives.primary100,buttonSecondaryActive:primitives.primary200,buttonTertiaryFill:primitives.mono200,buttonTertiaryText:primitives.primary400,buttonTertiaryHover:primitives.mono400,buttonTertiaryActive:primitives.mono500,// button $selected only applies to tertiary variant.
buttonTertiarySelectedFill:primitives.primary400,buttonTertiarySelectedText:primitives.mono100,buttonMinimalFill:'transparent',buttonMinimalText:primitives.primary400,buttonMinimalHover:primitives.mono200,buttonMinimalActive:primitives.mono400,buttonDisabledFill:primitives.mono300,buttonDisabledText:primitives.mono600,// Breadcrumbs
breadcrumbsText:primitives.mono900,breadcrumbsSeparatorFill:primitives.mono700,// FileUploader
fileUploaderBackgroundColor:primitives.mono200,fileUploaderBackgroundColorActive:primitives.primary50,fileUploaderBorderColorActive:primitives.primary400,fileUploaderBorderColorDefault:primitives.mono500,fileUploaderMessageColor:primitives.mono600,// Links
linkText:primitives.primary400,linkVisited:primitives.primary500,linkHover:primitives.primary600,// Shadow
shadowFocus:'rgba(39, 110, 241, 0.32)',shadowError:'rgba(229, 73, 55, 0.32)',// List
listHeaderFill:WHITE,listBodyFill:primitives.mono200,listIconFill:primitives.mono500,listBorder:primitives.mono500,// Tick
tickFill:'transparent',tickFillHover:primitives.mono400,tickFillActive:primitives.mono500,tickFillSelected:primitives.primary400,tickFillSelectedHover:primitives.primary500,tickFillSelectedHoverActive:primitives.primary600,tickFillDisabled:primitives.mono400,tickBorder:primitives.mono700,tickMarkFill:WHITE,// Slider
sliderTrackFill:primitives.mono600,sliderTrackFillHover:primitives.mono700,sliderTrackFillActive:primitives.mono800,sliderTrackFillSelected:primitives.primary400,sliderTrackFillSelectedHover:primitives.primary500,sliderTrackFillSelectedActive:primitives.primary600,sliderTrackFillDisabled:primitives.mono600,sliderHandleFill:WHITE,sliderHandleFillHover:WHITE,sliderHandleFillActive:WHITE,sliderHandleFillSelected:WHITE,sliderHandleFillSelectedHover:WHITE,sliderHandleFillSelectedActive:WHITE,sliderHandleFillDisabled:primitives.mono500,sliderBorder:primitives.mono500,sliderBorderHover:primitives.primary400,sliderBorderDisabled:primitives.mono600,// Inputs
inputFill:primitives.mono200,inputFillEnhancer:primitives.mono400,inputFillError:primitives.negative50,inputFillDisabled:primitives.mono300,inputTextDisabled:primitives.mono600,// Menu
menuFillHover:primitives.mono300,// Notification
notificationPrimaryBackground:primitives.primary50,notificationPrimaryText:primitives.primary500,notificationPositiveBackground:primitives.positive50,notificationPositiveText:primitives.positive500,notificationWarningBackground:primitives.warning50,notificationWarningText:primitives.warning500,notificationNegativeBackground:primitives.negative50,notificationNegativeText:primitives.negative500,// Table
tableHeadBackgroundColor:primitives.mono100,// Toast
toastText:WHITE,toastPrimaryBackground:primitives.primary500,toastPositiveBackground:primitives.positive500,toastWarningBackground:primitives.warning500,toastNegativeBackground:primitives.negative500},typography:{font100:{fontFamily:primitives.primaryFontFamily,fontSize:'11px',fontWeight:'normal',lineHeight:'16px'},font200:{fontFamily:primitives.primaryFontFamily,fontSize:'12px',fontWeight:'normal',lineHeight:'20px'},font250:{fontFamily:primitives.primaryFontFamily,fontSize:'12px',fontWeight:'bold',lineHeight:'20px'},font300:{fontFamily:primitives.primaryFontFamily,fontSize:'14px',fontWeight:'normal',lineHeight:'20px'},font350:{fontFamily:primitives.primaryFontFamily,fontSize:'14px',fontWeight:'bold',lineHeight:'20px'},font400:{fontFamily:primitives.primaryFontFamily,fontSize:'16px',fontWeight:'normal',lineHeight:'24px'},font450:{fontFamily:primitives.primaryFontFamily,fontSize:'16px',fontWeight:'bold',lineHeight:'24px'},font500:{fontFamily:primitives.primaryFontFamily,fontSize:'20px',fontWeight:'bold',lineHeight:'28px'},font600:{fontFamily:primitives.primaryFontFamily,fontSize:'24px',fontWeight:'bold',lineHeight:'36px'},font700:{fontFamily:primitives.primaryFontFamily,fontSize:'32px',fontWeight:'bold',lineHeight:'48px'},font800:{fontFamily:primitives.primaryFontFamily,fontSize:'40px',fontWeight:'bold',lineHeight:'56px'},font900:{fontFamily:primitives.primaryFontFamily,fontSize:'52px',fontWeight:'bold',lineHeight:'68px'},font1000:{fontFamily:primitives.primaryFontFamily,fontSize:'72px',fontWeight:'normal',lineHeight:'96px'},font1100:{fontFamily:primitives.primaryFontFamily,fontSize:'96px',fontWeight:'normal',lineHeight:'116px'}},sizing:{scale0:'2px',scale100:'4px',scale200:'6px',scale300:'8px',scale400:'10px',scale500:'12px',scale550:'14px',scale600:'16px',scale700:'20px',scale800:'24px',scale900:'32px',scale1000:'40px',scale1200:'48px',scale1400:'56px',scale1600:'64px',scale2400:'96px',scale3200:'128px',scale4800:'192px'},lighting:{shadow400:'0 1px 4px hsla(0, 0%, 0%, 0.16)',shadow500:'0 2px 8px hsla(0, 0%, 0%, 0.16)',shadow600:'0 4px 16px hsla(0, 0%, 0%, 0.16)',shadow700:'0 8px 24px hsla(0, 0%, 0%, 0.16)',overlay0:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0)',overlay100:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)',overlay200:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.08)',overlay300:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.12)',overlay400:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.16)',overlay500:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.2)',overlay600:'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.24)'},borders:{border100:{borderColor:'hsla(0, 0%, 0%, 0.04)',borderStyle:'solid',borderWidth:'1px'},border200:{borderColor:'hsla(0, 0%, 0%, 0.08)',borderStyle:'solid',borderWidth:'1px'},border300:{borderColor:'hsla(0, 0%, 0%, 0.12)',borderStyle:'solid',borderWidth:'1px'},border400:{borderColor:'hsla(0, 0%, 0%, 0.16)',borderStyle:'solid',borderWidth:'1px'},border500:{borderColor:'hsla(0, 0%, 0%, 0.2)',borderStyle:'solid',borderWidth:'1px'},border600:{borderColor:'hsla(0, 0%, 0%, 0.24)',borderStyle:'solid',borderWidth:'1px'},radius100:'2px',radius200:'4px',radius300:'8px',radius400:'12px',useRoundedCorners:true},animation:{timing100:'0.25s',timing400:'0.4s',timing700:'0.6s',easeOutCurve:'cubic-bezier(.2, .8, .4, 1)',easeInCurve:'cubic-bezier(.8, .2, .6, 1)',easeInOutCurve:'cubic-bezier(0.4, 0, 0.2, 1)'},zIndex:{modal:2000},tooltip:{backgroundColor:primitives.mono900}};}var theme_theme=createTheme(lightThemePrimitives);/* harmony default export */ var styled_theme = (theme_theme);
// EXTERNAL MODULE: ./public/static/d/1164097916.json
var _1164097916 = __webpack_require__(173);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(69);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/site-query.jsx
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// This component contains the StaticQuery needed to provide data for the layout components.
// These layout components will then pass some of that information down to the rest of the site
// ie to the table of content, header, etc.
// because this is a StaticQuery it needs to be in the local tree so that its graphQl can be
// run by gatsby. Rather, a file of the same name must have the same query in the local tree.
// During the init process, ocular copies this file over to the local tree.
// WARNING: DO NOT MODIFY THIS FILE MANUALLY IT WILL BE OVERWRITTEN.
// All common metadata, table-of-contents etc are queried here and put in React context
var QUERY="1164097916";// The Layout instance is shared between pages. It queries common, static data
// and makes it available on React context
var site_query_SiteQuery=/*#__PURE__*/function(_React$Component){_inheritsLoose(SiteQuery,_React$Component);function SiteQuery(){return _React$Component.apply(this,arguments)||this;}var _proto=SiteQuery.prototype;_proto.render=function render(){var onComplete=this.props.onComplete;return react_default.a.createElement(gatsby_browser_entry["b" /* StaticQuery */],{query:QUERY,render:onComplete,data:_1164097916});};return SiteQuery;}(react_default.a.Component);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(103);
var Helmet_default = /*#__PURE__*/__webpack_require__.n(Helmet);

// EXTERNAL MODULE: ./node_modules/react-responsive/dist/react-responsive.js
var react_responsive = __webpack_require__(129);
var react_responsive_default = /*#__PURE__*/__webpack_require__.n(react_responsive);

// EXTERNAL MODULE: ./node_modules/baseui/index.js
var baseui = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/ocular-gatsby/src/components/layout/website-config.jsx
var website_config = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/common/SEO.jsx
function SEO_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// TODO/ib - modify this component to work with ocular content
var SEO_SEO=/*#__PURE__*/function(_Component){SEO_inheritsLoose(SEO,_Component);function SEO(){return _Component.apply(this,arguments)||this;}var _proto=SEO.prototype;_proto.render=function render(){var config=this.props;var _this$props=this.props,postNode=_this$props.postNode,postPath=_this$props.postPath,postSEO=_this$props.postSEO;var title;var description;var image;var postURL;if(postSEO){var postMeta=postNode.frontmatter;title=postMeta.title;description=postMeta.description?postMeta.description:postNode.excerpt;image=postMeta.cover;postURL=config.siteUrl+config.pathPrefix+postPath;}else{title=config.PROJECT_NAME;description=config.PROJECT_DESC;image=config.siteLogo;}var realPrefix=config.pathPrefix==='/'?'':config.pathPrefix;image=config.siteUrl+realPrefix+image;var blogURL=config.siteUrl+config.pathPrefix;var schemaOrgJSONLD=[{'@context':'http://schema.org','@type':'WebSite',url:blogURL,name:title,alternateName:config.siteTitleAlt?config.siteTitleAlt:''}];if(postSEO){schemaOrgJSONLD.push([{'@context':'http://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,item:{'@id':postURL,name:title,image:image}}]},{'@context':'http://schema.org','@type':'BlogPosting',url:blogURL,name:title,alternateName:config.siteTitleAlt?config.siteTitleAlt:'',headline:title,image:{'@type':'ImageObject',url:image},description:description}]);}return react_default.a.createElement(Helmet_default.a,null,react_default.a.createElement("meta",{name:"description",content:description}),react_default.a.createElement("meta",{name:"image",content:image}),react_default.a.createElement("script",{type:"application/ld+json"},JSON.stringify(schemaOrgJSONLD)),react_default.a.createElement("meta",{property:"og:url",content:postSEO?postURL:blogURL}),postSEO?react_default.a.createElement("meta",{property:"og:type",content:"article"}):null,react_default.a.createElement("meta",{property:"og:title",content:title}),react_default.a.createElement("meta",{property:"og:description",content:description}),react_default.a.createElement("meta",{property:"og:image",content:image}),react_default.a.createElement("meta",{property:"fb:app_id",content:config.siteFBAppID?config.siteFBAppID:''}),react_default.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),react_default.a.createElement("meta",{name:"twitter:creator",content:config.userTwitter?config.userTwitter:''}),react_default.a.createElement("meta",{name:"twitter:title",content:title}),react_default.a.createElement("meta",{name:"twitter:description",content:description}),react_default.a.createElement("meta",{name:"twitter:image",content:image}));};return SEO;}(react["Component"]);/* harmony default export */ var common_SEO = (SEO_SEO);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__(132);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__(185);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ocular-gatsby/src/components/styled/index.js + 3 modules
var styled = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/layout/table-of-contents.component.jsx
/* eslint-disable prefer-const */ // Copyright (c) 2018 Uber Technologies, Inc.
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
// sub components of the TOC
// This component only creates a Link component if clicking on that Link will
// effectively change routes. If no path is passed or if the path is not
// usable then it just renders a div. That should not be the case
var table_of_contents_component_SafeLink=function SafeLink(_ref){var active=_ref.active,depth=_ref.depth,hasChildren=_ref.hasChildren,isTocOpen=_ref.isTocOpen,id=_ref.id,name=_ref.name,path=_ref.path,_ref$toggleEntry=_ref.toggleEntry,toggleEntry=_ref$toggleEntry===void 0?function(){}:_ref$toggleEntry;// Gatsby <Link> element emmits warning if "external" links are used
// "internal" links start with `/`
// https://github.com/gatsbyjs/gatsby/issues/11243
if(path&&!path.startsWith('/')){path="/"+path;// eslint-disable-line
}return react_default.a.createElement(styled["P" /* TocEntry */],{$depth:depth,title:name,onClick:function onClick(){return toggleEntry(id);}},hasChildren&&react_default.a.createElement(styled["N" /* TocChevron */],{$depth:depth,$isTocOpen:isTocOpen}),!path||typeof path!=='string'?react_default.a.createElement(styled["Q" /* TocHeader */],{$depth:depth},name):react_default.a.createElement(styled["R" /* TocLink */],{$depth:depth,to:path,title:name,$active:active},name));};var table_of_contents_component_renderRoute=function renderRoute(_ref2){var route=_ref2.route,id=_ref2.id,index=_ref2.index,depth=_ref2.depth,tocState=_ref2.tocState,toggleEntry=_ref2.toggleEntry;var children=route.chapters||route.entries||[];var updatedId=id.concat(index);// parts of the TOC with children
if(children.length){var _name=route.title;var routeInfo=tocState[updatedId];return react_default.a.createElement("div",{key:index},react_default.a.createElement(table_of_contents_component_SafeLink,{depth:depth,hasChildren:true,isTocOpen:routeInfo&&routeInfo.height>0,id:updatedId,name:_name/* uncomment to have the entry act as link to its first child */ /* path={routeInfo && routeInfo.pathToFirstChild} */,toggleEntry:toggleEntry}),react_default.a.createElement(styled["S" /* TocSubpages */],{$height:routeInfo&&routeInfo.height},children.map(function(childRoute,idx){if(!childRoute.childMarkdownRemark){// eslint-disable-next-line no-console
console.warn("Missing content for entry "+idx+" in chapter "+route.title,route);}return renderRoute({depth:depth+1,id:updatedId,index:idx,route:childRoute,tocState:tocState,toggleEntry:toggleEntry});})));}// leaves
var remark=route.childMarkdownRemark;// first syntax is toc for documentation, second is toc for examples
var name=remark&&remark.frontmatter&&remark.frontmatter.title||route.title;var target=remark&&remark.fields&&remark.fields.slug||route.path;return react_default.a.createElement("div",{key:index},react_default.a.createElement("li",null,react_default.a.createElement(table_of_contents_component_SafeLink,{active:tocState[updatedId]&&tocState[updatedId].isSelected===true,depth:depth,name:name,path:target})));};var table_of_contents_component_ControlledToc=function ControlledToc(_ref3){var tree=_ref3.tree,tocState=_ref3.tocState,toggleEntry=_ref3.toggleEntry;return react_default.a.createElement(react_default.a.Fragment,null,tree.map(function(route,index){return table_of_contents_component_renderRoute({route:route,index:index,depth:0,tocState:tocState,toggleEntry:toggleEntry,id:[]});}));};/* harmony default export */ var table_of_contents_component = (table_of_contents_component_ControlledToc);
// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/layout/table-of-contents.jsx
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function table_of_contents_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}/* eslint-disable operator-assignment */ /* eslint-disable no-param-reassign */ /* eslint-disable prefer-const */ // Copyright (c) 2018 Uber Technologies, Inc.
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
// util functions to pre-process the TOC
function isOpen(entry,expanded){// this is all the reasons why a given toc entry with children could
// be expanded.
// either it's manually expanded, or it's on the active route and
// it's not manually collapsed.
return expanded[entry.id]===true||entry.childIsSelected&&expanded[entry.id]!==false;}function updateHeights(tocEntries,expanded){// at this stage we know which entries are expanded or not, whether manually
// or because they contain the active page. now let's compute their heights
// why is it important to compute heights? because without an an absolute
// number we can't transition on height and have smooth collapse effects.
Object.values(tocEntries).forEach(function(tocEntry){if(tocEntry.children){if(isOpen(tocEntry,expanded)){(function(){var queue=[tocEntry];var height=-1;while(queue.length){var current=queue.shift();height=height+1;if(isOpen(current,expanded)){current.children.forEach(function(c){return queue.push(tocEntries[c]);});}}tocEntry.height=height;})();}else{tocEntry.height=0;}}});return tocEntries;}function getTocState(_ref){var chapters=_ref.chapters,slug=_ref.slug,expanded=_ref.expanded;// we try to generate the height of each toc entry and whether it's expanded
// or not based on the toc structure (chapters), whether some entries are
// manually expanded or not (open) and what's the current page (slug)
// there may be a lot of code but this goes very fast even for long tocs.
// one way to uniquely identify entries is by creating an id made of the
// index position of all of its parents and itself.
// ie [2, 0, 1] - 3nd chapter, 1st entry, 2nd item.
var entries={};var queue=chapters.map(function(chapter,i){return Object.assign({},chapter,{id:[i],parents:[]});});var _loop=function _loop(){var current=queue.shift();var id=current.id;entries[id]={id:id};var children=(current.chapters||current.entries||[]).map(function(child,i){return Object.assign({},child,{id:id.concat(i),parents:[].concat(_toConsumableArray(current.parents),[id])});});if(children.length){entries[id].children=children.map(function(c){return c.id;});}children.forEach(function(c){return queue.push(c);});if(current.childMarkdownRemark){// only happens for leave nodes
current.parents.forEach(function(parent){if(current.childMarkdownRemark.fields.slug===slug){entries[parent].childIsSelected=true;}// currently the behavior of entries is to toggle them
// if we switch to using them as link to the first child (as before)
// we can just uncomment that line
// entries[parent].pathToFirstChild = current.childMarkdownRemark.fields.slug;
});entries[id].isSelected=current.childMarkdownRemark.fields.slug===slug;}};while(queue.length){_loop();}return updateHeights(entries,expanded);}var table_of_contents_TableOfContents=/*#__PURE__*/function(_PureComponent){table_of_contents_inheritsLoose(TableOfContents,_PureComponent);function TableOfContents(props){var _this;_this=_PureComponent.call(this,props)||this;var slug=props.slug,chapters=props.chapters,firstItemIsExpanded=props.firstItemIsExpanded;var expanded=firstItemIsExpanded?{0:true}:{};var tocState=getTocState({slug:slug,chapters:chapters,expanded:expanded});// tocState contains the state of the TOC with information such as
// what is the current height of an entry?
// is an entry selected or is any of its children selected?
// expanded records whether the user manually expanded or collapsed
// a section of the TOC.
// why keep them separated? tocState get regenerated for instance
// when the slug changes (which may mean that some sections get expanded/collapsed)
// we don't want to overwrite the manual actions of the user in that case.
// instead, we first apply the "organic" changes of the toc, then on top of that
// we add the results of the user's action
_this.state={tocState:tocState,expanded:expanded};_this.toggleEntry=_this.toggleEntry.bind(_assertThisInitialized(_this));return _this;}var _proto=TableOfContents.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps){var _this$props=this.props,chapters=_this$props.chapters,slug=_this$props.slug;if(slug!==prevProps.slug){var expanded=this.state.expanded;var tocState=getTocState({chapters:chapters,slug:slug,expanded:expanded});// eslint-disable-next-line react/no-did-update-set-state
this.setState({tocState:tocState,expanded:expanded});}};_proto.toggleEntry=function toggleEntry(id){var _this$state=this.state,expanded=_this$state.expanded,tocState=_this$state.tocState;var updatedExpanded=Object.assign({},expanded);var entry=tocState[id];// if this entry has been manually expanded, then we manually collapse it.
// else - either this entry has never been manually expanded/collapsed,
// or it has been manually collapsed - we expand it.
updatedExpanded[id]=!isOpen(entry,expanded);// then we need to update the heights.
var updatedTocState=updateHeights(Object.assign({},tocState),updatedExpanded);this.setState({tocState:updatedTocState,expanded:updatedExpanded});};_proto.render=function render(){var tree=this.props.chapters;var tocState=this.state.tocState;if(!tree){return null;}return react_default.a.createElement(table_of_contents_component,{tree:tree,tocState:tocState,toggleEntry:this.toggleEntry});};return TableOfContents;}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(42);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/react-icons/lib/go/mark-github.js
var mark_github = __webpack_require__(270);

// EXTERNAL MODULE: ./node_modules/react-icons/lib/go/star.js
var star = __webpack_require__(175);
var star_default = /*#__PURE__*/__webpack_require__.n(star);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/github/github-stars.jsx
function github_stars_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Github api has rate-limits. We want to cache the response
// as much as we can. This component gets re-mounted multiple times.
var cachedResponse=null;var github_stars_GithubStars=/*#__PURE__*/function(_Component){github_stars_inheritsLoose(GithubStars,_Component);function GithubStars(props){var _this;_this=_Component.call(this,props)||this;_this.state={response:cachedResponse};return _this;}var _proto=GithubStars.prototype;_proto.componentDidMount=function componentDidMount(){var _this2=this;if(cachedResponse){return;}var project=this.props.project;fetch("https://api.github.com/repos/"+project).then(function(response){return response.json();}).then(function(response){cachedResponse=response;_this2.setState({response:response});});};_proto.render=function render(){var response=this.state.response;var count=response&&response.stargazers_count||'...';return react_default.a.createElement(react["Fragment"],null,count,react_default.a.createElement(star_default.a,{style:{marginLeft:'0.2rem',position:'relative',top:-1}}));};return GithubStars;}(react["Component"]);
// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/layout/header.component.jsx
/* eslint-disable react/no-array-index-key */ // Copyright (c) 2018 Uber Technologies, Inc.
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
var propTypes={config:prop_types_default.a.object.isRequired};function GithubLink(){return react_default.a.createElement("div",{className:"github-link"},react_default.a.createElement("span",null,"Github"));}function HeaderLink(_ref){var to=_ref.to,href=_ref.href,label=_ref.label;if(to){return react_default.a.createElement(styled["s" /* HeaderLink */],{to:to},label);}return react_default.a.createElement(styled["q" /* HeaderA */],{href:href},label);}/**
 * Generate all the links in the header.
 * @param  {Object} props Input props which includes site config.
 * @return {Array}  Array of link object ({label, to, href, classnames})
 */function generateHeaderLinks(props){var _props$config=props.config,config=_props$config===void 0?{}:_props$config;var exampleLink=config.EXAMPLES&&config.EXAMPLES.length>0&&{label:'Examples',to:'/examples'};var githubLink=config.PROJECT_TYPE==='github'&&{classnames:'z',href:"https://github.com/"+config.PROJECT_ORG+"/"+config.PROJECT_NAME,label:react_default.a.createElement(GithubLink,null)};var links=[exampleLink,{label:'Documentation',to:'/docs'},{label:'Search',to:'/search'},{label:'Blog',href:'https://medium.com/vis-gl'},githubLink];if(config.ADDITIONAL_LINKS&&config.ADDITIONAL_LINKS.length>0){config.ADDITIONAL_LINKS.map(function(link){return Object.assign({},link,{label:link.name});}).forEach(function(link){if(link.index!==undefined){links.splice(link.index,0,link);}else{links.push(link);}});}return links.filter(Boolean);}var header_component_ControlledHeader=function ControlledHeader(_ref2){var links=_ref2.links,_ref2$config=_ref2.config,config=_ref2$config===void 0?{}:_ref2$config,isSmallScreen=_ref2.isSmallScreen,isLinksMenuOpen=_ref2.isLinksMenuOpen,isProjectsMenuOpen=_ref2.isProjectsMenuOpen,toggleLinksMenu=_ref2.toggleLinksMenu,toggleProjectsMenu=_ref2.toggleProjectsMenu;var PROJECT_NAME=config.PROJECT_NAME,_config$PROJECTS=config.PROJECTS,PROJECTS=_config$PROJECTS===void 0?[]:_config$PROJECTS;return react_default.a.createElement(styled["p" /* Header */],null,react_default.a.createElement(styled["x" /* HeaderMenuBlock */],null,PROJECTS.length?react_default.a.createElement(styled["o" /* HamburgerMenu */],{onClick:toggleProjectsMenu}):null,react_default.a.createElement(styled["v" /* HeaderLogo */],{href:"/"},PROJECT_NAME),react_default.a.createElement(styled["w" /* HeaderMenu */],{$collapsed:!isProjectsMenuOpen,$nbItems:PROJECTS.length},PROJECTS.map(function(_ref3){var name=_ref3.name,url=_ref3.url;return react_default.a.createElement(styled["y" /* HeaderMenuLink */],{key:"menulink-"+name,href:url},name);}))),react_default.a.createElement(styled["u" /* HeaderLinksBlock */],{style:{maxHeight:isSmallScreen&&isLinksMenuOpen?4*links.length+"rem":undefined}},links.map(function(link,index){return react_default.a.createElement(styled["t" /* HeaderLinkContainer */],{key:"link-"+index},react_default.a.createElement(HeaderLink,link));}),react_default.a.createElement("div",{className:"menu-toggle",onClick:function onClick(){toggleLinksMenu(!isLinksMenuOpen);}},react_default.a.createElement("i",{className:"icon icon-"+(isLinksMenuOpen?'close':'menu')}))));};/* harmony default export */ var header_component = (header_component_ControlledHeader);
// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/layout/header.jsx
function header_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function header_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/* eslint-disable react/no-array-index-key */ // Copyright (c) 2018 Uber Technologies, Inc.
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
// we are exposing 2 header components.
// 1 - DocsHeader, which will update the state of the top level layout.
//   we need to expose whether the menu is toggled or not because it could
//   affect how TOC is displayed in smaller screens.
// 2 - Header, which won't and just maintain its own state.
// both components are wrappers around ControlledHeader.
var header_Header=/*#__PURE__*/function(_Component){header_inheritsLoose(Header,_Component);function Header(props){var _this;_this=_Component.call(this,props)||this;// we need to know the number of links before render.
// this is not an ideal solution.
// some of the links which are hardcoded should come from configuration
// TODO - let's create the links server side, then pass them to the template as props.
_this.state={collapsed:true,links:generateHeaderLinks(props)};_this.handleClick=_this.handleClick.bind(header_assertThisInitialized(_this));return _this;}var _proto=Header.prototype;_proto.handleClick=function handleClick(){this.setState({collapsed:!this.state.collapsed});}// note that rn, we don't render stars per design, but this could change
;_proto.renderStars=function renderStars(){var config=this.props.config;if(config.PROJECT_TYPE==='github'){return react_default.a.createElement(GithubStars,{project:config.PROJECT_ORG+"/"+config.PROJECT_NAME});}return null;};_proto.render=function render(){var _this$state=this.state,links=_this$state.links,collapsed=_this$state.collapsed;return react_default.a.createElement(header_component,Object.assign({},this.props,{links:links,isLinksMenuOpen:false,isProjectsMenuOpen:!collapsed,toggleProjectsMenu:this.handleClick,toggleLinksMenu:function toggleLinksMenu(){}}));};return Header;}(react["Component"]);
// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/layout/docs-header.jsx
function docs_header_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/* eslint-disable react/no-array-index-key */ // Copyright (c) 2018 Uber Technologies, Inc.
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
// we are exposing 2 header components.
// 1 - DocsHeader, which will update the state of the top level layout.
//   we need to expose whether the menu is toggled or not because it could
//   affect how TOC is displayed in smaller screens.
// 2 - Header, which won't and just maintain its own state.
// both components are wrappers around ControlledHeader.
var docs_header_DocsHeader=/*#__PURE__*/function(_Component){docs_header_inheritsLoose(DocsHeader,_Component);function DocsHeader(props){var _this;_this=_Component.call(this,props)||this;// we need to know the number of links before render.
// this is not an ideal solution.
// some of the links which are hardcoded should come from configuration
// TODO - let's create the links server side, then pass them to the template as props.
_this.state={links:generateHeaderLinks(props)};return _this;}var _proto=DocsHeader.prototype;_proto.renderHeader=function renderHeader(){var links=this.state.links;return react_default.a.createElement(header_component,Object.assign({links:links},this.props));};_proto.render=function render(){return this.renderHeader();};return DocsHeader;}(react["Component"]);
// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/layout/top-level-layout.jsx
function top_level_layout_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function top_level_layout_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}/* eslint-disable react/no-did-update-set-state */ // This is the top-level "Layout" component that doesn't get unmounted between
// page loads. This component is wrapped around the react component returned by
// each page by 'gatsby-plugin-layout'
// TODO/ib - restore footer
// import Footer from './footer';
function ResponsiveHeader(props){var HeaderComponent=props.isDocHeader?docs_header_DocsHeader:header_Header;return react_default.a.createElement("div",null,react_default.a.createElement(react_responsive_default.a,{maxWidth:575},react_default.a.createElement(HeaderComponent,Object.assign({},props,{isSmallScreen:true}))),react_default.a.createElement(react_responsive_default.a,{minWidth:576},react_default.a.createElement(HeaderComponent,props)));}var top_level_layout_Layout=/*#__PURE__*/function(_React$Component){top_level_layout_inheritsLoose(Layout,_React$Component);function Layout(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={isProjectsMenuOpen:false,isLinksMenuOpen:false,isTocOpen:false};_this.toggleProjectsMenu=_this.toggleProjectsMenu.bind(top_level_layout_assertThisInitialized(_this));_this.toggleLinksMenu=_this.toggleLinksMenu.bind(top_level_layout_assertThisInitialized(_this));_this.toggleToc=_this.toggleToc.bind(top_level_layout_assertThisInitialized(_this));return _this;}var _proto=Layout.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps){if(prevProps.pageContext.slug!==this.props.pageContext.slug){this.setState({isTocOpen:false});}};_proto.toggleLinksMenu=function toggleLinksMenu(){var isLinksMenuOpen=this.state.isLinksMenuOpen;this.setState({isLinksMenuOpen:!isLinksMenuOpen});};_proto.toggleProjectsMenu=function toggleProjectsMenu(){var isProjectsMenuOpen=this.state.isProjectsMenuOpen;this.setState({isProjectsMenuOpen:!isProjectsMenuOpen});};_proto.toggleToc=function toggleToc(){var isTocOpen=this.state.isTocOpen;this.setState({isTocOpen:!isTocOpen});};_proto.renderBodyWithTOC=function renderBodyWithTOC(config,tableOfContents){var children=this.props.children;var _this$state=this.state,isLinksMenuOpen=_this$state.isLinksMenuOpen,isProjectsMenuOpen=_this$state.isProjectsMenuOpen,isTocOpen=_this$state.isTocOpen;var isMenuOpen=isLinksMenuOpen||isProjectsMenuOpen;// first div is to avoid the BodyGrid div className to be overwritten
return react_default.a.createElement("div",null,react_default.a.createElement(styled["c" /* Body */],null,react_default.a.createElement(styled["r" /* HeaderContainer */],null,react_default.a.createElement(ResponsiveHeader,{config:config,isLinksMenuOpen:isLinksMenuOpen,isProjectsMenuOpen:isProjectsMenuOpen,toggleLinksMenu:this.toggleLeftMenu,toggleProjectsMenu:this.toggleProjectsMenu,isDocHeader:true})),react_default.a.createElement(styled["T" /* TocToggle */],{toggleToc:this.toggleToc,isMenuOpen:isMenuOpen,isTocOpen:isTocOpen}),react_default.a.createElement(styled["O" /* TocContainer */],{$isTocOpen:isTocOpen},this.renderTOC(config,tableOfContents)),react_default.a.createElement(styled["e" /* BodyContainerToC */],{$isTocOpen:isTocOpen,$isMenuOpen:isMenuOpen},children)));};_proto.renderBodyFull=function renderBodyFull(config){var children=this.props.children;var isMenuOpen=this.state.isMenuOpen;return react_default.a.createElement("div",null,react_default.a.createElement(styled["r" /* HeaderContainer */],null,react_default.a.createElement(ResponsiveHeader,{config:config,isMenuOpen:isMenuOpen,toggleMenu:this.toggleMenu})),react_default.a.createElement(styled["d" /* BodyContainerFull */],null,children));};_proto.renderTOC=function renderTOC(config,tableOfContents){var pageContext=this.props.pageContext;switch(pageContext.toc){case'docs':return react_default.a.createElement(table_of_contents_TableOfContents,{chapters:tableOfContents.chapters,slug:pageContext.slug});case'examples':{var EXAMPLES=config.EXAMPLES;var examplesTOC=[{title:'Examples',entries:[]}];// eslint-disable-next-line
for(var _iterator=EXAMPLES,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var example=_ref;var exampleEntry=Object.assign({entry:example.title},example);examplesTOC[0].entries.push(exampleEntry);}return react_default.a.createElement(table_of_contents_TableOfContents,{chapters:examplesTOC,firstItemIsExpanded:true,slug:pageContext.slug});}default:console.warn("Unknown toc type "+pageContext.toc);// eslint-disable-line
return null;}};_proto.render=function render(){// Since gatsby's StaticQueries can't run in a plugin, we rely on the app website's
// Layout wrapper component to query for us and pass in the data.
var _this$props=this.props,pageContext=_this$props.pageContext,config=_this$props.config,theme=_this$props.theme,tableOfContents=_this$props.tableOfContents,allMarkdown=_this$props.allMarkdown;return react_default.a.createElement(website_config["a" /* WebsiteConfigProvider */],{value:{config:config,theme:theme,tableOfContents:tableOfContents,allMarkdown:allMarkdown}},react_default.a.createElement(baseui["BaseProvider"],{theme:theme},react_default.a.createElement("div",null,allMarkdown?react_default.a.createElement(common_SEO,{postEdges:allMarkdown}):react_default.a.createElement(Helmet_default.a,null,react_default.a.createElement("title",null,config.PROJECT_NAME)),pageContext.toc?this.renderBodyWithTOC(config,tableOfContents):this.renderBodyFull(config))));};return Layout;}(react_default.a.Component);
// EXTERNAL MODULE: ./node_modules/ocular-gatsby/styles/main.scss
var main = __webpack_require__(271);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/layout/layout.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return layout_Layout; });
function layout_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function layout_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// This is the top-level "Layout" component that doesn't get unmounted between
// page loads. This component is wrapped around the react component returned by
// each page using the gatsby browser/SSR `wrapPage` callback.
// Note: gatsby-plugin-sass will process these files automatically when it sees this import
// The Layout instance is shared between pages. It queries common, static data
// and makes it available on React context
var layout_Layout=/*#__PURE__*/function(_React$Component){layout_inheritsLoose(Layout,_React$Component);function Layout(props){var _this;_this=_React$Component.call(this,props)||this;_this.queryComplete=_this.queryComplete.bind(layout_assertThisInitialized(_this));return _this;}var _proto=Layout.prototype;_proto.queryComplete=function queryComplete(data){var children=this.props.children;var config=data.site.siteMetadata.config;var tableOfContents=data.tableOfContents,allMarkdown=data.allMarkdown;// console.log('StaticQuery result', config, tableOfContents, allMarkdown);
var themeFromConfig=(config&&config.THEME_OVERRIDES||[]).reduce(function(prev,curr){var _Object$assign;return Object.assign({},prev,(_Object$assign={},_Object$assign[curr.key]=curr.value,_Object$assign));},{});var theme=createTheme(Object.assign({},lightThemePrimitives,{},themeFromConfig));return react_default.a.createElement(top_level_layout_Layout,Object.assign({},this.props,{config:config,tableOfContents:tableOfContents,allMarkdown:allMarkdown,theme:theme}),react_default.a.createElement("div",{style:{position:'relative',height:'100%'}},children));};_proto.render=function render(){return react_default.a.createElement(site_query_SiteQuery,{onComplete:this.queryComplete});};return Layout;}(react_default.a.Component);

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.search.js
var es6_regexp_search = __webpack_require__(137);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(4);

// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(100);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js + 1 modules
var es = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/@mikaelkristiansson/domready/ready.js
var ready = __webpack_require__(177);
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(12);

// EXTERNAL MODULE: ./.cache/loader.js + 3 modules
var loader = __webpack_require__(25);

// EXTERNAL MODULE: ./.cache/redirects.json
var redirects = __webpack_require__(178);

// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(31);

// CONCATENATED MODULE: ./.cache/navigation.js
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Convert to a map for faster lookup in maybeRedirect()
var redirectMap=redirects.reduce(function(map,redirect){map[redirect.fromPath]=redirect;return map;},{});function maybeRedirect(pathname){var redirect=redirectMap[pathname];if(redirect!=null){if(false){ var pageResources; }window.___replace(redirect.toPath);return true;}else{return false;}}var navigation_onPreRouteUpdate=function onPreRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onPreRouteUpdate",{location:location,prevLocation:prevLocation});}};var navigation_onRouteUpdate=function onRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onRouteUpdate",{location:location,prevLocation:prevLocation});// Temp hack while awaiting https://github.com/reach/router/issues/119
window.__navigatingToLink=false;}};var navigation_navigate=function navigate(to,options){if(options===void 0){options={};}// Temp hack while awaiting https://github.com/reach/router/issues/119
if(!options.replace){window.__navigatingToLink=true;}var _parsePath=Object(gatsby_link["parsePath"])(to),pathname=_parsePath.pathname;var redirect=redirectMap[pathname];// If we're redirecting, just replace the passed in pathname
// to the one we want to redirect to.
if(redirect){to=redirect.toPath;pathname=Object(gatsby_link["parsePath"])(to).pathname;}// If we had a service worker update, no matter the path, reload window and
// reset the pathname whitelist
if(window.___swUpdated){window.location=pathname;return;}// Start a timer to wait for a second before transitioning and showing a
// loader in case resources aren't around yet.
var timeoutId=setTimeout(function(){emitter["a" /* default */].emit("onDelayedLoadPageResources",{pathname:pathname});Object(api_runner_browser["apiRunner"])("onRouteUpdateDelayed",{location:window.location});},1000);loader["default"].loadPage(pathname).then(function(pageResources){// If no page resources, then refresh the page
// Do this, rather than simply `window.location.reload()`, so that
// pressing the back/forward buttons work - otherwise when pressing
// back, the browser will just change the URL and expect JS to handle
// the change, which won't always work since it might not be a Gatsby
// page.
if(!pageResources||pageResources.status==="error"){window.history.replaceState({},"",location.href);window.location=pathname;}// If the loaded page has a different compilation hash to the
// window, then a rebuild has occurred on the server. Reload.
if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){// Purge plugin-offline cache
if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"resetWhitelist"});}console.log("Site has changed on server. Reloading browser");window.location=pathname;}}Object(es["navigate"])(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){var _this=this;var location=_ref.location;var pathname=location.pathname,hash=location.hash;var results=Object(api_runner_browser["apiRunner"])("shouldUpdateScroll",{prevRouterProps:prevRouterProps,// `pathname` for backwards compatibility
pathname:pathname,routerProps:{location:location},getSavedScrollPosition:function getSavedScrollPosition(args){return _this._stateStorage.read(args);}});if(results.length>0){// Use the latest registered shouldUpdateScroll result, this allows users to override plugin's configuration
// @see https://github.com/gatsbyjs/gatsby/issues/12038
return results[results.length-1];}if(prevRouterProps){var oldPathname=prevRouterProps.location.pathname;if(oldPathname===pathname){// Scroll to element if it exists, if it doesn't, or no hash is provided,
// scroll to top.
return hash?hash.slice(1):[0,0];}}return true;}function init(){// Temp hack while awaiting https://github.com/reach/router/issues/119
window.__navigatingToLink=false;window.___push=function(to){return navigation_navigate(to,{replace:false});};window.___replace=function(to){return navigation_navigate(to,{replace:true});};window.___navigate=function(to,options){return navigation_navigate(to,options);};// Check for initial page-load redirect
maybeRedirect(window.location.pathname);}// Fire on(Pre)RouteUpdate APIs
var RouteUpdates=/*#__PURE__*/function(_React$Component){_inheritsLoose(RouteUpdates,_React$Component);function RouteUpdates(props){var _this2;_this2=_React$Component.call(this,props)||this;navigation_onPreRouteUpdate(props.location,null);return _this2;}var _proto=RouteUpdates.prototype;_proto.componentDidMount=function componentDidMount(){navigation_onRouteUpdate(this.props.location,null);};_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState,shouldFireRouteUpdate){if(shouldFireRouteUpdate){navigation_onRouteUpdate(this.props.location,prevProps.location);}};_proto.getSnapshotBeforeUpdate=function getSnapshotBeforeUpdate(prevProps){if(this.props.location.pathname!==prevProps.location.pathname){navigation_onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;};_proto.render=function render(){return this.props.children;};return RouteUpdates;}(react_default.a.Component);
// EXTERNAL MODULE: ./.cache/page-renderer.js
var page_renderer = __webpack_require__(102);

// EXTERNAL MODULE: ./.cache/async-requires.js
var async_requires = __webpack_require__(130);
var async_requires_default = /*#__PURE__*/__webpack_require__.n(async_requires);

// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }

  for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }

  return false;
}

/* harmony default export */ var shallow_compare_es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
// CONCATENATED MODULE: ./.cache/ensure-resources.js
function ensure_resources_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}var ensure_resources_EnsureResources=/*#__PURE__*/function(_React$Component){ensure_resources_inheritsLoose(EnsureResources,_React$Component);function EnsureResources(props){var _this;_this=_React$Component.call(this)||this;var location=props.location,pageResources=props.pageResources;_this.state={location:Object.assign({},location),pageResources:pageResources||loader["default"].loadPageSync(location.pathname)};return _this;}EnsureResources.getDerivedStateFromProps=function getDerivedStateFromProps(_ref,prevState){var location=_ref.location;if(prevState.location.href!==location.href){var pageResources=loader["default"].loadPageSync(location.pathname);return{pageResources:pageResources,location:Object.assign({},location)};}return null;};var _proto=EnsureResources.prototype;_proto.loadResources=function loadResources(rawPath){var _this2=this;loader["default"].loadPage(rawPath).then(function(pageResources){if(pageResources&&pageResources.status!=="error"){_this2.setState({location:Object.assign({},window.location),pageResources:pageResources});}else{window.history.replaceState({},"",location.href);window.location=rawPath;}});};_proto.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){// Always return false if we're missing resources.
if(!nextState.pageResources){this.loadResources(nextProps.location.pathname);return false;}// Check if the component or json have changed.
if(this.state.pageResources!==nextState.pageResources){return true;}if(this.state.pageResources.component!==nextState.pageResources.component){return true;}if(this.state.pageResources.json!==nextState.pageResources.json){return true;}// Check if location has changed on a page using internal routing
// via matchPath configuration.
if(this.state.location.key!==nextState.location.key&&nextState.pageResources.page&&(nextState.pageResources.page.matchPath||nextState.pageResources.page.path)){return true;}return shallow_compare_es(this,nextProps,nextState);};_proto.render=function render(){return this.props.children(this.state);};return EnsureResources;}(react_default.a.Component);/* harmony default export */ var ensure_resources = (ensure_resources_EnsureResources);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__(80);

// EXTERNAL MODULE: ./.cache/match-paths.json
var match_paths = __webpack_require__(179);

// CONCATENATED MODULE: ./.cache/production-app.js
function production_app_inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// Generated during bootstrap
var production_app_loader=new loader["ProdLoader"](async_requires_default.a,match_paths);Object(loader["setLoader"])(production_app_loader);production_app_loader.setApiRunner(api_runner_browser["apiRunner"]);window.asyncRequires=async_requires_default.a;window.___emitter=emitter["a" /* default */];window.___loader=loader["publicLoader"];window.___webpackCompilationHash=window.webpackCompilationHash;init();Object(api_runner_browser["apiRunnerAsync"])("onClientEntry").then(function(){// Let plugins register a service worker. The plugin just needs
// to return true.
if(Object(api_runner_browser["apiRunner"])("registerServiceWorker").length>0){__webpack_require__(282);}// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
var RouteHandler=function RouteHandler(props){return react_default.a.createElement(es["BaseContext"].Provider,{value:{baseuri:"/",basepath:"/"}},react_default.a.createElement(page_renderer["a" /* default */],props));};var LocationHandler=/*#__PURE__*/function(_React$Component){production_app_inheritsLoose(LocationHandler,_React$Component);function LocationHandler(){return _React$Component.apply(this,arguments)||this;}var _proto=LocationHandler.prototype;_proto.render=function render(){var _this=this;var location=this.props.location;return react_default.a.createElement(ensure_resources,{location:location},function(_ref){var pageResources=_ref.pageResources,location=_ref.location;return react_default.a.createElement(RouteUpdates,{location:location},react_default.a.createElement(gatsby_react_router_scroll["ScrollContext"],{location:location,shouldUpdateScroll:shouldUpdateScroll},react_default.a.createElement(es["Router"],{basepath:"",location:location,id:"gatsby-focus-wrapper"},react_default.a.createElement(RouteHandler,Object.assign({path:encodeURI(pageResources.page.path==="/404.html"?Object(strip_prefix["a" /* default */])(location.pathname,""):pageResources.page.matchPath||pageResources.page.path)},_this.props,{location:location,pageResources:pageResources},pageResources.json)))));});};return LocationHandler;}(react_default.a.Component);var _window=window,pagePath=_window.pagePath,browserLoc=_window.location;// Explicitly call navigate if the canonical path (window.pagePath)
// is different to the browser path (window.location.pathname). But
// only if NONE of the following conditions hold:
//
// - The url matches a client side route (page.matchPath)
// - it's a 404 page
// - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
if(pagePath&&""+pagePath!==browserLoc.pathname&&!(production_app_loader.findMatchPath(Object(strip_prefix["a" /* default */])(browserLoc.pathname,""))||pagePath==="/404.html"||pagePath.match(/^\/404\/?$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){Object(es["navigate"])(""+pagePath+browserLoc.search+browserLoc.hash,{replace:true});}loader["publicLoader"].loadPage(browserLoc.pathname).then(function(page){if(!page||page.status==="error"){throw new Error("page resources for "+browserLoc.pathname+" not found. Not rendering React");}var Root=function Root(){return react_default.a.createElement(es["Location"],null,function(locationContext){return react_default.a.createElement(LocationHandler,locationContext);});};var WrappedRoot=Object(api_runner_browser["apiRunner"])("wrapRootElement",{element:react_default.a.createElement(Root,null)},react_default.a.createElement(Root,null),function(_ref2){var result=_ref2.result;return{element:result};}).pop();var NewRoot=function NewRoot(){return WrappedRoot;};var renderer=Object(api_runner_browser["apiRunner"])("replaceHydrateFunction",undefined,react_dom_default.a.hydrate)[0];ready_default()(function(){renderer(react_default.a.createElement(NewRoot,null),typeof window!=="undefined"?document.getElementById("___gatsby"):void 0,function(){Object(api_runner_browser["apiRunner"])("onInitialClientRender");});});});});

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.create.js
var es6_object_create = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.trim.js
var es6_string_trim = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.uint8-array.js
var es6_typed_uint8_array = __webpack_require__(214);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.map.js
var es6_array_map = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.index-of.js
var es6_array_index_of = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.typed.data-view.js
var es6_typed_data_view = __webpack_require__(216);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/whatwg-fetch/fetch.js



















var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob: 'FileReader' in self && 'Blob' in self && function () {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
};

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}

if (support.arrayBuffer) {
  var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

  var isArrayBufferView = ArrayBuffer.isView || function (obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name);
  }

  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name');
  }

  return name.toLowerCase();
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }

  return value;
} // Build a destructive iterator for the value list


function iteratorFor(items) {
  var iterator = {
    next: function next() {
      var value = items.shift();
      return {
        done: value === undefined,
        value: value
      };
    }
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function (value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function (header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function (name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ', ' + value : value;
};

Headers.prototype['delete'] = function (name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function (name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};

Headers.prototype.has = function (name) {
  return this.map.hasOwnProperty(normalizeName(name));
};

Headers.prototype.set = function (name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};

Headers.prototype.forEach = function (callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};

Headers.prototype.keys = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};

Headers.prototype.values = function () {
  var items = [];
  this.forEach(function (value) {
    items.push(value);
  });
  return iteratorFor(items);
};

Headers.prototype.entries = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'));
  }

  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}

function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise;
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }

  return chars.join('');
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}

function Body() {
  this.bodyUsed = false;

  this._initBody = function (body) {
    this._bodyInit = body;

    if (!body) {
      this._bodyText = '';
    } else if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8');
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      }
    }
  };

  if (support.blob) {
    this.blob = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };

    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }

  this.text = function () {
    var rejected = consumed(this);

    if (rejected) {
      return rejected;
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text');
    } else {
      return Promise.resolve(this._bodyText);
    }
  };

  if (support.formData) {
    this.formData = function () {
      return this.text().then(decode);
    };
  }

  this.json = function () {
    return this.text().then(JSON.parse);
  };

  return this;
} // HTTP methods whose capitalization should be normalized


var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request(input, options) {
  options = options || {};
  var body = options.body;

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read');
    }

    this.url = input.url;
    this.credentials = input.credentials;

    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }

    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;

    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }

  this.credentials = options.credentials || this.credentials || 'same-origin';

  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }

  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests');
  }

  this._initBody(body);
}

Request.prototype.clone = function () {
  return new Request(this, {
    body: this._bodyInit
  });
};

function decode(body) {
  var form = new FormData();
  body.trim().split('&').forEach(function (bytes) {
    if (bytes) {
      var split = bytes.split('=');
      var name = split.shift().replace(/\+/g, ' ');
      var value = split.join('=').replace(/\+/g, ' ');
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}

function parseHeaders(rawHeaders) {
  var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2

  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
  preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
    var parts = line.split(':');
    var key = parts.shift().trim();

    if (key) {
      var value = parts.join(':').trim();
      headers.append(key, value);
    }
  });
  return headers;
}

Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!options) {
    options = {};
  }

  this.type = 'default';
  this.status = options.status === undefined ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = 'statusText' in options ? options.statusText : 'OK';
  this.headers = new Headers(options.headers);
  this.url = options.url || '';

  this._initBody(bodyInit);
}
Body.call(Response.prototype);

Response.prototype.clone = function () {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};

Response.error = function () {
  var response = new Response(null, {
    status: 0,
    statusText: ''
  });
  response.type = 'error';
  return response;
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response.redirect = function (url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code');
  }

  return new Response(null, {
    status: status,
    headers: {
      location: url
    }
  });
};

var DOMException = self.DOMException;

try {
  new DOMException();
} catch (err) {
  DOMException = function DOMException(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };

  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}

function fetch(input, init) {
  return new Promise(function (resolve, reject) {
    var request = new Request(input, init);

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'));
    }

    var xhr = new XMLHttpRequest();

    function abortXhr() {
      xhr.abort();
    }

    xhr.onload = function () {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      resolve(new Response(body, options));
    };

    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.ontimeout = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.onabort = function () {
      reject(new DOMException('Aborted', 'AbortError'));
    };

    xhr.open(request.method, request.url, true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false;
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob';
    }

    request.headers.forEach(function (value, name) {
      xhr.setRequestHeader(name, value);
    });

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr);

      xhr.onreadystatechange = function () {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr);
        }
      };
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  });
}
fetch.polyfill = true;

if (!self.fetch) {
  self.fetch = fetch;
  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;
}
// EXTERNAL MODULE: ./node_modules/ocular-gatsby/src/gatsby-common/wrap-page.jsx
var wrap_page = __webpack_require__(159);
var wrap_page_default = /*#__PURE__*/__webpack_require__.n(wrap_page);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/gatsby-browser.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClientEntry", function() { return onClientEntry; });
/* concated harmony reexport wrapPageElement */__webpack_require__.d(__webpack_exports__, "wrapPageElement", function() { return wrap_page_default.a; });
// ie 11 polyfill
function onClientEntry(){console.log('Ocular loaded');// eslint-disable-line
}

/***/ })
],[[285,8,0,2]]]);
//# sourceMappingURL=app-5e1415c84415042a5ae8.js.map
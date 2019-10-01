(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocTemplate; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(185);
/* harmony import */ var core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_starts_with__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rehype_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(349);
/* harmony import */ var rehype_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rehype_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}// note - these typographic elements are taken directly from baseui.
// we can consider customizing them by first importing in styled/index, then
// giving them special parameters
var CustomLinkWrapper=function CustomLinkWrapper(relativeLinks){var CustomLink=function CustomLink(_ref){var href=_ref.href,props=_objectWithoutPropertiesLoose(_ref,["href"]);if(href.startsWith('http')||href.startsWith('#')){// TODO - we could style them differently though
return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* A */ "a"],Object.assign({href:href},props));}var hrefWithoutLeadingSlash=href.startsWith('/')?href.slice(1):href;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* A */ "a"],Object.assign({},props,{href:relativeLinks[hrefWithoutLeadingSlash]}));};return CustomLink;};var CustomPre=function CustomPre(props){// the point of this component is to distinguish styling of inline <code /> elements
// with code blocks (ie <pre><code>...</code></pre>).
var children=props.children,otherProps=_objectWithoutPropertiesLoose(props,["children"]);return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* Pre */ "I"],otherProps,react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.map(children,function(child){// this means a child of this <pre> element is a <code> element, or <code> element styled
// by Styletron
if(child.type==='code'||child.type.displayName==='Styled(code)'){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* CodeBlock */ "f"],child.props);}// else we just clone the element as is
return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(child);}));};// Query for the markdown doc by slug
// (Note: We could just search the allMarkdown from WebsiteConfig ourselves)
var query="1006944883";var DocTemplate=/*#__PURE__*/function(_React$Component){_inheritsLoose(DocTemplate,_React$Component);function DocTemplate(props){var _this;_this=_React$Component.call(this,props)||this;var relativeLinks=props.pageContext.relativeLinks;// note - we can add many other custom components.
// without rehypeReact, we'd just render the content of the markdown as generated by gatsby.
// what this does is that instead we work on the Abstract Syntax Tree (htmlAST).
// this allows us to replace certain elements by custom components. For instance, if we
// detect an <h1> element, we will replace it with an H1 custom component. In that case
// H1 is just a styled version of h1. However, with that process we can implement custom
// logic. For instance we can rewrite the contents of the link on the fly (CustomLinkWrapper).
// we can style differently code tags which are within or without a <pre> element. And we can
// add many more such custom components as needed.
var renderAst=new rehype_react__WEBPACK_IMPORTED_MODULE_7___default.a({createElement:react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement,components:{h1:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* H1 */ "i"],h2:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* H2 */ "j"],h3:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* H3 */ "k"],h4:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* H4 */ "l"],h5:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* H5 */ "m"],h6:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* H6 */ "n"],p:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* P */ "H"],ul:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* List */ "C"],li:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* ListItem */ "D"],pre:CustomPre,code:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* InlineCode */ "A"],table:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* Table */ "K"],th:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* TableHeaderCell */ "M"],td:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* TableBodyCell */ "L"],blockquote:_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* BlockQuote */ "b"],a:CustomLinkWrapper(relativeLinks)}}).Compiler;_this.state={renderAst:renderAst};return _this;}var _proto=DocTemplate.prototype;_proto.render=function render(){var htmlAst=this.props.data.docBySlug.htmlAst;var renderAst=this.state.renderAst;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* MarkdownBody */ "G"],null,renderAst(htmlAst)));};return DocTemplate;}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var normalize = __webpack_require__(317);

var Schema = __webpack_require__(315);

var DefinedInfo = __webpack_require__(318);

module.exports = create;

function create(definition) {
  var space = definition.space;
  var mustUseProperty = definition.mustUseProperty || [];
  var attributes = definition.attributes || {};
  var props = definition.properties;
  var transform = definition.transform;
  var property = {};
  var normal = {};
  var prop;
  var info;

  for (prop in props) {
    info = new DefinedInfo(prop, transform(attributes, prop), props[prop], space);

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true;
    }

    property[prop] = info;
    normal[normalize(prop)] = prop;
    normal[normalize(info.attribute)] = prop;
  }

  return new Schema(property, normal, space);
}

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var powers = 0;
exports["boolean"] = increment();
exports.booleanish = increment();
exports.overloadedBoolean = increment();
exports.number = increment();
exports.spaceSeparated = increment();
exports.commaSeparated = increment();
exports.commaOrSpaceSeparated = increment();

function increment() {
  return Math.pow(2, ++powers);
}

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(7);
var toIObject = __webpack_require__(47);
var toInteger = __webpack_require__(46);
var toLength = __webpack_require__(26);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(48)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(352);

var Schema = __webpack_require__(315);

module.exports = merge;

function merge(definitions) {
  var length = definitions.length;
  var property = [];
  var normal = [];
  var index = -1;
  var info;
  var space;

  while (++index < length) {
    info = definitions[index];
    property.push(info.property);
    normal.push(info.normal);
    space = info.space;
  }

  return new Schema(xtend.apply(null, property), xtend.apply(null, normal), space);
}

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Schema;
var proto = Schema.prototype;
proto.space = null;
proto.normal = {};
proto.property = {};

function Schema(property, normal, space) {
  this.property = property;
  this.normal = normal;

  if (space) {
    this.space = space;
  }
}

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(300);

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase();
}

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = normalize;

function normalize(value) {
  return value.toLowerCase();
}

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Info = __webpack_require__(319);

var types = __webpack_require__(305);

module.exports = DefinedInfo;
DefinedInfo.prototype = new Info();
DefinedInfo.prototype.defined = true;
var checks = ['boolean', 'booleanish', 'overloadedBoolean', 'number', 'commaSeparated', 'spaceSeparated', 'commaOrSpaceSeparated'];
var checksLength = checks.length;

function DefinedInfo(property, attribute, mask, space) {
  var index = -1;
  var check;
  mark(this, 'space', space);
  Info.call(this, property, attribute);

  while (++index < checksLength) {
    check = checks[index];
    mark(this, check, (mask & types[check]) === types[check]);
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Info;
var proto = Info.prototype;
proto.space = null;
proto.attribute = null;
proto.property = null;
proto["boolean"] = false;
proto.booleanish = false;
proto.overloadedBoolean = false;
proto.number = false;
proto.commaSeparated = false;
proto.spaceSeparated = false;
proto.commaOrSpaceSeparated = false;
proto.mustUseProperty = false;
proto.defined = false;

function Info(property, attribute) {
  this.property = property;
  this.attribute = attribute;
}

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(300);

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase();
}

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(300);

var caseInsensitiveTransform = __webpack_require__(322);

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caseSensitiveTransform = __webpack_require__(323);

module.exports = caseInsensitiveTransform;

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase());
}

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = caseSensitiveTransform;

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(305);

var create = __webpack_require__(300);

var booleanish = types.booleanish;
var number = types.number;
var spaceSeparated = types.spaceSeparated;
module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase();
}

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toH = __webpack_require__(350);

var tableCellStyle = __webpack_require__(363);

module.exports = rehypeReact;
var has = {}.hasOwnProperty; // Add a React compiler.

function rehypeReact(options) {
  var settings = options || {};
  var createElement = settings.createElement;
  var Fragment = settings.Fragment;
  var components = settings.components || {};
  this.Compiler = compiler;

  function compiler(node) {
    var res = toH(h, tableCellStyle(node), settings.prefix);

    if (node.type === 'root') {
      // Invert <https://github.com/syntax-tree/hast-to-hyperscript/blob/d227372/index.js#L46-L56>.
      if (res.type === 'div' && (node.children.length !== 1 || node.children[0].type !== 'element')) {
        res = res.props.children;
      } else {
        res = [res];
      }

      return createElement(Fragment || 'div', {}, res);
    }

    return res;
  } // Wrap `createElement` to pass components in.


  function h(name, props, children) {
    var component = has.call(components, name) ? components[name] : name;
    return createElement(component, props, children);
  }
}

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var html = __webpack_require__(351);

var svg = __webpack_require__(354);

var find = __webpack_require__(356);

var spaces = __webpack_require__(357);

var commas = __webpack_require__(358);

var style = __webpack_require__(359);

var ns = __webpack_require__(361);

var convert = __webpack_require__(362);

var root = convert('root');
var element = convert('element');
var text = convert('text');
var dashes = /-([a-z])/g;
module.exports = wrapper;

function wrapper(h, node, options) {
  var settings = options || {};
  var prefix;
  var r;
  var v;
  var vd;

  if (typeof h !== 'function') {
    throw new Error('h is not a function');
  }

  if (typeof settings === 'string' || typeof settings === 'boolean') {
    prefix = settings;
    settings = {};
  } else {
    prefix = settings.prefix;
  }

  r = react(h);
  v = vue(h);
  vd = vdom(h);

  if (prefix === null || prefix === undefined) {
    prefix = r === true || v === true || vd === true ? 'h-' : false;
  }

  if (root(node)) {
    if (node.children.length === 1 && element(node.children[0])) {
      node = node.children[0];
    } else {
      node = {
        type: 'element',
        tagName: 'div',
        properties: {},
        children: node.children
      };
    }
  } else if (!element(node)) {
    throw new Error('Expected root or element, not `' + (node && node.type || node) + '`');
  }

  return toH(h, node, {
    schema: settings.space === 'svg' ? svg : html,
    prefix: prefix,
    key: 0,
    react: r,
    vue: v,
    vdom: vd,
    hyperscript: hyperscript(h)
  });
} // Transform a hast node through a hyperscript interface to *anything*!


function toH(h, node, ctx) {
  var parentSchema = ctx.schema;
  var schema = parentSchema;
  var name = node.tagName;
  var properties;
  var attributes;
  var children;
  var property;
  var elements;
  var length;
  var index;
  var value;
  var result;

  if (parentSchema.space === 'html' && name.toLowerCase() === 'svg') {
    schema = svg;
    ctx.schema = schema;
  }

  if (ctx.vdom === true && schema.space === 'html') {
    name = name.toUpperCase();
  }

  properties = node.properties;
  attributes = {};

  for (property in properties) {
    addAttribute(attributes, property, properties[property], ctx);
  }

  if (typeof attributes.style === 'string' && (ctx.vdom === true || ctx.vue === true || ctx.react === true)) {
    // VDOM, Vue, and React accept `style` as object.
    attributes.style = parseStyle(attributes.style, name);
  }

  if (ctx.prefix) {
    ctx.key++;
    attributes.key = ctx.prefix + ctx.key;
  }

  if (ctx.vdom && schema.space !== 'html') {
    attributes.namespace = ns[schema.space];
  }

  elements = [];
  children = node.children;
  length = children ? children.length : 0;
  index = -1;

  while (++index < length) {
    value = children[index];

    if (element(value)) {
      elements.push(toH(h, value, ctx));
    } else if (text(value)) {
      elements.push(value.value);
    }
  } // Ensure no React warnings are triggered for void elements having children
  // passed in.


  result = elements.length === 0 ? h(name, attributes) : h(name, attributes, elements); // Restore parent schema.

  ctx.schema = parentSchema;
  return result;
}

function addAttribute(props, prop, value, ctx) {
  var hyperlike = ctx.hyperscript || ctx.vdom || ctx.vue;
  var schema = ctx.schema;
  var info = find(schema, prop);
  var subprop; // Ignore nully and `NaN` values.
  // Ignore `false` and falsey known booleans for hyperlike DSLs.

  if (value === null || value === undefined || value !== value || hyperlike && value === false || hyperlike && info["boolean"] && !value) {
    return;
  }

  if (value !== null && typeof value === 'object' && 'length' in value) {
    // Accept `array`.
    // Most props are space-separated.
    value = (info.commaSeparated ? commas : spaces).stringify(value);
  } // Treat `true` and truthy known booleans.


  if (info["boolean"] && ctx.hyperscript === true) {
    value = '';
  }

  if (ctx.vue) {
    if (prop !== 'style') {
      subprop = 'attrs';
    }
  } else if (!info.mustUseProperty) {
    if (ctx.vdom === true) {
      subprop = 'attributes';
    } else if (ctx.hyperscript === true) {
      subprop = 'attrs';
    }
  }

  if (subprop) {
    if (props[subprop] === undefined) {
      props[subprop] = {};
    }

    props[subprop][info.attribute] = value;
  } else {
    props[ctx.react && info.space ? info.property : info.attribute] = value;
  }
} // Check if `h` is `react.createElement`.


function react(h) {
  var node = h && h('div');
  return Boolean(node && ('_owner' in node || '_store' in node) && node.key === null);
} // Check if `h` is `hyperscript`.


function hyperscript(h) {
  return Boolean(h && h.context && h.cleanup);
} // Check if `h` is `virtual-dom/h`.


function vdom(h) {
  return h && h('div').type === 'VirtualNode';
}

function vue(h) {
  var node = h && h('div');
  return Boolean(node && node.context && node.context._isVue);
}

function parseStyle(value, tagName) {
  var result = {};

  try {
    style(value, iterator);
  } catch (error) {
    error.message = tagName + '[style]' + error.message.slice('undefined'.length);
    throw error;
  }

  return result;

  function iterator(name, value) {
    result[styleCase(name)] = value;
  }
}

function styleCase(val) {
  if (val.slice(0, 4) === '-ms-') {
    val = 'ms-' + val.slice(4);
  }

  return val.replace(dashes, styleReplacer);
}

function styleReplacer($0, $1) {
  return $1.toUpperCase();
}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(314);

var xlink = __webpack_require__(316);

var xml = __webpack_require__(320);

var xmlns = __webpack_require__(321);

var aria = __webpack_require__(324);

var html = __webpack_require__(353);

module.exports = merge([xml, xlink, xmlns, aria, html]);

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(305);

var create = __webpack_require__(300);

var caseInsensitiveTransform = __webpack_require__(322);

var _boolean = types["boolean"];
var overloadedBoolean = types.overloadedBoolean;
var booleanish = types.booleanish;
var number = types.number;
var spaceSeparated = types.spaceSeparated;
var commaSeparated = types.commaSeparated;
module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: _boolean,
    allowPaymentRequest: _boolean,
    allowUserMedia: _boolean,
    alt: null,
    as: null,
    async: _boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: _boolean,
    autoPlay: _boolean,
    capture: _boolean,
    charSet: null,
    checked: _boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: _boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    "default": _boolean,
    defer: _boolean,
    dir: null,
    dirName: null,
    disabled: _boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: _boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: _boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: _boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: _boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loop: _boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: _boolean,
    muted: _boolean,
    name: null,
    nonce: null,
    noModule: _boolean,
    noValidate: _boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: _boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: _boolean,
    poster: null,
    preload: null,
    readOnly: _boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: _boolean,
    reversed: _boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: _boolean,
    seamless: _boolean,
    selected: _boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: _boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: number,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    "char": null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: _boolean,
    // Lists. Use CSS to reduce space between items instead
    declare: _boolean,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: number,
    // `<img>` and `<object>`
    leftMargin: number,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: number,
    // `<body>`
    marginWidth: number,
    // `<body>`
    noResize: _boolean,
    // `<frame>`
    noHref: _boolean,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: _boolean,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: _boolean,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: number,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: booleanish,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: number,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(314);

var xlink = __webpack_require__(316);

var xml = __webpack_require__(320);

var xmlns = __webpack_require__(321);

var aria = __webpack_require__(324);

var svg = __webpack_require__(355);

module.exports = merge([xml, xlink, xmlns, aria, svg]);

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(305);

var create = __webpack_require__(300);

var caseSensitiveTransform = __webpack_require__(323);

var _boolean = types["boolean"];
var number = types.number;
var spaceSeparated = types.spaceSeparated;
var commaSeparated = types.commaSeparated;
var commaOrSpaceSeparated = types.commaOrSpaceSeparated;
module.exports = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: _boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    "in": null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var normalize = __webpack_require__(317);

var DefinedInfo = __webpack_require__(318);

var Info = __webpack_require__(319);

var data = 'data';
module.exports = find;
var valid = /^data[-a-z0-9.:_]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;

function find(schema, value) {
  var normal = normalize(value);
  var prop = value;
  var Type = Info;

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]];
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }

    Type = DefinedInfo;
  }

  return new Type(prop, value);
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase);
  return data + value.charAt(0).toUpperCase() + value.slice(1);
}

function datasetToAttribute(property) {
  var value = property.slice(4);

  if (dash.test(value)) {
    return property;
  }

  value = value.replace(cap, kebab);

  if (value.charAt(0) !== '-') {
    value = '-' + value;
  }

  return data + value;
}

function kebab($0) {
  return '-' + $0.toLowerCase();
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(27);

__webpack_require__(71);

exports.parse = parse;
exports.stringify = stringify;
var empty = '';
var space = ' ';
var whiteSpace = /[ \t\n\r\f]+/g;

function parse(value) {
  var input = String(value || empty).trim();
  return input === empty ? [] : input.split(whiteSpace);
}

function stringify(values) {
  return values.join(space).trim();
}

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(71);

__webpack_require__(11);

exports.parse = parse;
exports.stringify = stringify;
var comma = ',';
var space = ' ';
var empty = ''; // Parse comma-separated tokens to an array.

function parse(value) {
  var values = [];
  var input = String(value || empty);
  var index = input.indexOf(comma);
  var lastIndex = 0;
  var end = false;
  var val;

  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }

    val = input.slice(lastIndex, index).trim();

    if (val || !end) {
      values.push(val);
    }

    lastIndex = index + 1;
    index = input.indexOf(comma, lastIndex);
  }

  return values;
} // Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.


function stringify(values, options) {
  var settings = options || {};
  var left = settings.padLeft === false ? empty : space;
  var right = settings.padRight ? space : empty; // Ensure the last empty entry is seen.

  if (values[values.length - 1] === empty) {
    values = values.concat(empty);
  }

  return values.join(right + comma + left).trim();
}

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(360);
/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */


function StyleToObject(style, iterator) {
  var output = null;

  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);

__webpack_require__(308);

__webpack_require__(81);

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/; // declaration

var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/; // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill

var TRIM_REGEX = /^\s+|\s+$/g; // strings

var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = ''; // types

var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';
/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */

module.exports = function (style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];
  options = options || {};
  /**
   * Positional.
   */

  var lineno = 1;
  var column = 1;
  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */

  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }
  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */


  function position() {
    var start = {
      line: lineno,
      column: column
    };
    return function (node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }
  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */


  function Position(start) {
    this.start = start;
    this.end = {
      line: lineno,
      column: column
    };
    this.source = options.source;
  }
  /**
   * Non-enumerable source string.
   */


  Position.prototype.content = style;
  var errorsList = [];
  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }
  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */


  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }
  /**
   * Parse whitespace.
   */


  function whitespace() {
    match(WHITESPACE_REGEX);
  }
  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */


  function comments(rules) {
    var c;
    rules = rules || [];

    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }

    return rules;
  }
  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */


  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
    var i = 2;

    while (EMPTY_STRING != style.charAt(i) && (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))) {
      ++i;
    }

    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;
    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }
  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */


  function declaration() {
    var pos = position(); // prop

    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment(); // :

    if (!match(COLON_REGEX)) return error("property missing ':'"); // val

    var val = match(VALUE_REGEX);
    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
    }); // ;

    match(SEMICOLON_REGEX);
    return ret;
  }
  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */


  function declarations() {
    var decls = [];
    comments(decls); // declarations

    var decl;

    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};
/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */


function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}

/***/ }),

/***/ 361:
/***/ (function(module) {

module.exports = JSON.parse("{\"html\":\"http://www.w3.org/1999/xhtml\",\"mathml\":\"http://www.w3.org/1998/Math/MathML\",\"svg\":\"http://www.w3.org/2000/svg\",\"xlink\":\"http://www.w3.org/1999/xlink\",\"xml\":\"http://www.w3.org/XML/1998/namespace\",\"xmlns\":\"http://www.w3.org/2000/xmlns/\"}");

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert;

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test);
  }

  if (test === null || test === undefined) {
    return ok;
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test);
  }

  if (typeof test === 'function') {
    return test;
  }

  throw new Error('Expected function, string, or object as test');
}

function convertAll(tests) {
  var results = [];
  var length = tests.length;
  var index = -1;

  while (++index < length) {
    results[index] = convert(tests[index]);
  }

  return results;
} // Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.


function matchesFactory(test) {
  return matches;

  function matches(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) {
        return false;
      }
    }

    return true;
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests);
  var length = checks.length;
  return matches;

  function matches() {
    var index = -1;

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true;
      }
    }

    return false;
  }
} // Utility to convert a string into a function which checks a given node’s type
// for said string.


function typeFactory(test) {
  return type;

  function type(node) {
    return Boolean(node && node.type === test);
  }
} // Utility to return true.


function ok() {
  return true;
}

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(71);

var visit = __webpack_require__(364);

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hastCssPropertyMap = {
  align: 'text-align',
  valign: 'vertical-align',
  height: 'height',
  width: 'width'
};

module.exports = function tableCellStyle(node) {
  visit(node, 'element', visitor);
  return node;
};

function visitor(node) {
  if (node.tagName !== 'tr' && node.tagName !== 'td' && node.tagName !== 'th') {
    return;
  }

  var hastName;
  var cssName;

  for (hastName in hastCssPropertyMap) {
    if (!hasOwnProperty.call(hastCssPropertyMap, hastName) || node.properties[hastName] === undefined) {
      continue;
    }

    cssName = hastCssPropertyMap[hastName];
    appendStyle(node, cssName, node.properties[hastName]);
    delete node.properties[hastName];
  }
}

function appendStyle(node, property, value) {
  var prevStyle = (node.properties.style || '').trim();

  if (prevStyle && !/;\s*/.test(prevStyle)) {
    prevStyle += ';';
  }

  if (prevStyle) {
    prevStyle += ' ';
  }

  var nextStyle = prevStyle + property + ': ' + value + ';';
  node.properties.style = nextStyle;
}

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

module.exports = visit;

var visitParents = __webpack_require__(365);

var CONTINUE = visitParents.CONTINUE;
var SKIP = visitParents.SKIP;
var EXIT = visitParents.EXIT;
visit.CONTINUE = CONTINUE;
visit.SKIP = SKIP;
visit.EXIT = EXIT;

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  visitParents(tree, test, overload, reverse);

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    var index = parent ? parent.children.indexOf(node) : null;
    return visitor(node, index, parent);
  }
}

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents;

var convert = __webpack_require__(366);

var CONTINUE = true;
var SKIP = 'skip';
var EXIT = false;
visitParents.CONTINUE = CONTINUE;
visitParents.SKIP = SKIP;
visitParents.EXIT = EXIT;

function visitParents(tree, test, visitor, reverse) {
  var is;

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  is = convert(test);
  one(tree, null, []); // Visit a single node.

  function one(node, index, parents) {
    var result = [];
    var subresult;

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents));

      if (result[0] === EXIT) {
        return result;
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)));
      return subresult[0] === EXIT ? subresult : result;
    }

    return result;
  } // Visit children in `parent`.


  function all(children, parents) {
    var min = -1;
    var step = reverse ? -1 : 1;
    var index = (reverse ? children.length : min) + step;
    var result;

    while (index > min && index < children.length) {
      result = one(children[index], index, parents);

      if (result[0] === EXIT) {
        return result;
      }

      index = typeof result[1] === 'number' ? result[1] : index + step;
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value;
  }

  if (typeof value === 'number') {
    return [CONTINUE, value];
  }

  return [value];
}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert;

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test);
  }

  if (test === null || test === undefined) {
    return ok;
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test);
  }

  if (typeof test === 'function') {
    return test;
  }

  throw new Error('Expected function, string, or object as test');
}

function convertAll(tests) {
  var results = [];
  var length = tests.length;
  var index = -1;

  while (++index < length) {
    results[index] = convert(tests[index]);
  }

  return results;
} // Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.


function matchesFactory(test) {
  return matches;

  function matches(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) {
        return false;
      }
    }

    return true;
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests);
  var length = checks.length;
  return matches;

  function matches() {
    var index = -1;

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true;
      }
    }

    return false;
  }
} // Utility to convert a string into a function which checks a given node’s type
// for said string.


function typeFactory(test) {
  return type;

  function type(node) {
    return Boolean(node && node.type === test);
  }
} // Utility to return true.


function ok() {
  return true;
}

/***/ })

}]);
//# sourceMappingURL=component---node-modules-ocular-gatsby-src-templates-doc-page-markdown-jsx-d31e8be5c0c00f766404.js.map
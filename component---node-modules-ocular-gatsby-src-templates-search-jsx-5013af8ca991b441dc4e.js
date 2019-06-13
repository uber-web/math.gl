(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchPage; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(214);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _components_images_search_filled_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(215);
/* harmony import */ var _components_images_search_filled_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_images_search_filled_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layout_website_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75);
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);









 // import { setHeaderOpacity } from '../../../classic/base/reducers/ui';

var SearchPage =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(SearchPage, _React$Component);

  function SearchPage(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      currentQuery: '',
      lastQuery: '',
      results: []
    };
    _this.findResults = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(_this.findResults.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)), 250);
    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this));
    return _this;
  }

  var _proto = SearchPage.prototype;

  _proto.findResults = function findResults(currentQuery) {
    var lastQuery = this.state.lastQuery;
    var pathContext = this.props.pathContext;
    this.setState({
      debouncing: false
    });

    if (currentQuery === lastQuery) {
      return;
    }

    var results = currentQuery ? pathContext.data.filter(function (node) {
      return node.title && node.title.match(currentQuery) || node.rawMarkdownBody && node.rawMarkdownBody.match(currentQuery);
    }) : [];
    this.setState({
      results: results,
      lastQuery: currentQuery
    });
  };

  _proto.handleChange = function handleChange(event) {
    var currentQuery = event.target.value;
    this.setState({
      currentQuery: currentQuery,
      debouncing: true
    });
    this.findResults(currentQuery);
  };

  _proto.renderPage = function renderPage() {
    var _this2 = this;

    // Note: The Layout "wrapper" component adds header and footer etc
    var _this$state = this.state,
        debouncing = _this$state.debouncing,
        results = _this$state.results,
        currentQuery = _this$state.currentQuery;
    var pathContext = this.props.pathContext;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout_website_config__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"], null, function (_ref) {
      var theme = _ref.theme;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* MainSearch */ "j"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "fcol f fg container p2"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* SearchContainer */ "k"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* IconContainer */ "g"], {
        theme: theme
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
        src: _components_images_search_filled_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "search",
        height: "16",
        width: "16"
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "fg"
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_8__[/* InputSearch */ "h"], {
        type: "text",
        placeholder: "Search",
        onChange: _this2.handleChange,
        value: currentQuery,
        theme: theme,
        style: {
          width: '100%'
        }
      }))), debouncing ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, "Searching...") : null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, currentQuery && !debouncing && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, results.length ? results.length + " articles found." : "No result for this query."), !currentQuery && !debouncing && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, pathContext.data ? pathContext.data.length + " articles indexed." : ''), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "results"
      }, results.map(function (result) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "search-item",
          key: result.slug
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "search-title"
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__[/* Link */ "a"], {
          to: result.slug
        }, result.title)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          className: "search-content"
        }, result.excerpt));
      })))));
    });
  };

  _proto.render = function render() {
    var _this3 = this;

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout_website_config__WEBPACK_IMPORTED_MODULE_7__[/* default */ "b"], null, function () {
      return _this3.renderPage();
    });
  };

  return SearchPage;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);



/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(76)))

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8dGl0bGU+U2VhcmNoIChmaWxsZWQpPC90aXRsZT4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgKICAgICAgICAgIDEgMAogICAgICAgICAgMCAxCiAgICAgICAgICAxIDAuODk5OTkzODk2NDg0Mzc1CiAgICAgICAgKSI+PHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBjbGlwLXJ1bGU9Im5vbnplcm8iIGQ9Ik0gMjEuNjAwMDk3NjU2MjUgMTkuNTAwMDMwNTE3NTc4MTI1IEwgMTcuMjAwMTk1MzEyNSAxNS4xMDAwMDYxMDM1MTU2MjUgQyAxOC4zMDAxOTU2OTM5Njk3MjcgMTMuNTAwMDA1NzIyMDQ1ODk4IDE5IDExLjYwMDAzMDg5OTA0Nzg1MiAxOSA5LjUwMDAzMDUxNzU3ODEyNSBDIDE5IDQuMzAwMDMwNzA4MzEyOTg4IDE0LjY5OTk5OTgwOTI2NTEzNyAwIDkuNSAwIEMgNC4zMDAwMDAxOTA3MzQ4NjMgMCAwIDQuMzAwMDMwNzA4MzEyOTg4IDAgOS41MDAwMzA1MTc1NzgxMjUgQyAwIDE0LjcwMDAzMDMyNjg0MzI2MiA0LjMwMDAwMDE5MDczNDg2MyAxOS4wMDAwMzA1MTc1NzgxMjUgOS41IDE5LjAwMDAzMDUxNzU3ODEyNSBDIDExLjYwMDAwMDM4MTQ2OTcyNyAxOS4wMDAwMzA1MTc1NzgxMjUgMTMuNTAwMDk3Mjc0NzgwMjczIDE4LjI5OTk4MjA3MDkyMjg1IDE1LjEwMDA5NzY1NjI1IDE3LjE5OTk4MTY4OTQ1MzEyNSBMIDE5LjUgMjEuNjAwMDA2MTAzNTE1NjI1IEwgMjEuNjAwMDk3NjU2MjUgMTkuNTAwMDMwNTE3NTc4MTI1IFogTSAzIDkuNjAwMDA2MTAzNTE1NjI1IEMgMyA2LjAwMDAwNjE5ODg4MzA1NyA1LjkwMDAwMDA5NTM2NzQzMiAzLjEwMDAwNjEwMzUxNTYyNSA5LjUgMy4xMDAwMDYxMDM1MTU2MjUgQyAxMy4xMDAwMDAzODE0Njk3MjcgMy4xMDAwMDYxMDM1MTU2MjUgMTYgNi4wMDAwMDYxOTg4ODMwNTcgMTYgOS42MDAwMDYxMDM1MTU2MjUgQyAxNiAxMy4yMDAwMDY0ODQ5ODUzNTIgMTMuMTAwMDAwMzgxNDY5NzI3IDE2LjEwMDAwNjEwMzUxNTYyNSA5LjUgMTYuMTAwMDA2MTAzNTE1NjI1IEMgNS45MDAwMDAwOTUzNjc0MzIgMTYuMTAwMDA2MTAzNTE1NjI1IDMgMTMuMjAwMDA2NDg0OTg1MzUyIDMgOS42MDAwMDYxMDM1MTU2MjUgWiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPgo8L3N2Zz4="

/***/ })

}]);
//# sourceMappingURL=component---node-modules-ocular-gatsby-src-templates-search-jsx-5013af8ca991b441dc4e.js.map
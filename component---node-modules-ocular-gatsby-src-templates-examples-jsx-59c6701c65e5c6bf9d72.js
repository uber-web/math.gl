(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Examples; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27);
/* harmony import */ var _components_layout_website_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);




 // import ExampleTableOfContents from '../components/layout/example-table-of-contents';

/* eslint no-undef: "off" */

/*
class Gallery extends Component {

  render() {
    // const {children, route: {path, pages}, isMenuOpen} = this.props;

    return (
      <div className="gallery-wrapper">
        { /* TODO - add thumbnails
        <div className={'flexbox-item flexbox-item--fill'}>
          { children }
        </div>
        * }
      </div>
    );
  }
}
*/

var Examples =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Examples, _Component);

  function Examples() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Examples.prototype;

  _proto.render = function render() {
    var examples = this.props.pageContext.examples;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout_website_config__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"], null, function (_ref) {
      var theme = _ref.theme;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__[/* MainExamples */ "i"], {
        theme: theme
      }, examples.map(function (exampleData) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__[/* ExampleCard */ "d"], {
          theme: theme,
          key: exampleData.title
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
          to: "/" + exampleData.path
        }, exampleData.imageSrc ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: exampleData.imageSrc,
          alt: exampleData.title
        }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_3__[/* ExampleTitle */ "e"], {
          theme: theme
        }, exampleData.title)));
      }));
    });
  };

  return Examples;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

}]);
//# sourceMappingURL=component---node-modules-ocular-gatsby-src-templates-examples-jsx-59c6701c65e5c6bf9d72.js.map
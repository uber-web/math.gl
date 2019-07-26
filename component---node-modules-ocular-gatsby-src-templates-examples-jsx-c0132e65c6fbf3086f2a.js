(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Examples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}// import ExampleTableOfContents from '../components/layout/example-table-of-contents';
/* eslint no-undef: "off" */ /*
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
*/var Examples=/*#__PURE__*/function(_Component){_inheritsLoose(Examples,_Component);function Examples(){return _Component.apply(this,arguments)||this;}var _proto=Examples.prototype;_proto.render=function render(){var examples=this.props.pageContext.examples;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_2__[/* MainExamples */ "i"],null,examples.map(function(exampleData){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_2__[/* ExampleCard */ "d"],{key:exampleData.title},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__[/* Link */ "a"],{to:"/"+exampleData.path},exampleData.imageSrc?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:exampleData.imageSrc,alt:exampleData.title}):null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_2__[/* ExampleTitle */ "e"],null,exampleData.title)));}));};return Examples;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ })

}]);
//# sourceMappingURL=component---node-modules-ocular-gatsby-src-templates-examples-jsx-c0132e65c6fbf3086f2a.js.map
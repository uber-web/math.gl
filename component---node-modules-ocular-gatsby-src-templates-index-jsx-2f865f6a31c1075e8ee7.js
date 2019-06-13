(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inheritsLoose.js
var inheritsLoose = __webpack_require__(2);
var inheritsLoose_default = /*#__PURE__*/__webpack_require__.n(inheritsLoose);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/ocular-gatsby/src/components/layout/website-config.jsx
var website_config = __webpack_require__(75);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/hero.jsx





var hero_Hero =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(Hero, _Component);

  function Hero() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Hero.prototype;

  _proto.renderPage = function renderPage(_ref) {
    var config = _ref.config;
    var HeroExample = this.props.HeroExample;
    return react_default.a.createElement("section", {
      className: "banner"
    }, react_default.a.createElement("div", {
      className: "f hero"
    }, HeroExample && react_default.a.createElement(HeroExample, null)), react_default.a.createElement("div", {
      className: "container"
    }, react_default.a.createElement("h1", null, config.PROJECT_NAME), react_default.a.createElement("p", null, config.PROJECT_DESC), react_default.a.createElement(gatsby_browser_entry["a" /* Link */], {
      to: "/docs/get-started",
      className: "btn"
    }, "GET STARTED")));
  };

  _proto.render = function render() {
    var _this = this;

    return react_default.a.createElement(website_config["b" /* default */], null, function (_ref2) {
      var config = _ref2.config;
      return _this.renderPage({
        config: config
      });
    });
  };

  return Hero;
}(react["Component"]);


// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/github/github-contributors.jsx


 // Github api has rate-limits. We want to cache the response
// as much as we can. This component gets re-mounted multiple times.

var cachedResponse = null;
var ContribLink = styled_components_browser_esm["a" /* default */].a.withConfig({
  displayName: "github-contributors__ContribLink",
  componentId: "sc-1fjiz7k-0"
})(["margin:10px;"]);
var ContribDiv = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "github-contributors__ContribDiv",
  componentId: "sc-1fjiz7k-1"
})(["width:8rem;height:10rem;"]);
var ContribImage = styled_components_browser_esm["a" /* default */].img.withConfig({
  displayName: "github-contributors__ContribImage",
  componentId: "sc-1fjiz7k-2"
})(["border-radius:50%;border:4px solid #17b8be;box-shadow:0 0 0 #17b8be;transition:border 0.5s,box-shadow 0.5s;opacity:0.9;&:hover{border:4px solid #fff;box-shadow:0 0 20px #17b8be;opacity:1;}"]);
var ContribName = styled_components_browser_esm["a" /* default */].div.withConfig({
  displayName: "github-contributors__ContribName",
  componentId: "sc-1fjiz7k-3"
})(["width:8rem;text-align:center;"]);

var github_contributors_GithubContributors =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(GithubContributors, _Component);

  function GithubContributors(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      response: cachedResponse
    };
    return _this;
  }

  var _proto = GithubContributors.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (cachedResponse) {
      return;
    }

    var project = this.props.project;
    fetch("https://api.github.com/repos/" + project + "/contributors").then(function (response) {
      return response.json();
    }).then(function (response) {
      cachedResponse = response;

      _this2.setState({
        response: response
      });
    });
  };

  _proto.render = function render() {
    var response = this.state.response;
    var contributors = Array.isArray(response) ? response : [];
    return contributors.map(function (contributor) {
      return contributor ? react_default.a.createElement(ContribLink, {
        target: "_blank",
        rel: "noopener noreferrer",
        href: contributor.html_url,
        key: contributor.id
      }, react_default.a.createElement(ContribDiv, null, react_default.a.createElement(ContribImage, {
        src: contributor.avatar_url,
        width: "100%",
        alt: ""
      }), react_default.a.createElement(ContribName, null, contributor.login))) : null;
    });
  };

  return GithubContributors;
}(react["Component"]);


// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/components/home.jsx

// Copyright (c) 2018 Uber Technologies, Inc.
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





function home_renderPage(_ref) {
  var config = _ref.config,
      HeroExample = _ref.HeroExample;
  var HOME_HEADING = config.HOME_HEADING,
      _config$HOME_RIGHT = config.HOME_RIGHT,
      HOME_RIGHT = _config$HOME_RIGHT === void 0 ? '' : _config$HOME_RIGHT,
      _config$HOME_BULLETS = config.HOME_BULLETS,
      HOME_BULLETS = _config$HOME_BULLETS === void 0 ? [] : _config$HOME_BULLETS,
      PROJECT_TYPE = config.PROJECT_TYPE; // Note: The Layout "wrapper" component adds header and footer etc

  return react_default.a.createElement("div", {
    className: "fg"
  }, react_default.a.createElement(hero_Hero, {
    HeroExample: HeroExample
  }), react_default.a.createElement("div", {
    className: "fg p4"
  }, react_default.a.createElement("div", {
    className: "container f fw"
  }, react_default.a.createElement("div", {
    className: "f1 p",
    style: {
      minWidth: '10rem'
    }
  }, react_default.a.createElement("h2", null, HOME_HEADING), react_default.a.createElement("hr", {
    className: "short"
  }), HOME_BULLETS.map(function (bullet) {
    return react_default.a.createElement("div", {
      key: bullet.text
    }, react_default.a.createElement("h3", {
      className: "fac"
    }, react_default.a.createElement("img", {
      src: bullet.img,
      className: "m-right",
      alt: ""
    }), bullet.text), bullet.desc && react_default.a.createElement("p", null, bullet.desc));
  })), react_default.a.createElement("div", {
    className: "f1 p",
    style: {
      minWidth: '10rem'
    }
  }, HOME_RIGHT)), PROJECT_TYPE === 'github' && react_default.a.createElement("div", {
    className: "container"
  }, react_default.a.createElement("hr", {
    className: "short"
  }), react_default.a.createElement("h3", null, "Contributors"), react_default.a.createElement("span", null, "Join us!"), react_default.a.createElement("div", {
    className: "Contributors m-top"
  }, react_default.a.createElement(github_contributors_GithubContributors, {
    project: config.PROJECT_ORG + "/" + config.PROJECT_NAME
  })))));
}

var home_Home =
/*#__PURE__*/
function (_Component) {
  inheritsLoose_default()(Home, _Component);

  function Home() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Home.prototype;

  _proto.render = function render() {
    var HeroExample = this.props.HeroExample;
    return react_default.a.createElement("main", null, react_default.a.createElement(website_config["b" /* default */], null, function (_ref2) {
      var config = _ref2.config;
      return home_renderPage({
        config: config,
        HeroExample: HeroExample
      });
    }));
  };

  return Home;
}(react["Component"]);


// CONCATENATED MODULE: ./node_modules/ocular-gatsby/src/templates/index.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return templates_IndexPage; });




var templates_IndexPage =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose_default()(IndexPage, _React$Component);

  function IndexPage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = IndexPage.prototype;

  _proto.render = function render() {
    return react_default.a.createElement(home_Home, null);
  };

  return IndexPage;
}(react_default.a.Component);



/***/ })

}]);
//# sourceMappingURL=component---node-modules-ocular-gatsby-src-templates-index-jsx-2f865f6a31c1075e8ee7.js.map
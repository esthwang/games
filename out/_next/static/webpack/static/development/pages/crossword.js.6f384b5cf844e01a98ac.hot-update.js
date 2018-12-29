webpackHotUpdate("static/development/pages/crossword.js",{

/***/ "./styles/index.ts":
/*!*************************!*\
  !*** ./styles/index.ts ***!
  \*************************/
/*! exports provided: GlobalStyle, Theme, InnerContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerContainer", function() { return InnerContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nhtml, body {\n  font-size: 100%;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n}\n\n* {\n  font-family: \"Verlag A\", \"Verlag B\";\n  font-style: normal;\n  color: #333333;\n  line-height: 1.4;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.375rem;\n}\n\nh4 {\n  font-size: 1.125rem;\n}\n\nh5 {\n  font-size: 1rem;\n}\n\nh6 {\n  font-size: 0.875rem;\n}\n\np {\n  font-size: 1.375rem;\n  font-weight: 300;\n  font-style: normal;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject());
var Theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12,
    // columns
    gutterWidth: 1,
    // rem
    outerMargin: 1,
    // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46,
      // rem
      md: 61,
      // rem
      lg: 76 // rem

    },
    breakpoints: {
      xs: 0,
      // em
      sm: 48,
      // em
      md: 64,
      // em
      lg: 75 // em

    }
  },
  colors: {
    primary: '#9b2743',
    secondary: '#b9d3dc',
    brightness_0: '#2a2c30',
    brightness_20: '#545659',
    brightness_50: '#949597',
    brightness_70: '#bfbfc0',
    brightness_80: '#d4d4d5',
    brightness_90: '#e9e9ea',
    brightness_100: '#ffffff'
  }
};
var InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__InnerContainer",
  componentId: "g8cm07-0"
})(["width:80%;margin-left:auto;margin-right:auto;@media (min-width:801px) and (max-width:1199px){width:100%;}@media (max-width:800px){width:100%;}"]);


/***/ })

})
//# sourceMappingURL=crossword.js.6f384b5cf844e01a98ac.hot-update.js.map
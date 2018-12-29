webpackHotUpdate("static/development/pages/crossword.js",{

/***/ "./pages/crossword.tsx":
/*!*****************************!*\
  !*** ./pages/crossword.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chicagomaroon_react_crossword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chicagomaroon/react-crossword */ "./node_modules/@chicagomaroon/react-crossword/lib/index.js");
/* harmony import */ var _chicagomaroon_react_crossword__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chicagomaroon_react_crossword__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-styled-flexboxgrid */ "./node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles */ "./styles/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/euirim/projects/work/crossword/pages/crossword.tsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }









;
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "crossword__HeaderContainer",
  componentId: "jmfibm-0"
})(["padding-top:4rem;padding-bottom:1rem;border-bottom:1px solid ", ";margin-bottom:2rem;"], function (props) {
  return props.theme.colors.brightness_80;
});
var FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "crossword__FooterContainer",
  componentId: "jmfibm-1"
})(["border-top:1px solid ", ";margin-top:1rem;"], function (props) {
  return props.theme.colors.brightness_80;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h1.withConfig({
  displayName: "crossword__Title",
  componentId: "jmfibm-2"
})(["display:inline;@media (max-width:800px){display:block;}"]);
var Timestamp = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h2.withConfig({
  displayName: "crossword__Timestamp",
  componentId: "jmfibm-3"
})(["font-weight:normal;font-size:1.3rem;color:", ";margin-bottom:0;"], function (props) {
  return props.theme.colors.primary;
});
var Byline = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h2.withConfig({
  displayName: "crossword__Byline",
  componentId: "jmfibm-4"
})(["display:inline;font-weight:normal;font-size:1rem;margin-top:24px;margin-bottom:0;float:right;color:", ";@media (max-width:800px){display:inline-block;float:left;}"], function (props) {
  return props.theme.colors.brightness_50;
});
var Person = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "crossword__Person",
  componentId: "jmfibm-5"
})(["color:", ";font-weight:bold;text-transform:uppercase;"], function (props) {
  return props.theme.colors.brightness_50;
});

function createByline(ls) {
  var bylineItems = [];
  bylineItems.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, "By"));

  for (var i = 0; i < ls.length; i++) {
    if (i === ls.length - 1) {
      bylineItems.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Person, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, " ", ls[i]));
      continue;
    }

    var suffix = "";

    if (ls.length > 2) {
      suffix += ",";
    }

    if (i === ls.length - 2) {
      suffix += " and ";
    }

    bylineItems.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Person, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, " ", ls[i]), suffix));
  }

  return bylineItems;
}

var Crossword = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(HeaderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["InnerContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Timestamp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, dayjs__WEBPACK_IMPORTED_MODULE_2___default()(props.data.date).format('MMM. D, YYYY')), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, props.data.name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Byline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, createByline(props.data.byline))))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__["InnerContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_chicagomaroon_react_crossword__WEBPACK_IMPORTED_MODULE_1___default.a, {
    data: props.data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(FooterContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }));
});

Crossword.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, query, cwFiles, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, query = _ref.query;
            _context.next = 3;
            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../data.json */ "./data.json", 3));

          case 3:
            cwFiles = _context.sent;
            _context.next = 6;
            return __webpack_require__("./crosswords lazy recursive ^\\.\\/.*$")("./".concat(cwFiles[query.id]));

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              data: data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Crossword);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/crossword")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=crossword.js.7efab31a854516e80b79.hot-update.js.map
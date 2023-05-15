"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MAX_RATING = 5;\nconst MIN_RATING = 1;\nfunction Product(param) {\n    let { id , title , price , description , category , image  } = param;\n    _s();\n    const [rating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);\n    const [hasPrime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col m-5 bg-red z-30 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absolute top-2 right-2 text-xs italic text-black-500\",\n                children: category\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                width: 200,\n                height: 200,\n                objectFit: \"contain\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"my-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: Array(rating).fill().map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n                        className: \"h-5 text-red-500\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 27,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-2 line-clamp-2\",\n                children: description\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    quantity: price,\n                    currency: \"INR\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 -mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-12\",\n                        src: \"https://links.papareact.com/fdw\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: \"FREE Next-day Delivery\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-auto button\",\n                children: \"Add to Basket\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\android club work\\\\amazon-2\\\\src\\\\components\\\\Product.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Product, \"iAFI4jNUmIsuo72nUPAkXMwMyHY=\");\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDSztBQUNtQjtBQUNqQjtBQUNlO0FBRWhELE1BQU1LLGFBQWE7QUFDbkIsTUFBTUMsYUFBYTtBQUVuQixTQUFTQyxRQUFRLEtBQWtELEVBQUU7UUFBcEQsRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRSxHQUFsRDs7SUFDYixNQUFNLENBQUNDLE9BQU8sR0FBR1gsK0NBQVFBLENBQ3JCWSxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBTVosQ0FBQUEsYUFBYUMsYUFBYSxNQUFNQTtJQUdoRSxNQUFNLENBQUNZLFNBQVMsR0FBR2YsK0NBQVFBLENBQUNZLEtBQUtFLE1BQU0sS0FBSztJQUU1QyxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFFRCxXQUFVOzBCQUF3RFI7Ozs7OzswQkFDckUsOERBQUNYLG1EQUFLQTtnQkFBQ3FCLEtBQUtUO2dCQUFPVSxPQUFPO2dCQUFLQyxRQUFRO2dCQUFLQyxXQUFVOzs7Ozs7MEJBQ3RELDhEQUFDQztnQkFBR04sV0FBVTswQkFBUVg7Ozs7OzswQkFFdEIsOERBQUNVO2dCQUFJQyxXQUFVOzBCQUNWTyxNQUFNYixRQUNGYyxJQUFJLEdBQ0pDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxrQkFDTCw4REFBQzdCLDREQUFRQTt3QkFBQ2tCLFdBQVU7Ozs7Ozs7Ozs7OzBCQUtoQyw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQTZCVDs7Ozs7OzBCQUMxQyw4REFBQ1E7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNoQixpRUFBUUE7b0JBQUM0QixVQUFVdEI7b0JBQU91QixVQUFTOzs7Ozs7Ozs7OztZQUd2Q2YsMEJBQ0csOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ2M7d0JBQUlkLFdBQVU7d0JBQU9FLEtBQUk7d0JBQWtDYSxLQUFJOzs7Ozs7a0NBQ2hFLDhEQUFDZDt3QkFBRUQsV0FBVTtrQ0FBd0I7Ozs7Ozs7Ozs7OzswQkFJN0MsOERBQUNnQjtnQkFBT2hCLFdBQVU7MEJBQWlCOzs7Ozs7Ozs7Ozs7QUFLL0M7R0F2Q1NiO0tBQUFBO0FBMENULCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QuanM/NGU4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuXHJcbmNvbnN0IE1BWF9SQVRJTkcgPSA1O1xyXG5jb25zdCBNSU5fUkFUSU5HID0gMTtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3QoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pIHtcclxuICAgIGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoXHJcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBbaGFzUHJpbWVdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSA8IDAuNSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbS01IGJnLXJlZCB6LTMwIHAtMTBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXhzIGl0YWxpYyB0ZXh0LWJsYWNrLTUwMFwiPntjYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJteS0zXCI+e3RpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgIHtBcnJheShyYXRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJJY29uIGNsYXNzTmFtZT1cImgtNSB0ZXh0LXJlZC01MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0yXCI+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XHJcbiAgICAgICAgICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIklOUlwiIC8+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtoYXNQcmltZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiAtbXQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMlwiIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPkZSRUUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtYXV0byBidXR0b25cIj5BZGQgdG8gQmFza2V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIFxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJTdGFySWNvbiIsInVzZVN0YXRlIiwiQ3VycmVuY3kiLCJNQVhfUkFUSU5HIiwiTUlOX1JBVElORyIsIlByb2R1Y3QiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYXNQcmltZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImg0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJxdWFudGl0eSIsImN1cnJlbmN5IiwiaW1nIiwiYWx0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Product.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/Sidebar/Sidebar.tsx":
/*!****************************************!*\
  !*** ./components/Sidebar/Sidebar.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { user } = param;\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sidebar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    className: \"mb-12 curser-pointer items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/icons/logo.svg\",\n                            width: 34,\n                            height: 34,\n                            alt: \"BudgAI\",\n                            className: \"size-[24px] max-xl:size-14\"\n                        }, void 0, false, {\n                            fileName: \"/Users/reesj5/Documents/builds/budgai/components/Sidebar/Sidebar.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"sidebar-logo\",\n                            children: \"Budgey\"\n                        }, void 0, false, {\n                            fileName: \"/Users/reesj5/Documents/builds/budgai/components/Sidebar/Sidebar.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/reesj5/Documents/builds/budgai/components/Sidebar/Sidebar.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                _constants__WEBPACK_IMPORTED_MODULE_5__.sidebarLinks.map((link)=>{\n                    const isActive = pathName === link.route || pathName.startsWith(\"\".concat(link.route, \"/\"));\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: link.route,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)('sidebar-link', {\n                            'bg-bank-gradient': isActive\n                        }),\n                        children: link.label\n                    }, link.route, false, {\n                        fileName: \"/Users/reesj5/Documents/builds/budgai/components/Sidebar/Sidebar.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 16\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/reesj5/Documents/builds/budgai/components/Sidebar/Sidebar.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/reesj5/Documents/builds/budgai/components/Sidebar/Sidebar.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"28xf+Q/MMfpBebWfp+J7Y3ZZbws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ0U7QUFDRTtBQUNhO0FBQ0g7QUFFM0MsTUFBTUssVUFBVTtRQUFDLEVBQUVDLElBQUksRUFBRTs7SUFFdkIsTUFBTUMsV0FBV0osNERBQVdBO0lBQzVCLHFCQUNFLDhEQUFDSztRQUFRQyxXQUFXO2tCQUNsQiw0RUFBQ0M7WUFBSUQsV0FBVzs7OEJBQ2QsOERBQUNULGtEQUFJQTtvQkFBQ1csTUFBSztvQkFBSUYsV0FBVzs7c0NBQ3hCLDhEQUFDUixrREFBS0E7NEJBQ0pXLEtBQUs7NEJBQ0xDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUs7NEJBQ0xOLFdBQVc7Ozs7OztzQ0FFYiw4REFBQ087NEJBQUdQLFdBQVc7c0NBQWdCOzs7Ozs7Ozs7Ozs7Z0JBRWpDTCxvREFBWUEsQ0FBQ2EsR0FBRyxDQUFDLENBQUNDO29CQUNsQixNQUFNQyxXQUFXWixhQUFhVyxLQUFLRSxLQUFLLElBQUliLFNBQVNjLFVBQVUsQ0FBQyxHQUFjLE9BQVhILEtBQUtFLEtBQUssRUFBQztvQkFDOUUscUJBQU8sOERBQUNwQixrREFBSUE7d0JBQUVXLE1BQU1PLEtBQUtFLEtBQUs7d0JBQW1CWCxXQUFXUCw4Q0FBRUEsQ0FBQyxnQkFBZ0I7NEJBQUMsb0JBQW9CaUI7d0JBQVE7a0NBQUtELEtBQUtJLEtBQUs7dUJBQXRGSixLQUFLRSxLQUFLOzs7OztnQkFBcUY7Ozs7Ozs7Ozs7OztBQUk1STtHQXRCTWY7O1FBRWFGLHdEQUFXQTs7O0tBRnhCRTtBQXdCTixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3JlZXNqNS9Eb2N1bWVudHMvYnVpbGRzL2J1ZGdhaS9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBzaWRlYmFyTGlua3MgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7IHVzZXIgfSk6IFNpZGVyYmFyUHJvcHMgPT4ge1xuXG4gIGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e1wic2lkZWJhclwifT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtcImZsZXggZmxleC1jb2wgZ2FwLTRcIn0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtcIm1iLTEyIGN1cnNlci1wb2ludGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwifT5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvbG9nby5zdmdcIn1cbiAgICAgICAgICAgIHdpZHRoPXszNH1cbiAgICAgICAgICAgIGhlaWdodD17MzR9XG4gICAgICAgICAgICBhbHQ9e1wiQnVkZ0FJXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wic2l6ZS1bMjRweF0gbWF4LXhsOnNpemUtMTRcIn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e1wic2lkZWJhci1sb2dvXCJ9PkJ1ZGdleTwvaDE+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICB7c2lkZWJhckxpbmtzLm1hcCgobGluaykgPT4ge1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHBhdGhOYW1lID09PSBsaW5rLnJvdXRlIHx8IHBhdGhOYW1lLnN0YXJ0c1dpdGgoYCR7bGluay5yb3V0ZX0vYCk7XG4gICAgICAgIHJldHVybig8TGluayAgaHJlZj17bGluay5yb3V0ZX0ga2V5PXtsaW5rLnJvdXRlfSBjbGFzc05hbWU9e2NuKCdzaWRlYmFyLWxpbmsnLCB7J2JnLWJhbmstZ3JhZGllbnQnOiBpc0FjdGl2ZX0pfT57bGluay5sYWJlbH08L0xpbms+KX0pfVxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJjbiIsInVzZVBhdGhuYW1lIiwic2lkZWJhckxpbmtzIiwiU2lkZWJhciIsInVzZXIiLCJwYXRoTmFtZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJuYXYiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJoMSIsIm1hcCIsImxpbmsiLCJpc0FjdGl2ZSIsInJvdXRlIiwic3RhcnRzV2l0aCIsImxhYmVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar/Sidebar.tsx\n"));

/***/ })

});
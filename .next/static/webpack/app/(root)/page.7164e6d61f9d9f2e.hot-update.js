"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./components/DoughnutChart/DoughnutChart.tsx":
/*!****************************************************!*\
  !*** ./components/DoughnutChart/DoughnutChart.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nconst DoughnutChart = (param)=>{\n    let { accounts } = param;\n    const data = {\n        datasets: [\n            {\n                label: 'Banks',\n                data: [\n                    1250,\n                    2500,\n                    3750\n                ],\n                backgroundColor: [\n                    '#0747b6',\n                    '#2265d8',\n                    '#2f91fa'\n                ]\n            }\n        ],\n        labels: [\n            'Monzo',\n            'First Direct',\n            'Trading 212'\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Doughnut, {\n        data: []\n    }, void 0, false, {\n        fileName: \"/Users/reesj5/Documents/builds/budgai/components/DoughnutChart/DoughnutChart.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DoughnutChart;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoughnutChart);\nvar _c;\n$RefreshReg$(_c, \"DoughnutChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRG91Z2hudXRDaGFydC9Eb3VnaG51dENoYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lCO0FBQ2dEO0FBQzlCO0FBRTNDRSwyQ0FBT0EsQ0FBQ0ssUUFBUSxDQUFDSixnREFBVUEsRUFBRUMsNkNBQU9BLEVBQUVDLDRDQUFNQTtBQUc1QyxNQUFNRyxnQkFBZ0I7UUFBQyxFQUFDQyxRQUFRLEVBQXFCO0lBQ2pELE1BQU1DLE9BQU87UUFDVEMsVUFBVTtZQUNOO2dCQUNJQyxPQUFPO2dCQUNQRixNQUFNO29CQUFDO29CQUFNO29CQUFNO2lCQUFLO2dCQUN4QkcsaUJBQWlCO29CQUFDO29CQUFXO29CQUFXO2lCQUFVO1lBQ3REO1NBQ0g7UUFDREMsUUFBUTtZQUFDO1lBQVM7WUFBZ0I7U0FBYztJQUNwRDtJQUVGLHFCQUNFLDhEQUFDUixxREFBUUE7UUFBQ0ksTUFBTSxFQUFFOzs7Ozs7QUFFdEI7S0FmTUY7QUFpQk4saUVBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9yZWVzajUvRG9jdW1lbnRzL2J1aWxkcy9idWRnYWkvY29tcG9uZW50cy9Eb3VnaG51dENoYXJ0L0RvdWdobnV0Q2hhcnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIEFyY0VsZW1lbnQsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gXCJjaGFydC5qc1wiO1xuaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbkNoYXJ0SlMucmVnaXN0ZXIoQXJjRWxlbWVudCwgVG9vbHRpcCwgTGVnZW5kKTtcblxuXG5jb25zdCBEb3VnaG51dENoYXJ0ID0gKHthY2NvdW50c306IERvdWdobnV0Q2hhcnRQcm9wcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCYW5rcycsXG4gICAgICAgICAgICAgICAgZGF0YTogWzEyNTAsIDI1MDAsIDM3NTBdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWycjMDc0N2I2JywgJyMyMjY1ZDgnLCAnIzJmOTFmYSddXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGxhYmVsczogWydNb256bycsICdGaXJzdCBEaXJlY3QnLCAnVHJhZGluZyAyMTInXVxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDxEb3VnaG51dCBkYXRhPXtbXX0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb3VnaG51dENoYXJ0Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQXJjRWxlbWVudCIsIlRvb2x0aXAiLCJMZWdlbmQiLCJEb3VnaG51dCIsInJlZ2lzdGVyIiwiRG91Z2hudXRDaGFydCIsImFjY291bnRzIiwiZGF0YSIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DoughnutChart/DoughnutChart.tsx\n"));

/***/ })

});
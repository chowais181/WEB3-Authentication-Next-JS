"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/authenticate";
exports.ids = ["pages/api/authenticate"];
exports.modules = {

/***/ "@thirdweb-dev/sdk":
/*!************************************!*\
  !*** external "@thirdweb-dev/sdk" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@thirdweb-dev/sdk");;

/***/ }),

/***/ "(api)/./pages/api/authenticate.tsx":
/*!************************************!*\
  !*** ./pages/api/authenticate.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/sdk */ \"@thirdweb-dev/sdk\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__]);\n_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst authenticate = async (req, res)=>{\n    if (req.method !== \"POST\") {\n        return res.status(400).json({\n            error: \"Invalid method. Only POST supported.\"\n        });\n    }\n    const PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;\n    if (!PRIVATE_KEY) {\n        console.error(\"Missing ADMIN_PRIVATE_KEY environment variable\");\n        return res.status(500).json({\n            error: \"Admin private key not set\"\n        });\n    }\n    // Get access token off cookies\n    const token = req.cookies.access_token;\n    if (!token) {\n        res.status(401).json({\n            error: \"Must provide an access token to authenticate\"\n        });\n    }\n    const sdk = _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__.ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY, \"mainnet\");\n    // Authenticate token with the SDK\n    // this verifies the address of a client-side user on the backend\n    const domain = \"example.com\";\n    const address = await sdk.auth.authenticate(domain, token);\n    // const address = await sdk.auth.verify(domain, token)\n    // if valid token exists, send back the authenticated wallet address\n    // otherwise throw an error\n    res.status(200).json(address);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authenticate);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aGVudGljYXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUcvQyxNQUFNQyxZQUFZLEdBQUcsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUN4RSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkMsS0FBSyxFQUFFLHNDQUFzQztTQUM5QyxDQUFDLENBQUM7S0FDSjtJQUVELE1BQU1DLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQjtJQUNqRCxJQUFJLENBQUNILFdBQVcsRUFBRTtRQUNoQkksT0FBTyxDQUFDTCxLQUFLLENBQUMsZ0RBQWdELENBQUM7UUFDL0QsT0FBT0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkMsS0FBSyxFQUFFLDJCQUEyQjtTQUNuQyxDQUFDO0tBQ0g7SUFFRCwrQkFBK0I7SUFDL0IsTUFBTU0sS0FBSyxHQUFHWCxHQUFHLENBQUNZLE9BQU8sQ0FBQ0MsWUFBWTtJQUN0QyxJQUFJLENBQUNGLEtBQUssRUFBRTtRQUNWVixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQ25CQyxLQUFLLEVBQUUsOENBQThDO1NBQ3RELENBQUM7S0FDSDtJQUVELE1BQU1TLEdBQUcsR0FBR2hCLHlFQUEwQixDQUFDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQVksU0FBUyxDQUFDO0lBRTFGLGtDQUFrQztJQUNsQyxpRUFBaUU7SUFDakUsTUFBTU8sTUFBTSxHQUFHVCxhQUFtQztJQUNsRCxNQUFNVyxPQUFPLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFJLENBQUNwQixZQUFZLENBQUNpQixNQUFNLEVBQUdMLEtBQUssQ0FBQztJQUMzRCx1REFBdUQ7SUFFdkQsb0VBQW9FO0lBQ3BFLDJCQUEyQjtJQUMzQlYsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ2MsT0FBTyxDQUFDO0NBQzlCO0FBRUQsaUVBQWVuQixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9wYWdlcy9hcGkvYXV0aGVudGljYXRlLnRzeD8wMWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoaXJkd2ViU0RLIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrXCJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiXG5cbmNvbnN0IGF1dGhlbnRpY2F0ZSA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBcbiAgICAgIGVycm9yOiBcIkludmFsaWQgbWV0aG9kLiBPbmx5IFBPU1Qgc3VwcG9ydGVkLlwiIFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgUFJJVkFURV9LRVkgPSBwcm9jZXNzLmVudi5BRE1JTl9QUklWQVRFX0tFWVxuICBpZiAoIVBSSVZBVEVfS0VZKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk1pc3NpbmcgQURNSU5fUFJJVkFURV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGVcIilcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBcbiAgICAgIGVycm9yOiBcIkFkbWluIHByaXZhdGUga2V5IG5vdCBzZXRcIiBcbiAgICB9KVxuICB9XG5cbiAgLy8gR2V0IGFjY2VzcyB0b2tlbiBvZmYgY29va2llc1xuICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLmFjY2Vzc190b2tlbjtcbiAgaWYgKCF0b2tlbikge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHtcbiAgICAgIGVycm9yOiBcIk11c3QgcHJvdmlkZSBhbiBhY2Nlc3MgdG9rZW4gdG8gYXV0aGVudGljYXRlXCJcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2RrID0gVGhpcmR3ZWJTREsuZnJvbVByaXZhdGVLZXkocHJvY2Vzcy5lbnYuQURNSU5fUFJJVkFURV9LRVkgYXMgc3RyaW5nLCBcIm1haW5uZXRcIilcblxuICAvLyBBdXRoZW50aWNhdGUgdG9rZW4gd2l0aCB0aGUgU0RLXG4gIC8vIHRoaXMgdmVyaWZpZXMgdGhlIGFkZHJlc3Mgb2YgYSBjbGllbnQtc2lkZSB1c2VyIG9uIHRoZSBiYWNrZW5kXG4gIGNvbnN0IGRvbWFpbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTl9OQU1FXG4gIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzZGsuYXV0aC5hdXRoZW50aWNhdGUoZG9tYWluICwgdG9rZW4pXG4gIC8vIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBzZGsuYXV0aC52ZXJpZnkoZG9tYWluLCB0b2tlbilcblxuICAvLyBpZiB2YWxpZCB0b2tlbiBleGlzdHMsIHNlbmQgYmFjayB0aGUgYXV0aGVudGljYXRlZCB3YWxsZXQgYWRkcmVzc1xuICAvLyBvdGhlcndpc2UgdGhyb3cgYW4gZXJyb3JcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oYWRkcmVzcylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhlbnRpY2F0ZVxuIl0sIm5hbWVzIjpbIlRoaXJkd2ViU0RLIiwiYXV0aGVudGljYXRlIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiUFJJVkFURV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fUFJJVkFURV9LRVkiLCJjb25zb2xlIiwidG9rZW4iLCJjb29raWVzIiwiYWNjZXNzX3Rva2VuIiwic2RrIiwiZnJvbVByaXZhdGVLZXkiLCJkb21haW4iLCJORVhUX1BVQkxJQ19ET01BSU5fTkFNRSIsImFkZHJlc3MiLCJhdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/authenticate.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/authenticate.tsx"));
module.exports = __webpack_exports__;

})();
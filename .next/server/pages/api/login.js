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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "@thirdweb-dev/sdk":
/*!************************************!*\
  !*** external "@thirdweb-dev/sdk" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@thirdweb-dev/sdk");;

/***/ }),

/***/ "(api)/./pages/api/login.tsx":
/*!*****************************!*\
  !*** ./pages/api/login.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @thirdweb-dev/sdk */ \"@thirdweb-dev/sdk\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__]);\n_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst login = async (req, res)=>{\n    if (req.method !== \"POST\") {\n        return res.status(400).json({\n            error: \"Invalid method. Only POST supported.\"\n        });\n    }\n    const PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;\n    if (!PRIVATE_KEY) {\n        console.error(\"Missing ADMIN_PRIVATE_KEY environment variable\");\n        return res.status(500).json({\n            error: \"Admin private key not set\"\n        });\n    }\n    const sdk = _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__.ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY, \"mainnet\");\n    // Get signed login payload from the frontend\n    const payload = req.body.payload;\n    if (!payload) {\n        return res.status(400).json({\n            error: \"Must provide a login payload to generate a token\"\n        });\n    }\n    // Generate an access/authentication token with the SDK using the signed payload\n    // generateAuthToken calls the verify() function to ensure the validity of the payload\n    const domain = \"example.com\";\n    const token = await sdk.auth.generateAuthToken(domain, payload);\n    // Securely set httpOnly cookie on request to prevent XSS on frontend\n    // And set path to / to enable access_token usage on all endpoints\n    res.setHeader(\"Set-Cookie\", (0,cookie__WEBPACK_IMPORTED_MODULE_1__.serialize)(\"access_token\", token, {\n        path: \"/\",\n        httpOnly: true,\n        secure: true,\n        sameSite: \"strict\"\n    }));\n    res.status(200).json(\"Successfully logged in.\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFFYjtBQUdsQyxNQUFNRSxLQUFLLEdBQUcsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNqRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkMsS0FBSyxFQUFFLHNDQUFzQztTQUM5QyxDQUFDLENBQUM7S0FDSjtJQUVELE1BQU1DLFdBQVcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQjtJQUNqRCxJQUFJLENBQUNILFdBQVcsRUFBRTtRQUNoQkksT0FBTyxDQUFDTCxLQUFLLENBQUMsZ0RBQWdELENBQUM7UUFDL0QsT0FBT0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkMsS0FBSyxFQUFFLDJCQUEyQjtTQUNuQyxDQUFDO0tBQ0g7SUFFRCxNQUFNTSxHQUFHLEdBQUdkLHlFQUEwQixDQUFDVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCLEVBQVksU0FBUyxDQUFDO0lBRTFGLDZDQUE2QztJQUM3QyxNQUFNSSxPQUFPLEdBQUdiLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDRCxPQUFPO0lBQ2hDLElBQUksQ0FBQ0EsT0FBTyxFQUFFO1FBQ1osT0FBT1osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUMxQkMsS0FBSyxFQUFFLGtEQUFrRDtTQUMxRCxDQUFDO0tBQ0g7SUFFRCxnRkFBZ0Y7SUFDaEYsc0ZBQXNGO0lBQ3RGLE1BQU1VLE1BQU0sR0FBR1IsYUFBbUM7SUFDbEQsTUFBTVUsS0FBSyxHQUFHLE1BQU1OLEdBQUcsQ0FBQ08sSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0osTUFBTSxFQUFFRixPQUFPLENBQUM7SUFFL0QscUVBQXFFO0lBQ3JFLGtFQUFrRTtJQUNsRVosR0FBRyxDQUFDbUIsU0FBUyxDQUFDLFlBQVksRUFBRXRCLGlEQUFTLENBQUMsY0FBYyxFQUFFbUIsS0FBSyxFQUFFO1FBQzNESSxJQUFJLEVBQUUsR0FBRztRQUNUQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxRQUFRLEVBQUUsUUFBUTtLQUNuQixDQUFDLENBQUMsQ0FBQztJQUVKdkIsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztDQUNoRDtBQUVELGlFQUFlTCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10eXBlc2NyaXB0LXN0YXJ0ZXIvLi9wYWdlcy9hcGkvbG9naW4udHN4PzU0ZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhpcmR3ZWJTREsgfSBmcm9tIFwiQHRoaXJkd2ViLWRldi9zZGtcIlxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IHNlcmlhbGl6ZSB9IGZyb20gXCJjb29raWVcIlxuaW1wb3J0IHsgTG9naW5QYXlsb2FkIH0gZnJvbSBcIkB0aGlyZHdlYi1kZXYvc2RrL2Rpc3Qvc3JjL3NjaGVtYVwiXG5cbmNvbnN0IGxvZ2luID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IFxuICAgICAgZXJyb3I6IFwiSW52YWxpZCBtZXRob2QuIE9ubHkgUE9TVCBzdXBwb3J0ZWQuXCIgXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBQUklWQVRFX0tFWSA9IHByb2Nlc3MuZW52LkFETUlOX1BSSVZBVEVfS0VZXG4gIGlmICghUFJJVkFURV9LRVkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBBRE1JTl9QUklWQVRFX0tFWSBlbnZpcm9ubWVudCB2YXJpYWJsZVwiKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IFxuICAgICAgZXJyb3I6IFwiQWRtaW4gcHJpdmF0ZSBrZXkgbm90IHNldFwiIFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBzZGsgPSBUaGlyZHdlYlNESy5mcm9tUHJpdmF0ZUtleShwcm9jZXNzLmVudi5BRE1JTl9QUklWQVRFX0tFWSBhcyBzdHJpbmcsIFwibWFpbm5ldFwiKVxuICBcbiAgLy8gR2V0IHNpZ25lZCBsb2dpbiBwYXlsb2FkIGZyb20gdGhlIGZyb250ZW5kXG4gIGNvbnN0IHBheWxvYWQgPSByZXEuYm9keS5wYXlsb2FkIGFzIExvZ2luUGF5bG9hZFxuICBpZiAoIXBheWxvYWQpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBcbiAgICAgIGVycm9yOiBcIk11c3QgcHJvdmlkZSBhIGxvZ2luIHBheWxvYWQgdG8gZ2VuZXJhdGUgYSB0b2tlblwiIFxuICAgIH0pXG4gIH0gIFxuXG4gIC8vIEdlbmVyYXRlIGFuIGFjY2Vzcy9hdXRoZW50aWNhdGlvbiB0b2tlbiB3aXRoIHRoZSBTREsgdXNpbmcgdGhlIHNpZ25lZCBwYXlsb2FkXG4gIC8vIGdlbmVyYXRlQXV0aFRva2VuIGNhbGxzIHRoZSB2ZXJpZnkoKSBmdW5jdGlvbiB0byBlbnN1cmUgdGhlIHZhbGlkaXR5IG9mIHRoZSBwYXlsb2FkXG4gIGNvbnN0IGRvbWFpbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTl9OQU1FXG4gIGNvbnN0IHRva2VuID0gYXdhaXQgc2RrLmF1dGguZ2VuZXJhdGVBdXRoVG9rZW4oZG9tYWluLCBwYXlsb2FkKVxuXG4gIC8vIFNlY3VyZWx5IHNldCBodHRwT25seSBjb29raWUgb24gcmVxdWVzdCB0byBwcmV2ZW50IFhTUyBvbiBmcm9udGVuZFxuICAvLyBBbmQgc2V0IHBhdGggdG8gLyB0byBlbmFibGUgYWNjZXNzX3Rva2VuIHVzYWdlIG9uIGFsbCBlbmRwb2ludHNcbiAgcmVzLnNldEhlYWRlcihcIlNldC1Db29raWVcIiwgc2VyaWFsaXplKFwiYWNjZXNzX3Rva2VuXCIsIHRva2VuLCB7XG4gICAgcGF0aDogXCIvXCIsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2VjdXJlOiB0cnVlLFxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICB9KSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluLlwiKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5cbiJdLCJuYW1lcyI6WyJUaGlyZHdlYlNESyIsInNlcmlhbGl6ZSIsImxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiUFJJVkFURV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fUFJJVkFURV9LRVkiLCJjb25zb2xlIiwic2RrIiwiZnJvbVByaXZhdGVLZXkiLCJwYXlsb2FkIiwiYm9keSIsImRvbWFpbiIsIk5FWFRfUFVCTElDX0RPTUFJTl9OQU1FIiwidG9rZW4iLCJhdXRoIiwiZ2VuZXJhdGVBdXRoVG9rZW4iLCJzZXRIZWFkZXIiLCJwYXRoIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzYW1lU2l0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.tsx"));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = import("@thirdweb-dev/sdk");;

/***/ }),

/***/ 862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(325);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__]);
_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const login = async (req, res)=>{
    if (req.method !== "POST") {
        return res.status(400).json({
            error: "Invalid method. Only POST supported."
        });
    }
    const PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;
    if (!PRIVATE_KEY) {
        console.error("Missing ADMIN_PRIVATE_KEY environment variable");
        return res.status(500).json({
            error: "Admin private key not set"
        });
    }
    const sdk = _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__.ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY, "mainnet");
    // Get signed login payload from the frontend
    const payload = req.body.payload;
    if (!payload) {
        return res.status(400).json({
            error: "Must provide a login payload to generate a token"
        });
    }
    // Generate an access/authentication token with the SDK using the signed payload
    // generateAuthToken calls the verify() function to ensure the validity of the payload
    const domain = "example.com";
    const token = await sdk.auth.generateAuthToken(domain, payload);
    // Securely set httpOnly cookie on request to prevent XSS on frontend
    // And set path to / to enable access_token usage on all endpoints
    res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_1__.serialize)("access_token", token, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict"
    }));
    res.status(200).json("Successfully logged in.");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(862));
module.exports = __webpack_exports__;

})();
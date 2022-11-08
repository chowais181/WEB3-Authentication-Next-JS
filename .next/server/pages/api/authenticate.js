"use strict";
(() => {
var exports = {};
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 325:
/***/ ((module) => {

module.exports = import("@thirdweb-dev/sdk");;

/***/ }),

/***/ 336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__]);
_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const authenticate = async (req, res)=>{
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
    // Get access token off cookies
    const token = req.cookies.access_token;
    if (!token) {
        res.status(401).json({
            error: "Must provide an access token to authenticate"
        });
    }
    const sdk = _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_0__.ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY, "mainnet");
    // Authenticate token with the SDK
    // this verifies the address of a client-side user on the backend
    const domain = "example.com";
    const address = await sdk.auth.authenticate(domain, token);
    // const address = await sdk.auth.verify(domain, token)
    // if valid token exists, send back the authenticated wallet address
    // otherwise throw an error
    res.status(200).json(address);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authenticate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(336));
module.exports = __webpack_exports__;

})();
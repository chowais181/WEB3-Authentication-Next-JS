"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

const logout = async (req, res)=>{
    if (req.method !== "POST") {
        return res.status(400).json({
            error: "Invalid method. Only POST supported."
        });
    }
    // Remove the authentication token cookie
    // Set the access token to 'none' and expire in 5 seconds
    res.setHeader("Set-Cookie", (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)("access_token", "none", {
        path: "/",
        expires: new Date(Date.now() + 5 * 1000)
    }));
    res.status(200).json("Successfully logged out.");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logout);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(577));
module.exports = __webpack_exports__;

})();
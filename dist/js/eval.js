(function () { var __webpack_modules__ = { 921: function (module) { eval('function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Author = /*#__PURE__*/_createClass(function Author() {\n  var _this = this;\n\n  _classCallCheck(this, Author);\n\n  _defineProperty(this, "name", \'ITEM\');\n\n  _defineProperty(this, "age", 18);\n\n  _defineProperty(this, "email", \'lxp_work@163.com\');\n\n  _defineProperty(this, "info", function () {\n    return {\n      name: _this.name,\n      age: _this.age,\n      email: _this.email\n    };\n  });\n});\n\nmodule.exports = Author;\n\n//# sourceURL=webpack://learn-webpack/./src-map/Author.js?') }, 490: function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) { "use strict"; eval("/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);\n/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Author__WEBPACK_IMPORTED_MODULE_0__);\n\nvar a = 'Hello ITEM';\nconsole.log11(a);\nvar img = new Image();\nimg.src = logo;\ndocument.getElementById('imgBox').appendChild(img);\nvar author = new (_Author__WEBPACK_IMPORTED_MODULE_0___default())();\nconsole.log(author.info);\n\n//# sourceURL=webpack://learn-webpack/./src-map/index.js?") } }, __webpack_module_cache__ = {}; function __webpack_require__(e) { var r = __webpack_module_cache__[e]; if (void 0 !== r) return r.exports; var _ = __webpack_module_cache__[e] = { exports: {} }; return __webpack_modules__[e](_, _.exports, __webpack_require__), _.exports } __webpack_require__.n = function (e) { var r = e && e.__esModule ? function () { return e.default } : function () { return e }; return __webpack_require__.d(r, { a: r }), r }, __webpack_require__.d = function (e, r) { for (var _ in r) __webpack_require__.o(r, _) && !__webpack_require__.o(e, _) && Object.defineProperty(e, _, { enumerable: !0, get: r[_] }) }, __webpack_require__.o = function (e, r) { return Object.prototype.hasOwnProperty.call(e, r) }; var __webpack_exports__ = __webpack_require__(490) })();
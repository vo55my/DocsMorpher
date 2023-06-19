(self["webpackChunkdocsmorpher"] = self["webpackChunkdocsmorpher"] || []).push([[193],{

/***/ 359:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(666);
// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(90);
// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(770);
// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(545);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(711);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ./src/scripts/views/main.js
var views_main = __webpack_require__(817);
;// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if ('serviceWorker' in navigator) {
            _context.next = 3;
            break;
          }
          console.log('Service Worker not supported in the browser');
          return _context.abrupt("return");
        case 3:
          _context.prev = 3;
          _context.next = 6;
          return navigator.serviceWorker.register('./sw.bundle.js');
        case 6:
          console.log('Service worker registered');
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](3);
          console.log('Failed to register service worker', _context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 9]]);
  }));
  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const sw_register = (swRegister);
;// CONCATENATED MODULE: ./src/scripts/index.js







var scripts_main = new views_main/* default */.Z({
  content: document.querySelector('#mainContent')
});
window.addEventListener('hashchange', function () {
  scripts_main.renderPage();
});
window.addEventListener('load', function () {
  scripts_main.renderPage();
  sw_register();
});
aos_default().init({
  once: false,
  mirror: true,
  duration: 700
});

/***/ }),

/***/ 705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);
/* harmony import */ var _views_pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(631);
/* harmony import */ var _views_pages_excel_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(914);
/* harmony import */ var _views_pages_img_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(441);
/* harmony import */ var _views_pages_powerpoint_pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(721);
/* harmony import */ var _views_pages_word_pdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(410);






var routes = {
  '/': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  // default page
  '/home': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  '/about': _views_pages_about__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  '/excel-pdf': _views_pages_excel_pdf__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  '/img-pdf': _views_pages_img_pdf__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
  '/powerpoint-pdf': _views_pages_powerpoint_pdf__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
  '/word-pdf': _views_pages_word_pdf__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    var splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlParser);

/***/ }),

/***/ 926:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var About = /*#__PURE__*/function (_HTMLElement) {
  _inherits(About, _HTMLElement);
  var _super = _createSuper(About);
  function About() {
    _classCallCheck(this, About);
    return _super.apply(this, arguments);
  }
  _createClass(About, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <div class=\"about container py-5\">\n      <h1 class=\"text-center pt-5 fw-bold\">Our Team</h1>\n      <div class=\"row text-center py-3\">\n        <div class=\"col-sm-6 col-md-6 col-lg-3 py-3 profil\">\n          <img data-src=\"/about/Hilmy.webp\" alt=\"Hilmy\" class=\"w-75 rounded-circle mb-3 lazyload border border-5 border-primary shadow-lg\">\n          <p class=\"fs-5 fw-bold nama\">Dhaifullah Hilmy</p>\n          <p class=\"univ\">Universitas Pasundan</p>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.instagram.com/si_hilmy/\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-instagram\"></i></a>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.linkedin.com/in/dhaifullah-hilmy/\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-linkedin\"></i></a>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.github.com/vo55my\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-github\"></i></a>\n        </div>\n        <div class=\"col-sm-6 col-md-6 col-lg-3 py-3 profil\">\n          <img data-src=\"/about/Wulan.webp\" alt=\"Wulan\" class=\"w-75 rounded-circle mb-3 lazyload border border-5 border-primary shadow-lg\">\n          <p class=\"fs-5 fw-bold nama\">Lutfiyah Wulan Kamilah</p>\n          <p class=\"univ\">Universitas Gunadarma</p>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.instagram.com/lutfiwukaa/\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-instagram\"></i></a>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.linkedin.com/in/lutfiwuka\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-linkedin\"></i></a>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://github.com/lutfiwuka\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-github\"></i></a>\n        </div>\n        <div class=\"col-sm-6 col-md-6 col-lg-3 py-3 profil\">\n          <img data-src=\"/about/Ihsan.webp\" alt=\"Ihsan\" class=\"w-75 rounded-circle mb-3 lazyload border border-5 border-primary shadow-lg\">\n          <p class=\"fs-5 fw-bold nama\">Maulana Ihsan</p>\n          <p class=\"univ\">Universitas Telkom</p>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.instagram.com/ikhsan_x42/\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-instagram\"></i></a>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.linkedin.com/in/maulanaihsan4/\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-linkedin\"></i></a>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://github.com/Maulanaikh\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-github\"></i></a>\n        </div>\n        <div class=\"col-sm-6 col-md-6 col-lg-3 py-3 profil\">\n          <img data-src=\"/about/Rivalda.webp\" alt=\"Rivalda\" class=\"w-75 rounded-circle mb-3 lazyload border border-5 border-primary shadow-lg\">\n          <p class=\"fs-5 fw-bold nama\">Rivalda Fatah Rachman Hernawan</p>\n          <p class=\"univ\">Universitas Komputer Indonesia</p>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.instagram.com/rivalda_fatah/\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-instagram\"></i></a>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://www.linkedin.com/in/rivalda-fatah/\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-linkedin\"></i></a>\n          <a class=\"fs-1 p-2 text-decoration-none\" href=\"https://github.com/rivaldafatah\" target=\"_blank\" rel=\"noreferrer\"><i class=\"bi bi-github\"></i></a>\n        </div>\n      </div>\n    </div>\n    ";
    }
  }]);
  return About;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('about-section', About);

/***/ }),

/***/ 255:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Feature = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Feature, _HTMLElement);
  var _super = _createSuper(Feature);
  function Feature() {
    _classCallCheck(this, Feature);
    return _super.apply(this, arguments);
  }
  _createClass(Feature, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <section id=\"tools\" class=\"tools py-5\">\n      <div class=\"container py-5 d-flex\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-sm-12 col-lg-6 text-center\">\n            <h1 class=\"display-4 fw-bold\" data-aos=\"fade-up\">Kenapa DocsMorpher???</h1>\n            <p class=\"fs-5 pt-3\" data-aos=\"fade-down\">Nikmati pengalaman konversi file yang lebih baik, lebih cepat, dan lebih efektif dengan platform yang responsif dan hemat biaya.</p>\n          </div>\n          <div class=\"col-sm-12 col-lg-6\">\n            <div id=\"carouselExample\" class=\"carousel slide\" data-aos=\"flip-left\">\n              <div class=\"carousel-inner\">\n                <div class=\"carousel-item active text-center\">\n                  <img data-src=\"/icons/LOGO DOC PDF.webp\" class=\"justify-content-center w-75 lazyload\" alt=\"Word to PDF\">\n                </div>\n                <div class=\"carousel-item text-center\">\n                  <img data-src=\"/icons/LOGO PPT PDF.webp\" class=\"justify-content-center w-75 lazyload\" alt=\"Powerpoint to PDF\">\n                </div>\n                <div class=\"carousel-item text-center\">\n                  <img data-src=\"/icons/LOGO XSL PDF.webp\" class=\"justify-content-center w-75 lazyload\" alt=\"Excel to PDF\">\n                </div>\n                <div class=\"carousel-item text-center\">\n                  <img data-src=\"/icons/LOGO IMG PDF.webp\" class=\"justify-content-center w-75 lazyload\" alt=\"IMG to PDF\">\n                </div>\n              </div>\n              <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"visually-hidden\">Previous</span>\n              </button>\n              <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExample\" data-bs-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"visually-hidden\">Next</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"feature-1\" class=\"feature-1 py-5\">\n      <div class=\"container pb-5 d-flex\">\n        <div class=\"row text-center align-items-center\">\n          <div class=\"col-sm-12 col-lg-6\">\n            <img data-src=\"/ilustration/manager.webp\" alt=\"Feature-1\" class=\"img-fluid w-75 lazyload\" data-aos=\"zoom-out\">\n          </div>\n          <div class=\"col-sm-12 col-lg-6 pt-2\">\n            <h1 class=\"display-4 fw-bold\" data-aos=\"fade-down-right\">Mudah dan Cepat</h1>\n            <p class=\"fs-5 pt-3\" data-aos=\"fade-up\">Membuka pintu ke dunia konversi file yang tak terbatas, memungkinkan Anda mengubah format dengan mudah dan hasil yang sempurna.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"feature-2\" class=\"feature-2 py-5\">\n      <div class=\"container py-5 d-flex\">\n        <div class=\"row text-center align-items-center\">\n          <div class=\"col-sm-12 col-lg-6\">\n            <h1 class=\"display-4 fw-bold\" data-aos=\"fade-down-right\">Tampilan Menarik dan Mudah Dipahami</h1>\n            <p class=\"fs-5 pt-3\" data-aos=\"fade-down\">Tampilan yang interaktif, menarik, serta memudahkan penggunaan fitur-fitur yang ada bagi pengguna baru.</p>\n          </div>\n          <div class=\"col-sm-12 col-lg-6 pb-2\">\n            <img data-src=\"/ilustration/marketer.webp\" alt=\"Feature-2\" class=\"img-fluid w-75 lazyload\" data-aos=\"flip-up\">\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"feature-3\" class=\"feature-3 py-5\">\n      <div class=\"container py-5 d-flex\">\n        <div class=\"row text-center align-items-center\">\n          <div class=\"col-sm-12 col-lg-6\">\n            <img data-src=\"/ilustration/validation.webp\" alt=\"Feature-3\" class=\"img-fluid w-75 lazyload\" data-aos=\"zoom-in\">\n          </div>\n          <div class=\"col-sm-12 col-lg-6 pt-2\">\n            <h1 class=\"display-4 fw-bold\" data-aos=\"fade-down-right\">Data Aman dan Terjamin</h1>\n            <p class=\"fs-5 pt-3\" data-aos=\"fade-up\">Keamanan data pengguna dengan enkripsi dan kontrol izin yang kuat serta memberikan jaminan bahwa dokumen penting tetap aman dan hanya dapat diakses oleh pengguna.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n    ";
    }
  }]);
  return Feature;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('feature-section', Feature);

/***/ }),

/***/ 481:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Footer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Footer, _HTMLElement);
  var _super = _createSuper(Footer);
  function Footer() {
    _classCallCheck(this, Footer);
    return _super.apply(this, arguments);
  }
  _createClass(Footer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <footer class=\"container-fluid pt-3 pb-3\">\n      <p class=\"text-center\">&copy; 2023 DocsMorpher - Made with \u2764 for the people of the internet</p>\n    </footer>\n    ";
    }
  }]);
  return Footer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('footer-section', Footer);

/***/ }),

/***/ 99:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Header = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Header, _HTMLElement);
  var _super = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <header>\n    <nav class=\"navbar navbar-expand-lg fixed-top\" aria-label=\"Offcanvas navbar large\">\n      <div class=\"container-fluid\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img data-src=\"/icons/Logo.webp\" alt=\"Logo\" class=\"lazyload\">\n        </a>\n        <button id=\"hamburgerButton\" class=\"navbar-toggler border-0 p-1\" type=\"button\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#offcanvasNavbar2\" aria-controls=\"offcanvasNavbar2\">\n          <span class=\"navbar-toggler-icon fs-2\"></span>\n        </button>\n        <div class=\"offcanvas offcanvas-end\" tabindex=\"-1\" id=\"offcanvasNavbar2\" aria-labelledby=\"offcanvasNavbar2Label\">\n          <div class=\"offcanvas-header\">\n            <img data-src=\"/icons/Logo.webp\" alt=\"Logo\" class=\"lazyload\">\n            <button type=\"button\" class=\"btn-close btn-close-black fs-3 p-3\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n          </div>\n          <div id=\"navigationDrawer\" class=\"offcanvas-body\">\n            <ul class=\"navbar-nav justify-content-end flex-grow-1\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link fw-bold p-3\" aria-current=\"page\" href=\"#/home\">Home</a>\n              </li>\n              <li class=\"nav-item dropdown-center\">\n                <a class=\"nav-link dropdown-toggle fw-bold p-3\" href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                  PDF Tools\n                </a>\n                <ul class=\"dropdown-menu dropdown-menu-end\">\n                  <li><a class=\"dropdown-item\" href=\"#/word-pdf\"><img data-src=\"/icons/LOGO DOC PDF.webp\" alt=\"Word to PDF\" class=\"w-25 lazyload\"> Word to PDF</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#/powerpoint-pdf\"><img data-src=\"/icons/LOGO PPT PDF.webp\" alt=\"Powerpoint to PDF\" class=\"w-25 lazyload\"> PPT to PDF</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#/excel-pdf\"><img data-src=\"/icons/LOGO XSL PDF.webp\" alt=\"Excel to PDF\" class=\"w-25 lazyload\"> Excel to PDF</a></li>\n                  <li><a class=\"dropdown-item\" href=\"#/img-pdf\"><img data-src=\"/icons/LOGO IMG PDF.webp\" alt=\"IMG to PDF\" class=\"w-25 lazyload\"> IMG to PDF</a></li>\n                </ul>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link fw-bold p-3\" aria-current=\"page\" href=\"#/about\">About Us</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </nav>\n  </header>\n    ";
    }
  }]);
  return Header;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('header-section', Header);

/***/ }),

/***/ 351:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Jumbotron = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Jumbotron, _HTMLElement);
  var _super = _createSuper(Jumbotron);
  function Jumbotron() {
    _classCallCheck(this, Jumbotron);
    return _super.apply(this, arguments);
  }
  _createClass(Jumbotron, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <section class=\"jumbotron py-5 my-5 d-flex\">\n      <div class=\"container text-center py-5 my-5 col-lg-8 text-center align-items-center justify-content-center\">\n        <h1 class=\"display-1 fw-bold\" id=\"judul\">Welcome to DocsMorpher</h1>\n        <p class=\"fs-4 pt-3\">Change Documents Easily, Generate Quick Solutions.</p>\n        <a href=\"#tools\" class=\"btn btn-primary shadow-lg fs-5 border-0 p-2\">Explore All</a>\n      </div>\n    </section>\n    ";
    }
  }]);
  return Jumbotron;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('jumbotron-section', Jumbotron);

/***/ }),

/***/ 427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ffb3eec564e4ac5050e0.svg";

/***/ })

}]);
//# sourceMappingURL=app~7bd12dde.bundle.js.map
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n// const Koa = require('koa');\n// const Router = require('koa-router');\n// const cors = require('@koa/cors');\n// const React = require('react');\n// const ReactDOMServer = require('react-dom/server');\n// const { StaticRouter, matchPath } = require('react-router');\n// const { matchRoutes } = require('react-router-config'); // 确保正确导入 matchRoutes 和 RouterProvider 方法\n// const App = require('../src/App').default; // 更新路径以指向打包后的文件\n// const routes = require('../src/routes').default; // 更新路径以指向打包后的文件\n// const serve = require('koa-static');\n// const path = require('path');\n// const mount = require('koa-mount');\n// const fs = require('fs');\n// const css = fs.readFileSync(path.resolve(__dirname, '../dist/index.css'), 'utf8'); // 读取打包后的 CSS 文件内容\n\n// const app = new Koa();\n// const router = new Router();\n\n// // 读取 JSON 文件的函数\n// const readJsonFile = (filePath) => {\n//   return new Promise((resolve, reject) => {\n//     fs.readFile(filePath, 'utf8', (err, data) => {\n//       if (err) {\n//         reject(err);\n//       } else {\n//         resolve(JSON.parse(data));\n//       }\n//     });\n//   });\n// };\n\n// // GET 请求商品数据接口\n// router.post(\"/api/goods/data/get\", async (ctx) => {\n//   try {\n//     const data = await readJsonFile(path.resolve(__dirname, 'goods.json'));\n//     ctx.body = {\n//       code: 200,\n//       message: \"success\",\n//       result: data,\n//     };\n//   } catch (err) {\n//     console.error('Error reading JSON:', err);\n//     ctx.status = 500;\n//     ctx.body = { error: 'Failed to read JSON file' };\n//   }\n// });\n\n// // GET 请求商品详情数据接口\n// router.post(\"/api/goodDetail/:id\", async (ctx) => {\n//   const id = ctx.params.id;\n//   //id如果是偶数，加载detail1.json，如果是奇数，加载detail2.json\n//   const fileId = parseInt(id) % 2 === 0 ? `01` : `02`;\n//   console.log('fileId:', fileId);\n//   try {\n//     const data = await readJsonFile(path.resolve(__dirname, `detail${fileId}.json`));\n//     console.log(' detail data====:', data);\n//     ctx.body = {\n//       code: 200,\n//       message: \"success\",\n//       result: data,\n//     };\n//   } catch (err) {\n//     console.error('Error reading JSON:', err);\n//     ctx.status = 500;\n//     ctx.body = { error: 'Failed to read JSON file' };\n//   }\n// });\n\n// // 挂载静态资源路径\n// app.use(mount('/static', serve(path.resolve(__dirname, '../dist'))));\n\n// router.get(/(.*)/, async (ctx) => {\n//   // router.get('/', async (ctx) => {\n//   try {\n//     console.log('Rendering for URL:', ctx.url);\n\n//     let fetchResult = null;\n//     let tdk = {//tdk 默认值\n//       title: '默认标题 - my react ssr',\n//       keywords: '默认关键词',\n//       description: '默认描述'\n//     };\n\n//     // 匹配当前请求的路由\n//     let matchedRoute = null;\n//     let matchParams = null;\n\n//     for (const route of routes) {\n//       const match = matchPath(ctx.url, {\n//         path: route.path,\n//         exact: true,\n//         strict: false\n//       });\n\n//       if (match) {\n//         matchedRoute = route;\n//         matchParams = match.params;\n//         break;\n//       }\n//     }\n\n//     if (!matchedRoute) {\n//       ctx.status = 404;\n//       ctx.body = 'Not Found';\n//       return;\n//     }\n\n//     console.log('Matched route:', matchedRoute);\n\n//     if (matchedRoute.component && matchedRoute.component.getInitialProps) {\n//       console.log('Fetching data for', matchedRoute, matchedRoute.component);\n//       fetchResult = await matchedRoute.component.getInitialProps({ match: { params: matchParams } });\n\n//     }\n\n//     //将预取数据在这里传递过去 组内通过props.staticContext获取\n//     const context = {\n//       initialData: fetchResult\n//     };\n\n//     console.log('Data fetched:', context);\n\n//     const html = ReactDOMServer.renderToString(\n//       <StaticRouter location={ctx.url} context={context}>\n//         <App />\n//       </StaticRouter>\n//     );\n\n//     console.log('Rendered HTML:', html);\n//     ctx.body = `\n//       <!DOCTYPE html>\n//       <html>\n//         <head>\n//           <title>React SSR with Koa</title>\n//           <style>${css}</style> <!-- 将 CSS 内容注入到 HTML 中 -->\n//           <script defer src=\"/static/bundle.js\"></script>\n//           <script>\n//             window.__INITIAL_DATA__ = ${JSON.stringify(fetchResult)};\n//           </script>\n//         </head>\n//         <body>\n//           <div id=\"root\">${html}</div>\n//         </body>\n//       </html>\n//       <script>\n//       window.__IS__SSR__=true;\n//       </script>\n//     `;\n//   } catch (error) {\n//     console.error('Error during rendering:', error);\n//     ctx.status = 500;\n//     ctx.body = 'Internal Server Error';\n//   }\n// });\n\n// app.use(cors());\n// app.use(router.routes()).use(router.allowedMethods());\n// // app.use(serve(path.resolve(__dirname, '../dist')));\n\n// app.listen(3000, () => {\n//   console.log('Server is running on http://localhost:3000');\n// });\n\nvar Koa = __webpack_require__(/*! koa */ \"koa\");\nvar Router = __webpack_require__(/*! koa-router */ \"koa-router\");\nvar cors = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar _require = __webpack_require__(/*! react-router */ \"react-router\"),\n  StaticRouter = _require.StaticRouter,\n  matchPath = _require.matchPath;\nvar _require2 = __webpack_require__(/*! react-router-config */ \"react-router-config\"),\n  matchRoutes = _require2.matchRoutes;\nvar App = (__webpack_require__(/*! ../src/App */ \"./src/App.tsx\")[\"default\"]);\nvar routes = (__webpack_require__(/*! ../src/routes */ \"./src/routes.tsx\")[\"default\"]);\nvar serve = __webpack_require__(/*! koa-static */ \"koa-static\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar mount = __webpack_require__(/*! koa-mount */ \"koa-mount\");\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar css = fs.readFileSync(path.resolve(__dirname, '../dist/index.css'), 'utf8');\nvar app = new Koa();\nvar router = new Router();\nvar readJsonFile = function readJsonFile(filePath) {\n  return new Promise(function (resolve, reject) {\n    fs.readFile(filePath, 'utf8', function (err, data) {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(JSON.parse(data));\n      }\n    });\n  });\n};\nrouter.post(\"/api/goods/data/get\", /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(ctx) {\n    var data;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return readJsonFile(path.resolve(__dirname, 'goods.json'));\n        case 3:\n          data = _context.sent;\n          ctx.body = {\n            code: 200,\n            message: \"success\",\n            result: data\n          };\n          _context.next = 12;\n          break;\n        case 7:\n          _context.prev = 7;\n          _context.t0 = _context[\"catch\"](0);\n          console.error('Error reading JSON:', _context.t0);\n          ctx.status = 500;\n          ctx.body = {\n            error: 'Failed to read JSON file'\n          };\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.post(\"/api/goodDetail/:id\", /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ctx) {\n    var id, fileId, data;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          id = ctx.params.id;\n          fileId = parseInt(id) % 2 === 0 ? \"01\" : \"02\";\n          console.log('fileId:', fileId);\n          _context2.prev = 3;\n          _context2.next = 6;\n          return readJsonFile(path.resolve(__dirname, \"detail\".concat(fileId, \".json\")));\n        case 6:\n          data = _context2.sent;\n          console.log(' detail data====:', data);\n          ctx.body = {\n            code: 200,\n            message: \"success\",\n            result: data\n          };\n          _context2.next = 16;\n          break;\n        case 11:\n          _context2.prev = 11;\n          _context2.t0 = _context2[\"catch\"](3);\n          console.error('Error reading JSON:', _context2.t0);\n          ctx.status = 500;\n          ctx.body = {\n            error: 'Failed to read JSON file'\n          };\n        case 16:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2, null, [[3, 11]]);\n  }));\n  return function (_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}());\napp.use(mount('/static', serve(path.resolve(__dirname, '../dist'))));\nrouter.get(/(.*)/, /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(ctx) {\n    var fetchResult, tdk, matchedRoute, matchParams, _iterator, _step, route, match, context, html;\n    return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          console.log('Rendering for URL:', ctx.url);\n          fetchResult = null;\n          tdk = {\n            title: '默认标题 - my react ssr',\n            keywords: '默认关键词',\n            description: '默认描述'\n          };\n          matchedRoute = null;\n          matchParams = null;\n          _iterator = _createForOfIteratorHelper(routes);\n          _context3.prev = 7;\n          _iterator.s();\n        case 9:\n          if ((_step = _iterator.n()).done) {\n            _context3.next = 18;\n            break;\n          }\n          route = _step.value;\n          match = matchPath(ctx.url, {\n            path: route.path,\n            exact: true,\n            strict: false\n          });\n          if (!match) {\n            _context3.next = 16;\n            break;\n          }\n          matchedRoute = route;\n          matchParams = match.params;\n          return _context3.abrupt(\"break\", 18);\n        case 16:\n          _context3.next = 9;\n          break;\n        case 18:\n          _context3.next = 23;\n          break;\n        case 20:\n          _context3.prev = 20;\n          _context3.t0 = _context3[\"catch\"](7);\n          _iterator.e(_context3.t0);\n        case 23:\n          _context3.prev = 23;\n          _iterator.f();\n          return _context3.finish(23);\n        case 26:\n          if (matchedRoute) {\n            _context3.next = 30;\n            break;\n          }\n          ctx.status = 404;\n          ctx.body = 'Not Found';\n          return _context3.abrupt(\"return\");\n        case 30:\n          console.log('Matched route:', matchedRoute);\n          if (!(matchedRoute.component && matchedRoute.component.getInitialProps)) {\n            _context3.next = 36;\n            break;\n          }\n          console.log('Fetching data for', matchedRoute, matchedRoute.component);\n          _context3.next = 35;\n          return matchedRoute.component.getInitialProps({\n            match: {\n              params: matchParams\n            }\n          });\n        case 35:\n          fetchResult = _context3.sent;\n        case 36:\n          context = {\n            initialData: fetchResult\n          };\n          console.log('Data fetched:', context);\n          html = ReactDOMServer.renderToString(/*#__PURE__*/React.createElement(StaticRouter, {\n            location: ctx.url,\n            context: context\n          }, /*#__PURE__*/React.createElement(App, null)));\n          console.log('Rendered HTML:', html);\n          ctx.body = \"\\n      <!DOCTYPE html>\\n      <html>\\n        <head>\\n          <title>React SSR with Koa</title>\\n          <style>\".concat(css, \"</style>\\n          <script defer src=\\\"/static/bundle.js\\\"></script>\\n          <script>\\n            window.__INITIAL_DATA__ = \").concat(JSON.stringify(fetchResult), \";\\n          </script>\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\">\").concat(html, \"</div>\\n        </body>\\n      </html>\\n      <script>\\n      window.__IS__SSR__=true;\\n      window._CILENT_FETCHED_=false;\\n      </script>\\n    \");\n          _context3.next = 48;\n          break;\n        case 43:\n          _context3.prev = 43;\n          _context3.t1 = _context3[\"catch\"](0);\n          console.error('Error during rendering:', _context3.t1);\n          ctx.status = 500;\n          ctx.body = 'Internal Server Error';\n        case 48:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3, null, [[0, 43], [7, 20, 23, 26]]);\n  }));\n  return function (_x3) {\n    return _ref3.apply(this, arguments);\n  };\n}());\napp.use(cors());\napp.use(router.routes()).use(router.allowedMethods());\napp.listen(3000, function () {\n  console.log('Server is running on http://localhost:3000');\n});\n\n//# sourceURL=webpack://react-koa-ssr/./server/index.js?");

/***/ }),

/***/ "./src/components/billboard/index.less":
/*!*********************************************!*\
  !*** ./src/components/billboard/index.less ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/components/billboard/index.less?");

/***/ }),

/***/ "./src/components/goodCard/index.less":
/*!********************************************!*\
  !*** ./src/components/goodCard/index.less ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/components/goodCard/index.less?");

/***/ }),

/***/ "./src/components/goodsList/index.less":
/*!*********************************************!*\
  !*** ./src/components/goodsList/index.less ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/components/goodsList/index.less?");

/***/ }),

/***/ "./src/components/header/index.less":
/*!******************************************!*\
  !*** ./src/components/header/index.less ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/components/header/index.less?");

/***/ }),

/***/ "./src/layout/index.less":
/*!*******************************!*\
  !*** ./src/layout/index.less ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/layout/index.less?");

/***/ }),

/***/ "./src/pages/GoodDetail/index.less":
/*!*****************************************!*\
  !*** ./src/pages/GoodDetail/index.less ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/pages/GoodDetail/index.less?");

/***/ }),

/***/ "./src/pages/Goods/index.less":
/*!************************************!*\
  !*** ./src/pages/Goods/index.less ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/pages/Goods/index.less?");

/***/ }),

/***/ "./src/pages/Home/index.less":
/*!***********************************!*\
  !*** ./src/pages/Home/index.less ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/pages/Home/index.less?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst Home_1 = __importDefault(__webpack_require__(/*! ./pages/Home */ \"./src/pages/Home/index.tsx\"));\nconst Goods_1 = __importDefault(__webpack_require__(/*! ./pages/Goods */ \"./src/pages/Goods/index.tsx\"));\nconst About_1 = __importDefault(__webpack_require__(/*! ./pages/About */ \"./src/pages/About/index.tsx\"));\nconst layout_1 = __importDefault(__webpack_require__(/*! ./layout */ \"./src/layout/index.tsx\"));\nconst GoodDetail_1 = __importDefault(__webpack_require__(/*! ./pages/GoodDetail */ \"./src/pages/GoodDetail/index.tsx\"));\nconst App = ({ staticContext, location, initialData }) => {\n    return (react_1.default.createElement(layout_1.default, null,\n        react_1.default.createElement(react_router_dom_1.Switch, null,\n            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: \"/\", component: Home_1.default }),\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/goods\", component: Goods_1.default }),\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/goodDetail/:id\", component: GoodDetail_1.default }),\n            react_1.default.createElement(react_router_dom_1.Route, { path: \"/about\", component: About_1.default }))));\n};\nexports[\"default\"] = App;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/App.tsx?");

/***/ }),

/***/ "./src/components/billboard/index.tsx":
/*!********************************************!*\
  !*** ./src/components/billboard/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./index.less */ \"./src/components/billboard/index.less\");\nconst Billboard = () => {\n    return (react_1.default.createElement(\"div\", { className: \"billBoard\" },\n        react_1.default.createElement(\"article\", { className: \"article\" },\n            react_1.default.createElement(\"div\", null, \"\\u8FD9\\u662F\\u4E00\\u4E2A\\u4E2A\\u4EBA\\u7F51\\u7AD9\\uFF0C\\u4E0B\\u9762\\u6570\\u636E\\u90FD\\u662FMOCK\\u7684\\uFF0C\\u65E0\\u4EFB\\u4F55\\u5546\\u4E1A\\u6027\\u8D28\\uFF01\\uFF01\\uFF01\"),\n            react_1.default.createElement(\"div\", null, \"React+koa2\\u5B9E\\u73B0SSR+CRS\\u540C\\u6784\"))));\n};\nexports[\"default\"] = Billboard;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/components/billboard/index.tsx?");

/***/ }),

/***/ "./src/components/goodCard/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/goodCard/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./index.less */ \"./src/components/goodCard/index.less\");\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nconst GoodCard = ({ info }) => {\n    const history = (0, react_router_1.useHistory)();\n    const handleClick = () => {\n        console.log(\"点击了商品\", info);\n        history.push(`/goodDetail/${info.id}`);\n    };\n    return (react_1.default.createElement(\"div\", { className: \"good_card\", onClick: handleClick },\n        react_1.default.createElement(\"div\", { className: \"shoe_img\" },\n            react_1.default.createElement(\"img\", { src: info.src })),\n        react_1.default.createElement(\"div\", { className: \"name\" }, info.name),\n        react_1.default.createElement(\"div\", { className: \"price\" },\n            \"\\uFFE5 \",\n            info.price)));\n};\nexports[\"default\"] = GoodCard;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/components/goodCard/index.tsx?");

/***/ }),

/***/ "./src/components/goodsList/index.tsx":
/*!********************************************!*\
  !*** ./src/components/goodsList/index.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./index.less */ \"./src/components/goodsList/index.less\");\nconst goodCard_1 = __importDefault(__webpack_require__(/*! ../goodCard */ \"./src/components/goodCard/index.tsx\"));\nconst GoodsList = ({ goods = [] }) => {\n    console.log(\"GoodsList====数据\", goods);\n    return (react_1.default.createElement(\"div\", { className: \"goodsPage\" },\n        react_1.default.createElement(\"article\", { className: \"shoes_container\" },\n            react_1.default.createElement(\"div\", { className: \"row\" }, (goods || []).map((item, index) => (react_1.default.createElement(\"div\", { key: index, className: \"col col-sm-6 col-md-4 col-lg-3\" },\n                react_1.default.createElement(goodCard_1.default, { info: item }))))))));\n};\nexports[\"default\"] = GoodsList;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/components/goodsList/index.tsx?");

/***/ }),

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n__webpack_require__(/*! ./index.less */ \"./src/components/header/index.less\");\nconst Header = () => {\n    const history = (0, react_router_dom_1.useHistory)();\n    return (react_1.default.createElement(\"header\", { className: \"header_warp\" },\n        react_1.default.createElement(\"nav\", { className: \"nav\" },\n            react_1.default.createElement(\"div\", { className: \"header_body\" },\n                react_1.default.createElement(\"div\", { className: \"nav_item\", onClick: () => {\n                        history.push(\"/\");\n                    } }, \"\\u9996\\u9875\"),\n                react_1.default.createElement(\"div\", { className: \"nav_item\", onClick: () => {\n                        history.push(\"/goods\");\n                    } }, \"\\u5546\\u57CE\"),\n                react_1.default.createElement(\"div\", { className: \"nav_item\", onClick: () => {\n                        history.push(\"/about\");\n                    } }, \"\\u5173\\u4E8E\")))));\n};\nexports[\"default\"] = Header;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/components/header/index.tsx?");

/***/ }),

/***/ "./src/hoc/withInitialProps.tsx":
/*!**************************************!*\
  !*** ./src/hoc/withInitialProps.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n// import React, { ComponentType, useEffect, useState } from \"react\";\n// import { useLocation, useParams } from \"react-router-dom\";\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// let _isPop = false; //是否触发过popState\n// let _isMount = false; //组件是否挂载完成\n// let _this: any = null;\n// const popStateCallback = () => {\n//   console.log(\"popStateFn\", _this);\n//   _isPop = true;\n//   // 使用 popStateCallback 保存函数防止 addEventListener 重复注册\n//   // if (_this && _this.default.getInitialProps) {\n//   //   console.log(\"popStateFn22\");\n//   //   _isPop = true;\n//   //   if (_isMount) {\n//   //     //只有当前组件挂载后才能执行数据预取，否则会报错\n//   //     _this.default.getInitialProps();\n//   //   }\n//   // }\n// };\n// const withInitialProps = (WrappedComponent: any) => {\n//   const WithInitialProps = (props: any) => {\n//     console.log(\"WrappedComponent====高阶组件进来了\");\n//     const [initialData, setInitialData] = useState(\n//       props.staticContext?.initialData || window.__INITIAL_DATA__ || null\n//     );\n//     const [cachedData, setCachedData] = useState({\n//       initialData: {},\n//       canClientFetch: false,\n//     });\n//     let _props = { ...props };\n//     let params: {} | null = null;\n//     let location = null;\n//     if (!__SERVER__) {\n//       console.log(\n//         \"WithInitialProps====客户端：\",\n//         props.staticContext,\n//         window.__INITIAL_DATA__\n//       );\n//       params = useParams();\n//       location = useLocation();\n//       if (cachedData.canClientFetch) {\n//         _props.initialData = cachedData.initialData || {};\n//       } else {\n//         _props.initialData = window.__INITIAL_DATA__ || {};\n//       }\n//     } else {\n//       console.log(\"WithInitialProps====服务端：\", props.staticContext);\n//       _props.initialData = props.staticContext || {};\n//     }\n//     useEffect(() => {\n//       _isMount = true; //组件挂载完成\n//       console.log(\"location 改变了\", location);\n//       if (window.__IS__SSR__) {\n//         //只有当启用 ssr 时\n//         console.log(\"this====\", this);\n//         _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件\n//         //注册事件\n//         window.addEventListener(\"popstate\", () => {\n//           //  if (_isPop) {\n//           //如果前进或者后退 则需要异步获取数据\n//           console.log(\"触发 内部 getInitialProps111\");\n//           getInitialProps();\n//           //  }\n//         });\n//         console.log(\"popstate 注册成功 _isPop===\", _isPop);\n//       }\n//       const canClientFetch = props.history && props.history.action === \"PUSH\"; //路由跳转的时候可以异步请求数据\n//       console.log(\"canClientFetch\", canClientFetch);\n//       if (canClientFetch || !window.__IS__SSR__) {\n//         console.log(\"触发 内部 getInitialProps222\");\n//         getInitialProps();\n//       }\n//       return () => {\n//         console.log(\"unmount\");\n//         _isPop = false; //重置为未触发\n//         _isMount = false; //重置为未挂载\n//         window.removeEventListener(\"popstate\", () => {\n//           getInitialProps();\n//         });\n//       };\n//     }, [location]);\n//     //用于封装处理\n//     async function getInitialProps() {\n//       console.log(\"WrappedComponent props\", props.staticContext, {\n//         match: { params },\n//       });\n//       const res = WrappedComponent.getInitialProps\n//         ? await WrappedComponent.getInitialProps({ match: { params } })\n//         : {};\n//       console.log(\"getInitialProps====\", res);\n//       setInitialData(res);\n//       setCachedData({\n//         initialData: res,\n//         canClientFetch: true,\n//       });\n//       window.__INITIAL_DATA__ = null;\n//       let { tdk } = res.page;\n//       if (tdk) {\n//         document.title = tdk.title;\n//       }\n//     }\n//     return <WrappedComponent {...props} initialData={initialData} />;\n//     // return <WrappedComponent {...props} initialData={[]} />;\n//   };\n//   // 将 getInitialPropsForServer 定义为静态方法\n//   WithInitialProps.getInitialProps = async function (ctx: any) {\n//     console.log(\"WithInitialProps.getInitialProps=====\", ctx);\n//     return WrappedComponent.getInitialProps\n//       ? await WrappedComponent.getInitialProps(ctx)\n//       : {};\n//   };\n//   return WithInitialProps;\n// };\n// export default withInitialProps;\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nlet _isPop = false; // 是否触发过 popState\nlet _isMount = false; // 组件是否挂载完成\nlet _this = null;\nconst popStateListener = (getInitialProps) => {\n    console.log(\"popStateListener==_isPop=\", _this);\n    if (!_isPop) {\n        console.log(\"触发 内部 getInitialProps111\");\n        getInitialProps();\n        _isPop = true;\n    }\n};\nconst withInitialProps = (WrappedComponent) => {\n    const WithInitialProps = (props) => {\n        var _a;\n        console.log(\"WrappedComponent====高阶组件进来了\");\n        const [initialData, setInitialData] = (0, react_1.useState)(((_a = props.staticContext) === null || _a === void 0 ? void 0 : _a.initialData) || window.__INITIAL_DATA__ || null);\n        const [cachedData, setCachedData] = (0, react_1.useState)({\n            initialData: {},\n            canClientFetch: false,\n        });\n        const popStateListenerRef = (0, react_1.useRef)(null); // 用于保存事件监听器的引用\n        let _props = Object.assign({}, props);\n        let params = null;\n        let location = null;\n        if (false) {}\n        else {\n            console.log(\"WithInitialProps====服务端：\", props.staticContext);\n            _props.initialData = props.staticContext || {};\n        }\n        (0, react_1.useEffect)(() => {\n            _isMount = true; // 组件挂载完成\n            console.log(\"location 改变了\", location, window.__IS__SSR__);\n            if (window.__IS__SSR__) {\n                // 只有当启用 SSR 时\n                // _this = this; // 修正_this指向，保证_this指向当前渲染的页面组件\n                // // 注册事件\n                // window.addEventListener(\"popstate\", () => {\n                //   const listener = () => popStateListener(getInitialProps);\n                //   window.addEventListener(\"popstate\", listener);\n                // });\n                getInitialProps();\n                if (_isPop) {\n                    //如果前进或者后退 则需要异步获取数据\n                    getInitialProps();\n                }\n            }\n            const canClientFetch = props.history && props.history.action === \"PUSH\"; // 路由跳转的时候可以异步请求数据\n            console.log(\"canClientFetch\", canClientFetch);\n            if (canClientFetch || !window.__IS__SSR__) {\n                console.log(\"触发 内部 getInitialProps222\");\n                getInitialProps();\n            }\n            return () => {\n                console.log(\"unmount\");\n                _isPop = false; // 重置为未触发\n                _isMount = false; // 重置为未挂载\n                // if (popStateListenerRef.current) {\n                //   window.removeEventListener(\"popstate\", popStateListenerRef.current);\n                //   popStateListenerRef.current = null;\n                // }\n            };\n        }, [location]);\n        // 用于封装处理\n        function getInitialProps() {\n            return __awaiter(this, void 0, void 0, function* () {\n                console.log(\"WrappedComponent props\", props.staticContext, {\n                    match: { params },\n                });\n                const res = WrappedComponent.getInitialProps\n                    ? yield WrappedComponent.getInitialProps({ match: { params } })\n                    : {};\n                console.log(\"getInitialProps====\", res);\n                setInitialData(res);\n                setCachedData({\n                    initialData: res,\n                    canClientFetch: true,\n                });\n                window.__INITIAL_DATA__ = null;\n                let { tdk } = res.page;\n                if (tdk) {\n                    document.title = tdk.title;\n                }\n            });\n        }\n        return react_1.default.createElement(WrappedComponent, Object.assign({}, props, { initialData: initialData }));\n    };\n    // 将 getInitialPropsForServer 定义为静态方法\n    WithInitialProps.getInitialProps = function (ctx) {\n        return __awaiter(this, void 0, void 0, function* () {\n            console.log(\"WithInitialProps.getInitialProps=====\", ctx);\n            return WrappedComponent.getInitialProps\n                ? yield WrappedComponent.getInitialProps(ctx)\n                : {};\n        });\n    };\n    console.log(\"WithInitialProps====\", WithInitialProps);\n    return WithInitialProps;\n};\nexports[\"default\"] = withInitialProps;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/hoc/withInitialProps.tsx?");

/***/ }),

/***/ "./src/layout/index.tsx":
/*!******************************!*\
  !*** ./src/layout/index.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst header_1 = __importDefault(__webpack_require__(/*! ../components/header */ \"./src/components/header/index.tsx\"));\n__webpack_require__(/*! ./index.less */ \"./src/layout/index.less\");\nconst Layout = ({ children }) => (react_1.default.createElement(\"div\", null,\n    react_1.default.createElement(header_1.default, null),\n    react_1.default.createElement(\"main\", { className: \"main_container\" }, children)));\nexports[\"default\"] = Layout;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/layout/index.tsx?");

/***/ }),

/***/ "./src/pages/About/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/About/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst About = () => (react_1.default.createElement(\"div\", null,\n    react_1.default.createElement(\"h1\", null, \"About Page\")));\nexports[\"default\"] = About;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/pages/About/index.tsx?");

/***/ }),

/***/ "./src/pages/GoodDetail/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/GoodDetail/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./index.less */ \"./src/pages/GoodDetail/index.less\");\nconst goods_1 = __webpack_require__(/*! ../../services/goods */ \"./src/services/goods.ts\");\nconst withInitialProps_1 = __importDefault(__webpack_require__(/*! ../../hoc/withInitialProps */ \"./src/hoc/withInitialProps.tsx\"));\nconst GoodDetailsPage = (props) => {\n    const { fetchData: info } = props.initialData || {};\n    return (react_1.default.createElement(\"div\", { className: \"details_warp\" },\n        react_1.default.createElement(\"div\", { className: \"name\" }, info === null || info === void 0 ? void 0 : info.name),\n        react_1.default.createElement(\"img\", { src: info === null || info === void 0 ? void 0 : info.src, alt: info === null || info === void 0 ? void 0 : info.name }),\n        react_1.default.createElement(\"div\", { className: \"price\" },\n            \"\\uFFE5\", info === null || info === void 0 ? void 0 :\n            info.price),\n        react_1.default.createElement(\"div\", { className: \"desc\" }, info === null || info === void 0 ? void 0 : info.desc)));\n};\n// 定义数据预取函数\nGoodDetailsPage.getInitialProps = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        console.log(\"这是Goods Detail页面的loader\");\n        // const { id } = ctx.match.params; // 获取动态路由参数\n        const res = yield (0, goods_1.apiGetGoodDetailData)(1);\n        return {\n            fetchData: res || {},\n            page: {\n                tdk: {\n                    title: `这是商品的详情页面`,\n                    keywords: \"koa-react-ssr\",\n                    description: `这是商品的详情页面描述`,\n                },\n            },\n        };\n    }\n    catch (e) {\n        console.log(\"fetchData error\", e);\n        return { goods: [] };\n    }\n});\nexports[\"default\"] = (0, withInitialProps_1.default)(GoodDetailsPage);\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/pages/GoodDetail/index.tsx?");

/***/ }),

/***/ "./src/pages/Goods/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/Goods/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./index.less */ \"./src/pages/Goods/index.less\");\nconst goods_1 = __webpack_require__(/*! ../../services/goods */ \"./src/services/goods.ts\");\nconst goodsList_1 = __importDefault(__webpack_require__(/*! ../../components/goodsList */ \"./src/components/goodsList/index.tsx\"));\nconst withInitialProps_1 = __importDefault(__webpack_require__(/*! ../../hoc/withInitialProps */ \"./src/hoc/withInitialProps.tsx\"));\nconst GoodsPage = (props) => {\n    const { fetchData } = props.initialData || {};\n    console.log(\"GoodsPage====\", props.initialData);\n    return react_1.default.createElement(goodsList_1.default, { goods: fetchData });\n};\n// 定义数据预取函数\nGoodsPage.getInitialProps = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        console.log(\"这是Goods页面的loader\");\n        const res = yield (0, goods_1.apiGetGoodsData)();\n        return {\n            fetchData: res || {},\n            page: {\n                tdk: {\n                    title: \"这是商品主页面\",\n                    keywords: \"koa-react-ssr\",\n                    description: \"koa-react-ssr\",\n                },\n            },\n        };\n    }\n    catch (e) {\n        console.log(\"fetchData error\", e);\n        return { goods: [] };\n    }\n});\nexports[\"default\"] = (0, withInitialProps_1.default)(GoodsPage);\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/pages/Goods/index.tsx?");

/***/ }),

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./index.less */ \"./src/pages/Home/index.less\");\nconst billboard_1 = __importDefault(__webpack_require__(/*! ../../components/billboard */ \"./src/components/billboard/index.tsx\"));\n// import GoodsPage, { loader as goodsLoader } from \"../Goods\";\nconst goodsList_1 = __importDefault(__webpack_require__(/*! ../../components/goodsList */ \"./src/components/goodsList/index.tsx\"));\nconst goods_1 = __webpack_require__(/*! ../../services/goods */ \"./src/services/goods.ts\");\nconst withInitialProps_1 = __importDefault(__webpack_require__(/*! ../../hoc/withInitialProps */ \"./src/hoc/withInitialProps.tsx\"));\nconst Home = (props) => {\n    const { fetchData } = props.initialData || {};\n    console.log(\"Home====进来了\", props.initialData);\n    return (react_1.default.createElement(\"div\", { className: \"home_container\" },\n        react_1.default.createElement(billboard_1.default, null),\n        react_1.default.createElement(goodsList_1.default, { goods: fetchData })));\n};\n// 定义数据预取函数\nHome.getInitialProps = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        console.log(\"这是Home页面的loader\");\n        const res = yield (0, goods_1.apiGetGoodsData)();\n        return {\n            fetchData: res || {},\n            page: {\n                tdk: {\n                    title: \"这是商品首页\",\n                    keywords: \"koa-react-ssr\",\n                    description: \"koa-react-ssr\",\n                },\n            },\n        };\n    }\n    catch (e) {\n        console.log(\"fetchData error\", e);\n        return { goods: [] };\n    }\n});\nexports[\"default\"] = (0, withInitialProps_1.default)(Home);\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/pages/Home/index.tsx?");

/***/ }),

/***/ "./src/routes.tsx":
/*!************************!*\
  !*** ./src/routes.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.borwserRoutes = void 0;\nconst About_1 = __importDefault(__webpack_require__(/*! ./pages/About */ \"./src/pages/About/index.tsx\"));\nconst Goods_1 = __importDefault(__webpack_require__(/*! ./pages/Goods */ \"./src/pages/Goods/index.tsx\"));\nconst Home_1 = __importDefault(__webpack_require__(/*! ./pages/Home */ \"./src/pages/Home/index.tsx\"));\nconst App_1 = __importDefault(__webpack_require__(/*! ./App */ \"./src/App.tsx\"));\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst GoodDetail_1 = __importDefault(__webpack_require__(/*! ./pages/GoodDetail */ \"./src/pages/GoodDetail/index.tsx\"));\nconst routes = [\n    {\n        path: \"/\",\n        component: Home_1.default,\n        // loader: homeLoader,\n    },\n    {\n        path: \"/goodDetail/:id\",\n        component: GoodDetail_1.default,\n        // loader: goodsLoader, // 确保 loader 属性正确引用 GoodsPage.loader 函数\n    },\n    {\n        path: \"/goods\",\n        component: Goods_1.default,\n        // loader: goodsLoader, // 确保 loader 属性正确引用 GoodsPage.loader 函数\n    },\n    {\n        path: \"/about\",\n        component: About_1.default,\n    },\n];\nexports.borwserRoutes = [\n    {\n        path: \"/\",\n        component: react_1.default.createElement(App_1.default, null),\n        children: routes,\n    },\n];\nexports[\"default\"] = routes;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/routes.tsx?");

/***/ }),

/***/ "./src/services/goods.ts":
/*!*******************************!*\
  !*** ./src/services/goods.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.apiGetGoodsData = apiGetGoodsData;\nexports.apiGetGoodDetailData = apiGetGoodDetailData;\nconst request_1 = __importDefault(__webpack_require__(/*! ./request */ \"./src/services/request.ts\"));\nfunction apiGetGoodsData() {\n    return request_1.default.post(`http://localhost:3000/api/goods/data/get`);\n    // return request.post(\n    //     `https://407e964d-277c-4675-9871-2e9f0c9d59f7.mock.pstmn.io/api/test/goods/get`\n    // );\n}\nfunction apiGetGoodDetailData(id) {\n    return request_1.default.post(`http://localhost:3000/api/goodDetail/${id}`);\n    // return request.post(\n    //     `https://407e964d-277c-4675-9871-2e9f0c9d59f7.mock.pstmn.io/api/test/goods/get`\n    // );\n}\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/services/goods.ts?");

/***/ }),

/***/ "./src/services/request.ts":
/*!*********************************!*\
  !*** ./src/services/request.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst events = {};\nfunction request(url, options) {\n    const headers = Object.assign({}, (options.headers || {}));\n    options = Object.assign(Object.assign({}, options), { headers });\n    return fetch(url, options).then((response) => {\n        if (response.status === 403) {\n            return request.error(\"暂无权限进行此操作\");\n        }\n        // 业务数据正常返回\n        return response.json().then((res) => {\n            // 业务逻辑 -1 -2\n            if (res.code !== 200) {\n                if (res.code === 2) {\n                    return request.error(res);\n                }\n                request.trigger(`${res.code}`, res);\n                return request.error(res);\n            }\n            return res.result;\n        }, (err) => {\n            request.trigger(\"DATA-ERROR\");\n            return request.error(err);\n        });\n    }, (err) => {\n        if (err && err.status && err.status === 500) {\n            request.trigger(\"SERVER-ERROR\");\n        }\n        else {\n            request.trigger(\"FETCH-ERROR\");\n            request.error(err);\n        }\n    });\n}\nrequest.error = (err) => {\n    throw err;\n};\nrequest.defaults = {\n    headers: {\n        \"Content-Type\": \"application/json;charset=UTF-8\",\n    },\n};\nrequest.pathDefaults = {\n    headers: {\n        \"Content-Type\": \"application/json;charset=UTF-8\",\n    },\n};\nrequest.get = (url, options) => {\n    options = options || {};\n    options.method = \"GET\";\n    options = Object.assign({}, options && options.ignoreServiceName\n        ? request.pathDefaults\n        : request.defaults, options);\n    return request(url, options);\n};\nrequest.post = (url, data, options) => {\n    options = options || {};\n    options.body = JSON.stringify(data || {});\n    options.method = \"POST\";\n    options = Object.assign({}, options && options.ignoreServiceName\n        ? request.pathDefaults\n        : request.defaults, options);\n    return request(url, options);\n};\nrequest.put = (url, data, options) => {\n    options = options || {};\n    options.body = JSON.stringify(data || {});\n    options.method = \"PUT\";\n    options = Object.assign({}, options && options.ignoreServiceName\n        ? request.pathDefaults\n        : request.defaults, options);\n    return request(url, options);\n};\nrequest.patch = (url, data, options) => {\n    options = options || {};\n    options.body = JSON.stringify(data || {});\n    options.method = \"PATCH\";\n    options = Object.assign({}, options && options.ignoreServiceName\n        ? request.pathDefaults\n        : request.defaults, options);\n    return request(url, options);\n};\nrequest.delete = (url, options) => {\n    options = options || {};\n    options.method = \"DELETE\";\n    options = Object.assign({}, options && options.ignoreServiceName\n        ? request.pathDefaults\n        : request.defaults, options);\n    return request(url, options);\n};\nrequest.on = (name, handler) => {\n    if (!events[name])\n        events[name] = [];\n    events[name].push(handler);\n};\nrequest.defaultHandles = [\n    (err) => {\n        console.error(\"请求异常，请检查\", err); // these error ignores\n    },\n];\nrequest.trigger = (name, data) => {\n    const handlers = events[name] || request.defaultHandles;\n    if (handlers) {\n        handlers.forEach((handler) => handler(data));\n    }\n};\nrequest.getExpandObjParams = (obj) => {\n    obj = obj || {};\n    return `?${Object.keys(obj)\n        .map((key) => {\n        return [key, obj[key]].join(\"=\");\n    })\n        .join(\"&\")}`;\n};\nexports[\"default\"] = request;\n\n\n//# sourceURL=webpack://react-koa-ssr/./src/services/request.ts?");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/cors");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-mount":
/*!****************************!*\
  !*** external "koa-mount" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-mount");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
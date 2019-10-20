// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"stack-object.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Stack =
/*#__PURE__*/
function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.count = 0;
    this.item = {};
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(element) {
      this.item[this.count] = element;
      this.count += 1;
    }
  }, {
    key: "size",
    value: function size() {
      return this.count;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count === 0;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        return undefined;
      } else {
        var result = this.item[this.count - 1];
        delete this.item[this.count - 1];
        this.count -= 1;
        return result;
      }
    }
  }, {
    key: "peak",
    value: function peak() {
      if (this.count === 0) {
        return undefined;
      } else {
        return this.item[this.count - 1];
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      while (!this.isEmpty()) {
        this.pop();
      }
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.isEmpty()) {
        return '';
      }

      var array = [];

      for (var _i = 0; _i < this.count; _i++) {
        array.push(this.item[_i]);
      }

      return array.toString();
    }
  }]);

  return Stack;
}(); //10进制转化为2进制


function decimalToBinary(decNumber) {
  var remStack = new Stack();
  var number = decNumber;
  var rem;
  var obj = '';

  if (number === 0) {
    return 0;
  }

  while (number !== 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    obj += remStack.pop();
  }

  return obj;
} //10进制转化为任意进制


function baseConverter(decNumber, base) {
  var remStack = new Stack();
  var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = decNumber;
  var rem;
  var obj = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  if (decNumber === 0) {
    return 0;
  }

  while (number !== 0) {
    var _rem = Math.floor(number % base);

    remStack.push(_rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    obj += digits[remStack.pop()];
  }

  return obj;
} //2进制转换为10进制


function binaryToDecimal(BinNumber) {
  var string = String(BinNumber);
  var array = Array.from(string);
  var number = 0;

  for (i = 0; i < array.length; i++) {
    number += array[i] * Math.pow(2, i);
  }

  return number;
} //任意进制转换为10进制


function toDecimal(string, base) {
  if (!(base >= 2 && base <= 36)) {
    alert('只能转换2-36进制');
  }

  var array = Array.from(string.split(''));
  var result = 0;
  var newArray = array.map(function (item) {
    var hash = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      G: 16,
      H: 17,
      I: 18,
      J: 19,
      K: 20,
      L: 21,
      M: 22,
      N: 23,
      O: 24,
      P: 25,
      Q: 26,
      R: 27,
      S: 28,
      T: 29,
      U: 30,
      V: 31,
      W: 32,
      X: 33,
      Y: 34,
      Z: 35
    };
    return item = hash[item];
  });
  var judge = true;

  for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > base - 1) {
      judge = false;
      alert('输入的数字错误');
    }
  }

  if (judge) {
    for (i = 0; i < array.length; i++) {
      result += newArray[i] * Math.pow(base, i);
    }
  }

  return result;
} //任意进制的转换


function casualBaseConverter(fromBase, string, toBase) {
  if (!((fromBase || toBase) >= 2 && (fromBase || toBase) <= 36)) {
    alert('只能转换2-36进制');
  }

  var array = Array.from(string.split('')).reverse();
  var decNumber = 0;
  var result;
  var newArray = array.map(function (item) {
    var hash = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      G: 16,
      H: 17,
      I: 18,
      J: 19,
      K: 20,
      L: 21,
      M: 22,
      N: 23,
      O: 24,
      P: 25,
      Q: 26,
      R: 27,
      S: 28,
      T: 29,
      U: 30,
      V: 31,
      W: 32,
      X: 33,
      Y: 34,
      Z: 35
    };
    return item = hash[item];
  });
  var judge = true;

  for (i = 0; i < newArray.length; i++) {
    if (newArray[i] > fromBase - 1) {
      judge = false;
      alert('输入的数字错误');
    }
  }

  if (judge) {
    for (i = 0; i < newArray.length; i++) {
      decNumber += newArray[i] * Math.pow(fromBase, i);
    }

    result = decNumber;
  }

  var remStack = new Stack();
  var digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var rem;
  var obj = '';

  if (result === 0) {
    return 0;
  }

  while (result !== 0) {
    rem = Math.floor(result % toBase);
    remStack.push(rem);
    result = Math.floor(result / toBase);
  }

  while (!remStack.isEmpty()) {
    obj += digits[remStack.pop()];
  }

  return obj;
}
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50310" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","stack-object.js"], null)
//# sourceMappingURL=/stack-object.8104271c.js.map
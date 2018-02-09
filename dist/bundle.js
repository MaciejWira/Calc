/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var num = _dom2.default._qAll(".number"),
    op = _dom2.default._qAll(".operation"),
    numA = [],
    opA = [];

for (var i = 0; i < num.length; i++) {
  numA.push(num[i]);
}

for (var _i = 0; _i < op.length; _i++) {
  opA.push(op[_i]);
}

var cons = {
  history: _dom2.default._id("history-output"),
  out: _dom2.default._id("main-output"),
  operator: _dom2.default._id("operator"),
  in: _dom2.default._id("input"),
  num: numA,
  op: opA,
  res: _dom2.default._id("result"),
  pre: _dom2.default._id("preloader"),
  alert: _dom2.default._id("alert-box")
};

exports.default = cons;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dom = {
  _id: function _id(id) {
    return document.getElementById(id);
  },
  _q: function _q(el) {
    return document.querySelector(el);
  },
  _qAll: function _qAll(el) {
    return document.querySelectorAll(el);
  }
};

exports.default = dom;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = __webpack_require__(0);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFixed = function toFixed() {
  if (_const2.default.out.innerHTML.length >= 8) {
    _const2.default.out.innerHTML = Number(_const2.default.out.innerHTML).toFixed(11);
  }
};

exports.default = toFixed;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function fadeOut(element) {
  element.style.opacity = 0;
  setTimeout(function () {
    element.style.display = "none";
  }, 1000);
};

exports.default = fadeOut;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _const = __webpack_require__(0);

var _const2 = _interopRequireDefault(_const);

var _zz_output = __webpack_require__(5);

var _zz_output2 = _interopRequireDefault(_zz_output);

var _toFixed = __webpack_require__(2);

var _toFixed2 = _interopRequireDefault(_toFixed);

var _z_preloader = __webpack_require__(8);

var _z_preloader2 = _interopRequireDefault(_z_preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _z_preloader2.default)();
(0, _zz_output2.default)();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _const = __webpack_require__(0);

var _const2 = _interopRequireDefault(_const);

var _action = __webpack_require__(6);

var _action2 = _interopRequireDefault(_action);

var _toFixed = __webpack_require__(2);

var _toFixed2 = _interopRequireDefault(_toFixed);

var _showAlert = __webpack_require__(7);

var _showAlert2 = _interopRequireDefault(_showAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var output = function output() {

  var switcher = false,
      zeroDivide = false,
      result = 0,
      waitingOperator = "",
      actualOperator = "",
      historyClear = false;

  function drawInput() {
    zeroDivide = false;
    if (historyClear) _const2.default.out.innerHTML = "0";
    clearHistory();
    if (_const2.default.in.innerHTML == "0") _const2.default.in.innerHTML = this.value;else _const2.default.in.innerHTML += this.value;
    switcher = false;
  }

  function drawOperator() {
    zeroDivide = false;
    clearHistory();
    if (switcher) {
      // zmiana znaku
      _const2.default.operator.innerHTML = this.value;
    } else {
      doMath();
      if (!zeroDivide) {
        drawCalc();
        _const2.default.operator.innerHTML = this.value;
        if (zeroDivide) {
          zeroDivide = false;
          _const2.default.operator.innerHTML = "/";
        }
      };
      switcher = true;
    };
    (0, _toFixed2.default)();
  }

  function doMath() {
    var operator = _const2.default.operator.innerHTML;
    if (operator == "") result = _const2.default.in.innerHTML;else if (operator == "/" && _const2.default.in.innerHTML == "0") {
      (0, _showAlert2.default)();
      zeroDivide = true;
    } else {
      result = waitingAction(Number(_const2.default.out.innerHTML), Number(_const2.default.in.innerHTML));
    };
  }

  function drawCalc() {
    drawHistory();
    _const2.default.in.innerHTML = "0";
    _const2.default.out.innerHTML = result;
  };

  function drawHistory() {
    if (zeroDivide) {
      zeroDivide = false;
    };
    if (!switcher) {
      if (_const2.default.history.innerHTML == "0") _const2.default.history.innerHTML = result;else _const2.default.history.innerHTML += " " + _const2.default.operator.innerHTML + " " + _const2.default.in.innerHTML;
    };
    if (historyClear) _const2.default.history.innerHTML += " =";
  }

  var showResult = function showResult() {
    if (!historyClear) {
      doMath();
      if (!zeroDivide) {
        historyClear = true;
        drawHistory();
        _const2.default.in.innerHTML = "0";
        _const2.default.operator.innerHTML = "";
        _const2.default.out.innerHTML = result;
      } else {
        zeroDivide = false;
        switcher = true;
      }
    };
    (0, _toFixed2.default)();
  };

  var clearHistory = function clearHistory() {
    if (historyClear) {
      historyClear = false;
      _const2.default.history.innerHTML = _const2.default.out.innerHTML;
      switcher = true;
    };
  };

  // wprowadzanie liczb

  _const2.default.num.forEach(function (number) {
    number.addEventListener("click", drawInput);
  });

  // wprowadzanie operatora

  _const2.default.op.forEach(function (operation) {
    operation.addEventListener("click", drawOperator);
  });

  // obliczenia w tle

  var waitingAction = function waitingAction(a, b) {
    if (_const2.default.operator.innerHTML == "+") return _action2.default.add(a, b);
    if (_const2.default.operator.innerHTML == "-") return _action2.default.subtract(a, b);
    if (_const2.default.operator.innerHTML == "x") return _action2.default.multiply(a, b);
    if (_const2.default.operator.innerHTML == "/") return _action2.default.divide(a, b);
  };

  // znak =

  _const2.default.res.addEventListener("click", showResult);

  // resetowanie kalkulatora

  _dom2.default._id("clear").addEventListener("click", function () {
    _const2.default.in.innerHTML = "0";
    switcher = true;
    zeroDivide = true;
  });

  _dom2.default._id("reset").addEventListener("click", function () {
    clearHistory();
    _const2.default.in.innerHTML = "0";
    _const2.default.out.innerHTML = "0";
    _const2.default.history.innerHTML = "0";
    _const2.default.operator.innerHTML = "";
    result = 0;
    switcher = true;
    zeroDivide = true;
  });
};

exports.default = output;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _const = __webpack_require__(0);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var action = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
  divide: function divide(a, b) {
    return a / b;
  }
};

exports.default = action;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = __webpack_require__(0);

var _const2 = _interopRequireDefault(_const);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _fadeOut = __webpack_require__(3);

var _fadeOut2 = _interopRequireDefault(_fadeOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showAlert = function showAlert() {
  _const2.default.alert.style.display = "block";
  setTimeout(function () {
    _const2.default.alert.style.opacity = 1;
  }, 10);

  _const2.default.alert.addEventListener("click", function () {
    (0, _fadeOut2.default)(_const2.default.alert);
  });
};

exports.default = showAlert;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = __webpack_require__(0);

var _const2 = _interopRequireDefault(_const);

var _fadeOut = __webpack_require__(3);

var _fadeOut2 = _interopRequireDefault(_fadeOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preloader = function preloader() {

  window.onload = function () {
    setTimeout(function () {
      (0, _fadeOut2.default)(_const2.default.pre);
    }, 500);
  };
};

exports.default = preloader;

/***/ })
/******/ ]);
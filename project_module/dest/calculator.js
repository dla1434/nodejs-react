"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.mul = mul;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//function 앞에 export를 붙여주면 된다.
function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

//class에서도 function가 동일하게 export를 붙여주면 된다.

var Test = exports.Test = function Test() {
  _classCallCheck(this, Test);
};

//const도 function가 동일하게 export를 붙여주면 된다.


var test = exports.test = 10;
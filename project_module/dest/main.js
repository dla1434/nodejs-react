'use strict';

var _calculator = require('./calculator.js');

var cal = _interopRequireWildcard(_calculator);

var _gobsem = require('./gobsem.js');

var _gobsem2 = _interopRequireDefault(_gobsem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import { add, mul, test } from './calculator.js'
// console.log(add(10, 100))
// console.log(mul(10, 100))

// import { add as a, mul as m, test as t } from './calculator.js'
// console.log(a(10, 100))
// console.log(mul(10, 100))

console.log(cal.add(10, 100));
console.log(cal.mul(10, 100));
console.log((0, _gobsem2.default)(1, 2));
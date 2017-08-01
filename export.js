/**
 * http://usejsdoc.org/
 */
// 모듈 추출
var module = require('./circle.js');

console.log('abs(-123) = %d',module.abs(-123));
console.log('circleArea(3) = %d',module.circleArea(3));
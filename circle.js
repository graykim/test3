/**
 * http://usejsdoc.org/
 */
// 절대값 구하는 모듈
exports.abs = function(number){
	if(0<number){
		return number;
	}else{
		return -number;
	}
}
// 원의 넓기 구하는 모듈
exports.circleArea = function(radius){
	return radius * radius * Math.PI;
}
console.time('alpha');//타이머 측정 시작

var output = 1;
for (var i = 0; i < 1000; i++) {
	output += 1;
}
console.log('result : ',output);
console.timeEnd('alpha'); //타이머 측정 종료
console.warn("이것은 경고 메세지 입니다.");
console.assert(false, 'this message will print, but no error thrown');
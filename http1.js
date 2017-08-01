// http 모듈 가져오기
var http = require('http');

// 서버를 생성
var server = http.createServer();

// 서버를 실행
var port = 3000;
server.listen(port, function(){
	console.log('웹 서버가 시작되었습니다 :  %d ',port);
});
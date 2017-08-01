// http 모듈 가져오기
var http = require('http');
var fs = require('fs');
// jpg, jpeg  => 'image/jpeg'
// mp3 => 'audio/mp3'
// 서버를 생성하고 실행
http.createServer(function(request, response){
	fs.readFile('example1.html', function(err, data) {
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end(data);
	});
}).listen(3000,function(){
	console.log('웹 서버가 실행되었습니다.');
});

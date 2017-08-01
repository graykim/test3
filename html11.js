/**
 * http://usejsdoc.org/
 */
var http = require('http');

http.createServer(function(req,res){
	if(req.method == 'GET'){
		console.log('GET 요청입니다.');
	}else if(req.method == 'POST'){
		console.log('POST 요청입니다.');
	}
}).listen(3000, function(){
	console.log('서버 실행');
});
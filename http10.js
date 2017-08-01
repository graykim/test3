var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
	//req에서 url을 받아와서 변수로 선언
	var pathname = url.parse(req.url).pathname;
	
	console.log(pathname);
	//경로에 따른 페이지 이동 처리
	if(pathname == '/'){
		fs.readFile('doa.html', function(err, data) {
			res.writeHead(200, {'Context-Type' : 'text/html'});
			res.end(data);
		});
	}else if(pathname == '/other/'){
		fs.readFile('dob.html', function(err, data) {
			res.writeHead(200, {'Context-Type' : 'text/html'});
			res.end(data);
		});
	}
}).listen(3000, function(){
	console.log('서비스 시작');
});











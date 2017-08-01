var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	if(pathname=='/' && req.method=='GET'){
		fs.readFile('form1.html', function(err, data) {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end(data);
		});
	}else if(pathname=='/result/' && req.method=='POST'){
		req.on('data', function(data) {
			res.writeHead(200, {'Content-Type' : 'text/html'});
			res.end('<h1>'+data+'</h1>');
		});
	}
}).listen(3000, function(){
	console.log('서버 실행');
});







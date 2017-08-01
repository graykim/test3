/**
 * http://usejsdoc.org/
 */
var http = require('http');
//웹서버 구성
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html'});
  response.end('<h1>hello</h1>');
}).listen(1337, '127.0.0.1');//웹 서버 실행
console.log('서버 실행 : http://127.0.0.1:1337/');
/**
 * http://usejsdoc.org/
 */
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(404, {'Location':'http://www.google.com'});
	res.end();
}).listen(3000, function(){
	console.log('서버 실행');
});
var http = require('http');

http.createServer(function(req,res){
	//날짜에 대한 변수 선언
	var date = new Date();
	date.setDate(date.getDate()+7);
	/*
	 * Cookie 속성
	 * - Name = 이름 값
	 * - Expires = 소멸 날짜
	 * - Domain = 사이트 도메인
	 * - Path = 경로
	 * - Secure = 쿠키에 대한 보안
	 * 
	 * */
	//쿠키를 입력
	res.writeHead(200,
			{'Content-Type':'text/html',
			'Set-Cookie':[
				'breakfast = toast;Expires = '
				+date.toUTCString(),
				'dinner=chicken']});
	res.end('<h1>'+req.headers.cookie+'</h1>');
	console.log(req.headers.cookie);
}).listen(3000, function(){
	console.log('서버 스타트');
});






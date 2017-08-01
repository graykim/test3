var fs = require('fs');

fs.open('./TextFileOther.txt', 'r', 
		function(err, fd){
	if(err)throw err;
	
	//데이터를 담는 객체
	var buf = new Buffer(10);
	
	fs.read(fd, buf, 0, buf.length, null,
			function(err,byteRead,buffer){
		if(err)throw err;
		
		console.log(err,byteRead,buffer);
		
		var inStr = buffer.toString(
				'utf-8',0,byteRead);
		console.log('파일에서 읽은 데이터 : %s ',inStr)
		
		fs.close(fd, function(){
			console.log("파일 닫기.")
		});
	});
});





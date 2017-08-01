var fs = require('fs');

fs.readFile('textFile.txt','utf-8' ,
		function(err, data) {
	console.log(data);
});

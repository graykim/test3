var fs = require('fs');

var data = 'Hello world';

fs.writeFile('TextFileOther.txt', data, 'utf-8',
		function(error){
	console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherSync.txt', data,
		'utf-8');
console.log('WRITE FILE SYNC COMPLETE');

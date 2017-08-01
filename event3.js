process.on('exit',function(data){
	console.log('바이바이');
});

process.exit();

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중');

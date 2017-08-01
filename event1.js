//process.setMaxListeners(3);

process.on('exit',function(code){
	console.log('바이바이1');
});

process.on('exit',function(code){
	console.log('바이바이2');
});

process.on('exit',function(code){
	console.log('바이바이3');
});

process.on('exit',function(code){
	console.log('바이바이4');
});

process.on('exit',function(code){
	console.log('바이바이5');
});

/*process.on('uncaughtException',function(error){
	console.log("에러가 발생")
});*/

var onUncaughtException = function(error){
	console.log("에러 발생..!");
	process.removeListener('uncaughtException', 
			onUncaughtException);
};

process.on('uncaughtException',onUncaughtException);


var count = 0;
var test = function(){
	count = count + 1;
	if(count >3){return;}
	console.log(count);
	setTimeout(test, 2000);
	error.error.error();
};
setTimeout(test,2000);

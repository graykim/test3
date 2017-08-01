process.once('uncaughtException', function (error){
	console.log('예외발생!');
});

var test = function(){
	setTimeout(test, 2000);
	error.error.error();
};
setTimeout(test, 2000);
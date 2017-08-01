var event = require('events');
var custom = new event.EventEmitter();

custom.on('tick',function(){
	console.log('이벤트 실행');
});

custom.emit('tick');

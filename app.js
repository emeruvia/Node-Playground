
const EventEmitter = require('events');
//This is an object
const emitter = new EventEmitter();

emitter.on('messageLogged', function() {
    console.log('Listener called');
});

emitter.emit('messageLogged');

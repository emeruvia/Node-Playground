
const EventEmitter = require('events');
//This is an object
const emitter = new EventEmitter();

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

emitter.emit('messageLogged', {id: 1, url: 'http://'});

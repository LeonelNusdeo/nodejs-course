const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// Primero tengo que CREAR el evento
customEmitter.on('response', (data) => {
	console.log('received');
	console.log(data);
})

// Despues puedo EMITIR el evento
customEmitter.emit('response', 'Hello world');
customEmitter.emit('response', 'prueba');
customEmitter.emit('response', 30);
customEmitter.emit('response', [1, 2, 3]);
customEmitter.emit('response', {name: 'Ryan'});

// Multiple data
customEmitter.on('x', (data, secondData) => {
	console.log('received');
	console.log(data);
	console.log(secondData);
})

customEmitter.emit('x', 'Hello world', [1, 2, 3]);
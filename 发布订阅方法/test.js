const EventEmitter = require('./index');

const emitter = new EventEmitter();

const onceFn = (arg) => {
    console.log('onceFn', arg);
}; 

const onFn = (arg) => {
    console.log('onFn', arg);
};

const offFn = (arg) => {
    console.log('offFn', arg);
};

emitter.on('test', onFn);

emitter.on('test', offFn);

emitter.once('test', onceFn);

emitter.trigger('test', 'trigger1');

emitter.trigger('test', 'trigger2');

emitter.off('test', offFn);

emitter.trigger('test', 'trigger3');

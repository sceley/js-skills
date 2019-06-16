# 发布订阅方法

## 构造函数

```js
class EventEmitter {
    constructor () {
        this.subs = {};
    }

    on (eventName, cb) {
        if (!this.subs[eventName]) {
            this.subs[eventName] = [];
        }
        this.subs[eventName].push(cb);
    }

    trigger (eventName, ...args) {
        if (this.subs[eventName]) {
            this.subs[eventName].forEach(cb => {
                // cb.apply(null, args);
                cb(...args);
            });
        }
    }

    once (eventName, onceCb) {
        const cb = (...args) => {
            onceCb(...args);
            this.off(eventName, cb);
        }
        this.on(eventName, cb);
    }

    off (eventName, offCb) {
        if (this.subs[eventName]) {
            this.subs[eventName] = this.subs[eventName].filter(cb => {
                return cb !== offCb;
            });
            if (this.subs[eventName].length === 0) {
                delete this.subs[eventName];
            }
        }
    }
};
```

通过 on 方法注册事件，trigger 方法触发事件，once 方法注册只触发一次的事件，off 方法注销事件

## 测试

### 测试过层

```js
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

```

### 测试结果

```
onFn trigger1
offFn trigger1
onceFn trigger1
onFn trigger2
offFn trigger2
onFn trigger3
```
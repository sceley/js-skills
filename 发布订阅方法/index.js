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

module.exports = EventEmitter;
const SelfInstanceof = require('./index');

class Person {
    constructor (name) {
        this.name = name;
    }
};

let person = new Person('sceley');

console.log(SelfInstanceof(person, Object));
console.log(SelfInstanceof(person, Array));
console.log(SelfInstanceof(person, Person));
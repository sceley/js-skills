# 写一个instanceof方法

## SelfInstanceof方法

```js
const SelfInstanceof = function (left, right) {
    // 获得类型的原型
    let prototype = left.__proto__;
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (prototype === null)
    		return false
    	if (prototype === right.prototype)
    		return true
    	left = left.__proto__
    }
};
```

原理是递归遍历 left 参数的原型链，每次和 right 参数的原型作比较，遍历到原型链终点时则返回 false，找到则返回 true

## SelfInstanceof测试过程

```js
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
```

## SelfIntanceof测试结果

```
true
false
true
```
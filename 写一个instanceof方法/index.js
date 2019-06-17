const SelfInstanceof = function (left, right) {
    // 获得类型实例的原型
    // let proto = left.__proto__;
    let proto = Object.getPrototypeOf(left);
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (proto === null)
    		return false
    	if (proto === right.prototype)
            return true
        // proto = prototype.__proto__
        proto = Object.getPrototypeOf(proto);
    }
};

module.exports = SelfInstanceof;
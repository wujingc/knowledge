// var A = function() {};
// A.prototype.n = 1;
// var b = new A();
// // A.prototype.m = 3 如果是这样写，b.m的答案就是3
// A.prototype = {
//   n: 2,
//   m: 3
// }
// var c = new A();

// console.log(b.n); // 1
// console.log(b.m); // 3 答案 undefined

// console.log(c.n); // 2
// console.log(c.m); // 3


// 为这个新的对象开辟一块属于它的内存空间
// 把函数体内的 this 指到 1 中开辟的内存空间去
// 将新对象的 _ proto_ 这个属性指向对应构造函数的 prototype 属性，把实例和原型对象关联起来
// 执行函数体内的逻辑，最后即便你没有手动 return，构造函数也会帮你把创建的这个新对象 return 出来

// function A() {
//   this.name = 'a'
//   this.color = ['green', 'yellow']
// }
// function B() {
 
// }
// B.prototype = new A()
// var b1 = new B()
// var b2 = new B()
// var c = new A()

// b1.name = 'change'
// b1.color.push('black')

// console.log(b2.name) // 'a'
// console.log(b2.color) // ["green", "yellow", "black"]  注意引用类型，push和赋值结果是不一样的


function A() {}
function B(a) {
    this.a = a;
}
function C(a) {
    if (a) {
        this.a = a;
    }
}
A.prototype.a = 1;
B.prototype.a = 1;
C.prototype.a = 1;

console.log(new A().a); // 1
console.log(new B().a); // undefined
console.log(new C(2).a); // 2
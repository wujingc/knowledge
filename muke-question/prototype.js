// function Dog() {
//   this.name = 'puppy'
// }
// Dog.prototype.bark = () => {
//   console.log('woof!woof!')
// }
// const dog = new Dog()
// console.log(dog.__proto__)
// console.log(Dog.prototype)
// dog.prototype.bark() // undefined 普通对象没有prototype

// function Dog() {
//   this.name = 'puppy'
// }
// Dog.prototype.bark = () => {
//   console.log('woof!woof!')
// }

// const dog = new Dog()
// console.log(Dog.prototype.constructor === Dog && dog.constructor === Dog && dog instanceof Dog) // true dog.constructor回去实例的原型上找
// constructor和instanceof 的作用是不同的，感性地来说，constructor的限制比较严格，它只能严格对比对象的构造函数是不是指定的值；而instanceof比较松散，只要检测的类型在原型链上，就会返回true

// 差一个原型继承的问题
// instanceof 是通过原型链判断的，A instanceof B, 在A的原型链中层层查找，是否有原型等于B.prototype, B是构造函数
function Dog() {
  this.name = 'puppy'
}
Dog.prototype.bark = () => {
  console.log('woof!woof!')
}
function BigDog() {}
BigDog.prototype = new Dog()
const bigDog = new BigDog()
console.log(bigDog.constructor === BigDog) // true
// 答案 false
// 因为bigDog的原型是Dog的实例，所以访问bigDog.constructor时实际访问的是Dog.prototype.constructor，也就是Dog。所以 bigDog.constructor === Dog，这样才会打印出true。
console.log(bigDog instanceof BigDog) // true 都是一条原型链上的
console.log(bigDog instanceof Dog) // true

// Object.prototype.toString.call 可以做所有的类型判断
// 使用 typeof，这个方法可以检测出 number、string、boolean、undefined 和 function 的类型，但是当被检测的值为数组、对象或者 null 类型时，结果均为 object，无法准确判断它们的类型

// 6. 原型链的终点是什么？如何打印出原型链的终点？
// 由于Object是构造函数
// 原型链终点是Object.prototype.__proto__，而
// Object.prototype.__proto__=== null // true

// 所以，原型链的终点是null


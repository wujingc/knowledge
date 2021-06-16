function printThis() {
  return this;
}
console.log(printThis() === window) // 严格模式下，打印false；非严格模式下，打印true。

function printThis1() {
  return this;
}
const obj = {printThis1}
console.log(obj.printThis1() === window) // false 返回的是obj

// function Dog() {
//   this.name = 'Puppy'
// }
// const dog = Dog()
// console.log(dog.name) // 报错，Uncaught TypeError: Cannot read property 'name' of undefined

// function Dog() {
//   this.name = 'Puppy'
// }
// const dog = new Dog()
// console.log(dog.name) // Puppy

const puppet = {
  rules: false,
  aa: 1223
};
function Emperor() {
  this.rules = true;
  return puppet;
}
const emperor = new Emperor();
console.log(emperor.rules) // false
console.log(emperor) // false

// 虽然当函数被当作构造函数调用时，this关键字指向使用构造函数构建的实例。但是Emperor构造函数最后返回了一个puppet对象，如果构造函数有返回值且返回值为一个对象，此构造函数构造的实例就是这个返回值。return 之后proto会只想Object，而不是那个构造函数

function Button() {
  this.clicked = false;
  this.click = function () {
    this.clicked = true; // 这个this指向的是document
    console.log(button.clicked, 'clicked');
  };
}
const button = new Button();
document.addEventListener("click", button.click) // false
// 如果需要输出true，使用箭头函数即可
// 或者 document.addEventListener("click", button.click.bind(button))

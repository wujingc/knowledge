const arr = [{name: '吴XX', age: 18}, {name: '刘XX', age: 20}, {name: '吴XX', age: 22}]
const age = (arr.find(item => item.name === '吴XX') || {}).age

const age1 = arr.reduce((total, item, index) => {
  return item.name === '吴XX' ? item.age : total
}, '')
console.log(11, age)
console.log(22, age1)

// // 发布订阅模式
// class EventEmitter {
//   constructor() {
//     // handlers是一个map，用于存储事件与回调之间的对应关系
//     this.handlers = {}
//   }

//   // on方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
//   on(eventName, cb) {
//     // 先检查一下目标事件名有没有对应的监听函数队列
//     if (!this.handlers[eventName]) {
//       // 如果没有，那么首先初始化一个监听函数队列
//       this.handlers[eventName] = []
//     }

//     // 把回调函数推入目标事件的监听函数队列里去
//     this.handlers[eventName].push(cb)
//   }

//   // emit方法用于触发目标事件，它接受事件名和监听函数入参作为参数
//   emit(eventName, ...args) {
//     // 检查目标事件是否有监听函数队列
//     if (this.handlers[eventName]) {
//       // 如果有，则逐个调用队列里的回调函数
//       this.handlers[eventName].forEach((callback) => {
//         callback(...args)
//       })
//     }
//   }
// }

// 核心逻辑，这里采用了闭包思路来实现单例模式
// const createModal = (function() {
//   let modal = null
//   return function() {
//     if(!modal) {
//       modal = document.createElement('div')
//       modal.innerHTML = 'Modal模态框，全局唯一'
//       modal.id = 'modal'
//       modal.style.display = 'none'
//       document.body.appendChild(modal)
//     }
//     return modal
//   }
// })()

// var CreateDiv = (function(){
//   var instance;
//   var CreateDiv = function( html ){
//     if ( instance ){
//       return instance;
//     }
//     this.html = html;
//     this.init();
//     return instance = this;
//   };
//   CreateDiv.prototype.init = function(){
//     var div = document.createElement( 'div' );
//     div.innerHTML = this.html;
//     document.body.appendChild( div );
//   };
//   return CreateDiv;
// })();
// var a = new CreateDiv( 'sven1' );
// var b = new CreateDiv( 'sven2' );
// alert ( a === b ); // true

class Singleton {
  static instance = null

  constructor() {
    if(!Singleton.instance) {
      Singleton.instance = this
    }
    return Singleton.instance
  }
}
const c = new Singleton()
const d = new Singleton()
console.log(c)

var createSingle = (function() {
  var instance = null
  var createFunc = function() {
    if (!instance) {
      instance = this
    }
    return instance
  }
  createFunc.prototype.getList = function () {
    console.log(22)
    return 33
  }
  return createFunc
})()

var a = new createSingle( 'sven1' );
var b = new createSingle( 'sven2' );
console.log('single', a === b)
console.log('single', a.getList())

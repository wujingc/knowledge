// 1、bfc是什么？有什么作用
// 2、数组去重
// 3、安全问题？xss和csrf
// 4、闭包？怎么清除闭包
// 闭包的含义是函数在调用时能够访问函数在定义时可以访问的作用域，例如在定义函数a的时候，a能够访问变量b。每一个函数都有自己对应的闭包，当函数没有被垃圾回收机制回收时函数对应的闭包也会常驻内存。如果需要清除闭包就要回收不需要的函数，根据JavaScript回收机制，当一个内存空间没有变量指向的时候就会被回收。那么闭包清除的方式就是将不需要的函数名赋值为null。
// 5、居中布局
// 6、遇到比较难的问题
// 7、工作中遇到的兼容性问题
// 8、es6新增的特性

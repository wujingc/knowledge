function Name() {
    name = 1
}

// Name()
console.log(name) // 1

// with和eval的坏处，会改变词法作用域，创建出全局变量
function changeName(person) {
    with(person) {
      name = 'BigBear'
    }
  }
  
  var me = {
    name: 'xiuyan',
    career: 'coder',
    hobbies: ['coding', 'footbal']
  }
  
  var you = {
    career: 'product manager'
  }
  
//   changeName(me)
  changeName(you)
  console.log(name) // 输出 'BigBear'


function test (){
    var num = []

    for (var i = 0; i < 10; i++) {
        num[i] = function () {
            console.log('test', i)
        }
    }

    return num[9]
}

test()() // 9 答案是10 因为最后一次循环i会自增一次，所以i最后在全局的值是10， 改成let答案就是9

var test1 = (function() {
    var num = 0
    return () => {
        // var num_test1 = num++
        // return num_test1 // 10
        return num++ // 10
        // return ++num // 11
        
    }
}())
for (var i = 0; i < 10; i++) {
    test1()
}
console.log('test1', test1()) // 11 答案是10  num++ 和 ++num 在这里是有区别的

var a = 1;
function test3(){
    a = 2;  // 注释掉这行答案是undefined
    return function(){
        console.log(a); 
    }
    var a = 3; // 这行代码不会执行，因为return掉了
}
test3()(); // 3 答案是2

var aa = 1;
function test4(){
  aa = 2;
    var bb = function(){
        console.log('test4', aa); 
    }
    var aa = 3;
    return bb
}
test4()(); // 3

// function foo(a,b){
//   console.log('foo', b);
//   return {
//     foo:function(c){
//       return foo(c,a);
//     }
//   }
// }
 
// var func1=foo(0); // undefined
// func1.foo(1);
// func1.foo(2);
// func1.foo(3);
// var func2=foo(0).foo(1).foo(2).foo(3);
// var func3=foo(0).foo(1);
// func3.foo(2);
// func3.foo(3);
    
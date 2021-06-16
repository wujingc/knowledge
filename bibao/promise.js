// 1, 2, 4, 3
// const promise = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve();
//     console.log(2);
// });

// promise.then(() => {
//     console.log(3);
// });

// console.log(4);

//resolve后的普通逻辑， then:第 1 次 resolve
// const promise = new Promise((resolve, reject) => {
//     resolve('第 1 次 resolve')
//     console.log('resolve后的普通逻辑')
//     reject('error')
//     resolve('第 2 次 resolve')
//   })
   
// promise
// .then((res) => {
// console.log('then: ', res)
// })
// .catch((err) => {
// console.log('catch: ', err)
// })

// 1 then只接受函数
// Promise.resolve(1)
//   .then(Promise.resolve(2))
//   .then(3)
//   .then()
//   .then(console.log)

const arrayLike = {0: 'Bob', 1: 'Lucy', 2: 'Daisy', length: 3 }

// const arr = Array.prototype.slice.call(arrayLike);
const arr = Array.from(arrayLike); // 从0开始，第二个参数可以接受一个函数作为处理，主要处理set对象和类数组

console.log(arr)

const a1 = [1,2]
const a2 = [1,3]
const c1 = Array.from(new Set([...a1,...a2]))
console.log(2, c1)


// setTimeout(() => {
//     console.log(22)
//   })
// nextTick(() => {
// console.log(11)
// })
// Promise.resolve().then(() => {
// console.log(33)
// })

Promise.resolve().then(() => {
    console.log(2)
  }).then(() => {
    console.log(3)
  })
Promise.resolve().then(() => {
console.log(4)
})
setTimeout(() => {
console.log(5)
})
// 2,4,3,5


nextTick(() => {
    console.log(1)
})
Promise.resolve().then(() => {
console.log(2)
}).then(() => {
console.log(3)
})

// 2,1,3  因为promise.then(flushJobs).then(cb)


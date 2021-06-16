// $nextTick在DOM更新完成后执行，但并不能保证DOM被浏览器渲染完成
const container = document.querySelector('#container') // 会对当前元素进行操作
const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
container.insertBefore(text2, text1)
text1.aa = '11'
text1.setAttribute('class1', '333')
text1.dataset.aa = 3
text1.addEventListener('click', (e) => {
    console.log(e.target) // 当前点中的元素
    console.log(e.currentTarget) // 绑定事件的元素
}, false)
container.addEventListener('click', (e) => {
    console.log(e.target) // 当前点中的元素
    console.log(e.currentTarget) // 绑定事件的元素
}, true) // 先触发container的点击，再出发text1的点击。正常冒泡是先触发text1的点击
// console.log(11, text1.getAttribute('data-aa'))
// console.log(11, text1.dataset.aaBb) // 自动转为驼峰
// attribute 是标签对应的属性列表，一般是type id class等。
// html标签自定义的属性和值也会在attributes 中。
// property 是dom的默认属性列表（一个对象来的）
// setAttribute设置的会体现在html标签上，property的自定义属性不会出现在html标签，但是class那些会，都会触发重新渲染
// 通过prop（即.）设置的属性，通过getAttribute不一定能得到属性值。（id，class，name，href等自定义属性可以）

// 自定义事件 https://zhuanlan.zhihu.com/p/108447200

// 创建事件
let myEvent = new CustomEvent("pingan", {
    detail: { name: "wangpingan" }
});

// 添加适当的事件监听器
window.addEventListener("pingan", e => {
    alert(`pingan事件触发，是 ${e.detail.name} 触发。`);
});
text1.addEventListener(
    "click", function () {
        // 派发事件
        window.dispatchEvent(myEvent);
    }
)
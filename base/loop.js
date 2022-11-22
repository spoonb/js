// 不是name="adg", 得用冒号
var obj = {name:"adg", sex:"man", age:16}
for (param in obj) {
    console.log(param)
}

// 输出 --> 0 1 2 3，输出的是下标而不是元素值
var arr = [2, 1, 3, 5]
for (num in arr) {
    console.log(num)
}
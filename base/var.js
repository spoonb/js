var a = "hello world"
var a // 使用var指定的变量可以重新声明且在重新赋值之前值都不会改变
console.log("a --> " + a)
let b = "hello world"
// let b 使用let声明的变量会被指定作用域，并且不可以重新声明
console.log("b --> " + b)
const c = 3.15
// c = 3.14 使用const声明为常量，常量不可以二次赋值
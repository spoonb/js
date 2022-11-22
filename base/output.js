var msg = "hello world"
// windows弹窗
window.alert(msg)
// 输出到html文档
document.write(msg)
// 写入到html元素, 在html的dom没有被加载前会报错
document.getElementById("demo").innerHTML = msg
// 输出到控制台
console.log(msg)
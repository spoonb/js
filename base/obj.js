var obj = {name: "zhangsan", sex: "man", age: 15}
console.log(obj["name"])
console.log(obj["sex"])
console.log(obj["age"])

var arr = [1, 2, 3]
for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i])
}

class Test {
    name = null
    sex = null
    age = null
    toString() {
        return "name --> " + this.name + "\n" + "sex --> " + this.sex + "\n" + "age --> " + this.age + "\n"
    }
}

var obj1 = new Test
obj1.name = "zhangsan"
obj1.sex = "man"
obj1.age = 18
console.log(obj1.toString())

for (param in obj1) {
    console.log(obj1[param])
}
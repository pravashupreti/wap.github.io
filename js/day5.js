function sum(list) {
    return list.filter(x => x > 20).reduce((acc, item) => acc + item)
}

let numberList = [10, 20, 30, 40, 50]
console.log(sum(numberList))

let getNewArray = function(list) {
    return list.filter(x => x.length >= 5 && x.indexOf('a') > 0)
}

let stringList = [
    "Pravash",
    "Raj",
    "Upreti"
]
console.log(getNewArray(stringList))
function transform(arr) {
    let obj = {}
    obj[arr[0]] = arr[arr.length - 1]

    console.log(obj)
    return obj
}
var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let a = transform(input)

function getAllKeys(obj) {
    let newArr = []
    let arr = []
    
    newArr.push(Object.keys(obj))
    for (key in obj) {
        arr.push(key)
    }

    return arr
}
var obj = {
    name : 'Sam',
    age : 25,
    hasPets : true
};
let b = getAllKeys(obj)
console.log(b)
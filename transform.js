function transform(arr) {
    let obj = {}
    obj[arr[0]] = arr[arr.length - 1]

    //console.log(obj)
    return obj
}
var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let a = transform(input)
//console.log(a)

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

var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
//console.log(transformArrayToObject(input))
 
function transformArrayToObject(arr) {
    let obj = {}

    for (i = 0; i < arr.length; i++){
        obj[arr[i][0]] = arr[i][1]
    }

    return obj
}
let e = { make: 'Ford', model: 'Mustang', year: 1964 }
let de = transformArrayToObject(input)
let test = 'Array to object'
function assertEqual(a, e, test) {
    let eStr = JSON.stringify(e)
    let aStr = JSON.stringify(a)
    
    let FAILED = `Failed [${test}] expected: '${eStr}'. Actual: "${aStr}"`
        // console.log(FAILED)
    if (aStr == eStr) {
        return "Passed"
    } return FAILED
}
//console.log(assertEqual(1,1,'HI'))
//assertEqual(de,e,'Array to Objects')
console.log('here', assertEqual(de,e, test))

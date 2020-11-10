// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    let element = array[i]
    let result = callbackFunction(element)
    newArray.push(result);
  }

  return newArray;
}
function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}

function squareRoot(numbers){
    return map(numbers, function(n){
        return n ** (1/2)
    })
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(a,e,test){
    let FAILED = `FAILED-[${test}] \nE:'${e}'\nA: '${a}'`
    a = JSON.stringify(a)
    e = JSON.stringify(e)
    if(a === e){
        return 'Passed'
    } return FAILED
}
// TESTS CASES
function addElement(val){
    return val + 1
}
// TEST 1
let array1 = [1]
let expected1 = [2]
let actual1 = map(array1, addElement)
let test1 = 'Add one (+)'

console.log(assertArraysEqual(actual1, expected1, test1))

// TEST 2
let array2 = [1,2,3]
let expected2 = [1,8,27]
let actual2 = cubeAll(array2)
let test2 = 'Cube All'

console.log(assertArraysEqual(actual2, expected2, test2))

// TEST 3
let array3 = [1,4,9]
let expected3 = [1,2,3]
let actual3 = squareRoot(array3)
let test3 = 'Square root All'

console.log(assertArraysEqual(actual3, expected3, test3))

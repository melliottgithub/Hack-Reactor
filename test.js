let string = 'nnss'
function compass(str) {
  obj = { n: 1, s: -1, e: 1, w: -1 }
  strToArr = str.split('')
  let sum = 0
  for (let i = 0; i < strToArr.length; i++){
    
    sum += obj[strToArr[i]]
    console.log(sum)
  }
  if (sum === 0) {
    return true
  } return false
  
}
console.log(compass(string))
let str = 'nnee'
let actual = compass(str)
let expected = true
function assertEqual(actual,expected, test) {
  if (actual === expected) {
    return 'passed'
  } return `failed[${test}]`
}
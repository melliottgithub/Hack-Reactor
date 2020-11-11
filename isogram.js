// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    text = text.toLowerCase()
    if (text.length === 0) {
        return true
    }
  // add each char to a set
  let mySet = new Set()
  for(let i = 0; i < text.length; i++){
      mySet.add(text[i])
    }
    console.log(text.length)
    console.log( mySet.size)
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  if(text.length !== mySet.size){
      return false
  } return true
}
let a = isIsogram('oj')
console.log(a)
// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
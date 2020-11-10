// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  let classListWithAges = []
  // creates an object for each string in the input array, with an age of 10 or 11
    for (i = 0; i < classList.length; i++){
      let personName = classList[i]
      let personAge = getRandomIntInclusive(10, 11)
      let newPerson = { name: personName, age: personAge }
      classListWithAges.push(newPerson)
    }
  // returns an array of these objects
  return classListWithAges
}
// Sample Input
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// Sample Output
var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{ "name": "Dora", "age": 10 }]
// ASSERTION FUNCTION(S) TO BE USED

function assertEqual(a,e) {
    //let FAILED = `FAILED-[${test}]\nE: ${e}\nA: ${a}`
  //   let aStr = JSON.stringify(a)
  // let eStr = JSON.stringify(e)
  if(a.length !== e.length){
    let test = `Lengths are not the same`
    return `FAILED-[${test}]`
  }
  for (i = 0;i <  a.length; i ++){
  console.log('TEST',a[i])
      if(a[i].name !== e[i].name){
        let test = `Name at index: ${i} is not the same.`
        return `FAILED-[${test}].`
      }
      if(e[i].age < 10 || e[i].age > 11){
        let test = `Age is not the same at index: ${i}. ${e[i].age}`
        return `FAILED-[${test}].`
      }
  }
  return 'Passed'
}

// TESTS CASES

//Test 1
let actual1 = decorateClassListWithAges(classList)
//console.log(actual1)
let expected1 = classListWithAges
//console.log(expected1)

let test1 = 'Array to Objects in Array'

console.log('Unit testing',assertEqual(actual1, expected1))

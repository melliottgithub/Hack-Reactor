function listAllValues(obj) {
  let arr = [];

  for (let key in obj) {
    arr.push(obj[key]);
  }

  return arr;
}
function listAllValues2(obj) {
  return Object.values(obj);
}
var input = {
  name: "Krysten",
  age: 33,
  hasPets: false,
};
var alternativeInput = {
  a: "a",
  number: 11,
  hungry: true,
  grammyWins: 1,
};
console.log(listAllValues(input));
console.log(listAllValues(alternativeInput));
console.log(listAllValues2(input));

let expected = ["Krysten", 33, false];

let e = ["Krysten", 33, false];
let e2 = ["a", 11, true, 1];
let a = listAllValues(input);
let a2 = listAllValues(alternativeInput);
let test = "List of all Values in Object";

function assertEqual(a, e, test) {
    let FAILED = `FAILED - [${test}: expected:'${a}' actual:'${a}']`
    let astr = JSON.stringify(a)
    let estr = JSON.stringify(e)
    if (astr === estr) {
        return "Passed"
    } return FAILED
}
console.log(assertEqual(a,e,test))
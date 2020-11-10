function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj["lastName"];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

// Unit Testing
function assertObjectsEqual(a, e, test){
    let astr = JSON.stringify(a)
    let estr = JSON.stringify(e)
    let FAILED = `FAILED-[${test}]\nE:' ${estr} '\nA:' ${astr}.`
    
    if( astr === estr){
        return 'Passed'
    } return FAILED
}
//Test 1
let obj1 = { firstName: "david", lastName: "Maverick",}
let a1 = addFullNameProp(obj1)
let e1 = { firstName: "david", lastName: "Maverick", fullName: "David Maverick", }
let test1 = 'Add full name'
console.log(assertObjectsEqual(a1,e1,test1))
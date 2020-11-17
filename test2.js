function missing(arr) {
  let newArr = [];
  for (let i = arr[0]; i <= arr[arr.length -1]; i++) {
      if (arr.includes(i)) {
        console.log(i)
        
    } else {
        console.log(i)
        newArr.push(i);
    }
    }
    console.log(newArr)
    return newArr
}

let arr = [1, 3, 5,6,7,10];
let actual = missing(arr);
let expected = [2];
let test = "Should get the missing integer";
console.log(assertEqual(actual, expected, test)
);

function assertEqual(a, e, test) {
  if(JSON.stringify(a) === JSON.stringify(e)) {
    return `Passed`;
  }
  return `Failed [${test}]`;
}

console.log(titleCase("peter piper")); //"Peter Piper"
console.log(titleCase("teXt mEssAge")); //"Text Message"
console.log(titleCase("more to me than meets the eye")); //"More To Me Than Meets The Eye"

function titleCase(str) {
  // YOUR CODE HERE
  let arr = str.split(" ");
    let result = "";
    let newArr = []
  for (let i = 0; i < arr.length; i++) {
    let upper = arr[i][0].toUpperCase().slice(0);
    str = upper + arr[i].toLowerCase().slice(1);
    newArr.push(str)
    console.log(newArr)
    }
    
    newArr = newArr.join(' ').split().join();
    return newArr
}

// function titleCase(str) {
//   // YOUR CODE HERE
//   let arr = str.split(" ");
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     let upper = arr[i][0].toUpperCase().slice();
//     let str = upper + arr[i].toLowerCase().slice(1) + " ";
//     result += str;
//   }
//   result = result.substr(0, result.length - 1);
//   return result;
// }
console.log(titleCase("peTeR piper"));

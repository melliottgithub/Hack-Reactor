const { reverse } = require("dns")

function isRotated(str1, str2) {
  // your code here
    let arr = []
    let str2ToArray = str2.split("")
    //let split1 = str1.split("").join()
    //let rotate = []
   console.log(str2ToArray)
  for(i = 0; i < str2.length; i++){
    // let cutLastChar = str2ToArray.pop()
    // str2ToArray.unshift(cutLastChar) // add last char from split to 1st char of split
    // let rotate = str2ToArray.join('') 
  
    let cutFirstChar = str2ToArray.shift()
    str2ToArray.push(cutFirstChar)
    let rotate = str2ToArray.join('')
    if (str1 === rotate) {
      return true
    }
  }
  return false
}

var string_1 = 'hello world';
var string_2 = 'orldhello w';

var result = isRotated(string_1, string_2);
console.log(result); // --> true
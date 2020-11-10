/* Number to Roman */

let data = {'I': 1,'IV': 4,'V': 5,'IX': 9, 'X': 10, 'XL': 40,'L': 50, 'XC': 90,'C': 100,'CD': 400,'D': 500, 'CM': 900,'M': 1000,}  

function numToRoman(num,data) {
  let roman = ''
  let number = num
  if (num > 3999 || num === undefined){
      return `No unicodes yet. Try again.` 
    } else if(num <= 0) {
      return `Use positive numbers.`
    }
  for (let key in data) {
      if (data[key] === num ) {
        return "' " + key + " ' ===> Number: " + num + " "
      } 
    }
  //helper functions
  data = reverseObjects(data)
  for (let i in data) {
      while ( num >= data[i] ) {
        roman += i;
        num -= data[i];
      }
    }
  return `' ${roman} ' ===> Number: ${number}`;
}
//Helper function
//lazy did not want to write it again function
function reverseObjects(data){
  let dataReverse = {}
  let keys = Object.keys(data).reverse()
  let values = Object.values(data).reverse()
  
  for(i = 0; i < keys.length; i++){
    dataReverse[keys[i]] = values[i]
  }
  return dataReverse
}

console.log("\nRoman:", numToRoman(100, data))   // ' C '
console.log("\nRoman:", numToRoman(20, data))   // ' XX '
console.log("\nRoman:", numToRoman(2020, data)) // ' MMXX '
console.log("\nRoman:", numToRoman(1999, data)) // ' MCMXCIX '
console.log("\nRoman:", numToRoman(4, data))    // ' IV '
console.log("\nRoman:", numToRoman(9, data))    // ' IX '
console.log("\nRoman:", numToRoman(33, data))   // ' XXXIII '

function assertEqual(a,e,test){
  if(a === e){
    return `Passed. ${e}`
  } return `Failed-[${test}]. E:${e} - A:${a}`
}
//time up

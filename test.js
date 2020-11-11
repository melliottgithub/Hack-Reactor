function findLongestPalindrome(sentence) {
    // split sentence into words
    let strToArr = sentence.split(' ')
    // iterate words and collect the palindromes
    let arrPal = []
    for (let i = 0; i < strToArr.length; i++) {
        if (isPalindrome(strToArr[i])){
            arrPal.push(strToArr[i])
        }
    
  }
  
  // sort the list of palindromes by word length
  arrPal.sort(sortAscendingByLength)
  // return the largest item in the sorted list
  
  return arrPal.pop()
}


function reverseString(string) {
    //split letters into array
    let strToArr = string.reverse()
    //return as a string with join
    return strToArr.join('')
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  // split to compare
  let strToArr = word.split('')
  // strToArr reverse
  let reversedArr = strToArr.reverse()
  //make it a string
  let reversedArrToStr = reversedArr.join('')
  //check is is a palindrome
  let isPalind = word === reversedArrToStr
  //return true or false
  return isPalind
  
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

console.log(isRotated('hello world','orldhello w'))
// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
    let strToArr = sentence.split(' ')
    // iterate words and collect the palindromes
    let arrPalindromes = []
    for (let i = 0; i < strToArr.length; i++){
        if (isPalindrome(strToArr[i])) {
            arrPalindromes.push(strToArr[i])
            //sort the list of palindromes by word length
        }
    }
    arrPalindromes.sort(sortAscendingByLength)

  // return the largest item in the sorted lis
    return arrPalindromes[arrPalindromes.length - 1]
    //return arrPalindromes.pop()
}

function reverseString(string) {
    // to reverse i need to split it
    let strToArr = string.split('')
    // split now reverse
    let reversedArr = strToArr.reverse()
    //pull it altogether
    let reversedStr = reversedArr.join('')
    //return string reversed == ah ==> ha
    return reversedStr
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
    // split to arr
    let strToArr = word.split('')
    // reverse str 
    let reversedStr = strToArr.reverse()
    // join altogether
    let reservedArrToStr = reversedStr.join('')
    //compare word and reserved word
    let isPal = word === reservedArrToStr
    //return true or false
    return isPal    
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(a, e, test) {
  let FAILED = `Failed-[${test}]. E:${e}. A:${a}`;
  if (a === e) {
    return `Passed [${test}]`;
  } else {
    return FAILED;
  }
}
// TESTS CASES
//test 1
let pal1 = "attarratta";
let actual1 = isPalindrome(pal1);
let expected1 = true
let test1 = "Should return true when Palindrome";
console.log(assertEqual(actual1, expected1, test1));
//test 2
let pal2 = "however";
let actual2 = isPalindrome(pal2);
let expected2 = false
let test2 = "Should return false when not Palindrome";
console.log(assertEqual(actual2, expected2, test2));
//test 3
let revStr = 'abdc'
let reverseStr = reverseString(revStr)
let expected3 = 'cdba'
let test3 = 'Reverse string'
console.log(assertEqual(reverseStr, expected3, test3));
//test 4
let lg = 'a cute racecar when to attarratta eye mocho ojo'
let longest = findLongestPalindrome(lg)
let expected4 = 'attarratta'
let test4 = 'Find the longest palindrome'
console.log(assertEqual(longest, expected4, test4));




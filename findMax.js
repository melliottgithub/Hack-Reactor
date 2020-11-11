// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
    let wordToArr = word.split('')
    console.log(wordToArr)
    let obj = {}
    let letter = ''
  // Count the instances of each letter
    for (let i = 0; i < wordToArr.length; i++){
        if (obj[wordToArr[i]] === undefined) {
            obj[wordToArr[i]] = 1
        } else {
            obj[wordToArr[i]]++
        }
    }
    console.log(obj)
  // Iterate all the counts and find the highest
    let highest = obj[wordToArr[0]]
    for (let key in obj) {
        if (obj[key] > highest) {
            highest = obj[key]
            letter = key
       } 
    }
    console.log(highest)
    console.log(letter)
  // Return this word's max repeat count
    return highest
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
    let textToArr = text.split(' ')
    console.log(textToArr)
  // For each word...
    for (let i = 0; i < textToArr.length; i++){
        var repeatCountForWord = findMaxRepeatCountInWord(textToArr[i])
        console.log(repeatCountForWord)
        // If that max repeat count is higher than the overall max repeat count, then
        if (repeatCountForWord > maxRepeatCountOverall) {
            // update maxRepeatCountOverall
            maxRepeatCountOverall = repeatCountForWord
            // update wordWithMaxRepeatCount
            wordWithMaxRepeatCount = textToArr[i]
        }
        
    }
    console.log(wordWithMaxRepeatCount)
  return wordWithMaxRepeatCount;
}
let a = 'I passed my exam are you not entertained'
console.log(findFirstWordWithMostRepeatedChars(a))
console.log(findMaxRepeatCountInWord(a))
// ASSERTION FUNCTION(S) TO BE USED

// TESTS CASES
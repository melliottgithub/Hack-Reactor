/* Flip every chunk of n characters in a string, where n is any positive integer greater than 1.
Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma' */

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
//12:02

function flipEveryNChars(str, num) {
    let strArr = str.split('');
    //let newStr = '';
    let result = []
    console.log(strArr);
    for (i = 0; i < strArr.length; i = i + num){
        let newStr = strArr.slice(i, i + num)
        console.log(newStr)

        let flip = newStr.reverse()
        console.log(flip)
        result.push(flip)
    }
    console.log(result.join(','))
    
    return result
} 

//console.log(flipEveryNChars(input, 5))

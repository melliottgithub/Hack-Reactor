/* 
Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/
/* 
Flip every pair of characters in a string.

*/
//Example:
var input =
  "check out how interesting this problem is, it's insanely interesting!";
var output = flipPairs(input);
console.log(output);
let expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!"
let test = 'flip pairs'
//11:35
function flipPairs(str) {
  let flip = [];
  for (let i = 0; i < str.length; i++, i++) {
    flip.push(str[i + 1], str[i]);
  }
  return flip.join("");
}
//11:38
console.log(assertEqual(output,expected,test))
function assertEqual(a,e,test) {
    let Failed = `Failed-[${test}] expected:'${e}' actual:'${a}' `   
    if (a === e) {
        return 'Passed'
    } else return Failed
}
//11:44
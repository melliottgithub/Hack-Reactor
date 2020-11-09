// Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

// Given a sorted array, such as this:
// [1, 3, 16, 22, 31, 33, 34]

// You can search for the value 31, as follows:

// 1) Pick the midpoint: 22.
// 2) The value is higher than 22, so now consider only the right half of the previous array:
// [...31, 33, 34]
// 3) Pick the midpoint: 33
// 4) The value is lower than 33, so now consider only the left half of the previous array:
// [...31...]
// 5) Pick the midpoint: 31
// 6) You've hit the value.
// 7) Return the index of the value.

// Notes:
// * If you don't find the value, you can return null.
// * If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
//310
function binarySearch(arr, n){
  //cut array in half
  let firstHalf = arr.slice(0, arr.length / 2 + 1 )
  //console.log(firstHalf)
  // console.log(firstHalf[firstHalf.length -1])
  //check if middle is more than n
  firstHalf[firstHalf.length - 1] < n
  console.log(firstHalf[firstHalf.length - 1])
  //if mid > b use first half else use second half
  let secHalf = arr.slice( arr.length / 2 + 1, arr.length)
  console.log(secHalf)
  // check middle if n = middle return
  //firstHalf[firstHalf.length -1] > n
  console.log(secHalf[secHalf.length - 1] )
  return 
  let newArr2 = firstHalf.slice( firstHalf.length /2, firstHalf.length)
  for (i = 0; i < arr.length / 2; i++){
    //console.log(arr)
  }
}
console.log(binarySearch([1, 3, 16, 22, 31, 33, 34],33))
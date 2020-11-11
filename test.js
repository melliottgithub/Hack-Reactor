function isRotated(str1, str2) {
    //2:22
  // your code here
  //separate sentence into words
    let words = str1.split('')
    console.log(words)
  //iterate over them
  for(let i = 0; i < words.length; i++){
      //grab last letter
      let grabLastLetter = words.pop()
      console.log(grabLastLetter)
      //put it into word
      words.unshift(grabLastLetter)
      let rotated = words.join('')
      console.log(words)
      if(rotated === str2){
          return true
      }
  }
  return false
}

console.log(isRotated('hello world','orldhello w'))
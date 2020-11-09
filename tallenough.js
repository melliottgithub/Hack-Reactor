function a(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (obj["heightInInches"][i] >= 48) {
      newArr.push(obj["name"][i]);
    }
  }
  return newArr;
}

function b(arr) {
  let tall = obj["h"][i];
  for (i = 0; i < arr.length; i++) {
    if (tall < obj["h"]) {
      tall = obj["h"][i];
      let name = obj["name"][i];
    }
  }

  return `${name} st ${tall} inches`;
}

function c(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i]["meal"] === vegetarian) {
      return true;
    }
  }
}

function d(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++){
        if ( sum > 100 ){
            return `I got ${i} at ${sum} `
        }
        sum += arr[i]['price']
    }
}

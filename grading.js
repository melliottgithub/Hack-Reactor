function convertScoreToGradeWithPlusAndMinus(score) {
  // your code here
  let scoreObj = {
    A: [100, 90],
    B: [89, 80],
    C: [79, 70],
    D: [69, 60],
    F: [59, 0],
  };
  let secDig = score.toString()[1];
  //find range useing objects
  if (score === 100) {
    return "A++";
  }
  for (let key in scoreObj) {
    //if it is in range spit key
    if (score <= scoreObj[key][0] && score >= scoreObj[key][1]) {
      if (secDig >= 8 && secDig <= 9) {
        return `${key}+`;
      } else if (secDig >= 0 && secDig <= 2) {
          return `${key}-`
      } else return key
    } else if (score < 0 || score > 100) {
      return `INVALID SCORE`;
    }
  }
}
console.log(convertScoreToGradeWithPlusAndMinus(93));

var anotherPerson = {
  name: {
    first: "kylA",
    last: "liVingSton",
  },
  birthDay: {
    month: "octobeR",
    day: 20,
    year: 1961,
  },
};
renderInfoNeatly(anotherPerson); //"Kyla Livingston: October 20, 1961"

function renderInfoNeatly(person) {
  // YOUR CODE HERE
  let name = person.name.first;
  let last = person.name.last;
  let month = person.birthDay.month;
  let day = person.birthDay.day;
  let year = person.birthDay.year;
  let newArr = [];
  let arr = [name, last, month];

  for (let i = 0; i < arr.length; i++) {
    let lower = arr[i].toLowerCase();
    let upper = arr[i][0].toUpperCase();
    str = upper + lower.slice(1);
    newArr.push(str);
  }
  name = newArr[0];
  last = newArr[1];
  month = newArr[2];
  console.log(name, last, month)
  return `${name} ${last}: ${month} ${day}, ${year}`;
}

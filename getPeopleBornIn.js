var staff = [
  {
    name: { first: "Alyssa", last: "Hacker" },
    birthDay: { month: "June", day: 5, year: 1987 },
  },
  {
    name: { first: "Ben", last: "Bitdiddle" },
    birthDay: { month: "August", day: 19, year: 1984 },
  },
  {
    name: { first: "Eva", last: "Ator" },
    birthDay: { month: "March", day: 29, year: 1980 },
  },
  {
    name: { first: "Lem", last: "Tweakit" },
    birthDay: { month: "August", day: 11, year: 1989 },
  },
  {
    name: { first: "Louis", last: "Reasoner" },
    birthDay: { month: "November", day: 17, year: 1992 },
  },
];

//["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"];

function getPeopleBornIn(staff, month) {
  // YOUR CODE HERE
  let newArr = [];
  for (let i = 0; i < staff.length; i++) {
    let name = staff[i].name.first;
    let last = staff[i].name.last;
    let months = staff[i].birthDay.month;
    let day = staff[i].birthDay.day;
    let year = staff[i].birthDay.year;
    if (months === month) {
      let sentence = `${name} ${last}: ${month} ${day}, ${year}`;
      newArr.push(sentence);
    }
  }
  console.log(newArr);
  return newArr;
}
console.log(getPeopleBornIn(staff, "August"));

// 1. Get Randomly Number 1-6
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
}
console.log(getRandomNum(1, 6));

// 2. kivabe amra amder class ar sokool student ar name alphabetically sagate pari
const student = ["Shohag", "Mowsumi", "Bappy", "Gazi", "Rabbi"];
console.log(student.sort());

// 3. ki vabe amra amder class ar sokoler roll num chrome onujai sajate pari
const rollNum = [5, 6, 1, 4, 3, 7, 2];
console.log(
  rollNum.sort(function (a, b) {
    return a - b;
  })
);

// 4. Leap Year Sal test kora
/* 
Leap Year sal bar korte kole kichu shortho ache 
1. 400 dara vag korle cono vagses thake na 
2. 4 dara vag korle cono vagses thake na  
3. 100 dara vag korle cono vagses thakbe
*/
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year!`);
  } else {
    console.log(`${year} is not a Leap year`);
  }
}

isLeapYear(2016);

// 5. cono sentence a kotoglue vowel ache ta kivabe ninai korbo ?
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;

  const letters = Array.from(sentence);

  letters.forEach(function (value, index, array) {
    if (vowels.includes(value)) {
      count++;
    }
  });

  return count;
}

console.log(countVowels("I Love bangladesh"));

// 6. cono array thake duplicate number glue kivabe alada korbo ba bar korbo
const number = [5, 6, 5, 4, 8, 4, 3, 3, 2, 7];

const duplicates = number.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

console.log(duplicates);

// 6. cono array thake duplicate number noi aiglue kivabe alada korbo ba bar korbo
const numberOfArray = [5, 6, 5, 4, 8, 4, 3, 3, 2, 7];

const uniqueNum = numberOfArray.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

console.log(uniqueNum);

// All done

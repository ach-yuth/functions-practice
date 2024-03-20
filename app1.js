// const greeting = "hello";
// function greeting() {
//   const reverseGreeting = greeting.split("").reverse().join("");
//   return reverseGreeting;
// }
// console.log(reverseGreeting);

// const scriptingLanguage = "javascript";

// const removed = scriptingLanguage.replace(/[aeiouAEIOU]/g, "");
// console.log(removed);

const language = "programming";

function removeVowels(string) {
  const withoutVowels = [];
  string.split("").forEach((letter) => {
    // if(letter.toLowerCase()!=="a" || "e" ||"i"  || "o"||"u"){

    // }
    const vowels = ["a", "e", "i", "o", "u"];
    if (!vowels.includes(letter.toLowerCase())) {
      withoutVowels.push(letter);
    }
  });

  return withoutVowels.join("");
}
console.log(removeVowels(language));

function vowelsCount(string) {
  //const vowels = [];
  let vowelsCount = 0;

  string.split("").forEach((letter) => {
    const vowelsArray = ["a", "e", "i", "o", "u"];
    if (vowelsArray.includes(letter)) {
      //vowels.push(letter);
      vowelsCount++;
    }
  });
  //return vowels.length;
  return vowelsCount;
}
console.log(vowelsCount(language));

const sentence = "the quick brown fox";
function longestWord(string) {
  const wordsLength = string.split(" ").map((word) => {
    return word.length;
  });
  //return wordsLength;
  const maxValue = Math.max(...wordsLength);
  const maxIndex = wordsLength.indexOf(maxValue);
  return string.split(" ")[maxIndex];
}
console.log(longestWord(sentence));

// sixth answer

const greet = "hello world";
function capitalize(string) {
  const words = string.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return words.join(" ");
}

console.log(capitalize(greet));

//seventh answer

const greeting = "hello";
function repeatingLettersLength(string, checkingLetter) {
  let repeated = 0;
  string.split("").forEach((letter) => {
    if (checkingLetter === letter) {
      repeated++;
    }
  });
  return repeated;
}
console.log(repeatingLettersLength(greeting, "l"));

//array methods
//14th answer

let nums = [1, -2, 3, -4, 5];

function filterNumbers(numbers) {
  let numsCount = 0;
  numbers.forEach((num) => {
    if (num > 0) {
      numsCount = num + numsCount;
    }
  });
  return numsCount;
}
console.log(filterNumbers(nums));

//15th answer

const greetArray = ["Hello", " ", "World"];

function greetingWishes(array) {
  return array.join("");
}
console.log(greetingWishes(greetArray));

//16th answer
const numbers = [1, 2, 3, 4, 5];

function average(nums) {
  let numberCount = 0;
  nums.forEach((num) => {
    numberCount = num + numberCount;
  });
  return numberCount / nums.length;
}
console.log(average(numbers));

//17th answer
const mensData = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Doe", age: 35 },
];

function person(details) {
  const filtered = details.filter((detail) => {
    if (detail.age > 30) {
      return detail;
    }
  });
  return filtered;
}
console.log(person(mensData));

//18th answer
const arrayNumbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function numbersArray(nums) {
  return nums.flat();
}
console.log(numbersArray(arrayNumbers));

//19th answer
const duplicateNums = [1, 2, 2, 3, 4, 4, 5];

function number(nums) {
  let unique = [];
  nums.forEach((el) => {
    if (!unique.includes(el)) {
      unique.push(el);
    }
  });
  return unique;
}
console.log(number(duplicateNums));

//20th answer
const zigZagFruits = ["banana", "apple", "orange"];

function fruitsSort(fruits) {
  return fruits.sort();
}
console.log(fruitsSort(zigZagFruits));

//21st answer
const arrayNums = [2, 3, 4];
function multipleNumbers(nums) {
  let numsCount = 1;
  nums.forEach((num) => {
    numsCount = num * numsCount;
  });
  return numsCount++;
}
console.log(multipleNumbers(arrayNums));

//22nd answer
const greet1 = ["hello", " ", "world"];

function greetin(greets) {
  return greets.join("");
}
console.log(greetin(greet1));

const numbs = [10, 5, 20, 8];

function difference(nums) {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const difference = max - min;
  return difference;
}
console.log(difference(numbs));

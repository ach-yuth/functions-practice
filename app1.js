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
console.log(repeatingLettersLength  q(greeting, "l"));

//array methods
//14th answer

let nums = [1, -2, 3, -4, 5];

function filterNumbers(numbers) {
  let numsCount = 0;
  let filtering = numbers.filter((num) => {
    if (num > 0) {
      return num;
    }
  });
  return (numsCount = filtering.reduce((current, total) => current + total));
}
console.log(filterNumbers(nums));

//15th answer
"Hello", " ", "world";

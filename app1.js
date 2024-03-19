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

const greet = "hello world";
function capitalize(string) {
  const words = string.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return words.join(" ");
}

console.log(capitalize(greet));

const greeting = "hello";
function print(string, word) {
  const repeated = [];
  string.split("").forEach((letter) => {
    if (word.includes(letter)) {
      repeated.push(letter);
    }
  });
  return repeated.length;
}
console.log(print(greeting, "l"));

// first answer
function print(data) {
  console.log(data);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const result = function numbers(nums) {
  const newArray = nums.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  return newArray;
};
print(result(numbers));

//second answer
const fruits = ["apple", "banana", "orange", "kiwi"];

const filteredLength = function fruitsLength(numsLength) {
  const fruitLength = numsLength.map((fruit) => {
    return fruit.length;
  });
  return fruitLength;
};
console.log(filteredLength(fruits));

//third answer
const numsArray = [1, 3, 5, 7, 9];
const doubledNumbers = function doubledNums(numbers) {
  const doubledNum = numbers.map((num) => {
    return num + num;
  });
  return doubledNum;
};
console.log(doubledNumbers(numsArray));

//fourth answer
const fruitsArray = ["apple", "banana", "orange", "kiwi"];

const lengthenFruits = function array(fruits) {
  const fruitLength = fruits.filter((fruit) => {
    if (fruit.length > 5) {
      return fruit;
    }
  });
  return fruitLength;
};
console.log(lengthenFruits(fruitsArray));

//fifth answer
const persons = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 30 },
];

const personsNames = function names(name) {
  const names = name.filter((person) => {
    if (person.age > 18) {
      return person;
    }
  });
  return names.map((person) => person.name);
};
print(personsNames(persons));

// console.log(personName);

//sixth answer
let numbersArray = [1, 2, 3, 4, 5];

const squareNums = function squarenum(numbers) {
  const squareNum = numbers.map((num) => {
    return num * num;
  });
  return squareNum;
};
console.log(squareNums(numbersArray));

//seventh answer
const fruitArray = ["apple", "banana", "orange", "kiwi"];

const editedArray = function fruitCapitalize(fruits) {
  const fruitCapitalize = fruits.map((fruit) => {
    return fruit[0].toUpperCase() + fruit.slice(1);
  });
  return fruitCapitalize;
};
console.log(editedArray(fruitArray));

//eight answer
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 60 },
];
const devices = function electronics(product) {
  const electronics = product.filter((electronic) => {
    if (electronic.price > 500) {
      return electronic;
    }
  });
  return electronics.map((electronic) => electronic.name);
};

console.log(devices(products));

//ninth answer
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const additionOfCurrentNum = function sumOfNums(numbers) {
  const numbersSum = numbers.map((num) => {
    return num.reduce((current, total) => current + total);
  });
  return numbersSum;
};
console.log(additionOfCurrentNum(array));

//tenth answer

// const uniqueFruits = [];

// fruitsDuplicate.forEach((fruit) => {
//   if (!uniqueFruits.includes(fruit)) {
//     uniqueFruits.push(fruit);
//   }
// });
// console.log(uniqueFruits);
const fruitsDuplicates = [
  "apple",
  "apple",
  "banana",
  "banana",
  "orange",
  "apple",
  "kiwi",
];
const duplicateDeletion = function fruitsDuplicateFilter(fruits) {
  const uniqueFruits = [];
  fruits.forEach((fruit) => {
    if (!uniqueFruits.includes(fruit)) {
      uniqueFruits.push(fruit);
    }
  });
  return uniqueFruits;
};

console.log(duplicateDeletion(fruitsDuplicates));

const fruitsDuplicate = [
  "apple",
  "apple",
  "banana",
  "banana",
  "orange",
  "apple",
  "kiwi",
];
function fruitsDuplicateFilter2(inputFruits, display) {
  const uniqueFruits = [];
  inputFruits.forEach((fruit) => {
    if (!uniqueFruits.includes(fruit)) {
      uniqueFruits.push(fruit);
    }
  });
  display(uniqueFruits);
}

fruitsDuplicateFilter2(fruitsDuplicate, print);

// function factorial(num) {
//   if (num === 1) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// console.log(factorial(4));

// function add(sum) {
//   console.log(sum);
// }

// const sum = () => {
//   let a = 10;
//   let b = 10;
//   if (a + b === 20) {
//     console.log(b);
//   }
//   return a;
// };
// add(sum());

// function add(sum) {
//   document.body.append(sum);
// }

// const persons = ["ram", "laxman", "bharat"];
// const run = () => {
//   return persons.map((person, idx) => {
//     return person.toUpperCase();
//   });
// };
// add(run());

// let num = 0;

// const details = {
//   name: "rama",
//   age: 20,
//   city: "bheem gal",
// };

// const fuck = function greeting(candiate) {
//   const { name, age, city } = candiate;
//   console.log(`${city}`);
// };
// fuck(details);

// const input = document.querySelector("input");
// const container = document.querySelector(".container");

// const authors = [
//   { book: "freedom from unkown", author: "jiddu krishnamurthy", year: 1895 },
//   { book: "bhagvad geetha", author: "vyasa maharishi", year: 1300 },
//   { book: "how universe works", author: "neildegradetyson", year: 1995 },
// ];

// function publishers(persons) {
//   persons.forEach((person) => {
//     const list = document.createElement("li");
//     list.innerHTML = `${person.book} - ${person.author}`;
//     container.append(list);
//   });
// }

// publishers(authors);

// input.addEventListener("input", searching);

// function searching() {
//   const searchItem = input.value;
//   const filteredItem = authors.filter(
//     (person) =>
//       person.author.toLowerCase().includes(searchItem.toLowerCase()) ||
//       person.book.toLowerCase().includes(searchItem.toLowerCase())
//   );
//   container.innerHTML = "";

//   publishers(filteredItem);
// }

// let nums = [1, 2, 3, 4, 5, , 7, 8, 9];
// nums.filter((num) => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// function factorial(num) {
//   if (num === 1) {
//     return num;
//   } else {
//     return num * factorial(num - 1);
//   }
// }
// console.log(factorial(4));

// first answer
function print(data) {
  console.log(data);
}
const result = function numbers() {
  let numbers = [1, 2, 3, 4, 5, 6];
  const newArray = numbers.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  return newArray;
};
print(result());

//second answer

function fruitsLength() {
  const fruits = ["apple", "banana", "orange", "kiwi"];

  const fruitLength = fruits.map((fruit) => {
    return fruit.length;
  });
  return fruitLength;
}
console.log(fruitsLength());

//third answer
function doubledNums() {
  let nums = [1, 2, 3, 4, 5];

  const doubledNum = nums.map((num) => {
    return num + num;
  });
  return doubledNum;
}
console.log(doubledNums());

//fourth answer

const lengthenFruits = function array() {
  const fruits = ["apple", "banana", "orange", "kiwi"];

  const fruitLength = fruits.filter((fruit) => {
    if (fruit.length > 5) {
      return fruit;
    }
  });
  return fruitLength;
};
console.log(lengthenFruits());

//fifth answer
const persons = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 30 },
];

function print(data) {
  console.log(data);
}
function names() {
  const names = persons.filter((person) => {
    if (person.age > 18) {
      return person;
    }
  });
  return names.map((person) => person.name);
}
print(names());

// console.log(personName);

//sixth answer
function squarenum() {
  let numbersArray = [1, 2, 3, 4, 5];

  const squareNum = numbersArray.map((num) => {
    return num * num;
  });
  return squareNum;
}
console.log(squarenum());

//seventh answer
function fruitCapitalize() {
  const fruitsArray = ["apple", "banana", "orange", "kiwi"];

  const fruitCapitalize = fruitsArray.map((fruit) => {
    return fruit[0].toUpperCase() + fruit.slice(1);
  });
  return fruitCapitalize;
}
console.log(fruitCapitalize());

//eight answer
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 60 },
];
function electronics(product) {
  const electronics = product.filter((electronic) => {
    if (electronic.price > 500) {
      return electronic;
    }
  });
  return electronics.map((electronic) => electronic.name);
}

console.log(electronics(products));

//pure function

function electronics() {
  const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 60 },
  ];

  const electronics = products.filter((electronic) => {
    if (electronic.price > 500) {
      return electronic;
    }
  });
  return electronics.map((electronic) => electronic.name);
}

console.log(electronics());

//ninth answer
function sumOfNums() {
  let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const numbersSum = array.map((num) => {
    return num.reduce((current, total) => current + total);
  });
  return numbersSum;
}
console.log(sumOfNums());

//tenth answer

// const uniqueFruits = [];

// fruitsDuplicate.forEach((fruit) => {
//   if (!uniqueFruits.includes(fruit)) {
//     uniqueFruits.push(fruit);
//   }
// });
// console.log(uniqueFruits);

function fruitsDuplicateFilter() {
  const fruitsDuplicate = [
    "apple",
    "apple",
    "banana",
    "banana",
    "orange",
    "apple",
    "kiwi",
  ];
  const uniqueFruits = [];
  fruitsDuplicate.forEach((fruit) => {
    if (!uniqueFruits.includes(fruit)) {
      uniqueFruits.push(fruit);
    }
  });
  return uniqueFruits;
}

console.log(fruitsDuplicateFilter());

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

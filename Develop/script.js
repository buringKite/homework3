// Assignment Code
// 100
const generatePassword = document.getElementById("password");
let enterPasswordLength = prompt(
  "how many charcters would you like your password to be must by 8 to 128 charcter long "
);
alert("let's create a randomized pasword:");
function number(x) {
  return x >= 8 && x <= 128
    ? +x
    : alert("please refresh page and enter a number between 8 and 128");
}
let getPasswordLength = number(enterPasswordLength);

function getRandomCharacter(array) {
  let x = String.fromCharCode.apply(null, array);
  return x;
}

function charCodeValues(x, y) {
  const array = [];
  for (let i = x; i <= y; i++) {
    array.push(i);
  }

  return array;
}

const allNumbers = charCodeValues(48, 57);
const allUpperCaseAlphabet = charCodeValues(65, 90);
const allLowerCaseAlphabet = charCodeValues(97, 122);
const symbols = charCodeValues(33, 47)
  .concat(charCodeValues(58, 64))
  .concat(charCodeValues(91, 96))
  .concat(charCodeValues(123, 126));
let selectedCriteria = [];

let upperCase =
  confirm("include Uppercase letters") == true
    ? allUpperCaseAlphabet
    : selectedCriteria;
let lowerCase =
  confirm("include Lower Case letters") == true
    ? allLowerCaseAlphabet
    : selectedCriteria;
let numbers =
  confirm("include numbers") == true ? allNumbers : selectedCriteria;
let special =
  confirm(`include specal charcter such as these  `) == true
    ? symbols
    : selectedCriteria;

// i wanted to use the array in a function
const randomPassword = [
  ...upperCase,
  ...lowerCase,
  ...upperCase,
  ...lowerCase,
  ...upperCase,
  ...lowerCase,
  ...upperCase,
  ...lowerCase,
  ...upperCase,
  ...lowerCase,
  ...numbers,
  ...special,
  ...special,
  ...special,
  ...special,
  ...special,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers,
  ...numbers
];

let newArr = randomPassword.sort(function(a, b) {
  //subtracting Math.random() by .5 makes it so that there is a 50% the compared keys are negative or postive  then compares it to the value next to it
  return 0.5 - Math.random();
});
let x = randomPassword.slice(0, getPasswordLength);
alert("Your custom randomize password is:  " + getRandomCharacter(x));

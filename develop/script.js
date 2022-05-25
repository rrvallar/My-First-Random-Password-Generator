// Assignment code here
// input variables
let enter;
let acceptLength = "";
let acceptNumber;
let acceptUpperCase;
let acceptLowerCase;
let acceptCharacter;

// Arrays for the criteria of special characters, upper&lowercase and numbers

let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  //length prompt
  let acceptLength = window.prompt(
    "How long would you like your password to be? Choose between 8 and 128."
  );
  //While statement prompting user to keep password between 8 and 128 ("While" chose to endlessly loop prompt given miss input)
  while (acceptLength <= 8 || acceptLength >= 128) {
    window.alert("Length of password must be between 8 and 128.");
    let acceptLength = window.prompt(
      "How long would you like your password to be? Choose between 8 and 128."
    );
  }
  //Window confirmation for each variable
  acceptNumber = window.confirm("Confirm if you want a number in password");
  acceptUpperCase = window.confirm(
    "Confirm if you want an uppercase letter in password"
  );
  acceptLowerCase = window.confirm(
    "Confirm if you want a lowercase letter in password"
  );
  acceptCharacter = window.confirm(
    "Confirm if you want a special character in password"
  );
  let passwordArr = [];
  //if statement using concat instead of push to combine two arrays (one empty)
  if (acceptNumber) {
    passwordArr = passwordArr.concat(numbers);
  }
  // For loop array used in combination with if statement action
  let randomPassArr = [];
  for (var i = 0; i < acceptLength; i++) {
    randomPassArr =
      randomPassArr +
      passwordArr[Math.floor(Math.random() * passwordArr.length)];
    console.log(randomPassArr);
  }
  return randomPassArr;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

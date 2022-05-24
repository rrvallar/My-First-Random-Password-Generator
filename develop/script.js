// Assignment code here

// Input variables
let enter;
let acceptLength;
let acceptNumber;
let acceptUppercase;
let acceptLowercase;
let acceptCharacter;

// Arrays for special characters, upper&lowercase and numbers

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
function writePassword() {
  //length prompt
  let acceptLength = window.prompt(
    "How long would you like your password to be? Choose between 8 and 128."
  );
  //While statement prompting user to keep password between 8 and 128 (While chose to endlessly loop prompt given continuous miss input)
  while (acceptLength <= 8 || acceptLength >= 128) {
    window.alert("Length of password must be between 8 and 128.");
    let acceptLength = window.prompt(
      "How long would you like your password to be? Choose between 8 and 128."
    );
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

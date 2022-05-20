// Assignment code here

// Input variables
var enter;
var acceptNumber;
var acceptUppercase;
var acceptLowercase;
var acceptCharacter;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("button-works");
  // password length/value

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

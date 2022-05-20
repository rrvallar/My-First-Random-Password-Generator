// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("button-works");
  // password length/value

  var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ['"'," ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];
var lowercase = letters.split(" ");
var uppercase = letters.toUpperCase().split(" ");

//console.log(numbers,special,lowercase,uppercase);

function getRandomNumber(min, max) {
  var randomNumber=Math.random() // Random number between 0 and 0.99
  var randomNumberUpToMax=randomNumber * max // Random number between 0 and max - 0.1
  var randomNumberInRange= min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange); // Remove the decimal places
}

function getRandomValueFromArray(array) {
  var randomArrayPosition=getRandomNumber(0,array.length);
  return array[randomArrayPosition];
}

// Write password to the #password input
function writePassword() {
  var passwordArray = []
  var password = ""
  var lengthChoice = prompt("How many characters do you want your character to be? (Between 8 and 128)")
  var lowercaseChoice = prompt("Do you want lowercase letters, Yes or No?");
  var uppercaseChoice = prompt("Do you want uppercase letters, Yes or No?");
  var numericChoice = prompt("Do you want numeric charcters, Yes or No?");
  var specialChoice = prompt("Do you want Special Characters, Yes or No?");

  if(lowercaseChoice==="Yes") {
    passwordArray = passwordArray.concat(lowercase);
  }
  if(uppercaseChoice==="Yes") {
    passwordArray = passwordArray.concat(uppercase);
  }
  if(numericChoice==="Yes") {
    passwordArray = passwordArray.concat(numbers);
  }
  if(specialChoice==="Yes") {
    passwordArray = passwordArray.concat(special);
  }
  console.log(passwordArray);

  for (let i = 0; i < lengthChoice; i++) {
    password = password+getRandomValueFromArray(passwordArray);
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");
//  console.log(getRandomValueFromArray(lowercase),getRandomValueFromArray(uppercase),getRandomValueFromArray(numbers),getRandomValueFromArray(special));

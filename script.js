// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ['"'," ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];
var lowercase = letters.split(" ");
var uppercase = letters.toUpperCase().split(" ");

console.log(numbers,special,lowercase,uppercase);

// Write password to the #password input
function writePassword() {
  var lengthChoice = prompt("How many characters do you want your character to be? (Between 8 and 128)")
  var lowercaseChoice = prompt("Do you want lowercase letters, Yes or No?");
  var uppercaseChoice = prompt("Do you want uppercase letters, Yes or No?");
  var numericChoice = prompt("Do you want numeric charcters, Yes or No?");
  var specialChoice = prompt("Do you want Special Characters, Yes or No?");

  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  var password = generatePassword();
//var passwordText = document.querySelector("#password");
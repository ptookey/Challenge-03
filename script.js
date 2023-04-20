var generateBtn = document.querySelector("#generate");
var letters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ['"'," ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~",];
var lowercase = letters.split(" ");
var uppercase = letters.toUpperCase().split(" ");

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

function writePassword() {
  var passwordArray = [];
  var password = "";
  var lengthChoice = 0;
  var lowercaseChoice = "";
  var uppercaseChoice = "";
  var numericChoice = "";
  var specialChoice = "";
  
 
  while (lengthChoice<8||lengthChoice>128){
    lengthChoice = prompt("How many characters do you want your character to be? (Between 8 and 128)");
    if (lengthChoice<8||lengthChoice>128){
      alert("Please select a number between 8 and 128");
    }
  };
  
  lowercaseChoice = confirm("Do you want lowercase letters in your password?");
  uppercaseChoice = confirm("Do you want uppercase letters in your password?");
  numericChoice = confirm("Do you want numbers in your password?");
  specialChoice = confirm("Do you want special characters in your password?");

  if(lowercaseChoice) {
    passwordArray = passwordArray.concat(lowercase);
  };
  if(uppercaseChoice) {
    passwordArray = passwordArray.concat(uppercase);
  };
  if(numericChoice) {
    passwordArray = passwordArray.concat(numbers);
  };
  if(specialChoice) {
    passwordArray = passwordArray.concat(special);
  };

  if((!lowercaseChoice&&!uppercaseChoice&&!numericChoice&&!specialChoice)){
    alert("You must select at least one character choice");
  } else {
    for (let i = 0; i < lengthChoice; i++) {
      password = password+getRandomValueFromArray(passwordArray);
    };
  };

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
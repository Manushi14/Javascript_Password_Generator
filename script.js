//Assignment code

//**********MANUSHI PATEL**********//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword() {

  // List of all password Criteria:
  
  var pwLength = 0;
  lowerCase = false;
  upperCase = false;
  numericCharacters = false;
  specialCharacters = false;

  // welcome message.
  alert("HELLO and Welcome to secure Password Generator page!");

  // loop to check  if condition is true, if not the will repeat loop.
  while(pwLength > 128 || pwLength < 8){
    pwLength = prompt("Please enter your password length(should be between 8 to 128).");
    if(pwLength > 128 || pwLength < 8){
      alert("Please enter a valid length between 8 and 128.");
    
  }
}

// created an empty array to store user input.
var checkList = [];

while(lowerCase === false && upperCase === false && numericCharacters === false && specialCharacters === false){

  // Ask if user wants Password with Lowercase 
  lowerCase = confirm("Would you like your password to have lowercase characters?");
  if(lowerCase === true){
    checkList.push('abcdefghijklmnopqrstuvwxyz'.split(''));
  }

  // Ask if user wants password with Uppercase
  upperCase = confirm("Would you like your password to have upppercase characters?");
  if(upperCase){
    checkList.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
  }


  // Ask if user wants Password with Numbers
  numericCharacters = confirm("Would you like your password to have numbers?");
  if(numericCharacters){
    checkList.push('0123456789Z'.split(''));
  }

  // Ask if user wants Password with Special Characters
  specialCharacters = confirm("Do you need special characters in your password?");
  if(specialCharacters){
    checkList.push('~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'.split(''));
  }


  // Verify if none of the options were selected
  if(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){
    alert("Atleast one condition should be selected: lowercase, uppercase, numeric and/or special characters.")
  }
}

// using flat method will eliminate any sub-arrays if any created(here it will go to default upto default depth[1]) and merge them.
// as checkList is an array , so we have defined another variable to have our final user output.
var flatArray = checkList.flat(1);

//Random password logic.
var randomPw = [];
for(var i = 0; i <checkList.length; i++){
  randomPw.push(checkList[i][Math.floor(Math.random() * checkList[i].length)]);
}

var random = Array.from({length: pwLength-checkList.length}, () => Math.floor(Math.random() * flatArray.length));
for(var i = 0; i<random.length; i++){
  randomPw.push(flatArray[random[i]]);
}
 return randomPw .join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

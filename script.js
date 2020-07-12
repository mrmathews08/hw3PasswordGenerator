// Creat some sweet variable 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Password var values

character = [ "!", "#", "$", "%", "&,", "'","(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
space = [];

//Uppercase conversion for letters
var toUpper = function (x) {
    return x.toUpperCase();
};
 var choices;
//created a var for conversion
alpha2 = alpha.map(toUpper);

var start =document.querySelector("generate");

start.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

//Function for password generator

function generatePassword() {
    enter = parseInt(prompt)("How many characters?");
    if (!enter) {
        alert("Please input a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Please choose a number between 8 and 128"));

    } else {
        confirmNumber = confirm("Will this password include numbers?");
        confirmCharacter = confirm("Will this password include special characters?");
        confirmUppercase = confirm("Will this password contain Uppercase letters?");
        confirmLowercase = confirm("will this password include Lowercase letters?");
    };
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must enter a value!");

}  
 else if (confirmCharacter && confirmNumber && confirmUppercase) {
     choices = character.contact(number, alpha2);
 } 
 else if (confirmCharacter && confirmNumber && confirmUppercase) {
     choices = character.concat(number, alpha);
 }
 else if (confirmCharacter && confirmLowercase && confrimUppercase) {
     choices = character.concat(alpha. alpha2);
 }
 else if (confirmNumber && confirmLowercase && confirmUppercase) {
     choices = number.concat(alpha, alpha2);
 }
}




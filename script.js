// Creat some sweet variables for user inputs
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Password values that will be generated / possible variable values

character = [ "!", "#", "$", "%", "&,", "'","(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
space = [];

// created this variable outside if statement to make it global

var choices;

//Uppercase conversion for letters, had to look this one up

var toUpper = function (x) {
    return x.toUpperCase();
};

//created a var for conversion, looked it up
alpha2 = alpha.map(toUpper);

// created variable to start prompts when generate is clicked.

var start = document.querySelector(".btn");

start.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

//Function that is run when user begins input will gather variables

function generatePassword() {
    enter = parseInt(prompt("How many characters?"));
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

// I think I can shorten these things up using stuff we learned this week but to be honest Im still getting those down. But I know this code below can be consolidated. 
// these are all the possible outcomes of the user inputs. there is one for every OK and for every CANCEL
}  
 else if (confirmCharacter && confirmNumber && confirmUppercase) {
     choices = character.concat(number, alpha2);
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
 else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

} else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

} else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
}
else if (confirmCharacter) {
    choices = character;
}
else if (confirmNumber) {
    choices = number;
}
else if (confirmLowercase) {
    choices = alpha;
}
else if (confirmUppercase) {
    choices = space.concat(alpha2);
};

// array placeholder for user input of length
var password = [];
// loop to find random variables in all classes of variables.
for (var i = 0; i < enter; i++) {
    var userChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(userChoices);
}

// this block puts the randomly generated password in the textbox. (used the slack assist for this one, kept trying to run a function but making the text box an object is way better)
var ps = password.join("");
var textbox = document.querySelector("#password")
textbox.value = password
}
 




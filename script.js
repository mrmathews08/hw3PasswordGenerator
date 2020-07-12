// Creat some sweet variable 
var enter;
var confirmNumber;
var confirmCHaracter;
var confirmUppercase;
var confirmLowercase;

// Password var values

character = [ "!", "#", "$", "%", "&,", "'","(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
space = [];

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);


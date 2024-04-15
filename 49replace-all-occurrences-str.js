//JavaScript Program to Replace All Occurrences of a String
var string = 'Mr red has a red house and a red car';
var replaceStr=string.split('red').join('blue');
/*
// regex expression
const regex = /red/gi;

// replace the characters
const newText = string.replace(regex, 'blue');*/

console.log(replaceStr)
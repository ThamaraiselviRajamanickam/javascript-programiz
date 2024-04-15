//JavaScript Program to Compare Two Strings


//const regex = new RegExp(/^a...s$/);
//console.log(regex.test('alias')); // true



var str1="Java Script";
var str2="java script";
var result=str1.toUpperCase() == str2.toUpperCase()
if(result)
{
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}
// JavaScript Program to Check Whether a String is Palindrome or Not
var str="racecaee"
var revStr="";
for(let i=str.length-1;i>=0;i--){
    revStr+=str[i]
    if(i==0 && revStr==str){
        console.log("It is a palindrome")
    }else if(i==0 && revStr!==str){
        console.log("It is a not palindrome")
    }

}
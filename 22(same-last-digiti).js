//JavaScript Program to Check if the Numbers Have Same Last Digit
var number1=103;
var number2=203;
var firstNumber=number1%10;
var secondNumber=number2%10;
if(firstNumber==secondNumber){
    console.log("Both have same last digits")
}else{
    console.log("Last digits are not same")
}

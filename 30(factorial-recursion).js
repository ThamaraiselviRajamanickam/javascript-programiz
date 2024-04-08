//JavaScript Program to Find Factorial of Number Using Recursion
function factorial(num){
    if(num==0){
        return 1
    }else{
        return num * factorial(num-1)
    }
}
var number=4;
if(number >=0){
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
}
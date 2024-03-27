//JavaScript Program to Print the Fibonacci Sequence
//0, 1, 1, 2, 3, 5, 8, 13, 21, ...
var num=10;
var num1=0;
var num2=1;
var num3;
for(i=1;i<=num;i++){
num3=num1+num2;
num1=num2;
num2=num3;
console.log(num2)
}
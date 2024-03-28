//JavaScript Program to Find Armstrong Number in an Interval
for(i=100;i<=1000;i++){
var num = i;
var remainder=0;
var sum=0;

while(num > 0){
    remainder=num%10;
    sum+=remainder*remainder*remainder;
    num=Math.floor(num/10)
}
if(i==sum){
    console.log(i+ " is an Armstrong number");
}
}
// for (var i = 100; i <= 999; i++) {
//     var num = i;
//     var sum = 0;

//     while (num > 0) {
//         var digit = num % 10;
//         sum += Math.pow(digit, 3);
//         num = Math.floor(num / 10);
//     }

//     if (i === sum) {
//         console.log(i + " is an Armstrong number");
//     }
// }


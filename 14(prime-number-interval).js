//JavaScript Program to Print All Prime Numbers in an Interval
var num=10;
var isPrime=true;
for(i=2;i<=num/2;i++){
    if(num % i==0){
        isPrime=false
        
    }
}
if (isPrime) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}
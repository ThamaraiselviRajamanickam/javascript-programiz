//JavaScript Program to Print All Prime Numbers in an Interval
var num=10;
var isPrime=true;
for(i=2;i<=num/2;i++){
    if(num % i==0){
        isPrime=false
        
    }
    else if(isPrime==true){
        console.log("isprime nmber")
    }else{
        console.log("not a prime number")
    }
}
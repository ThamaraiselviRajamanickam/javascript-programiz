//JavaScript Program to Print All Prime Numbers in an Interval
// var num=10;
// var isPrime=true;
// for(i=1;i<=num/2;i++){
//     if(num % i==0){
//         isPrime=false
        
//     }
// }
// if (isPrime) {
//     console.log(num + " is a prime number");
// } else {
//     console.log(num + " is not a prime number");
// }
var n=11;
for(var i=1;i<=n;i++){
    var isPrime=true;
    for(var j=2;j<i;j++){
        if(i%j==0){
            isPrime=false
        }
    }
    if(isPrime==true){
        console.log(i)
    }
}
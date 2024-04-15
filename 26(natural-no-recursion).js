//JavaScript Program to Find Sum of Natural Numbers Using Recursion
// function sum(num){
//     if(num>0){
//         return num + sum(num-1)
//     }
//     else{
//         return num
//     }
    
// }
// var number=5;
// var results=sum(number)
// console.log(results)
function sum(n){
    if(n>0){
        return 1
    }else{
        return n + sum (n-1)
    }
}console.log(sum(10))
//10 + 10-1=19
//19 + 9-1=27
//27 +8-1=34 
//34 +7-1=40
//40 +6-1=45
//49
//
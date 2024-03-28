//JavaScript Program to Check Armstrong Number
var num=153
var orginalNum=num;
var remainder=0;
var sum=0;
while(num !=0){
    remainder=num%10;
    sum+=remainder*remainder*remainder;
    num=Math.floor(num/10)
}
if(orginalNum==sum){
    console.log("its an armstrong number");
}else{
    console.log("its not an armstrong number")
}
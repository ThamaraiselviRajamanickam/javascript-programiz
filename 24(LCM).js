//JavaScript Program to Find LCM
var num1 = 6
var num2 = 8
var min;
if(num1 < num2){
    min = num1
}else {
    min = num2
}

while(1){
    if(min % num1 == 0 && min % num2 == 0){
        console.log(`lcm of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++
}
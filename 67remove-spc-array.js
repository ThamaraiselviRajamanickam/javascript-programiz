//JavaScript Program to Remove Specific Item From an Array
var array=[1,2,3,4,5];
var secArray=2
var newArray=[];
for(let i=0;i<array.length;i++){
if(array[i] !== secArray){
newArray.push(array[i])
}
}
console.log(newArray)
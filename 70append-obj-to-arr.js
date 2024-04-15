//JavaScript Program to Append an Object to An Array
var arr=[1,2,3,4,5];
var obj={name:"thamarai",age:"28",gender:"female"}
// arr.push(obj);
// console.log(arr)


var index =arr.length
arr.splice(index, 0, obj);
console.log(arr)
//JavaScript Program to Check if An Object is An Array
var arr=[1,2,3,{name:"thamarai"}]
var result=Array.isArray(arr)
if(result){
    console.log("It is a array")
}else{
    console.log("it's not a array")
}
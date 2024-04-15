//JavaScript Program to Check if a Key Exists in an Object
//hasOwnProperty() syntax:obj.hasOwnProperty(prop) prop - the String name or Symbol of the property to test.
var obj={
    name:"selvi",
    age:22,
    gender:"female"
}
var key = obj.hasOwnProperty('date');
if(key){
    console.log('The key exists.');
}
else {
    console.log('The key does not exist.');
}
//JavaScript Program to Remove a Property from an Object
var person={
    name:"thamarai",
    age:28,
    gender:"female",
    message:function() {
        console.log('Hello everyone.');
    },
    marks:[1,2,34,44]
}
delete person.marks
console.log(person)
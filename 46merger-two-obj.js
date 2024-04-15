//JavaScript Program to Merge Property of Two Objects
//object 1
var person = {
    name: 'Jack',
    age:26
}

// object 2
var student = {
    gender: 'male'
}
var result=Object.assign(person,student)
console.log(result)
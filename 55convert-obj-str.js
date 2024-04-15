//JavaScript Program to Convert Objects to Strings


/*// Convert Object to String Using JSON.stringify()

const person = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result); */
var obj={
    name:"peter",
    age:21
};
var result= String(obj);
var result2=String(obj.name)
console.log(result2)
console.log(result)
console.log(typeof result)
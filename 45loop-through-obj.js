//JavaScript Program to Loop Through an Object
student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};
for(let key in student){
    var value;
    value= student[key]
    console.log(key + " - " +  value); 

}
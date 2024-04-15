//JavaScript Program to Clone a JS Object
//assign() Syntax:Object.assign(target, ...sources)
// const obj1 = { a: 1,name:"hi" };
// const obj2 = { b: 2 };
// const obj3 = { c: 3 };
// // combine all the properties of
// // obj1, obj2, obj3 into a single object
// const mergedObj = Object.assign(obj1, obj2, obj3);
// console.log(mergedObj);



var obj={
    name:"petter",
    age:22
}
 var copy=Object.assign({},obj)
 console.log(copy)
 copy.name="jhon"
 console.log(copy.name)
 console.log(obj.name)
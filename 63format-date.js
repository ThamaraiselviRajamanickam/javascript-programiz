//JavaScript Program to Format the Date
let currentDate=new Date();
let day=currentDate.getDate()
console.log(currentDate);
let month=currentDate.getMonth() + 1;
console.log(month);
let year=currentDate.getFullYear()
console.log(year)
console.log(month + '/' + day + '/' + year);
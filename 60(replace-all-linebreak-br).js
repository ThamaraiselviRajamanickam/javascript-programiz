//JavaScript Program to Replace All Line Breaks with <br>
var str = `I am Learning JavaScript.
JavaScript is fun.
JavaScript is easy.`;

const result = string.replace(/(\r\n|\r|\n)/g, '<br>');
//const result = string.split('\n').join('<br>');

console.log(result);
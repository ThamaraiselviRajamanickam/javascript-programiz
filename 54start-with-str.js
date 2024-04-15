//JavaScript Program to Check if a String Starts With Another String
var str="hello world";
var toCheckStr="he"
if(str.startsWith(toCheckStr)){
   console.log('The string starts with "he".');
}
else {
    console.warn(`The string does not starts with "he".`);
}
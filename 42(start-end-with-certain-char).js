//JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
var str="javascrip"
if(str.startsWith('j') && str.endsWith('t')){
    console.log("The string start with j and end with t")
}else if(str.startsWith("j")){
    console.log("the string start with j does not end with t")
}else if(str.endsWith("t")){
    console.log("the string does not start with j but end with t")
} else {
    console.log('The string does not start with j and does not end with t');
}
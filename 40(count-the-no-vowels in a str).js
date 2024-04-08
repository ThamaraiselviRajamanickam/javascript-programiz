//JavaScript Program to Count the Number of Vowels in a String
var str="hello";
var vowels=["a","e","i","o","u"];
var count=0;
// for(var i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         count++;
//         }
// }
// console.log(count)
for(let i=0;i<str.length;i++){
    for(let j=0;j<vowels.length;j++){
        if(vowels[j]==str[i]){
            count++;
        }
    }
}console.log(count)
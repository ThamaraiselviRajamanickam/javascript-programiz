//JavaScript Program to Check the Number of Occurrences of a Character in the String
var str="jaaavascript";
var letter="i"
var count=0;
for(i=0;i<str.length;i++){
    for(j=0;j<letter.length;j++){
        if(letter[j]==str[i]){
            count++;
        }
    }
}console.log(count)
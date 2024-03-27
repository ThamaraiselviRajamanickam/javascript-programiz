//JavaScript Program to Solve Quadratic Equation
//discriminant=b*b-4*a*c

var root1;
var root2;
var a=1;
var b=-6;
var c=9;
var d=b*b-4*a*c;
if(d>0){
    root1=-b+Math.sqrt(d)/2*a;
    root2=-b-Math.sqrt(d)/2*a;
    console.log(`The roots of quadratic equation are ${root1} and ${root2} are  real and different.`);
}
else if(d==0){
    root1=root2=-b/2*a;
    console.log(`The roots of quadratic equation are ${root1} and ${root2} are  real and equal.`);

}
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-d) / (2 * a)).toFixed(2);
    console.log(
        `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
      );
    
}
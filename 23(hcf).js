//JavaScript Program to Find HCF or GCD
var number1 = 60;
var number2 = 72;
var hcf;
for (var i = 1; i <= number1 && i <= number2; i++) {
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
    console.log(hcf)
  }
}
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

//JavaScript Program to Check Prime Number
var num = 3;
var isprime = true;
if (num == 1) {
  console.log("1is not prime compsite number");
} else if (num > 1) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      isprime = false;
    }
  }
}
if (isprime == true) {
  console.log("is a prime numebr");
} else {
  console.log("is not a prime number");
}



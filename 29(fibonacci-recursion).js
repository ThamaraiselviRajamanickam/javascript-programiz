//JavaScript Program to Display Fibonacci Sequence Using Recursion
/*Recursion : when a fun call itself,
,contains one base case and modify phaameter.
syntax:
function recurse() {
    // function code
    recurse();
    // function code
}

recurse();
 */
function fibonacci(num) {
    if (num < 2) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

var number = 10;
for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
}

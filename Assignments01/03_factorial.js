// Do not rename it, use this as input for your program.
// While testing we will change its value.
const n = 10;
// print factorial of n.
// Do not print anything else. Printing more than one output or printing anything other than factorial might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let factorial = 1;

for(let term=1 ; term <= n ; term++){
        factorial = factorial * term;
}
console.log(factorial);

//test cases     output
//1                 1
//3                 6   
//0                 1   
//7                 5040
//2                 2   
//9                 362880
//10                3628800
//15                1307674368000
//4                 24
//6                 720

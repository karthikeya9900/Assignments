// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 15;
// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let count = n;
let previous = 0;
let current = 1;
let next = 0;

while( count >= 1 ){
    next = current + previous;
    previous = current;
    current = next;
    count = count - 1;
}

console.log( current - previous );

/* test cases   output               
1               0
3               1
4               2
2               1
8               13              
10              34
15              377  */
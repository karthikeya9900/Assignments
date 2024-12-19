// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 1;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
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
    console.log( current - previous );
}

//test cases
//0
//1
//2
//4
//8
//9
//16
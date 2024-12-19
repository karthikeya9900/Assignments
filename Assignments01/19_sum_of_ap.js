// Do not rename a, d or n, use them as input for your program.
// While testing we will change their values.
const a = 0;
const d = 0;
const n = 0;
// Print the sum of first n terms of an AP where a is the first term and d is the common difference.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let sumOfAp = 0;
let lastTerm = a;

for(let noOfTerms = n ; noOfTerms > 0 ; noOfTerms --){
    sumOfAp = sumOfAp + lastTerm;
    lastTerm = lastTerm + d;
}

console.log(sumOfAp);

/*test cases   output
6 3 5           60
6 3 0           0
6 0 5           30
0 3 6           45
0 0 0           0   */
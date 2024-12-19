// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 12;
const b = 18;
// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let dividend = a;
let divisor = b;
let hcf = 0;
let hcfFound = false;

while (!hcfFound) {
    if (b == 0) {
        hcfFound = true;
        hcf = a;
    }

    if (dividend % divisor == 0) {
        hcf = divisor;
        hcfFound = true;
    }

    let remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
}

console.log(hcf);

/*   test cases   output
0 0                 0
0 4                 4
4 0                 4
6 3                 3
3 2                 1
1 7                 1
7 2                 1
10 10               10  */
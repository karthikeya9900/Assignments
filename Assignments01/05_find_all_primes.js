// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 1;
const endOfRange = 50;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const start = startOfRange;
const end = endOfRange;

for (let num = start; num <= end; num++) {

    let divisor = 1;
    let noOfFactors = 0;

    while (divisor <= num) {
        if ((num % divisor) == 0) {
            noOfFactors = noOfFactors + 1;
        }
        divisor = divisor + 1;
    }

    if (noOfFactors == 2) {
        console.log(num);
    }
}

//test cases   output
//1,10           2 3 5 7
//2,2            2
//1,1            no numbers
//0,1            no numbers
//7,7            7
//9,20            11 13 17 19
//5,100
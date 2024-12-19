// Do not rename a and b, use them as input for your program.
// a and b will be natural numbers.
// While testing we will change their values.
const a = 4;
const b = 0;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let lcm = 0;

if (b != 0) {
    lcm = a;
    while (lcm % b != 0) {
            lcm = lcm + a;
    }
}

console.log(lcm);

/*   test cases   output
0 0                 0
0 4                 0
4 0                 0
6 3                 6
3 2                 6
1 7                 7
7 2                 14
10 10               10  */
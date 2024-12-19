// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 12;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let decimalNumber = a;

if (decimalNumber == 0) {
    console.log(0);

} else {

    while (decimalNumber > 0) {
        let bit = decimalNumber % 2;
        console.log(bit);
        decimalNumber = decimalNumber - bit;
        decimalNumber = decimalNumber / 2;
    }
}

//test cases
//12
//19
//0
//1
//9
//5
//8
//100
//101
//656
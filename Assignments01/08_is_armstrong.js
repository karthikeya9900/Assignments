// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 1634;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let number = a;
let finalSum = 0;
let noOfDigits = 0;

while (number > 0) {
    number = number - (number % 10);
    number = number / 10;
    noOfDigits = noOfDigits + 1;
}

number = a;

while (number > 0) {
    let unitsDigit = number % 10;
    number = number - unitsDigit;
    finalSum = finalSum + (unitsDigit ** noOfDigits);
    number = number / 10;
}

if (a == 0) {
    console.log(true);
} else {
    if (a == finalSum) {
        console.log(true);
    }
}

if (a !== finalSum) {
    console.log(false);

}

//test cases   output
//0             true
//1             true    
//153           true    
//1634          true    
//164           false   
//15            false
//27            false
//33            false
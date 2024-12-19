// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 1441;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let number = a + "";
let noOfDigits = number.length;
console.log(noOfDigits);
let currentDigit = 0;
let reverse = 0;
while(currentDigit < noOfDigits){
    let currentDigitValue = + number[currentDigit];
    reverse = reverse * 10;
    reverse = reverse + currentDigitValue;
    console.log(reverse)
    currentDigit = currentDigit + 1;
}

if( a === reverse ){
    console.log( true )

}else{
    console.log( false )
}

/*test cases  output
0               true 
1               true
2               true
12              false
21              false
121             true
133             false
331             false
765             false
6262            false*/
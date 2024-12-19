// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 6576;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let noOfFactors = 0;
let divisor = 1;

while( divisor <= a){
    
    if(( a % divisor ) == 0){
        noOfFactors = noOfFactors + 1;
    }

    divisor = divisor + 1;
}
if( noOfFactors == 2){
    console.log(true);

}else{
    console.log(false);
}
    /* test cases     output
    0                   false
    1                   false
    2                   true
    4                   false
    5                   true
    45                  false
    78                  false
    23                  true
    213                 false
    6576                false
    */

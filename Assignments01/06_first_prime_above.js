// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 16;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let nextPrimeFound = false;
let checkingNumber = a + 1 ;

while( nextPrimeFound == false ){
    let divisor = 1 ;
    let noOfFactors = 0;
    
    while( divisor <= checkingNumber ){
        if(( checkingNumber % divisor ) == 0 ){
            noOfFactors = noOfFactors + 1;
        }
        divisor = divisor + 1; 
    }

    if( noOfFactors == 2){
        console.log( checkingNumber );
        nextPrimeFound = true;
    }
    else{
        checkingNumber = checkingNumber + 1;
    }
}

//test cases   output
//13            17
//14            17  
//17            19
//0             2   
//1             2       
//9             11  
//7             11
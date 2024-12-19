
// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 273;
// Print the square root of a
// Printing more than one output or printing anything other than square root might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let squareValue = 1;
let squareRootFound = false;
let squareRootNumber = 1;

while(!squareRootFound){

    squareValue = squareRootNumber * squareRootNumber; 

    if(a < squareValue ){
        squareRootFound = true;
        console.log(squareRootNumber - 1)
    
    } else {
        squareRootNumber = squareRootNumber + 1;
    }
}

/* test cases        output
0                       0
1                       1   
3                       1       
4                       2
5                       2
7                       2
9                       3
10                      3
16                      4
14                      3   
65                      8
823                     28
273                     16    */
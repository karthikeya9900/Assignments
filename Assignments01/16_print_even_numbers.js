// Do not rename startOfTheRange, endOfTheRange, use them as input for your program.
// While testing we will change their values.
const startOfTheRange = 4;
const endOfTheRange = 16;
// Print all the even numbers between startOfTheRange and endOfTheRange (both inclusive)
// For example, if startOfTheRange = 1 and endOfTheRange = 10, then the output should be
// 2
// 4
// 6
// 8
// 10
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let start=startOfTheRange;
let end=endOfTheRange;
let number=start;

while(number <= end ){

    if( number % 2  == 0 ){
        console.log(number);
    }

    number = number + 1;
}

/* test cases    output
1 10                2 4 6 8 10
2 2                 2
3 3                 do not prints anything
1 2                 2
0 0                 0
4 16                4 6 8 10 12 14 16   */
// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a =2;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let number = a;
let factorValue = 2;

while(number > 1){
    if(number % factorValue == 0){
        number = number / factorValue;
        console.log(factorValue);

    }else{
        factorValue = factorValue + 1 ;
    }
}

/* test cases    output
4765            5,953
20              2,2,5     
45              3,3,5
67              67
37              37
273             3,7,13
648             2,2,2,3,3,3,3
1               no factors
2               2          */
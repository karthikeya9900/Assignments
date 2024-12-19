// Do not rename year, use it as input for your program.
// year will be a natural number.
// While testing we will change its value.
const year = 2022;
// Print true if the year is a leap year otherwise print false.
// Printing more than one output or printing anything other than leap year or not leap year might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

if( year % 100 == 0 ){
    console.log( year % 400 == 0 );

} else {
    console.log( year %4 == 0 );
}

/* test cases   output
2008            true
2004            true
2000            true
296             true
1700            false
1600            true
1920            true
2022            false   */
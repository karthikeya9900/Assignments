// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'kbdhdgaejnjcw';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let vowelsCount = 0;
const vowels = "aAeEiIoOuU";

for (let index = 0; index < string.length; index++) {
    let vowelsIndex = 0;

    while (vowelsIndex < 10) {
        if (string[index] === vowels[vowelsIndex]) {
            vowelsCount += 1;
            break;
        }
        
        vowelsIndex++;
    }
}

console.log(vowelsCount);
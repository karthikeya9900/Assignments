// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = '   y      1uy r   ';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let wordsCount = 0;
const SPACE = " ";

wordsCount = string[0] !== " " && string.length > 0 ? wordsCount + 1 : 0;

for (let index = 1; index < string.length; index++) {
    const isLastCharSpace = string[index - 1] === SPACE;
    const isCurrentCharSpace = string[index] !== SPACE;

    if (isLastCharSpace && isCurrentCharSpace) {
        wordsCount = wordsCount + 1;
    }
}

console.log(wordsCount);
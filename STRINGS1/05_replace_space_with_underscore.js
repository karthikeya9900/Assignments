// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "helllo step 1 0 ";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let underscoredSpaces = "";

for (let index = 0; index < string.length; index++) {
    const SPACE = " ";
    const UNDERSCORE = "_";
    const nextCharacter = string[index] === SPACE ? UNDERSCORE : string[index];
    underscoredSpaces += nextCharacter;
}

console.log(underscoredSpaces);
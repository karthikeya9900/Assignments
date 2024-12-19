// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "dbhf vbh";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let singleSpacedString = "";
const SPACE = " "; 

if (string.length > 0) {
    singleSpacedString = singleSpacedString + string[0];
}

for (let index = 1; index < string.length; index++) {
    const isLastCharSpace = string[index - 1] === SPACE;
    const isCurrentCharSpace = string[index] === SPACE;

    if (!(isLastCharSpace && isCurrentCharSpace)) {
        singleSpacedString += string[index];
    }
}

console.log(singleSpacedString);
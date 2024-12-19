// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "   hfdsuffcj   fhudhcfcbj jj jj      ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let strippedString = "";
let start = 0;
let end = 0;
const SPACE = " ";

while (string[start] === SPACE) {
    start++;
}

end = (string.length - 1);

while (string[end] === SPACE) {
    end--;
}

for (let index = start; index <= end; index++) {
    strippedString = strippedString + string[index];
}

console.log(strippedString);
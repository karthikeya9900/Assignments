// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "hello everyone this is a statement ";
const start = -5;
const end = 0;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

// string = "hello" , start = 0 , end = 4 , substring = "hello"
// string = "hello everyone " , start = -5 , end = 20 , substring = "hello everyone "
// string = "hello everyone good morinig " , start = -5 , end = -2 , substring = ""
// string = "this is a statement " , start = 3 , end = 9 , substring = "s is a "
// string = "this is a statement ", start = 0 , end = 8 , substring = "this is a"
// string = "this is a statement ", start = 0 , end = 1 , substring = "th "
// string = "this is a statement ", start = 7 , end = 0 , substring = no output
// string = "this ", start = -5 , end = 20 , substring = "this "

let subString = "";
const lastIndex = string.length - 1;
const startingIndex = start < 0 ? 0 : start;
const endingIndex = end > lastIndex ? lastIndex : end;

for (let index = startingIndex; index <= endingIndex; index++) {
    subString += string[index];
}

console.log(subString);
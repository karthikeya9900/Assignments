// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "sudfiufnshfuun";
const subString = "huhj";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

//test cases and expected output
//string = "this is a statement is a " substring = "is" noOfoccurnces = 3           done
//string = "this is a statement is a " substring = "" noOfoccurnces = 0             done 
//string = "this is a statement is a " substring = " " noOfoccurnces = 7            done 
//string = "this is a statement is a " substring = " is" noOfoccurnces = 2          done
//string = "this is a statement is a " substring = "ent" noOfoccurnces = 1          done
//string = "this ,  is a , statement is ,  a " substring = "," noOfoccurnces = 3    done

const noOfCheckings = string.length - (subString.length - 1);
let stringIndex = 0;
let noOfOccurences = 0;
let noOfOccurencesFound = false;

if (subString === "") {
    noOfOccurencesFound = true;
}
if (!noOfOccurencesFound) {
    for (let iterationNumber = 0; iterationNumber < noOfCheckings; iterationNumber++) {

        let checkingString = "";

        for (let checkingStringIndex = 0; checkingStringIndex < subString.length; checkingStringIndex++) {
            checkingString += string[stringIndex + checkingStringIndex];
        }

        if (subString === checkingString) {
            noOfOccurences++;
        }

        stringIndex++;
    }
}
console.log(noOfOccurences);

//console.log(string.length , "stringlength");
//console.log(noOfloopsInFor , "noofloopsinfor");

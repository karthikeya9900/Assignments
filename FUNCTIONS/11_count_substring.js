/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function slice(index, endIndex, string) {
  let slicedString = "";

  for (index; index <= endIndex; index++) {
    slicedString += string[index];
  }

  return slicedString;
}

function countOccurences(newSubString, subString, numberOfOccurences) {
  if (newSubString === subString) {
    numberOfOccurences++;
  }

  return numberOfOccurences;
}

function occurrences(string, subString) {
  if (subString === "") {
    return 0;
  }

  let occurenceCount = 0;
  const defineCheckingCount = string.length - (subString.length - 1);

  for (let index = 0; index < defineCheckingCount; index++) {
    const endIndex = (index + subString.length) -1;
    const newSubString = slice(index, endIndex, string);
    occurenceCount = countOccurences(newSubString, subString, occurenceCount);
  }

  return occurenceCount;
}

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, substring, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message =  substring  + " occured in " + string +" \n ";
  
  message += " is expected is "  message += expected + "\" and sliced text  is \"";
  message += actual + "\" \n "

  printMessage(mark + message);
}

function testSlice(text, start, end, expected) {
  const actual = slice(text, start, end);

  generateMesage(text, start, end, actual, expected);
}

// function testAll() {
//   testSlice("hello world", 2, 7, "llo wo");
//   testSlice("hello world", 0, 20, "hello world");
//   testSlice("hello world", -10, 9, "hello worl");
//   testSlice("hello world", 8, 8, "r");
//   testSlice("hello world", -10, -5, "");
// }

// testAll();
function testAll() {
  prepareMessage("hello world", "ell", 1);
  prepareMessage("hello world", "owo", 0);
  prepareMessage("hello world", "l", 3);
  prepareMessage("hello world", " ", 1);
  prepareMessage("hello world", "", 0);
  prepareMessage("hello world hello world", "hello", 2);
  prepareMessage("hello world", "hai", 0);
  prepareMessage("hello", "hello", 1);
}

// testAll();
console.log(occurrences("hello", "hello"));
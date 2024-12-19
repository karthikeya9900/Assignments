/*
  Implement the below function that tells if a string is 
  substring of another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function createNewSubstring(string, stringIndex, subString) {
  let newSubstring = "";
  let subStringIndex = 0;

  while (subStringIndex < subString.length) {
    const index = stringIndex + subStringIndex;
    newSubstring = newSubstring + string[index];

    if (string[index] !== newSubstring[subStringIndex]) {
      return newSubstring;
    }
    subStringIndex++;
  }

  return newSubstring;
}

function countNumberOfChecks(string, subString) {
  return string.length - (subString.length - 1);
}

function isSubstringFound(string, subString) {
  const numberOfChecks = countNumberOfChecks(string, subString);

  for (let stringIndex = 0; stringIndex < numberOfChecks; stringIndex++) {
    const newSubstring = createNewSubstring(string, stringIndex, subString);

    if (newSubstring === subString) {
      return true;
    }
  }

  return false;
}

function isSubstring(string, subString) {
  if (subString === "") {
    return false;
  }

  return isSubstringFound(string, subString);
}

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, subString, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " isSubstring of \"" + subString + "\" for  " + " \n ";
  
  message += " the string  \"" + string + "\" is " + " \n \"";
  message += expected + "\" and actual is \"";
  message += actual + "\" \n "

  printMessage(mark + message);
}

function testIsSubstring(string, subString, expected) {
  const actual = isSubstring(string, subString);
  
  generateMesage(string, subString, actual, expected);
}

function testAll() {
  testIsSubstring("hello world", "ell", true);
  testIsSubstring("hello world", "owo", false);
  testIsSubstring("hello world", "a", false);
  testIsSubstring("hello world", "", false);
  testIsSubstring("hello world", "H", false);
  testIsSubstring("hello world", "llo world", true);
  testIsSubstring("hello world", "d", true);
}

testAll();
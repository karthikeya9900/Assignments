/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  let index = 0;

  while (index < text.length) {
    if (text[index] === target) {
      return index;

    }
    index++;
  }

  return -1;
}

// function testFindIndex(text, target, expected) {    done 
// todo: move the testing part to a separate function
// todo: refactor prepareMessage - rename segment variables, rephrase the test result message, final message = mark + segments or declare message and keep appending   done 

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(text, target, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";

  let message = " index of \"" + target + "\" in " + " \n \"";
  message += text + "\" is expected to be " + expected + " \n ";
  message += " and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testFindIndex(text, target, expected) {
  const actual = findIndex(text, target);

  generateMesage(text, target, actual, expected);
}

function testAll() {
  testFindIndex("hello world", "e", 1);
  testFindIndex("hello world", " ", 5);
  testFindIndex("hello world", "a", -1);
  testFindIndex("hello world", "", -1);
  testFindIndex("hello world", "d", 10);
  testFindIndex("hello world", "z", -1);
  testFindIndex("hello world", "h", 0);
}

testAll();
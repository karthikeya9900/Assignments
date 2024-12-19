/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function max(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function slice(text, start, end) {
  let slicedString = "";
  const startingIndex = max(start, 0);
  const lastIndex = min(text.length - 1, end);

  for (let index = startingIndex; index <= lastIndex; index++) {
    slicedString += text[index];
  }

  return slicedString;
}

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(text, start, end, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " sliced text of \"" + text + "\" is " + " \n ";
  
  message += " from index " + start + " to index " + end + " is " + " \n \"";
  message += expected + "\" and sliced text  is \"";
  message += actual + "\" \n "

  printMessage(mark + message);
}

function testSlice(text, start, end, expected) {
  const actual = slice(text, start, end);

  generateMesage(text, start, end, actual, expected);
}

function testAll() {
  testSlice("hello world", 2, 7, "llo wo");
  testSlice("hello world", 0, 20, "hello world");
  testSlice("hello world", -10, 9, "hello worl");
  testSlice("hello world", 8, 8, "r");
  testSlice("hello world", -10, -5, "");
}

testAll();
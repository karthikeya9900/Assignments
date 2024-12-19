/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false
    endsWith('hello world', 'world') => false
  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function slice(start, end, string) {
  let slicedString = "";

  for (let index = start; index <= end; index++) {
    slicedString += string[index];
  }

  return slicedString;
}

function endsWith(string, substring) {
  if (substring === "") {
    return false;
  }

  const start = string.length - substring.length;
  const end = string.length - 1;
  const slicedString = slice(start, end, string);

  if (slicedString === substring) {
    return true;
  }

  return false;
}

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, substring, expected, actual) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " the text \"" + string + "\" is " + " \n ";

  message += " ends with  \"" + substring + "\" is \"";
  message += expected + "\"\n  and actual is \"";
  message += actual + "\" \n "

  printMessage(mark + message);
}

function testEndsWith(string, substring, expected) {
  const actual = endsWith(string, substring);

  generateMesage(string, substring, expected, actual);
}

function testAll() {
  testEndsWith("hello world", "rld", true);
  testEndsWith("hello world", "owo", false);
  testEndsWith("hello world", "a", false);
  testEndsWith("hello world", "", false);
  testEndsWith("hello world", " ", false);
  testEndsWith("hello world", "d", true);
}

testAll();
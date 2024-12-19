/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getCharacter(targetChar, match, replacement) {
  const isMatchFound = targetChar === match;
  
  return isMatchFound ? replacement : targetChar;
}

function replace(text, match, replacement) {
  let replacedString = "";
  
  for (let index = 0; index < text.length; index++) {
    const currentChar = getCharacter(text[index], match, replacement);
    replacedString = replacedString + currentChar;
  }

  return replacedString;
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(text, match, replacement, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " In the \"" + text + "\" text " + " \n " + " \"";
  
  message += match + "\" replaced with \"" + replacement;
  message += "\" \n " + " and replaced text is " + actual;

  printMessage(mark + message);
}

function testReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  generateMesage(text, match, replacement, actual, expected);
}

function testAll() {
  testReplace("hello world", "l", "r", "herro worrd");
  testReplace("hello world", " ", "r", "hellorworld");
  testReplace("hello world", "", "r", "hello world");
  testReplace("hello world", "-", " ", "hello world");
  testReplace("", "h", "@", "");
}

testAll();
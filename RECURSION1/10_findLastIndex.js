function findindexOf(char, index, string) {
  if (index === 0) {
    return - 1;
  }

  return string[index] === char ? index : findindexOf(char, index - 1, string);
}

function findIndex(string, char) {
  if (char === "" || string === "") {
    return - 1;
  }

  return findindexOf(char, string.length - 1, string);
}

function findLastIndex(string, char) {
  return findIndex(string, char);
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, char, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " the last index of  \"" + char + "\"\nin string " + "'";

  message += string + "'" + " is " + expected + "\n and actual is " + actual;

  printMessage(mark + message);
}

function testFindLastIndex(string, char, expected) {
  const actualResult = findLastIndex(string, char);

  generateMesage(string, char, actualResult, expected);
}

function testAll() {
  testFindLastIndex("hello", "l", 3);
  testFindLastIndex("heloe", "e", 4);
  testFindLastIndex("", "hello", -1);
  testFindLastIndex("hello world ", "o", 7);
  testFindLastIndex("hello world ", " ", 11);
  testFindLastIndex("hello world", "l", 9);
  testFindLastIndex(" hello ", "A", -1);
}

testAll();
function findindexOf(char, index, string) {
  if (index === string.length) {
    return - 1;
  }

  return string[index] === char ? index : findindexOf(char, index + 1, string);
}

function findIndex(string, char) {
  if (char === "" || string === "") {
    return - 1;
  }

  return findindexOf(char, 0, string);
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
  let message = " the index of  \"" + char + "\"\nin string " + "'";

  message += string + "'" + " is " + expected + "\n and actual is " + actual;

  printMessage(mark + message);
}

function testFindLastIndex(string, char, expected) {
  const actualResult = findIndex(string, char);

  generateMesage(string, char, actualResult, expected);
}

function testAll() {
  testFindLastIndex("hello", "l", 2);
  testFindLastIndex("helo", "", -1);
  testFindLastIndex("", "hello", -1);
  testFindLastIndex("hello world", " ", 5);
  testFindLastIndex("hello world", "a", -1);
  testFindLastIndex(" hello ", "A", -1);
  testFindLastIndex("hello world", "d", 10);
}

testAll();
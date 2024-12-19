function extractReverse(string, index) {
  if (index === 0) {
    return string[0];
  }

  return string[index] + extractReverse(string, index - 1);
}

function reverse(string) {
  if (string.length === 0) {
    return "";
  }

  return extractReverse(string, string.length - 1);
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " revrese of " + string + " \n is  expected to be ";

  message += "'" + expected + "'" + "\n and actual is ";
  message += "'" + actual + "'";
  
  printMessage(mark + message);
}

function testReverse(string, expected) {
  const actualResult = reverse(string);

  generateMesage(string, actualResult, expected);
}

function testAll() {
  testReverse("hello", "olleh");
  testReverse("", "");
  testReverse("a", "a");
  testReverse("hi", "ih");
  testReverse(" hello ", " olleh ");
}

testAll();
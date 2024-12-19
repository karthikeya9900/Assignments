function slice(string, start, end) {
  if (start === end) {
    return string[start];
  }

  return string[start] + slice(string, start + 1, end);
}

function isSubStringFound(string, otherString, index) {
  if (slice(string, index, index + otherString.length - 1) === otherString) {
    return true;
  }

  if (index > string.length - (otherString.length - 1)) {
    return false;
  }

  return isSubStringFound(string, otherString, index + 1);
}

function isSubString(string, otherString) {
  if (string === "" || otherString === "") {
    return false;
  }

  return isSubStringFound(string, otherString, 0);
}
function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, otherString, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " is substring of " + otherString + " \n in string ";

  message += string + "\n expected is " + expected + "\n and actual is ";
  message += "'" + actual + "'";

  printMessage(mark + message);
}

function testIsSubString(string, otherString, expected) {
  const actualResult = isSubString(string, otherString);

  generateMesage(string, otherString, actualResult, expected);
}

function testAll() {
  testIsSubString("hello world", "llo", true);
  testIsSubString("", "hel", false);
  testIsSubString("hello", "", false);
  testIsSubString("hello world", "abc", false);
  testIsSubString("hello world", "ld", true);
  testIsSubString("hello world", "llo wo", true);
}

testAll();
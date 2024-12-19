function extractStringToNumber(string, index, power) {
  if (index >= string.length) {
    return 0;
  }
  
  // todo :- rename this constant
  const leftMostValue = string[index] * (10 ** power);

  return leftMostValue + extractStringToNumber(string, index + 1, power - 1);
}

function stringToNumber(string) {
  if (string[0] === "-") {
    return -extractStringToNumber(string, 1, string.length - 2);

  }

  return extractStringToNumber(string, 0, string.length - 1);
}

//---------- testing section 

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " string to number of " + string + " \n is  expected to be ";

  message += expected + "\n and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testStringToNumber(string, expected) {
  const actualResult = stringToNumber(string);

  generateMesage(string, actualResult, expected);
}

function testAll() {
  testStringToNumber("1234", 1234);
  testStringToNumber("01234", 1234);
  testStringToNumber("01034", 1034);
  testStringToNumber("01234", 1234);
  testStringToNumber("-1234", -1234);
  testStringToNumber("00000001", 1);
  testStringToNumber("0000000", 0);
  testStringToNumber("12", 12);
  testStringToNumber("6", 6);
  testStringToNumber("01", 1);
  testStringToNumber("", NaN);
  testStringToNumber("a", NaN);
}

testAll(); 
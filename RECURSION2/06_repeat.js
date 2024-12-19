function repeat(string, noOfTimes) {
  if (noOfTimes === 0) {
    return "";
  }

  return string + repeat(string, noOfTimes - 1);
}

//---------- testing section 

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, noOfTimes, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " repeating of " + string + " \n  for " + noOfTimes;

  message += " times is " + " \n  expected is " + expected;
  message += " \n  and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testRepeat(string, noOfTimes, expected) {
  const actualResult = repeat(string, noOfTimes);

  generateMesage(string, noOfTimes, actualResult, expected);
}

function testAll() {
  testRepeat("hello", 0, "");
  testRepeat("hello", 1, "hello");
  testRepeat("hello", 2, "hellohello");
  testRepeat("hello", 4, "hellohellohellohello");
  testRepeat("hel", 10, "helhelhelhelhelhelhelhelhelhel");
}

testAll();
function remainder(dividend, divisor) {
  if (divisor > dividend) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(number1, number2, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " remainder of " + number1 + " / " + number2 + " \n is ";

  message += expected + " and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testRemainder(number1, number2, expected) {
  const actualResult = remainder(number1, number2);

  generateMesage(number1, number2, actualResult, expected);
}

function testAll() {
  testRemainder(10, 10, 0);
  testRemainder(10, 2, 0);
  testRemainder(3, 10, 3);
  testRemainder(10, 4, 2);
  testRemainder(10, 3, 1);
}

testAll();
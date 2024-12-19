function quotient(dividend, divisor) {
  if (divisor > dividend) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
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
  let message = " quotient of " + number1 + " / " + number2 + " \n is ";
  message += expected + " and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testQuotient(number1, number2, expected) {
  const actualResult = quotient(number1, number2);
  generateMesage(number1, number2, actualResult, expected);
}

function testAll() {
  testQuotient(10, 10, 1);
  testQuotient(10, 2, 5);
  testQuotient(3, 10, 0);
  testQuotient(10, 4, 2);
  testQuotient(10, 3, 3);
}

testAll();

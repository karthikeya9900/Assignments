function multiply(multiplier, multiplicand) {
  if (multiplier === 0 || multiplicand === 0) {
    return 0;
  }

  return multiplier + multiply(multiplier, multiplicand - 1);
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
  let message = " product of " + number1 + " & " + number2 + " \n is ";
  message += expected + " and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testMultiply(number1, number2, expected) {
  const actualResult = multiply(number1, number2);
  generateMesage(number1, number2, actualResult, expected);
}

function testAll() {
  testMultiply(10, 10, 100);
  testMultiply(0, 10, 0);
  testMultiply(10, 0, 0);
  testMultiply(0, 0, 0);
  testMultiply(1, 100, 100);
  testMultiply(8, 456, 3648);
}

testAll();
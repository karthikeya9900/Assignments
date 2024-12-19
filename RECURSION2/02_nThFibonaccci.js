function nthFibonacciTerm(nthTerm) {
  if (nthTerm < 3) {
    return nthTerm === 1 ? 0 : 1;
  }

  return nthFibonacciTerm(nthTerm - 1) + nthFibonacciTerm(nthTerm - 2);
}

// ------------ testing section 

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(nthTerm, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = nthTerm + " term of fibonacci is ";;

  message += " \n expected to be " + expected;
  message += " \n and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testNthFibonacciTerm(nthTerm, expected) {
  const actualResult = nthFibonacciTerm(nthTerm);

  generateMesage(nthTerm, actualResult, expected);
}

function testAll() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(8, 13);
  testNthFibonacciTerm(10, 34);
  testNthFibonacciTerm(20, 4181);
  // testNthFibonacciTerm(100, 4181);
}

testAll();
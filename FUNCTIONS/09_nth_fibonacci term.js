/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(number) {
  let currentTerm = 0;
  let nextTerm = 1;

  for (let iterator = 1; iterator < number; iterator++) {
    const nextOfNextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = nextOfNextTerm;
  }

  return currentTerm;
}

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(number, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " " + number + " term of fibonacci is " + " \n ";
  
  message += " expected to be " + expected + " \n ";
  message += " and actual is " + actual + " \n ";
  
  printMessage(mark + message);
}

function testNthFibonacciTerm(number, expected) {
  const actual = nthFibonacciTerm(number);
  
  generateMesage(number, actual, expected);
}

function testAll() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(10, 34);
}

testAll();

//0 1 1 2 3 5 8 13 21 34 55 89
//1 2 3 4 5 6 7 8  9  10 11 12 13 14 15 
// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function fibonacci(nthTerm) {
  const fibonacciArray = [];
  //todo :rename this variables
  let previousOfPreviousTerm = - 1;
  let previousTerm = 1;

  for (let index = 0; index < nthTerm; index++) {
    fibonacciArray[index] = previousOfPreviousTerm + previousTerm;
    previousOfPreviousTerm = previousTerm;
    previousTerm = fibonacciArray[index];
  }

  return fibonacciArray;
}

function reverse(array) {
  const reversedArray = [];
  const lastIndex = array.length - 1;
  
  for (let index = 0; index < array.length; index++) {
    reversedArray[index] = array[lastIndex - index];
  }

  return reversedArray;
}

function reverseFibonacci(nthTerm) {
  const fibonacciSeries = fibonacci(nthTerm);
  const reverseOfFibonacciSeries = reverse(fibonacciSeries);

  return reverseOfFibonacciSeries;
}

// ----------------------------------- testing section 
function getMark(expected, actual) {
  return areEqual(expected, actual) ? "✅" : "❌";
}

function generateMesage(nthTerm, actual, expected) {
  const mark = getMark(expected, actual);
  const inputPart = "\n input is:" + nthTerm;
  const expectedPart = "\n expected to be: " + expected;
  const actualPart = "\n actual is: " + actual;

  return mark + inputPart + expectedPart + actualPart + "\n";
}

function testReverseFibonacci(nthTerm, expected) {
  const actual = reverseFibonacci(nthTerm);

  console.log(generateMesage(nthTerm, actual, expected));
}

function testAll() {
  testReverseFibonacci(1, [0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
  testReverseFibonacci(4, [2, 1, 1, 0]);
  testReverseFibonacci(5, [3, 2, 1, 1, 0]);
  testReverseFibonacci(6, [5, 3, 2, 1, 1, 0,]);
}

testAll();
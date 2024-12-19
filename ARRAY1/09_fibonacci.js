// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
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
  //todo: rename this variables 
  let previousOfPreviousTerm = -1;
  let previousTerm = 1;

  for (let index = 0; index < nthTerm; index++) {
    fibonacciArray[index] = previousOfPreviousTerm + previousTerm;
    previousOfPreviousTerm = previousTerm;
    previousTerm = fibonacciArray[index];
  }

  return fibonacciArray;
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

function testFibonacci(nthTerm, expected) {
  const actual = fibonacci(nthTerm);

  console.log(generateMesage(nthTerm, actual, expected));
}

function testAll() {
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(4, [0, 1, 1, 2]);
  testFibonacci(5, [0, 1, 1, 2, 3,]);
  testFibonacci(6, [0, 1, 1, 2, 3, 5,]);
}

testAll();
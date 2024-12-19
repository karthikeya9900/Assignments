// Given an array of numbers return a new array containing only odd 
//elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function isOdd(number) {
  return number % 2 === 1;
}

function selectOdds(numbers) {
  const oddNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    if (isOdd(numbers[index])) {
      oddNumbers[oddNumbers.length] = numbers[index];
    }
  }

  return oddNumbers;
}

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

// ----------------------------------- testing section 
function getMark(expected, actual) {
  return areEqual(expected, actual) ? "✅" : "❌";
}

function generateMesage(array, actual, expected) {
  const mark = getMark(expected, actual);
  const inputPart = "\n input:" + array;
  const expectedPart = "\n expected to be: " + expected;
  const actualPart = "\n actual is: " + actual;

  return mark + inputPart + expectedPart + actualPart + "\n";
}

function testSelectOdds(array1, expected) {
  const actual = selectOdds(array1);

  console.log(generateMesage(array1, actual, expected));
}

function testAll() {
  testSelectOdds([], []);
  testSelectOdds([1], [1]);
  testSelectOdds([1, 2], [1]);
  testSelectOdds([1, 2, 3], [1, 3]);
  testSelectOdds([1, 2, 3, 4, 5, 6], [1, 3, 5]);
  testSelectOdds([1, 3, 5, 7, 9], [1, 3, 5, 7, 9]);
  testSelectOdds([2, 4, 6, 8, 10], []);
}

testAll();
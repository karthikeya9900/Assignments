// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
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

function filterAbove(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
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

function testFilterAbove(array, threshold, expected) {
  const actual = filterAbove(array, threshold);

  console.log(generateMesage(array, actual, expected));
}

function testAll() {
  testFilterAbove([1, 2, 3, 4, 5, 6,], 3, [4, 5, 6]);
  testFilterAbove([1, 2, 3, 4, 5], 5, []);
  testFilterAbove([10, 20, 30, 40], 10, [20, 30, 40]);
  testFilterAbove([], 5, []);
}

testAll();
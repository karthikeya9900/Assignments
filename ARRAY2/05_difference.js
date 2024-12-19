// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

function isElementNotFound(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return false;
    }
  }

  return true;
}

function findDiffernce(array1, array2) {
  const differenceArray = [];

  for (let index = 0; index < array1.length; index++) {
    const element = array1[index];

    if (isElementNotFound(array2, element)) {
      differenceArray.push(element);
    }
  }

  return differenceArray;
}

function difference(array1, array2) {
  if (array2.length === 0) {
    return array1;
  }

  return findDiffernce(array1, array2);
}

// ----------------------------------- testing section 

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

function getMark(expected, actual) {
  return areEqual(expected, actual) ? "✅" : "❌";
}

function generateMesage(array1, array2, actual, expected) {
  const mark = getMark(expected, actual);
  const inputpart = "\n inputs:" + array1 + " ####### " + array2;
  const expectedPart = "\n expected to be:" + expected;
  const actualPart = "\n actual is:" + actual;

  return mark + inputpart + expectedPart + actualPart + "\n";
}

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);

  console.log(generateMesage(array1, array2, actual, expected));
}

function testAll() {
  testDifference([], [0, 1], []);
  testDifference([5, 6, 7], [], [5, 6, 7]);
  testDifference([1, 2, 3], [], [1, 2, 3]);
  testDifference([1, 2, 3], [2, 3, 4], [1]);
  testDifference([1, 2, 3], [3, 2, 1], []);
  testDifference([1, 2, 0], [1, 2, 3, 4], [0]);
  testDifference([1, 2, 3], [4, 5], [1, 2, 3]);
}

testAll();
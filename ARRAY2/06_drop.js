// Remove first n elements from the array
// drop([1, 2, 3], 1) => [2, 3]
// drop([1, 2, 3], 4) => []
// Do not modify the original array

function drop(array, numberOfTerms) {
  const filteredArray = [];
  const startRange = numberOfTerms;

  for (let index = startRange; index < array.length; index++) {
    filteredArray.push(array[index]);
  }

  return filteredArray;
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

function generateMesage(array1, numberOfTerms, actual, expected) {
  const mark = getMark(expected, actual);
  const inputpart = "\n inputs:" + array1 + " ####### " + numberOfTerms;
  const expectedPart = "\n expected to be:" + expected;
  const actualPart = "\n actual is:" + actual;

  return mark + inputpart + expectedPart + actualPart + "\n";
}

function testDrop(array1, numberOfTerms, expected) {
  const actual = drop(array1, numberOfTerms);

  console.log(generateMesage(array1, numberOfTerms, actual, expected));
}

function testAll() {
  testDrop([1, 2, 3, 4, 5], 0, [1, 2, 3, 4, 5]);
  testDrop([], 2, []);
  testDrop([1, 2, 3], 2, [3]);
  testDrop([1, 2, 3], 1, [2, 3]);
  testDrop([1, 2, 0, 4, 5], 4, [5]);
  testDrop([1, 2, 3], 4, []);
}

testAll();
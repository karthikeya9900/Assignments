// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array

function dropLast(array, numberOfTerms) {
  const filteredArray = [];
  const endValue = array.length - numberOfTerms;

  for (let index = 0; index < endValue; index++) {
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

function testDropLast(array1, numberOfTerms, expected) {
  const actual = dropLast(array1, numberOfTerms);

  console.log(generateMesage(array1, numberOfTerms, actual, expected));
}

function testAll() {
  testDropLast([1, 2, 3, 4, 5], 0, [1, 2, 3, 4, 5]);
  testDropLast([], 2, []);
  testDropLast([1, 2, 3], 2, [1]);
  testDropLast([1, 2, 3], 1, [1, 2]);
  testDropLast([1, 2, 0, 4, 5], 4, [1]);
  testDropLast([1, 2, 3], 4, []);
}

testAll();
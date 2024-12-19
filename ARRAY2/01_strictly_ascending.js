// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] >= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

// ----------------------------------- testing section 
function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function generateMesage(array1, actual, expected) {
  const mark = getMark(expected, actual);
  const inputpart = "\n inputs:" + array1;
  const expectedPart = "\n expected to be:" + expected;
  const actualPart = "\n actual is:" + actual;

  return mark + inputpart + expectedPart + actualPart + "\n";
}

function testIsStrictlyAscending(array1, expected) {
  const actual = isStrictlyAscending(array1);

  console.log(generateMesage(array1, actual, expected));
}

function testAll() {
  testIsStrictlyAscending([], true);
  testIsStrictlyAscending([1], true);
  testIsStrictlyAscending([1, 2], true);
  testIsStrictlyAscending([1, 1], false);
  testIsStrictlyAscending([1, 2, 4, 7], true);
  testIsStrictlyAscending([1, 1, 2, 3, 4], false);
  testIsStrictlyAscending([1, 2, 3, 2], false);
  testIsStrictlyAscending([1, 2, 3, 3], false);
}

testAll();
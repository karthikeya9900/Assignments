// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

function isStrictlyDescending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] <= numbers[index + 1]) {
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

function testIsStrictlyDescending(array1, expected) {
  const actual = isStrictlyDescending(array1);

  console.log(generateMesage(array1, actual, expected));
}

function testAll() {
  testIsStrictlyDescending([], true);
  testIsStrictlyDescending([1], true);
  testIsStrictlyDescending([2, 1], true);
  testIsStrictlyDescending([1, 1], false);
  testIsStrictlyDescending([7, 4, 2, 1], true);
  testIsStrictlyDescending([6, 3, 2, 1, 1], false);
  testIsStrictlyDescending([6, 3, 2, 1, 0], true);
  testIsStrictlyDescending([4, 2, 2, 1], false);
  testIsStrictlyDescending([4, 2, 3, 1], false);
  testIsStrictlyDescending([3, 2, 1, 0], true);
}

testAll();
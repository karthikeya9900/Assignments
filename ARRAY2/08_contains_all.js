// Return true if all elements are present in the array regardless of their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function isElementNotFound(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return false;
    }
  }

  return true;
}

function containsAll(array, elements) {
  if (elements.length == 0) {
    return false;
  }

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];

    if (isElementNotFound(array, element)) {
      return false;
    }
  }

  return true;
}

// ----------------------------------- testing section 

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function generateMesage(array1, array2, actual, expected) {
  const mark = getMark(expected, actual);
  const inputpart = "\n inputs:" + array1 + " ####### " + array2;
  const expectedPart = "\n expected to be:" + expected;
  const actualPart = "\n actual is:" + actual;

  return mark + inputpart + expectedPart + actualPart + "\n";
}

function testContainsAll(array1, array2, expected) {
  const actual = containsAll(array1, array2);

  console.log(generateMesage(array1, array2, actual, expected));
}

function testAll() {
  testContainsAll([], [0, 1], false);
  testContainsAll([1, 2, 3], [1, 3, 2], true);
  testContainsAll([1, 2, 3], [1, 3, 2, 4], false);
  testContainsAll([1, 2, 3], [3, 2, 4], false);
  testContainsAll([1, 2, 0], [], false);
  testContainsAll([1, 2, 3], [4, 5], false);
}

testAll();
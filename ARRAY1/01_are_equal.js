// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
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

// ----------------------------------- testing section 
function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function generateMesage(array1, array2, actual, expected) {
  const mark = getMark(expected, actual);
  const inputpart = "\ninputs:" + "'" + array1 + "'####'" + array2 + "'";
  const expectedPart = "\nexpected to be:" + expected;
  const actualPart = "\n and actual is:" + actual;

  return mark + inputpart + expectedPart + actualPart + "\n";
}

function testAreEqual(array1, array2, expected) {
  const actual = areEqual(array1, array2);

  console.log(generateMesage(array1, array2, actual, expected));
}

function testAllForNumberInputs() {
  testAreEqual([], [], true);
  testAreEqual([], [1], false);
  testAreEqual([1], [1], true);
  testAreEqual([1], [2], false);
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual([1, 2, 3, 4], [1, 2, 3], false);
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4, 5], false);
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true);
}

function testAllforStringInputs() {
  testAreEqual([""], [""], true);
  testAreEqual(["a"], [""], false);
  testAreEqual(["a"], ["a"], true);
  testAreEqual(["a"], ["b"], false);
  testAreEqual(["a"], ["b"], false);
  testAreEqual(["a", "b", "c"], ["a", "b", "c"], true);
  testAreEqual(["a", "b", "c"], ["a", "b", "d"], false);
  testAreEqual(["a", "b", "c"], ["a", "b", "c", "d"], false);
  testAreEqual(["a", "b", "c", "e"], ["a", "b", "c"], false);
}

function testAll() {
  testAllForNumberInputs();
  testAllforStringInputs();
}

testAll();
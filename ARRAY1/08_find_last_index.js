// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters

function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

// ----------------------------------- testing section 
function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function generateMesage(array, element, actual, expected) {
  const mark = getMark(expected, actual);
  const inputPart = "\n the last index of " + element + " in " + array;
  const expectedPart = "\n expected to be: " + expected;
  const actualPart = "\n actual is: " + actual;

  return mark + inputPart + expectedPart + actualPart + "\n";
}

function testFindLastIndex(array, element, expected) {
  const actual = findLastIndex(array, element);

  console.log(generateMesage(array, element, actual, expected));
}

function testAllForNumberInputs() {
  testFindLastIndex([], 6, -1);
  testFindLastIndex([1, 9, 3, 4, 5, 6, 7, 8, 9], 9, 8);
  testFindLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 0);
  testFindLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, -1);
  testFindLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 4);
  testFindLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], "5", -1);
  testFindLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], "a", -1);
}

function tealAllForStringInputs() {
  testFindLastIndex(["e", "b", "c", "d", "e"], "e", 4);
  testFindLastIndex(["h", "w", "h", "1", "a"], "h", 2);
  testFindLastIndex(["h", "w", "s", "1", "a"], "1", 3);
  testFindLastIndex(["h", "w", "s", "1", "a"], "h", 0);
  testFindLastIndex(["h", "w", "s", "1", "a"], "k", -1);
  testFindLastIndex(["h", "w", "s", "1", "a"], "1", 3);
  testFindLastIndex(["h", "w", "s", "1", "a"], 1, -1);
}

function testAll() {
  testAllForNumberInputs();
  tealAllForStringInputs();
}

testAll();
// Given an array of numbers and a element, return the first index in the 
// array where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters

function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
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
  const inputPart = "\n the index  '" + element + "' in " + array;
  const expectedPart = "\n expected to be: " + expected;
  const actualPart = "\n actual is: " + actual;

  return mark + inputPart + expectedPart + actualPart + "\n";
}

function testFindIndex(array, element, expected) {
  const actual = findIndex(array, element);

  console.log(generateMesage(array, element, actual, expected));
}


function testAllForNumberInputs() {
  testFindIndex([], 6, -1);
  testFindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 10, -1);
  testFindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 0);
  testFindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 9, 8);
  testFindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 5, 4);
  testFindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], "a", -1);
}

function tealAllForStringInputs() {
  testFindIndex(["a", "b", "c", "d", "e"], "k", -1);
  testFindIndex(["h", "w", "s", "1", "a"], "h", 0);
  testFindIndex(["h", "w", "s", "1", "a"], "1", 3);
  testFindIndex(["h", "w", "s", "1", "a"], "a", 4);
  testFindIndex(["h", "w", "s", "1", "a"], "k", -1);
  testFindIndex(["h", "w", "s", "1", "a"], "1", 3);
  testFindIndex(["h", "w", "s", "1", "a"], 1, -1);
}

function testAll() {
  testAllForNumberInputs();
  tealAllForStringInputs();
}

testAll();
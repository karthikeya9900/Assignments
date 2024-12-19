// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
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

function reverse(array) {
  const reversedArray = [];
  const lastIndex = array.length - 1;
  
  for (let index = 0; index < array.length; index++) {
    reversedArray[index] = array[lastIndex - index];
  }

  return reversedArray;
}

// ----------------------------------- testing section 
function getMark(expected, actual) {
  return areEqual(expected, actual) ? "✅" : "❌";
}

function generateMesage(array, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  const inputPart = "input:" + array;
  const expectedPart = "\n expected to be: " + "'" + expected + "'";
  const actualPart = "\n actual: " + "'" + actual + "'";

  return mark + inputPart + expectedPart + actualPart + "\n";
}

function testReverse(array1, expected) {
  const actual = reverse(array1);

  console.log(generateMesage(array1, actual, expected));
}

function testAllForNumberInputs() {
  testReverse([], []);
  testReverse([1], [1]);
  testReverse([1, 2], [2, 1]);
  testReverse([3, 5, 9], [9, 5, 3]);
}

function testAllForStringInputs() {
  testReverse([], []);
  testReverse(["a"], ["a"]);
  testReverse(["a", "b"], ["b", "a"]);
  testReverse(["x", "y", "z"], ["z", "y", "x"]);
}

function testAll() {
  testAllForNumberInputs();
  testAllForStringInputs();
}

testAll();
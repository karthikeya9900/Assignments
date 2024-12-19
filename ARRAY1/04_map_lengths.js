// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
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

function mapLengths(words) {
  const lengthsArray = [];

  for (let index = 0; index < words.length; index++) {
    const element = words[index];

    lengthsArray[index] = element.length;
  }

  return lengthsArray;
}

// ----------------------------------- testing section 
function getMark(expected, actual) {
  return areEqual(expected, actual) ? "✅" : "❌";
}

function generateMesage(array, actual, expected) {
  const mark = getMark(expected, actual);
  const inputPart = "\n input:" + array;
  const expectedPart = "\n expected to be: " + expected;
  const actualPart = "\n actual is: " + actual;

  return mark + inputPart + expectedPart + actualPart + "\n";
}

function testMapLengths(array1, expected) {
  const actual = mapLengths(array1);

  console.log(generateMesage(array1, actual, expected));
}

function testAll() {
  testMapLengths([], []);
  testMapLengths([""], [0]);
  testMapLengths(["", "hiii"], [0, 4]);
  testMapLengths(["hello"], [5]);
  testMapLengths(["hello", "car", "aeroplane"], [5, 3, 9]);
  testMapLengths(["hello world"], [11]);
}

testAll();
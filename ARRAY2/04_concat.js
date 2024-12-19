// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

function concat(array1, array2) {
  const concatenatedArray = [];

  for (let index = 0; index < array1.length; index++) {
    concatenatedArray.push(array1[index]);
  }

  for (let index = 0; index < array2.length; index++) {
    concatenatedArray.push(array2[index]);
  }

  return concatenatedArray;
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

function generateMesage(array1, array2, actual, expected) {
  const mark = getMark(expected, actual);
  const inputpart = "\n inputs:" + array1 + " ####### " + array2;
  const expectedPart = "\n expected to be:" + expected;
  const actualPart = "\n actual is:" + actual;

  return mark + inputpart + expectedPart + actualPart + "\n";
}

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);

  console.log(generateMesage(array1, array2, actual, expected));
}

function testAll() {
  testConcat([], [], []);
  testConcat([], [0], [0]);
  testConcat([1, 2, 3], [3, 2, 1], [1, 2, 3, 3, 2, 1]);
  testConcat([1, 2, 0], [1, 2, 3, 4], [1, 2, 0, 1, 2, 3, 4,]);
  testConcat([1, 2, 3], [1, 2], [1, 2, 3, 1, 2]);
  testConcat([1, 2, 3], [], [1, 2, 3]);
  testConcat([1], [7, 6, 5, 4, 3], [1, 7, 6, 5, 4, 3,]);
}

testAll();
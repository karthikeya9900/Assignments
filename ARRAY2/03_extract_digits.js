// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

function extractDigits(number) {
  let absoluteNumber = Math.abs(number);
  const digitsArray = [];

  while (absoluteNumber > 9) {
    const unitDigit = absoluteNumber % 10;

    absoluteNumber = Math.floor((absoluteNumber) / 10);
    digitsArray.unshift(unitDigit);
  }

  digitsArray.unshift(absoluteNumber);

  return digitsArray;
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

function generateMesage(array1, actual, expected) {
  const mark = getMark(expected, actual);
  const inputpart = "\n inputs:" + array1;
  const expectedPart = "\n expected to be:" + expected;
  const actualPart = "\n actual is:" + actual;

  return mark + inputpart + expectedPart + actualPart + "\n";
}

function testExtractDigits(number, expected) {
  const actual = extractDigits(number);

  console.log(generateMesage(number, actual, expected));
}

function testAll() {
  testExtractDigits(0, [0]);
  testExtractDigits(12, [1, 2]);
  testExtractDigits(120, [1, 2, 0]);
  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(123456, [1, 2, 3, 4, 5, 6]);
  testExtractDigits(1120, [1, 1, 2, 0]);
  testExtractDigits(-1120, [1, 1, 2, 0]);
  testExtractDigits(-123456, [1, 2, 3, 4, 5, 6]);
  testExtractDigits(-120, [1, 2, 0]);
}

testAll();
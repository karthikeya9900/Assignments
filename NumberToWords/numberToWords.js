// ----------------------- global constants-------------------------------

const TENS_PLACE_WORD = ["twenty", "thirty", "forty", "fifty", "sixty",
  "seventy", "eighty", "ninety"];

const SPECIAL_CASE = ["", "one", "two", "three", "four", "five", "six",
  "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
  "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const UNITS = [" thousand ", " million ", " billion "];

// ----------------------- programm part -------------------------------

function getWordFor0To19(number) {
  return SPECIAL_CASE[number];
}

function getWordForTensPlace(number) {
  return TENS_PLACE_WORD[number - 2];
}

function generateWordForTwoDigits(number) {
  if (number < 20) {
    return getWordFor0To19(number);
  }

  const tensPlace = getWordForTensPlace(Math.floor(number / 10));
  const unitPlace = getWordFor0To19(number % 10);

  return (tensPlace + " " + unitPlace).trim();
}

function generateWordsForThreeDigits(number) {
  if (number < 100) {
    return generateWordForTwoDigits(number);
  }

  let numberInWords = "";

  numberInWords += getWordFor0To19(Math.floor(number / 100)) + " hundred ";
  numberInWords += generateWordForTwoDigits(number % 100);

  return numberInWords.trim();
}

function addUnits(numberInWords) {
  let numInWords = numberInWords[0];

  for (let index = 0; index < numberInWords.length - 1; index++) {
    if (numberInWords[index + 1] !== "") {
      numInWords = numberInWords[index + 1] + UNITS[index] + numInWords;
    }
  }

  return numInWords.trim();
}

function numberToWords(number) {
  if (number === 0) {
    return "zero";
  }

  let num = number;
  const numberInWords = [];

  while (num > 0) {
    numberInWords.push(generateWordsForThreeDigits(num % 1000));
    num = Math.floor(num / 1000);
  }

  return addUnits(numberInWords);
}

// ----------------------- Testing part -------------------------------

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

function testNumberToWords(number, expected) {
  const actual = numberToWords(number);

  console.log(generateMesage(number, actual, expected));
}

//--------------------------------- Test Cases ------------------------------

function testSingleDigits() {
  testNumberToWords(0, "zero");
  testNumberToWords(1, "one");
  testNumberToWords(2, "two");
  testNumberToWords(3, "three");
  testNumberToWords(4, "four");
  testNumberToWords(5, "five");
  testNumberToWords(6, "six");
  testNumberToWords(7, "seven");
  testNumberToWords(8, "eight");
  testNumberToWords(9, "nine");
}

function testTwoDigits() {
  testNumberToWords(10, "ten");
  testNumberToWords(99, "ninety nine");
  testNumberToWords(14, "fourteen");
  testNumberToWords(67, "sixty seven");
  testNumberToWords(90, "ninety");
  testNumberToWords(33, "thirty three");
  testNumberToWords(20, "twenty");
  testNumberToWords(50, "fifty");
}

function testHundreds() {
  testNumberToWords(100, "one hundred");
  testNumberToWords(200, "two hundred");
  testNumberToWords(300, "three hundred");
  testNumberToWords(400, "four hundred");
  testNumberToWords(500, "five hundred");
  testNumberToWords(600, "six hundred");
  testNumberToWords(700, "seven hundred");
  testNumberToWords(800, "eight hundred");
  testNumberToWords(900, "nine hundred");
}

function testThreeDigits() {
  testNumberToWords(102, "one hundred two");
  testNumberToWords(878, "eight hundred seventy eight");
  testNumberToWords(231, "two hundred thirty one");
  testNumberToWords(324, "three hundred twenty four");
  testNumberToWords(425, "four hundred twenty five");
  testNumberToWords(666, "six hundred sixty six");
  testNumberToWords(999, "nine hundred ninety nine");
}

function test4And5Digits() {
  testNumberToWords(23456, "twenty three thousand four hundred fifty six");
  testNumberToWords(15550, "fifteen thousand five hundred fifty");
  testNumberToWords(50000, "fifty thousand");
  testNumberToWords(100001, "one hundred thousand one");
  testNumberToWords(60041, "sixty thousand forty one");
}

function test6To8Digits() {
  let expected = "one hundred twenty three thousand four hundred twenty three";
  testNumberToWords(123423, expected);

  expected = "five million three hundred sixty seven thousand two";
  expected += " hundred twelve";
  testNumberToWords(5367212, expected);

  expected = "fifty three million six hundred seventy ";
  expected += 'two thousand one hundred twenty nine';
  testNumberToWords(53672129, expected);
}

function test9To10Digits() {
  let expected = "five hundred thirty six million seven hundred twenty";
  expected += " one thousand two hundred twelve";
  testNumberToWords(536721212, expected);

  expected = "five billion four hundred forty five million four hundred";
  expected += " sixty three thousand two hundred fourteen";
  testNumberToWords(5445463214, expected);
}

function test11To12Digits() {
  let expected = "ninety one billion four hundred sixty two million one ";
  expected += "hundred twelve thousand eight hundred ninety one";
  testNumberToWords(91462112891, expected);

  expected = "one hundred twenty three billion four hundred ninety four ";
  expected += "million seven hundred thirty three thousand ";
  expected += "four hundred fifty two";
  testNumberToWords(123494733452, expected);
}

function testEdgeCases() {
  testNumberToWords(1000, "one thousand");
  testNumberToWords(1001, "one thousand one");
  testNumberToWords(10000, "ten thousand");
  testNumberToWords(10001, "ten thousand one");
  testNumberToWords(100000, "one hundred thousand");
  testNumberToWords(100001, "one hundred thousand one");
  testNumberToWords(1000000, "one million");
  testNumberToWords(1000001, "one million one");
  testNumberToWords(10000000, "ten million");
  testNumberToWords(10000001, "ten million one");
  testNumberToWords(100000000, "one hundred million");
  testNumberToWords(100000001, "one hundred million one");
}

function testEdgeCases2() {
  testNumberToWords(1000000000, "one billion");
  testNumberToWords(1000000001, "one billion one");
  testNumberToWords(1000600000, "one billion six hundred thousand");
  testNumberToWords(10000000000, "ten billion");
  testNumberToWords(10000000001, "ten billion one");
  testNumberToWords(10000060000, "ten billion sixty thousand");
  testNumberToWords(100000000000, "one hundred billion");
  testNumberToWords(100000000001, "one hundred billion one");
  testNumberToWords(100060000000, "one hundred billion sixty million");

  const expected = "one hundred billion six hundred million six hundred";

  testNumberToWords(100600000600, expected);
}

function testAll() {
  testSingleDigits();
  testTwoDigits();
  testThreeDigits();
  test4And5Digits();
  test6To8Digits();
  test9To10Digits();
  test11To12Digits();
  testHundreds();
  testEdgeCases();
  testEdgeCases2();
}

testAll();
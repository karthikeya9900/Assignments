function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function max(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function sliceString(string, start, end) {
  if (start > end) {
    return '';
  }

  return string[start] + sliceString(string, start + 1, end);
}

function slice(string, start, end) {
  const startIndex = max(start, 0);
  const endIndex = min(string.length - 1, end);

  if (string === "") {
    return "";
  }

  return sliceString(string, startIndex, endIndex);
}

//------------ testing section

function getMark(expected, actual) {
  return expected === actual ? '✅' : '❌';
}

function testSlice(string, start, end, expected) {
  const actual = slice(string, start, end);
  const mark = getMark(expected, actual);
  let message = mark + " \nsliced string \nfrom index " + start + " to";

  message += end + " index is \nexpected to be " + expected;
  message += " \nand actual is ";

  console.log(message + actual + " \n ");
}

function testAll() {
  testSlice("hello", 0, 2, "hel");
  testSlice("hello", 2, 3, "ll");
  testSlice("hello", 3, 3, "l");
  testSlice("hello", 0, 6, "hello");
  testSlice("hello", -1, 3, "hell");
  testSlice("hello", -1, 5, "hello");
  testSlice("", -1, 5, "");
}

testAll();
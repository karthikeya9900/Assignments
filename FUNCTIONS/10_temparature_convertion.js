/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - K
    - F

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'F', 100) => -279.67
    convert('K', 'C', 100) => -173.15

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

const kelvin = "K";
const celsius = "C";
const fahrenheit = "F";

function toCelsius(from, value) {
  if (from === kelvin) {
    return value - 273.15;
  }

  if (from === fahrenheit) {
    return ((value - 32) * 5) / 9;
  }

  return value;
}

function fromCelsius(to, value) {
  if (to === kelvin) {
    return ((value * 100) + 27315) / 100;
  }

  if (to === fahrenheit) {
    return ((value * 9) / 5 + 32);
  }

  return value;
}

function isNaN(value) {
  if(value !== +value){
    return false;
  }

  return "" + value === "NaN";
}

function isValidUnit(unit) {
  return unit === "K" || unit === "F" || unit === "C";
}

function isValidInputTypes(from, to) {
  return isValidUnit(from) && isValidUnit(to);
}

function convert(from, to, value) {
  if (isNaN(value)) {
    return NaN;
  }

  if (!isValidInputTypes(from, to)) {
    return NaN;
  }

  if (from === to) {
    return +value;
  }

  const toCelsiusConvertedValue = toCelsius(from, value);
  return fromCelsius(to, toCelsiusConvertedValue);
}

function getMark(expected, actual) {
  expected = expected + "";
  actual = actual + "";

  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function addQuotes(string) {
  return '"' + string + '"';
}

function generateMesage(from, to, value, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = "the converted value of " + value + "\n from ";

  message += addQuotes(from) + " to " + addQuotes(to) + " \n is expected to ";
  message += "be " + expected + " \n and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testConvert(from, to, value, expected) {
  const actual = convert(from, to, value);

  generateMesage(from, to, value, actual, expected);
}

function testAll() {
  testConvert("K", "K", 100, 100);
  testConvert("F", "F", 100, 100);
  testConvert("C", "C", 37, 37);
  testConvert("K", "F", 100, -279.66999999999996);
  testConvert("C", "F", 37, 98.6);
  testConvert("F", "K", 100, 310.92777777777775);
  testConvert("C", "K", 37, 310.15);
  testConvert("K", "C", 100, -173.14999999999998);
  testConvert("F", "C", 100, 37.77777777777778);
  testConvert("F", "C", "100", 37.77777777777778);
  testConvert("F", "a", 100, NaN);
  testConvert("K", "a", 100, NaN);
  testConvert("C", "a", 0, NaN);
  testConvert("C", "a", "a", NaN);
  testConvert("C", "a", "10", NaN);
  testConvert("a", "C", "a", NaN);
  testConvert("C", "a", "10", NaN);
  testConvert("a", "a", "10", NaN);
  testConvert('C', 'K', 0, 273.15);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('F', 'C', -40, -40);
  testConvert('K', 'C', 100, -173.14999999999998);
  testConvert('K', 'F', 100, -279.66999999999996);
  testConvert('K', 'K', 100, 100);
  testConvert('F', 'F', 100, 100);
  testConvert('C', 'C', 100, 100);
  testConvert('X', 'X', 100, NaN);
  testConvert('C', 'F', "asfg", NaN);
  testConvert('a', 'F', 100, NaN);
  testConvert('F', 'z', 100, NaN);
  testConvert('C', 'C', "100", 100);
  testConvert('C', 'K', "0", 273.15);
  testConvert('C', 'F', "37", 98.6);
  testConvert('F', 'K', "98.6", 310.15);
  testConvert('F', 'C', "-40", -40);
  testConvert('', 'C', "-40", NaN);
  testConvert('F', '', "-40", NaN);
  testConvert('', '', "-40", NaN);
  testConvert('C', 'C', "a", NaN);
  testConvert('C', 'C', "100", 100);
  testConvert('a', 'a', "-40", NaN);
}

testAll();
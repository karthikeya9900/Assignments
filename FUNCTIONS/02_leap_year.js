/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisibleBy(dividend, divisor) {
  return (dividend % divisor) === 0;
}

function isLeapYear(year) {

  if (isDivisibleBy(year, 400)) {
    return true;
  }

  return (!isDivisibleBy(year, 100) && isDivisibleBy(year, 4));
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(year, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " is leap year of " + year + " is " + expected + " \n ";
  message += " and actual is " + actual + " \n ";
  
  printMessage(mark + message);
}

function testIsLeapYear(year, expected) {
  const actual = isLeapYear(year);
  generateMesage(year, actual, expected);
}

function testAll() {
  testIsLeapYear(2000, true);
  testIsLeapYear(2001, false);
  testIsLeapYear(2004, true);
  testIsLeapYear(1900, false);
  testIsLeapYear(2010, false);
  testIsLeapYear(100, false);
  testIsLeapYear(200, false);
  testIsLeapYear(1964, true);
}

testAll();
/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
  */

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  for (let divisor = 2; divisor < primeCandidate; divisor++) {
    if (isDivisibleBy(primeCandidate, divisor)) {
      return false;
    }
  }

  return true;

}

function firstPrimeAbove(number) {
  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(number, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " first prime above after " + number + " is " + " \n ";

  message += " expected to be is" + expected + " \n ";
  message += " and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);

  generateMesage(number, actual, expected);
}

function testAll() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(10, 11);
  testFirstPrimeAbove(34, 37);
}

testAll();

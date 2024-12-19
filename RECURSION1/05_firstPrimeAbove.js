//need to rename this function
function isPrimeNumberOrNot(primeCandidate, divisor) {
  if (divisor === primeCandidate) {
    return true;
  }

  const isAFactor = primeCandidate % divisor === 0;

  return isAFactor ? false : isPrimeNumberOrNot(primeCandidate, divisor + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 2) {
    return false;
  }

  return isPrimeNumberOrNot(primeCandidate, 2);
}

function firstPrimeAbove(number) {
  const primeCandidate = number + 1;

  if (isPrime(primeCandidate)) {
    return primeCandidate;
  }

  return firstPrimeAbove(primeCandidate);
}
function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(number1, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " first prime after " + number1 + " \n is  expectd to be ";

  message += expected + "\n and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testFirstPrimeAbove(number1, expected) {
  const actualResult = firstPrimeAbove(number1);

  generateMesage(number1, actualResult, expected);
}

function testAll() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(10, 11);
  testFirstPrimeAbove(17, 19);
  testFirstPrimeAbove(13, 17);
  testFirstPrimeAbove(100, 101);
  testFirstPrimeAbove(27, 29);

}

testAll();
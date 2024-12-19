// need to rename this function 
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

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(number1, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " isPrime of " + number1 + " \n is  expectd to be ";

  message += expected + "\n and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testIsPrime(number1, expected) {
  const actualResult = isPrime(number1);

  generateMesage(number1, actualResult, expected);
}

function testAll() {
  testIsPrime(0, false);
  testIsPrime(1, false);
  testIsPrime(2, true);
  testIsPrime(3, true);
  testIsPrime(4, false);
  testIsPrime(17, true);
  testIsPrime(19, true);
  testIsPrime(23, true);
  testIsPrime(100, false);
  testIsPrime(10, false);
  testIsPrime(25, false);
  testIsPrime(812, false);
}

testAll();
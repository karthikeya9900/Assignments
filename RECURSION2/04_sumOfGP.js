function sumOfGP(firstTerm, commonRatio, noOfTerms) {
  if (noOfTerms === 0) {
    return 0;
  }

  const valueOfNextTerm = firstTerm * commonRatio;

  return firstTerm + sumOfGP(valueOfNextTerm, commonRatio, noOfTerms - 1);
}

// ------------ testing section 

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(firstTerm, difference, noOfTerms, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = "sum of GP from " + firstTerm + "\n with common ratio";

  message += " of " + difference + " \n for " + noOfTerms + " terms ";
  message += "\n is expected " + expected + "\n and actual is " + actual;

  printMessage(mark + message + "\n");
}

function testSumOfGP(firstTerm, difference, noOfTerms, expected) {
  const actual = sumOfGP(firstTerm, difference, noOfTerms);

  generateMesage(firstTerm, difference, noOfTerms, actual, expected);
}

function testAll() {
  testSumOfGP(2, 3, 5, 242);
  testSumOfGP(1, 2, 10, 1023);
  testSumOfGP(0, 1, 5, 0);
  testSumOfGP(2, 0, 5, 2);
  testSumOfGP(2, 2, 0, 0);
  testSumOfGP(0, 0, 0, 0);
}

testAll();
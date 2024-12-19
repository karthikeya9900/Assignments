function sumOfAP(firstTerm, commonDifference, noOfTerms) {
  if (noOfTerms === 0) {
    return 0;
  }

  const valueOfNextTerm = firstTerm + commonDifference;

  return firstTerm + sumOfAP(valueOfNextTerm, commonDifference, noOfTerms - 1);
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
  let message = "sum of AP from " + firstTerm + "\n with common difference";

  message += " of " + difference + " \n for " + noOfTerms + " terms ";
  message += "\n is expected " + expected + "\n and actual is " + actual;

  printMessage(mark + message + "\n");
}

function testSumOfAP(firstTerm, difference, noOfTerms, expected) {
  const actual = sumOfAP(firstTerm, difference, noOfTerms);

  generateMesage(firstTerm, difference, noOfTerms, actual, expected);
}

function testAll() {
  testSumOfAP(2, 3, 5, 40);
  testSumOfAP(1, 2, 10, 100);
  testSumOfAP(0, 1, 5, 10);
  testSumOfAP(2, 0, 5, 10);
  testSumOfAP(2, 2, 0, 0);
  testSumOfAP(0, 0, 0, 0);
}

testAll();
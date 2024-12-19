function compoundInterest(principle, rate, time) {
  if (time === 0 || rate === 0) {
    return 0;
  }

  const simpleInterest = (principle * rate) / 100;
  const amount = simpleInterest + principle;

  return simpleInterest + compoundInterest(amount, rate, time - 1);
}

// ------------ testing section 

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(principle, rate, time, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = "C.I for " + principle + "\n for rate of interest is ";

  message += rate + " \n for " + time + " years ";
  message += "\n is expected " + expected + "\n and actual is " + actual;

  printMessage(mark + message + "\n");
}

function testCompoundInterest(principle, rate, time, expected) {
  const actual = compoundInterest(principle, rate, time);

  generateMesage(principle, rate, time, actual, expected);
}

function testAll() {
  testCompoundInterest(1000, 2, 5, 104.08080320000002);
  testCompoundInterest(1000, 3, 5, 159.2740743);
  testCompoundInterest(1000, 5, 3, 157.625);
  testCompoundInterest(0, 2, 5, 0);
  testCompoundInterest(1000, 0, 5, 0);
  testCompoundInterest(1000, 2, 0, 0);
}

testAll();
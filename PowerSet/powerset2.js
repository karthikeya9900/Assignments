const EMPTY_SET = [[]];

function copyArray(array) {
  const copyOfArray = [];

  for (const element of array) {
    copyOfArray.push([element]);
  }

  return copyOfArray;
}

function getOtherSubSets(array) {
  powerSetArray = h;
  for (let index = 0; index < array.length - 1; index++) {

  }
}

function generateSubSets(array) {
  const powerSet = [[]];

  for (const element of array) {
    powerSet.push(element);
  }

  powerSet = getOtherSubSets(array);

  return powerSet;
}

function generatePowerSet(arr) {
  if (arr.length === 0) {
    return EMPTY_SET;
  }

  return "hello";
}


// ----------------------------------- testing section 

function generateMesage(array1, actual, expected) {
  const inputpart = "\n inputs:" + array1;
  const expectedPart = "\n expected to be:" + "'" + expected + "'";
  const actualPart = "\n actual is:" + "'" + actual + "'";

  return inputpart + expectedPart + actualPart + "\n" + "-".repeat(50);
}

function testGeneratePowerSet(array1, expected) {
  const actual = generatePowerSet(array1);

  console.log(generateMesage(array1, actual, expected));
}

function testAll() {
  testGeneratePowerSet([], [[]]);
  testGeneratePowerSet([1], [[], [1]]);
  // testGeneratePowerSet([1, 2], [[], [1], [2]]);
}

testAll();
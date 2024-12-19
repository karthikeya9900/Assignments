function generatePowerSet(arr) {
  const powerSet = [];

  powerSet.push(addEmptySet(arr));
}

function addEmptySet() {
  const powerSetArray = [];

  powerSetArray.push([]);

  return powerSetArray;
}

// ----------------------------------- testing section 

function generateMesage(array1, actual, expected) {
  const inputpart = "\n inputs:" + array1;
  const expectedPart = "\n expected to be:" + expected;
  const actualPart = "\n actual is:" + actual;

  return inputpart + expectedPart + actualPart + "\n";
}

function testGeneratePowerSet(array1, expected) {
  const actual = generatePowerSet(array1);

  console.log(generateMesage(array1, actual, expected));
}

function testAll() {
  testGeneratePowerSet([1], [[]]);
}

testAll();

/*
todo :
1. add empty array to the power Set
2. add single elements to the power Set 
3. add pairs of elements 
4. add three elemnts if there  
4. add whole set 

done :

*/
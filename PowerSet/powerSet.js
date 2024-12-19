function generateSubSets(array) {
  const powerSet = [[]];

  for (let index = 0; index < array.length; index++) {

    const powerSetLength = powerSet.length;

    for (let subIndex = 0; subIndex < powerSetLength; subIndex++) {
      powerSet.push(powerSet[subIndex].concat([array[index]]));
    }
  }

  return powerSet;
}

function generatePowerSet(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  return generateSubSets(arr);
}

// -------------------------------------------------------- testing section 

function getMark(expected, actual) {
  return expected + "" === actual + "" ? "✅" : "❌";
}

function generateMesage(array1, actual, expected) {
  const mark = getMark(expected, actual);
  const input = array1;
  const expect = expected;

  console.log(mark, "\n\ninput", input, "\n\nexp", expect, "\n\nact", actual);
}

function testGeneratePowerSet(array1, expected) {
  const actual = generatePowerSet(array1);

  generateMesage(array1, actual, expected);
}

function testNumberCases() {
  testGeneratePowerSet([], []);
  testGeneratePowerSet([1], [[], [1]]);
  testGeneratePowerSet([1, 2], [[], [1], [2], [1, 2]]);
  testGeneratePowerSet([1, 2, 3], [[], [1], [2], [1, 2], [3],
  [1, 3], [2, 3], [1, 2, 3]]);
  testGeneratePowerSet([1, 2, 3, 4],
    [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4], [1, 4],
    [2, 4], [1, 2, 4], [3, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]);
}

function testCharacterCases() {
  testGeneratePowerSet([], []);
  testGeneratePowerSet(["a"], [[], ["a"]]);
  testGeneratePowerSet(["a", "b"], [[], ["a"], ["b"], ["a", "b"]]);
  testGeneratePowerSet(["a", "b", "c"], [[], ["a"], ["b"], ["a", "b"], ["c"],
  ["a", "c"], ["b", "c"], ["a", "b", "c"]]);
  testGeneratePowerSet(["a", "b", "c", "d"],
    [[], ["a"], ["b"], ["a", "b"], ["c"], ["a", "c"], ["b", "c"],
    ["a", "b", "c"], ["d"], ["a", "d"], ["b", "d"], ["a", "b", "d"],
    ["c", "d"], ["a", "c", "d"], ["b", "c", "d"], ["a", "b", "c", "d"]]);
}

function test5ElementCases() {
  testGeneratePowerSet([1, 2, 3, 4, 5],
    [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3], [4],
    [1, 4], [2, 4], [1, 2, 4], [3, 4], [1, 3, 4],
    [2, 3, 4], [1, 2, 3, 4], [5], [1, 5], [2, 5], [1, 2, 5], [3, 5],
    [1, 3, 5], [2, 3, 5], [1, 2, 3, 5], [4, 5], [1, 4, 5], [2, 4, 5],
    [1, 2, 4, 5], [3, 4, 5], [1, 3, 4, 5], [2, 3, 4, 5], [1, 2, 3, 4, 5]]);
  testGeneratePowerSet(["a", "b", "c", "d", "e"],
    [[], ["a"], ["b"], ["a", "b"], ["c"], ["a", "c"], ["b", "c"],
    ["a", "b", "c"], ["d"], ["a", "d"], ["b", "d"], ["a", "b", "d"],
    ["c", "d"], ["a", "c", "d"], ["b", "c", "d"], ["a", "b", "c", "d"],
    ["e"], ["a", "e"], ["b", "e"], ["a", "b", "e"], ["c", "e"], ["a", "c", "e"],
    ["b", "c", "e"], ["a", "b", "c", "e"], ["d", "e"], ["a", "d", "e"],
    ["b", "d", "e"], ["a", "b", "d", "e"], ["c", "d", "e"],
    ["a", "c", "d", "e"], ["b", "c", "d", "e"], ["a", "b", "c", "d", "e"]]);
}

function testMixedElementcases() {
  testGeneratePowerSet([1, "a", "@", 12, "ab"],
    [[], [1], ["a"], [1, "a"], ["@"], [1, "@"], ["a", "@"], [1, "a", "@"],
    [12], [1, 12], ["a", 12], [1, "a", 12], ["@", 12], [1, "@", 12],
    ["a", "@", 12], [1, "a", "@", 12], ["ab"], [1, "ab"], ["a", "ab"],
    [1, "a", "ab"], ["@", "ab"], [1, "@", "ab"], ["a", "@", "ab"],
    [1, "a", "@", "ab"], [12, "ab"], [1, 12, "ab"], ["a", 12, "ab"],
    [1, "a", 12, "ab"], ["@", 12, "ab"], [1, "@", 12, "ab"],
    ["a", "@", 12, "ab"], [1, "a", "@", 12, "ab"]]);
  testGeneratePowerSet([1, "2", "a"],
    [[], [1], ["2"], [1, "2"], ["a"], [1, "a"], ["2", "a"], [1, "2", "a"]]);
}

function testAll() {
  test5ElementCases();
  testNumberCases();
  testCharacterCases();
  testMixedElementcases();
}

testAll();
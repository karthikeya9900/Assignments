// ["abc","def","ghi"] => "cfi"
// You are given an array of strings. Write a function to return a single 
// string that is the concatenation of the last character of every string in 
// the array.

const getLastCharOfword = function (word) {
  return word.at(-1);
};

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.map(getLastCharOfword).join("");
};

// [[1,-2],[3,4],[5,-6]] => [[3,4]]
// Write a function to return a new array containing only those lists that
//  contain at least one positive number.

const isWholeNumber = function (number) {
  return number >= 0;
};

const isAllPositive = function (list) {
  return list.every(isWholeNumber);
};

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(isAllPositive);
};

// [0,-1,-2,3,4] => 12
// Write a function to calculate the product of all the positive numbers in
//  the array. 0 is not positive.

const isPositive = function (number) {
  return number > 0;
};

const multiply = function (number1, number2) {
  return number1 * number2;
};

const productOfPositives = function (numbers) {
  return numbers.filter(isPositive).reduce(multiply, 1);
};

// ["educate", "there", "animation"] => "educate"
// Write a function to return the longest string that contains the letter "e". 

const isWordContainsE = function (word) {
  return word.includes("e");
};

// max
// biggestOf
// largestOf

const largestOf = function (word1, word2) {
  return word1.length > word2.length ? word1 : word2;
};

const longestEWord = function (strings) {
  return strings.filter(isWordContainsE).reduce(largestOf, "");
};

// [[2, 4, 6], [1, 3, 5], [8, 10]] => false
// [[2,4],[6,8]] => true
// Write a function to check if all lists contain only even numbers.
//  Return `true` if they do, and `false` otherwise.

const isEven = function (number) {
  return (number & 1) === 0;
};

const areAllElementsOfListEven = function (list) {
  return list.every(isEven);
};

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(areAllElementsOfListEven);
};

// [1,2,3,4] => 10 (sqr(1) + sqr(3))
// Write a function to calculate the sum of the squares of all the odd numbers
//  in the array

const isOdd = function (number) {
  return (number & 1) === 1;
};

const squareOf = function (number) {
  return Math.pow(number, 2);
};

const add = function (number1, number2) {
  return number1 + number2;
};

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.filter(isOdd).map(squareOf).reduce(add, 0);
};

// ["abc","def"] => true
// ["abc","de"] => false
// Write a function to check if all strings have the same length.
//  Return `true` if they do, and `false` otherwise. 

const getLengthOfString = function (string) {
  return string.length;
};

const verifyLengths = function (firstLength) {
  return function (len2) {
    return firstLength === len2;
  };
};

const areAllOfSameLength = function (listOfStrings) {
  const arrayOfLengths = listOfStrings.map(getLengthOfString);
  const firstLength = verifyLengths(arrayOfLengths[0]);

  return arrayOfLengths.every(firstLength);
};

// ["ant", "eye", "id"] => true
// ["ant","bat"] => false
// Write a function to check if all the strings in the array start with a
//  vowel.  Return `true` if they do, and `false` otherwise. 

const isTrue = function (boolean) {
  return boolean === true;
};

const isStartWithVowel = function (word) {
  return "aeiou".includes(word.at(0));
};

const allStartWithAVowel = function (words) {
  return words.map(isStartWithVowel).every(isTrue);
};

// [1,2,3,4,1,2] => [1,2,3,4]
// Write a function to return a new array with all duplicate values removed. 

const isNotIncludes = function (previousArray, element) {
  return !(previousArray.includes(element));
};

const getElement = function (array, element) {
  return isNotIncludes(array, element) ? array.concat(element) :
    array.concat([]);
};

const removeDuplicates = function (numbers) {
  return numbers.reduce(getElement, []);
};

// [1,2,3,4] => [1,3,6,10]
// [1,1,4,5] => [1,2,6,11]
// Build an array where each element is the running sum of the elements
//  up to that index.

const addToRunningElements = function (array, element) {
  const lastElement = array.at(-1) || 0;

  return array.concat(lastElement + element);
};

const runningTotal = function (numbers) {
  return numbers.reduce(addToRunningElements, []);
};

// [] => [[]]
// [1] => [[1]]
// [1,2] => [[1,2]]
// [1,2,3] => [[1,2],[3]]
// [1,2,3,4] => [[1,2],[3,4]]
// Write a function to pair up elements of a list. 

const makePairs = function (pairs, element) {
  const lastElement = pairs.at(-1);

  if (pairs.at(-1).length === 2) {
    pairs.push([element]);
    return pairs;
  }

  pairs[pairs.length - 1] = [...lastElement, element];
  return pairs;
};

const pairs = function (list) {
  if (list.length < 3) {
    return [list];
  }

  return list.reduce(makePairs, [[]]);
};

// -------------------------  test cases -----------------------------

const testTheFunction = function (functionName, parameters, expected, failed) {
  const actual = functionName(parameters);

  if (expected + "" !== actual + "") {
    failed.push([functionName, parameters, expected, actual]);
  }

  return failed;
};

const testsPassingStatus = function (failed) {
  return failed.length === 0 ? "ALL TESTS ARE PASSING 😁" : failed;
};

const testAllLastChars = function (failed) {
  testTheFunction(allLastChars, ["hello"], "o", failed);
  testTheFunction(allLastChars, ["hello", "good"], "od", failed);
  testTheFunction(allLastChars, ["hello", "good", "morning"], "odg", failed);
  testTheFunction(allLastChars, ["hello", "good", "morning", "0"], "odg0",
    failed);
  testTheFunction(allLastChars, ["hello", "good", "0", "step"], "od0p",
    failed);

  return failed;
};

const testListsWithPositiveNumbers1 = function (failed) {
  testTheFunction(listsWithPositiveNumbers, [[1, 2], [3, 4], [5, 6]],
    [[1, 2], [3, 4], [5, 6]], failed);
  testTheFunction(listsWithPositiveNumbers, [[1, -2], [3, 4], [5, 6]],
    [[3, 4], [5, 6]], failed);
  testTheFunction(listsWithPositiveNumbers, [[1, 2], [3, -4], [5, 6]],
    [[1, 2], [5, 6]], failed);
  testTheFunction(listsWithPositiveNumbers, [[1, 2], [3, 4], [5, -6]],
    [[1, 2], [3, 4]], failed);
  testTheFunction(listsWithPositiveNumbers, [[1, 2], [3, 4], [5, -6]],
    [[1, 2], [3, 4]], failed);

  return failed;
};

const testListsWithPositiveNumbers2 = function (failed) {
  testTheFunction(listsWithPositiveNumbers, [[1, -2], [3, -4], [5, 6]],
    [[5, 6]], failed);
  testTheFunction(listsWithPositiveNumbers, [[1, 2], [3, -4], [5, -6]],
    [[1, 2]], failed);
  testTheFunction(listsWithPositiveNumbers, [[1, -2], [3, 4], [5, -6]],
    [[3, 4]], failed);
  testTheFunction(listsWithPositiveNumbers, [[1, -2], [3, 4], [5, -6]],
    [[3, 4]], failed);
  testTheFunction(listsWithPositiveNumbers, [[1, -2], [3, -4], [5, -6]],
    [], failed);

  return failed;
};

const testProductofPositives = function (failed) {
  testTheFunction(productOfPositives, [0, -1, -2, 3, 4], 12, failed);
  testTheFunction(productOfPositives, [1, 2, 5, 0, 4], 40, failed);
  testTheFunction(productOfPositives, [1, 2, 5, 4, 6], 240, failed);
  testTheFunction(productOfPositives, [-1, -2, -5, -4, -6], 1, failed);
  testTheFunction(productOfPositives, [0, 0, 0, 0, 0], 1, failed);
  testTheFunction(productOfPositives, [], 1, failed);

  return failed;
};

const testLongestEWord = function (failed) {
  testTheFunction(longestEWord, ["hii", "good", "morning", "music"],
    "", failed);
  testTheFunction(longestEWord, ["hello", "assign", "abstraction"],
    "hello", failed);
  testTheFunction(longestEWord, ["hello", "assignment", "abstraction"],
    "assignment", failed);
  testTheFunction(longestEWord, ["hello", "assignment", "behavioural"],
    "behavioural", failed);

  return failed;
};

const testAreAllListsEven = function (failed) {
  testTheFunction(areAllListsEven, [[1]], false, failed);
  testTheFunction(areAllListsEven, [[2]], true, failed);
  testTheFunction(areAllListsEven, [[2, 4, 6]], true, failed);
  testTheFunction(areAllListsEven, [[2, 4, 6], [8, 10]], true, failed);
  testTheFunction(areAllListsEven, [[2, 4, 6], [1, 3, 5], [8, 10]],
    false, failed);
  testTheFunction(areAllListsEven, [[1, 7, 3], [1, 3, 5], [9, 11]],
    false, failed);

  return failed;
};

const testSumOfSquaresOfOdds = function (failed) {
  testTheFunction(sumOfSquaresOfOdds, [], 0, failed);
  testTheFunction(sumOfSquaresOfOdds, [1, 2, 0, 4], 1, failed);
  testTheFunction(sumOfSquaresOfOdds, [1, 2, 3, 4], 10, failed);
  testTheFunction(sumOfSquaresOfOdds, [1, 3, 5, 7], 84, failed);
  testTheFunction(sumOfSquaresOfOdds, [8, 2, 6, 4], 0, failed);

  return failed;
};

const testAreAllOfSameLength = function (failed) {
  testTheFunction(areAllOfSameLength, ["hello"], true, failed);
  testTheFunction(areAllOfSameLength, ["hello", "good"], false, failed);
  testTheFunction(areAllOfSameLength, ["hello", "goood"], true, failed);
  testTheFunction(areAllOfSameLength, ["hello", "goood", "three"],
    true, failed);
  testTheFunction(areAllOfSameLength, ["hello", "good", "three"],
    false, failed);
  testTheFunction(areAllOfSameLength, ["hello", "good", "three"],
    false, failed);

  return failed;
};

const testAllStartWithAVowel = function (failed) {
  testTheFunction(allStartWithAVowel, ["ant", "eye", "id"], true, failed);
  testTheFunction(allStartWithAVowel, ["ant", "eye", "cat"], false, failed);
  testTheFunction(allStartWithAVowel, ["bat", "king", "sai ram"], false, failed);
  testTheFunction(allStartWithAVowel, ["ant", "bat"], false, failed);

  return failed;
};

const testRemoveDuplicates = function (failed) {
  testTheFunction(removeDuplicates, [1, 2, 3, 4, 1, 2], [1, 2, 3, 4], failed);
  testTheFunction(removeDuplicates, [1, 2, 3, 4], [1, 2, 3, 4], failed);
  testTheFunction(removeDuplicates, [1, 1, 1, 1, 2], [1, 2], failed);
  testTheFunction(removeDuplicates, [1], [1], failed);

  return failed;
};

const testRunningTotal = function (failed) {
  testTheFunction(runningTotal, [1, 2, 3, 4], [1, 3, 6, 10], failed);
  testTheFunction(runningTotal, [1, 1, 4, 5], [1, 2, 6, 11], failed);
  testTheFunction(runningTotal, [1, 0, 4, 5], [1, 1, 5, 10], failed);
  testTheFunction(runningTotal, [1, 0, 4, -5], [1, 1, 5, 0], failed);
  testTheFunction(runningTotal, [1, 1, 4, 0], [1, 2, 6, 6], failed);

  return failed;
};

const testpairs = function (failed) {
  testTheFunction(pairs, [], [[]], failed);
  testTheFunction(pairs, [1], [[1]], failed);
  testTheFunction(pairs, [1, 2], [[1, 2]], failed);
  testTheFunction(pairs, [1, 2, 3], [[1, 2], [3]], failed);
  testTheFunction(pairs, [1, 2, 3, 4], [[1, 2], [3, 4]], failed);
  testTheFunction(pairs, [1, 2, 3, 4, 5], [[1, 2], [3, 4], [5]], failed);
  testTheFunction(pairs, [1, 2, 3, 4, 5], [[1, 2], [3, 4], [5]], failed);

  return failed;
};

// -------------------------  test cases calling-----------------------------

function testAll() {
  const failed = [];

  testAllLastChars(failed);
  testListsWithPositiveNumbers1(failed);
  testListsWithPositiveNumbers2(failed);
  testProductofPositives(failed);
  testLongestEWord(failed);
  testAreAllListsEven(failed);
  testSumOfSquaresOfOdds(failed);
  testAreAllOfSameLength(failed);
  testAllStartWithAVowel(failed);
  testRemoveDuplicates(failed);
  testRunningTotal(failed);
  testpairs(failed);

  console.table(testsPassingStatus(failed));
}

testAll();
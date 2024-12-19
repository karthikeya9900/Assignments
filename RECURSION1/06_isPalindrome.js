function isStringPalindrome(fromStart, fromEnd, string) {
  if (fromStart > fromEnd) {
    return true;
  }

  if (string[fromStart] !== string[fromEnd]) {
    return false;
  }

  return isStringPalindrome(fromStart + 1, fromEnd - 1, string);
}

function isPalindrome(palindromeCandidate) {
  if (palindromeCandidate === "" || palindromeCandidate.length === 1) {
    return true;
  }

  return isStringPalindrome(
    0,
    palindromeCandidate.length - 1,
    palindromeCandidate
  );
}

function getMark(expected, actual) {
  const mark = expected === actual ? "✅" : "❌";

  return mark;
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(string, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " is palindrome of " + string + " \n is  expected to be ";

  message += expected + "\n and actual is " + actual + " \n ";

  printMessage(mark + message);
}

function testIsPalindrome(string, expected) {
  const actualResult = isPalindrome(string);

  generateMesage(string, actualResult, expected);
}

function testAll() {
  testIsPalindrome("abcba", true);
  testIsPalindrome("abcd", false);
  testIsPalindrome("abccba", true);
  testIsPalindrome("hello", false);
  testIsPalindrome("", true);
  testIsPalindrome("a", true);
}

testAll();
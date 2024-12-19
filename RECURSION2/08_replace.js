function replaceText(index, target, replacement, text) {
  if (index >= text.length) {
    return "";
  }
  const currentCharacter = text[index] === target ? replacement : text[index];

  return currentCharacter + replaceText(index + 1, target, replacement, text);
}

function replace(text, target, replacement) {
  return replaceText(0, target, replacement, text);
}

//------------ testing section

function getMark(expected, actual) {
  return expected === actual ? '✅' : '❌';
}

function testReplace(text, target, replacement, expected) {
  const actual = replace(text, target, replacement);
  const mark = getMark(expected, actual);
  let message = mark + " \n in the text " + "'" + text + "'" + "\n";

  message += "'" + target + "'" + " is Replaced with " + "'";
  message += replacement + "'" + " \n expected is " + "'" + expected;
  message += "'" + " \n and actual is ";

  console.log(message + "'" + actual + "'" + " \n ");
}

function testAll() {
  testReplace("hello", "e", "a", "hallo");
  testReplace("hello", "o", "a", "hella");
  testReplace("hello", " ", "@", "hello");
  testReplace(" hello ", " ", "@", "@hello@");
  testReplace("hello", "O", "@", "hello");
  testReplace("h e l l o", " ", "@", "h@e@l@l@o");

}

testAll();
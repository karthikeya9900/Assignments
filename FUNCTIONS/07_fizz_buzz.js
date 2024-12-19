/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function fizzBuzz(number) {
  if (number % 15 === 0) {
    return "fizzbuzz";
  }

  if (number % 3 === 0) {
    return "fizz";
  }

  if (number % 5 === 0) {
    return "buzz";
  }

  return ("" + number);
}

function getMark(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function printMessage(message) {
  console.log(message);
}

function generateMesage(number, actual, expected) {
  const mark = getMark(expected, actual) + " \n ";
  let message = " fizzBuzz of " + number + " is " + " \n ";

  message += " expected to be \"" + expected + "\" \n ";
  message += " and actual is \"" + actual + "\" \n ";

  printMessage(mark + message);
}

function testFizzBuzz(number, expected) {
  const actual = fizzBuzz(number);

  generateMesage(number, actual, expected);
}

function testAll() {
  testFizzBuzz(3, "fizz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(17, "17");
  testFizzBuzz(0, "fizzbuzz");
}

testAll();
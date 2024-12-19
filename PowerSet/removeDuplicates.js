function isElementNotFound(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return false;
    }
  }

  return true;
}

function removeDuplicates(array) {
  const filteredArray = [];

  for (const element of array) {
    if (isElementNotFound(filteredArray, element)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}
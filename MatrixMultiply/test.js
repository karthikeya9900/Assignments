// function getNumberOfColumns(matrix) {
//   return matrix[0].length;
// }

// function getNumberOfRows(matrix) {
//   return matrix.length;
// }

// function isDimensionsValid(matrixA, matrixB) {
//   const columnsOfmatrixA = getNumberOfColumns(matrixA);
//   const rowsOfmatrixB = getNumberOfRows(matrixB);

//   return columnsOfmatrixA === rowsOfmatrixB;
// }

// function getProductValue(matrixB, matrixA, rowNumber, row) {
//   let product = 0;

//   for (let col = 0; col < matrixB.length; col++) {
//     product += matrixA[rowNumber][col] * matrixB[col][row];
//   }
//   return product;
// }

// function getResultRows(matrixA, matrixB, rowNumber) {
//   const result = [];

//   for (let row = 0; row < getNumberOfColumns(matrixB); row++) {
//     const product = getProductValue(matrixB, matrixA, rowNumber, row);

//     result.push(product);
//   }

//   return result;
// }

// function multiply(matrixA, matrixB) {
//   const resultMatrix = [];

//   for (let rowNumber = 0; rowNumber < matrixA.length; rowNumber++) {
//     resultMatrix.push(getResultRows(matrixA, matrixB, rowNumber));
//   }

//   return resultMatrix;
// }

// function multiplyMatrices(matrixA, matrixB) {
//   if (!isDimensionsValid(matrixA, matrixB)) {
//     return NaN;
//   }

//   return multiply(matrixA, matrixB);
// }

// function testMultiplyMatrices() {
//   console.log(multiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2], [3, 4], [5, 6]]));
//   console.log(multiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1], [3], [5]]));
//   console.log(multiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [3, 4, 5], [5, 6, 7]]));
//   console.log(multiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2], [3, 5]]));
//   console.log(multiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]));
//   console.log("\n");
//   console.log(multiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2], [3, 5]]));
//   console.log(multiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2, 3], [4, 5, 6]]));
//   console.log(multiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2, 3], [3, 4, 5], [5, 6, 7]]));
//   console.log(multiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1], [3], [5]]));
//   console.log(multiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2], [3, 4], [5, 6]]));
// }

// testMultiplyMatrices();

// function isMatrixValid(matrix) {
//   for (let index = 1; index < matrix.length; index++) {
//     if (matrix[index - 1].length !== matrix[index].length) {
//       return false;
//     }
//   }

//   return true;
// }

function getNumberOfColumns(matrix) {
  return matrix[0].length;
}

function getNumberOfRows(matrix) {
  return matrix.length;
}

function isMatricesValid(matrixA, matrixB) {
  const columnsOfmatrixA = getNumberOfColumns(matrixA);
  const rowsOfmatrixB = getNumberOfRows(matrixB);

  return columnsOfmatrixA === rowsOfmatrixB;
}

function getProductValue(matrixB, matrixA, rowNumber, row) {
  let product = 0;

  for (let col = 0; col < matrixB.length; col++) {
    product += matrixA[rowNumber][col] * matrixB[col][row];
  }

  return product;
}

function getResultRows(matrixA, matrixB, rowNumber) {
  const result = [];

  for (let row = 0; row < getNumberOfColumns(matrixB); row++) {
    const product = getProductValue(matrixB, matrixA, rowNumber, row);

    result.push(product);
  }

  return result;
}

function multiply(matrixA, matrixB) {
  const resultMatrix = [];

  for (let rowNumber = 0; rowNumber < matrixA.length; rowNumber++) {
    resultMatrix.push(getResultRows(matrixA, matrixB, rowNumber));
  }

  return resultMatrix;
}

function multiplyMatrices(matrixA, matrixB) {
  if (matrixA.length === 0 || matrixB.length === 0) {
    return matrixA.length === 0 && matrixB.length === 0 ? [] : NaN;
  }

  if (!isMatricesValid(matrixA, matrixB)) {
    return NaN;
  }

  return multiply(matrixA, matrixB);
}

// ----------------------------------------------- Testing Section

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function getMark(expected, actual) {
  if (isNaN(expected) && isNaN(actual)) {
    return "✅";
  }

  for (let index = 0; index < expected.length; index++) {
    if (!areEqual(expected[index], actual[index])) {
      return "❌";
    }
  }

  return "✅";
}

function generateMesage(array1, array2, actual, expected) {
  const mark = getMark(expected, actual);
  const mat1 = array1;
  const mat2 = array2;
  const expect = expected;

  console.log(mark, "\nm1", mat1, "\nm2", mat2, "\ne", expect, "\na", actual);
}

function testMultiplyMatrices(array1, array2, expected) {
  const actual = multiplyMatrices(array1, array2);

  generateMesage(array1, array2, actual, expected);
}

function testNaNCases() {
  testMultiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2], [3, 5]], NaN);
  testMultiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]], NaN);
  testMultiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2, 3], [3, 4, 5],
  [5, 6, 7]], NaN);
  testMultiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1], [3], [5]], NaN);
  testMultiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2], [3, 4], [5, 6]], NaN);
  testMultiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2], [3], [5, 6]], NaN);
  testMultiplyMatrices([[1, 2], [3, 4], [5]], [[1, 2], [3, 4], [5, 6]], NaN);
}

function testEmptySetCases() {
  testMultiplyMatrices([], [[1, 2], [3, 4], [5, 6]], NaN);
  testMultiplyMatrices([[1, 2], [3, 4], [5, 6]], [], NaN);
  testMultiplyMatrices([], [], []);
}

function testNormalCases() {
  testMultiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2], [3, 4], [5, 6]],
    [[22, 28], [49, 64]]);
  testMultiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1], [3], [5]], [[22], [49]],
    [[22, 28, 34], [49, 64, 79]]);
  testMultiplyMatrices([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [3, 4, 5],
  [5, 6, 7]], [[22, 28, 34], [49, 64, 79]]);
  testMultiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2], [3, 5]],
    [[7, 12], [15, 26], [23, 40]]);
  testMultiplyMatrices([[1, 2], [3, 4], [5, 6]], [[1, 2, 3], [4, 5, 6]],
    [[9, 12, 15], [19, 26, 33], [29, 40, 51]]);
}

function testAll() {
  testNormalCases();
  testNaNCases();
  testEmptySetCases();
}

testAll();
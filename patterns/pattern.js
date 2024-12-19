const STAR = "*";
const HYPHEN = "-";
const SPACE = " ";

const stars = function (noOfTimes) {
  if (noOfTimes < 1) {
    return "";
  }

  return STAR.repeat(noOfTimes);
};

const spaces = function (noOfTimes) {
  if (noOfTimes < 1) {
    return "";
  }

  return SPACE.repeat(noOfTimes);
};

const hyphens = function (noOfTimes) {
  if (noOfTimes < 1) {
    return "";
  }

  return HYPHEN.repeat(noOfTimes);
};

const getLine = function (char, noOfTimes) {
  if (noOfTimes < 1) {
    return "";
  }

  return char.repeat(noOfTimes);
};

const getHollowRow = function (width, char) {
  return char + spaces(width - 2) + char;
};

const isAnyDimensionZero = function (dimensions) {
  return dimensions[0] === 0 || dimensions[1] === 0;
};

const copyArray = function (array) {
  const copyArray = [];
  for (let index = 0; index < array.length; index++) {
    copyArray.push(array[index]);
  }

  return copyArray;
};

// -------------------- filled rectangle -------------------------------

function getFilledRectangle([WIDTH, HEIGHT], needToReturnInArray) {
  const rectangle = [];

  for (let index = 0; index < HEIGHT; index++) {
    rectangle.push(stars(WIDTH));
  }

  return needToReturnInArray === true ? rectangle : rectangle.join("\n");
}

// ------------------------ hollow rectangle ----------------------------

function frameHollowRectangle(dimensions, needToReturnInArray) {
  const rectangle = [];
  const width = dimensions[0];
  const noOfMiddleRows = dimensions[1] - 2;
  rectangle.push(stars(width));

  for (let index = 0; index < noOfMiddleRows; index++) {
    rectangle.push(getHollowRow(width, STAR));
  }

  rectangle.push(stars(width));

  return needToReturnInArray === true ? rectangle : rectangle.join("\n");
}

function getHollowRectangle(dimensions, needToReturnInArray) {
  if (dimensions[0] <= 2 || dimensions[1] <= 2) {
    return (getFilledRectangle(dimensions, needToReturnInArray));
  }

  return frameHollowRectangle(dimensions, needToReturnInArray);
}

// -------------------------- alternating  rectangle -----------------------

function getRow(index, rowLength) {
  if ((index & 1) === 0) {
    return stars(rowLength);
  }

  return hyphens(rowLength);
}

function getAlternatingRectangle(dimensions, needToReturnInArray) {
  const rectangle = [];
  const rowLength = dimensions[0];
  const height = dimensions[1];

  for (let index = 0; index < height; index++) {
    const row = getRow(index, rowLength);
    rectangle.push(row);
  }

  return needToReturnInArray === true ? rectangle : rectangle.join("\n");
}

// -------------------------- spaced alternating rectangle  ----------------

function getSpacedAlternatingRectangle(dimensions, needToReturnInArray) {
  const rectangle = [];
  const chars = [STAR, HYPHEN, SPACE];
  const rowLength = dimensions[0];
  const height = dimensions[1];

  for (let index = 0; index < height; index++) {
    rectangle.push(getLine(chars[index % 3], rowLength));
  }

  return needToReturnInArray === true ? rectangle : rectangle.join("\n");
}

// ------------------------- triangle -----------------------------------

function getTriangle(rowsCount, needToReturnInArray) {
  const trinagle = [];

  for (let index = 1; index <= rowsCount; index++) {
    trinagle.push(stars(index));
  }

  return needToReturnInArray === true ? trinagle : trinagle.join("\n");
}

// -------------------------right aligned triangle --------------------------

function getRightAlignedTriangle(rowsCount, needToReturnInArray) {
  const triangle = [];

  for (let index = 1; index <= rowsCount; index++) {
    const row = stars(index);
    triangle.push(row.padStart(rowsCount));
  }

  return needToReturnInArray === true ? triangle : triangle.join("\n");
}

// ----------------------------- diamond ---------------------------------- 

function addUpperAndLowerTriangles(rowsCount, diamondMiddleRow,
  needToReturnInArray) {
  const rowLengthStart = Math.ceil(rowsCount / 2);
  const diamond = [copyArray(diamondMiddleRow)];
  let noOfStars = rowsCount - 2;

  for (let index = rowsCount - 1; index >= rowLengthStart; index--) {
    const starsRow = stars(noOfStars);
    diamond.push(starsRow.padStart(index));
    diamond.unshift(starsRow.padStart(index));
    noOfStars = noOfStars - 2;
  }

  return needToReturnInArray === true ? diamond : diamond.join("\n");
}

function getDiamond(noOfRows, needToReturnInArray) {
  if (noOfRows < 3) {
    return "*";
  }

  const rowsCount = (noOfRows & 1) === 0 ? noOfRows - 1 : noOfRows;
  const diamondMiddleRow = [stars(rowsCount)];

  return addUpperAndLowerTriangles(rowsCount, diamondMiddleRow,
    needToReturnInArray);
}

// ----------------------------- hollow diamond --------------------------- 

function addRemainingRows(rowsCount, middleRow, rowLengthStart) {
  const middleHollowRows = [];
  middleHollowRows.push(copyArray(middleRow));
  let rowLength = rowsCount - 2;

  for (let index = rowsCount - 1; index > rowLengthStart; index--) {
    const starsRow = getHollowRow(rowLength, STAR);
    middleHollowRows.push(starsRow.padStart(index));
    middleHollowRows.unshift(starsRow.padStart(index));
    rowLength = rowLength - 2;
  }

  return middleHollowRows.join("\n");
}

function getHollowDiamond(noOfRows, needToReturnInArray) {
  if (noOfRows < 3) {
    return "*";
  }

  const rowsCount = (noOfRows & 1) === 0 ? noOfRows - 1 : noOfRows;
  const middleRow = [getHollowRow(rowsCount, STAR)];
  const rowLengthStart = Math.ceil(rowsCount / 2);
  const diamond = [addRemainingRows(rowsCount, middleRow, rowLengthStart)];
  diamond.push(STAR.padStart(rowLengthStart));
  diamond.unshift(STAR.padStart(rowLengthStart));

  return needToReturnInArray === true ? diamond : diamond.join("\n");
}

// ----------------------------- main function ---------------------------

const getFunctionIndex = function (style) {
  const functionNames = ['filled-rectangle', 'hollow-rectangle',
    'alternating-rectangle', 'triangle', 'right-aligned-triangle'
    , 'spaced-alternating-rectangle', 'diamond', 'hollow-diamond'
  ];

  return functionNames.indexOf(style);
};

const getFunctionName = function (index) {
  const functions = [getFilledRectangle, getHollowRectangle,
    getAlternatingRectangle, getTriangle, getRightAlignedTriangle,
    getSpacedAlternatingRectangle, getDiamond, getHollowDiamond
  ];

  return functions[index];
};

const generatePattern = function (style1, dimensions, style2) {
  if (isAnyDimensionZero(dimensions)) {
    return "";
  }

  if (style2 !== undefined) {
    return getCombinedPattern(style1, dimensions, style2);
  }

  return getFunctionName(getFunctionIndex(style1))(dimensions);
};

const getCombinedPattern = function (style1, dimensions, style2) {
  const pattern1 = getFunctionName(getFunctionIndex(style1))(dimensions, true);
  const pattern2 = getFunctionName(getFunctionIndex(style2))(dimensions, true);
  const mergedPattern = [];

  for (let index = 0; index < pattern1.length; index++) {
    const firstPatternRow = pattern1[index].padEnd((dimensions[0] + 1), SPACE);
    const secondPatternRow = pattern2[index];
    mergedPattern.push(firstPatternRow + secondPatternRow);
  }

  return mergedPattern.join("\n");
};

// -------------------------------- Testing -------------------------------

function testGeneratePattern(style, dimensions, expected, failed) {
  const actual = generatePattern(style, dimensions);

  if (actual !== expected) {
    failed.push([style, dimensions, actual, expected]);
  }
}

function testGenerateCombinedPattern(style1, dimensions, style2, expected,

  failed) {
  const actual = generatePattern(style1, dimensions, style2);

  if (actual !== expected) {
    failed.push([style1, dimensions, style2, actual, expected]);
  }
}

function testsPassingStatus(failed) {
  if (failed.length === 0) {
    return "ALL TESTS ARE PASSING 😃";
  }

  return (failed);
}

// ------------------------------ test cases ------------------------------

function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [1, 0], '', failed);
  testGeneratePattern('filled-rectangle', [1, 1], '*', failed);
  testGeneratePattern('filled-rectangle', [1, 2], '*\n*', failed);
  testGeneratePattern('filled-rectangle', [1, 3], '*\n*\n*', failed);
  testGeneratePattern('filled-rectangle', [2, 1], '**', failed);
  testGeneratePattern('filled-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('filled-rectangle', [2, 3], '**\n**\n**', failed);
  testGeneratePattern('filled-rectangle', [4, 1], '****', failed);
  testGeneratePattern('filled-rectangle', [4, 2], '****\n****', failed);
  testGeneratePattern('filled-rectangle', [4, 4], '****\n****\n****\n****',
    failed);
  testGeneratePattern('filled-rectangle', [5, 3], '*****\n*****\n*****',
    failed);
}

function testHollowRectangle(failed) {
  testGeneratePattern('hollow-rectangle', [1, 0], '', failed);
  testGeneratePattern('hollow-rectangle', [1, 1], '*', failed);
  testGeneratePattern('hollow-rectangle', [1, 2], '*\n*', failed);
  testGeneratePattern('hollow-rectangle', [1, 3], '*\n*\n*', failed);
  testGeneratePattern('hollow-rectangle', [2, 1], '**', failed);
  testGeneratePattern('hollow-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('hollow-rectangle', [2, 3], '**\n**\n**', failed);
  testGeneratePattern('hollow-rectangle', [3, 1], '***', failed);
  testGeneratePattern('hollow-rectangle', [3, 2], '***\n***', failed);
  testGeneratePattern('hollow-rectangle', [3, 3], '***\n* *\n***', failed);
  testGeneratePattern('hollow-rectangle', [4, 4], '****\n*  *\n*  *\n****',
    failed);
  testGeneratePattern('hollow-rectangle', [6, 3], '******\n*    *\n******',
    failed);
}

function testAlternatingRectangle(failed) {
  testGeneratePattern('alternating-rectangle', [0, 5], '', failed);
  testGeneratePattern('alternating-rectangle', [7, 0], '', failed);
  testGeneratePattern('alternating-rectangle', [1, 1], '*', failed);
  testGeneratePattern('alternating-rectangle', [1, 2], '*\n-', failed);
  testGeneratePattern('alternating-rectangle', [1, 3], '*\n-\n*', failed);
  testGeneratePattern('alternating-rectangle', [2, 1], '**', failed);
  testGeneratePattern('alternating-rectangle', [2, 2], '**\n--', failed);
  testGeneratePattern('alternating-rectangle', [2, 3], '**\n--\n**', failed);
  testGeneratePattern('alternating-rectangle', [3, 1], '***', failed);
  testGeneratePattern('alternating-rectangle', [3, 2], '***\n---', failed);
  testGeneratePattern('alternating-rectangle', [3, 3], '***\n---\n***',
    failed);
  testGeneratePattern('alternating-rectangle', [3, 3], '***\n---\n***',
    failed);
  testGeneratePattern('alternating-rectangle', [5, 4],
    '*****\n-----\n*****\n-----', failed);
  testGeneratePattern('alternating-rectangle', [6, 2], '******\n------',
    failed);
  testGeneratePattern('alternating-rectangle', [4, 1], '****', failed);
}

function testTriangle(failed) {
  testGeneratePattern('triangle', [0], '', failed);
  testGeneratePattern('triangle', [1], '*', failed);
  testGeneratePattern('triangle', [2], '*\n**', failed);
  testGeneratePattern('triangle', [3], '*\n**\n***', failed);
  testGeneratePattern('triangle', [5], '*\n**\n***\n****\n*****',
    failed);
  testGeneratePattern('triangle', [6], '*\n**\n***\n****\n*****\n******',
    failed);
}

function testRightAlignTriangle(failed) {
  testGeneratePattern('right-aligned-triangle', [0], '', failed);
  testGeneratePattern('right-aligned-triangle', [1], '*', failed);
  testGeneratePattern('right-aligned-triangle', [2], ' *\n**', failed);
  testGeneratePattern('right-aligned-triangle', [3], '  *\n **\n***', failed);
  testGeneratePattern('right-aligned-triangle', [5],
    '    *\n   **\n  ***\n ****\n*****', failed);
  testGeneratePattern('right-aligned-triangle', [6],
    '     *\n    **\n   ***\n  ****\n *****\n******',
    failed);
}

function testSpacedAlternatingRectangle(failed) {
  testGeneratePattern('spaced-alternating-rectangle', [7, 0], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [0, 3], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 1], '*', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 2], '*\n-', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 3], '*\n-\n ',
    failed);
  testGeneratePattern('spaced-alternating-rectangle', [2, 1], '**', failed);
  testGeneratePattern('spaced-alternating-rectangle', [2, 2], '**\n--',
    failed);
  testGeneratePattern('spaced-alternating-rectangle', [2, 3], '**\n--\n  ',
    failed);
  testGeneratePattern('spaced-alternating-rectangle', [3, 1], '***', failed);
  testGeneratePattern('spaced-alternating-rectangle', [3, 2], '***\n---',
    failed);
  testGeneratePattern('spaced-alternating-rectangle', [3, 3], '***\n---\n   ',
    failed);
  testGeneratePattern('spaced-alternating-rectangle', [5, 6],
    '*****\n-----\n     \n*****\n-----\n     ', failed);
  testGeneratePattern('spaced-alternating-rectangle', [6, 2], '******\n------',
    failed);
}

function testDiamondPattern(failed) {
  testGeneratePattern('diamond', [0], '', failed);
  testGeneratePattern('diamond', [1], '*', failed);
  testGeneratePattern('diamond', [2], '*', failed);
  testGeneratePattern('diamond', [3], ' *\n***\n *', failed);
  testGeneratePattern('diamond', [4], ' *\n***\n *', failed);
  testGeneratePattern('diamond', [5], '  *\n ***\n*****\n ***\n  *', failed);
  testGeneratePattern('diamond', [6], '  *\n ***\n*****\n ***\n  *', failed);
  testGeneratePattern('diamond', [7],
    '   *\n  ***\n *****\n*******\n *****\n  ***\n   *', failed);
  testGeneratePattern('diamond', [8],
    '   *\n  ***\n *****\n*******\n *****\n  ***\n   *', failed);
  testGeneratePattern('diamond', [9], '    *\n   ***\n  *****\n ***' +
    '****\n*********\n *******\n  *****\n   ***\n    *', failed);
}

function testHollowDiamondPattern(failed) {
  testGeneratePattern('hollow-diamond', [0], '', failed);
  testGeneratePattern('hollow-diamond', [1], '*', failed);
  testGeneratePattern('hollow-diamond', [2], '*', failed);
  testGeneratePattern('hollow-diamond', [3], ' *\n* *\n *', failed);
  testGeneratePattern('hollow-diamond', [4], ' *\n* *\n *', failed);
  testGeneratePattern('hollow-diamond', [5], '  *\n * *\n*   *\n * *\n  *',
    failed);
  testGeneratePattern('hollow-diamond', [6], '  *\n * *\n*   *\n * *\n  *',
    failed);
  testGeneratePattern('hollow-diamond', [7],
    '   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *', failed);
  testGeneratePattern('hollow-diamond', [8],
    '   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *', failed);
  testGeneratePattern('hollow-diamond', [9],
    '    *\n   * *\n  *   *\n *     *\n*       *\n *     *\n  *   *\n   * *\n    *', failed);
}

//-------------------------------- double patterns test cases ---------------

function testfilledAndFilled(failed) {
  testGenerateCombinedPattern('filled-rectangle', [0, 0], 'filled-rectangle',
    '', failed);
  testGenerateCombinedPattern('filled-rectangle', [0, 1], 'filled-rectangle',
    '', failed);
  testGenerateCombinedPattern('filled-rectangle', [1, 0], 'filled-rectangle',
    '', failed);
  testGenerateCombinedPattern('filled-rectangle', [1, 1], 'filled-rectangle',
    '* *', failed);
  testGenerateCombinedPattern('filled-rectangle', [2, 2], 'filled-rectangle',
    '** **\n** **', failed);
  testGenerateCombinedPattern('filled-rectangle', [3, 3], 'filled-rectangle',
    '*** ***\n*** ***\n*** ***', failed);
  testGenerateCombinedPattern('filled-rectangle', [4, 4], 'filled-rectangle',
    '**** ****\n**** ****\n**** ****\n**** ****', failed);
}

function testFilledAndHollow(failed) {
  testGenerateCombinedPattern('filled-rectangle', [0, 0], 'hollow-rectangle',
    '', failed);
  testGenerateCombinedPattern('filled-rectangle', [0, 1], 'hollow-rectangle',
    '', failed);
  testGenerateCombinedPattern('filled-rectangle', [1, 0], 'hollow-rectangle',
    '', failed);
  testGenerateCombinedPattern('filled-rectangle', [1, 1], 'hollow-rectangle',
    '* *', failed);
  testGenerateCombinedPattern('filled-rectangle', [2, 2], 'hollow-rectangle',
    '** **\n** **', failed);
  testGenerateCombinedPattern('filled-rectangle', [3, 3], 'hollow-rectangle',
    '*** ***\n*** * *\n*** ***', failed);
  testGenerateCombinedPattern('filled-rectangle', [4, 4], 'hollow-rectangle',
    '**** ****\n**** *  *\n**** *  *\n**** ****', failed);
}

function testfilledAndAlternatingRectangle(failed) {
  testGenerateCombinedPattern('filled-rectangle', [0, 0],
    'alternating-rectangle', '', failed);
  testGenerateCombinedPattern('filled-rectangle', [0, 1],
    'alternating-rectangle', '', failed);
  testGenerateCombinedPattern('filled-rectangle', [1, 0],
    'alternating-rectangle', '', failed);
  testGenerateCombinedPattern('filled-rectangle', [1, 1],
    'alternating-rectangle', '* *', failed);
  testGenerateCombinedPattern('filled-rectangle', [2, 2],
    'alternating-rectangle', '** **\n** --', failed);
  testGenerateCombinedPattern('filled-rectangle', [3, 3],
    'alternating-rectangle', '*** ***\n*** ---\n*** ***', failed);
  testGenerateCombinedPattern('filled-rectangle', [4, 4],
    'alternating-rectangle', '**** ****\n**** ----\n**** ****\n**** ----',
    failed);
}

function testFilledAndSpacedAlternatingRectangle(failed) {

  testGenerateCombinedPattern('filled-rectangle', [0, 0],
    'spaced-alternating-rectangle', '', failed);
  testGenerateCombinedPattern('filled-rectangle', [0, 1],
    'spaced-alternating-rectangle', '', failed);
  testGenerateCombinedPattern('filled-rectangle', [1, 0],
    'spaced-alternating-rectangle', '', failed);
  testGenerateCombinedPattern('filled-rectangle', [1, 1],
    'spaced-alternating-rectangle', '* *', failed);
  testGenerateCombinedPattern('filled-rectangle', [2, 2],
    'spaced-alternating-rectangle', '** **\n** --', failed);
  testGenerateCombinedPattern('filled-rectangle', [3, 3],
    'spaced-alternating-rectangle', '*** ***\n*** ---\n***    ', failed);
  testGenerateCombinedPattern('filled-rectangle', [4, 4],
    'spaced-alternating-rectangle', '**** ****\n**** ----\n****     \n**** ****',
    failed);
}

function testRightAlignedTrinagleAndTriangle(failed) {
  testGenerateCombinedPattern("right-aligned-triangle", [0], "triangle", "",
    failed);
  testGenerateCombinedPattern("right-aligned-triangle", [1], "triangle", "* *",
    failed);
  testGenerateCombinedPattern("right-aligned-triangle", [2], "triangle",
    " * *\n** **", failed);
  testGenerateCombinedPattern("right-aligned-triangle", [3], "triangle",
    "  * *\n ** **\n*** ***", failed);
  testGenerateCombinedPattern("right-aligned-triangle", [4], "triangle",
    "   * *\n  ** **\n *** ***\n**** ****", failed);
  testGenerateCombinedPattern("right-aligned-triangle", [5], "triangle",
    "    * *\n   ** **\n  *** ***\n **** ****\n***** *****", failed);
  testGenerateCombinedPattern("right-aligned-triangle", [6], "triangle",
    "     * *\n    ** **\n   *** ***\n  **** ****\n ***** *****\n****** ******", failed);
  testGenerateCombinedPattern("right-aligned-triangle", [7], "triangle",
    "      * *\n     ** **\n    *** ***\n   **** ****\n  " +
    "***** *****\n ****** ******\n******* *******", failed);
}

function testTriangleAndRightAlignedTrinagle(failed) {
  testGenerateCombinedPattern("triangle", [0], "right-aligned-triangle", "",
    failed);
  testGenerateCombinedPattern("triangle", [1], "right-aligned-triangle", "* *",
    failed);
  testGenerateCombinedPattern("triangle", [2], "right-aligned-triangle",
    "*   *\n** **", failed);
  testGenerateCombinedPattern("triangle", [3], "right-aligned-triangle",
    "*     *\n**   **\n*** ***", failed);
  testGenerateCombinedPattern("triangle", [4], "right-aligned-triangle",
    "*       *\n**     **\n***   ***\n**** ****", failed);
  testGenerateCombinedPattern("triangle", [5], "right-aligned-triangle",
    "*         *\n**       **\n***"
    + "     ***\n****   ****\n***** *****", failed);
  testGenerateCombinedPattern("triangle", [6], "right-aligned-triangle",
    "*           *\n**         **\n***       ***\n****"
    + "     ****\n*****   *****\n****** ******", failed);
  testGenerateCombinedPattern("triangle", [7], "right-aligned-triangle",
    "*             *\n**           **\n***         ***\n****       ****\n*****"
    + "     *****\n******   ******\n******* *******", failed);
}

function testDiamondAndHollowDiamond(failed) {
  testGenerateCombinedPattern("diamond", [0], "hollow-diamond", "",
    failed);
  testGenerateCombinedPattern("diamond", [1], "hollow-diamond", "* *",
    failed);
  testGenerateCombinedPattern("diamond", [2], "hollow-diamond", "* *",
    failed);
  testGenerateCombinedPattern("diamond", [3], "hollow-diamond", " *   * \n" +
    "*** * *\n *   * ", failed);
  testGenerateCombinedPattern("diamond", [4], "hollow-diamond", " *   * \n" +
    "*** * *\n *   * ", failed);
  testGenerateCombinedPattern("diamond", [5], "hollow-diamond",
    "  *     *  \n ***   * *  \n***** *   *\n ***  * * \n  *     *  ", failed);
  testGenerateCombinedPattern("diamond", [6], "hollow-diamond",
    "  *     *  \n ***   * *  \n***** *   *\n ***  * * \n  *     *  ", failed);
  testGenerateCombinedPattern("diamond", [7], "hollow-diamond",
    "   *       *   \n  ***     * *   \n *****   *   * \n******* *     *\n" +
    " *****   *   * \n  ***     * *\n   *       *   ", failed);
}
// --------------------------- test cases calling -------------------------

function testCombinedPatterns() {
  const failed = [];

  testfilledAndFilled(failed);
  testFilledAndHollow(failed);
  testfilledAndAlternatingRectangle(failed);
  testFilledAndSpacedAlternatingRectangle(failed);
  testTriangleAndRightAlignedTrinagle(failed);
  testRightAlignedTrinagleAndTriangle(failed);
  // testDiamondAndHollowDiamond(failed);

  console.table(testsPassingStatus(failed));
}

function testAll() {
  const failed = [];

  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  testTriangle(failed);
  testRightAlignTriangle(failed);
  testSpacedAlternatingRectangle(failed);
  testDiamondPattern(failed);
  testHollowDiamondPattern(failed);

  console.table(testsPassingStatus(failed));
}

testAll();

// testCombinedPatterns();


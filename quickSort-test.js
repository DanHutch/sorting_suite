const assert = require('chai').assert;
const quickSort = require('./quickSort');

describe("quickSort", () => {

  it("can sort an array", () =>
    assert.deepEqual(quickSort([4, 3, 5, 1, 2]), [1, 2, 3, 4, 5])
  )

  it("can sort an array with duplicate values", () =>
    assert.deepEqual(quickSort([4, 3, 5, 5, 2, 1, 2]), [1, 2, 2, 3, 4, 5, 5])
  )

  it("can sort an array with multi-digit values", () =>
    assert.deepEqual(quickSort([40, 3, 5, 5, 2, 1, 2]), [1, 2, 2, 3, 5, 5, 40])
  )

  it("can sort an array with duplicate values, negative numbers, and zeros", () =>
    assert.deepEqual(quickSort([4, 0, 0, -2, -1, -2, 3, 5, 5, 2, 1, 2]), [-2, -2, -1, 0, 0, 1, 2, 2, 3, 4, 5, 5])
  )

  it("can even sort a string", () =>
    assert.deepEqual(quickSort("a string is not an array"), [" ", " ", " ", " ", " ", "a", "a", "a", "a", "g", "i", "i", "n", "n", "n", "o", "r", "r", "r", "s", "s", "t", "t", "y"])
  )

  // my friend showed me this testing method, and random number generator used, to see how large a data set can be processed within the time allowed be chai.
  it("is a fast sorter", () => {

    const getRandomNums = (range) => {
      let numNums = [];
      for (let n = 0; n < range; n++) {
        let nums = Math.round(Math.random() * (range - 1) + 1);
        numNums.push(nums);
      };
      return numNums
    };

    const randomArray = (getRandomNums(900000))

    assert.deepEqual(quickSort(randomArray), randomArray.sort((a, b) => {
      return a - b;
    }))
  })
});
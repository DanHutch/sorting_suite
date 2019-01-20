const assert = require('chai').assert;
const quickSort = require('./quickSort');

describe("quickSort", function() {
  it("can sort an array", function() {
    assert.deepEqual(quickSort([4, 3, 5, 1, 2]), [1, 2, 3, 4, 5]);
  })
  it("can sort an array with duplicate values", function() {
    assert.deepEqual(quickSort([4, 3, 5, 5, 2, 1, 2]), [1, 2, 2, 3, 4, 5, 5]);
  })
  it("can sort an array with duplicate values, negative numbers, and zeros", function() {
    assert.deepEqual(quickSort([4, 0, 0, -2, -1, -2, 3, 5, 5, 2, 1, 2]), [-2, -2, -1, 0, 0, 1, 2, 2, 3, 4, 5, 5]);
  })
  it("can sort an array with duplicate values, negative numbers, and zeros", function() {
    assert.deepEqual(quickSort("a string is not an array"), [" ", " ", " ", " ", " ", "a", "a", "a", "a", "g", "i", "i", "n", "n", "n", "o", "r", "r", "r", "s", "s", "t", "t", "y"]);
  })
});
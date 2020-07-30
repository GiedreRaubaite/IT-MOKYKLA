const findLongestWord = require("../Lesson5.2/find");
const { longestWord } = require("../Lesson5.2/find");
const { things } = require("../Lesson5.2/find");

QUnit.module('findLongestWord', function () {
  QUnit.test('should find the longest word ', function (assert) {
    assert.equal(longestWord, "sunglasses", 'found the longest word');
  });
  QUnit.test('things is not an empty array', function (assert) {
    assert.notEqual(things.length, 0, "array is not empty")
  });
});






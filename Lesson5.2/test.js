const findLongestWord = require ('../Lesson5.2/find')
QUnit.module('findLongestWord', function () {
  QUnit.test('should find the longest word ', function (assert) {
    assert.equal(findLongestWord("England", "Lithuania", "Congo"), "Lithuania", 'found the longest word');
    assert.equal(findLongestWord("apple", "wine", "cheesecake"), "cheesecake", 'found the longest word');
    });
  QUnit.test('should throw error when no parameters', function(assert){
    assert.throws(function(){
      findLongestWord();
  });
});
});




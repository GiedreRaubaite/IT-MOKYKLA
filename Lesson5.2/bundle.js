(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var longest
var findLongestWord = function () {
  var lgth = 0;
  if (arguments.length === 0) {
    throw Error ('No parameters');
  }
  else{
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i].length > lgth) {
      var lgth = arguments[i].length;
      longest = arguments[i];
    }
  }
  return longest;
}
}

module.exports = findLongestWord



},{}],2:[function(require,module,exports){
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




},{"../Lesson5.2/find":1}]},{},[2]);

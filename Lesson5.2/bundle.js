(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var longest
var things 
var findLongestWord = function () {
  things = ["banana", "car", "computer", "paper", "book", "pencil", "sunglasses"];
  var lgth = 0;
  for (var i = 0; i < things.length; i++) {
    if (things[i].length > lgth) {
      var lgth = things[i].length;
      longest = things[i];
    }
  }
}

findLongestWord();

module.exports = {
  findLongestWord: findLongestWord,
  longestWord: longest,
  things: things
}




},{}],2:[function(require,module,exports){
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






},{"../Lesson5.2/find":1}]},{},[2]);

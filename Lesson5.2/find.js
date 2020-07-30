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




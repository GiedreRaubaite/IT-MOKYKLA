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



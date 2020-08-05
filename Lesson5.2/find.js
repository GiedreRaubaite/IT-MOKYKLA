function findLongestWord(params = []) {
  var longest;
  var lgth = 0;
  if (params.length === 0) {
    throw Error('No parameters');
  } else {
    for (var i = 0; i < params.length; i++) {
      if (params[i].length > lgth) {
        lgth = params[i].length;
        longest = params[i];
      }
    }
    return longest;
  }
}


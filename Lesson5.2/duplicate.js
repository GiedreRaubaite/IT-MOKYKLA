var duplicate = function (params = []) {
  var newArray = [];
  if (params.length === 0) {
    throw Error('No parameters');
  }
  else {
    newArray = params.concat(params);
    return newArray;
  }
}





var duplicate = function (params = []) {
  if (params.length === 0) {
    throw Error('No parameters');
  }
  else {
    return params.concat(params);
  }
}





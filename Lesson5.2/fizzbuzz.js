var fizzbuzz = function (x) {
  newArray = [];
  for (i = 1; i <= 100; i++) {

    switch (true) {
      case (i % 3 === 0) && (i % 5 === 0):
        newArray.push("fizzbuzz")
        break;
      case (i % 3 === 0):
        newArray.push("fizz")
        break;
      case (i % 5 === 0):
        newArray.push("buzz")
        break;
      default:
        newArray.push(i);
        break;
    };
  }
  if (x === undefined) {
    return newArray.join();
  }
  else {
    return newArray[x];
  }
}


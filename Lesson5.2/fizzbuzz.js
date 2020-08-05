var fizzbuzz = function (i) {
  for (i; i <= 100; i++) {
    if (i % 3 === 0) {
      return console.log("fizz");
    }
    if (i % 5 === 0) {
      return console.log("buzz");
    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
      return console.log("fizzbuzz");
    }
    else {
      return console.log("Not multiple of 3 or 5");
    }
  };
}


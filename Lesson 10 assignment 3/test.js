QUnit.module('sumNumber', function () {
  QUnit.test('should sum two variables ', function (assert) {
    assert.equal(sumNumber(1, 5), 6);
    assert.equal(sumNumber(1.5, 1.5), 3);
  });
  QUnit.test('should throw error when no parameters', function (assert) {
    assert.throws(function () {
      sumNumber();
    });
  });
});
QUnit.module('sumArray', function () {
  QUnit.test('should sum all variables in the array', function (assert) {
    assert.equal(sumArray([5, 2, 1, 6, 9, 8]), 31);
    assert.equal(sumArray([1, 2, 3, 4, 5]), 15);
  });
  QUnit.test('should throw error when no parameters', function (assert) {
    assert.throws(function () {
      sumArray();
    });
  });
});
QUnit.module('findSmallest', function () {
  QUnit.test('should find smallest number in the array', function (assert) {
    assert.equal(findSmallest(15, 10, 2), 2);
    assert.equal(findSmallest(10, 99, 1, 0.5), 0.5);
  });
  QUnit.test('should throw error when no parameters', function (assert) {
    assert.throws(function () {
      findSmallest();
    });
  });
});
QUnit.module('farenheitToCelsius', function () {
  QUnit.test('should convert Farenheit to Celsius', function (assert) {
    assert.equal(farenheitToCelsius(77), 25);
    assert.equal(farenheitToCelsius(167), 75);
  });
  QUnit.test('should throw error when no parameters', function (assert) {
    assert.throws(function () {
      farenheitToCelsius();
    });
  });
});
QUnit.module('reverse', function () {
  QUnit.test('should reverse a string', function (assert) {
    assert.equal(reverse("My new house"), "esuoh wen yM");
    assert.equal(reverse("Santa Claus is coming to town"), "nwot ot gnimoc si sualC atnaS");
  });
  QUnit.test('should throw error when no parameters', function (assert) {
    assert.throws(function () {
      farenheitToCelsius();
    });
  });
});
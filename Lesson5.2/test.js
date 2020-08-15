QUnit.module('findLongestWord', function () {
  QUnit.test('should find the longest word ', function (assert) {
    assert.equal(findLongestWord(["England", "Lithuania", "Congo"]), "Lithuania", "Found the longest word");
    assert.equal(findLongestWord(["apple", "wine", "cheesecake"]), "cheesecake", "Found the longest word");
  });
  QUnit.test('should throw error when no parameters', function (assert) {
    assert.throws(function () {
      findLongestWord();
    });
  });
});
QUnit.module('sum&multiply', function () {
  QUnit.test('should sum all numbers in array ', function (assert) {
    assert.equal(sum([10, 20, 30, 40, 50]), 150, "sums correctly");
    assert.equal(sum([-10, -20, 50, 1]), 21, "sums correctly negative numbers");
    assert.equal(sum([2.5, 2, 1.60]), 6.1, "sums correctly comma numbers");
  });
  QUnit.test('should multiply all numbers in array ', function (assert) {
    assert.equal(multiply([2, 4, 5, 9, 3]), 1080, "multiplies correctly");
    assert.equal(multiply([-10, 2, 3]), -60, "multiplies correctly negative numbers");
    assert.equal(multiply([2.5, 2, 1.60]), 8, "multiplies correctly comma numbers");
  });
  QUnit.test('should throw error when no parameters', function (assert) {
    assert.throws(function () {
      sum();
    });
    assert.throws(function () {
      multiply();
    });
  });
});
QUnit.module('evaluateExpression', function () {
  QUnit.test('plus operator', function (assert) {
    assert.strictEqual(evaluateExpression(2, 5, "+"), 7);
    assert.strictEqual(evaluateExpression(10, 5.5, "+"), 15.5);
    assert.strictEqual(evaluateExpression(-2, -2, "+"), -4);
  });
  QUnit.test('minus operator', function (assert) {
    assert.strictEqual(evaluateExpression(5, 2, "-"), 3);
    assert.strictEqual(evaluateExpression(5, 4.5, "-"), 0.5);
    assert.strictEqual(evaluateExpression(-2, 6, "-"), -8);
  });
  QUnit.test('multiply operator', function (assert) {
    assert.strictEqual(evaluateExpression(5, 2, "*"), 10);
    assert.strictEqual(evaluateExpression(5, 1.5, "*"), 7.5);
    assert.strictEqual(evaluateExpression(2, -6, "*"), -12);
  });
  QUnit.test('divide operator', function (assert) {
    assert.strictEqual(evaluateExpression(10, 2, "/"), 5);
    assert.strictEqual(evaluateExpression(5, 2.5, "/"), 2);
    assert.strictEqual(evaluateExpression(6, -6, "/"), -1);
  });
  QUnit.test('should throw error when no operator', function (assert) {
    assert.throws(function () {
      evaluateExpression(10, 5, "?");
    });
  });
});
QUnit.module('duplicate', function () {
  QUnit.test('should duplicate an array and make a new array', function (assert) {
    assert.deepEqual(duplicate([10, 20]), ([10, 20, 10, 20]), "duplicate correctly (numbers)");
    assert.deepEqual(duplicate(["labas", "rytas"]), (["labas", "rytas", "labas", "rytas"]), "duplicate correctly (words)");
  });
  QUnit.test('should throw error when no operator', function (assert) {
    assert.throws(function () {
      duplicate();
    });
  });
});
QUnit.module('fizzbuzz', function () {
  QUnit.test('should say "fizz" at multiples of 3', function (assert) {
    var fizzbuzzResult = fizzbuzz();
    assert.equal(fizzbuzzResult[2], ["fizz"]  ,  "OK");
    assert.equal(fizzbuzzResult[8], ["fizz"]  ,  "OK");
  });
  QUnit.test('should say "buzz" at multiples of 5', function (assert) {
    var fizzbuzzResult = fizzbuzz();
    assert.equal(fizzbuzzResult[4], ["buzz"]  ,  "OK");
    assert.equal(fizzbuzzResult[24], ["buzz"]  ,  "OK");
  });
  QUnit.test('should say "buzz" at multiples of 5 and 3', function (assert) {
    var fizzbuzzResult = fizzbuzz();
    assert.equal(fizzbuzzResult[14], ["fizzbuzz"]  ,  "OK");
    assert.equal(fizzbuzzResult[29], ["fizzbuzz"]  ,  "OK");
  });
});






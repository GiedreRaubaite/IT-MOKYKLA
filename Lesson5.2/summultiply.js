var sum = function (params = []) {
    if (params.length === 0) {
        throw Error('No parameters');
    }
    else {
        return params.reduce(function (a, b) {
            return a + b;
        }, 0)
    }
};

var multiply = function (params = []) {
    if (params.length === 0) {
        throw Error('No parameters');
    }
    else {
        return params.reduce(function (a, b) {
            return a * b;
        });
    }
}


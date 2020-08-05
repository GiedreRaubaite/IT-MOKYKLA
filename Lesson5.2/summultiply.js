var sum = function (params = []) {
    if (params.length === 0) {
        throw Error('No parameters');
    }
    else {
        var val = params.reduce(function (a, b) {
            return a + b;
        }, 0)
        return val;
    }
};

var multiply = function (params = []) {
    if (params.length === 0) {
        throw Error('No parameters');
    }
    else {
        var x = 1;
        for (var i = 0; i < params.length; i++) {
            x = x * params[i];
        }
        return x;
    }
}

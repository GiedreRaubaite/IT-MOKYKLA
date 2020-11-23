function sumNumber(a, b) {
    if ((a || b) === undefined) {
        throw new Error('no arguments');
    }
    else { return a + b; }
}
function sumArray(param) {
    if (param === undefined) {
        throw new Error('no arguments');
    }
    else {
        return param.reduce((a, b) => a + b, 0);
    }
}
function findSmallest(...param) {
    if ((param.length === 0)) {
        throw new Error('no arguments');
    }
    else {
        return Math.min(...param);
    }
}
function farenheitToCelsius(param) {
    if (param === undefined) {
        throw new Error('no arguments');
    }
    else {
        return (param - 32) / 1.8;
    }
}
function reverse(str) {
    if (str === undefined) {
        throw new Error('no arguments');
    }
    else {
        let splitString = str.split("");
        let reverserdString = splitString.reverse();
        let joinedString = reverserdString.join("");
        return joinedString;
    }
}


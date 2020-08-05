var evaluateExpression = function (firstNo, secondNo, operator) {
    switch (operator) {
        case "+":
            return firstNo + secondNo;
            break;
        case "-":
            return firstNo - secondNo;
            break;
        case "*":
            return firstNo * secondNo;
            break;
        case "/":
            return firstNo / secondNo;
            break;
        default:
            throw new Error('Unsupported operator.');
            break;
    }
}
var calculator = (function () {

    var clearNumbers

    var calculate = function (x, y) {

        var firstNumber = parseFloat(firstNumberInput.value),
            secondNumber = parseFloat(secondNumberInput.value),
            result = document.getElementById('result')



        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            alert('It is not a number!');
        }
        else {

            switch (symbol.value) {
                case "+": {
                    return result.value = (firstNumber + secondNumber);

                    break;
                }
                case "-": {
                    return result.value = (firstNumber - secondNumber);
                    break;
                }
                case "*": {
                    return result.value = (firstNumber * secondNumber);
                    break;
                }
                case "/": {
                    if (secondNumber != 0) {
                        return result.value = (firstNumber / secondNumber);
                    }
                    else {
                        alert("You cannot divide by 0")
                    }
                    break;
                };

            }
        };



    };
    clearNumbers = function () {
        firstNumberInput.value = null;
        secondNumberInput.value = null;
        result.value = "Result";

    };
    return {
        calculate: calculate,
        clearNumbers: clearNumbers
    };

}());



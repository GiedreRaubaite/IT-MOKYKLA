const calculator = (function() {
    let currNumber = document.getElementById("currNumber"),
        result = null

    function calculate() {
        currNumber = document.getElementById("currNumber").innerHTML;
        if (currNumber.endsWith("+" || "-" || "*" || "." || "/")) {
            deleteLastNumber();
            show();
        } else {
            result = eval(currNumber);
            $('#currNumber').empty().append(result);
        }
    };

    function whichNumber(e) {
        let target = null;
        if (e == undefined) {
            e = e || window.event;
            target = e.srcElement.innerText
        } else {
            e = e
            target = e;
        }
        if ($('#currNumber').text() == 0) {
            $('#currNumber').empty().append(target);
        } else {
            $('#currNumber').append(target);
        }
    };

    function clearNumbers() {
        document.getElementById("currNumber").innerHTML = 0;
        currNumber = null,
            result = null
    }

    function show() {
        calculate();
        if (result.isNaN) {
            alert('Something went wrong...');
        } else {
            calculate();
        }
    }

    function deleteLastNumber() {
        let numberLine = document.getElementById("currNumber").innerHTML;
        numberLine = numberLine.slice(0, -1);
        document.getElementById("currNumber").innerHTML = numberLine;
        console.log(numberLine);

    }
    return {
        whichNumber: whichNumber,
        clearNumbers: clearNumbers,
        calculate: calculate,
        show: show,
        deleteLastNumber: deleteLastNumber
    };
}());
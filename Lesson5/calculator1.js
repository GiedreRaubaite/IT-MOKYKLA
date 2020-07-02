var calculator = (function () {
    var currNumber = document.getElementById("currNumber"),
        result = null
    function calculate() {
        currNumber = document.getElementById("currNumber").innerHTML;
        result = eval(currNumber);
        $('#currNumber').empty().append(result);
    };
    function whichNumber(e) {
        e = e || window.event;
        var target = e.srcElement.innerText
        if
            ($('#currNumber').text() == 0) {
            $('#currNumber').empty().append(target);
        }
        else {
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
        }
        else {
            calculate();
        }
    }
    return {
        whichNumber: whichNumber,
        clearNumbers: clearNumbers,
        calculate: calculate,
        show: show
    };
}());



var calculator = (function () {
        var currNumber = document.getElementById("currNumber"),
        result = null

    function calculate () {
        newVal = 0
        currNumber = document.getElementById("currNumber").innerHTML;
        result = eval(currNumber);
        $('#currNumber').empty().append(result);
    };
    function whichNumber(e) {
        e = e || window.event;
        var target = e.srcElement.innerText
        console.log(target);
        if
            ($('#currNumber').text() == 0) {
            console.log($('#currNumber').text());
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
        console.log(result);
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



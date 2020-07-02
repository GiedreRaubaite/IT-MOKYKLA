window.onload = function () {
    var countButton = document.getElementById("count");
    var resetButton = document.getElementById("clear");
    var result = "";
    
    countButton.addEventListener("click", function () {
        calculator.getNumbers();
        result = calculator.add().subtract().multiply().divide().show();
    });
    resetButton.addEventListener("click", function () {
        calculator.clearNumbers();
    });
}
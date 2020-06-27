$('input').on('keydown', function (e) {
    if (e.which == 13) {
        calculator.calculate();
    }
});
document.addEventListener('keydown', function(e) {
    let keyPressed = null;
    keyPressed = e.key;

    switch (e.key) {
        case "1":
            calculator.whichNumber(keyPressed);
            break;
        case "2":
            calculator.whichNumber(keyPressed);
            break;
        case "3":
            calculator.whichNumber(keyPressed);
            break;
        case "4":
            calculator.whichNumber(keyPressed);
            break;
        case "5":
            calculator.whichNumber(keyPressed);
            break;
        case "6":
            calculator.whichNumber(keyPressed);
            break;
        case "7":
            calculator.whichNumber(keyPressed);
            break;
        case "8":
            calculator.whichNumber(keyPressed);
            break;
        case "9":
            calculator.whichNumber(keyPressed);
            break;
        case "0":
            calculator.whichNumber(keyPressed);
            break;
        case "-":
            calculator.whichNumber(keyPressed);
            break;
        case "+":
            calculator.whichNumber(keyPressed);
            break;
        case "*":
            calculator.whichNumber(keyPressed);
            break;
        case "/":
            calculator.whichNumber(keyPressed);
            break;
        case ".":
            calculator.whichNumber(keyPressed);
            break;
        case "Enter":
            calculator.calculate();
            break;
        case "Backspace":
            calculator.deleteLastNumber();
            break;
        case "Esc":
            calculator.clearNumbers();
            break;
        case "Escape":
            calculator.clearNumbers();
            break;
        default:
            return;
    }

});
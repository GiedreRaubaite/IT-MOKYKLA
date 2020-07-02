var calculator = function () {
    var a, b, c, d, e
    return {
        add: function () {
            b = a + b;
            return this;
        },
        subtract: function () {
            c = b - c;
            return this;
        },
        multiply: function () {
            d = c * d;
            return this;
        },
        divide: function () {
            if (e == 0) {
                alert("Can't divide by 0");
                return 0;
            }
            e = d / e;
            return this;
        },
        getNumbers: function () {
            a = parseInt(document.getElementById('1').value)
            b = parseInt(document.getElementById('2').value)
            c = parseInt(document.getElementById('3').value)
            d = parseInt(document.getElementById('4').value)
            e = parseInt(document.getElementById('5').value)
        },
        show: function () {
            if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)) {
                alert("It's not a number!");
                document.getElementById("result").innerHTML = "Try again :)";
            }
            else {
                document.getElementById("result").innerHTML = e;
            }
        },
        clearNumbers: function () {
            $(".input-group-text").each(function () {
                $(this).val(null);
            });
            document.getElementById("result").innerHTML = null;
        }
    };
}();

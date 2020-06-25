$(document).ready(function () {
    var colorsFromCL = [];
    //Get Palette ONLOAD 
    GetPalette();
    $(document).ajaxComplete(function (e, xhr, options) {
        PutPalette();
        $(e.currentTarget).unbind('ajaxComplete');


    });
    //Change Palette voor Background Changing onclick 
    $('#btnbackground').click(function () {
        GetPalette();
        PutPalette();

    });
    //AJAX 
    function GetPalette() {
        $.ajax({
            url: 'http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=?"',
            dataType: 'jsonp',
            data: {
                format: 'json',
                numResults: 50,
                orderCol: 'score',
            },
            jsonp: 'jsonCallback',
            success: function (data) {
                $.each(data, function (i, palette) {
                    for (i = 0; i < 5; i++) {
                        $.each(palette.colors, function (i, color) {
                            colorsFromCL.length = i;
                            colorsFromCL.push(color);
                            console.log(colorsFromCL);
                            colorsFromCL;
                        })
                    }
                })
            }
        });
    };
    //Set Palette colors to the <li> backgrounds
    function PutPalette() {
        for (i = 0; i < 5; i++) {
            var x = $('li:nth-child(' + (i + 1) + ')');
            x.css({ backgroundColor: '#' + colorsFromCL[i] });
        };
    };
    //Change Theme Background Colors of every .item 
    function ChangeThemeColor() {
        for (i = 0; i < 5; i++) {
            var x = $('.item' + (i + 1));
            x.css({ backgroundColor: '#' + colorsFromCL[i] });
            $(".grid-container").css('background-color', colorsFromCL[2]);
        };

    }

    //Change Theme onclick

    $('#btn').click(function () {
        GetPalette();
        ChangeThemeColor();


    });


    //Change body background on hover
    $('li').hover(function () {
        var ColorValue = $(this).css('background-color');
        $('body').css('background-color', ColorValue);
    });







})

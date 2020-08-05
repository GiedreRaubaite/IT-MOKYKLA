$(document).ready(function () {
    var colorPallete = [];

    getNewPallete();

    $('#btnbackground').click(function () {
        getNewPallete().then(changeListItemColor());
    });

    $('#btn').click(function () {
        getNewPallete().then(changeThemeColor());
    });

    $('li').hover(changeBackgroundColor);

    function getNewPallete() {
        return $.ajax({
            url: 'http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=?"',
            dataType: 'jsonp',
            data: {
                format: 'json',
                numResults: 50,
                orderCol: 'score',
            },
            jsonp: 'jsonCallback',
            success: function (data) {
                colorPallete = [...data[0].colors];
            }
        });
    };

    function changeBackgroundColor() {
        $('body').css('background-color', $(this).css('background-color'));
    }

    //Set Palette colors to the <li> backgrounds
    function changeListItemColor() {
        for (i = 0; i < 5; i++) {
            var element = $('li:nth-child(' + (i + 1) + ')');
            element.css({ backgroundColor: '#' + colorPallete[i] });
        };
    };

    //Change Theme Background Colors of every .item 
    function changeThemeColor() {
        for (i = 0; i < 5; i++) {
            var element = $('.item' + (i + 1));
            element.css({ backgroundColor: '#' + colorPallete[i] });
            $('.grid-container').css('background-color', colorPallete[2]);
        };
    }
});

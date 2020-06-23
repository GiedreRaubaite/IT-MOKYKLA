$(document).ready(function(){

     
                $.ajax({
                    url: 'http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=?"',
                    dataType:'jsonp',
                    data: {
                        format: 'json',
                        numResults: 50,
                        orderCol: 'score',
                    },
                    jsonp: 'jsonCallback',
                    success: function(data){
                          $.each(data, function(i, palette){
                              for (i = 0; i < 5; i++) {
                          $.each(palette.colors, function(i, color){
                            console.log(i);
                            var x =  $('li:nth-child(' + (i + 1) +')');
                             x.css({backgroundColor: '#'+ color});
                                  
                                });
                              };
                           });
                    }
                  });
            $('li').hover(function(){
              var ColorValue = $(this).css('background-color');
              $('body').css('backgroundColor', ColorValue);
            })
            $("#btn").on('click',function(){

            var ColorValue1 = $('li:nth-child(1)').css('background-color');
            var ColorValue2 = $('li:nth-child(2)').css('background-color');
            var ColorValue3 = $('li:nth-child(3)').css('background-color');
            var ColorValue4 = $('li:nth-child(4)').css('background-color');
            var ColorValue5 = $('li:nth-child(5)').css('background-color');


            $(".item1").css("background-color", ColorValue1 );
            $(".item2").css("background-color", ColorValue2 );
            $(".item3").css("background-color", ColorValue3 );
            $(".item4").css("background-color", ColorValue4 );
            $(".item5").css("background-color", ColorValue5 );
            $(".grid-container").css("background-color", ColorValue3);


          });
})

$(document).ready(function(){

       
         $('#btn').on('click', function(){

          $("#form").validate({
               rules: {
                   "name": {
                       required: true,
                       minlength: 5
                   },
                   "email": {
                       required: true,
                       email: true
                   },
                   "password":{
                        required:true,
                        minlength:6
                   }
               },
                submitHandler: function (form) { 
                   $(".success").show(function(){
                        $('input').focus(function(){
                         $(".success").css('display', 'none');                         

                        })
                   }); 
                   
               },
              
          });

     });

    
})  
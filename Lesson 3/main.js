$(document).ready(function(){

       
          $('#btn').on('click', function(){

         $('#form').validate();
         var form = $('#form').validate();
         var email = $("#inputEmail3").val();
         var username = $("#inputUsername3").val();
         var password = $("#inputPassword3").val();



              console.log(email+username+password);
         
        

    });
     })
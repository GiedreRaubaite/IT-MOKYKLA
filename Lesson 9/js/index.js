

/*count input quantity */
var inputSum = document.querySelectorAll(".quantity");

inputSum.forEach(function(element){
    element.addEventListener('click', function(){
var reiksme = [];

inputSum.forEach(function(element){

        reiksme.push(parseInt(element.value));
        return reiksme; 
});
var sum = reiksme.reduce(function(a, b) { return a + b; });
console.log(sum);

document.getElementById("countingText").innerHTML = `<p>There are ${sum} items in your <i class='fas fa-shopping-cart'></i> </p>`;
});
});











$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
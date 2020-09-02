var showDate = function (){

var dateElement = document.getElementById("date");
var options = {weekday: "long", month:"short", day:"numeric"};
var today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

}
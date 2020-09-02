function filtering(b) {
  return b.complete === false;
};
var itemsLeft = function (x) {
  var arrFiltered = x.filter(filtering);
  document.getElementById("itemsLeft").innerHTML = arrFiltered.length + " items left"
};


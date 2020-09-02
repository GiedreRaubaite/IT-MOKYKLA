var completeToDo = function(a) {
	var ListElement = LIST.find(({ id })=> id === parseInt(a.id));
	a.parentNode.querySelector(".text").classList.toggle("lineThrough");
if (a.classList.contains("fa-circle-thin")) {
	a.classList.remove("fa-circle-thin");
	a.classList.add("fa-check-circle");
}
else {a.classList.remove("fa-check-circle");
	a.classList.add("fa-circle-thin");
};
if (ListElement.complete == false) {
	 return ListElement.complete = true }
else {
	return ListElement.complete = false}
}




	

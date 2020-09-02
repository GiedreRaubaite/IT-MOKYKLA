var LIST = [];
var id = 0;


//show date
showDate();
//when press enter - addToDo
document.addEventListener("keyup", function (event) {
	if (event.keyCode == 13) {
		var toDo = document.getElementById("input").value;
		if (toDo) {
			adToDo(toDo, id, false);
			id++;
			itemsLeft(LIST);
		}
		else {return; }
	}
});
//when press plus - addToDo
document.getElementById("plus").addEventListener("click", function () {
	var toDo = document.getElementById("input").value;
	if (toDo) {
		adToDo(toDo, id, false);
		id++;
		itemsLeft(LIST);
	}
	else { return; }
});
// when press trash - removetoDo 
document.getElementById("list").addEventListener("click", function (event) {
	if (event.target.attributes.title.nodeValue === "delete") {
		removeToDo(event.target);
		updateToDo(LIST);
		itemsLeft(LIST);
	}
	//otherwise - completetoDo 
	else {
		completeToDo(event.target);
		itemsLeft(LIST);
	}
});
//FILTERS 
document.getElementById("completed").addEventListener("click", function (event) {
	showCompleted(LIST);
	event.preventDefault()
});
document.getElementById("active").addEventListener("click", function (event) {
	showActive(LIST);
	event.preventDefault()
});
document.getElementById("all").addEventListener("click", function (event) {
	showAll(LIST);
	event.preventDefault()
});




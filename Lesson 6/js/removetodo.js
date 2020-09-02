var removeToDo = function(a) {
	a.parentNode.parentNode.removeChild(a.parentNode);
};  
var updateToDo = function (LIST) {
var delElement = LIST.find(({ id }) => id === parseInt(event.target.attributes.id.nodeValue));
		for (var i = 0; i < LIST.length; i++) {
			if (LIST[i] === delElement) { LIST.splice(i, 1); }
		}
}
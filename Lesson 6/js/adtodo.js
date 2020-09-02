var adToDo = function (toDo, id, complete) {
        if (toDo.length > 0) {
                LIST.push({
                        name: toDo,
                        id: id,
                        complete: false
                });
                document.getElementById("input").value = "";
        }
        else {
                document.getElementById("input").value = "";
        };
        var text =
                `<li class="item"> 
                <i class="fa fa-circle-thin co" title = "complete" id = ${id}></i> 
                <p class="text"> ${toDo} </p>      
                <i class="fa fa-trash-o de" title = "delete" id = ${id} ></i> `
        var list = document.getElementById("list");
        list.insertAdjacentHTML("beforeend", text);
}



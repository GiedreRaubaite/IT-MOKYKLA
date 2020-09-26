var ToDo = [{ name: "ToDo", tasks: [] }];
var Doing = [{ name: "Doing", tasks: [] }];
var Done = [{ name: "Done", tasks: [] }];
var boardData = [];
/* Add card */
var addCardButtons = document.getElementsByClassName("addCard");
Array.from(addCardButtons).forEach(function (button) {
    button.addEventListener('click', function (evt) {
        var text =
            `<li>
               <i class="delete-button fas fa-times"></i><input type = "text" class="task"><i class="left fas fa-angle-left"></i> <i class="right fas fa-angle-right"></i> 
        </li> `
        evt.target.parentNode.parentNode.children[1].insertAdjacentHTML("beforeend", text);
        var lastAddedInput = evt.target.parentNode.parentNode.children[1].lastElementChild.children[1];
        addNewTask(lastAddedInput);
        updateAddCardText()
    });
});
/* Move card to left column */
document.body.addEventListener('click', function (evt) {
    var toWhichColumn;
    if (evt.target.className === 'left fas fa-angle-left') {
        var fromWhichColumn = evt.target.parentNode.parentNode.parentNode.id;
        fromWhichColumn === 'Doing' ? toWhichColumn = 'ToDo'
            : fromWhichColumn === 'Done' ? toWhichColumn = 'Doing'
                : toWhichColumn = 'ToDo';
        changeCardPosition(evt, toWhichColumn, fromWhichColumn);
        updateBoardData(evt, toWhichColumn, fromWhichColumn);
        updateAddCardText();
    };
/* Move card to right column */
    if (evt.target.className === 'right fas fa-angle-right') {
        var fromWhichColumn = evt.target.parentNode.parentNode.parentNode.id;
        fromWhichColumn === 'Doing' ? toWhichColumn = 'Done'
            : fromWhichColumn === 'ToDo' ? toWhichColumn = 'Doing'
                : toWhichColumn = 'Done';
        changeCardPosition(evt, toWhichColumn, fromWhichColumn);
        updateBoardData(evt, toWhichColumn, fromWhichColumn);
        updateAddCardText();
    };
});
/* Delete card */
document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'delete-button fas fa-times') {
        boardData.forEach(function (element, i) {
            find = element.tasks.findIndex(findElement, evt.target.parentNode.id);
            if (find >= 0) {
                element.tasks.splice(find, 1);
                updateAddCardText();
                evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
            };
        });
    }
});
/* FocusOut, FocusIn events to note changes, edits in card inputs */
document.body.addEventListener('focusout', function (evt) {
    if (evt.target.className === 'task') {
        editTask(evt)
    };
});
document.body.addEventListener("focusin", function (evt) {
    if (evt.target.className === 'task') {
        editTask(evt);
        evt.target.addEventListener("keyup", function (evt) {
            if (evt.keyCode === 13) {
                document.activeElement.blur();
            };
        });
    };
}, false);
/*Edit existing Task in boardData array */ 
function editTask(evt) {
    if (boardData.length > 0) {
        boardData.forEach(function (element) {
            var find = element.tasks.find(findElement, evt.target.parentNode.id);
            if (find) {
                find.task = evt.target.value;
            }
        });
    }
};
/*Add new task in boardData array */
function addNewTask(evt) {
    var whichArray = eval(evt.parentNode.parentNode.parentNode.id);
    var taskID = Math.random();
    var TASKtext = evt.value;
    evt.parentNode.setAttribute("id", taskID.toString());
    whichArray[0].tasks.push({
        task: TASKtext,
        id: taskID
    });
    boardData = [...ToDo, ...Doing, ...Done];
    console.log(boardData);
};
/*Update boardData array when the elements are moved from one column to another */
function updateBoardData(evt, toWhichColumn, fromWhichColumn) {
    fromWhichColumn = eval(fromWhichColumn);
    toWhichColumn = eval(toWhichColumn);
    var find = fromWhichColumn[0].tasks.find(findElement, evt.target.parentNode.id);
    if (find) {
        toWhichColumn[0].tasks.push({
            task: find.task,
            id: find.id
        });
        var indexOfFind = fromWhichColumn[0].tasks.indexOf(find)
        fromWhichColumn[0].tasks.splice(indexOfFind, 1);
    };
};
/* Find testing function */
function findElement(element) {
    return ((element.id).toString()) === this.toString();
};
/* Update Addcard text according boardData data */
function updateAddCardText() {
    if (boardData.length > 0) {
        document.getElementById("AddCard1").innerHTML = (ToDo[0].tasks.length > 0) ?"Add another card" : "Add card"
        document.getElementById("AddCard2").innerHTML = (Doing[0].tasks.length > 0) ?"Add another card" : "Add card"
        document.getElementById("AddCard3").innerHTML = (Done[0].tasks.length > 0) ?"Add another card" : "Add card"           
    }
}
function changeCardPosition(evt, toWhichColumn, fromWhichColumn) {
    fromWhichColumn = eval(fromWhichColumn);
    var find = fromWhichColumn[0].tasks.find(findElement, evt.target.parentNode.id);
    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
    value = evt.target.parentNode.children[1].value;
    text =
        `<li id = "${find.id}">
        <i class="delete-button fas fa-times"></i><input type = "text" class="task" value = "${value}"><i class="left fas fa-angle-left"></i> <i class="right fas fa-angle-right"></i> 
 </li> `
    var targetColumn = document.getElementById(toWhichColumn);
    targetColumn.children[1].insertAdjacentHTML("beforeend", text);
}


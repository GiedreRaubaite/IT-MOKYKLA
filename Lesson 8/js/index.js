var ToDo = [{ name: "ToDo", tasks: [] }];
var Doing = [{ name: "Doing", tasks: [] }];
var Done = [{ name: "Done", tasks: [] }];
var boardData = [];
/* 1 click event for add card, move card, delete card */
document.body.addEventListener('click', function (evt) {
    var text =
        `<li>
               <i class="fas fa-times"></i><input type = "text" class="task"><i class="fas fa-angle-left"></i> <i class="fas fa-angle-right"></i> 
        </li> `
    /* Add card */
    if (evt.target.className === 'addCard') {
        evt.target.parentNode.parentNode.children[1].insertAdjacentHTML("beforeend", text);
        var lastAddedInput = evt.target.parentNode.parentNode.children[1].lastElementChild.children[1];
        /*bind focusin event to put the new card data into boardData array */
        lastAddedInput.dispatchEvent(
            new MouseEvent('focusin', {
                bubbles: true,
                cancelable: true,
                view: window,
                evt: lastAddedInput
            }));
        /*change text if there are cards made*/
        updateAddCardText()
    };
    /* Move card to left column */
    if (evt.target.className === 'fas fa-angle-left') {
        var toWhichColumn;
        /* find from which to which column element is moved */
        var fromWhichColumn = evt.target.parentNode.parentNode.parentNode.id;
        fromWhichColumn === 'Doing' ? toWhichColumn = 'ToDo'
            : fromWhichColumn === 'Done' ? toWhichColumn = 'Doing'
                : toWhichColumn = 'ToDo';
        
        /* make new li element with the value of previous input */
        value = evt.target.parentNode.children[1].value;
        text =
            `<li>
               <i class="fas fa-times"></i><input type = "text" class="task" value = "${value}"><i class="fas fa-angle-left"></i> <i class="fas fa-angle-right"></i> 
		</li> `
        var targetColumn = document.getElementById(toWhichColumn);
        targetColumn.children[1].insertAdjacentHTML("beforeend", text);
          /*update data in BoardData */
          updateBoardData(evt, toWhichColumn, fromWhichColumn);
        evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
        /*change the text if the column is empty/filled now */
        updateAddCardText();
    };
    /* Move card to right column */
    if (evt.target.className === 'fas fa-angle-right') {
        var toWhichColumn;
        var fromWhichColumn = evt.target.parentNode.parentNode.parentNode.id;
        fromWhichColumn === 'Doing' ? toWhichColumn = 'Done'
            : fromWhichColumn === 'ToDo' ? toWhichColumn = 'Doing'
                : toWhichColumn = 'Done';
        value = evt.target.parentNode.children[1].value;
        text =
            `<li>
               <i class="fas fa-times"></i><input type = "text" class="task" value = "${value}"><i class="fas fa-angle-left"></i> <i class="fas fa-angle-right"></i> 
		</li> `
        var targetColumn = document.getElementById(toWhichColumn);
        targetColumn.children[1].insertAdjacentHTML("beforeend", text);
        updateBoardData(evt, toWhichColumn, fromWhichColumn);
        evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
        updateAddCardText();
    };
    /* Delete card */
    if (evt.target.className === 'fas fa-times') {
        for (i = 0; i < boardData.length; i++) {
            var find = boardData[i].tasks.findIndex(findElement, evt.target.parentNode.id);
            if (find >= 0) {
                boardData[i].tasks.splice(find, 1);
                updateAddCardText();
                evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
            }
        };
    }
});
/* FocusOut, FocusIn and Press enter events to note changes in card inputs */
document.body.addEventListener('focusout', function (evt) {
    if (evt.target.className === 'task') {
        addATaskIfNotExists(evt)
    };
});
document.body.addEventListener("focusin", function (evt) {
    if (evt.target.className === 'task') {
        addATaskIfNotExists(evt);
        evt.target.addEventListener("keyup", function (evt) {
            if (evt.keyCode === 13) {
                document.activeElement.blur();
            };
        });
    };
}, false);
/*AddATaskIfNotExists - Checks tasks if they already exist in boardData, and update them, if not - add new tasks with function addNewTask*/
function addATaskIfNotExists(evt) {
    if (boardData.length > 0) {
        var arrayOfUndefinedFinds = [];
        boardData.forEach(function (element) {
            var find = element.tasks.find(findElement, evt.target.parentNode.id);
            if (find) {
                find.task = evt.target.value;
            }
            else {
                arrayOfUndefinedFinds.push("undefined");
            }
            if (arrayOfUndefinedFinds.length >= 3) {
                addNewTask(evt)
            };
        });
    }
    else addNewTask(evt);
};
/*Add new task  */
function addNewTask(evt) {
    var whichArray = eval(evt.target.parentNode.parentNode.parentNode.id);
    var taskID = Math.random();
    evt.target.parentNode.setAttribute("id", taskID);
    var thisTASK = evt.target.value;
    whichArray[0].tasks.push({
        task: thisTASK,
        id: taskID
    });
    boardData = [...ToDo, ...Doing, ...Done];
    console.log(boardData);
};
/*Update boardData when the elements are moved from one column to another */
function updateBoardData(evt, toWhichColum, fromWhichColumn) {
    var targetColumn = document.getElementById(toWhichColum);
    toWhichColum = eval(toWhichColum);
    fromWhichColumn = eval(fromWhichColumn);
    var find = fromWhichColumn[0].tasks.find(findElement, evt.target.parentNode.id);
    if (find) {
        targetColumn.children[1].lastElementChild.setAttribute("id", find.id);
        toWhichColum[0].tasks.push({
            task: find.task,
            id: find.id
        });
        fromWhichColumn[0].tasks.splice(find, 1);
    };
};
/* Find testing function */
function findElement(element) {
    return ((element.id).toString()) === this.valueOf();
};
/* Update Addcard text according boardData data */
function updateAddCardText() {
    if (boardData.length > 0) {
        if (ToDo[0].tasks.length > 0) {
            document.getElementById("AddCard1").innerHTML = "Add another card"
        } else {
            document.getElementById("AddCard1").innerHTML = "Add card"
        };
        if (Doing[0].tasks.length > 0) {
            document.getElementById("AddCard2").innerHTML = "Add another card"
        } else {
            document.getElementById("AddCard2").innerHTML = "Add card"
        };
        if (Done[0].tasks.length > 0) {
            document.getElementById("AddCard3").innerHTML = "Add another card"
        } else {
            document.getElementById("AddCard3").innerHTML = "Add card"
        };
    }
}
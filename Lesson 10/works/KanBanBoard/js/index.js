let boardData = [{ name: 'ToDo', tasks: [] }, { name: 'Doing', tasks: [] }, { name: 'Done', tasks: [] }];
/* Add card */
const addCardButtons = document.getElementsByClassName("addCard");
[...addCardButtons].forEach(function (button) {
    button.addEventListener('click', function (evt) {
        let text =
            `<li>
               <i class="delete-button fas fa-times"></i><input type = "text" class="task"><i class="left fas fa-angle-left"></i> <i class="right fas fa-angle-right"></i> 
        </li> `
        evt.target.closest('.content').children[1].insertAdjacentHTML("beforeend", text);
        let lastAddedInput = evt.target.closest('.content').children[1].lastElementChild.children[1];
        let whichColumn = evt.target.closest('.content').id;
        let taskID = Math.random();
        let taskText = lastAddedInput.value;
        lastAddedInput.parentNode.setAttribute("id", taskID.toString());
        boardData.find(FindArray, whichColumn).tasks.push({
            task: taskText,
            id: taskID
        });
        console.log(boardData);
        updateAddCardText()
    });
});
/* Move card to left column */
document.body.addEventListener('click', function (evt) {
    let targetColumn;
    if (evt.target.className === 'left fas fa-angle-left') {
        let lastColumn = evt.target.closest('.content').id;
        lastColumn === 'Doing' ? targetColumn = 'ToDo'
            : lastColumn === 'Done' ? targetColumn = 'Doing'
                : targetColumn = 'ToDo';
        changeCardPosition(evt, targetColumn, lastColumn);
        updateBoardData(evt, targetColumn, lastColumn);
        updateAddCardText();
    };
    /* Move card to right column */
    if (evt.target.className === 'right fas fa-angle-right') {
        let lastColumn = evt.target.closest(`.content`).id;
        lastColumn === 'Doing' ? targetColumn = 'Done'
            : lastColumn === 'ToDo' ? targetColumn = 'Doing'
                : targetColumn = 'Done';
        changeCardPosition(evt, targetColumn, lastColumn);
        updateBoardData(evt, targetColumn, lastColumn);
        updateAddCardText();
    };
});
/* Delete card */
document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'delete-button fas fa-times') {
        boardData.forEach(function (element) {
            dltEl = element.tasks.find(findElement, evt.target.parentNode.id);
            boardData = boardData.map((element) => {
                return { ...element, tasks: element.tasks.filter((el) => el !== dltEl) }
            })
        });
        updateAddCardText();
        evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
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
            var editedEl = element.tasks.find(findElement, evt.target.parentNode.id);
            if (editedEl) {
                editedEl.task = evt.target.value;
            }
        });
    }
};
/*Update boardData array when the elements are moved from one column to another */
function updateBoardData(evt, toWhichColumn, fromWhichColumn) {
    let movedEl = boardData.find(FindArray, fromWhichColumn).tasks.find(findElement, evt.target.parentNode.id);
    if (movedEl) {
        boardData.find(FindArray, toWhichColumn).tasks.push({
            task: movedEl.task,
            id: movedEl.id
        });
        boardData = boardData.map((element) => {
            return { ...element, tasks: element.tasks.filter((el) => el !== movedEl) }
        })
    };
};
/* Find testing function */
function findElement(element) {
    return ((element.id).toString()) === this.toString();
};
function FindArray(element) {
    return (element.name) === this.toString();
};
/* Update Addcard text according boardData data */
function updateAddCardText() {
    if (boardData.length > 0) {
        document.getElementById("AddCard1").innerHTML = (boardData[0].tasks.length > 0) ? "Add another card" : "Add card"
        document.getElementById("AddCard2").innerHTML = (boardData[1].tasks.length > 0) ? "Add another card" : "Add card"
        document.getElementById("AddCard3").innerHTML = (boardData[2].tasks.length > 0) ? "Add another card" : "Add card"
    }
}
function changeCardPosition(evt, targetColumn, lastColumn) {
    let movedEl = boardData.find(FindArray, lastColumn).tasks.find(findElement, evt.target.parentNode.id);
    evt.target.closest('.list').removeChild(evt.target.parentNode);
    value = evt.target.parentNode.children[1].value;
    text =
        `<li id = "${movedEl.id}">
        <i class="delete-button fas fa-times"></i><input type = "text" class="task" value = "${value}"><i class="left fas fa-angle-left"></i> <i class="right fas fa-angle-right"></i> 
 </li> `
    let targetColumnDiv = document.getElementById(targetColumn);
    targetColumnDiv.children[1].insertAdjacentHTML("beforeend", text);
}


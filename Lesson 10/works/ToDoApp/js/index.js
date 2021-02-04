showDate();
const tasks = [];

function createNewId() {
    return `id-${Math.random()}`;
}

function addTask() {
    const toDo = document.getElementById("newTaskInput").value;
    if (toDo) {
        const item = {
            name: toDo,
            id: createNewId(),
            complete: false
        }
        tasks.push(item);
        document.getElementById("newTaskInput").value = "";
        const list = document.getElementById("list");
        list.insertAdjacentHTML("beforeend", printTask(item));
        updateRemainingTaskCount(tasks);

    } else { return; }
};

function removeTask(target = {}) {
    target.parentNode.parentNode.removeChild(target.parentNode);
    const targetId = target.dataset.id;
    const delElement = tasks.find(({ id }) => id === targetId);
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i] === delElement) { tasks.splice(i, 1); }
    }
};

function completeTask(target = {}) {
    const ListElement = tasks.find(({ id }) => id === target.dataset.id);
    target.parentNode.querySelector(".text").classList.toggle("lineThrough");
    if (target.classList.contains("fa-circle-thin")) {
        target.classList.remove("fa-circle-thin");
        target.classList.add("fa-check-circle");
    } else {
        target.classList.remove("fa-check-circle");
        target.classList.add("fa-circle-thin");
    };
    if (ListElement && !ListElement.complete) {
        ListElement.complete = true
    } else {
        ListElement.complete = false
    }
}

document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        addTask();
    }
});
document.getElementById("plus").addEventListener("click", addTask);
document.getElementById("list").addEventListener("click", function(event) {
    const eventTargetTitle = event.target.attributes.title;
    if (eventTargetTitle && eventTargetTitle.nodeValue === "delete") {
        removeTask(event.target);
        updateRemainingTaskCount(tasks);
    } else if (eventTargetTitle && eventTargetTitle.nodeValue === "complete") {
        completeTask(event.target);
        updateRemainingTaskCount(tasks);

    };
});
document.getElementById("completed").addEventListener("click", function(event) {
    showCompleted(tasks);
    event.preventDefault()
});
document.getElementById("active").addEventListener("click", function(event) {
    showActive(tasks);
    event.preventDefault()
});
document.getElementById("all").addEventListener("click", function(event) {
    showAll(tasks);
    event.preventDefault()
});

function showActive() {
    const allTasks = [];
    const activeTasks = tasks.filter(task => task.complete === false);
    activeTasks.forEach(i => allTasks.push(printTask(i)));
    printTaskList(allTasks)
};

function showAll() {
    const allTasks = [];
    tasks.forEach(function(task) {
        if (task.complete == false) {
            allTasks.push(printTask(task));
        } else {
            allTasks.push(printTask(task, true));
        }
    });
    printTaskList(allTasks);
};

function showCompleted() {
    const allTasks = [];
    const completed = tasks.filter(task => task.complete === true);
    completed.forEach(i => allTasks.push(printTask(i, true)));
    printTaskList(allTasks);
};

function printTask(item, isComplete = false) {
    return isComplete ? `<li class="item" data-id=${item.id}> 
		  <i class="fa fa-check-circle co" title="complete" data-id = ${item.id}></i> 
		  <p class="text lineThrough"> ${item.name} </p>      
		  <i class="fa fa-trash-o de" title= "delete" data-id=${item.id} ></i>
		  </li> ` :
        `<li class="item" data-id=${item.id}> 
		  <i class="fa fa-circle-thin co" title="complete" data-id = ${item.id}></i> 
		  <p class="text"> ${item.name} </p>      
		  <i class="fa fa-trash-o de" title= "delete" data-id=${item.id} ></i>
		  </li> `
}

function printTaskList(tasks) {
    const list = document.getElementById('list');
    list.innerHTML = '';
    list.insertAdjacentHTML("beforeend", tasks.join(''));
}

function updateRemainingTaskCount() {
    const remaining = tasks.filter(task => task.complete === false);
    document.getElementById("itemsLeft").innerHTML = `${remaining.length} items left`;
};

function showDate() {
    const dateElement = document.getElementById("date");
    const options = { weekday: "long", month: "short", day: "numeric" };
    const today = new Date();
    dateElement.innerHTML = today.toLocaleDateString("en-US", options);
}
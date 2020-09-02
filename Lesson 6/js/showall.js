var showAll = function(x){
var ul = document.getElementById('list');
ul.innerHTML = '';
x.forEach(function(item) {
if (item.complete == false) {
var text =  
                `<li class="item"> 
                <i class="fa fa-circle-thin co" title = "complete" id = ${item.id}></i> 
                <p class="text"> ${item.name} </p>      
                <i class="fa fa-trash-o de" title = "delete" id = ${item.id} ></i> `
        var list = document.getElementById("list");
        list.insertAdjacentHTML("beforeend", text);
}
else {
        var text =  
                `<li class="item"> 
                <i class="fa fa-check-circle co" title = "complete" id = ${item.id}></i> 
                <p class="text lineThrough"> ${item.name} </p>      
                <i class="fa fa-trash-o de" title = "delete" id = ${item.id} ></i> `
        var list = document.getElementById("list");
        list.insertAdjacentHTML("beforeend", text);
}
});
};
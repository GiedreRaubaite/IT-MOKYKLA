function filteringActive (b){
        return b.complete === false;
};

var showActive = function(x){
var ul = document.getElementById('list');
ul.innerHTML = '';
var active = x.filter(filteringActive);
active.forEach(function(item){
var text =  
                `<li class="item"> 
                <i class="fa fa-circle-thin co" title = "complete" id = ${item.id}></i> 
                <p class="text"> ${item.name} </p>      
                <i class="fa fa-trash-o de" title = "delete" id = ${item.id} ></i> `
        var list = document.getElementById("list");
        list.insertAdjacentHTML("beforeend", text);
          
        });
};

        
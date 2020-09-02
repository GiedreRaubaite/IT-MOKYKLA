function filteringComplete (b){
  var compArr = (b.complete === true);
  return compArr ;
};

var showCompleted = function(x){
var completed = x.filter(filteringComplete);
var ul = document.getElementById('list');
ul.innerHTML = '';
completed.forEach(function(item){
var text =  
                `<li class="item"> 
                <i class="fa fa-check-circle co" title = "complete" id = ${item.id}></i> 
                <p class="text lineThrough"> ${item.name} </p>      
                <i class="fa fa-trash-o de" title = "delete" id = ${item.id} ></i> `
        var list = document.getElementById("list");
        list.insertAdjacentHTML("beforeend", text);
          });    
};


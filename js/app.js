//SELECT THE ELEMENTS//
var clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");  
var input = document.getElementById ("input"); 


//CLASS NAMES// 
const CHECK = "fa fa-check-circle";
const UNCHECK  = "fa fa-circle-thin";
const LINE_THROUGH = "linethrough";

//TODAYS DATE//
const today = new Date(); 
const options = {weekday:"long", month: "short", day:"numeric"};
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


//ADD TODO//
function addToDo(toDo){ 
    const position = "beforeend";
    const item = `<li class = "item"> 
     <i class = "fa fa-circle-thin co" job ="complete"
     id ="0"></i> 
     <p class = "text">${toDo}</p> 
     </li>`
    list.insertAdjacentHTML(position, item); 

} 

//ADD AN ITEM// 
//to the list using the enter key//
document.addEventListener("keyup",function(event){ 
    if(event.keyCode == 13){ 
        const toDo = input.value;
        //if the input value is not empty add todo//
        if(toDo){ 
            addToDo(toDo);
        } 
input.value = " ";
    }
    
});

//CLEAR TODO// 



//selectors

const addTask= document.querySelector("#task-enter");
const submit=document.querySelector("#submit");
const list=document.querySelector(".task-list");
const selector=document.querySelector("#filter");
const delall=document.querySelector(".del-all");
const counter =document.querySelector(".counter")
var total=0;
//eventlisteners

submit.addEventListener("click",tasks);
list.addEventListener("click",taskbuttons);
selector.addEventListener("click",select);
delall.addEventListener("click",endall);

//functions

document.querySelector('.task-list').innerHTML="";

//for the counter
function tasks(event){
    
//preventing page from reloading
event.preventDefault();
if(addTask.value===""){
    alert("enter a task..dont be shy");
    return;
}
//creating the task stacking section:
//creating a div for task and the buttons

const tododiv= document.createElement('div');
tododiv.classList.add("todo-div");

//creating a listelement
const task= document.createElement('li');
task.classList.add("task");
tododiv.appendChild(task);
task.innerText=addTask.value;

//creating a delete button
const del=document.createElement('button');
del.classList.add("del-button");
del.innerHTML='<i class="fa-solid fa-trash-can" style="color: #b3b8c1;"></i>';
tododiv.appendChild(del);

//creating a check button
const check = document.createElement('button');
check.classList.add("check-button");
check.innerHTML='<i class="fa-solid fa-square-check fa-2xl" style="color: #1b371b;"></i>';
tododiv.appendChild(check);

list.appendChild(tododiv);


total++;
counter.innerHTML="Total-Tasks:"+total;
//to refresh the addtask input.
addTask.value="";
}

//adding functionality to del and check buttons
function taskbuttons(e) {
    const item=e.target;

    if(item.classList[0]==='del-button')
    {
        const action = item.parentElement;
        action.remove();
        total--;
        counter.innerHTML="Total-Tasks:"+total;
        
    }

    if(item.classList[0]==='check-button'){
        const action=item.parentElement;
        action.classList.toggle("completed");
        
    }
    
}

//adding filter button's functionality
function select(e){
    const dropdown = list.childNodes;
    console.log(dropdown);
    dropdown.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;
            
            case "completed":
                if(todo.classList.contains('completed'))
                {
                    todo.style.display='flex';
                }else{
                    todo.style.display='none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed'))
                {
                    todo.style.display='flex';
                
                }else{
                    todo.style.display='none';
                }
                break;
        }

    })
}

//adding delete all functionality
    function endall(e){
        document.querySelector('.task-list').innerHTML="";
        counter.innerHTML="Total-Tasks:0";
        total=0;
      }



